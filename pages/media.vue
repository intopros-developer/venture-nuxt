<template>
    <div v-if="content">
        <section class="contact-heroform group relative overflow-hidden bg-cover bg-center bg-no-repeat">
            <video class="responsive-contact-us-section-video absolute h-auto w-full object-cover" style="min-height: 571px; height: 20vw" autoplay loop muted playsinline>
                <source :src="content.bannerImgUrl" type="video/mp4" />
            </video>
            <div class="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent"></div>
            <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]"></div>
            <div class="container relative z-10 px-10 pb-9 pt-[287px] md:bg-left md:px-4 lg:px-[97px] xl:px-4 xl:pb-20 xl:pt-[164px]">
                <div>
                    <p class="mb-5 border-l-[3px] border-primary pl-2.5 text-sm leading-3 text-[#FBFBFD] md:text-base md:leading-4">
                        {{ content.bannerSubtitle }}
                    </p>
                    <h1 class="mb-4 text-[28px] font-bold leading-8 text-white md:text-[40px] md:leading-[53px]">{{ content.bannerTitle }}</h1>
                    <p v-html="content.bannerDescription" class="w-full text-sm font-normal leading-5 text-[#FBFBFD] sm:max-w-[377px] md:max-w-[481px] md:text-base md:leading-[26px]"></p>
                </div>
            </div>
        </section>

        <!-- tabs-options -->
        <common-banner-tab :tabs="tabs" :is-show-save-btn="true" />

        <!-- overview -->
        <section class="pb-20 pt-14 md:pb-32">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-8 flex items-center justify-center gap-2.5 text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 id="aboutUs" class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section1Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <common-toggle-content :content="content.section1Paragraph" />
            </div>
        </section>

        <common-contact-us :videoThumbnailURL="content.video1ThumbnailUrl" :buttonTitle="content.video1ButtonText" :buttonURL="content.video1ButtonLink" :videoURL="content.video1Url" :title="content.video1Title" />

        <!-- media contacts -->
        <section class="pt-[91px]">
            <div class="container lg:px-[97px] xl:px-4">
                <div id="mediaContacts" class="mb-8 flex items-center justify-center gap-[33px] text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 class="inline-block text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section2Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <div class="mt-[71px] grid grid-cols-1 divide-y divide-[#d5d5d5] border border-[#d5d5d5] sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-x lg:divide-y-0">
                    <div v-for="(contact, i) in section2Data" :key="i" class="px-[30px] pb-10 pt-11 lg:pb-[150px]">
                        <p class="text-[21px] font-semibold text-[#202a36]">{{ contact.attributes.name }}</p>
                        <p class="line-clamp-2 min-h-[68px] pt-3 text-lg font-light text-[#202a36]">{{ contact.attributes.location }}</p>
                        <a :href="`mailto:${contact.attributes.email}`" class="block pt-[30px] text-lg text-[#202a36] underline duration-150 hover:text-primary">{{ contact.attributes.email }}</a>
                        <a :href="`tel:${contact.attributes.phoneNumber}`" class="block pt-2.5 text-lg text-[#202a36] duration-150 hover:text-primary">{{ contact.attributes.phoneNumber }}</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- follow-us -->
        <section class="pb-10 pt-20 md:pt-[166px] lg:pb-0">
            <div class="container lg:px-[97px] xl:px-4">
                <div class="grid grid-cols-1 space-y-20 md:grid-cols-2 md:gap-5 md:space-y-0 lg:gap-24 xl:gap-36">
                    <div>
                        <h3 class="text-[28px] font-bold leading-[60px] text-[#030303]" v-html="content.section3Column1Title"></h3>
                        <div class="pt-6 lg:pt-16">
                            <ul class="divide-y divide-[#d5d5d5] border-b border-t border-[#d5d5d5]">
                                <li class="py-4" v-for="socialMedia in section3Column1Data">
                                    <a :href="socialMedia.attributes.url" target="_blank" class="flex items-center justify-between text-lg text-[#202a36] hover:text-primary"
                                        ><span>{{ socialMedia.attributes.socialMediaName }}</span>
                                        <div class="flex w-7 justify-center" v-html="getSocialMediaSVG(socialMedia.attributes.socialMediaName)"></div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-[28px] font-bold leading-[60px] text-[#030303]" v-html="content.section3Column2Title"></h3>
                        <div class="pt-6 lg:pt-16">
                            <ul class="divide-y divide-[#d5d5d5] border-b border-t border-[#d5d5d5]">
                                <li v-for="data in section3Column2Data" class="flex items-center justify-between py-4 text-lg text-[#202a36] hover:text-primary">
                                    <a target="_blank" :href="data.attributes.subscribeToUrl">{{ data.attributes.subscribeTo }}</a> <icons-right-menu-arrow class="text-[#00ADFF]" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FEATURED MEDIA MENTIONS -->
        <section class="py-10 md:py-16 xl:pb-0 xl:pt-[243px]">
            <div class="container lg:px-[97px] xl:px-4">
                <div id="featuredMediaMentions" class="flex items-center justify-center gap-[33px] text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 class="inline-block text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section4Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <div v-for="(media, index) in section4Data" :key="media.id" v-if="(!moreMediaMentions && index < 3) || moreMediaMentions" class="grid grid-cols-1 items-center space-y-4 pt-[67px] lg:grid-cols-3 lg:gap-y-14 lg:space-y-0">
                    <div>
                        <div>
                            <p class="text-sm font-semibold text-[#00a1f1]">{{ media.attributes.title }}</p>
                            <p class="inline-block text-sm font-semibold text-[#646464] lg:block">{{ media.attributes.mediaType }} | {{ media.attributes.date }}</p>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="flex items-start gap-[17px]">
                            <div class="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-white p-[7px] shadow-[0px_1px_8px_rgba(0,0,0,0.2)]">
                                <img loading="lazy" :src="media.attributes.iconUrl" />
                            </div>
                            <div class="max-w-2xl pt-1 lg:pt-0">
                                <h4 class="text-xl font-semibold -tracking-[0.05px] text-[#030303] lg:text-[25px]">{{ media.attributes.title }}</h4>
                                <p class="text-base -tracking-[0.03px] text-[#030303]">{{ media.attributes.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-7 text-center md:pt-20">
                    <button type="button" class="outline-btn border-[#000]/[0.08] px-11 py-[18px] text-xs uppercase text-[#00a1f1]" @click="moreMediaMentions = !moreMediaMentions">
                        {{ moreMediaMentions ? 'Less media mentions' : 'More media mentions' }}
                    </button>
                </div>
            </div>
        </section>

        <!-- press Release -->
        <section class="py-10 md:py-16 xl:pb-[176px] xl:pt-[108px]">
            <div class="container lg:px-[97px] xl:px-4">
                <div id="pressRelease" class="flex items-center justify-center gap-[33px] text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 class="inline-block text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section5Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <div v-for="(release, index) in section5Data" :key="release.id" v-if="(!morePressRelease && index < 3) || morePressRelease" class="grid grid-cols-1 items-center space-y-4 pt-[67px] lg:grid-cols-3 lg:gap-y-14 lg:space-y-0">
                    <div>
                        <div>
                            <p class="text-sm font-semibold text-[#00a1f1]">{{ release.attributes.title }}</p>
                            <p class="inline-block text-sm font-semibold text-[#646464] lg:block">{{ release.attributes.type }} | {{ release.attributes.date }}</p>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="flex items-start gap-[17px]">
                            <div class="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-white p-[7px] shadow-[0px_1px_8px_rgba(0,0,0,0.2)]">
                                <img loading="lazy" :src="release.attributes.iconUrl" />
                            </div>
                            <div class="max-w-2xl pt-1 lg:pt-0">
                                <h4 class="text-xl font-semibold -tracking-[0.05px] text-[#030303] lg:text-[25px]">{{ release.attributes.title }}</h4>
                                <p class="text-base -tracking-[0.03px] text-[#030303]">{{ release.attributes.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-7 text-center md:pt-20">
                    <button type="button" class="outline-btn border-[#000]/[0.08] px-11 py-[18px] text-xs uppercase text-[#00a1f1]" @click="morePressRelease = !morePressRelease">
                        {{ morePressRelease ? 'Less press releases' : 'More press releases' }}
                    </button>
                </div>
            </div>
        </section>

        <common-tell-more-about-projects :featuredCompanies="section6Logos" :tellUsMoreData="section6Data" :tellUsMoreTitle="content.CTA1Title" :tellUseMoreSubtitle="content.CTA1Description" :imageUrl="content.CTA1ImgUrl" />

        <!-- Our Client -->
        <common-client-words :title="content.section7Title" :description="content.section7Description" :testimonials="section7Data" />

        <common-interested-service
            :backgroundImage="content.section8ImgUrl"
            :subtitle="content.section8Subtitle"
            :title="content.section8Title"
            :description="content.section8Description"
            :buttonLink="content.section8ButtonLink"
            :buttonTitle="content.section8ButtonText"
        />

        <!-- Trending -->
        <section class="py-10 md:py-16 xl:pb-[52px] xl:pt-[129px]">
            <div class="container lg:px-[97px] xl:px-4">
                <div id="ventureInsight" class="flex items-center justify-center gap-[33px] text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 class="inline-block text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section9Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <div class="grid grid-cols-1 gap-5 pt-24 md:grid-cols-2 lg:grid-cols-3 xl:gap-[45px] xl:px-[93px]">
                    <div v-for="(trend, i) in section9Data" :key="i">
                        <div class="flex items-center gap-3 xl:gap-[52px]">
                            <div>
                                <nuxt-link to="/insights">
                                    <img loading="lazy" :src="trend.attributes.imgUrl" alt="" class="h-28 w-28 rounded-[5px] object-cover shadow-[0_3px_6px_rgba(0,0,0,0.44)] xl:h-[127px] xl:w-[127px]" />
                                </nuxt-link>
                            </div>
                            <div>
                                <p class="text-xl font-semibold text-[#030303]">{{ trend.attributes.title }}</p>
                                <p class="text-sm font-semibold text-[#646464]">{{ trend.attributes.numberOfInsights }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- latest insights -->
        <section class="pt-10 xl:pt-14">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-[59px] flex items-center justify-center gap-[33px] text-center xl:mb-[68px]">
                    <div class="hidden h-px w-full bg-[#D5D5D5] sm:block"></div>
                    <h2 class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section10Title"></h2>
                    <div class="hidden h-px w-full bg-[#D5D5D5] sm:block"></div>
                </div>
                <div class="relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-4 lg:gap-y-28">
                    <div
                        v-for="(insight, i) in section10Data"
                        :key="i"
                        class="mb-8 border-[#d5d5d5] sm:border-0 md:px-7 lg:border-r"
                        :class="{ '!border-0 lg:col-span-2': i === 2, '!border-0': i === 6, 'md:border-l lg:border-0': i % 2 !== 0 }"
                    >
                        <div class="h-[125px] w-full shadow-[0px_3px_6px_rgba(0,0,0,0.6)] xl:h-[173px]">
                            <img loading="lazy" :src="insight.attributes.imgUrl" class="h-full w-full object-cover" />
                        </div>
                        <div class="flex h-[calc(100%-125px)] flex-col justify-between py-3 xl:h-[calc(100%-173px)] xl:py-[34px]">
                            <div>
                                <p class="mb-3 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]">
                                    {{ insight.attributes.Insightsource }}
                                </p>

                                <nuxt-link :to="`/insights/${insight.attributes.singleInsightPageSlug}`" class="text-[21px] font-semibold leading-7 text-[#202A36]">{{ insight.attributes.title }}</nuxt-link>
                                <p class="mb-5 mt-3 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base">
                                    {{ insight.attributes.paragraph }}
                                </p>
                            </div>
                            <div class="relative flex items-center justify-between">
                                <a href="javascript:;" class="inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]">
                                    {{ insight.attributes.insightType }} | {{ $helper.formatInsightPublishDate(insight.attributes.date) }}
                                </a>
                                <button type="button">
                                    <common-share :isShowSaveBtn="true" :customLink="`/insights/${insight.attributes.singleInsightPageSlug}`" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <common-work-at-the-best-place :imgUrl="content.CTA2ImgUrl" :title="content.CTA2Title" :description="content.CTA2Description" :buttonTitle="content.CTA2ButtonText" :buttonUrl="content.CTA2ButtonLink" />

        <common-readytotalk :serviceOptions="readyToTalkForm.services.data" :aboutParagraph="readyToTalkForm.aboutParagraph" :title="readyToTalkForm.title" :talkInTitle="readyToTalkForm.talkInTitle" :imgUrl="readyToTalkForm.imgUrl" />

        <common-faq id="faq" :title="content.section11Title" :description="content.section11Description" :faqs="section11Data" />

        <common-brand-logo :logos="logoSlider" />
    </div>
</template>

<script>
    export default {
        async asyncData(context) {
            try {
                const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/media-page?populate=deep`);
                return {
                    content: context.$helper.parseData(data.data),
                };
            } catch {}
        },

        data() {
            return {
                videoHeight: 571,
                isShowReadMore: false,
                moreMediaMentions: false,
                morePressRelease: false,
                tabs: [
                    {
                        id: 'overview',
                        title: 'Overview',
                    },
                    {
                        id: 'mediaContacts',
                        title: 'Media Contacts',
                    },
                    {
                        id: 'featuredMediaMentions',
                        title: 'Featured Media Mentions',
                    },
                    {
                        id: 'pressRelease',
                        title: 'Press Release & News',
                    },
                    {
                        id: 'ventureInsight',
                        title: 'Insights',
                    },
                    {
                        id: 'readyToTalk',
                        title: 'Ready To Talk',
                    },
                    {
                        id: 'faq',
                        title: 'FAQ',
                    },
                ],
            };
        },

        methods: {
            getSocialMediaSVG(socialMediaName) {
                if (typeof socialMediaName !== 'string') return;

                if (socialMediaName?.toLowerCase() === 'twitter') {
                    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" class="w-5 text-[#00ADFF]"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';
                } else if (socialMediaName?.toLowerCase() === 'facebook') {
                    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="" class="w-3 text-[#0f69b5]"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>';
                } else if (socialMediaName?.toLowerCase() === 'instagram') {
                    return '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><defs><linearGradient id="ugyma" x1="22.05" x2="5.74" y1="6.12" y2="20.04" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#cc9518"></stop> <stop offset=".71" stop-color="#a82d54"></stop> <stop offset="1" stop-color="#822da8"></stop></linearGradient></defs> <g><g clip-path="url(#clip-a17265f8-c5ec-488e-a758-e6facbdc1b59)"><path fill="url(#ugyma)" d="M19.236 12.997a6.255 6.255 0 1 1-12.51 0 6.255 6.255 0 0 1 12.51 0zm-6.255 4.06a4.06 4.06 0 1 0 0-8.12 4.06 4.06 0 0 0 0 8.12zm6.502-9.101a1.462 1.462 0 1 1 0-2.924 1.462 1.462 0 0 1 0 2.924zM12.68.816c-3.034 0-3.462.016-4.721.073-1.297.059-2.182.265-2.957.566a5.968 5.968 0 0 0-2.157 1.406A5.96 5.96 0 0 0 1.44 5.018c-.3.774-.506 1.66-.565 2.957C.814 9.273.8 9.689.8 12.997c0 3.308.013 3.723.073 5.023.059 1.296.264 2.181.565 2.956a5.97 5.97 0 0 0 1.406 2.158 5.956 5.956 0 0 0 2.157 1.404c.775.3 1.66.507 2.957.567 1.3.06 1.714.073 5.022.073 3.309 0 3.723-.014 5.022-.073 1.297-.06 2.183-.266 2.958-.567a5.956 5.956 0 0 0 2.157-1.404 5.978 5.978 0 0 0 1.405-2.158c.301-.775.507-1.66.566-2.956.057-1.26.072-1.688.073-4.721v-.604c0-3.033-.016-3.462-.073-4.72-.06-1.297-.265-2.183-.566-2.957a5.968 5.968 0 0 0-1.405-2.157 5.968 5.968 0 0 0-2.157-1.406C20.186 1.154 19.3.948 18.003.89c-1.258-.057-1.687-.073-4.72-.074zm.301 2.194c3.253 0 3.638.013 4.922.072 1.188.054 1.833.252 2.263.419.568.22.974.485 1.4.912.426.425.69.83.912 1.4.166.43.364 1.075.418 2.262.06 1.285.072 1.67.072 4.922s-.013 3.638-.072 4.922c-.054 1.188-.252 1.833-.418 2.262a3.8 3.8 0 0 1-.912 1.4 3.77 3.77 0 0 1-1.4.911c-.43.168-1.075.366-2.263.42-1.284.059-1.669.071-4.922.071-3.253 0-3.638-.012-4.922-.07-1.188-.055-1.833-.253-2.262-.42a3.77 3.77 0 0 1-1.4-.911 3.78 3.78 0 0 1-.912-1.401c-.167-.43-.366-1.074-.42-2.262-.057-1.284-.07-1.67-.07-4.922 0-3.253.013-3.637.07-4.922.054-1.187.253-1.833.42-2.263.221-.568.485-.974.912-1.4.426-.426.832-.69 1.4-.911.429-.167 1.074-.365 2.262-.42 1.284-.058 1.67-.07 4.922-.07"></path></g></g></svg>';
                } else if (socialMediaName?.toLowerCase() === 'tiktok') {
                    return '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 2859 3333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" class="text-[#000]"><path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"></path></svg>';
                } else if (socialMediaName?.toLowerCase() === 'youtube') {
                    return '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18"><g><g><path fill="#e33122" d="M10.936 14.893V3.631l8.447 5.631zM22.761.815H5.868C3.081.815.8 2.715.8 5.04v8.446c0 2.323 2.28 4.224 5.068 4.224h16.893c2.788 0 5.068-1.9 5.068-4.224V5.04c0-2.323-2.28-4.224-5.068-4.224z"></path></g></g></svg>';
                } else if (socialMediaName?.toLowerCase() === 'linkedin') {
                    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="" class="w-5 text-[#0f69b5]"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>';
                } else return '';
            },
        },

        computed: {
            section2Data() {
                return this.content?.section2Component?.data || [];
            },
            section3Column1Data() {
                return this.content?.section3Column1Component?.data || [];
            },
            section3Column2Data() {
                return this.content?.section3Column2Component?.data || [];
            },
            section4Data() {
                return this.content?.section4Component?.data || [];
            },
            section5Data() {
                return this.content?.section5Component?.data || [];
            },
            section6Data() {
                return this.content?.section6Component?.data || [];
            },
            section6Logos() {
                return this.content?.section6LogoUrls?.data || [];
            },
            section7Data() {
                return this.content?.section7Component?.data || [];
            },
            section9Data() {
                return this.content?.section9Component?.data || [];
            },
            section10Data() {
                return this.content?.section10Component?.data || [];
            },
            section11Data() {
                return this.content?.section11Component?.data || [];
            },
            readyToTalkForm() {
                return this.content?.readyToTalkForm?.data?.attributes || { services: { data: [] } };
            },
            logoSlider() {
                return this.content?.logoSlider?.data?.attributes?.logoUrls || [];
            },
        },

        head() {
            return {
                title: this.content?.metaFields[0]?.title,
                link: [
                    {
                        rel: 'canonical',
                        href: this.content?.metaFields[0]?.canonicalUrl
                            ? (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.content.metaFields[0].canonicalUrl
                            : (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.$route.path,
                    },
                ],
                meta: [
                    {
                        hid: 'og:title',
                        property: 'og:title',
                        content: this.content?.metaFields[0]?.title,
                    },
                    {
                        hid: 'og:image',
                        property: 'og:image',
                        content: this.content?.metaFields[0]?.socialImgUrl,
                    },
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: this.content?.metaFields[0]?.description,
                    },
                    {
                        hid: 'description',
                        property: 'description',
                        name: 'description',
                        content: this.content?.metaFields[0]?.description,
                    },
                    {
                        hid: 'og:image:secure_url',
                        property: 'og:image:secure_url',
                        content: this.content?.metaFields[0]?.socialImgUrl,
                    },
                    {
                        hid: 'twitter:description',
                        property: 'twitter:description',
                        content: this.content?.metaFields[0]?.description,
                    },
                    {
                        hid: 'twitter:title',
                        property: 'twitter:title',
                        content: this.content?.metaFields[0]?.title,
                    },
                    {
                        hid: 'twitter:image',
                        property: 'twitter:image',
                        content: this.content?.metaFields[0]?.socialImgUrl,
                    },
                    {
                        hid: 'keywords',
                        property: 'keywords',
                        name: 'keywords',
                        content: this.content?.metaFields[0]?.keywords,
                    },
                ],
            };
        },

        mounted() {
            if (window.innerWidth <= 768) {
                this.videoHeight = 350;
            } else {
                this.videoHeight = 571;
            }
        },
    };
</script>
