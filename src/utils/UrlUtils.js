const UrlUtils = {

    /**
     * 将url的参数转化成json对象
     * @param url
     */
    getUrlParamsToJSON: (url) => {
        const params = {};
        //去除所有空格
        url = url.replace(/\s/ig, '');
        //正则表达式匹配
        url.replace(/([^?&=]+)=([^&]+)/g, (_, key, value) => {
            params[key] = value;
        });
        return params;
    },


    /**
     * 获取URL的查询参数，并将参数放入map。
     */
    getUrlParamsToMap: (url) => {
        const params = new Map();
        //去除所有空格
        url = url.replace(/\s/ig, '');
        //正则表达式匹配
        url.replace(/([^?&=]+)=([^&]+)/g, (_, key, value) => {
            params.set(key, value);
        });
        return params;
    },

};

export default UrlUtils;
