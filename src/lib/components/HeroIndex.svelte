<script>
    import { TypeWritting } from "$components";
    import { lang } from "$lib/stores/general";
    const { hero } = $props()
</script>

<div class="hero-index row mx-0  my-sm-0 my-5">
    <div class="col-md-7 col-lg-4 col-11">
        <img data-aos="fade-up-right" class="hero-image" src="/images/girlComputer.png" alt="hero-ima">
    </div>

    <div class="col-lg-4 col-md-11 offset-lg-1 col-11">
     <div class="title font1 mb-4" data-aos="flip-up" data-aos-duration="1100">
     <h1><span class="highlight-yellow"><i>{$lang=='es'?hero.title?.es:hero.title?.en}</i> </span></h1>
        <!--
        <h1><span class="highlight-yellow"><i>HI! I'AM</i> PAOLA</span></h1>
        <h1><span class="highlight-pink">GUTIÉRREZ</span></h1>
        -->
    </div>
    <div class="title font1 mb-4" data-aos="flip-down" data-aos-duration="1200">
        <TypeWritting texts={$lang=='es'?hero.titleChange?.es:hero.titleChange?.en} typewriterTextClasses='highlight-pink title2 ' />
    </div>
       <p data-aos="zoom-in-up" class="hero-desc">{$lang=='es'?hero.description?.es:hero.description?.en} </p>
    </div>
</div>


<style>
    .hero-index{position: relative; min-height: 90vh; align-items: center; width: 100%; justify-content: center; background: linear-gradient(90deg,rgba(245, 238, 215, 1) 0%, rgba(249, 245, 233, 1) 50%, rgba(245, 238, 215, 1) 100%);}
    .hero-image{height: auto; max-width: 700px; width: 100%;}
    .title{text-align: center; position: relative; left: -10rem;width: max-content;}
    .title h1{width: auto; font-size: 5rem;}
    .title h1 span{padding: 0px 35px 0px 20px;}
    .hero-desc{font-size: 1.2rem;}
    .title h1:first-child{margin-bottom: .3em;}
    .title h1:nth-of-type(2){margin-bottom: .7em;}

    @media only screen and (max-width: 850px) {
        .title{ left: initial;width: max-content;}
        .title h1{width: auto; font-size: 3rem;}
        .hero-index{flex-direction: column-reverse;}
        .hero-image{margin-top: 30px;}
        .hero-desc{text-align: center; padding: 5px 10px;}
    }
</style>