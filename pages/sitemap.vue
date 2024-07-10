<template>
    <div class="container mx-auto py-16">
        <div>
            <h1 class="text-[2.5rem] font-bold leading-10">Sitemap</h1>
            <p class="mt-4 text-xl text-primary">About Venture Plans</p>
        </div>

        <div class="mt-12 grid grid-cols-12 gap-5">
            <div v-for="(arr, i) in splitArray" :key="i" class="col-span-12 flex flex-col gap-4 md:col-span-6 lg:col-span-4">
                <div v-for="(mainNav, mainInd) in arr" :key="mainNav.url + mainInd">
                    <nuxt-link :to="mainNav.url" class="text-lg font-medium text-black transition hover:text-primary">{{ mainNav.name }}</nuxt-link>
                    <ul v-if="mainNav.navChildItems && Array.isArray(mainNav.navChildItems)" class="pl-3">
                        <li v-for="(subNav, subInd) in mainNav.navChildItems" :key="subNav.url + subInd" class="py-1">
                            <nuxt-link :to="subNav.url" class="text-base font-medium text-grey-500 transition hover:text-primary">{{ subNav.name }}</nuxt-link>
                            <ul v-if="subNav.navChildItems && Array.isArray(subNav.navChildItems)" class="ml-5">
                                <li v-for="(childNav, childInd) in subNav.navChildItems" :key="childNav.url + childInd" class="py-1">
                                    <nuxt-link :to="childNav.url" class="text-base font-medium text-grey-500 transition hover:text-primary">{{ childNav.name }}</nuxt-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                splitArray: [],
            };
        },
        head() {
            return {
                title: 'Sitemap | Venture Plans',
                meta: [
                    {
                        name: 'robots',
                        content: 'index, all',
                    },
                    { hid: 'og:title', property: 'og:title', content: 'Sitemap | Venture Plans' },
                    {
                        hid: 'description',
                        property: 'description',
                        content:
                            'Venture Plans is a global consulting firm with Ivy League-trained experts in finance, legal advisory, and digital innovation. We deliver value-based solutions to maximize business performance and outcomes.',
                    },
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content:
                            'Venture Plans is a global consulting firm with Ivy League-trained experts in finance, legal advisory, and digital innovation. We deliver value-based solutions to maximize business performance and outcomes.',
                    },
                    {
                        hid: 'keywords',
                        property: 'keywords',
                        content: 'Venture Plans, venture plans, sitemap, venture plans sitemap',
                    },
                ],
            };
        },
        mounted() {
            const subarrays = [];
            const arr = this.$store.state.nav.mobileNavbar;
            const subarraySize = Math.floor(arr.length / 3);

            for (let i = 0; i < arr.length; i += subarraySize) {
                const subarray = arr.slice(i, i + subarraySize);
                subarrays.push(subarray);
            }
            this.splitArray = subarrays;
        },
    };
</script>
