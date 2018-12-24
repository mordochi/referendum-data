import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import ShowTopicDetail from '../containers/ShowTopicDetail';
import ShowTopicList from '../containers/ShowTopicList';
import bg from '../assets/images/bg.png';


const Main = ({ topicDetail }) => (
  <View>
    <Image source={bg} style={styles.bg}></Image>
    {topicDetail !== '' ?
      <ShowTopicDetail /> :
      <ShowTopicList />}
  </View>
)

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    right: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.83,
  }
})

Main.propTypes = {
  topicDetail: PropTypes.string.isRequired,
}

export default Main
