import React from 'react';
import './button.scss';

const Buttons = () => {
	return (
		<div className="container-fluid">
			<div className="buttons">
				<div className="row">
					<div className="col-12 col-md-3 d-flex justify-content-center aling-items-center">
						<button className="button round" style={{ outline: 'none' }}>
							Send <i className="far fa-paper-plane" />
						</button>
					</div>
					<div className="col-12 col-md-3 d-flex justify-content-center aling-items-center">
						<button className="button outline" style={{ outline: 'none' }}>
							Submit
						</button>
					</div>
					<div className="col-12 col-md-3 d-flex justify-content-center aling-items-center">
						<button className="button a-icon" style={{ outline: 'none' }}>
							Enter
							<span>
								<i className="fas fa-angle-double-right" />
							</span>
						</button>
					</div>
					<div className="col-12 col-md-3 d-flex justify-content-center aling-items-center">
						<button className="button outline round" style={{ outline: 'none' }}>
							Submit
						</button>
					</div>
				</div>

				<hr />

				<div className="row">
					<div className="col-12 col-md-3 d-flex justify-content-center aling-items-center">
						<button className="button gradient" style={{ outline: 'none' }}>
							Send <i className="far fa-paper-plane" />
						</button>
					</div>
					<div className="col-12 col-md-3 d-flex justify-content-center aling-items-center">
						<button className="button a-outline" style={{ outline: 'none' }}>
							Submit
						</button>
					</div>
					<div className="col-12 col-md-3 d-flex justify-content-center aling-items-center">
						<button className="button a-icon" style={{ outline: 'none' }}>
							Enter
							<span>
								<i className="fas fa-angle-double-right" />
							</span>
						</button>
					</div>
					<div className="col-12 col-md-3 d-flex justify-content-center aling-items-center">
						<button className="button outline round" style={{ outline: 'none' }}>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Buttons;
