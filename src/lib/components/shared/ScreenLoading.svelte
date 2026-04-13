<script>
    import { Rainbow } from 'svelte-loading-spinners';
    import { blur } from 'svelte/transition';
</script>
<div class="screen-loading bg-beige-2" out:blur>
    <div class="screen-loading-content d-flex align-items-center justify-content-center">
            <Rainbow size="100" color="#f081bf" unit="px" duration="4s" />
            <img src="/images/LOGO.png" alt="">
    </div>
</div>

<style>
    .screen-loading{position: fixed;top: 0; width: 100%; height: 100vh;z-index: 1000; }
    .screen-loading-content{height: 100%; flex-direction: column;}
</style>