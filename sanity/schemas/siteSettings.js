export default {
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    { name: 'title', title: 'Site Title', type: 'string' },
    { name: 'logo', title: 'Logo', type: 'image' },
    { name: 'welcome', title: 'Welcome Message', type: 'text' }
  ]
}
