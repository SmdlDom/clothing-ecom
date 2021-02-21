import React from 'react';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../../common/custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../../firebase/firebase.utils";

import './sign-in.styles.scss';

class SignIn extends React.Component{
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
		}
	}


	handleSubmit = async event => {
		event.preventDefault();

		if(event.target.id === 'email-sign-in') {
			const {email, password} = this.state;

			try {
				await auth.signInWithEmailAndPassword(email, password);
				this.setState({email: '', password: ''})
				//TODO maybe redirect to main page
			} catch (error) {
				//TODO handle error
				console.log(error);
			}
		} else {
			await signInWithGoogle();
		}
	}

	handleChange = event => {
		event.preventDefault();
		const { value, name } = event.target;

		this.setState({ [name]: value });
	}

	render() {
		return(
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form>
					<FormInput
						name='email'
						type='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label="email"
						required
					/>
					<FormInput
						name='password'
						type='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label="password"
						required
					/>
					<div className="buttons">
						<CustomButton id='email-sign-in'  onClick={this.handleSubmit}> Sign in </CustomButton>
						<CustomButton id='google-sign-in' onClick={this.handleSubmit} isGoogleSignIn>
							{' '} Sign in with Google {' '}
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn;