import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {ContextProvider} from './src/context/userContext';

export default function App() {
  return (
    <ContextProvider>
      <AppNavigator />
    </ContextProvider>
  );
}
