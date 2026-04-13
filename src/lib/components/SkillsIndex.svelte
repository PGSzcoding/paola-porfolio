<script>
    import { VerticalAcordeon } from "$components";
    import { lang } from "$lib/stores/general";
    const { skills } = $props()
    
</script>

<div class="skills-index bg-blue-lines p-5">
   <h1 class="title cursive2  px-4 mb-4">{skills.title[$lang]}</h1> 
   <VerticalAcordeon cards = {skills.skillsLists}/>
</div>


<style>
    .skills-index{position: relative; }
  .skills-index .title{font-size: 6rem;}

    @media (max-width: 767px) {
        .skills-index{text-align: center;}
        .skills-index .title{font-size: 4rem;}
    }
</style>