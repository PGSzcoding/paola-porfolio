<script>
    import { lang } from '$lib/stores/general';
    import { PortableText } from '@portabletext/svelte';
    const { about_me } = $props()
</script>
<div class="aboutMe-index pt-sm-5 pb-sm-5 pt-3 pb-0 row mx-0" >
    <div class="col-sm-6 col-11 mt-5">
        <div class="aboutme-container">
            <h1  data-aos="fade-up-right" class="mb-sm-4 mb-2 font1 aboutme-title"><span class="highlight-blue">{$lang=='es'?'ACERCA DE MI':'ABOUT ME'},</span><br> <span class='cursive1'>{$lang=='es'?'Desarrolladora':'Software / Web'} </span> {$lang=='es'?'DE SOFTWARE/WEB':'DEVELOPER'} <span class="highlight-pink">{$lang=='es'?'APASIONADA':'PASSIONATE'}</span>{$lang=='es'?'Y DEDICADA':'AND DEDICATED'}...</h1>
            <div data-aos="fade-right" class="mt-4 mt-sm-0 aboutme-d"><PortableText value={about_me[$lang]} /></div>
        <div class="d-flex mt-sm-2 mt-3 butns">
                <div class="me-3" data-aos="fade-right" data-aos-duration="1200">
                    <a href="/resumes/CV_eng.pdf" download="Paola_CV_eng.pdf" class="btn btn-yellow"><span class='d-flex align-items-center'><i class="cv-icon bi bi-file-earmark-person"></i><span class="btn-text">Download <br><small>(English CV)</small></span></span></a>
                </div>
                <div data-aos="fade-right" data-aos-duration="1400">
                    <a href="/resumes/CV_esp.pdf" download="Paola_CV_esp.pdf"  class="btn btn-yellow"><span class='d-flex align-items-center'><i class="cv-icon bi bi-file-earmark-person"></i><span class="btn-text">Descargar <br><small>(Español CV)</small></span></span></a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-3 col-11">
        <img data-aos="fade-right" class="aboutme-img" src="/images/AboutMeimg.png" alt="Paola GTZ">
    </div>
</div>


<style>
    .aboutMe-index{position: relative;width: 100%; justify-content: center;background: linear-gradient(90deg,rgba(245, 238, 215, 1) 0%, rgba(249, 245, 233, 1) 50%, rgba(245, 238, 215, 1) 100%)}
   .aboutme-img{max-width: 100%;}
   .aboutme-title{line-height: 3.6rem; text-align: center;}
   .aboutme-title .cursive1{font-size: 5rem;}
   .cv-icon{font-size: 30px; margin-right: 10px;}
   .btn-text{line-height: 1em;}

    @media only screen and (max-width: 600px) {
        .aboutme-title .cursive1{font-size: 4rem;}
        .aboutme-title{line-height: 3rem;}
        .aboutme-d p{text-align: justify;}
        .aboutme-container .butns{justify-content: center;}
    }
</style>