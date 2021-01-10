/**
 * @ Author: ZhengHui
 * @ Create Time: 2021-01-10 00:41:57
 * @ Modified by: ZhengHui
 * @ Modified time: 2021-01-10 00:49:40
 * @ Description:
 */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MeIndex = () => (
  <View style={styles.me_body}>
    <Text>MeIndex</Text>
  </View>
);

const styles = StyleSheet.create({
  me_body: {
    flex: 1,
    backgroundColor: '#ffae00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MeIndex;
