import React from 'react';
import './App.scss';

//React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import SideBar from './components/sideBar/SideBar';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Buttons from './components/buttons/Buttons';
import Loaders from './components/loaders/Loaders';

const App = () => (
	<div className="App">
		<Router>
			<SideBar />

			<div className="container pt-3">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/forms" component={Register} />
					<Route exact path="/buttons" component={Buttons} />
					<Route exact path="/loaders" component={Loaders} />
				</Switch>
			</div>
		</Router>
	</div>
);

export default App;
