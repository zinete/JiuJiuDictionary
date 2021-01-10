/**
 * @ Author: zhenghui
 * @ Create Time: 2020-07-10 14:15:20
 * @ Modified by: ZhengHui
 * @ Modified time: 2021-01-10 15:21:39
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
import {TouchableOpacity} from 'react-native-gesture-handler';

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
      // 页面共享的配置
      screenOptions={{
        headerShown: true,
        gestureEnabled: false,
        animationEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name="揪揪词典"
        component={HomePage}
        options={{
          headerShown: true,
          headerTintColor: '#fff',
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity
              hitSlop={{
                right: 20,
                left: 20,
                top: 20,
                bottom: 20,
              }}
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Image
                style={{
                  marginLeft: 20,
                  height: 20,
                  width: 20,
                }}
                source={require('../static/home/nav_list.png')}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="MePage" component={MePage} />
    </Stack.Navigator>
  );
}
const Route = () => {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator>
          <Drawer.Screen name="Root" component={Root} />
          <Drawer.Screen name="MePage" component={MePage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Route;
