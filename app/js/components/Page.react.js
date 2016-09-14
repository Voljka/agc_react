import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute }  from 'react-router';

/* Store*/
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
const store = configureStore();

//store.subscribe( () => console.log(store.getState()));

/* Main window Elements*/
import PageHeader from './PageHeader.react';
//import MainMenu from './MainMenu.react';
import App from './App.react';
// import PageContent from './PageContent.react';
// import LeftSideBar from './LeftSideBar.react';

/* Content Elements*/
import GroupList from '../containers/GroupList';

import ClientsList from './ClientsList.react';
import ChangePasswordWindow from './ChangePasswordWindow.react';
import Marketing from './Marketing.react';
import LDC from './LDC.react';
import PotentialClients from './PotentialClients.react';
import SummaryPrices from './SummaryPrices.react';
import SpecialPrices from './SpecialPrices.react';
import CalculatablePrices from './CalculatablePrices.react';
import Projects from './Projects.react';
import Rules from './Rules.react';
import Admin from './Admin.react';
import LoginPage from '../containers/LoginPage';

/* Non-working link */
import NotFound from './404.react';

class Page extends React.Component{

	render(){
		return (
			<div>		
				<PageHeader />

				<div className='row'>
					<Provider store ={ store }>

						<Router history={browserHistory}>
							<Route path='/' component={App}>

									<IndexRoute component={GroupList} />
									<Route path="login" component={LoginPage} />
									<Route path="clients" component={GroupList} />
									<Route path="password" component={ChangePasswordWindow} />
									<Route path="marketing" component={Marketing} />
									<Route path="ldc" component={LDC} />
									<Route path="potentials" component={PotentialClients} />
									<Route path="summary" component={SummaryPrices} />
									<Route path="special" component={SpecialPrices} />
									<Route path="calculatables" component={CalculatablePrices} />
									<Route path="projects" component={Projects} />
									<Route path="rules" component={Rules} />
									<Route path="admin" component={Admin} />

							</Route>
							<Route path='*' component={NotFound} />
						</Router>

					</Provider>
				</div>
			</div>		
		)
	}
};

export default Page;

