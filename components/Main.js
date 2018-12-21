import React from 'react'
import PropTypes from 'prop-types'
import ShowTopicDetail from '../containers/ShowTopicDetail'
import ShowTopicList from '../containers/ShowTopicList'

const Main = ({ topicDetail }) => (
  topicDetail !== '' ?
    <ShowTopicDetail /> :
    <ShowTopicList />
)

Main.propTypes = {
  topicDetail: PropTypes.string.isRequired,
}

export default Main
