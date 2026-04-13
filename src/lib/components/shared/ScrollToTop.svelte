<script lang="ts">
  import { onMount } from "svelte";

  let progressPath: SVGPathElement | null = null;
  let progressWrap: HTMLDivElement | null = null;
let visibility = false
  let pathLength = 0;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  onMount(() => {
    if (!progressPath || !progressWrap) return;

    pathLength = progressPath.getTotalLength();

    progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scroll = window.scrollY || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = pathLength - (scroll * pathLength) / height;
      progressPath!.style.strokeDashoffset = `${progress}`;
    };

    const toggleVisibility = () => {
      const offset = 50;
      if (window.scrollY > offset) {
        visibility = true
      } else {
        visibility = false
      }
    };

    window.addEventListener("scroll", updateProgress);
    window.addEventListener("scroll", toggleVisibility);

    // cleanup (muy importante en Svelte)
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("scroll", toggleVisibility);
    };
  });
</script>


<div class:active-progress={visibility} class="progress-wrap" bind:this={progressWrap} on:click={scrollToTop}>
  <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
    <path  bind:this={progressPath} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
  </svg>
</div>


  <style>
    .progress-wrap {
  right: 30px;
  bottom: 15px;
  color: white;
  position: fixed;
  height: 46px;
  width: 46px;
  cursor: pointer;
  border-radius: 50px;
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.491);
  z-index: 999;
  transform: translateY(15px);
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  opacity: 0;
  visibility: hidden;
}



.progress-wrap.active-progress {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.progress-wrap::after {
  position: absolute;
  content: '↑';
  text-align: center;
  line-height: 46px;
  font-size: 24px;
  color: var(--pink);
  left: 0;
  top: -2px;
  height: 46px;
  width: 46px;
  cursor: pointer;
  display: block;
  z-index: 1;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.progress-wrap:hover::after {
  opacity: 0;
}

.progress-wrap:hover::before {
  opacity: 1;
}

.progress-wrap::before {
  position: absolute;
  content: '↑';
  text-align: center;
  line-height: 46px;
  font-size: 24px;
  opacity: 0;
  -webkit-text-fill-color: var(--pink);
  left: 0;
  top: -2px;
  height: 46px;
  width: 46px;
  cursor: pointer;
  display: block;
  z-index: 2;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.progress-wrap svg path {fill: none;}

.progress-wrap svg.progress-circle path {
  stroke: var(--pink);
  stroke-width: 4;
  box-sizing: border-box;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}
  </style>
