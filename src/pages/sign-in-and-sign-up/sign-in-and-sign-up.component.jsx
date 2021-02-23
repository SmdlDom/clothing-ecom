import React from 'react';

import SignIn from "../../components/form/sign-in/sign-in.component";
import SignUp from "../../components/form/sign-up/sign-up.component";

import './sign-in-and-sign-up.styles';
import {SignUpAndSignInContainer} from "./sign-in-and-sign-up.styles";

const SingInAndSignUpPage = () => (
	<SignUpAndSignInContainer>
		<SignIn />
		<SignUp />
	</SignUpAndSignInContainer>
);

export default SingInAndSignUpPage;