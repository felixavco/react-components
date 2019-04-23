import React from 'react';
import DoubleRingLoader from './doubleRingLoader/DoubleRingLoader';
import SingleLoader from './singleLoader/SingleLoader';
import Loader3 from './loader3/Loader3';

import './Loaders.scss';
const Loaders = () => {
	return (
		<div className="loaders">
			<div className="row">
				<div className="col-12 col-md-4 d-flex justify-content-center aling-items-center">
					<DoubleRingLoader />
				</div>
				<div className="col-12 col-md-4 d-flex justify-content-center aling-items-center">
					<SingleLoader />
				</div>
				<div className="col-12 col-md-4 d-flex justify-content-center aling-items-center">
					<Loader3 />
				</div>
			</div>
		</div>
	);
};

export default Loaders;
