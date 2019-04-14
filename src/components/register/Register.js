import React, { useState, useEffect } from 'react';
import { API_URL } from '../../config/config';
import axios from 'axios'

const EmailField = () => {
	// *This component contains the logic for the Email field*/
	const [ email, setEmail ] = useState('');
	const [ emailMessage, setEmailMessage ] = useState({ text: '', error: false });

	useEffect(
		() => {
			if (validateEmail(email)) {
				isEmailAvailable(email);
			} else if (email !== '') {
				setEmailMessage({ text: 'Invalid Email', error: true });
			}
		},
		[ email ]
	);

	const isEmailAvailable = async (email) => {
		try {
			const res = await axios.post(API_URL + '/user/check-email', {email})
			setEmailMessage({ text: res.data.message, error: false });
			} catch (err) {
				const { email } = err.response.data;
				setEmailMessage({ text: email, error: true });
		}
	};

	const validateEmail = (email_val) => {
		const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(email_val);
	};

	const onEmailBlur = () => {
		if (email === '') {
			setEmailMessage({ text: 'Email is required', error: true });
		} else if (!validateEmail(email)) {
			setEmailMessage({ text: 'Invalid Email', error: true });
		}
	};

	// *Styles
	const inputError = { borderColor: 'red' };
	const inputSuccess = { borderColor: 'green' };
	const msgError = { color: 'red' };
	const msgSuccess = { color: 'green' };

	return (
		<div className="form-group">
			<label htmlFor="email" style={emailMessage.error ? msgError : null}>
				* Email address
			</label>
			<input
				style={emailMessage.error ? inputError : email === '' ? null : inputSuccess}
				type="email"
				className="form-control"
				id="email"
				placeholder="Enter email"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value.trim())}
				onBlur={onEmailBlur}
			/>
			<small className="form-text" style={emailMessage.error ? msgError : email === '' ? null : msgSuccess}>
				{emailMessage.text}
			</small>
		</div>
	);
};

const Register = () => {
	return (
		<div className="container mt-5">
			<div className="row">
				<form className="mx-auto col-md-6 col-12">
					<div className="form_title mb-4 d-flex flex-column align-items-center">
						<h2>Register</h2>
						<small className="form-text text-muted">* Required Fields</small>
					</div>
					<EmailField />
				</form>
			</div>
		</div>
	);
};

export default Register;
