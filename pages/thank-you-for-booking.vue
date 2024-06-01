<template>
    <section class="py-10">
        <div class="container max-w-[990px] px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="shadow-[0px_1px_8px_rgba(0,0,0,0.12)]">
                <ol v-if="isReadyToTalkSubmitted" role="list" :class="isReadyToTalkSubmitted ? 'rounded-b-none' : ''" class="divide-y divide-gray-300 rounded-md border border-gray-300 bg-white md:flex md:divide-y-0">
                    <li v-for="(step, stepIdx) in steps" :key="step.name" class="relative md:flex md:flex-1">
                        <a v-if="step.status === 'complete'" :href="step.href" class="group flex w-full items-center">
                            <span class="flex items-center px-6 py-4 text-sm font-medium">
                                <span class="bg-indigo-600 group-hover:bg-indigo-800 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                                    <icons-check-circle class="h-6 w-6 text-primary"></icons-check-circle>
                                </span>
                                <span class="ml-4 text-sm font-medium text-primary">{{ step.name }}</span>
                            </span>
                        </a>
                        <a v-else-if="step.status === 'current'" :href="step.href" class="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
                            <span class="border-indigo-600 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2">
                                <span class="text-black">{{ step.id }}</span>
                            </span>
                            <span class="ml-4 text-sm font-medium text-black">{{ step.name }}</span>
                        </a>
                        <a v-else :href="step.href" class="group flex items-center">
                            <span class="flex items-center px-6 py-4 text-sm font-medium">
                                <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                                    <span class="text-gray-500 group-hover:text-gray-900">{{ step.id }}</span>
                                </span>
                                <span class="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{{ step.name }}</span>
                            </span>
                        </a>
                        <template v-if="stepIdx !== steps.length - 1">
                            <!-- Arrow separator for lg screens and up -->
                            <div class="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
                                <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                                    <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </template>
                    </li>
                </ol>
                <div :class="isReadyToTalkSubmitted ? 'rounded-t-none' : ''" class="grid w-full grid-cols-1 gap-6 bg-white p-5 sm:gap-6 md:grid-cols-2 md:px-8 xl:pb-[97px] xl:pl-[72px] xl:pr-11">
                    <div class="col-span-full"></div>
                    <div>
                        <div class="flex items-start justify-center gap-2 md:gap-3">
                            <div class="pt-1"><icons-check-circle class="flex h-[40px] w-[40px] justify-start text-green" /></div>
                            <h3
                                v-if="isReadyToTalkSubmitted"
                                class="mb-2.5 text-start text-[22px] font-bold uppercase leading-[32px] text-black md:text-left md:leading-[39px] xl:text-[25px] [&>span]:border-b-[5px] [&>span]:border-green [&>span]:text-green [&>br]:hidden [&>br]:md:inline-block"
                            >
                                Thank you for <span>Submitting your details!</span>
                            </h3>
                            <h3
                                v-else
                                class="mb-2.5 text-start text-[22px] font-bold uppercase leading-[32px] text-black md:text-left md:leading-[39px] xl:text-[25px] [&>span]:border-b-[5px] [&>span]:border-green [&>span]:text-green [&>br]:hidden [&>br]:md:inline-block"
                            >
                                Thank you for <span>Booking your consultation!</span>
                            </h3>
                        </div>

                        <p v-if="!isReadyToTalkSubmitted" class="text-md my-7 font-normal leading-5 -tracking-[0.03px] text-[#353535] lg:max-w-sm lg:text-sm xl:text-base xl:leading-[24px]">
                            Congratulations on taking an important step towards your business goals! Please invite all relevant decision makers to your consultation. questions or concerns, don't hesitate to email us. We look forward to
                            speaking with you.
                        </p>
                        <p v-else class="text-md my-7 font-normal leading-5 -tracking-[0.03px] text-[#353535] lg:max-w-sm lg:text-sm xl:text-base xl:leading-[24px]">
                            Congratulations on taking an important step towards your business goals! Please take the next step and book a FREE 15 minute appointment with us. We look forward to speaking with you.
                        </p>
                        <nuxt-link v-if="!isReadyToTalkSubmitted" to="/" class="b-btn mb-12 hidden text-xs md:block lg:max-w-[322px] lg:py-6">Continue Exploring</nuxt-link>
                        <nuxt-link v-else to="/book-consult" type="submit" class="b-btn mb-12 hidden items-center justify-center gap-3 rounded text-xs md:flex lg:max-w-[322px] lg:py-6">
                            <icons-calendar class="w-3 xl:w-[17px]" />
                            <p>Continue to Booking</p>
                        </nuxt-link>
                        <h4 class="text-md pb-2 text-[#353535] lg:text-sm xl:text-base xl:leading-[24px]">Stay Connected with Venture Plans:</h4>
                        <div class="flex flex-wrap items-center justify-start gap-6 pl-2">
                            <a href="https://www.linkedin.com/company/31139649/" target="_blank" class="text-[#008cc3] transition-all duration-300 hover:text-[#353535]">
                                <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                    <path
                                        fill="currentColor"
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://twitter.com/VenturePlans" target="_blank" class="text-[#70c6ff] transition-all duration-300 hover:text-[#353535]">
                                <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                    <path
                                        fill="currentColor"
                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/ventureplans" target="_blank" class="text-[#506cba] transition-all duration-300 hover:text-[#353535]">
                                <svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                                    <path
                                        fill="currentColor"
                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/channel/UC7S7GWpgiaFLt5nWeOgws4Q" target="_blank" class="text-[#ef574a] transition-all duration-300 hover:text-[#353535]">
                                <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                                    <path
                                        fill="currentColor"
                                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/ventureplans/" target="_blank" class="text-[#d34c7b] transition-all duration-300 hover:text-[#353535]">
                                <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                    <path
                                        fill="currentColor"
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                    ></path>
                                </svg>
                            </a>
                            <a href="mailto:info@ventureplans.us" class="flex items-center gap-2 text-[#353535]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-[25px] w-[25px]" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <nuxt-img
                        format="webp"
                        src="https://images.ctfassets.net/koyrlvjc3wvc/4tyXkBS5yBBWxIucd0xDLs/c95a6fb1c7db45141872da1dc2dcd8ce/iStock-1191132586.jpg"
                        class="h-full w-full object-cover"
                        alt="Continue Exploring"
                        loading="lazy"
                    />

                    <nuxt-link v-if="!isReadyToTalkSubmitted" to="/" class="b-btn mx-auto text-xs md:hidden lg:max-w-[322px] lg:py-6">Continue Exploring</nuxt-link>

                    <!-- Force rebuild-->
                    <nuxt-link
                        v-else
                        to="/book-consult"
                        type="submit"
                        class="b-btn mx-auto flex items-center justify-center gap-3 rounded py-4 text-sm text-white transition-all duration-300 hover:bg-primary-700 md:hidden md:text-xs lg:max-w-[322px] lg:py-6 xl:py-3 xl:text-xs xl:leading-4"
                    >
                        <icons-calendar class="w-4 xl:w-[17px]" />
                        <p>Continue to Booking</p>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                isReadyToTalkSubmitted: true,
                steps: [
                    { id: '01', name: 'Contact Details', href: '#', status: 'complete' },
                    { id: '02', name: 'Booking Details', href: '#', status: 'current' },
                ],
            };
        },
        head() {
            return {
                title: 'Thank you for booking | Venture Plans',
                meta: [
                    {
                        name: 'robots',
                        content: 'noindex',
                    },
                ],
            };
        },
        mounted() {
            const checkIfFilled = sessionStorage.getItem('ready-to-talk-submitted');
            if (checkIfFilled) {
                this.isReadyToTalkSubmitted = true;
            } else {
                gtag('event', 'conversion', { send_to: 'AW-11266175330/wIt9CJKovf0YEOLikPwp' });
            }
            function gtag_report_conversion(url) {
                const callback = function () {
                    if (typeof url !== 'undefined') {
                        window.location = url;
                    }
                };
                gtag('event', 'conversion', {
                    send_to: 'AW-11266175330/p5VSCILb1u0YEOLikPwp',
                    event_callback: callback,
                });
                return false;
            }
            // gtag_report_conversion();
        },
    };
</script>
