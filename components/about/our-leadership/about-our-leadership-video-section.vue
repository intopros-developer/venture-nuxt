<template>
    <section class="group relative h-[400px] overflow-hidden bg-cover bg-center bg-no-repeat lg:h-[571px]">
        <video v-if="showOverlay" class="force-video-reload responsive-contact-us-section-video absolute h-full w-full object-cover xl:-mt-[10%] xl:h-auto" :style="videoHeight" autoplay loop muted playsinline>
            <source :src="`/videos/careers-video.mp4`" type="video/mp4" loading="lazy" />
        </video>

        <div v-if="showOverlay" class="absolute inset-0 z-[8] bg-[#1f3244]/[0.41]"></div>
        <div>
            <div v-if="showOverlay" class="container relative z-[9] px-10 py-10 pb-5 md:pb-10 lg:px-[97px] lg:pt-40 xl:px-4 xl:pt-[136px]">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <p class="text-2xl font-bold -tracking-[0.09px] text-white sm:text-4xl lg:text-[40px] lg:leading-[56px]">{{ value.description }}</p>
                        <div class="mt-36 sm:mt-40 md:mt-[58px]">
                            <nuxt-link to="/book-consult" class="outline-btn w-full px-11 py-[14px] text-center text-lg font-semibold leading-[21px] md:w-auto">{{ value.buttonTitle }}</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="!showOverlay">
                <iframe
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
                    image_resize="450"
                ></iframe>
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
            value: {
                type: Object,
                default: () => {
                    return {
                        buttonTitle: 'Book a Consultation',
                        description: 'Why is Venture Plans the leader of the full service consulting industry?',
                        wistiaVideoId: 'cg5d80l782',
                    };
                },
            },
        },

        data() {
            return {
                playing: false,
                videoHeight: 571,
            };
        },

        computed: {
            showOverlay() {
                return !this.playing;
            },

            iframeURL() {
                if (this.playing) {
                    return `https://fast.wistia.net/embed/iframe/${this.value.wistiaVideoId}`;
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
                setTimeout(() => {
                    const video = window.Wistia.api(this.value.wistiaVideoId);
                    video.play();
                    // this.playing = true;

                    video.bind('end', () => {
                        this.playing = false;
                        return video.unbind('end', () => {});
                    });
                }, 250);
            },
        },
    };
</script>
