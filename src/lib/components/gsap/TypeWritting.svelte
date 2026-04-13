<script lang="ts">
  import { onMount } from "svelte";

  export let texts ;
  export let typewriterTextClasses = ''

  let displayText = "";
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  let speed = 150;
  let delay = 2000;
  const typeEffect = () => {
    const currentText = texts[index];

    if (!isDeleting) {
      // escribiendo
      displayText = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, delay);
        return;
      }
    } else {
      // borrando
      displayText = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
      }
    }

    setTimeout(typeEffect, speed);
  };

  onMount(() => {
    typeEffect();
  });
</script>

<div class="container">
  <p class="typewriter">
    <slot name="text"/> <span class="typewriter-text {typewriterTextClasses}">{displayText}</span>
  </p>
</div>


<style>
    /* TYPEWRITING */
.typewriter {display: block;}
.typewriter-text {animation: cursor 1s ease-in-out infinite;}
@keyframes cursor {
  from { border-color: #000000; }
  to { border-color: transparent; }
}
@media (max-width: 767.98px) {.typewriter { font-size: 35px; }}
@media (min-width: 768px) {.typewriter { font-size: 60px; }}
/* --------- */
</style>

