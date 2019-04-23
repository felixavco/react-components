import React from 'react';
import './button.scss';

const Buttons = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="mx-auto col-8 col-md-6">
					<button className="button round" style={{ outline: 'none' }}>
						Send <i className="far fa-paper-plane" />
					</button>

					<button className="button outline" style={{ outline: 'none' }}>
						Submit
					</button>
					<button className="button outline round" style={{ outline: 'none' }}>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default Buttons;
