import {
    Linking
} from 'react-native';

import UrlUtils from './UrlUtils';


const handleUrl = (url) => {
    if (url) {
        console.log('APP是外部URL调起：', url);
        if (!LinkingUtils.urlSet.has(url)) {
            console.log('第一次处理该URL:',url);
            LinkingUtils.urlSet.add(url);
            LinkingUtils.navigation && LinkingUtils.navigation.navigate('Main');
        }else{
            console.log('外部URL已被处理过:',url);
        }
    } else {
        console.log('APP不是外部URL调起的');
    }
};

const _handleOpenURL = (event) => {
    handleUrl(event.url);
};


class LinkingUtils {

    /**
     * 用于记录处理过的url，如果已经处理过该url，则不再处理。
     * @type {Set<any>}
     */
    static urlSet = new Set();

    /**
     * 用于页面导航
     */
    static navigation;

    static addInitialURLListener = (navigation) => {
        Linking.getInitialURL().then((url) => {
            handleUrl(url);
        }).catch(err => {
            console.error('错误信息为:', err);
            alert('错误信息为:' + err);
        });
    };

    /**
     * ios端在APP运行时需要监听以下事件
     * @param navigation
     */
    static addIOSEventListener = (navigation) => {
        LinkingUtils.navigation = navigation;
        Linking.addEventListener('url', _handleOpenURL);
    };

    static removeIOSEventListener = () => {
        Linking.removeEventListener('url', _handleOpenURL);
    };
}

export default LinkingUtils;
