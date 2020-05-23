// culture component test file

import { shallowMount } from '@vue/test-utils'
import Progress from '@/views/partials/Progress'

describe('Progress.vue', () => {
  const items = [
    {
      year: '2015',
      step: 'Founded in Singapore by Gabriel Lim, Ethan Le, and Venus Wong'
    },
    {
      year: '2016',
      step: 'Accepted into Y Combinator (S16) and moved to San Francisco'
    },
    {
      year: '2017',
      step: 'Raised US$1.2M in seed funding and hired core engineers'
    },
    {
      year: '2018',
      step: 'Raised US$5.3M in Series A and expanded team size'
    },
    {
      year: '2019',
      step: 'Raised US$5.3M in Series A and expanded team size'
    },
    {
      year: '2020',
      step: 'Opened US office in Washington, DC and hired US sales team'
    }
  ]

  const wrapper = shallowMount(Progress, {
    propsData: { items }
  })

  it('renders Header component when mounted', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders li for each item in props.list', () => {
    expect(wrapper.findAll('tr.progress-items')).toHaveLength(items.length)
  })
})
