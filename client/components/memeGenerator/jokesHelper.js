import { setJoke } from '../../actions/jokes'

export function setJoke(dispatch, joke) {
    console.log('joke helper')
    return getWord(joke)
        .then(res => {
            console.log('helper', res);
            dispatch(setJoke(formatter(res.results[0])))
        })
        .catch(err => {
            console.log(err.message);
        })
}