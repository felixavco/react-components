import React, { useState, useEffect, Fragment } from 'react';
import './register.scss';
import isEmpty from '../../utils/isEmpty';
import capitalize from '../../utils/capitalize';
import axios from 'axios';
import { API_URL } from '../../config/config';

//* Components
import NameField from './NameField';
import EmailField from './EmailField';
import PasswordField from './PasswordField';

function Register() {
	//* Name State
	let [ name, setName ] = useState('');
	const [ nameMessage, setNameMessage ] = useState({ text: '', error: false, animation: false });

	//* Email State
	const [ email, setEmail ] = useState('');
	const [ emailMessage, setEmailMessage ] = useState({ text: '', error: false, animation: false });

	//* Password State
	const [ password, setPassword ] = useState('');
	const [ passwordMessage, setPasswordMessage ] = useState({ text: '', error: false, animation: false });

	const [ confirPwd, setConfirPwd ] = useState('');
	const [ confirPwdMessage, setConfirPwdMessage ] = useState({ text: '', error: false, animation: false });

	//* If there is no Errors this enables the submit button
	const [ areFieldsValid, setAreFieldsValid ] = useState(false);

	//* Is Loading
	const [ isLoading, setIsLoading ] = useState(false);

	useEffect(
		() => {
			//* Checks if all Fields are not empty
			if (!isEmpty(name) && !isEmpty(email) && !isEmpty(password) && !isEmpty(confirPwd)) {
				//* Checks if there is no errors to enable submit button
				if (nameMessage.error || emailMessage.error || passwordMessage.error || confirPwdMessage.error) {
					setAreFieldsValid(false);
				} else {
					setAreFieldsValid(true);
				}
			}
		},
		[ nameMessage, emailMessage, passwordMessage, confirPwdMessage ]
	);

	const clearForm = () => {
		setName('');
		setEmail('');
		setPassword('');
		setConfirPwd('');
		setAreFieldsValid(false);
	};

	const onFormSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		//* Capitalize the initial of each name
		name = name.split(' ').map((n) => capitalize(n)).join(' ');

		try {
			const newUser = { name, email, password };
			const res = await axios.post(API_URL + '/user/register', newUser);
			if (res) {
				console.log(res.data);
				setIsLoading(false);
				clearForm();
			}
		} catch (err) {
			if (err) {
				console.error(err.response.data);
				setIsLoading(false);
				clearForm();
			}
		}
	};

	let button_content;
	if (isLoading) {
		button_content = (
			<Fragment>
				Sending&nbsp;<i className="fas fa-spinner fa-pulse" />
			</Fragment>
		);
	} else {
		button_content = 'Create Account';
	}

	return (
		<div className="container mt-5 Register">
			<div className="row">
				<form className="mx-auto Register_form col-md-6 col-12" onSubmit={onFormSubmit}>
					<div className="Register_form-title mb-4 d-flex flex-column align-items-center">
						<h2>Register</h2>
						<small className="form-text text-muted">All fields are required</small>
					</div>
					<div className="Register_form-body">
						<NameField
							name={name}
							setName={setName}
							nameMessage={nameMessage}
							setNameMessage={setNameMessage}
						/>

						<EmailField
							email={email}
							setEmail={setEmail}
							emailMessage={emailMessage}
							setEmailMessage={setEmailMessage}
						/>

						<PasswordField
							password={password}
							setPassword={setPassword}
							passwordMessage={passwordMessage}
							setPasswordMessage={setPasswordMessage}
							confirPwd={confirPwd}
							setConfirPwd={setConfirPwd}
							confirPwdMessage={confirPwdMessage}
							setConfirPwdMessage={setConfirPwdMessage}
						/>
						{/* Button container */}
						<div className="d-flex justify-content-center">
							<button
								type="submit"
								className={`btn btn-primary ${areFieldsValid ? 'enabled' : 'disabled'}`}
								disabled={`${areFieldsValid ? '' : 'disabled'}`}
							>
								{button_content}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Register;
