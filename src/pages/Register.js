import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, Button
} from 'react-native';
import {
    SafeAreaView
} from "react-navigation";

import GlobalStatusBar from './../components/GlobalStatusBar';


export default class Register extends Component {

    static navigationOptions = ({navigation, screenProps}) => {

        return ({
            title: '注册',
        });
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <SafeAreaView style={styles.container} forceInset={{top: 'never'}}>
                <GlobalStatusBar/>
                <Text>注册</Text>
                <Button title={'进入登录页面'} onPress={() => {
                    this.props.navigation.navigate('Login');
                }}/>
                <Button title={'进入协议页面'} onPress={() => {
                    this.props.navigation.navigate('Protocol');
                }}/>
            </SafeAreaView>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
