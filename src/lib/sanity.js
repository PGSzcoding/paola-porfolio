import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanity = createClient({
	projectId: 'timw6ok7',
	dataset: 'production',
	useCdn: true, // faster (read-only)
	apiVersion: '2024-01-01'
})


const builder = imageUrlBuilder(sanity)

export function urlFor(source) {
	return builder.image(source)
}