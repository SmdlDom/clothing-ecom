import React from 'react';
import { connect } from 'react-redux';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../../common/custom-button/custom-button.component";

import './sign-in.styles';
import {ButtonsContainer, SignInContainer} from "./sign-in.styles";
import {googleSignInStart, emailSignInStart} from "../../../redux/user/user.action";

class SignIn extends React.Component{
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
		}
	}

	handleSubmit = event => {
		event.preventDefault();
		const { emailSignInStart } = this.props;
		const {email, password} = this.state;

		emailSignInStart(email, password);
	}

	handleChange = event => {
		event.preventDefault();
		const { value, name } = event.target;

		this.setState({ [name]: value });
	}

	render() {
		const { googleSignInStart } = this.props;
		return(
			<SignInContainer>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
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
					<ButtonsContainer>
						<CustomButton type='submit'> Sign in </CustomButton>
						<CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
							{' '} Sign in with Google {' '}
						</CustomButton>
					</ButtonsContainer>
				</form>
			</SignInContainer>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password }))
});

export default connect(
	null,
	mapDispatchToProps
)(SignIn);