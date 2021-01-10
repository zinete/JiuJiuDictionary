/**
 * @ Author: ZhengHui
 * @ Create Time: 2021-01-10 00:41:57
 * @ Modified by: ZhengHui
 * @ Modified time: 2021-01-10 15:36:22
 * @ Description:
 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
  Keyboard,
  Button,
} from 'react-native';

const HomeIndex = ({navigation}) => {
  return (
    <SafeAreaView style={styles.home_body}>
      <ScrollView style={styles.home_scroll}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 100,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <TextInput
              placeholder="请输入要查询的词汇"
              placeholderTextColor="#333"
              style={{
                padding: 12,
                borderWidth: 1,
                borderColor: 'pink',
                backgroundColor: '#dedede',
                borderRadius: 4,
                flex: 1,
              }}></TextInput>
            <Button title="GO !" style={{flex: 2}} color="#fff" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home_body: {
    flex: 1,
    backgroundColor: '#312c51',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  home_scroll: {
    flex: 1,
  },
});
export default HomeIndex;
