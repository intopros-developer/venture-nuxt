<template>
    <section class="overflow-y-hidden bg-cover bg-[top_36%_center] py-10 xl:pb-[75px] xl:pt-20" :style="{ backgroundImage: `url(${imageUrl})` }">
        <div class="container">
            <div class="grid grid-cols-1">
                <div class="relative max-w-[637px] md:pt-[140px]">
                    <div class="absolute -left-20 top-2.5 h-full w-full">
                        <nuxt-img format="webp" src="/assets/img/bg-blur-subcribe.png" alt="Subscribe" loading="lazy" />
                    </div>
                    <div class="relative z-[1]">
                        <h5 class="text-center text-2xl font-bold uppercase leading-8 text-[#f7f4f4] md:text-left md:leading-10 [&>br]:md:hidden" v-html="title"></h5>
                        <form id="career-join-form" action="" @submit.prevent="onSubmit">
                            <div class="mx-auto mt-[13px] max-w-[498px] items-stretch md:ml-0 xl:max-w-[624px]">
                                <div class="flex">
                                    <div class="form-input-group w-full">
                                        <input
                                            v-model="$v.params.email.$model"
                                            type="email"
                                            name="email"
                                            autocomplete="on"
                                            :placeholder="$t(placeholder)"
                                            class="form-input rounded-r-none py-[22px]"
                                            :class="{ error: $v.params.email.$error }"
                                            @input="$v.params.email.$model = $event.target.value.trim()"
                                        />
                                        <!-- <div v-if="$v.params.email.$error">
                                        <p v-if="!$v.params.email.required">{{ $helper.requiredMessage('Email') }}</p>
                                        <p v-else-if="!$v.params.email.email">{{ $helper.emailMessage() }}</p>
                                    </div> -->
                                    </div>
                                    <button type="submit" class="btn flex-none rounded-l-none py-[22px]">{{ $t('subscribe') }}</button>
                                </div>
                            </div>

                            <div v-if="isSubmitted" class="mt-2 flex items-center gap-3">
                                <icons-check-circle class="h-6 w-6 text-green" />
                                <p class="text-xl font-extrabold leading-[30px] text-white [&>span]:border-b-[2px] [&>span]:border-green [&>span]:text-green" v-html="$t('span_congratulations_span_your_email_has_been_subscribe')"></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators';
    export default {
        props: {
            imageUrl: {
                type: String,
                default: 'https://images.ctfassets.net/koyrlvjc3wvc/5PIDqWaQeS4Qw3WtFBBf4W/a16bd4583868b261e530015704581795/Image_32_2x.webp',
            },
            title: {
                type: String,
                default: 'Subscribe Now!',
            },
        },

        data() {
            return {
                isSubmitted: false,
                placeholder: '',
                params: {
                    email: '',
                },
            };
        },

        mounted() {
            if (window.innerWidth <= 768) {
                this.placeholder = 'enter_your_email_to_join';
            } else {
                this.placeholder = 'enter_your_email_to_join_events';
            }
        },

        validations() {
            return {
                params: {
                    email: { required, email },
                },
            };
        },

        methods: {
            async onSubmit() {
                this.$v.params.$touch();
                if (this.$v.params.$invalid || this.$v.params.$error) {
                    return false;
                }
                const data = await this.$hubspot.joinEventForm(this.params);
                if (!data) {
                    return false;
                }

                this.isSubmitted = true;
                this.$v.params.$reset();
                this.params = {
                    email: '',
                };
            },
        },
    };
</script>
