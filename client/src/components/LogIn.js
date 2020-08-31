import React from 'react';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { logIn } from '../store/auth';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class LogIn extends React.Component {
    state = {
        email: "",
        password: ""
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const csrfToken = Cookies.get('XSRF-TOKEN');
        const form = document.querySelector('.login-form');
        const formData = new FormData(form);
        const body = {};

        for (let key of formData.keys()) {
            console.log(key);
            body[key] = formData.get(key);
        }
        console.log(body);
        const res = await fetch('/api/session', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify(body)
        });

            const data = await res.json();
            console.log(data);
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='4'>
                        <form onSubmit={this.handleSubmit} className='login-form'>
                            <p className='h5 text-center mb-4'>Log In</p>
                            <div className='grey-text'>
                                <MDBInput onChange={this.handleChange} name='email' id='email' label='Type your email' icon='envelope' group type='email' value={this.state.email} />
                                <MDBInput onChange={this.handleChange} name='password' id='password' label='Type your password' icon='lock' group type='password' value={this.state.password}/>
                            </div>
                            <MDBBtn type='submit' className='btn amber darken-4'>Submit</MDBBtn>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default LogIn;