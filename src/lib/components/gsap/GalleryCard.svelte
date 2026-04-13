<script>
    import { urlFor } from "$lib/sanity";
    import { lang } from "$lib/stores/general";

    export let item
</script>
<a href="/proyectos/{item._id}">
    <div class="card-image" style="background-image:url({urlFor(item.cover).url()})"></div>
      
        <div class="card-content">
          <div class="card-header text-center">
            <h3 class="font1">{item.title}</h3>
          </div>
          <p class="card-description font2 my-2">{item.description[$lang]?.substring(0,170)}...</p>

          <div class="card-footer">
            {#each item.tags as tag}
            <img class="mb-2 mx-1" src="/images/skills/{tag}.png" alt="{tag}" on:error={(e) => e.currentTarget.src = `/images/skills/${tag}.jpg`} />
            {/each}
        
          </div>
    </div>
          </a>


<style>
.card-image { height: 40%; background-size: cover; background-position: center;position: relative;padding: 15px;}
.card-content {padding: 20px;flex-grow: 1;}
.card-footer{display: flex; justify-content: center; flex-wrap: wrap;} 
.card-footer img{width: 30px; height: 30px;}
.card-description{font-size: 14px; font-weight: 200; text-align: justify; line-height: 1.2;}
.card-header h3 {font-size: 18px;}
@media (max-width: 600px) { 
  .card-image{    height: 40%;
  }}

</style>