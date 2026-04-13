import { sanity } from '$lib/sanity'
export async function load({params}) {
    const { ref } = params; 
    const project = await sanity.fetch(`*[_type == "projects" && _id == '${ref}'][0] `)
    return project
}