const topicsInitialState = [
  {
    title: '2018',
    data: [
      '07 反空污',
      '08 反燃煤發電',
      '09 反日本核食',
      '10 民法婚姻排除同性結合',
      '11 國中小禁止實施同志教育',
      '12 非民法保障同性共同生活',
      '13 2020東京奧運台灣正名',
      '14 以民法保障同性婚姻',
      '15 國中小性別平等教育明定入法',
      '16 廢止電業法非核家園條文'
    ]
  },
  {
    title: '2008',
    data: [
      '03 討黨產',
      '04 反貪腐',
      '05 台灣入聯合國',
      '06 務實返聯公投',
    ]
  },
  {
    title: '2004',
    data: [
      '01 強化國防',
      '02 對等談判'
    ]
  }
];

function topics(state = topicsInitialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

function topicDetail(state = '', action) {
  switch (action.type) {
    case 'SEE_TOPIC_DETAIL':
      return action.name
    case 'BACK_TO_TOPIC_LIST':
      return ''
    default:
      return state
  }
}

function markTopics(state = [], action) {
  switch (action.type) {
    case 'MARK_TOPIC':
      return [
        ...state,
        action.name
      ]
    default:
      return state
  }
}

export default function referendumApp(state = {}, action) {
  return {
    topics: topics(state.topics, action),
    topicDetail: topicDetail(state.topicDetail, action),
    markTopics: markTopics(state.markTopics, action)
  }
}