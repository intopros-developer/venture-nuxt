<template>
    <ul class="grid grid-cols-1 divide-y divide-[#e6e6e6] border border-[#e6e6e6] bg-white text-center sm:grid-cols-2 sm:divide-x md:grid-cols-3">
        <li v-for="(service, i) in services" :key="i" class="group relative overflow-hidden px-8 pb-[43px] pt-[50px] hover:bg-primary">
            <div class="duration-700 group-hover:scale-75 group-hover:opacity-0">
                <div class="mb-4 h-28">
                    <nuxt-img format="webp" :src="service.svgLink" class="mx-auto" :alt="service.title" loading="lazy" />
                </div>
                <h3 class="text-xl font-semibold leading-[50px] group-hover:text-white lg:text-2xl">{{ service.title }}</h3>
            </div>

            <div class="absolute bottom-0 left-0 right-0 top-0 text-start">
                <div class="translate-y-[200%] transform px-4 pt-8 text-white opacity-0 transition-transform delay-200 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <h5 class="text-xl font-bold">{{ service.title }}</h5>
                    {{ service.Description }}
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            services: {
                type: Array,
                default: () => {
                    return [
                        {
                            title: 'Mobile Development',
                            svgLink: '/assets/img/mobile_icon.png',
                            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt hic aliquid debitis tenetur maxime atque reiciendis voluptatum. Iure, officiis?',
                        },
                        {
                            title: 'UX / UI Design',
                            svgLink: '/assets/img/ux_ui_icon.png',
                            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt hic aliquid debitis tenetur maxime atque reiciendis voluptatum. Iure, officiis?',
                        },
                        {
                            title: 'QA Testing',
                            svgLink: '/assets/img/qa_icon.png',
                            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt hic aliquid debitis tenetur maxime atque reiciendis voluptatum. Iure, officiis?',
                        },
                        {
                            title: 'Development Team',
                            svgLink: '/assets/img/team_icon.png',
                            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt hic aliquid debitis tenetur maxime atque reiciendis voluptatum. Iure, officiis?',
                        },
                        {
                            title: 'IT Consulting',
                            svgLink: '/assets/img/it_icon.png',
                            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt hic aliquid debitis tenetur maxime atque reiciendis voluptatum. Iure, officiis?',
                        },
                        {
                            title: 'Product Engineering',
                            svgLink: '/assets/img/engineering_icon.png',
                            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt hic aliquid debitis tenetur maxime atque reiciendis voluptatum. Iure, officiis?',
                        },
                    ];
                },
            },
        },
    };
</script>
