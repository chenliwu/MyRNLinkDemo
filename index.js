import { AppRegistry,Platform } from 'react-native';

// import AndroidLinkingDemo from './src/AndroidLinkingDemo';
// import IOSLinkingDemo from './src/IOSLinkingDemo';

// let linkDemo;
// if(Platform.OS === 'android'){
//     linkDemo = AndroidLinkingDemo;
// }else if(Platform.OS === 'ios'){
//     linkDemo = IOSLinkingDemo;
// }


//import LinkingDemo from './src/LinkingDemo';


import App from './src/App';


AppRegistry.registerComponent('MyRNLinkDemo', () => App);
