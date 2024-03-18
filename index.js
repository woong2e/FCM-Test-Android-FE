/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {ThemeProvider} from 'styled-components';
import theme from './src/styles/theme';


const ProvidedNavigator = () => {
    return (
      <ThemeProvider theme={{...theme}}>
        <App />
      </ThemeProvider>
    );
  };

AppRegistry.registerComponent(appName, () => ProvidedNavigator);
