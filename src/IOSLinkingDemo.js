/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Linking,
    TouchableHighlight,
    View
} from 'react-native';


import PropTypes from 'prop-types';


class CustomButton extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        url: PropTypes.string,
        text: PropTypes.string.isRequired,

    };

    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={() => Linking.canOpenURL(this.props.url).then(supported => {
                    if (supported) {
                        Linking.openURL(this.props.url);
                    } else {
                        console.log('无法打开该URI: ' + this.props.url);
                    }
                })}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

export default class IOSLinkingDemo extends Component {
    componentDidMount() {
        var url = Linking.getInitialURL().then((url) => {
            if (url) {
                console.log('捕捉的URL地址为: ' + url);
            } else {
                console.log('url为空');
            }
        }).catch(err => console.error('错误信息为:', err));
    }

    render() {
        return (
            <View>
                <CustomButton url={'http://www.reactnative.vip'} text="点击打开http网页"/>
                <CustomButton url={'https://www.baidu.com'} text="点击打开https网页"/>
                <CustomButton url={'smsto:13667377378'} text="点击进行发送短信"/>
                <CustomButton url={'tel:13667377378'} text="点击进行打电话"/>
                <CustomButton url={'mailto:309623978@qq.com'} text="点击进行发邮件"/>
                <CustomButton url={'dfy:888999'} text="无法打开url"/>
                <CustomButton url={'geo:37.484847,-122.148386'} text="点击打开一个地图位置"/>
                <CustomButton url={'myrnlinkdemo://'} text="自己打开自己"/>
                <CustomButton url={'myrnlinkdemo1://'} text="打开myrnlindemo1"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
    buttonText: {
        fontSize: 20,
    },
});
