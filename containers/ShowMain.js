import { connect } from 'react-redux'
import Main from '../components/Main'


const mapStateToProps = state => ({
  topicDetail: state.topicDetail
})

export default connect(
  mapStateToProps
)(Main)
