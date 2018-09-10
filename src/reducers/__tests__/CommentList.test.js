import React from 'react'
import  {mount } from 'enzyme'
import CommentList from 'components/CommentList'
import Root from 'root'

let wrapped
const comments = ['Comment 1', 'Comment 2']

beforeEach(() => {
  const initialState = {
    comments
  }
   wrapped = mount(
     <Root initialState={initialState}>
       <CommentList/>
     </Root>
   )
})

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
});

it('shows the text for each comment', () => {
  const text = wrapped.render().text()
  comments.forEach(comment => {
    expect(text).toContain(comment)
  })
});