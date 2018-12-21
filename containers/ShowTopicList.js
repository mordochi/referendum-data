import { connect } from 'react-redux'
import { seeTopicDetail, backToTopicList, markTopic } from '../actions'
import TopicList from '../components/TopicList'


const mapStateToProps = state => ({
  topics: state.topics,
  markTopics: state.markTopics
})

const mapDispatchToProps = dispatch => ({
  seeTopicDetail: name => dispatch(seeTopicDetail(name)),
  backToTopicList: dispatch(backToTopicList),
  markTopic: name => dispatch(markTopic(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicList)
