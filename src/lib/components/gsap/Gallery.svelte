<script>
    import GalleryControls from "./GalleryControls.svelte";
    import GalleryCard from "./GalleryCard.svelte";
    const { projects } = $props()
 
let activeIndex =  $state(0);
const total = projects.length;

function getPosition(index) {
  let offset = index - activeIndex;

  if (offset > Math.floor(total / 2)) offset -= total;
  if (offset < -Math.floor(total / 2)) offset += total;

  if (offset === 0) return "active";
  if (offset === -1) return "left";
  if (offset === 1) return "right";
  if (offset < -1) return "far-left";
  if (offset > 1) return "far-right";

  return "hidden";
}

function updateIndex(i) {activeIndex = i;}

</script>

<div class="carousel-container pt-sm-5 pt-2 pb-5">
    <div class="carousel-stage">
      {#each projects as item, index}
        <div class="carousel-card {getPosition(index)}" on:click={() => updateIndex(index)}>
          <GalleryCard {item} />
        </div>
      {/each}
     
    </div>
    <GalleryControls projects ={projects} bind:activeIndex />
</div>


<style>
  :root {
    --shift-x: 10vw;
  }

.carousel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  perspective: 2000px; /* Increased for better depth on wide screens */
  overflow: hidden;
  color: black;
  width: 100%;
}

.carousel-stage {
  position: relative;
  width: 100vw; /* Occupy full width to allow cards to spread */
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
}

.carousel-card {
  position: absolute;
  /* Dynamic width: wider on desktop, narrower on mobile */
  width: clamp(280px, 25vw, 300px);
  height: clamp(380px, 60vh, 400px);
  background-color: var(--beige);
  border-radius: 5px;
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
}

/* --- 3D TRANSFORM STATES --- */

.carousel-card.active {
  transform: translate3d(0, 0, 250px) rotateY(0deg);
  z-index: 10;
  opacity: 1;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
}

.carousel-card.left {
  transform: translate3d(calc(var(--shift-x) * -1), 0, -150px) rotateY(35deg)
    scale(0.85);
  z-index: 5;
  opacity: 0.5;
}

.carousel-card.right {
  transform: translate3d(var(--shift-x), 0, -150px) rotateY(-35deg) scale(0.85);
  z-index: 5;
  opacity: 0.5;
}

.carousel-card.far-left {
  transform: translate3d(calc(var(--shift-x) * -1.8), 0, -500px) rotateY(45deg)
    scale(0.6);
  z-index: 1;
  opacity: 0.2;
}

.carousel-card.far-right {
  transform: translate3d(calc(var(--shift-x) * 1.8), 0, -500px) rotateY(-45deg)
    scale(0.6);
  z-index: 1;
  opacity: 0.2;
}

.carousel-card.hidden {
  transform: translate3d(0, 0, -1000px) scale(0.1);
  opacity: 0;
}



/* Responsive Design */

/* Desktop / Large Screens (Spread them out to 90% of screen) */
@media (min-width: 1200px) {
  :root {
    --shift-x: 32vw;
  }
}
/* Tablets */
@media (max-width: 1024px) {
  :root {
    --shift-x: 35vw;
  }
}
/* Mobile (Keep cards closer so they don't fall off screen) */
@media (max-width: 600px) {
  :root {
    --shift-x: 38vw;
  }

  .carousel-card {
    width: 65vw; /* Almost full width on mobile */
    height: 350px;
  } 

  .carousel-card.left {
    transform: translate3d(-45%, 0, -250px) rotateY(45deg) scale(0.8);
  }

  .carousel-card.right {
    transform: translate3d(45%, 0, -250px) rotateY(-45deg) scale(0.8);
  }

}

</style>