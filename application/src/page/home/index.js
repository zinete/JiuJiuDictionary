/**
 * @ Author: ZhengHui
 * @ Create Time: 2021-01-10 00:41:57
 * @ Modified by: ZhengHui
 * @ Modified time: 2021-01-10 20:52:20
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
import Header from '../../components/Header';
import * as fanyiAction from '../../action/fanyiAction';
const HomeIndex = ({navigation}) => {
  return (
    <Header
      leftClick={() => {
        navigation.openDrawer();
      }}
      title="揪揪词典"
      child={() => {
        return (
          <ScrollView style={styles.home_scroll}>
            <View
              style={{
                marginTop: 50,
              }}>
              <View style={styles.search_box}>
                <TextInput
                  placeholder="请输入要查询的词汇"
                  placeholderTextColor="#333"
                  style={styles.search_input}></TextInput>
                <Button
                  title="GO !"
                  color="#fff"
                  onPress={() => {
                    // navigation.navigate('MePage');
                    fanyiAction.getFanyiAction('世界');
                  }}
                />
              </View>
              {/* 翻译主体*/}
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: '#fff',
                  marginTop: 45,
                  padding: 15,
                }}>
                <Text
                  style={{
                    fontSize: 23,
                    marginTop: 0,
                    marginBottom: 6,
                    color: '#fff',
                  }}>
                  Happy Day
                </Text>
                <Text style={styles.resText}>英 [ˈhæpi deɪ] </Text>
                <Text style={styles.resText}>美 [ˈhæpi deɪ] </Text>
                <Text style={styles.resText}>新春如意（歌名）</Text>
              </View>
            </View>
          </ScrollView>
        );
      }}></Header>
  );
};

const styles = StyleSheet.create({
  home_scroll: {
    flex: 1,
    backgroundColor: '#312c51',
    marginHorizontal: 20,
  },
  search_input: {
    padding: 12,
    borderWidth: 1,
    borderColor: 'pink',
    backgroundColor: '#dedede',
    borderRadius: 4,
    flex: 1,
  },
  search_box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  resText: {
    color: '#fff',
    lineHeight: 22,
  },
});
export default HomeIndex;
