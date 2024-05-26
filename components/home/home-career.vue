<template>
    <section :style="{ backgroundImage: `url(${image})` }" class="bg-[url(/assets/img/girl-background-mobile.png)] bg-cover bg-[80%_center] md:bg-[url(/assets/img/girl-background.webp)] md:bg-top" lazyload>
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="pb-[27px] pt-[68px] text-center md:text-left xl:pb-[70px] xl:pt-[169px]">
                <div class="group pb-[25px] pt-[40px] lg:max-w-[510px] xl:max-w-[700px] xl:pb-[25px] xl:pt-[100px]">
                    <p class="mb-2.5 mt-[230px] text-left text-base font-bold uppercase text-white xl:text-2xl">{{ subtitle }}</p>

                    <h3 class="mb-16 text-left text-[32px] font-bold leading-normal text-white xl:mb-[45px] xl:text-[55px] xl:leading-[55px]">{{ title }}</h3>

                    <nuxt-link
                        v-if="$helper.isInternalUrl(buttonLink)"
                        :to="buttonLink"
                        class="outline-btn px-[91px] py-5 text-[17px] font-semibold uppercase leading-[21px] -tracking-[0.03px] group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                        >{{ buttonText }}</nuxt-link
                    >
                    <a
                        v-else
                        target="_blank"
                        :href="buttonLink"
                        class="outline-btn px-[91px] py-5 text-[17px] font-semibold uppercase leading-[21px] -tracking-[0.03px] group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                        >{{ buttonText }}</a
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            image: {
                type: String,
                default: '//images.ctfassets.net/koyrlvjc3wvc/3oFOZYRkxbF1Jzrm9l8MpW/9ea44b09586f3426c58b3a6ebd6efd9c/careers_bg_02.webp',
            },
            title: {
                type: String,
                default: 'Venture Plans & You',
            },
            subtitle: {
                type: String,
                default: 'CAREERS',
            },
            buttonLink: {
                type: String,
                default: '/careers',
            },
            buttonText: {
                type: String,
                default: 'Start Here',
            },
        },
    };
</script>
