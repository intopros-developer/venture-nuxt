<template>
    <div>
        <section class="relative bg-[url('/images/refund-policy-banner.webp')] bg-cover bg-[right_48%_top] bg-no-repeat pb-9 pt-[164px] md:bg-[center_top_25%] xl:pb-[75px]">
            <div class="absolute left-0 top-0 z-0 h-full w-[90%] bg-gradient-to-r from-[#2b3746] via-transparent"></div>
            <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[246px]"></div>
            <div class="container relative z-10 lg:px-[97px] xl:px-4">
                <div>
                    <p class="mb-[18px] border-l-[3px] border-primary pl-2.5 leading-5 text-[#FBFBFD]">Venture Plans, your dream starts with us.</p>
                    <h1 class="mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px] xl:leading-[53px]">Refund/Return Policy</h1>
                </div>
            </div>
        </section>

        <section class="container py-10 md:py-16">
            {{ description }}
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                description:
                    'All payments are non-refundable, and they cannot be canceled once they have been made. Other service charges may be refundable, but this is entirely at The Venture Plans discretion. Customers can contact us, so we can assess whether or not a refund is possible.',
            };
        },

        head() {
            return {
                title: 'Refund Policy | Venture Plans',
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
                        content: 'Venture Plans Return Policy, venture plans refund policy',
                    },
                ],
                link: [
                    {
                        rel: 'canonical',
                        href: this.content?.metaFields[0]?.canonicalUrl
                            ? (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.content.metaFields[0].canonicalUrl
                            : (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.$route.path,
                    },
                    {
                        rel: 'preload',
                        href: '/images/refund-policy-banner.webp',
                        as: 'image',
                    },
                ],
            };
        },

        methods: {},
    };
</script>
