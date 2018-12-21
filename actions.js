export const seeTopicDetail = name => ({
  type: 'SEE_TOPIC_DETAIL',
  name
})

export const backToTopicList = () => ({
  type: 'BACK_TO_TOPIC_LIST'
})

export const markTopic = name => ({
  type: 'MARK_TOPIC',
  name
})