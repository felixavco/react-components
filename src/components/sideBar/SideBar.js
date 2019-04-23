import React, { useState } from 'react';
import './sideBar.scss';
import { NavLink } from 'react-router-dom';
import { menuData } from './MenuData';

const SideBar = () => {
	const [ isMenuActive, setIsMenuActive ] = useState(false);

	const full_menu_items = menuData.map((item, i) => (
		<li key={i} onClick={() => setIsMenuActive(!isMenuActive)}>
			<NavLink exact activeClassName="active" to={item.path}>
				<i className={item.iconClass} />&nbsp; {item.text}
			</NavLink>
		</li>
	));

	const icons_menu_items = menuData.map((item, i) => (
		<li key={i} onClick={() => setIsMenuActive(!isMenuActive)}>
			<NavLink exact activeClassName="active" to={item.path}>
				<i className={item.iconClass} />
			</NavLink>
		</li>
	));

	let nav_menu;

	if (isMenuActive) {
		nav_menu = (
			<nav className="header_full_nav" onMouseLeave={() => setIsMenuActive(false)}>
				<div className="arrow" title="Close Menu" onClick={() => setIsMenuActive(!isMenuActive)}>
					<i className="fas fa-angle-double-left" />
				</div>
				<ul className={`animated ${isMenuActive ? 'fadeInLeft' : ''}`}>{full_menu_items}</ul>
			</nav>
		);
	} else {
		nav_menu = (
			<nav className="header_icons_nav" onMouseLeave={() => setIsMenuActive(false)}>
				<div className="arrow" title="Open Menu" onClick={() => setIsMenuActive(!isMenuActive)}>
					<i className="fas fa-angle-double-right" />
				</div>
				<ul onMouseEnter={() => setIsMenuActive(true)}>{icons_menu_items}</ul>
			</nav>
		);
	}

	return <header className="header">{nav_menu}</header>;
};

export default SideBar;
