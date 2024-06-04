<template>
    <div>
        <section class="relative bg-cover bg-[right_32%_top] bg-no-repeat pb-9 pt-[207px] md:bg-left xl:pb-20 xl:pt-[291px]" :style="{ backgroundImage: `url(${content.bannerPara})` }">
            <div class="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent"></div>
            <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]"></div>
            <div class="container relative z-10 px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div>
                    <div>
                        <h1 class="mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px] xl:leading-[53px]">
                            {{ content.bannerTitle }}
                        </h1>
                        <p
                            class="mb-[18px] border-l-[3px] border-primary pl-2.5 leading-5 text-[#FBFBFD]"
                            v-html="`Bain knows that your privacy is important to you and takes user privacy very seriously. <br/> We are committed to protecting your personal data in accordance with this Privacy Policy.`"
                        ></p>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-10 text-[#353535] md:py-16 xl:py-20">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-10 flex items-center justify-center gap-[33px] text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <p class="text-[22px] font-bold uppercase leading-8 text-black sm:shrink-0 md:text-3xl md:leading-[43px]">PRIVACY <span class="text-primary">POLICY</span></p>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>

                <common-custom-strapi-display classes="w-full" :data="content.definitions"></common-custom-strapi-display>
            </div>
        </section>

        <!-- Ready to talk -->
        <common-readytotalk :service-options="serviceOptions" />
    </div>
</template>

<script>
    export default {
        async asyncData(context) {
            try {
                const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/privacy-policy-page?populate=deep`);
                return {
                    content: context.$helper.parseData(data.data),
                };
            } catch {}
        },

        data() {
            return {
                activeFaq: '',
                serviceOptions: [
                    {
                        id: 1,
                        attributes: {
                            serviceName: 'Management Consulting',
                        },
                    },
                    {
                        id: 2,
                        attributes: {
                            serviceName: 'Restructuring Operations',
                        },
                    },
                    {
                        id: 3,
                        attributes: {
                            serviceName: 'Digital Marketing',
                        },
                    },
                    {
                        id: 4,
                        attributes: {
                            serviceName: 'Revenue Growth',
                        },
                    },
                    {
                        id: 5,
                        attributes: {
                            serviceName: 'Agile Implementation',
                        },
                    },
                    {
                        id: 6,
                        attributes: {
                            serviceName: 'Transformation Modification & Integration',
                        },
                    },
                    {
                        id: 7,
                        attributes: {
                            serviceName: 'Customer Experience',
                        },
                    },
                    {
                        id: 8,
                        attributes: {
                            serviceName: 'Financial Advisory',
                        },
                    },
                    {
                        id: 9,
                        attributes: {
                            serviceName: 'Grant Application Support',
                        },
                    },
                    {
                        id: 10,
                        attributes: {
                            serviceName: 'Strategy',
                        },
                    },
                    {
                        id: 11,
                        attributes: {
                            serviceName: 'Human Resources',
                        },
                    },
                    {
                        id: 12,
                        attributes: {
                            serviceName: 'Cannabis Licensing and Application Support',
                        },
                    },
                    {
                        id: 13,
                        attributes: {
                            serviceName: 'New Start Up Technology',
                        },
                    },
                    {
                        id: 14,
                        attributes: {
                            serviceName: 'Immigration Business Plans',
                        },
                    },
                    {
                        id: 15,
                        attributes: {
                            serviceName: 'SBA Lender Business Plans',
                        },
                    },
                    {
                        id: 16,
                        attributes: {
                            serviceName: 'Marketing Plan',
                        },
                    },
                    {
                        id: 17,
                        attributes: {
                            serviceName: 'Restructuring Business Plan',
                        },
                    },
                    {
                        id: 18,
                        attributes: {
                            serviceName: 'Franchising Plan',
                        },
                    },
                    {
                        id: 19,
                        attributes: {
                            serviceName: 'Cannabis Business Plan',
                        },
                    },
                    {
                        id: 20,
                        attributes: {
                            serviceName: 'Request For Proposal',
                        },
                    },
                    {
                        id: 21,
                        attributes: {
                            serviceName: 'Grant Business Plans',
                        },
                    },
                    {
                        id: 22,
                        attributes: {
                            serviceName: 'Investor Pitch Deck',
                        },
                    },
                    {
                        id: 23,
                        attributes: {
                            serviceName: 'Financial Proforma',
                        },
                    },
                    {
                        id: 24,
                        attributes: {
                            serviceName: 'Prospectus',
                        },
                    },
                    {
                        id: 25,
                        attributes: {
                            serviceName: 'White Paper',
                        },
                    },
                    {
                        id: 26,
                        attributes: {
                            serviceName: 'Data Industry Reports',
                        },
                    },
                    {
                        id: 42,
                        attributes: {
                            serviceName: 'Feasibility Reports',
                        },
                    },
                    {
                        id: 43,
                        attributes: {
                            serviceName: 'ETF & Stock Market Reports',
                        },
                    },
                    {
                        id: 44,
                        attributes: {
                            serviceName: 'COVID-19 Market Reports',
                        },
                    },
                    {
                        id: 45,
                        attributes: {
                            serviceName: 'Private Placements',
                        },
                    },
                    {
                        id: 46,
                        attributes: {
                            serviceName: 'Private Placement Memorandum',
                        },
                    },
                    {
                        id: 50,
                        attributes: {
                            serviceName: 'Private Equity',
                        },
                    },
                    {
                        id: 51,
                        attributes: {
                            serviceName: 'Mergers & Acquisitions',
                        },
                    },
                    {
                        id: 52,
                        attributes: {
                            serviceName: 'Due Deligince Certification',
                        },
                    },
                    {
                        id: 53,
                        attributes: {
                            serviceName: 'Regulation S Offshore Offering',
                        },
                    },
                    {
                        id: 54,
                        attributes: {
                            serviceName: 'Investment Portfolio Managment',
                        },
                    },
                    {
                        id: 55,
                        attributes: {
                            serviceName: 'Forensic Accounting',
                        },
                    },
                    {
                        id: 56,
                        attributes: {
                            serviceName: 'Real Estate Investment Trust Fund',
                        },
                    },
                    {
                        id: 57,
                        attributes: {
                            serviceName: 'Securitization',
                        },
                    },
                    {
                        id: 58,
                        attributes: {
                            serviceName: 'Intellectual Property',
                        },
                    },
                    {
                        id: 59,
                        attributes: {
                            serviceName: 'Trademark',
                        },
                    },
                    {
                        id: 60,
                        attributes: {
                            serviceName: 'Copyright',
                        },
                    },
                    {
                        id: 61,
                        attributes: {
                            serviceName: 'Convertible Note(s)',
                        },
                    },
                    {
                        id: 62,
                        attributes: {
                            serviceName: 'Chapter 11 Bankruptcy',
                        },
                    },
                    {
                        id: 63,
                        attributes: {
                            serviceName: 'Commodity & Futures Contract',
                        },
                    },
                    {
                        id: 64,
                        attributes: {
                            serviceName: 'Initial Public Offering',
                        },
                    },
                    {
                        id: 66,
                        attributes: {
                            serviceName: 'Securities Arbitration',
                        },
                    },
                    {
                        id: 67,
                        attributes: {
                            serviceName: 'Offering Memorandum (Canada)',
                        },
                    },
                    {
                        id: 68,
                        attributes: {
                            serviceName: 'Legal Entity Structuring',
                        },
                    },
                    {
                        id: 69,
                        attributes: {
                            serviceName: 'Agile',
                        },
                    },
                    {
                        id: 70,
                        attributes: {
                            serviceName: 'Custom Design and Build',
                        },
                    },
                    {
                        id: 71,
                        attributes: {
                            serviceName: 'Data Analytics Implementation',
                        },
                    },
                    {
                        id: 72,
                        attributes: {
                            serviceName: 'Investor Business Plans',
                        },
                    },
                    {
                        id: 73,
                        attributes: {
                            serviceName: 'E-2 Business Plans',
                        },
                    },
                    {
                        id: 74,
                        attributes: {
                            serviceName: 'E-B1 Business Plans',
                        },
                    },
                    {
                        id: 75,
                        attributes: {
                            serviceName: 'E-B5 Business Plans',
                        },
                    },
                    {
                        id: 76,
                        attributes: {
                            serviceName: 'L-1A & L-1B Business Plans',
                        },
                    },
                    {
                        id: 77,
                        attributes: {
                            serviceName: 'Regulation D',
                        },
                    },
                    {
                        id: 78,
                        attributes: {
                            serviceName: '506 (B) Relationship Investors',
                        },
                    },
                    {
                        id: 79,
                        attributes: {
                            serviceName: '506 (C) Accredited Investors',
                        },
                    },
                    {
                        id: 80,
                        attributes: {
                            serviceName: 'Leveraged Buyout (LBO)',
                        },
                    },
                    {
                        id: 81,
                        attributes: {
                            serviceName: 'Hedge Fund',
                        },
                    },
                    {
                        id: 82,
                        attributes: {
                            serviceName: 'Venture Capital Fund',
                        },
                    },
                    {
                        id: 83,
                        attributes: {
                            serviceName: 'Growth Capital',
                        },
                    },
                    {
                        id: 84,
                        attributes: {
                            serviceName: 'Real Estate',
                        },
                    },
                    {
                        id: 85,
                        attributes: {
                            serviceName: 'Infrastructure',
                        },
                    },
                    {
                        id: 86,
                        attributes: {
                            serviceName: 'Funds of Funds',
                        },
                    },
                    {
                        id: 87,
                        attributes: {
                            serviceName: 'Mezzaanine Capital',
                        },
                    },
                    {
                        id: 88,
                        attributes: {
                            serviceName: 'Distressed Private Equity',
                        },
                    },
                    {
                        id: 89,
                        attributes: {
                            serviceName: 'Secondary Fund',
                        },
                    },
                    {
                        id: 90,
                        attributes: {
                            serviceName: 'Post Merger Integration',
                        },
                    },
                    {
                        id: 91,
                        attributes: {
                            serviceName: 'Diviestitures',
                        },
                    },
                    {
                        id: 93,
                        attributes: {
                            serviceName: 'Software Budgeting And Financials',
                        },
                    },
                    {
                        id: 94,
                        attributes: {
                            serviceName: 'Prototypes',
                        },
                    },
                    {
                        id: 95,
                        attributes: {
                            serviceName: 'Backlog Feature Implementation',
                        },
                    },
                    {
                        id: 96,
                        attributes: {
                            serviceName: 'Functional Specification',
                        },
                    },
                    {
                        id: 97,
                        attributes: {
                            serviceName: 'Utility Patent',
                        },
                    },
                    {
                        id: 98,
                        attributes: {
                            serviceName: 'Design Patent',
                        },
                    },
                    {
                        id: 99,
                        attributes: {
                            serviceName: 'Plant Patent',
                        },
                    },
                    {
                        id: 100,
                        attributes: {
                            serviceName: 'Provisional And Non Provisional',
                        },
                    },
                    {
                        id: 102,
                        attributes: {
                            serviceName: 'Trading',
                        },
                    },
                    {
                        id: 103,
                        attributes: {
                            serviceName: 'Reg A+',
                        },
                    },
                    {
                        id: 28,
                        attributes: {
                            serviceName: 'Debt Financing',
                        },
                    },
                    {
                        id: 104,
                        attributes: {
                            serviceName: 'Pre IPO',
                        },
                    },
                    {
                        id: 105,
                        attributes: {
                            serviceName: 'Special Purpose Entity',
                        },
                    },
                    {
                        id: 106,
                        attributes: {
                            serviceName: 'Crowd funding',
                        },
                    },
                    {
                        id: 107,
                        attributes: {
                            serviceName: 'Invest',
                        },
                    },
                    {
                        id: 108,
                        attributes: {
                            serviceName: 'Industries',
                        },
                    },
                ],
            };
        },

        head() {
            return {
                title: 'Privacy Policy | Venture Plans',
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
                        content: 'Venture Plans Privacy Policy, venture plans privacy policy',
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
                        href: this.content.bannerPara,
                        as: 'image',
                        fetchpriority: 'high',
                    },
                ],
            };
        },
        watch: {
            activeFaq: {
                handler() {
                    if (this.activeFaq) {
                        setTimeout(() => {
                            let domRect = document.querySelector(`#${this.activeFaq}`);
                            if (domRect !== null) {
                                domRect = document.querySelector(`#${this.activeFaq}`).getBoundingClientRect();
                                window.scrollTo({ top: domRect.top + document.documentElement.scrollTop - 80, behavior: 'smooth' });
                            }
                        }, 100);
                    }
                },
                deep: true,
            },
        },

        methods: {
            openFaq(faq) {
                this.activeFaq = this.activeFaq === faq ? '' : faq;
            },
        },
    };
</script>
