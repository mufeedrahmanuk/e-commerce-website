// sanity.config.js
import { defineConfig } from 'next-sanity';

export default defineConfig({
  projectId: 'your-project-id', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2024-05-20', // Replace with the API version you want to use
  useCdn: true, // Set to true if you want to use the CDN for faster response
});
