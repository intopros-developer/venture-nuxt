<template>
    <div class="bg-[#FBFBFD] font-proximanova text-base font-normal text-black antialiased">
        <nuxt />
    </div>
</template>

<script>
    export default {
        name: 'Blank',

        mounted() {
            document.querySelector('html').classList.add('overflow-x-hidden');
        },
    };
</script>
