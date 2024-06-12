<template>
    <div>
        <section class="relative bg-[url('/images/terms-and-conditions-banner.webp')] bg-cover bg-[right_48%_top] bg-no-repeat pb-9 pt-[164px] md:bg-[center_top_25%] xl:pb-[75px]">
            <div class="absolute left-0 top-0 z-0 h-full w-[90%] bg-gradient-to-r from-[#2b3746] via-transparent"></div>
            <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[246px]"></div>
            <div class="container relative z-10 lg:px-[97px] xl:px-4">
                <div>
                    <p class="mb-[18px] border-l-[3px] border-primary pl-2.5 leading-5 text-[#FBFBFD]">Venture Plans, your dream starts with us.</p>
                    <h1 class="mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px] xl:leading-[53px]">Terms & Conditions</h1>
                </div>
            </div>
        </section>

        <section class="container mb-60 mt-24 lg:px-[97px] xl:px-4">
            <div v-for="(data, i) in content" :key="i" class="mx-auto max-w-4xl" :class="{ 'mb-6': i !== content.length - 1 }">
                <p class="mb-8 text-xl font-bold">{{ data.title }}</p>
                <p>{{ data.description }}</p>
            </div>
            <div class="mx-auto max-w-4xl mt-6">
                <p>{{ copyrightText }}</p>
                <p>{{ address }}</p>
                <a class="underline" :href="`mailto:${email}`">{{ email }}</a>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                address: '750 North San Vicente, West Hollywood, California 90069',
                email: 'info@ventureplans.us',
                copyrightText: '© 2021 Venture Plans | Limited Liability Company',
                content: [
                    {
                        title: 'ACCEPTANCE OF TERMS',
                        description:
                            'We’d like to welcome you to the Venture Plans corporate website. This Agreement sets forth the entire set of terms and restrictions that apply when you visit our site or choose to explore its contents. By accessing and using this website, you agree to abide by its terms of service and to accept as such. This Agreement encapsulates and replaces all earlier or contemporaneous agreements, representations, warranties, and understandings between us and you with respect to the Site and the content offered by or through the Site, as well as the subject areas of this Agreement.',
                    },
                    {
                        title: 'Transaction Processing',
                        description:
                            'Clients must schedule a call from us to discuss their business plan. The venture plans advisors will contact the client to determine pricing within 5 days of the call, the client must pay 65 % of the agreed-upon sum. Any delays in the initial payment will result in a delay in the client’s order.',
                    },
                    {
                        title: 'Seller Damages for Non Acceptance of Repudiation',
                        description:
                            'Under the uniform commercial code AO2-708, a buyer is liable for sellers damages of non-acceptance or repudiation due to reliance on the contract by, for example, incurred expenses in preparing to perform, or in the foregoing opportunities to make other contracts. Awarding a sum of money, not exceeding price of the contract, due to sellers damages based on his/her expectation interest, are indented to give him/her the benefit of his bargain by, to the extent possible putting the company in a good position as he would have been in had the contract been performed.',
                    },
                    {
                        title: 'Editing, Deleting, and Modification',
                        description:
                            'By publishing a letter or a new agreement on our site, we may alter, remove, or update any of the terms and conditions stated in this Agreement at any time and at our sole discretion. YOUR ONGOING VISIT TO OUR WEBSITE AFTER WE POST A UPDATE NOTICE OR NEW TERMS ON OUR SITE WILL BE DEEMED BINDING ACCEPTANCE OF THE CHANGE.',
                    },
                    {
                        title: 'Fees',
                        description: `For the following services, VENTURE PLANS WILL charge a fee:
    Customers who do not pay their balance owed will be charged a $200 late fee Revisions past the given time frame will incur a $400 fee per the new draft Missing a scheduled meeting without rescheduling at least 24 hours in advance;
    will incur a $600 fee
    ; If a client prefers to see us and have a face-to-face discussion at our office about their business plan, it will cost a $600/hour fee.
    If a client requires one of the Venture Plans Management Consultants to visit clients in a different city, state, or country will incur a day rate of $4500 plus all accommodation and airfare fees.`,
                    },
                    {
                        title: 'Accuracy, Completeness, and Timeliness of Information',
                        description:
                            'Venture plans is not liable if the information on this site is not accurate, complete, or up to date. This site’s content is given for informational purposes only and should not be relied upon or used as the only basis for making decisions without contacting primary, more accurate, more complete, or more timely sources of information. Any reliance on this site’s content is entirely at your own risk. This webpage may include historical information that is not current and is offered solely for informational purposes. We reserve the right to change the contents of this site at any time and are not obligated to keep any information on the site up to date. You acknowledge and accept that',
                    },
                    {
                        title: 'LICENSE AND SITE ACCESS',
                        description: `Venture Plans provides you a limited license to browse and use this site for personal purposes only; you may not download or change it, or any portion of it, except with our express written consent. Without our company’s express written authorization, this site or any component of this site may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose.
    The right to visit our corporate website excludes any resale or commercial use of the site or its contents, as well as the ability to download or copy account information for the advantage of another merchant.
    The authorization or license granted by Venture Plans will be revoked if any unlawful use is made.`,
                    },
                    {
                        title: 'SERVICE PRICING & DESCRIPTIONS',
                        description: `We make no representations or warranties about the accuracy, completeness, reliability, currentness, or error-free nature of the service description or other content on this site.`,
                    },
                    {
                        title: 'Refund policy',
                        description:
                            'All payments are non-refundable, and they cannot be canceled once they have been made. Other service charges may be refundable, but this is entirely at The Venture Plans discretion. Customers can contact us, so we can assess whether or not a refund is possible.',
                    },
                    {
                        title: 'LINKS & FRAMINGS',
                        description: `
    Without Venture Plans express written permission, you may not use our company logo or other intellectual assets to reference to our Site. Furthermore, without our prior written approval, you may not frame any trademark, logo, or other private material, including the Images and Content.
    Venture plans makes no claim or representation about, and accept no responsibility for, the quality, content, nature, or reliability of third-party websites accessible via hyperlink from the Site, or websites linking to the Site, and we make no claim or representation about, and accept no responsibility for, directly or indirectly, the quality, content, nature, or reliability of third-party websites accessible via hyperlink from the Site. Such sites are not under our control, and we disclaim all responsibility for the contents of any connected site or any link contained in a linked site, as well as any reviews, changes, or updates to such sites. You accept that we are not responsible for the availability of such such websites or resources, their content, including any links contained in such material, or any changes or additions to such information. If you choose to access links to third-party Web sites, you do so at your own risk.`,
                    },
                    {
                        title: 'DISCLAIMERS',
                        description: `BASED ON “AS IS” AND “AS AVAILABLE.” AT ANY TIME, WE RESERVE THE RIGHT TO RESTRICT OR TERMINATE YOUR ACCESS TO THE SITE, OR ANY FEATURE OR PART OF IT. Venture plans EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, AND ANY WARRANTIES THAT MATERIALS ON THE SITE ARE NONINFRINGING, AS WELL AS WARRANTIES IMPLIED FROM A COURSE OF PERFORM ACCESS TO THE SITE, WILL BE UNINTERRUPTED OR ERROR-FREE; THAT THE SITE WILL BE SECURE; THAT THE SITE OR THE SERVER THAT MAKES THE SITE AVAILABLE WILL BE VIRUS-FREE; OR THAT INFORMATION ON THE SITE WILL BE COMPLETE, ACCURATE, OR TIMELY.`,
                    },
                    {
                        title: 'CORPORATE INTELLECTUAL PROPERTY RIGHTS',
                        description:
                            'You agree that Venture plans own all rights, titles, and interests in and to the site, including but not limited to Intellectual Property Rights, and that you will not acquire any right, title, or interest in or to the site unless specifically stated in this Agreement. You will not decompile, reverse engineer, disassemble, or otherwise attempt to derive source code from any of our services, software, or documentation, or create or attempt to create a substitute or similar service or product by using or accessing the Program or proprietary information related thereto.',
                    },
                    {
                        title: 'Confidentiality',
                        description:
                            'You agree not to share any information you acquire from us, our customers, advertising, suppliers, or forum users with anyone else. Venture Plans private information includes any information given by an end-user client as part of a Program. This type of client information is private and may not be shared. The publisher commits not to duplicate, disseminate, sell, distribute, or exploit any such proprietary information commercially in any way.',
                    },
                    {
                        title: 'NON-ASSIGNMENT OF RIGHTS',
                        description:
                            'Any effort to assign or transfer any of your rights, regardless of nature, may result in the termination of this Agreement without liability to us. However, we reserve the right to transfer this Agreement to anybody at any time and without notice.',
                    },
                    {
                        title: 'NON-Waiver',
                        description: `Venture Plans failure to insist on strict performance of any of the terms, conditions, or commitments hereof shall not be construed as a surrender or waiver of any rights or remedies we may have, nor shall it be construed as a waiver of any subsequent breach of the terms, conditions, or covenants hereof, which terms, conditions, and contractual obligations shall remain in full force and effect.
    Any waiver by either party of a breach of any term of this Agreement shall not be construed as a waiver of any future or previous violation of the same or any other provision.`,
                    },
                    {
                        title: 'Severability of Terms',
                        description:
                            'If any section of these Provisions and Conditions is declared to be illegal or unenforceable by a court order or judgment, that provision will only apply to the extent permitted by law, and the remainder of these Terms and Conditions will remain valid and enforceable according to its terms.',
                    },
                    {
                        title: 'Entire Agreement',
                        description:
                            'Without regard to conflict-of-laws rules, this Agreement shall be governed by and interpreted in conformity with the substantive laws of California, United States of America. The Agreement encapsulates and replaces all earlier or contemporaneous agreements, representations, warranties, and understandings between us and you with respect to the Site, the contents and materials offered by or through the Site, and the subject matter of this Agreement.',
                    },
                    {
                        title: 'GOVERNING LAW',
                        description: `Any disagreement, scandal, or distinction between both the parties arising out of, in relation to, or in connection with this Agreement is hereby irrevocably submitted to the exclusive jurisdiction of the courts of California, United States of America, without regard to its conflict of laws provisions or your actual state or country of residence.`,
                    },
                ],
            };
        },

        head() {
            return {
                title: 'Terms & Conditions | Venture Plans',
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
                        content: 'Venture Plans Terms and Conditions, venture plans terms and conditions',
                    },
                ],
                link: [
                    {
                        rel: 'preload',
                        href: '/images/terms-and-conditions-banner.webp',
                        as: 'image',
                    },
                ],
            };
        },

        methods: {},
    };
</script>
