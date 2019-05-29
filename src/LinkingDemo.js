import React, {Component} from 'react';
import {Linking, ScrollView, StyleSheet, Text, Platform} from 'react-native';


const isIos = Platform.OS === 'ios';

export default class LinkingDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            params: '',
            msg: ''
        };
    }

    componentWillMount() {

        ///问题记录：Linking.getInitialURL()方法放到生命周期componentWillMount()方法中，
        // Android端当APP处于运行状态时，从外部URL唤醒APP，getInitialURL()返回的URL为null。

        // //Linking.getInitialURL()：IOS端中，APP在运行当中，这个方法是不能处理APP被外部URL调起的情况的。
        // //android端：APP未运行，或APP处于运行状态中，getInitialURL()方法都可以正常处理
        // Linking.getInitialURL().then((url) => {
        //     this.handleUrl(url);
        // }).catch(err => {
        //     console.error('错误信息为:', err);
        //     alert('错误信息为:' + err);
        // });

    }

    componentDidMount() {

        //Linking.getInitialURL()：IOS端中，APP在运行当中，这个方法是不能处理APP被外部URL调起的情况的。
        //android端：APP未运行，或APP处于运行状态中，getInitialURL()方法都可以正常处理
        Linking.getInitialURL().then((url) => {
            this.handleUrl(url);
        }).catch(err => {
            console.error('错误信息为:', err);
            alert('错误信息为:' + err);
        });

        if (isIos) {
            //要在 App 启动后也监听传入的 App 链接
            Linking.addEventListener('url', this._handleOpenURL);
        }

    }

    componentWillUnmount() {
        if (isIos) {
            Linking.removeEventListener('url', this._handleOpenURL);
        }
    }

    _handleOpenURL = (event) => {
        this.handleUrl(event.url);
    };

    // 取URL地址参数转为对象
    handleUrl = (url) => {
        if (url) {
            console.log('捕捉的URL地址为: ' + url);
            //alert('捕捉的URL地址为: ' + url);
            let urlObj = this.getUrlParamsToJSON(url);
            let params = '';
            if (urlObj) {
                for (let key in urlObj) {
                    params = params + `${key}=${urlObj[key]}\n`;
                }
            }
            this.setState({
                params: params,
                msg: 'APP被外部URL调起的，捕捉的URL地址为: ' + url,
            });
        } else {
            console.log('url为空');
            //alert('url为空');
            this.setState({
                msg:'url为空，APP不是被外部URL调起的'
            });
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


    /**
     * 获取URL的查询参数
     */
    getUrlParamsToMap = (url) => {
        var params = new Map();
        //去除所有空格
        url = url.replace(/\s/ig, '');
        //正则表达式匹配
        url.replace(/([^?&=]+)=([^&]+)/g, (_, key, value) => {
            params.set(key, value);
        });
        return params;
    };


    render() {
        return (
            <ScrollView style={{flex: 1, paddingTop: 30}}>
                <Text>状态描述：{this.state.msg}</Text>
                <Text style={{marginTop: 30}}>
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
