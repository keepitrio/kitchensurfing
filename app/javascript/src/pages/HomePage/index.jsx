import PropTypes from 'prop-types';
import React from 'react';
import App from '../../components/App';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.user}</p>
			</div>
		);
	}
}

export default class HomePageContainer extends React.Component {
	render() {
		return (
			<App>
				<HomePage />
			</App>
		);
	}
}



///////////////////////////////////
// import Blah from './HomePage';
// import { TITLE, HomePage, HomePageContainer } from './HomePage';
// import * as Blah from './HomePage';

// HomePage.TITLE
// HomePage.HomePageContainer