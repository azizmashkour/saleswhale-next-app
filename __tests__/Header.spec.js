import { mount } from '@vue/test-utils'
import Header from './src/components/shared/Header'

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header)
  expect(wrapper.element).toMatchSnapshot()
  })
})
