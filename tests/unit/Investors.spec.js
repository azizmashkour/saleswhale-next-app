// investors component test file

import { shallowMount } from '@vue/test-utils'
import Investors from '@/views/partials/Investors'

describe('Investors.vue', () => {
  const wrapper = shallowMount(Investors)

  it('renders Investors component when mounted', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders the component h2 tag title', () => {
    expect(wrapper.contains('h2.investors-title')).toBe(true)
    expect(wrapper.find('h2.investors-title').text()).toEqual('Our Investors')
  })

  it('renders the component h2 tag title', () => {
    expect(wrapper.contains('h3.see-the-future')).toBe(true)
    expect(wrapper.find('h3.see-the-future').text()).toEqual('See the future')
  })

  it('has the login button with the text `Get a Demo`', () => {
    expect(wrapper.contains('a.get-demo')).toBe(true)
    expect(wrapper.find('a.get-demo').text()).toMatch('Get a Demo')
  })

  it('has the get a demo button with the text `Read use cases`', () => {
    expect(wrapper.contains('a.read-use-cases')).toBe(true)
    expect(wrapper.find('a.read-use-cases').text()).toMatch('Read use cases')
  })
})
