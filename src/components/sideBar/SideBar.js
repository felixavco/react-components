import React, { useState } from 'react';
import './sideBar.scss';

const SideBar = () => {
	const [ isMenuActive, setIsMenuActive ] = useState(false);
	let nav_menu;

	if (isMenuActive) {
		nav_menu = (
			<nav className="header_full_nav" onMouseLeave={() => setIsMenuActive(false)}>
				<div className="arrow"  title="Close Menu" onClick={() => setIsMenuActive(!isMenuActive)}>
					<i className="fas fa-angle-double-left" />
				</div>
				<ul className={`animated ${isMenuActive ? 'fadeInLeft' : ''}`}>
					<li onClick={() => setIsMenuActive(!isMenuActive)}>
						<a href="#">
							<i className="fas fa-home" />
							&nbsp; Forms
						</a>
					</li>
					<li onClick={() => setIsMenuActive(!isMenuActive)}>
						<a href="#">
							<i className="fas fa-home" />
							&nbsp; Slider
						</a>
					</li>
					<li onClick={() => setIsMenuActive(!isMenuActive)}>
						<a href="#">
							<i className="fas fa-home" />
							&nbsp; Buttons
						</a>
					</li>
					<li onClick={() => setIsMenuActive(!isMenuActive)}>
						<a href="#">
							<i className="fas fa-home" />
							&nbsp; Accordion
						</a>
					</li>
				</ul>
			</nav>
		);
	} else {
		nav_menu = (
			<nav className="header_icons_nav" onMouseLeave={() => setIsMenuActive(false)}>
				<div className="arrow" title="Open Menu" onClick={() => setIsMenuActive(!isMenuActive)}>
					<i className="fas fa-angle-double-right" />
				</div>
				<ul onMouseEnter={() => setIsMenuActive(true)}>
					<li onClick={() => setIsMenuActive(!isMenuActive)}>
						<a href="#">
							<i className="fas fa-home" />
						</a>
					</li>
					<li onClick={() => setIsMenuActive(!isMenuActive)}>
						<a href="#">
							<i className="fas fa-home" />
						</a>
					</li>
					<li onClick={() => setIsMenuActive(!isMenuActive)}>
						<a href="#">
							<i className="fas fa-home" />
						</a>
					</li>
					<li onClick={() => setIsMenuActive(!isMenuActive)}>
						<a href="#">
							<i className="fas fa-home" />
						</a>
					</li>
				</ul>
			</nav>
		);
	}

	return (
		<header className="header">
			{nav_menu}
		</header>
	);
};

export default SideBar;
