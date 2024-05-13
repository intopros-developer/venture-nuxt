<template>
    <div class="bg-[#FBFBFD] font-proximanova text-base font-normal text-black antialiased">
        <nuxt />
    </div>
</template>

<script>
    // import AOS from 'aos';
    // import 'aos/dist/aos.css';
    export default {
        name: 'Blank',

        mounted() {
            // AOS.init();

            document.querySelector('html').classList.add('overflow-x-hidden');
        },
    };
</script>
