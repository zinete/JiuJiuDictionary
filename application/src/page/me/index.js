/**
 * @ Author: ZhengHui
 * @ Create Time: 2021-01-10 00:41:57
 * @ Modified by: ZhengHui
 * @ Modified time: 2021-01-10 23:06:21
 * @ Description:
 */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import WebViewPage from '../../components/WebView';
const MeIndex = ({navigation}) => (
  <WebViewPage
    uri={'https://www.v2ex.com/'}
    webViewleftFun={() => {
      navigation.openDrawer();
    }}
  />
);

const styles = StyleSheet.create({
  me_body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MeIndex;
