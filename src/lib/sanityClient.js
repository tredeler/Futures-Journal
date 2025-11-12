// src/lib/sanityClient.js
const client = {
  fetch: async (query) => {
    console.log('Mock Sanity query:', query);
    return []; // Return empty array for now
  }
};

export default client;