import React from 'react'
import { shallow } from 'enzyme'

import { component as NavMenu } from '../NavMenu'
import NavItem from '../NavItem'
import { defaultConfig } from '../../config'

const setup = (testProps = {}) => {
  const props = Object.assign(
    { header: { open: true }, config: defaultConfig },
    testProps,
  )

  const wrapper = shallow(
    <NavMenu {...props}>
      <NavItem>About</NavItem>
      <NavItem>Blog</NavItem>
      <button type="button">Download</button>
    </NavMenu>,
  )

  return {
    props,
    wrapper,
  }
}

describe('NavMenu', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
