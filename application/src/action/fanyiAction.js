/**
 * @ Author: ZhengHui
 * @ Create Time: 2021-01-10 20:29:09
 * @ Modified by: ZhengHui
 * @ Modified time: 2021-01-10 22:23:31
 * @ Description:
 */

import axios from 'axios';
import MD5 from '../config/function/Md5';
import QS from 'qs';
export async function getFanyiAction(word) {
  var appid = 20210110000668091;
  var key = '12345678';
  var salt = new Date().getTime();
  var query = 'apple';
  // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
  var from = 'en';
  var to = 'zh';
  var str1 = appid + query + salt + key;
  var sign = MD5(str1);
  console.log(sign);
  let url = `http://api.fanyi.baidu.com/api/trans/vip/translate?&q=${query}&appid=${appid}&salt=${salt}&from=en&to=zh&sign=${sign}`;
  fetch(url, {
    method: 'get',
  })
    .then((response) => response.json()) // json方式解析，如果是text就是 response.text()
    .then((responseData) => {
      // 获取到的数据处理
      console.log(responseData, 'fff');
    })
    .catch((error) => {
      // 错误处理
    })
    .done();
}
