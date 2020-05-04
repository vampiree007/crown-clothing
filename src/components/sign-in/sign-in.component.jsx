import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: ''})
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState( {[name]: value} )
    }
    render() {
        return(
            <div className="sign-in">
                <h1 className="title">Already Have An Account ?</h1>
                <span className="subtitle">Sign In with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        id="sign-in-email" 
                        handleChange={this.handleChange}
                        label="Email"
                        value={this.state.email}
                        required
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        id="sign-in-password" 
                        handleChange={this.handleChange}
                        label="Password"
                        value={this.state.password}
                        required
                    />
                    <CustomButton type='submit'> login </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;