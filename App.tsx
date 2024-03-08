import React, {useEffect, useState} from 'react';
import {
  View,
  PermissionsAndroid,
  TouchableOpacity,
  Text,
  Platform,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';

interface IPropsApp {}

const App: React.FC<IPropsApp> = () => {

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20}}>teste</Text>
    </View>
  );
};

export default App;