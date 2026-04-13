<script>
    import { CursorLink } from "$components";
    import { urlFor } from "$lib/sanity";
    import { lang } from "$lib/stores/general.js";
    import { onMount } from "svelte";
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';
	const { data } = $props()
    let project = data._id?data:null
</script>
<section>
    {#if project}
    <div class="row mx-0 mt-sm-5 mt-4 justify-content-center">
        <div class="col-4 d-lg-block d-none">
            <div class="cover-container" data-aos="zoom-in">
                <img class="cover" src="{urlFor(project.cover).url()}" alt="">
            </div>
        </div>
        <div class="col-lg-6 col-11">
            <div class="proyect-desc">
                <h1 class="" data-aos="fade-right">{project.title}</h1>
                {#if project.link_git || project.link_site}
                <div class="d-flex mt-2 links-d">
                    {#if project.link_git}
                        <a href="{project.link_git}" title="go to git" target="_blank" class="btn btn-pink btn-link btn-sm"><i class="bi bi-github"></i></a>
                    {/if}
                    {#if project.link_site}
                        <a href="{project.link_site}" title="go to site" target="_blank" class="btn btn-pink btn-link btn-sm"><i class="bi bi-link"></i></a>
                    {/if}
                </div>
                {/if}
                <p class="mt-4" data-aos="fade-right" data-aos-duration="1700">
                    {project.description[$lang]}
                </p>
                <div data-aos="fade-right" data-aos-duration="1700" class="project-tags mt-3 justify-content-lg-start justify-content-center">
            {#each project.tags as tag}
            <img class="mb-2 mx-1" src="/images/skills/{tag}.png" alt="{tag}" on:error={(e) => e.currentTarget.src = `/images/skills/${tag}.jpg`} />
            {/each}
            
          </div>
            </div>
        </div>
    </div>
     <div data-aos="fade-in" class=" mt-sm-4 mt-5 text-center bg-yellow pb-5 pt-3">
        {#if $lang == 'es'}
            <h1 data-aos="zoom-in" class="title-g"><span class="font1">Vista</span> <span class="cursive1 cursive mx-2">del</span> <span class="highlight-blue">Proyecto</span></h1>
        {:else}
            <h1 data-aos="zoom-in" class="title-g"><span class="font1">See</span> <span class="cursive1 cursive mx-2">the</span> <span class="highlight-blue">Project</span></h1>
        {/if}

        <div class="mb-4 mt-5 mt-lg-3 project-splide" data-aos="zoom-in">
            <Splide aria-label="project gallery" options={{type   : 'loop',perPage: 3,focus  : 'center',arrows:false,breakpoints: {623: { perPage: 1},903: { perPage: 1}}}}>
                {#each project.gallery  as img,i}
                    <SplideSlide>
                        <img class="img-gallery" src="{urlFor(img).url()}" alt="{project.title}{i}"/>
                    </SplideSlide>
                {/each}
            </Splide>
        </div>
        
     </div>
    {:else}
        <div class="not_found_proj text-center">
            <h3 class="mt-5"><b>{$lang=='en'?'Not found project':'Proyecto no encontrado'}</b></h3>
            <div class="link-proy">
                <CursorLink classes="text-dark-pink" text="{$lang=='es'?'Ver todos los proyectos...':'See all projects...'}" href='/proyectos'/>
            </div>
        </div>
    {/if}
</section>

<style>
    .not_found_proj{height: 80vh; padding-top: 3em;}
    .cover-container{background-image: url('/images/marco.png');background-size: cover;aspect-ratio: 1 / 1;width: 100%; max-width: 700px;}
    .cover{width: 96%; aspect-ratio: 1/1; object-fit: cover;    width: 96%;height: 88%;    position: relative;top: 10%;left: 2%;}
    .btn-link{margin-right: 10px; width: 60px;}
    .proyect-desc h1{font-size: 3.4rem;}
    .title-g .cursive{font-size: 4rem;}
    .title-g{font-size: 3.6rem;}
    .title-g .highlight-blue{font-weight: 200;}
    .proyect-desc p{font-size: 1.2rem;}
    .project-tags{display: flex; flex-wrap: wrap;}
    .project-tags img{width: 50px;}
    .img-gallery{max-width: 95%; object-fit: cover; height: 100%; border-radius: 15px;}

    @media only screen and (max-width: 900px) {
        .proyect-desc h1{text-align: center;}
        .links-d{justify-content: center;}
        .proyect-desc p{text-align: justify;line-height: 1.34;}
         .title-g{font-size: 2.6rem;}
     }
</style>