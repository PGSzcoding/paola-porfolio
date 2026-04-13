<script>
    import { GalleryGsap } from "$components";
    const { projects } = $props()
</script>

<div class="projects-index bg-yellow  pt-sm-5 pb-5 pt-2">
   <h1 data-aos="zoom-in" class="projects-title font1">VIEW <span class="cursive1">the</span> WORK</h1>
   <div class="galleryGsap-container" data-aos="zoom-in" data-aos-duration="1600">
    <GalleryGsap {projects} />
   </div>
</div>


<style>
    .projects-index{position: relative; text-align: center;min-height: 80vh;}
    .projects-title{font-size: 4.5rem;}
  
</style>