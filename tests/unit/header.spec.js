import { shallowMount } from '@vue/test-utils'
import Header from '@/components/shared/Header'

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.element).toMatchSnapshot()
  })
})
