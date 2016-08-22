import React from 'react';

import MainMenuItems from './MainMenuItems.react';

class MainMenu extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<MainMenuItems />
				</div>								
			</nav>			
		)
	}
}

export default MainMenu;