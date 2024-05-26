<template>
    <div class="container mx-auto py-16">
        <div>
            <h1 class="text-[2.5rem] font-bold leading-10">Offices</h1>
            <h3 class="mt-4 text-xl text-primary">About Venture Plans</h3>
        </div>

        <div class="mt-12 grid grid-cols-12 gap-5">
            <div v-for="(arr, i) in offices" :key="i" class="col-span-12 flex flex-col gap-4 md:col-span-6 lg:col-span-4">
                <div :key="arr.link + i">
                    <nuxt-link :to="arr.link" class="text-lg font-medium text-black transition hover:text-primary">{{ arr.name }}</nuxt-link>
                    <ul v-if="arr.subLinks && Array.isArray(arr.subLinks)" class="pl-3">
                        <li v-for="(subNav, subInd) in arr.subLinks" :key="subNav.link + subInd" class="py-1">
                            <nuxt-link :to="subNav.link" class="text-base font-medium text-grey-500 transition hover:text-primary">{{ subNav.name }}</nuxt-link>
                            <ul v-if="subNav.subLinks && Array.isArray(subNav.subLinks)" class="ml-5">
                                <li v-for="(childNav, childInd) in subNav.subLinks" :key="childNav.link + childInd" class="py-1">
                                    <nuxt-link :to="childNav.link" class="text-base font-medium text-grey-500 transition hover:text-primary">{{ childNav.name }}</nuxt-link>
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
                offices: [
                    {
                        name: 'Califonia',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Los Angeles',
                                link: '/cities',
                            },
                            {
                                name: 'West Hollywood',
                                link: '/cities',
                            },
                            {
                                name: 'Beverly Hills',
                                link: '/cities',
                            },
                            {
                                name: 'San Francisco',
                                link: '/cities',
                            },
                            {
                                name: 'Berkely',
                                link: '/cities',
                            },
                            {
                                name: 'San Diego',
                                link: '/cities',
                            },
                            {
                                name: 'Cupertino',
                                link: '/cities',
                            },
                            {
                                name: 'San Jose',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'New York',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Manhattan',
                                link: '/cities',
                            },
                            {
                                name: 'Buffalo',
                                link: '/cities',
                            },
                            {
                                name: 'Rochester',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Texas',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Austin',
                                link: '/cities',
                            },
                            {
                                name: 'Dallas',
                                link: '/cities',
                            },
                            {
                                name: 'Houston',
                                link: '/cities',
                            },
                            {
                                name: 'San Antonio',
                                link: '/cities',
                            },
                        ],
                    },

                    {
                        name: 'Tennessee',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Nashville',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Nevada',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Las Vegas',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Florida',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Miami',
                                link: '/cities',
                            },
                            {
                                name: 'Tampa Bay',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Washington',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Seattle',
                                link: '/cities',
                            },
                            {
                                name: 'Tacoma',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Maryland',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Washington',
                                link: '/cities',
                            },
                            {
                                name: 'Baltimore',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Massachusetts',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Boston',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Pennsylvania',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Philadelphia',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Illinois',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Chicago',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Indiana',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Indianapolis',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Georgia',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Atlanta',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Arizona',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Phoenix',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Michigan',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Detroit',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'North Carolina',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Raleigh',
                                link: '/cities',
                            },
                            {
                                name: 'Charlotte',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Ohio',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Columbus',
                                link: '/cities',
                            },
                            {
                                name: 'Cincinnati',
                                link: '/cities',
                            },
                            {
                                name: 'Cleveland',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Colorado',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Denver',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Oregon',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Portland',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Louisiana',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'New Orleans',
                                link: '/cities',
                            },
                            {
                                name: 'Cincinnati',
                                link: '/cities',
                            },
                            {
                                name: 'Cleveland',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Canada',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'British Columbia',
                                link: '/cities',
                                subLinks: [
                                    {
                                        name: 'Vancouver',
                                        link: '/cities',
                                    },
                                ],
                            },
                            {
                                name: 'Ontario',
                                link: '/cities',
                                subLinks: [
                                    {
                                        name: 'Toronto',
                                        link: '/cities',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'Germany',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Berlin',
                                link: '/cities',
                            },
                            {
                                name: 'Hamburg',
                                link: '/cities',
                            },
                            {
                                name: 'Munich',
                                link: '/cities',
                            },
                            {
                                name: 'Frankfurt',
                                link: '/cities',
                            },
                            {
                                name: 'Stuttgart',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'China',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Beijing',
                                link: '/cities',
                            },
                            {
                                name: 'Shangai',
                                link: '/cities',
                            },
                            {
                                name: 'Guangzhou',
                                link: '/cities',
                            },
                            {
                                name: 'Shenzhen',
                                link: '/cities',
                            },
                            {
                                name: "Xi'An",
                                link: '/cities',
                            },
                            {
                                name: 'Hong Kong',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Britain England',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'London',
                                link: '/cities',
                            },
                            {
                                name: 'Manchester',
                                link: '/cities',
                            },
                            {
                                name: 'Birmingham',
                                link: '/cities',
                            },
                            {
                                name: 'Liverpool',
                                link: '/cities',
                            },
                            {
                                name: 'Oxford',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Italy',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Milan',
                                link: '/cities',
                            },
                            {
                                name: 'Rome',
                                link: '/cities',
                            },
                            {
                                name: 'Venice',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Spain',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Madrid',
                                link: '/cities',
                            },
                            {
                                name: 'Barcelona',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Russia',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Moscow',
                                link: '/cities',
                            },
                            {
                                name: 'St. Petersburg',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Turkey',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Istanbul',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'South Korea',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Seoul',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Japan',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Tokyo',
                                link: '/cities',
                            },
                        ],
                    },
                    {
                        name: 'Australia',
                        link: '/cities',
                        subLinks: [
                            {
                                name: 'Sydney',
                                link: '/cities',
                            },
                        ],
                    },
                ],
            };
        },
        head() {
            return {
                title: 'Offices | Venture Plans',
                meta: [
                    {
                        name: 'robots',
                        content: 'index, all',
                    },
                    {
                        hid: 'keywords',
                        property: 'keywords',
                        content: 'Venture Plans Offices, venture plans offices',
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
