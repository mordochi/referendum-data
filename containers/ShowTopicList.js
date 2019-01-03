import { connect } from 'react-redux'
import { seeTopicDetail, markTopic, switchNotification } from '../actions'
import TopicList from '../components/TopicList'


const mapStateToProps = state => ({
  topics: state.topics,
  markTopics: state.markTopics,
  notification: state.notification
})

const mapDispatchToProps = dispatch => ({
  seeTopicDetail: name => dispatch(seeTopicDetail(name)),
  markTopic: name => dispatch(markTopic(name)),
  switchNotification: () => dispatch(switchNotification())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicList)
