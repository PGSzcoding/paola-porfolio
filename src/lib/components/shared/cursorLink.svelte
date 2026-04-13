<script>
 
  export let text
  export let href
  export let classes = ''


</script>
<div class='content-item'>
<a href="{href}" class="link {classes}">
	<span>{text}</span>
  <svg class="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9"><path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1"></path></svg>
</a>
</div>

<style>
  .content-item{
    width: 100%;
    height: 100%;
    padding: 0;
    counter-increment: itemcounter;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
.link{position: relative;}
.link__graphic--scribble {
    top: 100%;
}
.link__graphic {
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    fill: none;
    stroke: #000;
    stroke-width: 1px;
}

.link:hover .link__graphic--scribble path {
    transition-timing-function: cubic-bezier(0.8, 1, 0.7, 1);
    transition-duration: 0.8s;
}
.link:hover .link__graphic--stroke path {
    stroke-dashoffset: 0;
}
.link__graphic--scribble path {
    transition: stroke-dashoffset 0.6s cubic-bezier(0.7, 0, 0.3, 1);
}
.link__graphic--stroke path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
}

</style>