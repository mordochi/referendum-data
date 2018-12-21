import { connect } from 'react-redux'
import TopicDetail from '../components/TopicDetail'


const mapStateToProps = state => ({
  topicDetail: state.topicDetail
})

export default connect(
  mapStateToProps
)(TopicDetail)
