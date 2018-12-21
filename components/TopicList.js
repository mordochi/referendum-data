import React from 'react'
import PropTypes from 'prop-types'
import { View, SectionList, Text, StyleSheet, TouchableOpacity } from 'react-native'

const TopicList = ({ topics, markTopics, markTopic }) => (
  <SectionList
    contentContainerStyle={styles.list}
    sections={topics}
    keyExtractor={(item) => item}
    renderItem={({item}) => <TouchableOpacity onPress={() => markTopic(item)}>
      <View style={styles.itemBox}>
        <Text style={[markTopics.includes(item) ? [styles.item,styles.a] : styles.item]}>{item}</Text>
      </View>
    </TouchableOpacity>}
    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
  />
)

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#033e6b',
  },
  sectionHeader: {
    fontSize: 20,
    marginTop: 70,
    marginLeft: 35,
    marginBottom: 30,
    letterSpacing: 3,
    color: '#5f839f'
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
    color: '#f7f9fa',
  },
  a: {
    textDecorationLine: 'line-through'
  }
})

TopicList.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired
  }).isRequired).isRequired,
  markTopics: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  markTopic: PropTypes.func.isRequired
}

export default TopicList