import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'xwb15wfq',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
})

export default client
