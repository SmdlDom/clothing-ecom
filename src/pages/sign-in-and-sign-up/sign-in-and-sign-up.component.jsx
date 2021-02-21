import React from 'react';

import SignIn from "../../components/form/sign-in/sign-in.component";
import SignUp from "../../components/form/sign-up/sign-up.component";

import './sign-in-and-sign-up.styles.scss';

const SingInAndSignUpPage = () => (
	<div className='sign-in-and-sign-up'>
		<SignIn />
		<SignUp />
	</div>
);

export default SingInAndSignUpPage;