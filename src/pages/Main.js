import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import GlobalStatusBar from "../components/GlobalStatusBar";


export default class Main extends Component {

    static navigationOptions = ({navigation, screenProps}) => {

        return ({
            title: '主页',
        });
    };

    constructor(props, context) {
        super(props, context);
    }


    render() {
        return (
            <View style={styles.container}>
                <GlobalStatusBar/>
                <Text>主页</Text>
                <Button title={'进入业务详情页面'} onPress={() => {
                    this.props.navigation.push('ServiceDetails');
                }}/>
                <Button title={'进入设置页面'} onPress={() => {
                    this.props.navigation.push('Settings');
                }}/>
                <Button title={'返回登录页面'} onPress={() => {
                    this.props.navigation.navigate('Login');
                }}/>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    tabBarItemText: {
        color: '#fff',
        fontSize: 12,
    }
});
