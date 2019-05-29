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
    View,
    ScrollView
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
                onPress={() => {
                    //如果想在打开链接前先检查是否安装了对应的应用，则调用以下方法：
                    Linking.canOpenURL(this.props.url).then(supported => {
                        if (supported) {
                            Linking.openURL(this.props.url);
                        } else {
                            console.log('无法打开该URI: ' + this.props.url);
                        }
                    });
                }}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

export default class AndroidLinkingDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            params: ''
        };
    }

    componentDidMount() {
        //Linking.getInitialURL()：APP在运行当中，这个方法是不能处理APP被外部URL调起的情况的。
        Linking.getInitialURL().then((url) => {
            this.handleUrl(url);
        }).catch(err => {
            console.error('错误信息为:', err);
            alert('错误信息为:' + err);
        });
        //要在 App 启动后也监听传入的 App 链接
        Linking.addEventListener('url', this._handleOpenURL);
    }

    componentWillMount() {
        Linking.removeEventListener('url', this._handleOpenURL);
    }

    _handleOpenURL = (event) => {
        this.handleUrl(event.url);
    };

    // 取URL地址参数转为对象
    handleUrl = (url) => {
        if (url) {
            console.log('捕捉的URL地址为: ' + url);
            alert('捕捉的URL地址为: ' + url);
            let urlObj = this.getUrlParamsToJSON(url);
            let params = '';
            if (urlObj) {
                for (let key in urlObj) {
                    params = params + `${key}=${urlObj[key]}\n`;
                }
                this.setState({
                    params: params
                });
            }

        } else {
            console.log('url为空');
            alert('url为空');
        }
    };


    getUrlParamsToJSON = (url) => {
        var params = {};
        //去除所有空格
        url = url.replace(/\s/ig, '');
        //正则表达式匹配
        url.replace(/([^?&=]+)=([^&]+)/g, (_, key, value) => {
            params[key] = value;
        });
        return params;
    };


    render() {
        return (
            <ScrollView style={{
                flex: 1
            }}>
                {/*<CustomButton url={'http://www.reactnative.vip'} text="点击打开http网页"/>*/}
                {/*<CustomButton url={'https://www.baidu.com'} text="点击打开https网页"/>*/}
                {/*<CustomButton url={'smsto:13667377378'} text="点击进行发送短信"/>*/}
                {/*<CustomButton url={'tel:13667377378'} text="点击进行打电话"/>*/}
                {/*<CustomButton url={'mailto:309623978@qq.com'} text="点击进行发邮件"/>*/}
                {/*<CustomButton url={'dfy:888999'} text="无法打开url"/>*/}
                {/*<CustomButton url={'geo:37.484847,-122.148386'} text="点击打开一个地图位置"/>*/}
                {/*<CustomButton url={'myrnlinkdemo://index'} text="自己打开自己"/>*/}
                <CustomButton url={'myrnlinkdemo1://index/data'} text="打开myrnlinkdemo1 APP"/>

                <Text>
                    url参数：{this.state.params}
                </Text>

            </ScrollView>
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

