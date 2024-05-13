<template>
    <div class="z-[60] hidden pt-[17px] transition-all duration-300 xl:block">
        <div class="container lg:px-[97px] xl:px-4">
            <div class="flex justify-between pr-7">
                <div>
                    <ul class="megamenu flex space-x-[8px] text-xs font-semibold leading-[13px] text-black lg:pl-[90px] xl:text-[13px] xl:leading-4">
                        <li>
                            <nuxt-link to="/reviews" class="home-header-text transition-all duration-300 hover:!text-primary" @click.native="$store.dispatch('nav/deactiveAllDropdown')">{{ $t('reviews') }}</nuxt-link>
                        </li>
                        <li class="home-header-icon h-[13px] w-[1px] bg-black/30 xl:h-4"></li>
                        <li>
                            <nuxt-link :to="localePath('/contact-us')" class="home-header-text transition-all duration-300 hover:!text-primary" @click.native="$store.dispatch('nav/deactiveAllDropdown')">{{ $t('contact') }}</nuxt-link>
                        </li>
                        <li class="home-header-icon h-[13px] w-[1px] bg-black/30 xl:h-4"></li>
                        <li>
                            <nuxt-link to="/subscribe" class="home-header-text transition-all duration-300 hover:!text-primary" @click.native="$store.dispatch('nav/deactiveAllDropdown')">{{ $t('subscribe') }}</nuxt-link>
                        </li>
                        <li class="home-header-icon h-[13px] w-[1px] bg-black/30 xl:h-4"></li>
                        <li>
                            <nuxt-link to="/media" class="home-header-text transition-all duration-300 hover:!text-primary" @click.native="$store.dispatch('nav/deactiveAllDropdown')">{{ $t('media') }}</nuxt-link>
                        </li>
                        <li class="home-header-icon h-[13px] w-[1px] bg-black/30 xl:h-4"></li>
                        <li class="menu group cursor-auto">
                            <a href="#" class="home-header-text flex items-center gap-[6px] transition-all duration-300 hover:text-primary group-hover:text-primary" @click.stop="$store.dispatch('nav/activeLegacyDropdown', 'industries')">
                                <p>{{ $t('industries') }}</p>
                                <div class="!text-primary">
                                    <icons-topmenuarrow class="!text-primary" :class="{ 'rotate-180': $store.state.nav.dropdown.industries }" />
                                </div>
                            </a>

                            <div v-show="$store.state.nav.dropdown.industries" id="industries" class="sub-menu !top-[33px] !z-30 bg-white">
                                <div class="absolute right-6 top-5">
                                    <button @click.stop="$store.dispatch('nav/activeDropdown', 'industries')"><icons-close-menu class="text-[#d1d1d1] hover:text-primary" /></button>
                                </div>
                                <div class="container bg-white px-10 py-6">
                                    <div class="mb-6 uppercase">
                                        <h3 class="cursor-pointer !border-b-0 !leading-5 duration-150 hover:text-primary">{{ $t('industries') }}</h3>
                                    </div>
                                    <div class="grid grid-cols-4 divide-x divide-[#707070]/20">
                                        <ul class="self-stretch pr-12" :class="{ 'self-stretch px-12': mInd > 0 }" v-for="(mainIndNav, mInd) in $store.state.nav.industries" :key="mInd + mainIndNav.attributes.name">
                                            <li v-for="(subIndNav, sInd) in mainIndNav.attributes.collections.data" :key="sInd + subIndNav.attributes.base_url.data.attributes.url">
                                                <nuxt-link @click.native="$store.dispatch('nav/deactiveAllDropdown')" :to="subIndNav.attributes.base_url.data.attributes.url">{{
                                                    subIndNav.attributes.base_url.data.attributes.name
                                                }}</nuxt-link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="grid grid-cols-4 pt-[43px]">
                                        <div>
                                            <nuxt-link :to="localePath('/industries')" class="text-[0.85rem] text-[#030303] underline duration-150 hover:text-primary">View All Industries</nuxt-link>
                                        </div>
                                        <div>
                                            <nuxt-link :to="localePath('/industries')" class="px-12 text-[0.85rem] text-[#030303] underline duration-150 hover:text-primary">Buy Industry Market Reports</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="megamenu flex space-x-[9px] text-xs font-semibold leading-[13px] text-black xl:text-[13px] xl:leading-4">
                        <li class="menu group cursor-auto">
                            <a href="#" class="home-header-text flex items-center gap-[6px] transition-all duration-300 hover:text-primary group-hover:text-primary" @click.stop="$store.dispatch('nav/activeLegacyDropdown', 'offices')">
                                <p class="pointer-events-none">{{ $t('offices') }}</p>
                                <div class="!text-primary">
                                    <icons-topmenuarrow class="!text-primary" :class="{ 'rotate-180': $store.state.nav.dropdown.offices }" />
                                </div>
                            </a>

                            <div v-show="$store.state.nav.dropdown.offices" id="offices" class="sub-menu !top-[33px] !z-30 bg-white">
                                <div class="absolute right-6 top-5">
                                    <button @click.stop="$store.dispatch('nav/activeLegacyDropdown', 'offices')"><icons-close-menu class="text-[#d1d1d1] hover:text-primary" /></button>
                                </div>
                                <div class="container bg-white px-10 py-6">
                                    <div class="mb-6 uppercase">
                                        <h3 class="!border-b-0 text-[10px] !leading-5">{{ $t('offices') }}</h3>
                                    </div>
                                    <div class="grid grid-cols-7 gap-4">
                                        <ul v-for="off of usOffices" :key="off.name" class="menu-drop-top">
                                            <li>
                                                <nuxt-link :to="off.link" class="text-sm font-semibold">{{ off.name }}</nuxt-link>
                                                <ul class="sub-sub-menu">
                                                    <li v-for="subOff of off.subLinks" :key="subOff.name">
                                                        <nuxt-link :to="subOff.link" @click.native="$store.dispatch('nav/deactiveAllDropdown')">{{ subOff.name }}</nuxt-link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mt-4 grid grid-cols-1">
                                        <div>
                                            <nuxt-link to="/offices" class="text-[0.85rem] text-[#030303] underline duration-150 hover:text-primary" @click.native="$store.dispatch('nav/deactiveAllDropdown')">See All Offices</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="home-header-icon-right-first h-[13px] w-[1px] bg-white/30 xl:h-4"></li>
                        <li>
                            <a href="javascript:;" class="home-header-text transition-all duration-300 hover:text-primary" @click.stop="$store.dispatch('nav/activeLegacyDropdown', 'language')">{{ $t('language') }}</a>
                        </li>
                        <li class="home-header-icon-right h-[13px] w-[1px] bg-black/30 xl:h-4"></li>
                        <li class="menu group">
                            <a
                                href="javascript:;"
                                class="home-header-text flex items-center gap-[6px] transition-all duration-300 hover:text-primary group-hover:text-primary"
                                @click.stop="$store.dispatch('nav/activeLegacyDropdown', 'language')"
                            >
                                <p class="pointer-events-none capitalize">{{ currentLocale }}</p>
                                <div class="text-primary">
                                    <icons-topmenuarrow class="!text-primary" :class="{ 'rotate-180': $store.state.nav.dropdown.language }" />
                                </div>
                            </a>

                            <div v-show="$store.state.nav.dropdown.language" id="language" class="sub-menu !top-[33px] !z-30 bg-white">
                                <div class="absolute right-6 top-5">
                                    <button @click.stop="$store.dispatch('nav/activeLegacyDropdown', 'language')"><icons-close-menu class="text-[#d1d1d1] hover:text-primary" /></button>
                                </div>
                                <div class="container bg-white px-10 py-6">
                                    <div class="mb-6 uppercase">
                                        <h3 class="!border-b-0 text-[10px] !leading-5">{{ $t('languages') }}</h3>
                                    </div>
                                    <div class="flex items-start justify-between divide-x divide-[#707070]/20">
                                        <ul class="pr-12">
                                            <li>
                                                <h6 class="text-sm font-semibold" href="javascript:;">{{ $t('global') }}</h6>
                                                <ul class="sub-sub-menu !space-y-3">
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('en')">
                                                            <img loading="lazy" src="/assets/img/flag-global.png" class="w-[22px]" />
                                                            <p>English</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul class="px-12">
                                            <li>
                                                <h6 class="text-sm font-semibold" href="javascript:;">{{ $t('north_nd_south_america') }}</h6>
                                                <ul class="sub-sub-menu !space-y-3">
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('pt-br')">
                                                            <img loading="lazy" src="/assets/img/flag-brazil.png" class="w-[22px]" />
                                                            <p>Brazil (Português)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('es-ar')">
                                                            <img loading="lazy" src="/assets/img/flag-argentina.png" class="w-[22px]" />
                                                            <p>Argentina (Español)</p></a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('es-cl')">
                                                            <img loading="lazy" src="/assets/img/flag-chile.png" class="w-[22px]" />
                                                            <p>Chile (Español)</p></a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('es-co')">
                                                            <img loading="lazy" src="/assets/img/flag-colombia.png" class="w-[22px]" />
                                                            <p>Colombia (Español)</p></a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('es-co')">
                                                            <img loading="lazy" src="/assets/img/canada.jpg" class="w-[22px]" />
                                                            <p>Canada</p></a
                                                        >
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul class="px-12">
                                            <li>
                                                <h6 class="text-sm font-semibold" href="javascript:;">{{ $t('europe') }}</h6>
                                                <ul class="sub-sub-menu !space-y-3">
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('fr')">
                                                            <img loading="lazy" src="/assets/img/flag-france.png" class="w-[22px]" />
                                                            <p>France (Français)</p></a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('de-ch')">
                                                            <img loading="lazy" src="/assets/img/flag-germany.png" class="w-[22px]" />
                                                            <p>Germany / Switzerland (Deutsch)</p></a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('it')">
                                                            <img loading="lazy" src="/assets/img/flag-italy.png" class="w-[22px]" />
                                                            <p>Italy (Italiano)</p></a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('es')">
                                                            <img loading="lazy" src="/assets/img/flag-spain.png" class="w-[22px]" />
                                                            <p>Spain (Español)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('ru')">
                                                            <img loading="lazy" src="/assets/img/flag-russia.png" class="w-[22px]" />
                                                            <p>Russia (Русский)</p></a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('ru')">
                                                            <img loading="lazy" src="/assets/img/uk.jpg" class="w-[22px]" />
                                                            <p>England</p></a
                                                        >
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul class="px-12">
                                            <li>
                                                <h6 class="text-sm font-semibold" href="javascript:;">{{ $t('asia_nd_australia') }}</h6>
                                                <ul class="sub-sub-menu !space-y-3">
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('zh')">
                                                            <img loading="lazy" src="/assets/img/flag-chaina.png" class="w-[22px]" />
                                                            <p>China (中文版)</p></a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('ko')">
                                                            <img loading="lazy" src="/assets/img/flag-korea.png" class="w-[22px]" />
                                                            <p>Korea (한국어)</p></a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('ja')">
                                                            <img loading="lazy" src="/assets/img/flag-japan.png" class="w-[22px]" />
                                                            <p>Japan (日本語)</p></a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('zh-tw')">
                                                            <img loading="lazy" src="/assets/img/flag-taiwan.png" class="w-[22px]" />
                                                            <p>Taiwan (日本語)</p></a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('zh-hk')">
                                                            <img loading="lazy" src="/assets/img/flag-hongkong.png" class="w-[22px]" />
                                                            <p>Hong Kong (日本語)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('zh-au')">
                                                            <img loading="lazy" src="/assets/img/australia.png" class="w-[22px]" />
                                                            <p>Australia</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="flex items-center gap-2" @click="switchLang('zh-ir')">
                                                            <img loading="lazy" src="/assets/img/iran.png" class="w-[22px]" />
                                                            <p>Iran</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { toggleMenuDropdown, i18nLangSwitch } from '@/mixins';
    export default {
        name: 'TopBarMenu',

        mixins: [toggleMenuDropdown, i18nLangSwitch],
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
        mounted() {
            this.clickEventListenerTocloseMenu();
        },
    };
</script>
