/**
 * @ Author: ZhengHui
 * @ Create Time: 2021-01-10 14:02:18
 * @ Modified by: ZhengHui
 * @ Modified time: 2021-01-10 19:18:13
 * @ Description:
 */

import React from 'react';
import {TouchableOpacity, View} from 'react-native';

const JiuJiuBtn = () => {
  const [success, isSuccess] = React.useState(false);
  return (
    <View>
      <TouchableOpacity onPress={btnFun} {...props}>
        <Text>{btnFun}</Text>
      </TouchableOpacity>
    </View>
  );
};
