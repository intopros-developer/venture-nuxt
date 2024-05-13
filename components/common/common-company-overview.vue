<template>
    <section class="my-10 md:my-16 md:pb-0 lg:mt-[152px]">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="mb-9 flex items-center justify-center gap-2 sm:gap-[30px] text-center md:mb-[50px]">
                <div class="h-px w-1/5 sm:w-full bg-[#d5d5d5] block"></div>
                <h2 class="max-w-[90%]  text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary"
                    v-html="title"></h2>
                <div class="h-px w-1/5 sm:w-full bg-[#d5d5d5] block"></div>
            </div>
            <common-toggle-content :content="overviewValue" />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: `We have assisted many nonprofits and for profit enterprises receive millions of dollars in competitive funding support, formula funding, continuation funding, and pass through funding in state and federal level applications.
Venture Plans focuses on offering comprehensive federal government proposal and application management support, top-tier industry specific proposal experts, and and has a track record for producing consistent, cost-effective, and efficient outcomes. A well-prepared, designed, and packaged grant application is the key to success. Learn more below.`,
        },
        title: {
            type: String,
            default: 'OVERVIEW',
        },
    },

    data() {
        return {
            isShowReadMore: false,
        };
    },

    computed: {
        overviewValue() {
            if (this.$helper.isEmpty(this.value)) {
                return this.$t('common_company_overview_paragraph');
            } else {
                return this.value;
            }
        },
    },
};
</script>

<style></style>
