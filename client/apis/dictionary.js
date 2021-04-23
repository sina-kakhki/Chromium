import request from 'superagent'

const api = '/api/v1/dictionary/'

export function getWord(word, dispatch) {
  request.get(api + word)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log('error');
    })
}