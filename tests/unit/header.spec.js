import { shallowMount } from '@vue/test-utils'
import Header from '@/components/shared/Header'

describe('Header.vue', () => {
  const items = [
    {
      title: 'Why Saleswhale?',
      className: 'sales'
    },
    {
      title: 'Product',
      className: 'product'
    },
    {
      title: 'Company',
      className: 'company'
    }
  ]

  const wrapper = shallowMount(Header, {
    propsData: { items }
  })

  describe('contains navbar menu element ', () => {
    it('renders Header component when mounted', () => {
      expect(wrapper.element).toMatchSnapshot()
    })

    it('renders the correct markup', () => {
      expect(wrapper.html()).toContain('<a href="#">OUR COVID-19 RESPONSE</a>')
    })

    it('renders li for each item in props.list', () => {
      expect(wrapper.findAll('li.list-items')).toHaveLength(items.length)
    })

    it('has the login button with the text `Login`', () => {
      expect(wrapper.contains('a.login-btn')).toBe(true)
      expect(wrapper.find('a.login-btn').text()).toMatch('Login')
    })

    it('has the get a demo button with the text `Get a Demo`', () => {
      expect(wrapper.contains('a.get-demo-btn')).toBe(true)
      expect(wrapper.find('a.get-demo-btn').text()).toMatch('Get a Demo')
    })
  })

  describe('contains title and paragraphes ', () => {
    it('renders the header h1 tag title', () => {
      expect(wrapper.contains('h1.wow-h1')).toBe(true)
      expect(wrapper.find('h1.wow-h1').text()).toEqual('A future where AI and humans work hand in hand')
    })

    it('renders the header p tag with wow-p.p1 className', () => {
      expect(wrapper.contains('p.wow-p.p1')).toBe(true)
      expect(wrapper.find('p.wow-p.p1').text()).toEqual('At Saleswhale, we believe that the future of work is Collaborative Intelligence - where machines and AI help humans fulfil their highest potential by automating drudgery and producing for more effective results.')
    })

    it('renders the header p tag with wow-p.p2 className', () => {
      expect(wrapper.contains('p.wow-p.p2')).toBe(true)
      expect(wrapper.find('p.wow-p.p2').text()).toEqual('AI assistants help to automate repetitive and mundane tasks so that us humans focus on creative, high-impact work that creates value and inspires. The result? Happier and more productive teams doing meaningful work.')
    })

    it('renders the header p tag with wow-p.p3 className', () => {
      expect(wrapper.contains('p.wow-p.p3')).toBe(true)
      expect(wrapper.find('p.wow-p.p3').text()).toEqual("Our mission is to put an AI assistant in every company that could greatly benefit from it, and we're starting off strong addressing this need in marketing and sales teams all across the world.")
    })

    it('renders the header p tag with wow-p.p4 className', () => {
      expect(wrapper.contains('p.wow-p.p4')).toBe(true)
      expect(wrapper.find('p.wow-p.p4').text()).toEqual('The future is where AI and humans work hand in hand, and we’re here to help businesses benefit from that.')
    })
  })
})
