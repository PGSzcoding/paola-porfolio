<script>
    import { urlFor } from "$lib/sanity";


    import { lang } from "$lib/stores/general";
    import { onMount } from "svelte";
    import { flip } from 'svelte/animate';
    import { fade, scale } from "svelte/transition";
    let activeFilter = $state('*');;
    	const { data } = $props()
      let items = data.projects
      let tags = $state([])
    onMount(()=>{
      updateTags()
    })

    function updateTags(){
        if(items){
            if(items.length>0){
                tags = [{ label: 'All', value: '*' },...[...new Set(items.flatMap(project => project.tags))]
                .map(tag => ({ label: tag.charAt(0).toUpperCase() + tag.slice(1), value: tag }))];
            }
        }
        tags = [...tags,{label:'Wordpress',value:'wordpress'}]
    }

const filteredItems = $derived( activeFilter === '*'
    ? items
    : items.filter(item => item.tags.includes(activeFilter))
);
    
</script>
<section class="project-section mb-5">
    <div class="text-center my-5">
        <h2 class="title" data-aos="fade-down" >{$lang=='Es'?'PROYECTOS':'PROJECTS'}</h2>

        <div class="filters" data-aos="fade-right">
          {#each tags as filter (filter.value)}
            <button class="font1" class:is-checked={activeFilter === filter.value} on:click={() => (activeFilter = filter.value)}>
              {filter.label}
            </button>
          {/each}
        </div>

<ul class="grid " data-aos="zoom-in">
  {#each filteredItems as item (item)}
    <li class="element-item" animate:flip={{ duration: 400 }} in:scale={{ duration: 300, start: 0.8 }} out:fade={{ duration: 200 }}>
      <a href="/proyectos/{item._id}">
        <img class="cover-img" src={urlFor(item.cover).url()} alt="{item.title}" />
        <div class="px-3 pb-3">
        <h3 class="mt-3 mb-2">{item.title}</h3>
        <p>
          {item.description[$lang]?.substring(0,170)}...
        </p>
        <div class="card-footer mt-3">
            {#each item.tags as tag}
            <img class="mb-2 mx-1" src="/images/skills/{tag}.png" alt="{tag}" on:error={(e) => e.currentTarget.src = `/images/skills/${tag}.jpg`} />
            {/each}
          </div>
          </div>
        </a>
    </li>
  {/each}
</ul>


</section>
<style>
.project-section{min-height: 80vh;}
  .grid {
    max-width: 1200px;
    margin: 40px auto;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  .grid > li {
    width: calc(100% / 3 - 30px);
    margin: 0 15px 30px;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
    transition: all 500ms ease-in;

  }
.grid > li:hover{box-shadow: 0 20px 60px var(--yellow)}
  .element-item p{font-size: 16px; font-weight: 200; text-align: justify; line-height: 1.4;}
  .filters { color:black;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

.card-footer{display: flex; justify-content: center; flex-wrap: wrap;} 
.card-footer img{width: 30px; height: 30px;}

  .grid li .cover-img {
    width: 100%;;height: 230px; object-fit: cover;
  }

  .filters button {
    padding: 10px 25px;
    margin: 0 5px;
    background-color:#e5e2d8 ;
    border: none;
    border-radius: 10px;
    transition: 150ms;
    font-size: 14px;
    cursor: pointer;
  }

  .filters button.is-checked {
    background-color: var(--pink);
  }



  @media (max-width: 767px) {
    .filters button {
      padding: 5px 10px;
      margin: 5px;
    }

    .grid > li {
      width: calc(100% /  2 - 30px);
    }

    .element-item p {
      font-size: 16px;
      line-height: 22px;
    }
    .grid li .cover-img {height: 100px; }
    .element-item p{display: none;}
  }
</style>