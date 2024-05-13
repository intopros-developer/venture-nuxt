<template>
    <section class="py-10 md:pt-16 md:pb-0 xl:pt-[86px] xl:pb-10">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="flex items-center justify-start gap-[33px] text-start">
                <h2 class="inline-block border-b-[7px] border-primary pb-2 text-xl font-bold lg:text-3xl xl:text-[40px] xl:leading-none">{{ heading }}</h2>
            </div>
            <div class="grid grid-cols-1 sm:gap-14 lg:grid-cols-2 lg:gap-4">
                <div>
                    <p class="my-10 text-lg font-light leading-8">
                        <!--Force commit again-->
                        {{ $props.subParagraph }}
                    </p>
                    <div class="mb-[53px] divide-y divide-[#e6e6e6] border-t border-b border-[#e6e6e6]">
                        <div :key="service.title" v-for="service in customServices" class="py-2.5">
                            <div
                                class="flex cursor-pointer items-center gap-4 text-lg font-light leading-[47px] -tracking-[0.04px]"
                                :class="{ 'text-primary': openTab === service.title }"
                                @click="openTab = openTab === service.title ? '' : service.title"
                            >
                                <span class="w-12 text-[#a2a2a2]" :class="openTab === service.title ? '!text-primary' : ''" v-html="service.icon"></span>
                                {{ service.title }}
                                <span class="ml-auto">
                                    <icons-down-border class="text-[#989898]" :class="{ 'rotate-180 !text-primary': openTab === service.title }" />
                                </span>
                            </div>
                            <div v-show="openTab === service.title" class="mt-3 pl-16 text-base -tracking-[0.03px] text-primary">
                                <p>{{ service.description }}</p>
                            </div>
                        </div>
                    </div>
                    <div><img loading="lazy" :src="bottomLogo" alt="" class="mx-auto" /></div>
                </div>
                <div class="h-[400px] sm:h-auto lg:mt-40">
                    <ul class="relative top-28 mx-auto h-[295px] max-w-[295px] rounded-full border-[5px] border-primary/10 sm:top-24 sm:h-[365px] sm:max-w-[365px] lg:top-0 lg:mr-0 xl:h-[438px] xl:max-w-[438px]">
                        <li
                            @click="openTab = openTab === customServices[0].title ? '' : customServices[0].title"
                            class="group relative -left-3 -top-4 float-left flex cursor-pointer flex-col gap-3 text-lg font-semibold -tracking-[0.04px] text-primary transition-all ease-linear sm:left-3 sm:top-0 xl:left-5"
                        >
                            <div class="transition-all ease-linear group-hover:mb-[10px] group-hover:mt-[-10px]" :class="{ 'mb-[10px] mt-[-10px]': openTab === customServices[0].title }">{{ customServices[0].title }}</div>
                            <span class="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                                <div class="absolute h-full w-full rounded-full bg-primary opacity-20 transition-all ease-linear group-hover:scale-150" :class="{ 'scale-150': openTab === customServices[0].title }"></div>
                                <span class="w-10" v-html="customServices[0].icon"></span>
                            </span>
                        </li>
                        <li
                            @click="openTab = openTab === customServices[1].title ? '' : customServices[1].title"
                            class="group relative -top-20 left-10 float-left flex cursor-pointer flex-col gap-3 text-lg font-semibold -tracking-[0.04px] text-primary transition-all ease-linear sm:left-20 xl:left-28"
                        >
                            <div class="transition-all ease-linear group-hover:mb-[10px] group-hover:mt-[-10px]" :class="{ 'mb-[10px] mt-[-10px]': openTab === customServices[1].title }">{{ customServices[1].title }}</div>
                            <span class="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                                <div class="absolute h-full w-full rounded-full bg-primary opacity-20 transition-all ease-linear group-hover:scale-150" :class="{ 'scale-150': openTab === customServices[1].title }"></div>
                                <span class="w-10" v-html="customServices[1].icon"></span>
                            </span>
                        </li>
                        <li
                            @click="openTab = openTab === customServices[2].title ? '' : customServices[2].title"
                            class="group relative right-0 -top-5 float-right flex cursor-pointer flex-col gap-3 text-lg font-semibold -tracking-[0.04px] text-primary transition-all ease-linear sm:top-0 xl:right-6"
                        >
                            <div class="transition-all ease-linear group-hover:mb-[10px] group-hover:mt-[-10px]" :class="{ 'mb-[10px] mt-[-10px]': openTab === customServices[2].title }">{{ customServices[2].title }}</div>
                            <span class="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                                <div class="absolute h-full w-full rounded-full bg-primary opacity-20 transition-all ease-linear group-hover:scale-150" :class="{ 'scale-150': openTab === customServices[2].title }"></div>
                                <span class="w-10" v-html="customServices[2].icon"></span>
                            </span>
                        </li>
                        <li
                            @click="openTab = openTab === customServices[3].title ? '' : customServices[3].title"
                            class="group relative -right-6 top-5 float-right clear-both flex cursor-pointer flex-col gap-3 text-lg font-semibold -tracking-[0.04px] text-primary transition-all ease-linear sm:-right-8 sm:top-16"
                        >
                            <div class="transition-all ease-linear group-hover:mb-[10px] group-hover:mt-[-10px]" :class="{ 'mb-[10px] mt-[-10px]': openTab === customServices[3].title }">{{ customServices[3].title }}</div>
                            <span class="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                                <div class="absolute h-full w-full rounded-full bg-primary opacity-20 transition-all ease-linear group-hover:scale-150" :class="{ 'scale-150': openTab === customServices[3].title }"></div>
                                <span class="w-10" v-html="customServices[3].icon"></span>
                            </span>
                        </li>
                        <li
                            @click="openTab = openTab === customServices[4].title ? '' : customServices[4].title"
                            class="group relative right-16 top-0 float-right clear-both flex cursor-pointer flex-col gap-3 text-lg font-semibold -tracking-[0.04px] text-primary transition-all ease-linear sm:top-16 xl:top-32"
                        >
                            <div class="transition-all ease-linear group-hover:mb-[10px] group-hover:mt-[-10px]" :class="{ 'mb-[10px] mt-[-10px]': openTab === customServices[4].title }">{{ customServices[4].title }}</div>
                            <span class="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                                <div class="absolute h-full w-full rounded-full bg-primary opacity-20 transition-all ease-linear group-hover:scale-150" :class="{ 'scale-150': openTab === customServices[4].title }"></div>
                                <span class="w-10" v-html="customServices[4].icon"></span>
                            </span>
                        </li>
                        <li
                            @click="openTab = openTab === customServices[5].title ? '' : customServices[5].title"
                            class="group relative left-10 -top-24 float-left clear-both flex cursor-pointer flex-col gap-3 text-lg font-semibold -tracking-[0.04px] text-primary transition-all ease-linear sm:left-16 sm:-top-7 xl:top-5"
                        >
                            <div class="transition-all ease-linear group-hover:mb-[10px] group-hover:mt-[-10px]" :class="{ 'mb-[10px] mt-[-10px]': openTab === customServices[5].title }">{{ customServices[5].title }}</div>
                            <span class="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                                <div class="absolute h-full w-full rounded-full bg-primary opacity-20 transition-all ease-linear group-hover:scale-150" :class="{ 'scale-150': openTab === customServices[5].title }"></div>
                                <span class="w-10" v-html="customServices[5].icon"></span>
                            </span>
                        </li>
                        <li
                            @click="openTab = openTab === customServices[6].title ? '' : customServices[6].title"
                            class="group relative -left-8 bottom-72 float-left clear-both flex cursor-pointer flex-col gap-3 text-lg font-semibold -tracking-[0.04px] text-primary transition-all ease-linear sm:-left-8 sm:bottom-56"
                        >
                            <div class="transition-all ease-linear group-hover:mb-[10px] group-hover:mt-[-10px]" :class="{ 'mb-[10px] mt-[-10px]': openTab === customServices[6].title }">{{ customServices[6].title }}</div>
                            <span class="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                                <div class="absolute h-full w-full rounded-full bg-primary opacity-20 transition-all ease-linear group-hover:scale-150" :class="{ 'scale-150': openTab === customServices[6].title }"></div>
                                <span class="w-10" v-html="customServices[6].icon"></span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                openTab: '',
            };
        },
        props: {
            bottomLogo: {
                type: String,
                default: () => {
                    return '/assets/img/software_icon_img.png';
                },
            },
            heading: {
                type: String,
                default: () => {
                    return 'CUSTOM SOFTWARE DEVELOPMENT';
                },
            },
            subParagraph: {
                type: String,
                default: () => {
                    return 'From IT strategy consulting and comprehensive technology roadmaps to the end-to-end development of scalable solutions, Intellectsoft delivers a full-cycle software development services that adapt seamlessly to your project requirements and business needs.';
                },
            },
            customServices: {
                type: Array,
                default: () => {
                    return [
                        {
                            title: 'Designing',
                            description: 'We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 39"><g><g><g><g><g><path fill="currentColor" d="M42.815 25.629H4.005V3.297h38.81zm-19.409 3.574a1.334 1.334 0 0 1-1.331-1.34 1.334 1.334 0 1 1 2.67 0 1.34 1.34 0 0 1-1.339 1.34zM43.963.235H2.858A1.914 1.914 0 0 0 .944 2.15v26.71c0 1.055.857 1.913 1.914 1.913h41.105a1.914 1.914 0 0 0 1.913-1.914V2.148A1.914 1.914 0 0 0 43.963.236z"></path></g></g> <g><g><path fill="currentColor" d="M31.044 35.15v3.037a.384.384 0 0 1-.382.383H16.159a.379.379 0 0 1-.383-.383V35.15c0-.214.168-.383.383-.383h2.755v-3.23h8.985v3.23h2.763c.206 0 .382.169.382.383z"></path></g></g> <g><g><path fill="currentColor" d="M19.358 17.57l-2.45 2.556a.386.386 0 0 1-.543.008.386.386 0 0 1-.007-.544l2.196-2.288-2.196-2.296a.386.386 0 0 1 .007-.543.386.386 0 0 1 .544.015l2.449 2.556a.383.383 0 0 1 0 .536zm-3.513-3.873l-1.998 7.4a.385.385 0 0 1-.466.276.389.389 0 0 1-.276-.474l1.998-7.4a.38.38 0 0 1 .466-.269c.207.054.33.26.276.467zm-2.97 5.893a.386.386 0 0 1-.015.544.386.386 0 0 1-.543-.008l-2.45-2.556a.399.399 0 0 1 0-.536l2.45-2.556a.386.386 0 0 1 .543-.015c.153.153.16.39.016.543l-2.197 2.296zm9.529-8.847H6.822a.379.379 0 0 0-.383.383v12.352c0 .207.169.383.383.383h15.582a.384.384 0 0 0 .382-.383V11.126a.379.379 0 0 0-.382-.383z"></path></g> <g><path fill="currentColor" d="M40.373 23.478a.384.384 0 0 1-.382.383H27.562a.389.389 0 0 1-.383-.383c0-.214.176-.383.383-.383h12.429c.214 0 .382.169.382.383z"></path></g> <g><path fill="currentColor" d="M39.99 21.106c.215 0 .383.176.383.382a.379.379 0 0 1-.382.383H27.562a.384.384 0 0 1-.383-.383c0-.206.176-.382.383-.382z"></path></g> <g><path fill="currentColor" d="M39.761 15.128h-13.99a.384.384 0 0 1-.382-.382v-3.62c0-.215.168-.383.382-.383h13.99c.207 0 .383.168.383.383v3.62a.389.389 0 0 1-.383.382z"></path></g></g> <g><g><path fill="currentColor" d="M34.542 17.524c0-.214.168-.383.382-.383h5.067a.384.384 0 0 1 0 .765h-5.067a.384.384 0 0 1-.382-.382z"></path></g> <g><path fill="currentColor" d="M40.373 19.506a.379.379 0 0 1-.382.383h-5.067a.379.379 0 0 1-.382-.383c0-.214.168-.383.382-.383h5.067c.214 0 .382.169.382.383z"></path></g></g> <g><path fill="currentColor" d="M37.442 7.177H25.947a.379.379 0 0 1-.382-.383c0-.207.168-.383.382-.383h11.495c.215 0 .383.176.383.383a.379.379 0 0 1-.383.383zm-22.454.107h-1.21v-1.21h1.21zm-2.526 0h-1.209v-1.21h1.21zm-2.533 0H8.72v-1.21h1.21zM40 4.735H6.821a.384.384 0 0 0-.383.383v3.115c0 .214.169.383.383.383h33.176a.384.384 0 0 0 .383-.383V5.118a.389.389 0 0 0-.383-.383z"></path></g></g></g></g></svg>`,
                        },
                        {
                            title: 'Designing',
                            description: 'We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 39"><g><g><g><g><g><path fill="currentColor" d="M42.815 25.629H4.005V3.297h38.81zm-19.409 3.574a1.334 1.334 0 0 1-1.331-1.34 1.334 1.334 0 1 1 2.67 0 1.34 1.34 0 0 1-1.339 1.34zM43.963.235H2.858A1.914 1.914 0 0 0 .944 2.15v26.71c0 1.055.857 1.913 1.914 1.913h41.105a1.914 1.914 0 0 0 1.913-1.914V2.148A1.914 1.914 0 0 0 43.963.236z"></path></g></g> <g><g><path fill="currentColor" d="M31.044 35.15v3.037a.384.384 0 0 1-.382.383H16.159a.379.379 0 0 1-.383-.383V35.15c0-.214.168-.383.383-.383h2.755v-3.23h8.985v3.23h2.763c.206 0 .382.169.382.383z"></path></g></g> <g><g><path fill="currentColor" d="M19.358 17.57l-2.45 2.556a.386.386 0 0 1-.543.008.386.386 0 0 1-.007-.544l2.196-2.288-2.196-2.296a.386.386 0 0 1 .007-.543.386.386 0 0 1 .544.015l2.449 2.556a.383.383 0 0 1 0 .536zm-3.513-3.873l-1.998 7.4a.385.385 0 0 1-.466.276.389.389 0 0 1-.276-.474l1.998-7.4a.38.38 0 0 1 .466-.269c.207.054.33.26.276.467zm-2.97 5.893a.386.386 0 0 1-.015.544.386.386 0 0 1-.543-.008l-2.45-2.556a.399.399 0 0 1 0-.536l2.45-2.556a.386.386 0 0 1 .543-.015c.153.153.16.39.016.543l-2.197 2.296zm9.529-8.847H6.822a.379.379 0 0 0-.383.383v12.352c0 .207.169.383.383.383h15.582a.384.384 0 0 0 .382-.383V11.126a.379.379 0 0 0-.382-.383z"></path></g> <g><path fill="currentColor" d="M40.373 23.478a.384.384 0 0 1-.382.383H27.562a.389.389 0 0 1-.383-.383c0-.214.176-.383.383-.383h12.429c.214 0 .382.169.382.383z"></path></g> <g><path fill="currentColor" d="M39.99 21.106c.215 0 .383.176.383.382a.379.379 0 0 1-.382.383H27.562a.384.384 0 0 1-.383-.383c0-.206.176-.382.383-.382z"></path></g> <g><path fill="currentColor" d="M39.761 15.128h-13.99a.384.384 0 0 1-.382-.382v-3.62c0-.215.168-.383.382-.383h13.99c.207 0 .383.168.383.383v3.62a.389.389 0 0 1-.383.382z"></path></g></g> <g><g><path fill="currentColor" d="M34.542 17.524c0-.214.168-.383.382-.383h5.067a.384.384 0 0 1 0 .765h-5.067a.384.384 0 0 1-.382-.382z"></path></g> <g><path fill="currentColor" d="M40.373 19.506a.379.379 0 0 1-.382.383h-5.067a.379.379 0 0 1-.382-.383c0-.214.168-.383.382-.383h5.067c.214 0 .382.169.382.383z"></path></g></g> <g><path fill="currentColor" d="M37.442 7.177H25.947a.379.379 0 0 1-.382-.383c0-.207.168-.383.382-.383h11.495c.215 0 .383.176.383.383a.379.379 0 0 1-.383.383zm-22.454.107h-1.21v-1.21h1.21zm-2.526 0h-1.209v-1.21h1.21zm-2.533 0H8.72v-1.21h1.21zM40 4.735H6.821a.384.384 0 0 0-.383.383v3.115c0 .214.169.383.383.383h33.176a.384.384 0 0 0 .383-.383V5.118a.389.389 0 0 0-.383-.383z"></path></g></g></g></g></svg>`,
                        },
                        {
                            title: 'Designing',
                            description: 'We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 39" ><g><g><g><g><g><path fill="currentColor" d="M42.815 25.629H4.005V3.297h38.81zm-19.409 3.574a1.334 1.334 0 0 1-1.331-1.34 1.334 1.334 0 1 1 2.67 0 1.34 1.34 0 0 1-1.339 1.34zM43.963.235H2.858A1.914 1.914 0 0 0 .944 2.15v26.71c0 1.055.857 1.913 1.914 1.913h41.105a1.914 1.914 0 0 0 1.913-1.914V2.148A1.914 1.914 0 0 0 43.963.236z"></path></g></g> <g><g><path fill="currentColor" d="M31.044 35.15v3.037a.384.384 0 0 1-.382.383H16.159a.379.379 0 0 1-.383-.383V35.15c0-.214.168-.383.383-.383h2.755v-3.23h8.985v3.23h2.763c.206 0 .382.169.382.383z"></path></g></g> <g><g><path fill="currentColor" d="M19.358 17.57l-2.45 2.556a.386.386 0 0 1-.543.008.386.386 0 0 1-.007-.544l2.196-2.288-2.196-2.296a.386.386 0 0 1 .007-.543.386.386 0 0 1 .544.015l2.449 2.556a.383.383 0 0 1 0 .536zm-3.513-3.873l-1.998 7.4a.385.385 0 0 1-.466.276.389.389 0 0 1-.276-.474l1.998-7.4a.38.38 0 0 1 .466-.269c.207.054.33.26.276.467zm-2.97 5.893a.386.386 0 0 1-.015.544.386.386 0 0 1-.543-.008l-2.45-2.556a.399.399 0 0 1 0-.536l2.45-2.556a.386.386 0 0 1 .543-.015c.153.153.16.39.016.543l-2.197 2.296zm9.529-8.847H6.822a.379.379 0 0 0-.383.383v12.352c0 .207.169.383.383.383h15.582a.384.384 0 0 0 .382-.383V11.126a.379.379 0 0 0-.382-.383z"></path></g> <g><path fill="currentColor" d="M40.373 23.478a.384.384 0 0 1-.382.383H27.562a.389.389 0 0 1-.383-.383c0-.214.176-.383.383-.383h12.429c.214 0 .382.169.382.383z"></path></g> <g><path fill="currentColor" d="M39.99 21.106c.215 0 .383.176.383.382a.379.379 0 0 1-.382.383H27.562a.384.384 0 0 1-.383-.383c0-.206.176-.382.383-.382z"></path></g> <g><path fill="currentColor" d="M39.761 15.128h-13.99a.384.384 0 0 1-.382-.382v-3.62c0-.215.168-.383.382-.383h13.99c.207 0 .383.168.383.383v3.62a.389.389 0 0 1-.383.382z"></path></g></g> <g><g><path fill="currentColor" d="M34.542 17.524c0-.214.168-.383.382-.383h5.067a.384.384 0 0 1 0 .765h-5.067a.384.384 0 0 1-.382-.382z"></path></g> <g><path fill="currentColor" d="M40.373 19.506a.379.379 0 0 1-.382.383h-5.067a.379.379 0 0 1-.382-.383c0-.214.168-.383.382-.383h5.067c.214 0 .382.169.382.383z"></path></g></g> <g><path fill="currentColor" d="M37.442 7.177H25.947a.379.379 0 0 1-.382-.383c0-.207.168-.383.382-.383h11.495c.215 0 .383.176.383.383a.379.379 0 0 1-.383.383zm-22.454.107h-1.21v-1.21h1.21zm-2.526 0h-1.209v-1.21h1.21zm-2.533 0H8.72v-1.21h1.21zM40 4.735H6.821a.384.384 0 0 0-.383.383v3.115c0 .214.169.383.383.383h33.176a.384.384 0 0 0 .383-.383V5.118a.389.389 0 0 0-.383-.383z"></path></g></g></g></g></svg>`,
                        },
                        {
                            title: 'Designing',
                            description: 'We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 39" ><g><g><g><g><g><path fill="currentColor" d="M42.815 25.629H4.005V3.297h38.81zm-19.409 3.574a1.334 1.334 0 0 1-1.331-1.34 1.334 1.334 0 1 1 2.67 0 1.34 1.34 0 0 1-1.339 1.34zM43.963.235H2.858A1.914 1.914 0 0 0 .944 2.15v26.71c0 1.055.857 1.913 1.914 1.913h41.105a1.914 1.914 0 0 0 1.913-1.914V2.148A1.914 1.914 0 0 0 43.963.236z"></path></g></g> <g><g><path fill="currentColor" d="M31.044 35.15v3.037a.384.384 0 0 1-.382.383H16.159a.379.379 0 0 1-.383-.383V35.15c0-.214.168-.383.383-.383h2.755v-3.23h8.985v3.23h2.763c.206 0 .382.169.382.383z"></path></g></g> <g><g><path fill="currentColor" d="M19.358 17.57l-2.45 2.556a.386.386 0 0 1-.543.008.386.386 0 0 1-.007-.544l2.196-2.288-2.196-2.296a.386.386 0 0 1 .007-.543.386.386 0 0 1 .544.015l2.449 2.556a.383.383 0 0 1 0 .536zm-3.513-3.873l-1.998 7.4a.385.385 0 0 1-.466.276.389.389 0 0 1-.276-.474l1.998-7.4a.38.38 0 0 1 .466-.269c.207.054.33.26.276.467zm-2.97 5.893a.386.386 0 0 1-.015.544.386.386 0 0 1-.543-.008l-2.45-2.556a.399.399 0 0 1 0-.536l2.45-2.556a.386.386 0 0 1 .543-.015c.153.153.16.39.016.543l-2.197 2.296zm9.529-8.847H6.822a.379.379 0 0 0-.383.383v12.352c0 .207.169.383.383.383h15.582a.384.384 0 0 0 .382-.383V11.126a.379.379 0 0 0-.382-.383z"></path></g> <g><path fill="currentColor" d="M40.373 23.478a.384.384 0 0 1-.382.383H27.562a.389.389 0 0 1-.383-.383c0-.214.176-.383.383-.383h12.429c.214 0 .382.169.382.383z"></path></g> <g><path fill="currentColor" d="M39.99 21.106c.215 0 .383.176.383.382a.379.379 0 0 1-.382.383H27.562a.384.384 0 0 1-.383-.383c0-.206.176-.382.383-.382z"></path></g> <g><path fill="currentColor" d="M39.761 15.128h-13.99a.384.384 0 0 1-.382-.382v-3.62c0-.215.168-.383.382-.383h13.99c.207 0 .383.168.383.383v3.62a.389.389 0 0 1-.383.382z"></path></g></g> <g><g><path fill="currentColor" d="M34.542 17.524c0-.214.168-.383.382-.383h5.067a.384.384 0 0 1 0 .765h-5.067a.384.384 0 0 1-.382-.382z"></path></g> <g><path fill="currentColor" d="M40.373 19.506a.379.379 0 0 1-.382.383h-5.067a.379.379 0 0 1-.382-.383c0-.214.168-.383.382-.383h5.067c.214 0 .382.169.382.383z"></path></g></g> <g><path fill="currentColor" d="M37.442 7.177H25.947a.379.379 0 0 1-.382-.383c0-.207.168-.383.382-.383h11.495c.215 0 .383.176.383.383a.379.379 0 0 1-.383.383zm-22.454.107h-1.21v-1.21h1.21zm-2.526 0h-1.209v-1.21h1.21zm-2.533 0H8.72v-1.21h1.21zM40 4.735H6.821a.384.384 0 0 0-.383.383v3.115c0 .214.169.383.383.383h33.176a.384.384 0 0 0 .383-.383V5.118a.389.389 0 0 0-.383-.383z"></path></g></g></g></g></svg>`,
                        },
                        {
                            title: 'Designing',
                            description: 'We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 39" ><g><g><g><g><g><path fill="currentColor" d="M42.815 25.629H4.005V3.297h38.81zm-19.409 3.574a1.334 1.334 0 0 1-1.331-1.34 1.334 1.334 0 1 1 2.67 0 1.34 1.34 0 0 1-1.339 1.34zM43.963.235H2.858A1.914 1.914 0 0 0 .944 2.15v26.71c0 1.055.857 1.913 1.914 1.913h41.105a1.914 1.914 0 0 0 1.913-1.914V2.148A1.914 1.914 0 0 0 43.963.236z"></path></g></g> <g><g><path fill="currentColor" d="M31.044 35.15v3.037a.384.384 0 0 1-.382.383H16.159a.379.379 0 0 1-.383-.383V35.15c0-.214.168-.383.383-.383h2.755v-3.23h8.985v3.23h2.763c.206 0 .382.169.382.383z"></path></g></g> <g><g><path fill="currentColor" d="M19.358 17.57l-2.45 2.556a.386.386 0 0 1-.543.008.386.386 0 0 1-.007-.544l2.196-2.288-2.196-2.296a.386.386 0 0 1 .007-.543.386.386 0 0 1 .544.015l2.449 2.556a.383.383 0 0 1 0 .536zm-3.513-3.873l-1.998 7.4a.385.385 0 0 1-.466.276.389.389 0 0 1-.276-.474l1.998-7.4a.38.38 0 0 1 .466-.269c.207.054.33.26.276.467zm-2.97 5.893a.386.386 0 0 1-.015.544.386.386 0 0 1-.543-.008l-2.45-2.556a.399.399 0 0 1 0-.536l2.45-2.556a.386.386 0 0 1 .543-.015c.153.153.16.39.016.543l-2.197 2.296zm9.529-8.847H6.822a.379.379 0 0 0-.383.383v12.352c0 .207.169.383.383.383h15.582a.384.384 0 0 0 .382-.383V11.126a.379.379 0 0 0-.382-.383z"></path></g> <g><path fill="currentColor" d="M40.373 23.478a.384.384 0 0 1-.382.383H27.562a.389.389 0 0 1-.383-.383c0-.214.176-.383.383-.383h12.429c.214 0 .382.169.382.383z"></path></g> <g><path fill="currentColor" d="M39.99 21.106c.215 0 .383.176.383.382a.379.379 0 0 1-.382.383H27.562a.384.384 0 0 1-.383-.383c0-.206.176-.382.383-.382z"></path></g> <g><path fill="currentColor" d="M39.761 15.128h-13.99a.384.384 0 0 1-.382-.382v-3.62c0-.215.168-.383.382-.383h13.99c.207 0 .383.168.383.383v3.62a.389.389 0 0 1-.383.382z"></path></g></g> <g><g><path fill="currentColor" d="M34.542 17.524c0-.214.168-.383.382-.383h5.067a.384.384 0 0 1 0 .765h-5.067a.384.384 0 0 1-.382-.382z"></path></g> <g><path fill="currentColor" d="M40.373 19.506a.379.379 0 0 1-.382.383h-5.067a.379.379 0 0 1-.382-.383c0-.214.168-.383.382-.383h5.067c.214 0 .382.169.382.383z"></path></g></g> <g><path fill="currentColor" d="M37.442 7.177H25.947a.379.379 0 0 1-.382-.383c0-.207.168-.383.382-.383h11.495c.215 0 .383.176.383.383a.379.379 0 0 1-.383.383zm-22.454.107h-1.21v-1.21h1.21zm-2.526 0h-1.209v-1.21h1.21zm-2.533 0H8.72v-1.21h1.21zM40 4.735H6.821a.384.384 0 0 0-.383.383v3.115c0 .214.169.383.383.383h33.176a.384.384 0 0 0 .383-.383V5.118a.389.389 0 0 0-.383-.383z"></path></g></g></g></g></svg>`,
                        },
                        {
                            title: 'Designing',
                            description: 'We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 39" ><g><g><g><g><g><path fill="currentColor" d="M42.815 25.629H4.005V3.297h38.81zm-19.409 3.574a1.334 1.334 0 0 1-1.331-1.34 1.334 1.334 0 1 1 2.67 0 1.34 1.34 0 0 1-1.339 1.34zM43.963.235H2.858A1.914 1.914 0 0 0 .944 2.15v26.71c0 1.055.857 1.913 1.914 1.913h41.105a1.914 1.914 0 0 0 1.913-1.914V2.148A1.914 1.914 0 0 0 43.963.236z"></path></g></g> <g><g><path fill="currentColor" d="M31.044 35.15v3.037a.384.384 0 0 1-.382.383H16.159a.379.379 0 0 1-.383-.383V35.15c0-.214.168-.383.383-.383h2.755v-3.23h8.985v3.23h2.763c.206 0 .382.169.382.383z"></path></g></g> <g><g><path fill="currentColor" d="M19.358 17.57l-2.45 2.556a.386.386 0 0 1-.543.008.386.386 0 0 1-.007-.544l2.196-2.288-2.196-2.296a.386.386 0 0 1 .007-.543.386.386 0 0 1 .544.015l2.449 2.556a.383.383 0 0 1 0 .536zm-3.513-3.873l-1.998 7.4a.385.385 0 0 1-.466.276.389.389 0 0 1-.276-.474l1.998-7.4a.38.38 0 0 1 .466-.269c.207.054.33.26.276.467zm-2.97 5.893a.386.386 0 0 1-.015.544.386.386 0 0 1-.543-.008l-2.45-2.556a.399.399 0 0 1 0-.536l2.45-2.556a.386.386 0 0 1 .543-.015c.153.153.16.39.016.543l-2.197 2.296zm9.529-8.847H6.822a.379.379 0 0 0-.383.383v12.352c0 .207.169.383.383.383h15.582a.384.384 0 0 0 .382-.383V11.126a.379.379 0 0 0-.382-.383z"></path></g> <g><path fill="currentColor" d="M40.373 23.478a.384.384 0 0 1-.382.383H27.562a.389.389 0 0 1-.383-.383c0-.214.176-.383.383-.383h12.429c.214 0 .382.169.382.383z"></path></g> <g><path fill="currentColor" d="M39.99 21.106c.215 0 .383.176.383.382a.379.379 0 0 1-.382.383H27.562a.384.384 0 0 1-.383-.383c0-.206.176-.382.383-.382z"></path></g> <g><path fill="currentColor" d="M39.761 15.128h-13.99a.384.384 0 0 1-.382-.382v-3.62c0-.215.168-.383.382-.383h13.99c.207 0 .383.168.383.383v3.62a.389.389 0 0 1-.383.382z"></path></g></g> <g><g><path fill="currentColor" d="M34.542 17.524c0-.214.168-.383.382-.383h5.067a.384.384 0 0 1 0 .765h-5.067a.384.384 0 0 1-.382-.382z"></path></g> <g><path fill="currentColor" d="M40.373 19.506a.379.379 0 0 1-.382.383h-5.067a.379.379 0 0 1-.382-.383c0-.214.168-.383.382-.383h5.067c.214 0 .382.169.382.383z"></path></g></g> <g><path fill="currentColor" d="M37.442 7.177H25.947a.379.379 0 0 1-.382-.383c0-.207.168-.383.382-.383h11.495c.215 0 .383.176.383.383a.379.379 0 0 1-.383.383zm-22.454.107h-1.21v-1.21h1.21zm-2.526 0h-1.209v-1.21h1.21zm-2.533 0H8.72v-1.21h1.21zM40 4.735H6.821a.384.384 0 0 0-.383.383v3.115c0 .214.169.383.383.383h33.176a.384.384 0 0 0 .383-.383V5.118a.389.389 0 0 0-.383-.383z"></path></g></g></g></g></svg>`,
                        },
                        {
                            title: 'Designing',
                            description: 'We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.',
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 39" ><g><g><g><g><g><path fill="currentColor" d="M42.815 25.629H4.005V3.297h38.81zm-19.409 3.574a1.334 1.334 0 0 1-1.331-1.34 1.334 1.334 0 1 1 2.67 0 1.34 1.34 0 0 1-1.339 1.34zM43.963.235H2.858A1.914 1.914 0 0 0 .944 2.15v26.71c0 1.055.857 1.913 1.914 1.913h41.105a1.914 1.914 0 0 0 1.913-1.914V2.148A1.914 1.914 0 0 0 43.963.236z"></path></g></g> <g><g><path fill="currentColor" d="M31.044 35.15v3.037a.384.384 0 0 1-.382.383H16.159a.379.379 0 0 1-.383-.383V35.15c0-.214.168-.383.383-.383h2.755v-3.23h8.985v3.23h2.763c.206 0 .382.169.382.383z"></path></g></g> <g><g><path fill="currentColor" d="M19.358 17.57l-2.45 2.556a.386.386 0 0 1-.543.008.386.386 0 0 1-.007-.544l2.196-2.288-2.196-2.296a.386.386 0 0 1 .007-.543.386.386 0 0 1 .544.015l2.449 2.556a.383.383 0 0 1 0 .536zm-3.513-3.873l-1.998 7.4a.385.385 0 0 1-.466.276.389.389 0 0 1-.276-.474l1.998-7.4a.38.38 0 0 1 .466-.269c.207.054.33.26.276.467zm-2.97 5.893a.386.386 0 0 1-.015.544.386.386 0 0 1-.543-.008l-2.45-2.556a.399.399 0 0 1 0-.536l2.45-2.556a.386.386 0 0 1 .543-.015c.153.153.16.39.016.543l-2.197 2.296zm9.529-8.847H6.822a.379.379 0 0 0-.383.383v12.352c0 .207.169.383.383.383h15.582a.384.384 0 0 0 .382-.383V11.126a.379.379 0 0 0-.382-.383z"></path></g> <g><path fill="currentColor" d="M40.373 23.478a.384.384 0 0 1-.382.383H27.562a.389.389 0 0 1-.383-.383c0-.214.176-.383.383-.383h12.429c.214 0 .382.169.382.383z"></path></g> <g><path fill="currentColor" d="M39.99 21.106c.215 0 .383.176.383.382a.379.379 0 0 1-.382.383H27.562a.384.384 0 0 1-.383-.383c0-.206.176-.382.383-.382z"></path></g> <g><path fill="currentColor" d="M39.761 15.128h-13.99a.384.384 0 0 1-.382-.382v-3.62c0-.215.168-.383.382-.383h13.99c.207 0 .383.168.383.383v3.62a.389.389 0 0 1-.383.382z"></path></g></g> <g><g><path fill="currentColor" d="M34.542 17.524c0-.214.168-.383.382-.383h5.067a.384.384 0 0 1 0 .765h-5.067a.384.384 0 0 1-.382-.382z"></path></g> <g><path fill="currentColor" d="M40.373 19.506a.379.379 0 0 1-.382.383h-5.067a.379.379 0 0 1-.382-.383c0-.214.168-.383.382-.383h5.067c.214 0 .382.169.382.383z"></path></g></g> <g><path fill="currentColor" d="M37.442 7.177H25.947a.379.379 0 0 1-.382-.383c0-.207.168-.383.382-.383h11.495c.215 0 .383.176.383.383a.379.379 0 0 1-.383.383zm-22.454.107h-1.21v-1.21h1.21zm-2.526 0h-1.209v-1.21h1.21zm-2.533 0H8.72v-1.21h1.21zM40 4.735H6.821a.384.384 0 0 0-.383.383v3.115c0 .214.169.383.383.383h33.176a.384.384 0 0 0 .383-.383V5.118a.389.389 0 0 0-.383-.383z"></path></g></g></g></g></svg>`,
                        },
                    ];
                },
            },
        },
    };
</script>
