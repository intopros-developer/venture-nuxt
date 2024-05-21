<template>
    <section class="rounded-2xl bg-[#e7f5ff] py-10 md:py-28 xl:py-36">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="flex flex-col items-center justify-between gap-5 md:flex-row">
                <div class="flex-1">
                    <h4 class="mb-7 max-w-[404px] text-[26px] leading-[30px] -tracking-[0.05px] text-[#202A36] xl:max-w-[463px]" v-html="title"></h4>
                    <p class="mb-5 max-w-[490px] text-[18px] leading-[30px] -tracking-[0.05px] text-[#202A36]" v-html="description"></p>
                    <form id="subscribe-form" action="" @submit.prevent="onSubmit">
                        <div class="hidden max-w-[498px] items-stretch sm:block xl:mt-[106px] xl:max-w-[624px]">
                            <div class="flex">
                                <div class="form-input-group w-full">
                                    <input
                                        v-model="$v.params.email.$model"
                                        type="email"
                                        placeholder="Enter your email to download"
                                        class="form-input rounded-r-none py-[22px]"
                                        :class="{ error: $v.params.email.$error }"
                                        @input="$v.params.email.$model = $event.target.value.trim()"
                                    />
                                </div>
                                <button type="submit" class="btn flex-none rounded-l-none py-[22px]">Get It Free</button>
                            </div>
                            <div v-if="isSubmitted" class="mt-5 flex items-start gap-3">
                                <icons-check-circle class="h-6 w-6 text-green" />
                                <p class="font-extrabold text-[#707070]/70"><span class="border-b-[2px] border-green text-green">Congratulations,</span> please check your email for download instructions.</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="max-w-[400px] flex-none xl:max-w-[529px]">
                    <nuxt-img format="webp" :src="imageUrl" :alt="title" loading="lazy" />
                </div>
                <form id="subscribe-form-another" action="" class="block sm:hidden" @submit.prevent="onSubmit">
                    <div class="max-w-[498px] items-stretch xl:mt-[106px] xl:max-w-[624px]">
                        <div class="flex">
                            <div class="form-input-group w-full">
                                <input
                                    v-model="$v.params.email.$model"
                                    type="email"
                                    :placeholder="emailPlaceholderText"
                                    class="form-input rounded-r-none"
                                    :class="{ error: $v.params.email.$error }"
                                    @input="$v.params.email.$model = $event.target.value.trim()"
                                />
                            </div>
                            <button type="submit" class="btn flex-none rounded-l-none">{{ buttonTitle }}</button>
                        </div>
                        <div v-if="isSubmitted" class="mt-5 flex items-start gap-3">
                            <icons-check-circle class="h-6 w-6 text-green" />
                            <p class="font-extrabold text-[#707070]/70"><span class="border-b-[2px] border-green text-green">Congratulations,</span> please check your email for download instructions.</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators';
    export default {
        props: {
            title: {
                type: String,
                default: 'Subscribe to get the white paper on the next chapter for Fintech in China.',
            },
            description: {
                type: String,
                default: 'Large state-owned Chinese banks still continue to dominate the traditional banking sector.',
            },
            buttonTitle: {
                type: String,
                default: 'Get It Free',
            },
            emailPlaceholderText: {
                type: String,
                default: 'Enter your email to download',
            },
            imageUrl: {
                type: String,
                default: '/assets/img/crossroads_china.png',
            },
        },
        data() {
            return {
                isSubmitted: false,
                params: {
                    email: '',
                },
            };
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
                const data = await this.$hubspot.eBookSubscribeForm(this.params);
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
