import React from 'react';
import './login.css'
import {Popup} from "react-popup";

const axios=require('axios');
class Login extends React.Component
{
    constructor(){
        super();
        this.state={
            email:''    ,
                password:''
        }
    }
    sendData=()=>{

            console.log("state",this.state)
            axios.post(
            'http://localhost:5000/logP',
            {
                email:this.state.email,
                password:this.state.password,
            })
            .then((res)=>{
                console.log("Response",res.data)
            })
            .catch((e)=>{
                console.log("Error"+e);
            });

    }
    render()
    {
        return(
            <div className="container-fluid">
                <div className="container-fluid">
                    <div className="row">
                        <div id="polina" className="col-sm-6">
                            <h4 className="text-center">Register as a New Seller</h4>
                            <div className="social text-center">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <a className="btn btn-block btn-social btn-facebook" onclick="_gaq.push(['_trackEvent', 'btn-social', 'click', 'btn-facebook']);">
                                            <span className="fa fa-facebook"></span> Facebook
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a className="btn btn-block btn-social btn-google" onclick="_gaq.push(['_trackEvent', 'btn-social', 'click', 'btn-google']);">
                                            <span className="fa fa-google"></span> Google
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h5>OR</h5>
                            </div>
                            <form className="form-horizontal">

                                <div className="form-group has-success has-feedback">
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="email" name="email" placeholder="Email" required/>
                                            <i className="glyphicon glyphicon-envelope form-control-feedback"></i>
                                    </div>
                                </div>

                                <div className="form-group has-success has-feedback">
                                    <div className="col-sm-12">
                                        <input type="text" className="form-control" id="password" name="password" placeholder="Password" required/>
                                            <i className="glyphicon glyphicon-lock form-control-feedback"></i>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="button" className="btn sellBtn btn-success" onClick={() => {
                                        this.setState({
                                                email: document.getElementById('email').value,
                                                password: document.getElementById('password').value,
                                            },
                                            () => {
                                                console.log('Method Call Back');
                                                this.sendData();

                                            });
                                    }
                                    }
                                    >Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;