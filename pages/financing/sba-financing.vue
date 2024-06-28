<template>
    <div v-if="content">
        <!-- Hero form -->
        <section class="contact-heroform group relative overflow-hidden bg-cover bg-center bg-no-repeat">
            <picture :style="videoHeight" class="responsive-contact-us-section-video absolute h-full w-full bg-[#0B0B0B] object-cover pt-[160px] lg:pt-0">
                <source media="(min-width:1024px)" :srcset="content.bannerImageUrl" />
                <img class="h-full w-full object-cover" :src="content.bannerVideoUrl" alt="Flowers" />
            </picture>
            <div>
                <div class="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-r from-[#2b3746] opacity-10"></div>
                <div class="relative z-10 mx-4 px-2 pt-0 md:px-4 lg:mx-20 lg:px-4 lg:pt-[65px] lg:pb-[146px]">
                    <div>
                        <div class="grid max-w-full grid-cols-12 items-end justify-between gap-4 space-y-4 lg:max-w-[75%]">
                            <div class="col-span-12 pt-12 text-white lg:col-span-8 lg:text-black">
                                <p class="mb-[17px] pl-1.5 text-2xl font-bold leading-[21px] text-primary">
                                    {{ content.bannerSubtitle }}
                                </p>
                                <p class="text-4xl font-black uppercase leading-[30px] text-white lg:text-black xl:text-4xl xl:text-[36px] xl:leading-9">
                                    {{ content.bannerTitle }}
                                </p>
                                <p class="mt-[22px] w-full text-sm leading-5 text-white sm:max-w-[420px] md:text-2xl md:leading-[26px] lg:text-black">
                                    {{ content.bannerDescription }}
                                </p>
                                <ul class="mb-[2rem] flex flex-wrap items-start gap-y-3 pt-8 text-white sm:gap-4 md:max-w-[580px] lg:mb-[7rem] lg:grid lg:grid-cols-2 lg:text-black xl:flex">
                                    <li v-for="data in bannerData" class="w-1/2 grow text-center text-3xl font-bold sm:w-auto md:text-[45px] md:leading-[50px]">
                                        {{ data.attributes.sectionDescription }} <span class="block text-[15px] font-normal">{{ data.attributes.sectionName }}</span>
                                    </li>
                                </ul>
                                <div>
                                    <a :href="content.bannerButtonUrl" class="outline-btn w-full border-white py-[14px] px-11 text-center text-xl font-semibold leading-[21px] text-white md:w-auto lg:border-black lg:text-black">
                                        {{ content.bannerButtonText }}
                                    </a>
                                </div>
                            </div>
                            <form id="contact-us-hero-form" action="" class="col-span-12 flex flex-col gap-6 pb-7 pt-[190px] lg:col-span-4 lg:pb-0 lg:pt-0" @submit.prevent="onSubmit">
                                <div class="form-input-group">
                                    <input
                                        v-model="$v.params.full_name.$model"
                                        type="text"
                                        placeholder="Full Name"
                                        name="full_name"
                                        autocomplete="on"
                                        class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                        :class="{ error: $v.params.full_name.$error }"
                                    />
                                    <!-- <div v-if="$v.params.full_name.$error">
                                    <p v-if="!$v.params.full_name.required">{{ $helper.requiredMessage('Full Name') }}</p>
                                    <p v-else-if="!$v.params.full_name.alphaNumericSpace">{{ $helper.alphaNumSpaceMessage('Full Name') }}</p>
                                </div> -->
                                </div>

                                <div class="form-input-group">
                                    <input
                                        v-model="$v.params.phone.$model"
                                        v-mask="$mask.phoneMask"
                                        type="text"
                                        name="phone"
                                        autocomplete="on"
                                        placeholder="Phone Number"
                                        class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                        :class="{ error: $v.params.phone.$error }"
                                    />
                                    <!-- <div v-if="$v.params.phone.$error">
                                    <p v-if="!$v.params.phone.required">{{ $helper.requiredMessage('Phone Number') }}</p>
                                </div> -->
                                </div>

                                <div class="form-input-group">
                                    <input
                                        v-model="$v.params.email.$model"
                                        type="text"
                                        placeholder="Your Email Address"
                                        name="email"
                                        autocomplete="on"
                                        class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                        :class="{ error: $v.params.email.$error }"
                                        @input="$v.params.email.$model = $event.target.value.trim()"
                                    />
                                    <!-- <div v-if="$v.params.email.$error">
                                    <p v-if="!$v.params.email.required">{{ $helper.requiredMessage('Email') }}</p>
                                    <p v-else-if="!$v.params.email.email">{{ $helper.emailMessage() }}</p>
                                </div> -->
                                </div>

                                <div v-click-outside="closeSearch" class="group relative text-left">
                                    <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right">
                                        <div role="none">
                                            <div
                                                class="inline-flex w-full flex-1 items-center rounded-lg border border-white p-[18px] pr-10 text-base font-bold leading-5 text-white duration-200 hover:border-primary hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-offset-0"
                                                :class="{
                                                    'border-[#f9ecea] text-danger hover:text-white': $v.params.inquiry_reason.$error,
                                                    'rounded-b-none !border-primary bg-primary ': showService,
                                                    'border-none bg-primary': searchResult !== 'Reason for inquiry',
                                                }"
                                                @click="openSearch()"
                                            >
                                                {{ searchResult }}
                                                <icons-selection-arrow class="absolute right-[20px]" :class="{ 'rotate-180': showService, 'text-danger': $v.params.inquiry_reason.$error }" />
                                            </div>

                                            <Transition name="slide-fade">
                                                <multiselect
                                                    v-show="showService"
                                                    ref="multiselect"
                                                    v-model="params.inquiry_reason"
                                                    :max-height="350"
                                                    :option-height="45"
                                                    :options="inquiryReasonOptions.map((item) => item.attributes.inquiryReason)"
                                                    :show-no-results="false"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    placeholder="Search"
                                                    class="custom-multiselect default-open-multiselect !absolute z-50 w-full whitespace-normal rounded rounded-t-none bg-white py-3 text-xs leading-[15px] text-[#586376] focus:outline-none xl:py-[15px] xl:text-sm xl:leading-[21px]"
                                                    @search-change="searchChange"
                                                    @select="onSelect"
                                                >
                                                    <template slot="caret">
                                                        <button type="submit" class="pointer-events-none absolute right-0 top-0 mr-4 mt-4 xl:mt-[18px]">
                                                            <icons-search class="h-3 w-3 fill-current text-[#586376] xl:h-4 xl:w-4" />
                                                        </button>
                                                    </template>
                                                    <template slot="clear">
                                                        <button v-if="isClearSearch" type="button" class="absolute right-0 top-0 mr-11 mt-4 xl:mt-[18px]" @click.stop="params.inquiry_reason = ''">
                                                            <icons-close-time class="h-3 w-3 fill-current text-black xl:h-4 xl:w-4" />
                                                        </button>
                                                    </template>
                                                </multiselect>
                                            </Transition>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <recaptcha id="recaptcha1" ref="recaptcha1" @success="captchaError = false" @error="captchaError = true" />
                                    <div v-if="captchaError" class="captcha-error">Please verify reCaptcha.</div>
                                </div>
                                <div class="">
                                    <button type="submit" class="btn ml-auto mr-0 !w-auto !max-w-max px-16 py-4 uppercase hover:bg-primary-700 xl:px-20 xl:py-5">{{ $t('submit') }}</button>
                                </div>
                                <div v-if="isSubmitted" class="mt-5 flex justify-center gap-3">
                                    <icons-check-circle class="relative top-[2px] h-6 w-6 text-green" />
                                    <p class="text-xl font-extrabold leading-[25px] text-white [&>span]:border-b-[2px] [&>span]:border-green [&>span]:text-green">
                                        <span>{{ $t('congratulations') }}</span> {{ $t('your_form_has_been_submitted') }}
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- tabs-options -->
        <common-banner-tab :tabs="tabs" />

        <section id="overview" class="pt-32">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-8 flex items-center justify-center gap-2.5 text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 id="aboutUs" class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section2Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <common-toggle-content :content="content.section2Description" />
            </div>
        </section>

        <common-dynamic-questionnaire :data="questionnaires"></common-dynamic-questionnaire>

        <!-- About -->

        <common-contact-us :videoThumbnailURL="content.video1ThumbnailUrl" :buttonTitle="content.video1ButtonText" :buttonURL="content.video1ButtonLink" :videoURL="content.video1Url" :title="content.video1Title" />

        <section id="getApproval" class="bg-white pt-32 pb-20">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-8 flex items-center justify-center gap-2.5 text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 id="driveForResults" class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.sectionNewTitle"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <common-toggle-content :show-blur="false" :show-all="true" read-more-class="hidden" :content="content.SectionNewDescription" />
            </div>
            <div class="pt-[76px] text-center"><a href="/book-consult" class="b-btn text-xs uppercase lg:max-w-[322px] lg:py-6" data-v-77418fce="">Contact us</a></div>
        </section>

        <!-- Start portfolio -->
        <section class="py-16 md:pb-[101px] md:pt-20 xl:pt-[92px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="grid grid-cols-1">
                    <div id="ourPortfolio">
                        <h5 class="mb-4 text-[23px] uppercase text-[#030303]">{{ content.section3Subtitle }}</h5>
                        <h5 class="text-[26px] font-bold uppercase leading-[36px] text-[#030303]">{{ content.section3Title }}</h5>
                        <p class="pt-[27px] text-xs font-bold uppercase leading-9 tracking-[1.2px] text-[#030303]">{{ content.section3Description }}</p>
                    </div>
                </div>
                <div class="items-start gap-6 pt-[27px] md:flex">
                    <div class="max-w-[275px] flex-1">
                        <ul>
                            <li
                                v-for="(category, i) in section3Data"
                                :key="i"
                                class="rounded-md text-[#707070] hover:!border-primary hover:bg-[#eaf7ff] hover:text-primary"
                                :class="{ 'font-bold !text-primary': activeCategoryData.id == category.id }"
                                @click="activeCategoryData = category"
                            >
                                <a href="javascript:;" class="block rounded-md border border-transparent px-[11px] py-1 text-lg hover:border-primary">{{ category.attributes.title }}</a>
                            </li>
                        </ul>
                    </div>

                    <!--                    <div class="mt-4 flex-1 md:mt-0">-->
                    <!--                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-[10px] lg:grid-cols-3">-->
                    <!--                            <div v-for="(item) in activeCategorySampleData"-->
                    <!--                                 class="flex cursor-pointer flex-col justify-between rounded-2xl border border-[#dfdfdf] px-10 pt-[18px] pb-[9px] text-center duration-200 hover:shadow-[0px_1px_8px_rgba(0,0,0,0.12)]"-->
                    <!--                                 @click="$refs.previewModal.open(), activeProductData = item.attributes">-->
                    <!--                                <img loading="lazy" :src="item.attributes.thumbnailImgUrl || '/assets/img/indus_market_report_02.png'"-->
                    <!--                                     class="mx-auto" alt="" />-->
                    <!--                                <div class="pt-[5px]">-->
                    <!--                                    <button type="button" class="text-[15px] font-semibold leading-[22px] text-primary">-->
                    <!--                                        Preview-->
                    <!--                                        <icons-arrow-right-thin class="relative -mt-[3px] inline-block" />-->
                    <!--                                    </button>-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->

                    <common-category-slider :active-category-sample-data="activeCategorySampleData" @preview="previewLatestWork" />
                </div>
            </div>
        </section>

        <section id="typesOfSBA" class="bg-white pt-32 pb-20">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-8 flex items-center justify-center gap-2.5 text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 id="driveForResults" class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section6Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <common-toggle-content :show-blur="false" :show-all="true" read-more-class="hidden" :content="content.section6Description" />
            </div>
        </section>

        <home-sector-excelled :title="content.section12Title" :description="content.section12Description" :data="section12Data" />

        <div class="container mb-16 mt-16 px-10 md:mt-[110px] md:px-4 lg:px-[97px] xl:px-4">
            <div class="mb-10 flex items-center justify-center gap-[33px] text-center">
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                <h2 id="learnAboutOurPlans" class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section5Title"></h2>
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
            </div>
            <common-featured-services :services="section5Data" />
        </div>

        <!-- Buy your business plan today -->
        <home-private-placement
            :featuredCompanies="section4Data"
            :featuredInText="content.section4Title"
            :description="content.CTA1Description"
            :title="content.CTA1Title"
            :buttonText="content.CTA1ButtonText"
            :buttonLink="content.CTA1ButtonLink"
        />

        <section class="py-10 lg:pb-[198px] lg:pt-[93px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-4 flex items-center justify-center gap-[33px] text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 id="ourProcess" class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section9Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <div class="mx-auto max-w-lg space-y-5 text-center text-sm font-medium leading-6 -tracking-[0.03px] text-[#586376] xl:max-w-[732px] xl:text-xl xl:leading-9 xl:-tracking-[0.04px]">
                    <p>{{ content.section9Description }}</p>
                </div>
                <div class="mt-10 space-y-8 md:mt-[70px] md:space-y-14 xl:space-y-28">
                    <div v-for="(process, i) in section9Data" :key="i" class="grid grid-cols-1 items-start justify-between gap-10 md:grid-cols-2 xl:gap-20">
                        <div class="order-2 mb-10 md:mb-0" :class="{ 'md:!order-1': i % 2 !== 0 }">
                            <img loading="lazy" :src="process.attributes.imgUrl" :alt="process.attributes.title" class="mx-auto" :class="{ ' h-[201px]': i === 0, ' h-[253px]': i === 1, ' h-[199px]': i === 2 }" />
                        </div>
                        <div :class="{ 'md:!order-2': i % 2 !== 0 }">
                            <div class="mb-3 flex gap-5 xl:gap-7">
                                <span class="h-12 w-12 flex-none rounded-full bg-primary text-center text-2xl font-bold leading-[48px] text-white xl:h-[54px] xl:w-[54px] xl:leading-[54px]">{{ i + 1 }}</span>
                                <div class="max-w-[510px] flex-1">
                                    <h3 class="mb-3 mt-3 text-xl font-bold leading-7 text-[#202a36] xl:mb-6 xl:text-[21px]">
                                        {{ process.attributes.title }}
                                    </h3>
                                    <common-toggle-content
                                        content-class="overflow-hidden text-sm font-medium text-[#353535] xl:text-lg xl:leading-9"
                                        :show-blur="false"
                                        :content="process.attributes.description"
                                        read-more-class="w-full items-center justify-start"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <common-client-words :title="content.section11Title" :description="content.section11Description" :testimonials="section11Data" />
        </section>

        <section id="readyToTalk" class="py-10">
            <common-tell-more-about-projects :featuredCompanies="section4Data" :tellUsMoreData="section13Data" :tellUsMoreTitle="content.section13Title" :tellUseMoreSubtitle="content.section13Subtitle" :imageUrl="content.section13ImgUrl" />
        </section>

        <div>
            <common-our-team class="pb-10 md:!pb-0" :title="content.section14Title" :description="content.section14Description" :teams="section14Data" />
        </div>
        <!-- FAQ -->
        <common-faq :title="content.section15Title" :description="content.section15Description" :faqs="section15Data" />

        <!-- Brand logo -->
        <common-brand-logo :logos="logoSliders" />

        <!-- Ready To Talk -->
        <common-readytotalk :imgUrl="readyToTalkForm.imgUrl" :serviceOptions="readyToTalkForm.services.data" :aboutParagraph="readyToTalkForm.aboutParagraph" :title="readyToTalkForm.title" :talkInTitle="readyToTalkForm.talkInTitle" />

        <!-- Featured Services 
        

        <section class="bg-white py-16 md:pb-[110px] md:pt-10">
            <div class="container">
                <div class="grid grid-cols-1">
                    <div v-html="content.section7Title"></div>
                    <div class="py-10">
                        <img loading="lazy" :src="content.section7ImgUrl" class="mx-auto" alt="" />
                    </div>
                    <div class="text-center">
                        <h4 class="text-2xl font-medium uppercase text-[#202a36]">{{ content.section7Subtitle }}</h4>
                        <p class="mt-5 text-[17px] text-[#202a36]">{{ content.section7Description }}</p>
                    </div>
                    <div class="pt-[76px] text-center">
                        <nuxt-link v-if="$helper.isInternalUrl(content.section7ButtonLink)" :to="content.section7ButtonLink" class="b-btn text-xs uppercase lg:max-w-[322px] lg:py-6">{{ content.section7ButtonText }}</nuxt-link>
                        <a target="_blank" :href="content.section7ButtonLink" v-else :to="content.section7ButtonLink" class="b-btn text-xs uppercase lg:max-w-[322px] lg:py-6">{{ content.section7ButtonText }}</a>
                    </div>
                </div>
            </div>
        </section>

    -->

        <!-- our-team -->

        <common-modal ref="previewModal" class="" width="1440" background="bg-[#fafafa]">
            <div>
                <button type="button" class="absolute right-4 top-4 md:right-8 md:top-8" @click="$refs.previewModal.close()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                        <g>
                            <g>
                                <g>
                                    <path d="M.75 17a.729.729 0 0 1-.513-1.242L14.802 1.193a.728.728 0 1 1 1.03 1.03L1.269 16.79a.728.728 0 0 1-.517.21z" />
                                </g>
                                <g>
                                    <path d="M15.343 17a.73.73 0 0 1-.515-.216L.214 2.171a.73.73 0 1 1 1.034-1.033L15.862 15.75a.731.731 0 0 1-.52 1.25z" />
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
                <div>
                    <ul class="mb-8 flex flex-col gap-4 text-base text-[#6c6c6c] md:flex-row md:gap-16">
                        <li>
                            <span v-if="activeProductData.isBusinessPlan" class="block text-xs font-bold text-black"> Client </span>
                            <span v-else class="block text-xs font-bold text-black"> Type </span>
                            {{ activeProductData.client }}
                        </li>
                        <li><span class="block text-xs font-bold text-black">Industry</span>{{ activeProductData.industry }}</li>
                        <li v-if="activeProductData.isBusinessPlan">
                            <span class="block text-xs font-bold text-black">Total Raised</span>
                            {{ activeProductData.totalRaised }}
                        </li>
                    </ul>
                    <div class="mb-5 flex flex-col items-start justify-between gap-4 md:flex-row">
                        <p class="text-base text-[#6c6c6c] md:max-w-[350px] lg:max-w-[527px]"><span class="block text-xs font-bold text-black">Description</span>{{ activeProductData.description }}</p>
                        <div class="flex flex-wrap gap-2">
                            <nuxt-link v-if="$helper.isInternalUrl(activeProductData.buttonUrl)" :to="activeProductData.buttonUrl" class="b-btn w-full rounded px-9 py-4 text-base md:w-auto" @click="$refs.previewModal.close()">{{
                                activeProductData.buttonTitle
                            }}</nuxt-link>
                            <a v-else target="_blank" :href="activeProductData.buttonUrl" class="b-btn w-full rounded px-9 py-4 text-base md:w-auto" @click="$refs.previewModal.close()">{{ activeProductData.buttonTitle }}</a>
                            <nuxt-link v-if="$helper.isInternalUrl(activeProductData.pdfUrlField)" :to="activeProductData.pdfUrlField" class="b-btn w-full rounded px-9 py-4 text-base md:w-auto" @click="$refs.previewModal.close()"
                                >View Document</nuxt-link
                            >
                            <a v-else target="_blank" :href="activeProductData.pdfUrlField" class="b-btn w-full rounded px-9 py-4 text-base md:w-auto" @click="$refs.previewModal.close()">View Document</a>
                        </div>
                    </div>

                    <div v-if="activeProductData.descriptionMediaType === 'images'" v-swiper:brandLogo="slider_options" class="swiper relative bg-transparent" :cleanup-styles-on-destroy="false">
                        <div class="swiper-wrapper items-center !px-10">
                            <div v-if="activeProductData.images" class="swiper-slide bg-white p-4" v-for="image in activeProductData.images">
                                <img loading="lazy" :src="image.imgUrl" class="h-full w-full object-cover" />
                            </div>
                        </div>
                        <div class="swiper-button-next -mr-3"></div>
                        <div class="swiper-button-prev -ml-3"></div>
                    </div>

                    <iframe v-else class="h-screen w-full" :src="activeProductData.pdfUrlField" frameborder="0"></iframe>
                </div>
            </div>
        </common-modal>
    </div>
</template>

<script>
    import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
    import ClickOutside from 'vue-click-outside';
    import { alphaNumericSpace } from '~/helper/custom-validations';

    export default {
        directives: {
            ClickOutside,
        },

        async asyncData(context) {
            try {
                const baseURL = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/base-urls?populate=deep&filters[url][$eq]=${encodeURIComponent(context.route.path)}`);
                if (
                    baseURL &&
                    baseURL.data &&
                    baseURL.data.data &&
                    Array.isArray(baseURL.data.data) &&
                    baseURL.data.data.length > 0 &&
                    baseURL.data.data[0].attributes &&
                    baseURL.data.data[0].attributes.slug &&
                    baseURL.data.data[0].attributes.template &&
                    baseURL.data.data[0].attributes.template.data &&
                    baseURL.data.data[0].attributes.template.data.attributes &&
                    baseURL.data.data[0].attributes.template.data.attributes.identifier
                ) {
                    let currentPage = baseURL.data.data[0].attributes.template.data.attributes.identifier;
                    let apiID = '';
                    if (currentPage === 'divisions') {
                        apiID = 'divisions-templates';
                    } else if (currentPage === 'about-page') {
                        apiID = 'about-page-templates';
                    } else if (currentPage === 'contact-us') {
                        apiID = 'contact-us-templates';
                    } else if (currentPage === 'founders-bio') {
                        apiID = 'founder-page-templates';
                    } else if (currentPage === 'google-ad') {
                        apiID = 'google-ad-templates';
                    } else if (currentPage === 'our-team') {
                        apiID = 'our-team-page-templates';
                    } else if (currentPage === 'service-pages') {
                        apiID = 'service-page-templates';
                    } else if (currentPage === 'single-insights') {
                        apiID = 'insight-single-insight-pages';
                    }
                    const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/${apiID}?filters[slug][$eq]=${baseURL.data.data[0].attributes.slug}&populate=deep`);
                    return {
                        content: context.$helper.parseData(data.data.data[0]),
                        currentPage: currentPage,
                        baseURL: baseURL.data.data[0].attributes,
                    };
                } else {
                    return {
                        content: null,
                        currentPage: '',
                    };
                }
            } catch (e) {
                console.log(e);
            }
        },

        data() {
            return {
                videoHeight: 571,
                activeProcessReadMore: [],
                inquiryReasonOptions: [
                    { attributes: { inquiryReason: 'I WANT A START UP LOAN' } },
                    { attributes: { inquiryReason: 'I WANT A SBA 7(A) LOAN' } },
                    { attributes: { inquiryReason: 'I WANT A REAL ESTATE 504 LOAN' } },
                    { attributes: { inquiryReason: 'I AM LOOKING FOR EQUITY FINANCING' } },
                ],
                activeCategoryData: {},
                activeProductData: {},
                isShowOptions: false,
                serviceOptions: [
                    'Management Consulting',
                    'Business Strategy',
                    'Legal Advisory',
                    'Financing',
                    'Technology',
                    'Careers',
                    'Internship & Externship',
                    'Invest in Private Equity',
                    'Investor Relations Software (Ai)',
                    'Industry Market Reports',
                ],
                isSubmitted: false,
                captchaError: false,
                isClearSearch: false,
                params: {
                    inquiry_reason: '',
                    full_name: '',
                    email: '',
                    phone: '',
                },
                showService: false,
                tabs: [
                    {
                        id: 'overview',
                        title: 'Overview',
                    },
                    {
                        id: 'getApproval',
                        title: 'Get Approval',
                    },
                    {
                        id: 'ourPortfolio',
                        title: 'Our Portfolio',
                    },
                    {
                        id: 'typesOfSBA',
                        title: 'Types Of SBA Financing',
                    },
                    {
                        id: 'ourProcess',
                        title: 'Our Process',
                    },
                    {
                        id: 'readyToTalk',
                        title: 'Ready to Talk',
                    },
                    {
                        id: 'faqs',
                        title: 'FAQ',
                    },
                ],

                businessPlanProcess: [
                    {
                        fields: {
                            id: 1,
                            title: 'Interview ',
                            description:
                                'Our business plan process begins with a personalized interview, and if needed a secondary interview with the company’s founder and management. We engage in top-level discussions about your business vision, objectives and strategies. ',
                            image: {
                                fields: {
                                    file: {
                                        url: '//images.ctfassets.net/koyrlvjc3wvc/gpM1blYYmvdubjTfHR6wC/140e72b4bcdb9ee3d32318c7cecf4d70/bp-1-1.5x.webp',
                                    },
                                },
                            },
                        },
                    },
                    {
                        fields: {
                            id: 2,
                            title: 'Strategy & Insights ',
                            description:
                                'Having attained a deep understanding of our client’s vision and needs, our experienced consultants provide turnkey solutions to resolve obstacles in a timely and efficient manner. Timing, Market, Competitors, Business Objectives, Barriers to entry, Capital, Team Personnel, competitive advantages, problem and solutions. ',
                            image: {
                                fields: {
                                    title: 'grant_application_process_2',
                                    description: '',
                                    file: {
                                        url: '//images.ctfassets.net/koyrlvjc3wvc/CmbuVIEDRQLSI9SItHRrA/5614de5185a3f18ec5d0f7dcb52ac0dc/bp-2-1.5x.webp',
                                    },
                                },
                            },
                        },
                    },
                    {
                        fields: {
                            id: 3,
                            title: 'Market Research: ',
                            description:
                                'Market research is a systematic investigation to obtain knowledge on target markets and customers, beginning with customer identities. It is an essential component of corporate strategy and a critical aspect in retaining competitiveness.',
                            image: {
                                fields: {
                                    title: 'grant_application_process_3',
                                    description: '',
                                    file: {
                                        url: '//images.ctfassets.net/koyrlvjc3wvc/7bcAOGjTxQdzfwhSciU4tx/9452b4c1181aef30765f9d6ce149afd8/bp-3-1.5x.webp',
                                    },
                                },
                            },
                        },
                    },
                    {
                        fields: {
                            id: 4,
                            title: 'Financials ',
                            description:
                                'First impressions are indispensable to raising capital! Business ventures require data driven projected financial forecasts. To name a few (Income Statement, Balance Sheet, Cashflow, Assumptions, Pre, Post, and Exit Money Valuations, & Company EBITDA. ',
                            image: {
                                fields: {
                                    title: 'grant_application_process_3',
                                    description: '',
                                    file: {
                                        url: '//images.ctfassets.net/koyrlvjc3wvc/4iZoP4SdK3Q4wLbveb8K3/d34b917b8d7a7b221037e474c867d331/bp-4-1.5x.webp',
                                    },
                                },
                            },
                        },
                    },
                ],

                slider_options: {
                    observer: true,
                    observeParents: true,
                    parallax: true,
                    loop: true,
                    slidesPerView: 1,
                    touchRatio: 1,
                    init: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
            };
        },

        head() {
            return {
                title: this.content?.metaFields[0]?.title,
                meta: [
                    {
                        hid: 'og:title',
                        property: 'og:title',
                        content: this.content?.metaFields[0]?.title,
                    },
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.content?.metaFields[0]?.description,
                    },
                    {
                        hid: 'og:image',
                        name: 'og:image',
                        content: this.content?.metaFields[0]?.socialImgUrl,
                    },
                    {
                        hid: 'og:image:secure_url',
                        name: 'og:image:secure_url',
                        content: this.content?.metaFields[0].socialImgUrl,
                    },
                    {
                        hid: 'og:description',
                        name: 'og:description',
                        content: this.content?.metaFields[0]?.description,
                    },
                    {
                        hid: 'twitter:description',
                        name: 'twitter:description',
                        content: this.content?.metaFields[0]?.description,
                    },
                    {
                        hid: 'twitter:title',
                        property: 'twitter:title',
                        content: this.content?.metaFields[0]?.title,
                    },
                    {
                        hid: 'twitter:image',
                        name: 'twitter:image',
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

        computed: {
            questionnaires() {
                return this.content?.dynamicQuestionnaires?.data?.attributes || [];
            },
            bannerData() {
                return this.content?.bannerComponent?.data || [];
            },
            section1Data() {
                return this.content?.section1Component?.data || [];
            },
            section3Data() {
                return this.content?.section3Component?.data || [];
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
            section8Data() {
                return this.content?.section8Component?.data || [];
            },
            section9Data() {
                return this.content?.section9Component?.data || [];
            },
            section11Data() {
                return this.content?.section11Component?.data || [];
            },
            section12Data() {
                return this.content?.section12Component?.data || [];
            },
            section13Data() {
                return this.content?.section13Component?.data || [];
            },
            section14Data() {
                return this.content?.section14Component?.data || [];
            },
            section15Data() {
                return this.content?.section15Component?.data || [];
            },
            logoSliders() {
                return this.content?.logoSlider?.data?.attributes?.logoUrls || [];
            },
            readyToTalkForm() {
                return this.content?.readyToTalkForm?.data?.attributes || { services: { data: [] } };
            },
            searchResult() {
                return !this.$helper.isEmpty(this.params.inquiry_reason) ? this.params.inquiry_reason : 'Reason for enquiry';
            },
            activeCategorySampleData() {
                return this.activeCategoryData?.attributes?.sampleWorks?.data || this.content?.section3Component?.data[0]?.attributes?.sampleWorks?.data || [];
            },
        },

        watch: {
            'params.inquiry_reason': {
                handler() {
                    if (this.$helper.isEmpty(this.params.inquiry_reason)) {
                        this.$refs.multiselect.activate();
                        this.$refs.multiselect.$el.focus();
                    }
                },
                deep: true,
            },
        },

        mounted() {
            this.activeCategoryData = this.content?.section3Component?.data[0]?.attributes?.sampleWorks?.data[0] || {};
            if (window.innerWidth <= 768) {
                this.videoHeight = 350;
            } else {
                this.videoHeight = 571;
            }
        },

        validations() {
            return {
                params: {
                    full_name: { required, alphaNumericSpace, minLength: minLength(3) },
                    email: { required, email },
                    phone: { required, minLength: minLength(14), maxLength: maxLength(14) },
                    inquiry_reason: { required },
                },
            };
        },

        methods: {
            previewSelectedMarketReport(marketReport) {
                if (marketReport?.data?.[0]?.attributes) {
                    this.activeProductData = marketReport.data[0].attributes;
                }
            },
            handleScroll(anchorId) {
                const anchor = document.querySelector(`#${anchorId}`);
                if (anchor) {
                    window.scrollTo({
                        top: anchor.getBoundingClientRect().top + window.pageYOffset - (window.innerWidth < 768 ? 185 : 150),
                    });
                }
            },

            openSearch() {
                this.showService = !this.showService;
                if (this.showService) {
                    // this.$refs.multiselect.activate();
                    // this.$refs.multiselect.$el.focus();
                }
            },

            toggleProcess(id) {
                if (this.activeProcessReadMore.includes(id)) {
                    this.activeProcessReadMore = this.activeProcessReadMore.filter((d) => d !== id);
                } else {
                    this.activeProcessReadMore.push(id);
                }
            },

            closeSearch() {
                this.showService = false;
            },

            searchChange(searchQuery, id) {
                if (!this.$helper.isEmpty(searchQuery)) {
                    this.isClearSearch = true;
                } else {
                    this.isClearSearch = false;
                }
            },

            onSelect() {
                this.showService = false;
            },

            async onSubmit() {
                this.captchaError = false;
                try {
                    const token = this.widgetId ? await this.$recaptcha.getResponse(this.widgetId) : await this.$recaptcha.getResponse();
                    if (!token) {
                        this.captchaError = true;
                    }
                } catch (error) {
                    this.captchaError = true;
                }
                this.$v.params.$touch();
                if (this.$v.params.$invalid || this.$v.params.$error) {
                    return false;
                }
                if (!this.captchaError) {
                    const data = await this.$hubspot.contactUsBannerForm({ ...this.params });
                    if (!data) {
                        return false;
                    }
                    this.isSubmitted = true;
                    this.$v.params.$reset();
                    // this.$recaptcha.reset();
                    this.params = {
                        inquiry_reason: '',
                        full_name: '',
                        email: '',
                        phone: '',
                    };
                }
            },
            previewLatestWork(data) {
                this.$refs.previewModal.open();
                this.activeProductData = data;
                this.isMarketPlanOpened = false;
            },
        },
    };
</script>
<style scoped>
    .swiper-button-prev::after,
    .swiper-button-next::after {
        color: #00adff !important;
    }

    .swiper-button-next {
        right: 36px;
    }

    .swiper-button-prev {
        left: 36px;
    }

    iframe {
        width: 100% !important;
        height: 67vh !important;
    }
</style>
