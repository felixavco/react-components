import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../utils/isEmpty';
import capitalize from '../../utils/capitalize';
import { inputError, inputSuccess, msgError, msgSuccess } from './messageStyles';


function NameField({ name, setName, nameMessage, setNameMessage }) {
	const nameArr = name.split(' ');

	const onNameBlur = () => {
		if (isEmpty(name)) {
			setNameMessage({ text: 'At least first and last name are required!', error: true, animation: true });
		} else if (nameArr.length === 1 || isEmpty(nameArr[1])) {
			setNameMessage({ text: 'Please add your last name', error: true, animation: true });
		} else {
			setNameMessage({ text: '', error: false, animation: false });
		}
	};

	return (
		<div className="form-group">
			<label htmlFor="name" style={nameMessage.error ? msgError : null}>
				Name
			</label>
			<input
				style={nameMessage.error ? inputError : name === '' ? null : inputSuccess}
				type="name"
				className={`form-control animated faster ${nameMessage.animation ? 'shake' : ''}`}
				onAnimationEnd={() => setNameMessage({ ...nameMessage, animation: false })}
				id="name"
				placeholder="Enter your First and Last name"
				name="name"
				value={name} 
				onChange={(e) => setName(e.target.value.split(' ').map((n) => capitalize(n)).join(' '))}
				onBlur={onNameBlur}
			/>
			<small className="form-text" style={nameMessage.error ? msgError : name === '' ? null : msgSuccess}>
				{nameMessage.text}
			</small>
		</div>
	);
}

NameField.propTypes = {
	name: PropTypes.string.isRequired, 
	setName: PropTypes.func.isRequired, 
	nameMessage: PropTypes.object.isRequired, 
	setNameMessage: PropTypes.func.isRequired
};

export default NameField;
