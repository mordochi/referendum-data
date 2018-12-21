import { connect } from 'react-redux'
import { seeTopicDetail, markTopic } from '../actions'
import TopicList from '../components/TopicList'


const mapStateToProps = state => ({
  topics: state.topics,
  markTopics: state.markTopics
})

const mapDispatchToProps = dispatch => ({
  seeTopicDetail: name => dispatch(seeTopicDetail(name)),
  markTopic: name => dispatch(markTopic(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicList)
