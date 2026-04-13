<script>
let { progress } = $props();

const cssVarStyles = $derived(() => {
	const angle = 360 * progress;

	return `--background:
		radial-gradient(#5e8ae1 50%, transparent 51%),
		conic-gradient(transparent 0deg ${angle}deg, #5e8ae1 ${angle}deg 360deg),
		conic-gradient(#f081bf 0deg, #f081bf 90deg, #f081bf 180deg, #f081bf)
	`;
});
</script>

<style>
#progress-circle {
  border-radius: 50%;
  width: 30px;
  height: 30px;
	transition: all 500ms ease-in;
	will-change: transform;
}
</style>
<div id="progress-circle" style="background:radial-gradient(#5e8ae1 50%, transparent 51%),
		conic-gradient(transparent 0deg {360 * progress}deg, #5e8ae1 {360 * progress}deg 360deg),
		conic-gradient(#f081bf 0deg, #f081bf 90deg, #f081bf 180deg, #f081bf)"></div>