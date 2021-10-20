import React from 'react'
import './Portfolio.css';
import photosnap from '../../assets/projects/photosnap.png';
import pig_game from '../../assets/projects/pig-game.png';
import todo from '../../assets/projects/todo.png';
import casibus from '../../assets/projects/casibus.png';
import flydoctor from '../../assets/projects/flydoctor.png';

const projects = [
    {
        title: 'PhotoSnap',
        description: 'PhotoSnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell, stories, and connect with others.',
        image: photosnap,
        link: 'http://www.hellenpastana.com',
    },
    {
        title: 'Pig Game',
        description: 'Battle it but with another player to see who can roll the dice ok luck.',
        image: pig_game,
        link: 'http://www.hellenpastana.com',
    },
    {
        title: 'Multi-theme todo',
        description: 'Plan your whole day activities using this multi-theme todo app.',
        image: todo,
        link: 'http://www.hellenpastana.com',
    },
    {
        title: 'Casibus',
        description: 'Discover and share critical information with other health professionals in real time.',
        image: casibus,
        link: 'http://www.hellenpastana.com',
    },
        {
        title: 'Fly Doctor',
        description: 'Doctors - Flight COVID-19 with FlyDoctor. Consult with patients from the comfort of your bed.',
        image: flydoctor,
        link: 'http://www.hellenpastana.com',
    }
]

export default function Portfolio() {
    return (
        <div className="portfolio-content">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <h4 className="text-uppercase text-center">Portfolio</h4>
                        <br />
                        {projects.map((item, ind) => (
                            <div key={ind} className="row portfolio-item">
                                <div className="col">
                                    <img src={item.image} alt={item.item} className="img-fluid"/>
                                </div>
                                <div className="col">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <p><a href={item.link} target="_blank" rel="noreferrer" className="btn btn-warning rounded-pill">Visit Site</a></p>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
