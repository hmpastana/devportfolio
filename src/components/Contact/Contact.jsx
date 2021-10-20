import React, {Component} from 'react'
import emailjs, { init } from 'emailjs-com';
import './Contact.css';
    
class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }
    componentDidMount() {
        init('user_UzV3tnINWHUk9Wx43sYFX');
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var templateParams = {
            from_name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };
        
        emailjs.send('service_qy5zspe', 'template_pk57foi', templateParams)
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
            });
        
        this.setState({
            name: "",
            email: "",
            message: ""
        })

    }
    render() {
        return (
            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <h4 className="text-uppercase text-center">Contact</h4>
                            <p className="text-center">Want to work on a project together?</p>
                            <br />
                        

                            <form className="row" onSubmit={this.handleSubmit}>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}

                                    />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        name="message"
                                        value={this.state.message}
                                        onChange={this.handleChange}

                                    ></textarea>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <button
                                        type="submit"
                                        className="btn btn-warning rounded-pill"
                                    >
                                        Contact me
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact