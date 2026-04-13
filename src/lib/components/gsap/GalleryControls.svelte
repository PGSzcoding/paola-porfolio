<script>
    import { onMount } from "svelte";

    let { activeIndex= $bindable(0),projects } = $props();
    let total = projects.length

    onMount(() => {
        const handleKey = (e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };

        window.addEventListener("keydown", handleKey);

        return () => window.removeEventListener("keydown", handleKey);
    });

    function updateIndex(i) {activeIndex = i;}
    
    function next() {
        activeIndex = (activeIndex + 1) % total;
    }

    function prev() {
        activeIndex = (activeIndex - 1 + total) % total;
    }
</script>

<div class="carousel-controls">
    <button class="nav-btn" on:click={prev}>‹</button>
    <div class="pagination-indicators">
      {#each projects as _, index}
        <div class="dot {index === activeIndex ? 'active' : ''}" on:click={() => updateIndex(index)}></div>
      {/each}
    </div>
    <button class="nav-btn" on:click={next}>›</button>
  </div>


<style>

/* Controls */
.carousel-controls {
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  border-radius: 50px;
}

.nav-btn {
  background: none;
  border: none;
  color: rgb(0, 0, 0);;
  font-size: 2rem;
  cursor: pointer;
  padding: 0 10px;
}


/*Pagination : dots to track cards styling */
.pagination-indicators {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 0 10px;
  margin: 0 10px;
}

.dot {
  width: 6px;
  height: 6px;
  background: rgba(0, 0, 0, 0.802);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.dot.active {
  background: rgb(0, 0, 0);
  width: 18px; /* The "pill" effect when active */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* Hover effect to show interactivity */
.dot:hover:not(.active) {
  background: rgb(0, 0, 0);
  transform: scale(1.2);
}

/* Ensure the control bar grows with the number of dots */
.carousel-controls {
  min-width: fit-content;
  max-width: 90vw;
}

/* Bottom Controls */
.carousel-controls {
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 100px;
  gap: 15px;
}

@media (max-width: 600px) {
 
  .pagination-indicators {
    gap: 5px;
  }
  .dot {
    width: 4px;
    height: 4px;
  }
  .dot.active {
    width: 12px;
  }

  .carousel-controls{margin-top: -15px;}
}
</style>