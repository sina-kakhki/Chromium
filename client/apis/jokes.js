import request from 'superagent'

export function getJokes () {
  return request.get('/joke')
  .then(response => {
    console.log(response)
    return response.body
  })
  .catch(err => {
    console.log(err)
  })
}
