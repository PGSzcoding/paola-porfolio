<script>
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { lang, showScreenLoader } from '$lib/stores/general';
    import { fly } from 'svelte/transition'
    
 let is_open = false
$: path = $page.url.pathname;
    const menu_options = {
        en:[{name:'Home',link:'/'},{name:'About me',link:'/#about'},{name:'Projects',link:'/proyectos'}],
        es:[{name:'Inicio',link:'/'},{name:'Sobre mí',link:'/#about'},{name:'Proyectos',link:'/proyectos'}]
    }

    function changeLang(){
        $showScreenLoader = true
        if($lang=='es') $lang = 'en'
        else $lang ='es'
        setTimeout(() => {
			$showScreenLoader = false
		}, 1000);
    }
     function toggleMenu(){
    is_open = !is_open
  }

   function mobileLink(link){
    toggleMenu()
    goto(link)
  }
</script>
<header class="headr" class:is_header_open={is_open} data-aos="fade-down" data-aos-duration="1300">
    <div class="header px-sm-3 px-0 py-1">
        <div class="row justify-content-between align-items-center px-3 mx-0">
            <div class="col-2 px-0 lang-2">
                <button on:click={changeLang} class="lang-btn ">{$lang=='es'?'ENG':'ESP'}</button>
            </div>
            <div class="col">
                <ul class="menu font1">
                    {#each $lang=='es'?menu_options.es:menu_options.en as option,i}
                        <li class:active={path==option.link} class="menu-item"><a href="{option.link}" class="menu-link">{option.name}</a></li>
                    {/each}
                </ul>
            </div>
            <div class="col-sm-3 col-6 text-center">
                <a href="/"><img class="logo-img" src="/images/LOGO.png" alt=""></a>
            </div>
            <div class="col">
                <ul class="socials">
                    <li class="social-item"><button on:click={changeLang} class="lang-btn ">{$lang=='es'?'ENG':'ESP'}</button></li>
                    <li class="social-item"><a href="https://wa.me/524491984582" target="_blank" class="social-link"><i class="bi bi-whatsapp"></i></a></li>
                    <li class="social-item"><a href="mailto:paolagtzsal@gmail.com" target="_blank" class="social-link"><i class="bi bi-envelope"></i></a></li>
                    <li class="social-item"><a href="/contacto" class="btn btn-sm btn-pink">{$lang=='es'?'Contáctame':'Get in touch'}</a></li>
                </ul>
            </div>
        </div>
    </div>
   
     <button class='menu-btn' class:is_open={is_open} on:click="{toggleMenu}" aria-label="menu">
        <svg width="40" height="40" viewBox="0 0 100 100">
          <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path class="line line2" d="M 20,50 H 80" />
          <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
    </button>
</header>

 {#if is_open}
    <div transition:fly={{ y: -500, duration: 1000 }} class="header-mobile bg-yellow">
        <div class="menu-mobile row mx-0 justify-contnent-center align-items-center">
            <ul class="menu-list-mobile px-0">
                {#each $lang=='es'?menu_options.es:menu_options.en as option,i}
                    {#if option.link!='/#about'}
                <li class:active={path==option.link} ><a href="javascript:void(0)" on:click={()=>mobileLink(option.link)} class="menu-link">{option.name}</a></li>
                    {/if}
                {/each}
                 <li class="mt-2 mb-4"><a href="/contacto" on:click={()=>is_open = false} class="btn btn-pink">{$lang=='es'?'Contáctame':'Get in touch'}</a></li>
            </ul>
             <ul class="menu-list-socials py-1 text-center bg-beige-2">
                <li class="mb-1"><span><a href="https://wa.me/524491984582" target="_blank" class="social-link"><i class="bi bi-whatsapp"></i> (+52) 449 198 45 82</a></span></li>
                <li><span><a href="mailto:paolagtzsal@gmail.com" target="_blank" class="social-link"><i class="bi bi-envelope"></i> paolagtzsal@gmail.com</a></span></li>
             </ul>
        </div>
    </div>
    {/if}

<style>
    
    .header {position: relative;top: 0; background: var(--yellow); border-bottom: solid 1px rgba(0, 0, 0, 0.441);}
    .menu{display: flex;}
    .menu-item{margin-right: 1.5rem; font-size: 1.1rem; font-weight: 200;}
    .menu-item.active{border-bottom: 1px solid ; font-weight: 400;}
    .socials{display: flex; justify-content: right; align-items: center;}
    .social-item{margin-left: .8rem; font-size: 1.2rem;}
    .logo-img{max-width: 100%;}
    .lang-btn{font-size: 13px; color: black;}
    .is_header_open{z-index: 2; position: absolute; width: 100%;}
    .header-mobile{position: fixed; width: 100%; top: 0;z-index: 1; border-bottom: solid 1px rgba(0, 0, 0, 0.846);}

    /* HAMBURGER MENU */
     .line {fill: none;stroke: black;stroke-width: 6; transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1),stroke 1.5s ;}
      .menu-btn{position: absolute; right: 10px; z-index: 1000; top: 0px; display: none; }
     .line1 {stroke-dasharray: 60 207;stroke-width: 6;}
    .line2 {stroke-dasharray: 60 60;stroke-width: 6;}
    .line3 {stroke-dasharray: 60 207;stroke-width: 6;}
    .is_open .line1 { stroke-dasharray: 90 207;stroke-dashoffset: -134;stroke-width: 6;}
    .is_open .line2 {stroke-dasharray: 1 60;stroke-dashoffset: -30;stroke-width: 6;}
    .is_open .line3 {stroke-dasharray: 90 207;stroke-dashoffset: -134;stroke-width: 6;}
    .lang-2{display: none;}
    @media only screen and (max-width: 850px) {
    .menu, .socials{display: none}
    .menu-btn{display: block;}
    .menu-mobile{ width: 100%; position: relative; box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;}
    .menu-list-mobile{font-size: 1.6rem; font-weight: 200; text-align: center; padding-top: 2em;}
    .menu-list-mobile li{margin: 3px 10px;}
    .menu-list-mobile li.active{font-weight: 400;}
    .lang-2{display: block; position: absolute;}
    .menu-list-socials{text-align: center; font-weight: 500;     border-top: solid .7px rgba(0, 0, 0, 0.846);} 
    .menu-list-socials i{font-size: 15px;}
    }
    
</style>