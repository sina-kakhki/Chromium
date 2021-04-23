import { setWord } from '../../actions/dictionary'

import { getWord } from '../../apis/dictionary'


export function setDictionary(dispatch, word) {
  console.log('dict helper')
  return getWord(word)
    .then(res => {
      console.log('helper', res);
      dispatch(setWord(formatter(res.results[0])))
    })
    .catch(err => {
      console.log(err.message);
    })
}

function formatter(input) {
  const word = {}
  word.word = input.id
  word.audio = input.lexicalEntries[0].entries[0].pronunciations[0].audioFile
  word.definitions = input.lexicalEntries[0].entries[0].senses.map(sense => ({
    def: sense.definitions[0],
    example: sense.examples[0].text
  }))
  return word
}

