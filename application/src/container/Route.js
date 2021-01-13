/**
 * @ Author: zhenghui
 * @ Create Time: 2020-07-10 14:15:20
 * @ Modified by: ZhengHui
 * @ Modified time: 2021-01-10 22:43:55
 * @ Description: 页面路由
 */

import React from 'react';
import {StatusBar, Image, useColorScheme, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {navigationRef} from '../components/NavigationService';

// 主页面
import HomePage from '../page/home/index';
import MePage from '../page/me/index';
import WebViewPage from '../components/WebView';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTabScreen = () => (
  <BottomTab.Navigator
    initialRouteName={'HomePage'}
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: '#646465',
      keyboardHidesTabBar: true,
    }}>
    <Stack.Screen
      name="HomePage"
      component={HomePage}
      options={{tabBarLabel: '首页'}}
    />
  </BottomTab.Navigator>
);

function Root({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyle: {backgroundColor: 'transparent'},
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({current: {progress}}) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'clamp',
            }),
          },
        }),
      }}
      // 页面共享的配置
    >
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="MePage" component={MePage} />
      <Stack.Screen name="WebView" component={WebViewPage} />
    </Stack.Navigator>
  );
}
const Route = () => {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator>
          <Drawer.Screen name="揪揪词典" component={Root} />
          <Drawer.Screen name="关于我" component={MePage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Route;
