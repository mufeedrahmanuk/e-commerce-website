import ImageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

// Initialize the Sanity client
export const client = createClient({
    projectId: 'efoeraaf',
    dataset: 'production',
    apiVersion: '2024-05-20',
    useCdn: true,
});

// Initialize the image URL builder
const builder = ImageUrlBuilder(client);

// Function to generate image URLs
export function urlFor(source: any) {
    return builder.image(source);
}
