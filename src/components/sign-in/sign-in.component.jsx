import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

class SignIn extends React.Component {

    state = { email: '', password: '' };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        //The square brackets are used to dynamically assign the property that needs to be set. It could be either email or password and based on the value, it's set accordingly.
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='Email' handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput name='password' type='password' label='Password' handleChange={this.handleChange} value={this.state.password} required />
                    <div className='buttons'>
                        <CustomButton type='submit'> SIGN IN </CustomButton>
                        <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}> SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        );
    };
}

export default SignIn;