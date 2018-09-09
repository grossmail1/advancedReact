import commentsReducer from 'reducers/comments'
import {SAVE_COMMENT} from 'actions/types'

it('handles actions of save comments', () => {
  const newComment = 'new comment'

  const action = {
    type: SAVE_COMMENT,
    payload: newComment
  }

  const newState = commentsReducer([], action)
  expect(newState).toEqual([newComment])
});

it('handles action with unknown type', () => {
  const newState = commentsReducer([], {type: 'adsfjahsdf'})

  expect(newState).toEqual([])
});