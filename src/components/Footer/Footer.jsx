import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row text-center">
                    <div className="col">
                        <p>&copy; 2020 Hellen.dev </p>
                    </div>
                    <div className="col">
                        <ul className="footer-links">
                            <li>
                                <a href="http://www.linkedin.com"><span className="bi-linkedin"></span> Linkedin</a>
                            </li>
                            <li>
                                <a href="http://www.github.com"><span className="bi-github"></span> Github</a>
                            </li>
                            <li>
                                <a href="http://www.instagram.com"><span className="bi-instagram"></span> Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
