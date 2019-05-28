import { AppRegistry,Platform } from 'react-native';
import App from './App';

import AndroidLinkingDemo from './src/AndroidLinkingDemo';
import IOSLinkingDemo from './src/IOSLinkingDemo';

let linkDemo;
if(Platform.OS === 'android'){
    linkDemo = AndroidLinkingDemo;
}else if(Platform.OS === 'ios'){
    linkDemo = IOSLinkingDemo;
}

//AppRegistry.registerComponent('MyRNLinkDemo', () => App);
AppRegistry.registerComponent('MyRNLinkDemo', () => linkDemo);