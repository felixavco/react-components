import React, { Fragment, useState, useEffect } from 'react';
import isEmpty from '../../utils/isEmpty';
import { inputError, inputSuccess, msgError, msgSuccess } from './messageStyles';

function PasswordField({
	password,
	setPassword,
	passwordMessage,
	setPasswordMessage,

	confirPwd,
	setConfirPwd,
	confirPwdMessage,
	setConfirPwdMessage
}) {
	const [ isLength, setIsLength ] = useState(false);
	const [ isUpper, setIsUpper ] = useState(false);
	const [ isNumber, setIsNumber ] = useState(false);
	const [ isSpecialChar, setIsSpecialChar ] = useState(false);
	const [ confirmField, setConfirmField ] = useState(false);
	//* Toggle password field visibility
	const [ showPassword, setShowPassword ] = useState(false);
	//* Toggle confirPwd field visibility
	const [ showConfirPwd, setShowConfirPwd ] = useState(false);

	//* Checks if Password length is btw 8 & 30 cars
	const lengthValidatior = (pwd) => {
		if (pwd.length >= 8 && pwd.length < 31) {
			setIsLength(true);
		} else {
			setIsLength(false);
		}
	};

	//* Checks if there are at least two Upper Case
	const upperValidator = (pwd) => {
		const regex = /[A-Z].*[A-Z]/;
		if (regex.test(pwd)) {
			setIsUpper(true);
		} else {
			setIsUpper(false);
		}
	};

	//* Checks if there are at least two numbers
	const numberValidator = (pwd) => {
		const regex = /[0-9].*[0-9]/;
		if (regex.test(pwd)) {
			setIsNumber(true);
		} else {
			setIsNumber(false);
		}
	};
	//* Checks if pwd contains at least 1 special char
	const specialCharsValidator = (pwd) => {
		const regex = /[!@#$%^&*+-]/g;
		if (regex.test(pwd)) {
			setIsSpecialChar(true);
		} else {
			setIsSpecialChar(false);
		}
	};

	useEffect(
		() => {
			if (password !== '') {
				specialCharsValidator(password);
				lengthValidatior(password);
				upperValidator(password);
				numberValidator(password);
			}
		},
		[ password ]
	);

	const onBlurPassword = () => {
		specialCharsValidator(password);
		lengthValidatior(password);
		upperValidator(password);
		numberValidator(password);

		if (!isLength || !isUpper || !isNumber || !isSpecialChar) {
			setPasswordMessage({
				text: "Your password doesn't meet all the requirements",
				error: true,
				animation: true
			});
			setConfirmField(false);
		} else if (isEmpty(password)) {
			setPasswordMessage({ text: 'Password is required!', error: true, animation: true });
			setConfirmField(false);
		} else {
			setPasswordMessage({ text: '', error: false, animation: false });
			setConfirmField(true);
		}
	};

	//* Password confirmation field logic
	useEffect(
		() => {
			if (confirPwd.length >= password.length) {
				if (!comparePassword(password, confirPwd)) {
					setConfirPwdMessage({ text: "Passwords don't match", error: true, animation: true });
				} else {
					setConfirPwdMessage({ text: '', error: false, animation: false });
				}
			}
		},
		[ confirPwd ]
	);

	const comparePassword = (pwd, pwd2) => pwd === pwd2;

	const onBlurConfirPwd = () => {
		if (!isEmpty(confirPwd)) {
			if (!comparePassword(password, confirPwd)) {
				setConfirPwdMessage({ text: "Passwords don't match", error: true, animation: true });
			} else {
				setConfirPwdMessage({ text: '', error: false, animation: false });
			}
		} else {
			setConfirPwdMessage({ text: 'Password confirmation is required!', error: true, animation: true });
		}
	};

	const success = <i className="far fa-check-circle" />;
	const fail = <i className="far fa-times-circle" />;
	const openEye = <i className="fas fa-eye" />;
	const closedEye = <i className="fas fa-eye-slash" />;

	return (
		<Fragment>
			<div className="form-group">
				<ul>
					<li style={isLength ? msgSuccess : {}}>
						{isLength ? success : fail}
						&nbsp;
						<small>Password must have between 8 to 30 characters</small>
					</li>

					<li style={isUpper ? msgSuccess : {}}>
						{isUpper ? success : fail}
						&nbsp;
						<small>Password must have at least 2 upper case</small>
					</li>

					<li style={isNumber ? msgSuccess : {}}>
						{isNumber ? success : fail}
						&nbsp;
						<small>Password must have at least 2 numbers</small>
					</li>

					<li style={isSpecialChar ? msgSuccess : {}}>
						{isSpecialChar ? success : fail}
						&nbsp;
						<small>Password must have at least 1 of these characters !@#$%^&*+- </small>
					</li>
				</ul>

				<div className="Register_password-input">
					<input
						style={passwordMessage.error ? inputError : password === '' ? null : inputSuccess}
						type={showPassword ? 'text' : 'password'}
						className={`form-control animated faster ${passwordMessage.animation ? 'shake' : ''}`}
						onAnimationEnd={() => setPasswordMessage({ ...passwordMessage, animation: false })}
						placeholder="Enter a strong password"
						password="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						onBlur={onBlurPassword}
						autoComplete="false"
					/>
					<span onClick={() => setShowPassword(!showPassword)}>{showPassword ? openEye : closedEye}</span>
				</div>
				<small
					className="form-text"
					style={passwordMessage.error ? msgError : password === '' ? null : msgSuccess}
				>
					{passwordMessage.text}
				</small>
			</div>

			{/* Password Confirmation field */}

			<div className="form-group">
				<label htmlFor="confirPwd" style={confirPwdMessage.error ? msgError : null}>
					Confirm your password
				</label>
				<div className="Register_password-input">
					<input
						disabled={!confirmField}
						style={confirPwdMessage.error ? inputError : confirPwd === '' ? null : inputSuccess}
						type={showConfirPwd ? 'text' : 'password'}
						id="confirPwd"
						value={confirPwd}
						className={`form-control animated faster ${confirPwdMessage.animation ? 'shake' : ''}`}
						onChange={(e) => setConfirPwd(e.target.value)}
						onBlur={onBlurConfirPwd}
						placeholder="Confirm your password"
						autoComplete="false"
					/>
					<span onClick={() => setShowConfirPwd(!showConfirPwd)}>{showConfirPwd ? openEye : closedEye}</span>
				</div>
				<small
					className="form-text"
					style={confirPwdMessage.error ? msgError : confirPwd === '' ? null : msgSuccess}
				>
					{confirPwdMessage.text}
				</small>
			</div>
		</Fragment>
	);
}

export default PasswordField;
