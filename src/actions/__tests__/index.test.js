import {saveComment} from "actions/index"
import {SAVE_COMMENT} from "actions/types"

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = saveComment('foo')
    expect(action.type).toEqual(SAVE_COMMENT)
  })

  it('has the correct payload', () => {
    const comment = 'foo'
    const action = saveComment(comment)

    expect(action.payload).toEqual(comment)
  })
})