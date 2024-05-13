<template>
    <li>
        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-3 py-2 px-6 text-center" @click="showMenu('offices')">
            <p>Offices</p>
            <icons-right-menu-arrow class="text-primary" />
        </a>
        <Transition>
            <div v-show="dropdowns.offices" class="left-right-animation pointer-events-auto absolute top-0 left-full h-full w-full bg-white">
                <div class="flex flex-col">
                    <a href="javascript:;" class="text flex items-center gap-[10px] border-b border-[#707070]/20 py-[17px] px-6 text-sm font-medium leading-[17px] text-primary" @click="closeMenu('offices')">
                        <icons-right-menu-arrow class="rotate-180" />
                        <p class="text-[#BFBFBF]">Back</p>
                    </a>
                    <div class="mt-[22px]">
                        <nuxt-link to="/cities" class="px-6 text-[13px] font-semibold leading-4 text-black">Offices</nuxt-link>
                        <ul class="mt-[19px] text-[13px] font-normal leading-4 text-black">
                            <li v-for="mainOff in usOffices" :key="mainOff.id">
                                <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-3 py-[10px] px-6 text-center" @click="showMenu(mainOff.id)">
                                    <p>{{ mainOff.name }}</p>
                                    <icons-right-menu-arrow class="text-primary" />
                                </a>
                                <Transition>
                                    <div v-show="dropdowns.offices_sub_menu[mainOff.id]" class="left-right-animation pointer-events-auto absolute top-0 left-full h-full w-full bg-white">
                                        <div class="flex flex-col">
                                            <a href="javascript:;" class="text flex items-center gap-[10px] border-b border-[#707070]/20 py-[17px] px-6 text-sm font-medium leading-[17px] text-primary" @click="closeMenu(mainOff.id)">
                                                <icons-right-menu-arrow class="rotate-180" />
                                                <p class="text-[#BFBFBF]">Back</p>
                                            </a>
                                            <div class="mt-[22px]">
                                                <h4 class="px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black">{{ mainOff.name }}</h4>
                                                <ul class="text-[13px] font-normal leading-4 text-black">
                                                    <li v-for="subOff in mainOff.subLinks" :key="subOff.link">
                                                        <nuxt-link :to="subOff.link" class="rightmenu-link flex items-center justify-start py-[10px] px-6 text-center" @click.native="$store.dispatch('nav/toggle')">{{
                                                            subOff.name
                                                        }}</nuxt-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>
                            </li>
                            <li>
                                <a href="/offices" class="rightmenu-link flex items-center justify-start gap-3 py-[10px] px-6 text-center">
                                    <p>Show All Offices</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Transition>
    </li>
</template>

