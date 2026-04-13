<script>
  import { ProgressCircle } from "$components";
  import { urlFor } from "$lib/sanity";
  import { lang } from "$lib/stores/general";
    import { onDestroy, tick } from "svelte";
    import { fade } from "svelte/transition";

  let { onActivate,card= $bindable() , current = $bindable(), i = $bindable() } = $props();
  let progresses  = $state([]);
   let interval

  async function changeP(item,index){
    progresses[index] = 0
    let x = 0
     interval = setInterval(() => {
      x++
      if(x<item.percentage ){
        progresses[index] = x /100
      }else{
        clearInterval(interval);
      }
    }, 10);
  }
  function mouseleave(index){
    clearInterval(interval)
    progresses[index] = 0
  }

  onDestroy(()=>{if(interval)clearInterval(interval)})
</script>
<article class="project-card" class:active={i === current} on:click={() => onActivate(i)}>
    <div class="project-card__content">
    <div>
        <h3 class="project-card__title ">{card[$lang]}</h3>
        <div class="project-card__desc">
          <div class="row justify-content-sm-center justify-content-between mt-3">
            {#each card.section_list as item,i}
              <div class="col-sm-3 col-2 my-2 skill-p px-3"  on:mouseenter={()=>changeP(item,i)} on:mouseleave={()=>mouseleave(i)}>
              <img class="skill-img" src="{urlFor(item.image).url()}" alt="{item.name}">
              {#if progresses[i]!=0}
                <div class="progress" transition:fade>
                  <ProgressCircle progress={progresses[i]} on:change={(e) => progresses[i] = e.detail}/>
                </div>
                {/if}
             <br> {item.name}
            </div>
            {/each}
          </div>
        
        </div>
       
    </div>
    </div>
</article>


<style>

:root {
  --speed: 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --closed: 5rem;
  --open: 30rem;
}
.skill-img{width: 50px;  max-width: 100%;}
.project-card {
  position: relative;
  flex: 0 0 var(--closed);
  height: 26rem;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  background-color: var(--blue);
  transition: flex-basis var(--speed), transform var(--speed);
}
.skill-p{position: relative;cursor: pointer;transition: all 1s ease;}
.progress{position: absolute; background: none; width: 50px; height: 50px; top:-10px;left: 10%;}
.project-card.active {
  flex-basis: var(--open);
  cursor: inherit;
 /* transform: translateY(-6px);*/
}


.project-card__content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  padding: 0;
  z-index: 2;
}
.project-card__title {
  color: #fff;
  font-weight: 700;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.project-card__thumb,
.project-card__desc,
.project-card__btn {
  display: none;
}

.project-card.active .project-card__content {
  flex-direction: row;
  align-items: center;
  padding: 1.2rem 2rem;
  gap: 1.1rem;
}
.project-card.active .project-card__title {
  writing-mode: horizontal-tb;
  transform: none;
  font-size: 2.4rem;
}
.project-card.active .project-card__thumb,
.project-card.active .project-card__desc{
  display: block;
}


.project-card__desc {
  color: #ddd;
  font-size: 1rem;
  line-height: 1.4;
}

.skill-p:hover  {color: var(--pink);}





@media (max-width: 767px) {
  :root {
    --closed: 4rem;
    --open: 22rem;
  }

  .project-card {
    height: 20rem;
  }
  .project-card__title {
    font-size: 1.1rem;
    writing-mode: horizontal-tb;
    transform: none;
    text-align: center;
    padding-inline: 0.3rem;
  }

}
@media (max-width: 767px) {
  :root {
    --closed: 100%;
    --open: 100%;
  }


  .project-card {
    height: auto;
    min-height: 80px;
    flex: 0 0 auto;
    width: 100%;
    scroll-snap-align: start;
  }

  .project-card.active {
    min-height: 400px;
    transform: none;
  }

  .project-card__content {
    flex-direction: row;
    justify-content: flex-start;
    padding: 1rem;
    align-items: center;
    gap: 1rem;
  }

  .project-card__title {
    writing-mode: horizontal-tb;
    transform: none;
    font-size: 1.2rem;
    margin-right: auto;
  }

  .project-card__thumb,
  .project-card__desc {
    display: none;
  }

  .project-card.active .project-card__content {
    align-items: flex-start;
    padding: 1.5rem;
  }

  .project-card.active .project-card__title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .project-card.active .project-card__thumb {
    width: 200px;
    height: 267px;
    border-radius: 0.35rem;
    margin-bottom: 1rem;
  }

  .project-card.active .project-card__desc {
    font-size: 0.95rem;
    max-width: 100%;
    margin-bottom: 1rem;
  }



}

</style>