<template>
    <div class="container mx-auto py-16">
        <div>
            <h1 class="text-[2.5rem] font-bold leading-10">Sitemap</h1>
            <h3 class="mt-4 text-xl text-primary">About Venture Plans</h3>
        </div>

        <div class="mt-12 grid grid-cols-12 gap-5">
            <div v-for="(arr, i) in splitArray" :key="i" class="col-span-12 flex flex-col gap-4 md:col-span-6 lg:col-span-4">
                <div v-for="(mainNav, mainInd) in arr" :key="mainNav.url + mainInd">
                    <nuxt-link :to="mainNav.url" class="text-lg font-medium text-black transition hover:text-primary">{{ mainNav.name }}</nuxt-link>
                    <ul class="pl-3" v-if="mainNav.navChildItems && Array.isArray(mainNav.navChildItems)">
                        <li class="py-1" v-for="(subNav, subInd) in mainNav.navChildItems" :key="subNav.url + subInd">
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
        head() {
            return {
                title: 'Sitemap | Venture Plans',
                meta: [
                    {
                        name: 'robots',
                        content: 'index, all',
                    },
                    {
                        hid: 'keywords',
                        property: 'keywords',
                        content: 'Venture Plans, venture plans, sitemap, venture plans sitemap',
                    },
                ],
            };
        },
        data() {
            return {
                splitArray: [],
            };
        },
        mounted() {
            var subarrays = [];
            let arr = this.$store.state.nav.mobileNavbar;
            var subarraySize = Math.floor(arr.length / 3);

            for (var i = 0; i < arr.length; i += subarraySize) {
                var subarray = arr.slice(i, i + subarraySize);
                subarrays.push(subarray);
            }
            this.splitArray = subarrays;
        },
    };
</script>
