import { connect } from 'react-redux'
import { markTopic } from '../actions'
import TopicList from '../components/TopicList'

const mapStateToProps = state => {
  return {
    topics: state.topics
  };
};

const mapDispatchToProps = dispatch => ({
  markTopic: index => dispatch(markTopic(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicList)
