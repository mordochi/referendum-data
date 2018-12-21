import { connect } from 'react-redux'
import { markTopic } from '../actions'
import TopicList from '../components/TopicList'


const mapStateToProps = state => ({
  topics: state.topics,
  markTopics: state.markTopics
})

const mapDispatchToProps = dispatch => ({
  markTopic: name => dispatch(markTopic(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicList)
