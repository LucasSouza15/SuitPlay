import React from 'react';

import Routes from '@routes/index';
import theme from '@globals/styles/theme';

import {View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DropDownComponentProvider} from '@hooks/dropdown';

import AppProvider from '@hooks/index';
import ContextProviders from './src/contexts/index';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <DropDownComponentProvider>
        <ThemeProvider theme={theme}>
          <View
            style={{
              flex: 1,
            }}>
            <NavigationContainer>
              <AppProvider>
                <ContextProviders>
                  <Routes />
                </ContextProviders>
              </AppProvider>
            </NavigationContainer>
          </View>
        </ThemeProvider>
      </DropDownComponentProvider>
    </GestureHandlerRootView>
  );
}

export default App;
