import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import OnBoarding from './src/screens/onBoarding/OnBoarding';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <OnBoarding />;
};

export default App;
