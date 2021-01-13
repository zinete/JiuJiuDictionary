/**
 * @ Author: ZhengHui
 * @ Create Time: 2020-08-25 21:59:50
 * @ Modified by: ZhengHui
 * @ Modified time: 2021-01-10 23:05:45
 * @ Description: webview容器
 */

import WebView from 'react-native-webview';
import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Header from './Header';

class WebViewPage extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      progress: 0,
      backButtonEnabled: false,
      title: '加载中...',
    };
  }
  onNavigationStateChange = (navState) => {
    console.log(navState, 'navState');
    this.setState({
      backButtonEnabled: navState.canGoBack,
      title: navState.title || this.props.title,
    });
  };

  //自定义返回事件
  _goBackPage = () => {
    //为true则表示该webView有回退事件
    if (this.state.backButtonEnabled) {
      this.myRef.current.goBack();
    } else {
      //否则返回到上一个页面
      if (this.props.webViewleftFun) {
        this.props.webViewleftFun();
      } else {
        this.props.navigation.goBack();
      }
    }
  };
  render() {
    const {uri} = this.props || this.props.route.params;
    const {progress, title} = this.state;
    return (
      <Header
        title={title}
        leftClick={() => {
          this._goBackPage();
        }}
        child={() => {
          return (
            <>
              <View style={{height: 2, backgroundColor: '#f0f0f0'}}>
                {this.state.progress !== 100 && (
                  <View
                    style={{
                      height: 2,
                      width: progress + '%',
                      backgroundColor: '#4687F5',
                    }}
                  />
                )}
              </View>
              <WebView
                style={{flex: 1}}
                ref={this.myRef}
                onNavigationStateChange={this.onNavigationStateChange}
                source={{uri: uri}}
                // 设置进度 progress值为0～100%
                onLoadProgress={({nativeEvent}) =>
                  this.setState({progress: nativeEvent.progress * 100})
                }
                renderError={(err) => {
                  return null;
                  // return (
                  //   <View>
                  //     <View
                  //       style={{
                  //         width: "100%",
                  //         justifyContent: "center",
                  //         flexDirection: "row",
                  //         alignItems: "center",
                  //         paddingTop: 20,
                  //       }}
                  //     >
                  //       <Image
                  //         source={require("../../src/static/order/nodata.png")}
                  //         style={{
                  //           width: 170,
                  //           height: 170,
                  //           marginTop: 10,
                  //         }}
                  //       />
                  //     </View>
                  //   </View>
                  // );
                }}
              />
            </>
          );
        }}
      />
    );
  }
}

export default WebViewPage;
