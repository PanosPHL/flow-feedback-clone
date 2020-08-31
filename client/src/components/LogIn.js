import React from 'react';
import { login } from '../store/auth';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class LogIn extends React.Component {
    state = {
        email: "",
        password: ""
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id.split('-')[1]]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.store.dispatch(login(email, password));
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='4'>
                        <form onSubmit={this.props.handleSubmit} className='login-form'>
                            <p className='h5 text-center mb-4'>Log In</p>
                            <div className='grey-text'>
                                <MDBInput onChange={this.handleChange} name='login-email' id='login-email' label='Type your email' icon='envelope' group type='email' value={this.state.email} />
                                <MDBInput onChange={this.handleChange} name='login-password' id='login-password' label='Type your password' icon='lock' group type='password' value={this.state.password} />
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