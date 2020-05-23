// progress component test file

import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/shared/Footer'

describe('Office.vue', () => {
  const salesMenuItems = [
    { title: 'Collaborative Intelligence' },
    { title: 'AI Assistant Capabilities' },
    { title: 'Customer Stories' },
    { title: 'Use Case - Technology' },
    { title: 'Use Case - Education' },
    { title: 'Use Case - Events' }
  ]
  const productMenuItems = [
    { title: 'Product' },
    { title: 'AI Conversations' },
    { title: 'Lead Enrichment' },
    { title: 'Deal Intelligence' },
    { title: 'Workflow Integration' }
  ]
  const companyMenuItems = [
    { title: 'Company' },
    { title: 'About us' },
    { title: 'Blog' },
    { title: 'Ressources' },
    { title: 'Careers' },
    { title: 'Help Centre' }
  ]
  const contactMenuItems = [
    { title: 'hello@saleswhale.com', subtitled: false },
    { title: 'US Office', subtitled: true },
    { title: '1701 Rhode Island Ave NW Washington, DC 20036', subtitled: false },
    { title: 'Singapore Office', subtitled: true },
    { title: '155B Telok Ayer Street Singapore, 068611', subtitled: false }
  ]

  const wrapper = shallowMount(Footer, {
    propsData: { salesMenuItems, productMenuItems, companyMenuItems, contactMenuItems }
  })

  it('renders Office component when mounted', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders li for each sales menu item in props.list', () => {
    expect(wrapper.findAll('li>a.sales-items')).toHaveLength(salesMenuItems.length)
  })

  it('renders li for each product menu item in props.list', () => {
    expect(wrapper.findAll('li>a.product-items')).toHaveLength(productMenuItems.length)
  })

  it('renders li for each company menu item in props.list', () => {
    expect(wrapper.findAll('li>a.company-items')).toHaveLength(companyMenuItems.length)
  })

  it('renders li for each contact menu item in props.list', () => {
    expect(wrapper.findAll('li>a.contact-items')).toHaveLength(contactMenuItems.length)
  })

  it('has the login button with the text `Privacy Policy`', () => {
    expect(wrapper.contains('a.privacy-policy')).toBe(true)
    expect(wrapper.find('a.privacy-policy').text()).toMatch('Privacy Policy')
  })

  it('has the login button with the text `Terms of use`', () => {
    expect(wrapper.contains('a.terms-of-use')).toBe(true)
    expect(wrapper.find('a.terms-of-use').text()).toMatch('Terms of use')
  })

  it('has the login button with the text `&#169; 2020 SalesWhale, Inc. All rights reserved.`', () => {
    expect(wrapper.contains('p.copyright')).toBe(true)
    expect(wrapper.find('p.copyright').text()).toMatch('© 2020 SalesWhale, Inc. All rights reserved.')
  })
})
