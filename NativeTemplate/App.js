
import React, {useState, useEffect}from 'react';
import { View, StyleSheet } from "react-native";
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
			}, 4000)
	});
  
  return (
    <View style={styles.App}>
      {state.loading ?
        <PreLoader preLoaderVisible={state.loading} />
      :
      <AppDrawer />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  App: {
    flex: 1,
  }
});

export default App;
