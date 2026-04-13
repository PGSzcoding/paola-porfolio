<script>
  import { onMount, tick } from "svelte";
  import VerticalAcordeonDots from "./VerticalAcordeonDots.svelte";
  import VerticalAcordeonCard from "./VerticalAcordeonCard.svelte";
let track;
let wrap;
let current = 0;
export let cards = [];



const isMobile = () => window.matchMedia("(max-width:767px)").matches;

function center(i) {
  const card = track?.children[i];

  const axis = isMobile() ? "top" : "left";
  const size = isMobile() ? "clientHeight" : "clientWidth";
  const start = isMobile() ? card.offsetTop : card.offsetLeft;

  wrap.scrollTo({
    [axis]: start - (wrap[size] / 2 - card[size] / 2),
    behavior: "smooth"
  });
}

function activate(i) {
  current = i;
  center(i);
}


onMount(async () => {
  await tick(); // wait until DOM is rendered
  center(0);
  window.addEventListener("resize", () => center(current));
});

</script>

<section>
  <div class="slider" bind:this={wrap}>
    <div class="track" bind:this={track}>
      {#each cards as card, i (i)}
        <VerticalAcordeonCard onActivate={activate}  {card} bind:current {i}/>
      {/each}
    </div>
    <VerticalAcordeonDots onActivate={activate}  bind:cards bind:current />
  </div>
</section>

<style>
.slider {max-width: 1400px;margin: auto;overflow: hidden;}
.track {gap: 0.8rem;display: flex; align-items: flex-start; justify-content: center; scroll-behavior: smooth; scroll-snap-type: x mandatory; padding-bottom: 40px;}
.track::-webkit-scrollbar {display: none;}

@media (max-width: 767px) {
  .track { flex-direction: column; scroll-snap-type: y mandatory; align-items: center; justify-content: flex-start; padding-bottom: 0;}
  .slider { padding: 0 15px;}
  .track {flex-direction: column; scroll-snap-type: y mandatory; gap: 0.8rem;padding-bottom: 20px;}
}

</style>