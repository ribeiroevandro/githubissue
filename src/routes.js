import React from 'react';
import { StackNavigator } from 'react-navigation';

import Header from 'components/Header';

import Issues from 'pages/issues';
import Repositories from 'pages/repositories';

const Routes = StackNavigator({
  Repositories: { screen: Repositories },
  Issues: { screen: Issues },
}, {
  navigationOptions: {
    header: props => <Header {...props} />,
  },
});

export default Routes;
