<script>
    import { HeroIndex,AboutMeIndex,ProjectsIndex,SkillsIndex, ContactMeIndex, ScrollSections } from "$components";
    import { onMount, tick } from "svelte";
    import { afterNavigate } from '$app/navigation';

	const { data } = $props()
 
    onMount(()=>{
       
    })


afterNavigate(async () => {
/*	const el = document.querySelector(window.location.hash);
	if (el) {el.scrollIntoView({ behavior: 'smooth' })};*/
});

   
</script>

<div class="home">

    <HeroIndex hero={data.hero}/>

    <div data-aos="fade-up">
        <hr class="line-separator my-0" >
    </div>


    <div class="d-sm-block d-none">
    <ScrollSections>
        <div slot="section1" id="about"> <AboutMeIndex about_me ={data.about_me}/> </div>
        <div slot="section2"><hr class="line-separator my-0" ><ProjectsIndex projects = {data.projects}/></div>
    </ScrollSections>
    </div>
    <div class="d-block d-sm-none">
    <div  id="about"> 
        <AboutMeIndex about_me ={data.about_me}/> 
    </div>
    <hr class="line-separator my-0" ><ProjectsIndex projects = {data.projects}/>
    </div>




    <hr class="line-separator my-0">
    <SkillsIndex skills ={data.skills}/>
    <hr class="line-separator my-0">
    <ContactMeIndex/>
    <hr class="line-separator my-0">
</div>


<style>
.home{overflow: auto;}
    .line-separator{border: 1px solid black;}
</style>
