import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './src/navigation/MyStack';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
