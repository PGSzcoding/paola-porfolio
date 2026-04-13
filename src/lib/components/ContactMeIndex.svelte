<script>
    import { CursorLink } from "$components";

</script>
<section class="contact-me pb-4">
    <div class="d-flex justify-content-center align-items-center mx-0">
        <div class="col-lg-3 col-2">
            <img data-aos="fade-right" data-aos-duration="1700" class="contact-phone contact-phone-l ml-3" src="/images/phone1.png" alt="">
            <img data-aos="fade-right" data-aos-duration="1400" class="contact-phone contact-phone-r ml-3" src="/images/phone1.png" alt="">
            <img data-aos="fade-right" data-aos-duration="1100" class="contact-phone contact-phone-r ml-3" src="/images/phone1.png" alt="">
        </div>
       

        <div class="col-lg-5 ms-3 col-8" data-aos="flip-right" >
            <h1  class="title font-2"><em>¿Trabajamos</em> juntos? </h1>
            <CursorLink classes="cursive2 font-medium text-dark-pink" text="Contáctame..." href='/contacto'/>
        </div>
    </div>
</section>

<style>
    .contact-me{height: 200px;}
    .contact-phone{max-height: 200px;  top: 0;}
    .contact-phone-l,.contact-phone-r{left: 0;}
    .title em{font-weight: 100;}
    .title span{font-size: 4rem;}

    @media only screen and (max-width: 900px) {
        .title em{font-size: 3rem;}
         .contact-phone-r{display: none;}
    }
</style>