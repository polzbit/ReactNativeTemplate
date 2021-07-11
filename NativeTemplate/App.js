
import React, {useState, useEffect}from 'react';
import { StyleSheet  } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppDrawer from "./src/navigator/AppDrawer";
import PreLoader from './src/components/Preloader';

const App = () => {
  const [state, setState] = useState({
		loading: true
	}); 

  useEffect(() => {
		setTimeout(() => {
			setState(prevState => ({
                ...prevState, 
                loading: false,}));
			}, 1000)
	});
  
  return (
    <SafeAreaProvider  style={styles.App}>
      {state.loading ?
        <PreLoader preLoaderVisible={state.loading} />
      :
        <AppDrawer />
      }
    </SafeAreaProvider >
  );
};

const styles = StyleSheet.create({
  App: {
    flex: 1,
  }
});

export default App;
