/**
 * @ Author: ZhengHui
 * @ Create Time: 2021-01-10 19:50:28
 * @ Modified by: ZhengHui
 * @ Modified time: 2021-01-14 21:12:05
 * @ Description:
 */

import React from 'react';
import {
  useColorScheme,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
function Header({
  screenName,
  title,
  leftClick,
  rightTitle,
  rightColor,
  rightClick,
  rightTitleStyle,
  rightImage,
  icon,
  isshow,
  child,
}) {
  const navigation = useNavigation();
  const scheme = useColorScheme();
  const [isKeybored, setKeyboredHeight] = React.useState(false);
  // StatusBar.setBackgroundColor('#fff');
  StatusBar.setBarStyle(scheme == 'dark' ? 'light-content' : 'dark-content');
  return (
    <SafeAreaView style={[styles.header_body]} edges={['top', 'bottom']}>
      {child()}
      <View style={styles.titleTopbar}>
        <TouchableOpacity
          onPress={() => {
            if (typeof leftClick === 'function') {
              leftClick();
              Keyboard.dismiss();
            } else {
              navigation.goBack();
            }
          }}
          style={styles.onSize}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../src/static/home/nav_list.png')}
          />
        </TouchableOpacity>
        {title ? (
          // <Text style={styles.title} numberOfLines={1}>
          //   {title}
          // </Text>
          <TextInput
            style={styles.title}
            placeholderTextColor="#ddd"
            placeholder="请输入要查询的单词"></TextInput>
        ) : null}
        {rightTitle ? (
          <TouchableOpacity
            onPress={() => {
              if (typeof rightClick === 'function') {
                rightClick();
              }
            }}
            style={styles.rightTitle}>
            <Text
              style={[
                {
                  color: '#000',
                  fontSize: 16,
                  lineHeight: 44,
                },
                rightTitleStyle,
              ]}>
              {rightTitle}
            </Text>
          </TouchableOpacity>
        ) : null}

        {rightImage ? (
          <TouchableOpacity
            onPress={() => {
              if (typeof rightImage === 'function') {
                rightImage();
              }
            }}
            style={styles.rightTitle}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={require('../../src/static/home/nav_list.png')}
              color={styles.iconsty.color}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconsty: {
    color: '#000',
  },
  header_body: {
    flex: 1,
    backgroundColor: '#312c51',
  },
  /*中间*/
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 32,
  },
  /*右边标题*/
  rightTitle: {
    position: 'absolute',
    right: 16,
  },
  titleTopbar: {
    paddingRight: 20,
    paddingLeft: 20,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#312c51',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,

    // borderBottomWidth: 1,
    // borderBottomColor: '#fff',
  },
  onSize: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    left: 16,
  },
});

export default Header;
