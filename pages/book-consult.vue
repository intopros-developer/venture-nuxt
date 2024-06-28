<template>
    <div v-if="content" class="bg-white">
        <div class="bottom-0 left-0 top-0 w-full bg-[url(/images/book-consult.webp)] bg-cover bg-right-top lg:fixed lg:h-[100vh] lg:w-2/5">
            <div class="relative flex w-full flex-col justify-around overflow-hidden px-10 lg:h-[100vh] xl:pl-[65px]">
                <div class="fixed left-2.5 top-2.5 lg:left-3 lg:top-3 xl:left-7 xl:top-7">
                    <button type="button" aria-label="Close" class="inline-block" @click="goBackHome()"><icons-close class="!h-6 !w-6 text-white hover:text-primary lg:h-[30px] lg:w-[30px]" /></button>
                </div>
                <div class="pt-[50px] text-white lg:pt-5 xl:pt-0">
                    <nuxt-link :to="localePath('/')" aria-label="Venture Plans">
                        <icons-logo />
                    </nuxt-link>
                </div>
                <div class="relative">
                    <span class="custom-blur absolute -inset-5 -z-[1] m-auto bg-black/30"></span>
                    <p
                        class="pt-6 text-xl font-bold uppercase leading-[32px] text-[#f7f4f4] sm:text-[32px] sm:leading-[52px] lg:pt-0 [&>span]:border-b-[5px] [&>span]:border-primary [&>br]:hidden md:[&>br]:block"
                        v-html="content.title2"
                    ></p>
                    <ul class="mb-6 flex flex-wrap items-start gap-y-3 pt-4 text-white sm:gap-5 md:mb-[68px] lg:grid lg:grid-cols-2 xl:flex">
                        <li v-for="(item, index) in content.bannerComponent.data" :key="index" class="w-1/2 grow text-3xl font-bold sm:w-auto md:text-[45px] md:leading-[55px]">
                            <span>{{ item.attributes.sectionDescription }} </span>
                            <span class="block text-base font-normal xl:text-[19px]">{{ item.attributes.sectionName }}</span>
                        </li>
                    </ul>
                    <div class="pb-6 md:mb-5">
                        <p class="mb-6 text-2xl text-[#f7f4f4]">{{ content.subTitle1 }}</p>
                        <div class="grid grid-cols-4 place-items-center items-center gap-x-5 gap-y-2 sm:flex sm:flex-wrap sm:gap-2 md:gap-1">
                            <div v-for="(logo, i) in content.seenOnOption.data" :key="i" class="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-white p-1 px-2 shadow-[0px_1px_8px_rgba(0,0,0,0.2)]">
                                <img :src="logo.attributes.iconUrl" :alt="logo.attributes.title" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full p-8 lg:ml-[40%] lg:w-3/5">
            <div class="flex lg:h-full">
                <div class="mx-auto max-w-[702px] lg:rounded-xl lg:p-8 lg:px-5 lg:shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
                    <h1 class="mb-3 text-base font-bold leading-[25px] text-black xl:mb-[26px] xl:text-[28px] xl:leading-[36px]" v-html="content.title1"></h1>
                    <p class="mb-7 text-sm font-medium leading-6 -tracking-[0.04px] text-[#353535] md:min-w-[600px] xl:text-[18px]">
                        {{ isShowBackHome ? $t('congratulations_on_booking_your_consultation') : $t('Congratulations on your first step towards growth, now book your consultations with one of our business analysts.') }}
                    </p>
                    <nav v-if="!leadCaputuredAlready" :class="isSubmitted ? '' : 'mb-7'" aria-label="Progress">
                        <ol role="list" class="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
                            <li v-for="(step, stepIdx) in steps" :key="step.name" class="relative md:flex md:flex-1">
                                <a v-if="step.status === 'complete'" :href="step.href" class="group flex w-full items-center">
                                    <span class="flex items-center px-6 py-4 text-sm font-medium">
                                        <span class="bg-indigo-600 group-hover:bg-indigo-800 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                                            <icons-check-circle class="h-6 w-6 text-green"></icons-check-circle>
                                        </span>
                                        <span class="ml-4 text-sm font-medium text-green">{{ step.name }}</span>
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
                                    <div class="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
                                        <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
                                            <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </template>
                            </li>
                        </ol>
                    </nav>
                    <form v-if="!showCalenderBooking && !leadCaputuredAlready" id="booking-lead-capture" action="" @submit.prevent="onSubmit">
                        <div class="space-y-[15px]">
                            <div class="form-input-group">
                                <input
                                    v-model="$v.params.fullname.$model"
                                    name="full_name"
                                    autocomplete="on"
                                    type="text"
                                    :placeholder="$t('full_name')"
                                    class="form-input h-[50px] shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                    :class="{ error: $v.params.fullname.$error }"
                                />
                            </div>

                            <div class="form-input-group">
                                <input
                                    v-model="$v.params.phone.$model"
                                    v-mask="$mask.phoneMask"
                                    name="phone"
                                    autocomplete="on"
                                    type="text"
                                    :placeholder="$t('phone_number')"
                                    class="form-input h-[50px] shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                    :class="{ error: $v.params.phone.$error }"
                                />
                            </div>

                            <div class="form-input-group">
                                <input
                                    v-model="$v.params.email.$model"
                                    type="text"
                                    :placeholder="$t('your_email_address')"
                                    name="email"
                                    autocomplete="on"
                                    class="form-input h-[50px] shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                    :class="{ error: $v.params.email.$error }"
                                    @input="$v.params.email.$model = $event.target.value.trim()"
                                />
                            </div>
                            <div>
                                <recaptcha id="recaptcha1" ref="recaptcha1" @success="captchaError = false" @error="captchaError = true" />
                                <div v-if="captchaError" class="captcha-error">Please verify reCaptcha.</div>
                            </div>
                            <div></div>
                            <button
                                :disabled="isSubmitting"
                                type="submit"
                                class="!mt-10 flex items-center gap-3 rounded bg-primary px-[15px] py-[20px] text-base font-semibold text-white transition-all duration-300 hover:bg-primary-700 xl:py-3"
                            >
                                <icons-calendar class="w-4 xl:w-[17px]" />
                                <p>Continue to Booking</p>
                            </button>
                        </div>
                    </form>
                    <div v-if="showCalenderBooking || leadCaputuredAlready">
                        <div class="calendly-inline-widget" :data-url="getCalenderURL" style="min-width: 320px; height: 600px"></div>
                    </div>

                    <div v-if="isShowBackHome" class="text-center">
                        <nuxt-link class="b-btn" to="/">RETURN TO HOME</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
    import { alphaNumericSpace } from '~/helper/custom-validations';
    import iconsCheckCircle from '~/components/icons/icons-check-circle.vue';
    export default {
        components: { iconsCheckCircle },
        layout: 'blank',

        async asyncData(context) {
            try {
                const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/book-a-consultant-page?populate=deep`);
                return {
                    content: context.$helper.parseData(data.data),
                };
            } catch {}
        },

        cookieData({ from, $cookies }) {
            if (from) {
                $cookies.set('from_route', from?.path);
            }
        },

        data() {
            return {
                leadCaputuredAlready: false,
                showCalenderBooking: false,
                isShowBackHome: false,
                steps: [
                    { id: '01', name: 'Contact Details', href: '#', status: 'current' },
                    { id: '02', name: 'Booking Details', href: '#', status: 'upcoming' },
                ],
                isSubmitted: false,
                params: {
                    fullname: '',
                    email: '',
                    phone: '',
                    service: 'Book Consult',
                },
                captchaError: false,
                widgetId: null,
                isSubmitting: false,
            };
        },

        head() {
            return {
                title: 'Book a free consultation | Venture Plans',
                meta: [
                    {
                        name: 'robots',
                        content: 'index',
                    },
                    {
                        hid: 'description',
                        property: 'description',
                        name: 'description',
                        content:
                            'Venture Plans is a global consulting firm with Ivy League-trained experts in finance, legal advisory, and digital innovation. We deliver value-based solutions to maximize business performance and outcomes.',
                    },
                    {
                        hid: 'keywords',
                        property: 'keywords',
                        content: 'Venture Plans Book Consulation, venture plans free consultation',
                    },
                ],
                link: [
                    {
                        rel: 'canonical',
                        href: (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.$route.path,
                    },
                    {
                        rel: 'preload',
                        href: '/images/book-consult.webp',
                        as: 'image',
                    },
                ],
            };
        },

        computed: {
            getCalenderURL() {
                return encodeURI(
                    'https://calendly.com/book-your-consultation/initial-consultation?primary_color=00a1f1&hide_event_type_details=1&hide_gdpr_banner=1&name=' +
                        this.params.fullname +
                        '&email=' +
                        this.params.email +
                        '&a1=' +
                        this.params.phone.toString().replaceAll('-', '').replaceAll('(', '').replaceAll(')', '').replaceAll(' ', '')
                );
            },
        },

        validations() {
            return {
                params: {
                    fullname: { required, alphaNumericSpace, minLength: minLength(3) },
                    email: { required, email },
                    phone: { required, minLength: minLength(14), maxLength: maxLength(14) },
                    service: { required },
                },
            };
        },

        mounted() {
            document.querySelector('html').classList.remove('overflow-hidden');
            const alreadyCaptured = sessionStorage.getItem('ready-to-talk-submitted');
            if (alreadyCaptured) {
                this.leadCaputuredAlready = true;
            }
            const alreadyName = sessionStorage.getItem('full_name');
            if (alreadyName) {
                this.params.fullname = alreadyName;
            }
            const alreadyPhone = sessionStorage.getItem('phone');
            if (alreadyPhone) {
                this.params.phone = alreadyPhone;
            }
            const alreadyEmail = sessionStorage.getItem('email');
            if (alreadyEmail) {
                this.params.email = alreadyEmail;
            }
            try {
                const calendlyScript = document.createElement('script');
                calendlyScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
                document.head.appendChild(calendlyScript);
                window.addEventListener('message', this.isCalendlyScheduledEvent);
            } catch (err) {}
        },

        destroyed() {
            window.removeEventListener('message', this.isCalendlyScheduledEvent);
            this.$cookies.remove('from_route');
        },

        methods: {
            gtag_report_conversion(url) {
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
            },
            async onSubmit() {
                try {
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
                        if (window.innerWidth < 768) {
                            setTimeout(() => {
                                this.$nextTick(() => {
                                    let domRect = document.querySelector('.error');
                                    if (domRect !== null) {
                                        domRect = document.querySelector('.error').getBoundingClientRect();
                                        window.scrollTo({ top: domRect.top + document.documentElement.scrollTop - 140, behavior: 'smooth' });
                                    }
                                });
                            }, 500);
                        }
                        return false;
                    }
                    if (!this.captchaError) {
                        this.isSubmitting = true;
                        const data = await this.$hubspot.readyToTalkForm(this.params);
                        if (!data) {
                            return false;
                        }
                        this.isSubmitted = true;
                        this.isSubmitting = false;
                        const calendlyScript = document.createElement('script');
                        calendlyScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
                        document.head.appendChild(calendlyScript);
                        window.addEventListener('message', this.isCalendlyScheduledEvent);
                        this.showCalenderBooking = true;
                        this.steps = [
                            { id: '01', name: 'Contact Details', href: '#', status: 'complete' },
                            { id: '02', name: 'Booking Details', href: '#', status: 'current' },
                        ];
                        this.widgetId ? await this.$recaptcha.reset(this.widgetId) : await this.$recaptcha.reset();
                    } else {
                        console.log('Not Capturing');
                    }
                } catch (error) {
                    this.isSubmitting = false;
                }
            },

            isCalendlyScheduledEvent(e) {
                if (e.data.event && e.data.event === 'calendly.event_scheduled') {
                    this.gtag_report_conversion();
                    this.$router.push({ path: '/thank-you-for-booking' });
                    sessionStorage.removeItem('ready-to-talk-submitted');
                }
            },

            goBackHome() {
                document.querySelector('html').classList.remove('overflow-hidden');
                if (this.$cookies.get('from_route')) {
                    this.$router.push({ path: this.$cookies.get('from_route') });
                    this.$cookies.remove('from_route');
                } else {
                    this.$router.push({ path: '/' });
                }
            },
        },
    };
</script>
