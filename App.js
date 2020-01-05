import React from 'react';
import { SafeAreaView,StatusBar} from 'react-native';
import StopWatch  from './src/StopWatch'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar/>
        <SafeAreaView>
           <StopWatch {...this.props} />
        </SafeAreaView>
    </>
  );
};

export default App;
