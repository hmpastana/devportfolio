import React from 'react'
import { Link } from 'react-router-dom';
import './Projects.css';
import photosnap from '../../assets/projects/photosnap.png';
import pig_game from '../../assets/projects/pig-game.png';
import todo from '../../assets/projects/todo.png';
import casibus from '../../assets/projects/casibus.png';
import flydoctor from '../../assets/projects/flydoctor.png';


export default function Projects() {
    return (
        <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="projects-content">
                            <h4 className="text-uppercase text-center">
                                Projects
                            </h4>
                            <br/>
                            <div className="row row-cols-1 row-cols-md-2 g-4">
                                <div className="col-md-4">
                                    <div className="card">
                                    <img src={photosnap} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">PhotoSnap</h5>
                                        <p className="card-text">PhotoSnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell, stories, and connect with others.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                    <img src={pig_game} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Pig Game</h5>
                                        <p className="card-text">Battle it but with another player to see who can roll the dice ok luck.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                    <img src={todo} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Multi-theme todo</h5>
                                        <p className="card-text">Plan your whole day activities using this multi-theme todo app.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                    <img src={casibus} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Casibus</h5>
                                        <p className="card-text">Discover and share critical information with other health professionals in real time.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                    <img src={flydoctor} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Fly Doctor</h5>
                                        <p className="card-text">Doctors - Flight COVID-19 with FlyDoctor. Consult with patients from the comfort of your bed.</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <Link to="/portfolio">
                                        <div className="card card-bg">
                                            <div className="card-body">
                                                <blockquote className="blockquote mb-0">
                                                    <p>If you like my work, see my full portfolio. --&gt;</p>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
