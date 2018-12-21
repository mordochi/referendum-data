import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const TopicDetail = ({ topicDetail }) => (
  <View style={styles.detailBox}>
    <Text style={styles.title}>{topicDetail.split(' ')[0]}</Text>
    <Text style={[styles.title, styles.titleGap]}>{topicDetail.split(' ')[1]}</Text>
    <Text style={styles.sectionTitle}>公投主文</Text>
    <Text style={styles.sectionTitle}>公投結果</Text>
    <Text style={styles.sectionTitle}>同意票比例</Text>
    <Text style={styles.sectionTitle}>票數分佈</Text>
  </View>
)

const styles = StyleSheet.create({
  detailBox: {
    paddingTop: 145,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 20,
    color: '#f7f9fa',
    letterSpacing: 5,
    marginBottom: 2,
  },
  titleGap: {
    marginBottom: 38,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#5f839f',
    letterSpacing: 3,
    marginTop: 30,
  }
})

TopicDetail.propTypes = {
  topicDetail: PropTypes.string.isRequired,
}

export default TopicDetail