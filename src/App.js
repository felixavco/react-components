import React from 'react';
import './App.scss';

//Components
import SideBar from './components/sideBar/SideBar';
import Register from './components/register/Register';

const App = () => (
	<div className="App">
		<SideBar />
		<div className="container pt-3">
			<Register />
		</div>
	</div>
);

export default App;
