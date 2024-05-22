<template>
    <div class="flex flex-col md:flex-row">
        <div class="w-full flex-none md:mx-auto lg:max-w-[332px] xl:max-w-[425px]">
            <div v-if="services.length">
                <ul class="md:space-y-4">
                    <template v-if="services">
                        <li
                            v-for="(service, index) in services"
                            :key="index"
                            class="py-4 -tracking-[0.04px] transition-all duration-150 hover:text-[#1A9CEA] md:py-2.5 md:text-[19px] lg:hover:border-[#1A9CEA]"
                            :class="[serviceTitle === service.attributes.title ? 'border-b border-[#BFBFBF]/40 font-bold text-[#1A9CEA] lg:border-[#1A9CEA]' : 'border-b border-[#BFBFBF]/40']"
                        >
                            <div class="flex cursor-pointer items-center -tracking-[0.04px]" @click="showDescription(service.attributes.title, index)">
                                {{ service.attributes.title }}
                                <icons-minus v-if="serviceTitle === service.attributes.title" class="ml-auto block !h-5 !w-5 lg:hidden" />
                                <icons-plus v-else class="ml-auto block !h-5 !w-5 lg:hidden" />
                            </div>
                            <VueSlideToggle :open="serviceTitle === service.attributes.title" tag="section" :duration="500" class="block lg:hidden">
                                <div v-if="serviceDescription" :id="`service-${index}`">
                                    <div class="bg-white p-5 shadow-[0_3px_6px_rgba(0,0,0,0.16)] lg:px-[30px] lg:pb-16 lg:pt-[30px]">
                                        <img
                                            loading="lazy"
                                            v-if="!serviceDescription.attributes.descriptionVideoUrl && serviceDescription.attributes.descriptionImageUrl"
                                            :src="`${serviceDescription.attributes.descriptionImageUrl}`"
                                            class="h-[180px] w-full object-cover sm:h-[280px] lg:h-[380px]"
                                        />
                                        <div
                                            v-else-if="serviceDescription.attributes.descriptionVideoUrl"
                                            ref="video"
                                            class="relative h-[180px] w-full bg-cover bg-center bg-no-repeat sm:h-[280px] lg:h-[380px]"
                                            :style="{ backgroundImage: `url(${serviceDescription.attributes.descriptionImageUrl})` }"
                                        >
                                            <iframe
                                                v-if="!showOverlay"
                                                :src="iframeURL"
                                                title="meeting-video"
                                                allow="autoplay; fullscreen"
                                                allowtransparency="true"
                                                frameborder="0"
                                                scrolling="no"
                                                class="wistia_embed"
                                                name="wistia_embed"
                                                msallowfullscreen
                                                width="100%"
                                                :height="videoHeight"
                                            ></iframe>
                                            <button v-show="showOverlay" class="absolute inset-x-0 top-1/2 z-10 mx-auto w-[113px] -translate-y-1/2 bg-primary/[0.71] px-11 py-5 group-hover:bg-primary" @click="play()">
                                                <icons-play />
                                            </button>
                                        </div>
                                        <div class="pt-5 md:pt-[29px]">
                                            <p v-if="serviceDescription.attributes.descriptionTitle" class="text-xl text-[#2F2F2F] md:text-2xl lg:text-3xl">{{ serviceDescription.attributes.descriptionTitle }}</p>
                                            <common-custom-strapi-display classes="pt-5 text-lg font-normal text-[#4D4D4D]" :data="serviceDescription.attributes.descriptionPara"></common-custom-strapi-display>
                                            <nuxt-link v-if="$helper.isInternalUrl(serviceDescription.attributes.descriptionLinkUrl)" :to="serviceDescription.attributes.descriptionLinkUrl" class="block pt-6 font-semibold text-[#0DA1F1]">
                                                {{ serviceDescription.attributes.descriptionLink }}</nuxt-link
                                            >
                                            <a v-else target="_blank" :href="serviceDescription.attributes.descriptionLinkUrl" aria-label="Consulting" class="block pt-6 font-semibold text-[#0DA1F1]">
                                                {{ serviceDescription.attributes.descriptionLink }}</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </VueSlideToggle>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div v-if="serviceDescription && services.length && !isMobileView" class="hidden lg:block">
            <div class="bg-white p-5 shadow-[0_3px_6px_rgba(0,0,0,0.16)] md:px-8 md:pb-[57px] md:pt-8">
                <img
                    loading="lazy"
                    v-if="!serviceDescription.attributes.descriptionVideoUrl && serviceDescription.attributes.descriptionImageUrl"
                    :src="`${serviceDescription.attributes.descriptionImageUrl}`"
                    class="h-[180px] w-full object-cover sm:h-[280px] lg:h-[380px]"
                />
                <div
                    v-else-if="serviceDescription.attributes.descriptionVideoUrl"
                    ref="video"
                    class="relative h-[180px] w-full bg-cover bg-center bg-no-repeat sm:h-[280px] lg:h-[380px]"
                    :style="{ backgroundImage: `url(${serviceDescription.attributes.descriptionImageUrl})` }"
                >
                    <iframe
                        v-if="!showOverlay"
                        :src="iframeURL"
                        title="meeting-video"
                        allow="autoplay; fullscreen"
                        allowtransparency="true"
                        frameborder="0"
                        scrolling="no"
                        class="wistia_embed"
                        name="wistia_embed"
                        msallowfullscreen
                        width="100%"
                        :height="videoHeight"
                    ></iframe>
                    <button v-show="showOverlay" class="absolute inset-x-0 top-1/2 z-10 mx-auto w-[113px] -translate-y-1/2 bg-primary/[0.71] px-11 py-5 group-hover:bg-primary" @click="play()">
                        <icons-play />
                    </button>
                </div>
                <div class="pt-5 md:pt-[29px]">
                    <p v-if="serviceDescription.attributes.descriptionTitle" class="text-xl -tracking-[-0.06px] text-[#2F2F2F] md:text-2xl lg:text-[32px]">{{ serviceDescription.attributes.descriptionTitle }}</p>
                    <common-custom-strapi-display classes="pt-[15px] text-lg leading-6 -tracking-[-0.03px] text-[#4D4D4D]" :data="serviceDescription.attributes.descriptionPara"></common-custom-strapi-display>
                    <nuxt-link v-if="$helper.isInternalUrl(serviceDescription.attributes.descriptionLinkUrl)" :to="serviceDescription.attributes.descriptionLinkUrl" class="block pt-6 font-semibold text-[#0DA1F1]">
                        {{ serviceDescription.attributes.descriptionLink }}</nuxt-link
                    >
                    <a v-else target="_blank" :href="serviceDescription.attributes.descriptionLinkUrl" aria-label="Consulting" class="block pt-6 font-semibold text-[#0DA1F1]"> {{ serviceDescription.attributes.descriptionLink }}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            services: {
                type: Array,
                default: [
                    {
                        id: 1,
                        attributes: {
                            title: 'Management Consulting',
                            descriptionTitle: 'Take your business to the next level',
                            descriptionPara:
                                'Our management consultants primarily engage companies as a long term trusted adviser. Our experts consultants assist with collecting information and data in order to make impactful strategic decisions. We partner with corporations and their leaders to discover and resolve some of their most critical business challenges. Our consultants enjoy what they do and really value their work.',
                            descriptionLink: null,
                            descriptionLinkUrl: null,
                            DescriptionMediaType: null,
                            descriptionImageUrl: 'background-image: url("//images.ctfassets.net/koyrlvjc3wvc/4JEk9Azdv4ElA58Sh2NXDq/b45db57e747877f1a4721da923e1d986/video-thumbnail.jpg");',
                            descriptionVideoUrl: null,
                        },
                    },
                    {
                        id: 2,
                        attributes: {
                            title: 'Business Strategy',
                            descriptionTitle: 'Business Strategy',
                            descriptionPara:
                                'From business plans, to financing strategy, to digital transformations strategies we help companies rebrand their product and services for new demographics. We help you advance quickly amid great uncertainty. With the freedom to adjust as circumstances change, you can build value now as you work toward your future goals. Our strategies have the flexibility to adapt to changes in technology, shifting customer demands, and market conditions. We can assist you with making crucial decisions that will successfully grow your business.',
                            descriptionLink: null,
                            descriptionLinkUrl: null,
                            DescriptionMediaType: null,
                            descriptionImageUrl: null,
                            descriptionVideoUrl: null,
                        },
                    },
                    {
                        id: 3,
                        attributes: {
                            title: 'Legal Advisory',
                            descriptionTitle: 'Legal Advisory',
                            descriptionPara:
                                'We provide legal counsel to small to large corporations. Our legal advisors focus on Intellectual property including patents, trademarks, copyrights, and trade secrets., Securities law, and technology law.',
                            descriptionLink: null,
                            descriptionLinkUrl: null,
                            DescriptionMediaType: null,
                            descriptionImageUrl: null,
                            descriptionVideoUrl: null,
                        },
                    },
                ],
            },
        },

        data() {
            return {
                serviceTitle: 'Management Consulting',
                videoHeight: 380,
                playing: false,
                isMobileView: false,
                activeServiceIndex: null,
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
            serviceDescription() {
                return this.services.find((service) => service.attributes.title === this.serviceTitle);
            },

            showOverlay() {
                return !this.playing;
            },

            iframeURL() {
                if (this.serviceDescription.attributes) {
                    return this.serviceDescription.attributes.descriptionVideoUrl;
                } else {
                    return '';
                }
            },

            schemaMarkup() {
                return this.generateSchema(this.$props.services);
            },
        },

        watch: {
            serviceTitle: {
                handler() {
                    if (this.isMobileView) {
                        setTimeout(() => {
                            let domRect = document.querySelector(`#service-${this.activeServiceIndex}`);
                            if (domRect !== null) {
                                domRect = document.querySelector(`#service-${this.activeServiceIndex}`).getBoundingClientRect();
                                window.scrollTo({ top: domRect.top + document.documentElement.scrollTop - 150, behavior: 'smooth' });
                            }
                        }, 600);
                    }
                },
                deep: true,
            },
        },

        mounted() {
            if (window.innerWidth <= 576) {
                this.videoHeight = 180;
                this.serviceTitle = '';
            } else if (window.innerWidth <= 1023) {
                this.videoHeight = 280;
                this.serviceTitle = '';
            } else {
                this.serviceTitle = this.services[0]?.attributes?.title;
                this.videoHeight = 380;
            }
            this.isMobileView = !(window.innerWidth > 1023);
        },

        methods: {
            showDescription(title, index) {
                if (window.innerWidth <= 768) {
                    this.serviceTitle = this.serviceTitle === title ? '' : title;
                    this.activeServiceIndex = index;
                } else {
                    this.serviceTitle = title;
                }
                if (this.playing) {
                    this.playing = false;
                }
            },

            play() {
                this.playing = true;
                setTimeout(() => {
                    const video = window.Wistia.api(this?.serviceDescription?.attributes?.descriptionVideoUrl);

                    if (video) {
                        video.play();

                        video.bind('end', () => {
                            this.playing = false;
                            return video.unbind('end', () => {});
                        });
                    }
                }, 250);
            },

            generateSchema(data) {
                return data.map((service) => {
                    return {
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        serviceType: service.attributes.title,
                        provider: {
                            '@type': 'Organization',
                            name: 'Ventureplans™',
                        },
                        description: service.attributes.descriptionPara,
                        url: service.attributes.descriptionLinkUrl,
                        image: service.attributes.descriptionImageUrl,
                        name: service.attributes.descriptionTitle,
                    };
                });
            },
        },
    };
</script>
