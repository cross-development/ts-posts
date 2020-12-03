//Core
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import App from 'components/App';
//Styles
import GlobalStyles from './index.styles';

ReactDOM.render(
	<>
		<App />

		<GlobalStyles />
	</>,
	document.getElementById('root'),
);
