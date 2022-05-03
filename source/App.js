import React from 'react';
import {AuthProvider} from './context/auth';
import AppNavigation from './navigation/index';

const App = () => {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
};
export default App;
