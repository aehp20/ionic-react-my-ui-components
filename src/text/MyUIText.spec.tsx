/**
 * @jest-environment jsdom
 */

import React from 'react'
import * as renderer from 'react-test-renderer'

import { MyUIText } from './MyUIText'

test("Component should show 'Name' text", () => {
  const component = renderer.create(<MyUIText>Name</MyUIText>)
  const tree = component.toJSON()

  expect(tree!.children).toMatchObject(['Name'])
  expect(tree).toMatchSnapshot()
})
