// culture component test file

import { shallowMount } from '@vue/test-utils'
import Culture from '@/views/partials/Culture'

describe('Culture.vue', () => {
  const items = [
    {
      title: 'Building for the future',
      content: 'We always challenge the status quo and work hard innovating on a product that not only works, but changes the game for our users.'
    },
    {
      title: 'Promoting trust & transparency',
      content: 'We remain completely open, honest and transparent with everyone. This has allowed us to build strong relationships with each other.'
    },
    {
      title: 'Achieving our very best',
      content: 'We believe the success of the company lies within our employees and we constantly challenge each other to learn and level up.'
    }
  ]

  const wrapper = shallowMount(Culture, {
    propsData: { items }
  })

  describe('contains list items ', () => {
    it('renders Header component when mounted', () => {
      expect(wrapper.element).toMatchSnapshot()
    })

    it('renders li for each item in props.list', () => {
      expect(wrapper.findAll('div.culture-items')).toHaveLength(items.length)
    })
  })

  describe('contains title and paragraphe', () => {
    it('renders the header h1 tag title', () => {
      expect(wrapper.contains('h2.our-culture')).toBe(true)
      expect(wrapper.find('h2.our-culture').text()).toEqual('Our Culture')
    })

    it('renders the header p tag with our-culture-paragraph className', () => {
      expect(wrapper.contains('p.our-culture-paragraph')).toBe(true)
      expect(wrapper.find('p.our-culture-paragraph').text()).toEqual('At Saleswhale, we encourage everyone to grow and innovate, while having fun in the process.')
    })

    it('renders the header p tag with exited className', () => {
      expect(wrapper.contains('p.exited')).toBe(true)
      expect(wrapper.find('p.exited').text()).toEqual('If you are excited by our vision of the future, and want to solve meaningful problems, talk to us!')
    })

    it('has the get a demo button with the text `Join the team`', () => {
      expect(wrapper.contains('a.join-team')).toBe(true)
      expect(wrapper.find('a.join-team').text()).toMatch('Join the team')
    })
  })
})
