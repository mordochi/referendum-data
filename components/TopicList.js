import React from 'react';
import PropTypes from 'prop-types';
import { View, SectionList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScaleAndOpacity } from 'react-native-motion';

const TopicList = ({ topics, markTopics, seeTopicDetail, markTopic }) => (
  <View>
    <ScaleAndOpacity scaleMin={0.97}>
      <Text style={styles.sectionTitle}>
        歷屆台灣公民投票結果
      </Text>
      <SectionList
        contentContainerStyle={styles.list}
        stickySectionHeadersEnabled={false}
        sections={topics}
        keyExtractor={(item) => item}
        renderItem={({item}) => <TouchableOpacity onPress={() => {markTopic(item);seeTopicDetail(item);}}>
          <View style={[markTopics.includes(item) ? [styles.itemBox, styles.seenBox] : styles.itemBox]}>
            <Text style={[markTopics.includes(item) ? [styles.item, styles.seen] : styles.item]}>{item}</Text>
          </View>
        </TouchableOpacity>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      />
    </ScaleAndOpacity>
  </View>
)

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'transparent',
  },
  sectionTitle: {
    fontSize: 24,
    marginTop: 100,
    marginLeft: 35,
    letterSpacing: 5,
    color: '#e3e5e6'
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
  seenBox: {
    backgroundColor: 'rgba(62, 106, 140, .6)'
  },
  item: {
    fontSize: 16,
    letterSpacing: 3,
    color: '#f7f9fa',
  },
  seen: {
    color: '#c5c7c8',
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
  seeTopicDetail: PropTypes.func.isRequired,
  markTopic: PropTypes.func.isRequired
}

export default TopicList
