import React from 'react';

import PageHeader from './PageHeader.react';
import MainMenu from './MainMenu.react';
import PageContent from './PageContent.react';
import LeftSideBar from './LeftSideBar.react';

class Page extends React.Component{
	render(){
		return (
			<div>
				<div className='row'>
					<PageHeader />
				</div>

				<MainMenu />

				<div className='row'>
					<LeftSideBar />
					<PageContent />
				</div>

			</div>
		)
	}
};

export default Page;

