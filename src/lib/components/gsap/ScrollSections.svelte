<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";

  let container: HTMLDivElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray<HTMLElement>(
      container.querySelectorAll(".section")
    );

    panels.pop(); // igual que tu código

    panels.forEach((panel) => {
      const innerpanel = panel.querySelector(
        ".section-inner"
      ) as HTMLElement;

      const panelHeight = innerpanel.offsetHeight;
      const windowHeight = window.innerHeight;

      const difference = panelHeight - windowHeight;

      const fakeScrollRatio =
        difference > 0 ? difference / (difference + windowHeight) : 0;

      if (fakeScrollRatio) {
        panel.style.marginBottom =
          panelHeight * fakeScrollRatio + "px";
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "bottom bottom",
          end: () =>
            fakeScrollRatio
              ? `+=${innerpanel.offsetHeight}`
              : "bottom top",
          pinSpacing: false,
          pin: true,
          scrub: true
        }
      });

      if (fakeScrollRatio) {
        tl.to(innerpanel, {
          yPercent: -100,
          y: window.innerHeight,
          duration: 1 / (1 - fakeScrollRatio) - 1,
          ease: "none"
        });
      }

      tl.fromTo(
        panel,
        { scale: 1, opacity: 1 },
        { scale: 0.7, opacity: 0.5, duration: 0.9 }
      ).to(panel, { opacity: 0, duration: 0.1 });
    });

    // cleanup (IMPORTANTE en Svelte)
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  });
</script>

<div class="slides-wrapper" bind:this={container}>
  <section class="section section-1">
    <div class="section-content">
      <div class="section-inner">
            <slot name="section1"/>
      </div>
    </div>
  </section>

  <section class="section section-2">
    <div class="section-content">
      <div class="section-inner">
            <slot name="section2"/>
      </div>
    </div>
  </section>

</div>

<style>

  .section {
    width: 100%;
    height: calc(100vh - 64px);
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
  }

  .section-inner {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-2 .section-inner {
    height: auto;
    padding-bottom: 20vh;
  }


</style>