import React from 'react';
import { login } from '../store/auth';
import { connect } from 'react-redux';
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

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='4'>
                        <form onSubmit={this.props.handleSubmit} className='login-form'>
                            <p className='h5 text-center mb-4'>Log In</p>
                            <div className='grey-text'>
                                <MDBInput onChange={this.handleChange} name='email' id='email' label='Type your email' icon='envelope' group type='email' value={this.state.email} />
                                <MDBInput onChange={this.handleChange} name='password' id='password' label='Type your password' icon='lock' group type='password' value={this.state.password} />
                            </div>
                            <MDBBtn type='submit' className='btn amber darken-4'>Submit</MDBBtn>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (event) => {
            event.preventDefault();
            const form = document.querySelector('.login-form');
            const formData = new FormData(form);
            const email = formData.get('email');
            const password = formData.get('password');

            dispatch(login(email, password));
        }
    }
}

export default connect(null, mapDispatchToProps)(LogIn);