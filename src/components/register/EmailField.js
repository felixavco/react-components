import React, { useEffect } from 'react';
import { API_URL } from '../../config/config';
import axios from 'axios';
import isEmpty from '../../utils/isEmpty';
import { inputError, inputSuccess, msgError, msgSuccess } from './messageStyles'


function EmailField({ email, setEmail, emailMessage, setEmailMessage }) {
	useEffect(
		() => {
			if (validateEmail(email)) {
				isEmailAvailable(email);
			}
		},
		[ email ]
	);

	//* Makes a request to the backend to check if the email address has been already registered
	const isEmailAvailable = async (email) => {
		try {
			const res = await axios.post(API_URL + '/user/check-email', { email });
			setEmailMessage({ text: res.data.message, error: false, animation: false });
		} catch (err) {
			const { email } = err.response.data;
			setEmailMessage({ text: email, error: true, animation: true });
		}
	};

	const validateEmail = (email_val) => {
		const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(email_val);
	};

	const onEmailBlur = () => {
		if (isEmpty(email)) {
			setEmailMessage({ text: 'Email is required!', error: true, animation: true });
		} else if (!validateEmail(email)) {
			setEmailMessage({ text: 'Invalid email format!', error: true, animation: true });
		}
	};

	return (
		<div className="form-group">
			<label htmlFor="email" style={emailMessage.error ? msgError : null}>
				Email address
			</label>
			<input
				style={emailMessage.error ? inputError : email === '' ? null : inputSuccess}
				type="text"
				className={`form-control animated faster ${emailMessage.animation ? 'shake' : ''}`}
				onAnimationEnd={() => setEmailMessage({ ...emailMessage, animation: false })}
				id="email"
				placeholder="Enter email"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value.trim().toLowerCase())}
				onBlur={onEmailBlur}
			/>
			<small className="form-text" style={emailMessage.error ? msgError : email === '' ? null : msgSuccess}>
				{emailMessage.text}
			</small>
		</div>
	);
}

export default EmailField;