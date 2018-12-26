import React from 'react';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { TOPIC_DATA } from '../topicData';
import { VictoryPie } from 'victory-native';
import { ScaleAndOpacity } from 'react-native-motion';


const TopicDetail = ({ topicDetail, backToTopicList }) => (
  <ScrollView>
    <View style={styles.outerBox}>
      <TouchableOpacity onPress={() => backToTopicList()}>
        <AntDesign name="arrowleft" size={22} color="#6c8da7" />
      </TouchableOpacity>

      <ScaleAndOpacity scaleMin={0.97}>
        <View style={styles.detailBox}>
          <Text style={styles.title}>{ topicDetail.split(' ')[0] }</Text>
          <Text style={[styles.title, styles.titleGap]}>{ topicDetail.split(' ')[1] }</Text>
          <Text style={styles.sectionTitle}>公投主文</Text>
          <Text style={styles.content}>{ TOPIC_DATA[topicDetail].fullName }</Text>
          <Text style={styles.sectionTitle}>公投結果</Text>
          <Text style={styles.content}>{ TOPIC_DATA[topicDetail].pass ? '通過' : '否決' }</Text>
          <Text style={styles.sectionTitle}>同意票比例</Text>
          <Text style={styles.content}>{ (TOPIC_DATA[topicDetail].agree / ( TOPIC_DATA[topicDetail].agree + TOPIC_DATA[topicDetail].disagree ) * 100).toFixed(1) + '%' }</Text>
          <Text style={styles.sectionTitle}>票數分佈</Text>
          <VictoryPie
            data={[
              { x: `${((TOPIC_DATA[topicDetail].agree / ( TOPIC_DATA[topicDetail].agree + TOPIC_DATA[topicDetail].disagree ) * 100).toFixed(1) + '%')}同意`, y: TOPIC_DATA[topicDetail].agree },
              { x: `${((100 - (TOPIC_DATA[topicDetail].agree / ( TOPIC_DATA[topicDetail].agree + TOPIC_DATA[topicDetail].disagree ) * 100)).toFixed(1) + '%')}不同意`, y: TOPIC_DATA[topicDetail].disagree }
            ]}
            padding={0}
            width={Dimensions.get('window').width - 70}
            labelRadius={45}
            colorScale={["#bda53d", "#d3c176" ]}
            style={{ labels: { fill: "#f7f9fa", fontSize: 16 } }}
          />
        </View>
      </ScaleAndOpacity>
    </View>
  </ScrollView>
)

const styles = StyleSheet.create({
  outerBox: {
    paddingTop: 50,
    paddingHorizontal: 25,
  },
  detailBox: {
    paddingTop: 103,
    paddingHorizontal: 10,
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
    marginBottom: 5,
  },
  content: {
    color: '#f7f9fa',
    letterSpacing: 3,
    fontSize: 14,
    marginBottom: 30,
  }
})

TopicDetail.propTypes = {
  topicDetail: PropTypes.string.isRequired,
  backToTopicList: PropTypes.func.isRequired
}

export default TopicDetail