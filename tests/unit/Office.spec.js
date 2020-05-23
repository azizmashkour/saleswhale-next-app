// progress component test file

import { shallowMount } from '@vue/test-utils'
import Office from '@/views/partials/Office'

describe('Office.vue', () => {
  const items = [
    {
      title: 'Singapore',
      address: '155B Telok Ayer Street Singapore, 068611'
    },
    {
      title: 'Washington DC',
      address: '1701 Rhode Island Ave NW Washington, DC 20036'
    }
  ]

  const wrapper = shallowMount(Office, {
    propsData: { items }
  })

  it('renders Header component when mounted', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders the component h2 tag title', () => {
    expect(wrapper.contains('h2.office-title')).toBe(true)
    expect(wrapper.find('h2.office-title').text()).toEqual('Our Office')
  })

  it('renders li for each item in props.list', () => {
    expect(wrapper.findAll('div.office-items')).toHaveLength(items.length)
  })
})
