import React, {Component} from "react";
import firebase, {auth, provider} from '../firebase.js';
import 'firebase/database';
import 'firebase/storage';
import FileUploader from 'react-firebase-file-uploader';

class Admin extends Component {


// TODO Show the create project form, and all projects currently created.


    constructor() {
        super();
        this.state = {
            username: '',
            projectAll: '',
            image: '',
            imageAlt: '',
            imageURL: '',
            projectTitle: '',
            client: '',
            projectLink: '',
            description: '',
            isUploading: false,
            progress: 0,
            projectInfo: [],
            user: null

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    logout() {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });

    }

    login() {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }

    handleSubmit(e) {
        // alert('Your project was submitted: ' + this.state.value);
        e.preventDefault();
        const projectInfoRef = firebase.database().ref('projectInfo');
        const info = {
            user: this.state.displayName || this.state.user.email,
            imageAlt: this.state.imageAlt,
            imageURL: this.state.imageURL,
            image: this.state.image,
            projectTitle: this.state.projectTitle,
            client: this.state.client,
            projectLink: this.state.projectLink,
            description: this.state.description
        }
        projectInfoRef.push(info);
        this.setState({
            user: ''
        });
    }

    // Image upload handler.

    handleUploadStart = () =>
        this.setState({
            isUploading: true,
            uploadProgress: 0
        });

    handleProgress = progress =>
        this.setState({
            progress
        });

    handleUploadError = error => {
        this.setState({
            isUploading: false
            // Todo: handle error
        });
        console.error(error);
    };

    handleUploadSuccess = async filename => {
        const downloadURL = await firebase
            .storage()
            .ref("project_images")
            .child(filename)
            .getDownloadURL()

        this.setState(oldState => ({
            image: [...oldState.image, filename],
            imageURL: [...oldState.imageURL, downloadURL],
            uploadProgress: 100,
            isUploading: false
        }));
    };

    // Add the content to each of our displayed projects.

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {

                this.setState({user});

            }
        });
        const projectInfoRef = firebase.database().ref('projectInfo');
        projectInfoRef.on('value', (snapshot) => {
            let projectInfo = snapshot.val();
            console.log(snapshot.val());
            let newState = [];
            for (let info in projectInfo) {
                newState.push({
                    id: info,
                    user: projectInfo[info].user,
                    projectTitle: projectInfo[info].projectTitle,
                    client: projectInfo[info].client,
                    projectLink: projectInfo[info].projectLink,
                    description: projectInfo[info].description,
                    image: projectInfo[info].image,
                    imageURL: projectInfo[info].imageURL,
                    imageAlt: projectInfo[info].imageAlt
                });
            }

            this.setState({
                projectInfo: newState
            });
        });


    }


    // Delete projects.


    removeItem(infoID) {
        const projectInfoRef = firebase.database().ref(`/projectInfo/${infoID}`);
        projectInfoRef.remove();

        // const imageRemove = projectInfoRef('/project_images/${infoID}');
        // imageRemove.delete().then(function () {
        //     // File deleted successfully.
        // }).catch(function (error) {
        //     // Uh-oh, an error occurred.
        // });
    }

    render() {
        return (
            <div className='admin_page'>
                <header>
                    <div className='wrapper'>
                        <div className='row'>
                            <h1 className='col-md-4'>Admin Page</h1>
                            <div className="login-button">
                                {this.state.user ?
                                    <button type="button" className='btn btn-link' onClick={this.logout}>Log
                                        Out</button>

                                    :

                                    <button type="button" className='btn btn-link' onClick={this.login}>Log In</button>
                                }
                            </div>
                        </div>
                    </div>
                </header>

                {this.state.user ?
                    <div className='container'>
                        <div className='project-admin row'>
                            <div className='user-profile col-md-4'>
                                <img src={this.state.user.photoURL}/>
                            </div>

                            <section className='add-project col-md-6'>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group notes">
                                        <input type="text" name="username" className="form-control"
                                               placeholder="What's your name?"
                                               defaultValue={this.state.user.displayName || this.state.user.email}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="projectTitle" className="form-control"
                                               placeholder="Project name?"
                                               value={this.state.projectTitle} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="client" className="form-control"
                                               placeholder="Client"
                                               onChange={this.handleChange} value={this.state.client}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="imageAlt" className="form-control"
                                               placeholder="Image alt text..." onChange={this.handleChange}
                                               value={this.state.imageAlt}/>

                                    </div>
                                    <div clasName="form-group">
                                        {this.state.isUploading && <p>Progress: {this.state.uploadProgress}</p>}
                                        {this.state.imageURL && <img src={this.state.imageURL}/>}
                                        <input type="image" name="image" className="form-control-file btn" value={
                                        <FileUploader
                                            accept="image/*"
                                            name="image"
                                            randomizeFilename
                                            storageRef={firebase.storage().ref("project_images")}
                                            onUploadStart={this.handleUploadStart}
                                            onUploadError={this.handleUploadError}
                                            onUploadSuccess={this.handleUploadSuccess}
                                            onProgress={this.handleProgress}
                                            multiple
                                        />}
                                            />
                                        </div>

                                    <div className="form-group">
                                        <input type="link" name="projectLink" className="form-control"
                                               placeholder="Link to project" onChange={this.handleChange}
                                               value={this.state.projectLink}/>
                                    </div>
                                    <div className="form-group">
                                    <textarea name="description" form="project-input" className="form-control"
                                              placeholder="Project information" onChange={this.handleChange}
                                              value={this.state.description}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Add Item</button>
                                </form>
                            </section>
                        </div>
                    </div>
                    :
                    <div className='wrapper'>
                        <p>You must be logged in to add a project.</p>
                    </div>
                }

                <section className='display-project col-md-8'>
                    <div className='wrapper'>
                            {this.state.projectInfo.map((info) => {
                                return (
                                    <div className="project-id" key={info.id}>
                                        <div id="project-display" key={info.id} className="carousel slide"
                                             data-ride="carousel">
                                        <div className="carousel-inner">
                                            <ul>
                                            <li>

                                        {info.imageURL &&
                                        info.imageURL.map(item => {
                                            return (
                                                <div className="carousel-item active">
                                                        <img className="d-block w-100" src={item} alt={info.imageAlt} />
                                                    </div>
                                            );
                                        })}
                                            </li>
                                            </ul>
                                        </div>
                                            <a className="carousel-control-prev" href="#project-display"
                                               role="button" data-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="carousel-control-next" href="#project-display"
                                               role="button" data-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>

                                        <div className='title-info'>
                                            <h3>{info.projectTitle}</h3>
                                            <br/>
                                            <h4>Created by {info.user}</h4>
                                            {info.client}
                                            <br/>
                                            <a href={info.projectLink}>{info.projectLink}</a>
                                            <br/>
                                            {info.description}
                                            <br/>
                                            <br/>
                                            {this.state.user ?
                                                <button type="submit" className="btn btn-outline-danger"
                                                        onClick={() => this.removeItem(info.id)}>Remove project
                                                </button>
                                                :
                                                <div className="wrapper"> Login to manage projects</div>

                                            }
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </section>
            </div>
        );
    }
}

export default Admin;