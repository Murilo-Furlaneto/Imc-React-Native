import React from 'react';
import {StyleSheet, View} from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main';
function App() {
  return (
      <View style={styles.Container}>
       <Title/>
       <Main/>
      </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor:'#e0e5e5',
    flex: 1,
    paddingTop: 80,
  },
  
});

export default App;
