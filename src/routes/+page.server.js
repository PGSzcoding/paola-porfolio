import { sanity } from '$lib/sanity'

export async function load() {
	const data = await sanity.fetch(`*[_type == "hero" || _type == "about_me" || _type == 'skills' ||  _type=='projects']  `)
	const hero = !data?null:data.find(val=>val._id=="hero")
	const about_me = !data?null:data.find(val=>val._id=="about_me")
	const skills = !data?null:data.find(val=>val._id=="skills")
	const projects = !data?null:data.filter(val=>val._type=="projects" )
	return { hero ,about_me,skills,projects}
}