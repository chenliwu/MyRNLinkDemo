import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

import {SafeAreaView} from 'react-navigation';
import GlobalStatusBar from "../components/GlobalStatusBar";


export default class ServiceDetails extends Component {

    static navigationOptions = ({navigation, screenProps}) => {
        return ({
            title: '业务详情页面',
        });
    };


    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <SafeAreaView style={styles.container} forceInset={{top: 'never'}}>
                <GlobalStatusBar/>
                <Text>业务详情页面</Text>

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
