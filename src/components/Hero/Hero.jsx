import React from 'react'
import './Hero.css';
import me from '../../assets/images/me.jpeg'
export default function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={me} alt="Hellen" className="img-fluid rounded-circle" height="10px"/>
                            </div>
                            <div className="col">
                                <h3 className="text-uppercase">Hello, I'm Hellen Pastana, a full stack developer</h3>
                                <br />
                                <p>I'm specialize in web application, mostly in backend development. If you are a business looking to have an online presence or looking to hire, contact me</p>
                                <p>
                                    <a href="#contact" className="btn btn-warning btn-lg rounded-pill">Contact me</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
