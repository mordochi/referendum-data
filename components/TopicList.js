import React from 'react'
import PropTypes from 'prop-types'
import { View, SectionList, Text, StyleSheet } from 'react-native'

const width = '80%';

const TopicList = ({ topics, markTopic }) => (

    <SectionList
      contentContainerStyle={styles.list}
      sections={topics}
      keyExtractor={(item) => item}
      renderItem={({item}) => <View style={styles.itemBox}><Text style={styles.item} onClick={() => markTopic(item)}>{item}</Text></View>}
      renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
    />

)

const styles = StyleSheet.create({
  outer: {

  },
  list: {
    backgroundColor: '#fff',
  },
  sectionHeader: {

  },
  itemBox: {
    marginVertical: 3,
    paddingVertical: 20,
    paddingHorizontal: 35,
    backgroundColor: 'rgba(15, 70, 112, .6)',
  },
  item: {
    fontSize: 16,
    letterSpacing: 3,
  },
})

TopicList.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired
  }).isRequired).isRequired,
  markTopic: PropTypes.func.isRequired
}

export default TopicList