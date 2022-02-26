import react from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import contact from './cnt.png'
import '../Styles/Login.css'
function Login() {
    return (
        <div className="login-container">
            
            <div className="row">
            <h2 style={{marginBottom:'20px'}}>Feel Free to Contact Us</h2>
                <div className="col-lg-6">
                    <img src={contact} />
                </div>
                <div className="col-lg-6">
                    <div className="cont-us">
                        
                        <div className="form">
                            <div className="input-row">
                                <input type="text" placeholder="Full Name" />
                                <input type="text" placeholder="Email Address" />
                            </div>
                            <div className="input-row">
                                <input type="text" placeholder="Mobile Number" />
                                <input type="text" placeholder="Your Subject" />
                            </div>
                            <div className="input-full-row">
                                <textarea rows={10} placeholder="Query/Message" />
                            </div>

                            <button className="form-button">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login