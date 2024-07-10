<template>
    <section class="bg-[#F3F3F3] py-10 md:py-16 xl:py-20">
        <div class="container relative px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="mb-10 text-center md:mb-20">
                <div class="mb-4 flex items-center justify-center gap-[33px] text-center">
                    <div class="block h-px w-full bg-[#d5d5d5]"></div>
                    <h2 id="faqs" class="inline-block shrink-0 text-2xl font-bold uppercase text-black xl:text-3xl" v-html="title"></h2>
                    <div class="block h-px w-full bg-[#d5d5d5]"></div>
                </div>
                <p class="text-lg leading-6 -tracking-[-0.04px] text-[#566378]">{{ description }}</p>
            </div>
            <div class="lg:w-[95%]">
                <div v-for="(faq, i) in faqs" :id="`faq-${faq.id}`" :key="i" class="mb-5">
                    <div class="space-y-3 border-b border-[#E6E6E6]" @click="openFaq = openFaq === faq.id ? '' : faq.id">
                        <div class="group flex cursor-pointer items-start justify-between gap-5 md:gap-14">
                            <p class="flex-1 pb-3 text-lg font-light leading-[25px] -tracking-[-0.04px] text-black md:pb-6 lg:pr-2" :class="{ '!font-bold text-primary': openFaq === faq.id }">
                                {{ faq.attributes.question }}
                            </p>
                            <div class="lg:absolute lg:right-2.5">
                                <icons-minus v-if="openFaq === faq.id" class="w-4 flex-none text-primary md:w-auto" />
                                <icons-plus v-else class="w-4 flex-none text-black-700 group-hover:text-primary md:w-auto" />
                            </div>
                        </div>
                        <common-custom-strapi-display v-if="openFaq === faq.id" classes="pb-3 leading-[23px] lg:max-w-[1114px]" :data="faq.attributes.answer"></common-custom-strapi-display>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    // FAQ open close
    export default {
        props: {
            faqs: {
                type: Array,
                default: () => [
                    {
                        id: 1,
                        attributes: {
                            question: 'Can I get free consultation with Ventureplans?',
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, in labore accusamus officiis error veritatis, magni recusandae quo itaque explicabo necessitatibus quibusdam suscipit, commodi cumque nostrum vero laborum magnam? Ratione omnis voluptate vitae illo, sit illum hic quam rem atque voluptatibus mollitia quae distinctio neque laboriosam sequi corrupti deleniti aperiam. Molestiae voluptate culpa eius delectus distinctio explicabo ullam neque, ab officiis cumque aspernatur quod aperiam, cum deleniti, autem labore minima est qui repudiandae veniam perferendis amet repellendus. Dolor, omnis tenetur.',
                        },
                    },

                    {
                        id: 2,
                        attributes: {
                            question: 'How to choose a software development services company?',
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, in labore accusamus officiis error veritatis, magni recusandae quo itaque explicabo necessitatibus quibusdam suscipit, commodi cumque nostrum vero laborum magnam? Ratione omnis voluptate vitae illo, sit illum hic quam rem atque voluptatibus mollitia quae distinctio neque laboriosam sequi corrupti deleniti aperiam. Molestiae voluptate culpa eius delectus distinctio explicabo ullam neque, ab officiis cumque aspernatur quod aperiam, cum deleniti, autem labore minima est qui repudiandae veniam perferendis amet repellendus. Dolor, omnis tenetur.',
                        },
                    },

                    {
                        id: 3,
                        attributes: {
                            question: 'What are the biggest benefits of outsourcing a software development services firm?',
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, in labore accusamus officiis error veritatis, magni recusandae quo itaque explicabo necessitatibus quibusdam suscipit, commodi cumque nostrum vero laborum magnam? Ratione omnis voluptate vitae illo, sit illum hic quam rem atque voluptatibus mollitia quae distinctio neque laboriosam sequi corrupti deleniti aperiam. Molestiae voluptate culpa eius delectus distinctio explicabo ullam neque, ab officiis cumque aspernatur quod aperiam, cum deleniti, autem labore minima est qui repudiandae veniam perferendis amet repellendus. Dolor, omnis tenetur.',
                        },
                    },

                    {
                        id: 4,
                        attributes: {
                            question: 'How to reduce software development services costs?',
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, in labore accusamus officiis error veritatis, magni recusandae quo itaque explicabo necessitatibus quibusdam suscipit, commodi cumque nostrum vero laborum magnam? Ratione omnis voluptate vitae illo, sit illum hic quam rem atque voluptatibus mollitia quae distinctio neque laboriosam sequi corrupti deleniti aperiam. Molestiae voluptate culpa eius delectus distinctio explicabo ullam neque, ab officiis cumque aspernatur quod aperiam, cum deleniti, autem labore minima est qui repudiandae veniam perferendis amet repellendus. Dolor, omnis tenetur.',
                        },
                    },

                    {
                        id: 5,
                        attributes: {
                            question: 'What are the most popular types of software development services?',
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, in labore accusamus officiis error veritatis, magni recusandae quo itaque explicabo necessitatibus quibusdam suscipit, commodi cumque nostrum vero laborum magnam? Ratione omnis voluptate vitae illo, sit illum hic quam rem atque voluptatibus mollitia quae distinctio neque laboriosam sequi corrupti deleniti aperiam. Molestiae voluptate culpa eius delectus distinctio explicabo ullam neque, ab officiis cumque aspernatur quod aperiam, cum deleniti, autem labore minima est qui repudiandae veniam perferendis amet repellendus. Dolor, omnis tenetur.',
                        },
                    },

                    {
                        id: 6,
                        attributes: {
                            question: 'Can I get free consultation with Ventureplans?',
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, in labore accusamus officiis error veritatis, magni recusandae quo itaque explicabo necessitatibus quibusdam suscipit, commodi cumque nostrum vero laborum magnam? Ratione omnis voluptate vitae illo, sit illum hic quam rem atque voluptatibus mollitia quae distinctio neque laboriosam sequi corrupti deleniti aperiam. Molestiae voluptate culpa eius delectus distinctio explicabo ullam neque, ab officiis cumque aspernatur quod aperiam, cum deleniti, autem labore minima est qui repudiandae veniam perferendis amet repellendus. Dolor, omnis tenetur.',
                        },
                    },
                ],
            },
            title: {
                type: String,
                default: 'FAQS',
            },
            description: {
                type: String,
                default: 'Do you have any questions?',
            },
        },
        data() {
            return {
                openFaq: null,
            };
        },

        head() {
            return {
                script: [
                    {
                        type: 'application/ld+json',
                        json: this.schemaMarkup,
                    },
                ],
            };
        },

        computed: {
            schemaMarkup() {
                return this.generateSchema(this.$props.faqs);
            },
        },

        watch: {
            openFaq: {
                handler() {
                    setTimeout(() => {
                        let domRect = document.querySelector(`#faq-${this.openFaq}`);
                        if (domRect !== null) {
                            domRect = document.querySelector(`#faq-${this.openFaq}`).getBoundingClientRect();
                            window.scrollTo({ top: domRect.top + document.documentElement.scrollTop - 130, behavior: 'smooth' });
                        }
                    }, 100);
                },
                deep: true,
            },
        },

        methods: {
            generateSchema(data) {
                return {
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: data.map((faq) => ({
                        '@type': 'Question',
                        name: faq.attributes.question,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: faq.attributes.answer,
                        },
                    })),
                };
            },
        },
    };
</script>
