export default {
  name: 'strategy',
  title: 'Strategy',
  type: 'document',
  fields: [
    { name: 'title', title: 'Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'color', title: 'Color', type: 'string', options: { list: [
      {title: 'Blue', value: '#60a5fa'},
      {title: 'Green', value: '#34d399'},
      {title: 'Orange', value: '#fbbf24'},
      {title: 'Red', value: '#f87171'}
    ]}},
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    // placeholder for future user ownership
    { name: 'ownerId', title: 'Owner ID', type: 'string' }
  ]
}
