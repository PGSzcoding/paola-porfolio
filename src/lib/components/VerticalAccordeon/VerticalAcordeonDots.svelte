<script>

    let { onActivate,cards= $bindable() , current = $bindable() } = $props();
  
 
</script>
<div class="dots">
    {#each cards as _, i}
      <span class="dot" class:active={i === current}  on:click={() => onActivate(i)}></span>
    {/each}
</div>

<style>
    .dots { display: flex; gap: 0.5rem; justify-content: center; padding: 20px 0;}
    .dot {width: 13px; height: 13px; border-radius: 50%; background: #863d65ab;cursor: pointer; transition: 0.3s;}
    .dot.active {background: var(--pink);transform: scale(1.2);}

    @media (max-width: 767px) {
         .dots { display: none;}
    }
</style>