<script>
    export default {
        props: {
            dropdowns: {
                type: Object,
                default: () => {},
            },
        },
        data() {
            return {
                usOffices: [
                    {
                        name: 'Califonia',
                        link: '/cities/califonia',
                        subLinks: [
                            {
                                name: 'Los Angeles',
                                link: '/cities/los-angeles',
                            },
                            {
                                name: 'West Hollywood',
                                link: '/cities/west-hollywood',
                            },
                            {
                                name: 'Beverly Hills',
                                link: '/cities/beverly-hills',
                            },
                            {
                                name: 'San Francisco',
                                link: '/cities/san-francisco',
                            },
                            {
                                name: 'Berkely',
                                link: '/cities/berkely',
                            },
                            {
                                name: 'San Diego',
                                link: '/cities/san-diego',
                            },
                            {
                                name: 'Cupertino',
                                link: '/cities/cupertino',
                            },
                            {
                                name: 'San Jose',
                                link: '/cities/san-jose',
                            },
                        ],
                        id: 'califonia',
                    },
                    {
                        name: 'Texas',
                        link: '/cities/texas',
                        subLinks: [
                            {
                                name: 'Austin',
                                link: '/cities/austin',
                            },
                            {
                                name: 'Dallas',
                                link: '/cities/dallas',
                            },
                            {
                                name: 'Houston',
                                link: '/cities/houston',
                            },
                            {
                                name: 'San Antonio',
                                link: '/cities/san-antonio',
                            },
                        ],
                        id: 'texas',
                    },
                    {
                        name: 'New York',
                        link: '/cities/new-york',
                        subLinks: [
                            {
                                name: 'Manhattan',
                                link: '/cities/manhattan',
                            },
                            {
                                name: 'Buffalo',
                                link: '/cities/buffalo',
                            },
                            {
                                name: 'Rochester',
                                link: '/cities/rochester',
                            },
                        ],
                        id: 'new_york',
                    },
                    {
                        name: 'Ohio',
                        link: '/cities/ohio',
                        subLinks: [
                            {
                                name: 'Columbus',
                                link: '/cities/columbus',
                            },
                            {
                                name: 'Cincinnati',
                                link: '/cities/cincinnati',
                            },
                            {
                                name: 'Cleveland',
                                link: '/cities/cleveland',
                            },
                        ],
                        id: 'ohio',
                    },
                    {
                        name: 'Louisiana',
                        link: '/cities/louisiana',
                        subLinks: [
                            {
                                name: 'New Orleans',
                                link: '/cities/new-orleans',
                            },
                            {
                                name: 'Cincinnati',
                                link: '/cities/cincinnati',
                            },
                            {
                                name: 'Cleveland',
                                link: '/cities/cleveland',
                            },
                        ],
                        id: 'louisiana',
                    },
                    {
                        name: 'Florida',
                        link: '/cities/florida',
                        subLinks: [
                            {
                                name: 'Miami',
                                link: '/cities/miami',
                            },
                            {
                                name: 'Tampa Bay',
                                link: '/cities/tampa-bay',
                            },
                        ],
                        id: 'florida',
                    },
                    {
                        name: 'Washington',
                        link: '/cities/washington',
                        subLinks: [
                            {
                                name: 'Seattle',
                                link: '/cities/seattle',
                            },
                            {
                                name: 'Tacoma',
                                link: '/cities/tacoma',
                            },
                        ],
                        id: 'washington',
                    },
                    {
                        name: 'Maryland',
                        link: '/cities/maryland',
                        subLinks: [
                            {
                                name: 'Washington',
                                link: '/cities/washington',
                            },
                            {
                                name: 'Baltimore',
                                link: '/cities/baltimore',
                            },
                        ],
                        id: 'maryland',
                    },
                    {
                        name: 'North Carolina',
                        link: '/cities/north-carolina',
                        subLinks: [
                            {
                                name: 'Raleigh',
                                link: '/cities/raleigh',
                            },
                            {
                                name: 'Charlotte',
                                link: '/cities/charlotte',
                            },
                        ],
                        id: 'north_carolina',
                    },
                    {
                        name: 'Tennessee',
                        link: '/cities/tennessee',
                        subLinks: [
                            {
                                name: 'Nashville',
                                link: '/cities/nashville',
                            },
                        ],
                        id: 'tennessee',
                    },
                    {
                        name: 'Nevada',
                        link: '/cities/nevada',
                        subLinks: [
                            {
                                name: 'Las Vegas',
                                link: '/cities/las-vegas',
                            },
                        ],
                        id: 'nevada',
                    },
                    {
                        name: 'Massachusetts',
                        link: '/cities/massachusetts',
                        subLinks: [
                            {
                                name: 'Boston',
                                link: '/cities/boston',
                            },
                        ],
                        id: 'massachusetts',
                    },
                    {
                        name: 'Pennsylvania',
                        link: '/cities/pennsylvania',
                        subLinks: [
                            {
                                name: 'Philadelphia',
                                link: '/cities/philadelphia',
                            },
                        ],
                        id: 'pennsylvania',
                    },
                    {
                        name: 'Illinois',
                        link: '/cities/illinois',
                        subLinks: [
                            {
                                name: 'Chicago',
                                link: '/cities/chicago',
                            },
                        ],
                        id: 'illinois',
                    },
                    {
                        name: 'Indiana',
                        link: '/cities/indiana',
                        subLinks: [
                            {
                                name: 'Indianapolis',
                                link: '/cities/indianapolis',
                            },
                        ],
                        id: 'indiana',
                    },
                    {
                        name: 'Georgia',
                        link: '/cities/georgia',
                        subLinks: [
                            {
                                name: 'Atlanta',
                                link: '/cities/atlanta',
                            },
                        ],
                        id: 'georgia',
                    },
                    {
                        name: 'Arizona',
                        link: '/cities/arizona',
                        subLinks: [
                            {
                                name: 'Phoenix',
                                link: '/cities/phoenix',
                            },
                        ],
                        id: 'arizona',
                    },
                    {
                        name: 'Michigan',
                        link: '/cities/michigan',
                        subLinks: [
                            {
                                name: 'Detroit',
                                link: '/cities/detroit',
                            },
                        ],
                        id: 'michigan',
                    },
                    {
                        name: 'Colorado',
                        link: '/cities/colorado',
                        subLinks: [
                            {
                                name: 'Denver',
                                link: '/cities/denver',
                            },
                        ],
                        id: 'colorado',
                    },
                    {
                        name: 'Oregon',
                        link: '/cities/oregon',
                        subLinks: [
                            {
                                name: 'Portland',
                                link: '/cities/portland',
                            },
                        ],
                        id: 'oregon',
                    },
                ],
            };
        },

        methods: {
            showMenu(menu) {
                this.$emit('showMenu', menu);
            },
            closeMenu(menu) {
                this.$emit('closeMenu', menu);
            },
        },
    };
</script>

<style scoped>
    .slide-left-to-right-leave-active,
    .slide-left-to-right-enter-active {
        transition: 0.5s;
    }
    .slide-left-to-right-enter {
        transform: translateX(360px);
    }
    .slide-left-to-right-leave-to {
        transform: translateX(360px);
    }
</style>
