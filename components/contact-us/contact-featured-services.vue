<template>
    <div class="flex flex-col md:flex-row">
        <div class="w-full flex-none md:mx-auto lg:max-w-[332px] xl:max-w-[425px]">
            <div>
                <ul class="md:space-y-4">
                    <li
                        v-for="(service, index) in services"
                        :key="index"
                        class="py-4 -tracking-[0.04px] md:py-2.5 lg:text-[22px]"
                        :class="[serviceTitle === service.fields.title ? 'border-b border-[#1A9CEA] font-bold text-[#1A9CEA]' : 'border-b border-[#BFBFBF]/40']"
                    >
                        <div class="flex cursor-pointer -tracking-[0.04px]" @click="showDescription(service.fields.title, index)">
                            {{ service.fields.title }}
                            <icons-minus v-if="serviceTitle === service.fields.title" class="ml-auto mr-4 block lg:hidden" />
                            <icons-plus v-else class="ml-auto mr-4 block lg:hidden" />
                        </div>
                        <div v-if="serviceTitle === service.fields.title" class="block lg:hidden">
                            <div v-if="serviceDescription && isMobileView" :id="`service-${index}`">
                                <div class="bg-white p-5 shadow-[0_3px_6px_rgba(0,0,0,0.16)] lg:px-8 lg:pb-16 lg:pt-8">
                                    <img loading="lazy" v-if="serviceDescription.fields.descriptionMediaType === 'image'" :src="`${serviceDescription.fields.descriptionMedia.fields.file.url}`" class="h-full w-full object-cover" />
                                    <div
                                        v-else-if="serviceDescription.fields.videoThumbnailImage"
                                        ref="video"
                                        class="relative h-[250px] w-full bg-cover bg-center bg-no-repeat md:h-[400px]"
                                        :style="{ backgroundImage: `url(${serviceDescription.fields.videoThumbnailImage.fields.file.url})` }"
                                    >
                                        <iframe
                                            v-if="!showOverlay && serviceTitle === serviceDescription.fields.title"
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
                                        <button
                                            v-show="showOverlay"
                                            class="absolute inset-x-0 top-1/2 z-10 mx-auto w-[113px] -translate-y-1/2 bg-primary/[0.71] px-11 py-5 group-hover:bg-primary"
                                            @click="play(serviceDescription.fields.wistiaVideoId)"
                                        >
                                            <icons-play />
                                        </button>
                                    </div>
                                    <div class="pt-5 md:pt-8">
                                        <h4 v-if="serviceDescription.fields.descriptionTitle" class="text-xl text-[#2F2F2F] md:text-2xl lg:text-3xl">{{ serviceDescription.fields.descriptionTitle }}</h4>
                                        <p class="pt-5 text-sm text-[#4D4D4D]">
                                            {{ serviceDescription.fields.descriptionPara }}
                                        </p>
                                        <a href="javascript:;" aria-label="Consulting" class="block pt-6 font-semibold text-[#0DA1F1]"> {{ serviceDescription.fields.descriptionLink }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="serviceDescription && !isMobileView" class="hidden lg:block">
            <div class="bg-white p-5 shadow-[0_3px_6px_rgba(0,0,0,0.16)] md:px-8 md:pb-16 md:pt-8">
                <img loading="lazy" v-if="serviceDescription.fields.descriptionMediaType === 'image'" :src="`${serviceDescription.fields.descriptionMedia.fields.file.url}`" class="h-full w-full object-cover" />
                <div
                    v-else-if="serviceDescription.fields.videoThumbnailImage"
                    ref="video"
                    class="relative h-[505px] w-full bg-cover bg-center bg-no-repeat"
                    :style="{ backgroundImage: `url(${serviceDescription.fields.videoThumbnailImage.fields.file.url})` }"
                >
                    <iframe
                        v-if="!showOverlay && serviceTitle === serviceDescription.fields.title"
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
                    <button v-show="showOverlay" class="absolute inset-x-0 top-1/2 z-10 mx-auto w-[113px] -translate-y-1/2 bg-primary/[0.71] px-11 py-5 group-hover:bg-primary" @click="play(serviceDescription.fields.wistiaVideoId)">
                        <icons-play />
                    </button>
                </div>
                <div class="pt-5 md:pt-8">
                    <h4 v-if="serviceDescription.fields.descriptionTitle" class="text-xl -tracking-[-0.06px] text-[#2F2F2F] md:text-2xl lg:text-[32px]">{{ serviceDescription.fields.descriptionTitle }}</h4>
                    <p class="pt-5 text-sm leading-6 -tracking-[-0.03px] text-[#4D4D4D]">
                        {{ serviceDescription.fields.descriptionPara }}
                    </p>
                    <a href="javascript:;" class="block pt-6 text-[16px] font-semibold leading-[23px] text-[#0DA1F1]"> {{ serviceDescription.fields.descriptionLink }}</a>
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
                default: () => [
                    {
                        fields: {
                            id: 1,
                            title: 'Management Consulting',
                            descriptionTitle: 'Take your business to the next level',
                            descriptionPara:
                                'Our management consultants primarily engage companies as a long term trusted adviser. Our experts consultants assist with collecting information and data in order to make impactful strategic decisions.  We partner with  corporations and their leaders to discover and resolve some of their most critical business challenges. Our consultants enjoy what they do and really value their work.\n',
                            descriptionLink: 'Learn More',
                            descriptionMediaType: 'video',
                            videoThumbnailImage: {
                                fields: {
                                    file: {
                                        url: '//images.ctfassets.net/koyrlvjc3wvc/4JEk9Azdv4ElA58Sh2NXDq/b45db57e747877f1a4721da923e1d986/video-thumbnail.jpg',
                                    },
                                },
                            },
                            wistiaVideoId: 'o8z0yooeoq',
                        },
                    },
                ],
            },
        },

        data() {
            return {
                serviceTitle: 'Management Consulting',
                videoHeight: 505,
                playing: false,
                isMobileView: false,
                activeServiceIndex: null,
            };
        },

        computed: {
            serviceDescription() {
                return this.services.find((service) => service.fields.title === this.serviceTitle);
            },

            showOverlay() {
                return !this.playing;
            },

            iframeURL() {
                if (this.serviceDescription && this.serviceDescription.fields.title) {
                    return `https://fast.wistia.net/embed/iframe/${this.serviceDescription.fields.wistiaVideoId}`;
                } else {
                    return '';
                }
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
                this.videoHeight = 250;
                this.serviceTitle = '';
            } else if (window.innerWidth <= 768) {
                this.videoHeight = 400;
                this.serviceTitle = '';
            } else {
                this.serviceTitle = this.services[0].fields.title;
                this.videoHeight = 505;
            }

            this.isMobileView = !(window.innerWidth > 1023);
        },

        methods: {
            showDescription(title, index) {
                if (window.innerWidth < 768) {
                    this.serviceTitle = this.serviceTitle === title ? '' : title;
                    this.activeServiceIndex = index;
                } else {
                    this.serviceTitle = title;
                }
                if (this.playing) {
                    this.playing = false;
                }
            },

            play(videoId) {
                this.playing = true;
                setTimeout(() => {
                    const video = window.Wistia.api(videoId);
                    video.play();

                    video.bind('end', () => {
                        this.playing = false;
                        return video.unbind('end', () => {});
                    });
                }, 250);
            },
        },
    };
</script>
