import React, {Component} from 'react';
import {Button, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-navigation";
import GlobalStatusBar from "../components/GlobalStatusBar";


export default class Login extends Component {

    static navigationOptions = ({navigation, screenProps}) => {

        return ({
            title: '登录页面',
        });
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <SafeAreaView style={styles.container} forceInset={{top: 'never'}}>
                <GlobalStatusBar/>
                <Text>登录页面</Text>
                <Button title={'进入主页'} onPress={() => {
                    this.props.navigation.navigate('Main');
                }}/>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
