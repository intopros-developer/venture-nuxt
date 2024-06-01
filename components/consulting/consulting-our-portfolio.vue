<template>
    <section class="my-10 md:my-16 md:pb-0 lg:mt-[152px]">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="mb-9 flex items-center justify-center gap-[30px] text-center md:mb-[50px]">
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                <h2 class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary" v-html="$t(title)"></h2>
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
            </div>

            <div class="relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-3 lg:gap-y-[76px]">
                <section v-for="(data, i) in content" :id="i" :key="i" class="relative mb-8 border-[#d5d5d5] md:px-7">
                    <nuxt-img format="webp" :src="data.img" :alt="data.title" class="h-32 w-full object-cover" loading="lazy" />

                    <p class="my-4 text-sm font-bold text-primary">{{ data.subTitle }}</p>
                    <h5 class="text-lg font-bold">{{ data.title }}</h5>
                    <p>{{ data.description.length > 200 ? data.description.slice(0, 200) + '...' : data.description }}</p>
                    <button class="mt-5 flex items-center gap-2 font-bold text-primary">
                        Explore Further
                        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 4L-3.26266e-07 7.4641L-2.34249e-08 0.535898L6 4Z" fill="#00ADFF" />
                        </svg>
                    </button>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: '',
            },
            title: {
                type: String,
                default: 'our_portfolio',
            },
        },

        data() {
            return {
                isShowReadMore: false,
                content: [
                    {
                        img: '/assets/img/career-que-1.jpg',
                        subTitle: 'AI/ML Cybersecurity',
                        title: 'Mobile tools designed for the blue-collar workforce.',
                        description:
                            "A leading construction technology company, XYZ is dedicated to revolutionizing the construction industry through innovative solutions. With their cutting-edge field data platform, they are streamlining critical field workflows and helping teams capture, share, and analyze project performance in real-time. XYZ's mission is to enable construction teams to work smarter, faster, and more efficiently than ever before.",
                    },
                    {
                        img: '/assets/img/career-que-2.jpg',
                        subTitle: 'AI/ML Cybersecurity',
                        title: 'Mobile tools designed for the blue-collar workforce.',
                        description:
                            "A leading construction technology company, XYZ is dedicated to revolutionizing the construction industry through innovative solutions. With their cutting-edge field data platform, they are streamlining critical field workflows and helping teams capture, share, and analyze project performance in real-time. XYZ's mission is to enable construction teams to work smarter, faster, and more efficiently than ever before.",
                    },
                    {
                        img: '/assets/img/career-que-3.jpg',
                        subTitle: 'AI/ML Cybersecurity',
                        title: 'Mobile tools designed for the blue-collar workforce.',
                        description:
                            "A leading construction technology company, XYZ is dedicated to revolutionizing the construction industry through innovative solutions. With their cutting-edge field data platform, they are streamlining critical field workflows and helping teams capture, share, and analyze project performance in real-time. XYZ's mission is to enable construction teams to work smarter, faster, and more efficiently than ever before.",
                    },
                    {
                        img: '/assets/img/career-que-4.jpg',
                        subTitle: 'AI/ML Cybersecurity',
                        title: 'Mobile tools designed for the blue-collar workforce.',
                        description:
                            "A leading construction technology company, XYZ is dedicated to revolutionizing the construction industry through innovative solutions. With their cutting-edge field data platform, they are streamlining critical field workflows and helping teams capture, share, and analyze project performance in real-time. XYZ's mission is to enable construction teams to work smarter, faster, and more efficiently than ever before.",
                    },
                    {
                        img: '/assets/img/career-que-5.jpg',
                        subTitle: 'AI/ML Cybersecurity',
                        title: 'Mobile tools designed for the blue-collar workforce.',
                        description:
                            "A leading construction technology company, XYZ is dedicated to revolutionizing the construction industry through innovative solutions. With their cutting-edge field data platform, they are streamlining critical field workflows and helping teams capture, share, and analyze project performance in real-time. XYZ's mission is to enable construction teams to work smarter, faster, and more efficiently than ever before.",
                    },
                    {
                        img: '/assets/img/career-que-6.jpg',
                        subTitle: 'AI/ML Cybersecurity',
                        title: 'Mobile tools designed for the blue-collar workforce.',
                        description:
                            "A leading construction technology company, XYZ is dedicated to revolutionizing the construction industry through innovative solutions. With their cutting-edge field data platform, they are streamlining critical field workflows and helping teams capture, share, and analyze project performance in real-time. XYZ's mission is to enable construction teams to work smarter, faster, and more efficiently than ever before.",
                    },
                    {
                        img: '/assets/img/career-que-7.jpg',
                        subTitle: 'AI/ML Cybersecurity',
                        title: 'Mobile tools designed for the blue-collar workforce.',
                        description:
                            "A leading construction technology company, XYZ is dedicated to revolutionizing the construction industry through innovative solutions. With their cutting-edge field data platform, they are streamlining critical field workflows and helping teams capture, share, and analyze project performance in real-time. XYZ's mission is to enable construction teams to work smarter, faster, and more efficiently than ever before.",
                    },
                ],
            };
        },

        computed: {
            overviewValue() {
                if (this.$helper.isEmpty(this.value)) {
                    return this.$t('common_company_overview_paragraph');
                } else {
                    return this.value;
                }
            },
        },
    };
</script>
