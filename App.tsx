import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Register from './src/screens/onBoarding/register/Register';
// import OnBoarding from './src/screens/onBoarding/OnBoarding';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      {/* <OnBoarding /> */}
      <Register />
    </>
  );
};

export default App;
