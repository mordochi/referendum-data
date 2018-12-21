import { connect } from 'react-redux'
import { backToTopicList } from '../actions'
import TopicDetail from '../components/TopicDetail'


const mapStateToProps = state => ({
  topicDetail: state.topicDetail
})

const mapDispatchToProps = dispatch => ({
  backToTopicList: () => dispatch(backToTopicList())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicDetail)
