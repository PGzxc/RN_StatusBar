/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            hidden:false
        };
      }
  render() {
    return (
      <View style={styles.container}>
          <StatusBar
              animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
              hidden={this.state.hidden}  //是否隐藏状态栏。
              backgroundColor={'green'} //状态栏的背景色
              translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
              barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')
          />
        <TouchableOpacity style={{margin:30}} underlayColor={'#ccc'} onPress={this.onPress.bind(this,this.state.hidden)}>
            <Text>显示隐藏状态栏</Text>
        </TouchableOpacity>
      </View>
    );
  }
    onPress(hidden){
          this.setState({hidden:!hidden})
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
});
