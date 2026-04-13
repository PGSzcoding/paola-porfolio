<script>
    import { lang } from "$lib/stores/general";
    import { toast } from "@zerodevx/svelte-toast";
    import { onMount } from "svelte";
    let successToast = {theme: {'--toastColor': '#000000','--toastBackground': '#f3efcb','--toastBarBackground': '#f1e68a'}}
    let errorToast = {theme: { '--toastColor': '#863d65','--toastBackground': '#f081bf','--toastBarBackground': '#863d65'}}
    let loading = false

    async function sendForm(event) {
        loading = true
      
        const formData = new FormData(event.target)
        const res = await fetch('/api/contact', {method: 'POST',body: formData})
        const data = await res.json()

        if(data.success){
            toast.push($lang=='en'?'Message sent, thanks for contacting me':'Mensaje enviado',successToast)
            event.target.reset();
        }else{
            toast.push(`Error: ${data.error || ($lang=='eng'?'Unknown error, try again later':'Error Desconocido, intentalo mas tarde')}`,errorToast)
        }

        loading = false
    }
</script>
<section class="contact-page pb-5 bg-blue-lines">
    <img data-aos="fade-right" class="contact-phone contact-phone-l ml-3" src="/images/phone1.png" alt="">
     <img data-aos="fade-down" class="contact-phone contact-phone-r" src="/images/phone2.png" alt="">
    <div class="contact-page-row row px-sm-5 px-2 justify-content-center mx-0">
        <div class="col-sm-6 col-11 text-center">
             <h1 data-aos="zoom-in" class="contact-title font1 mt-5">{$lang=='es'?'PONTE':'GET'} <span class="cursive1">{$lang=='es'?'en':'in'}&nbsp;</span><br><span class="highlight-pink">  &nbsp;{$lang=='es'?'CONTACTO':'TOUCH'}...</span></h1>
             
        </div>
        <div class="col-sm-5 col-11 mt-5" >
            <form action="" class="contact-form px-4" on:submit={sendForm} data-aos="zoom-in" data-aos-duration="1500">
                <input required name="email" type="email" class="form-control my-2 font-3" id="exampleFormControlInput1" placeholder="Email">
                <textarea required name="message" class="form-control mt-3" id="exampleFormControlTextarea1" placeholder="{$lang=='es'?'Mensaje':'Message'}..." rows="8"></textarea>
                <button disabled={loading} class="btn-submit btn btn-blue mt-3 font1">{$lang=='es'?'Enviar':'Send'} {#if loading}&nbsp;<div class="spinner-border spinner-border-sm" role="status"></div>{/if}</button>
            </form>
        </div>
    </div>
</section>
<hr class="line-separator my-0">

<style>
.contact-page{min-height: 80vh; position: relative;}
    .contact-page-row{flex-direction: column; align-items: center; min-height: 80vh;}
    .contact-title{font-size: 4rem;}
    .input-form{width: 100%; padding: 10px; background: none;border: none; border-bottom: 1px solid black;}
    .input-form:focus-visible{outline: none; color: #dbcc4b;}
    .btn-submit{width: 100%; text-align: center;}
    .contact-phone{position: absolute; }
    .contact-phone-l{top: 0; height: 50vh; max-height: 1000px; left: 10%;}
    .contact-phone-r{bottom: 0; height: 40vh; max-height: 500px; right: 0}

    @media only screen and (max-width: 600px) {
        .contact-page{min-height: 87vh;}
         .contact-phone-r{height: 30vh;}
         .contact-phone-l{display: none;}
         .contact-title{font-size: 3rem;word-break: break-word;}
        .contact-page-row{min-height: 65vh;}
    }
</style>