<template>
    <section class="group relative h-[400px] overflow-hidden bg-cover bg-center bg-no-repeat lg:h-[571px]">
        <!-- :key="$store.state.nav.forceUpdateVideo" -->
        <!-- <div v-if="showOverlay" class="absolute h-full w-full bg-[url(/assets/img/review-video-image.webp)] bg-cover bg-center"></div> -->
        <video v-if="showOverlay" class="force-video-reload responsive-contact-us-section-video absolute h-full w-full object-cover xl:-mt-[10%] xl:h-auto" :style="videoHeight" autoplay loop muted playsinline>
            <source :src="videoThumbnailURL" type="video/mp4" />
        </video>

        <div v-if="showOverlay" class="absolute inset-0 z-[8] bg-[#1f3244]/[0.41]"></div>
        <div>
            <div v-if="showOverlay" class="container relative z-[9] px-10 py-10 pb-5 md:pb-10 lg:px-[97px] lg:pt-40 xl:px-4" :class="{ 'xl:pt-[116px]': lessPaddingTop, 'xl:pt-[250px]': !lessPaddingTop }">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="md:pr-2">
                        <p class="text-2xl font-bold -tracking-[0.09px] text-white sm:text-4xl lg:text-[40px] lg:leading-[56px]" v-html="title"></p>
                        <div class="mt-40 md:mt-[58px]">
                            <nuxt-link v-if="$helper.isInternalUrl(buttonURL)" :to="buttonURL" class="outline-btn w-full px-11 py-[14px] text-center text-lg font-semibold leading-[21px] md:w-auto">
                                {{ buttonTitle }}
                            </nuxt-link>

                            <a v-else :href="buttonURL" target="_blank" class="outline-btn w-full px-11 py-[14px] text-center text-lg font-semibold leading-[21px] md:w-auto">{{ buttonTitle }} </a>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="showOverlay ? 'hidden' : ''">
                <iframe
                    ref="youtubePlayer"
                    style="width: 100%"
                    :height="videoHeight"
                    :src="youtubeSrc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
                <!--
                <iframe
                    :src="iframeURL"
                    title="meeting-video"
                    allow="autoplay;fullscreen"
                    allowtransparency="true"
                    frameborder="0"
                    scrolling="no"
                    class="wistia_embed"
                    name="wistia_embed"
                    msallowfullscreen
                    width="100%"
                    :height="videoHeight"
                    image_resize="450"
                ></iframe>
                -->
            </div>
            <button v-if="showOverlay" class="absolute inset-x-0 top-1/2 z-10 mx-auto w-[113px] -translate-y-1/2 bg-primary/[0.71] px-11 py-5 group-hover:bg-primary" @click="play()">
                <icons-play />
            </button>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            lessPaddingTop: {
                type: Boolean,
                default: false,
            },
            buttonTitle: {
                type: String,
                default: 'Contact Us',
            },
            buttonURL: {
                type: String,
                default: '/contact-us',
            },
            videoURL: {
                type: String,
                default: 'https://fast.wistia.net/embed/iframe/2fj2578efk',
            },
            videoThumbnailURL: {
                type: String,
                default: 'https://videos.ctfassets.net/koyrlvjc3wvc/654wWfXJHIUtKBU5UXfRNF/f8b62c2d5ca30297b5437de136468c94/careers_video_01.mp4',
            },
            title: {
                type: String,
                default: 'Win grants from federal<br/> and state institutions',
            },
        },

        data() {
            return {
                playing: false,
                videoHeight: 571,
                youtubeSrc: 'https://www.youtube.com/embed/xhK2Zr5BXfA?si=TC7OuK5mL5SuIpZN', // Initial video source
            };
        },

        computed: {
            showOverlay() {
                return !this.playing;
            },

            iframeURL() {
                if (this.playing) {
                    return this.videoURL;
                } else {
                    return '';
                }
            },
        },

        mounted() {
            if (window.innerWidth <= 768) {
                this.videoHeight = 350;
            } else {
                this.videoHeight = 571;
            }
        },

        methods: {
            play() {
                this.playing = true;
                this.$nextTick(() => {
                    const youtubePlayer = this.$refs.youtubePlayer;

                    // Check if the iframe element exists
                    if (youtubePlayer) {
                        // Extract the video ID from the initial source
                        const videoId = this.youtubeSrc.split('/').pop().split('?')[0];

                        // Construct the new source with autoplay enabled
                        const autoplaySrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

                        // Update the iframe src attribute to trigger autoplay
                        youtubePlayer.setAttribute('src', autoplaySrc);
                    }
                });

                // Access the iframe element

                /*
                if (typeof this.videoURL === 'string') {
                    setTimeout(() => {
                        const video = window.Wistia.api(this.videoURL.slice(this.videoURL.indexOf('iframe/') + 1));
                        if (video) {
                            video.play();
                            video.bind('end', () => {
                                this.playing = false;
                                return video.unbind('end', () => {});
                            });
                        }
                    }, 250);
                }
                */
            },
        },
    };
</script>
