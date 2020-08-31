import React from 'react';
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
                        <form>
                            <p className='h5 text-center mb-4'>Log In</p>
                            <div className='grey-text'>
                                <MDBInput label='Type your email' icon='envelope' group type='email' />
                                <MDBInput label='Type your password' icon='lock' group type='password' />
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