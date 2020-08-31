import React from 'react';
import { signUp } from '../store/auth';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class SignUp extends React.Component {
    state = {
        email: "",
        password: "",
        confirmPassword: ""
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id.split('-')[1]]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password, confirmPassword } = this.state;
        this.props.store.dispatch(signUp(email, password, confirmPassword));
    }

    render() {
        return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md='4'>
                    <form onSubmit={this.handleSubmit} className='signup-form'>
                        <p className='h5 text-center mb-4'>Sign Up</p>
                        <div className='grey-text'>
                            <MDBInput onChange={this.handleChange} name='signup-email' id='signup-email' label='Type your email' icon='envelope' group type='email' value={this.state.email} />
                            <MDBInput onChange={this.handleChange} name='signup-password' id='signup-password' label='Type your password' icon='lock' group type='password' value={this.state.password} />
                            <MDBInput onChange={this.handleChange} name='signup-confirmPassword' id='signup-confirmPassword' label='Type your password again' icon='check-double' group type='password' value={this.state.confirmPassword} />
                        </div>
                        <MDBBtn type='submit' className='btn amber darken-4'>Submit</MDBBtn>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        );
    }
}

export default SignUp;