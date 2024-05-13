<template>
    <div class="container mx-auto py-16">
        <div>
            <h4 class="mb-4 text-xl text-primary">About Venture Plans</h4>
            <h2 class="text-[2.5rem] font-bold leading-10">Sitemap</h2>
        </div>

        <div class="mt-12 grid grid-cols-12 gap-5">
            <div v-for="(arr, i) in splitArray" :key="i" class="col-span-12 flex flex-col gap-4 md:col-span-6 lg:col-span-4">
                <template v-for="(mainNav, mainInd) in arr">
                    <div :key="mainNav.url + mainInd" class="">
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
                </template>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        head: {
            title: 'Sitemap',
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
