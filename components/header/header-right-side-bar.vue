<template>
    <div>
        <div class="left-side-megamenu transition-left fixed -left-full bottom-0 left-[-84%] top-0 z-[60] h-screen w-10/12 bg-white md:left-[-360px] md:w-[360px]" :class="{ '!left-0 !block': $store.state.nav.open }">
            <div class="absolute right-0 top-0 z-10 flex h-[52px] w-[52px] items-center justify-center bg-primary" @click="$store.dispatch('nav/toggle')">
                <a href="javascript:;" class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </a>
            </div>
            <div id="menu-scroll-top" class="h-full overflow-y-auto overflow-x-hidden pb-12">
                <!-- :class="{ '-left-full': dropdowns.includes('true') }" -->
                <nav class="left-right-animation relative left-0 h-auto" :class="{ '!-left-full': $store.state.nav.isLevel1Open, '!-left-[200%]': $store.state.nav.isLevel2Open }">
                    <div class="">
                        <div class="ml-0">
                            <nuxt-link :to="localePath('/')" class="block w-full cursor-pointer px-5 py-4" @click.native="$store.dispatch('nav/toggle')">
                                <img loading="lazy" class="h-[23px] w-[93px]" src="/assets/img/logo-black.svg" width="120" />
                            </nuxt-link>
                        </div>
                        <!-- <div class="mb-5 grid justify-end text-right">
                                <button class="flex h-[52px] w-[52px] items-center justify-center text-black">
                                    <svg xmlnsname="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" @click="showMenu('search')">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div> -->

                        <ul class="m-0 mb-4 list-none p-0 pt-5 text-[13px] font-semibold leading-4 text-black">
                            <li v-for="(mainNav, mainInd) in $store.state.nav.mobileNavbar" :key="mainNav.url + mainInd">
                                <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-3 px-6 py-2" @click="showMobileMenu(mainNav, 'main')">
                                    <p>{{ mainNav.name }}</p>
                                    <icons-right-menu-arrow class="text-primary" />
                                </a>
                                <Transition>
                                    <div v-show="mainNav.isOpened" class="left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white">
                                        <div class="flex flex-col pb-28 lg:pb-10">
                                            <a
                                                href="javascript:;"
                                                class="text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary"
                                                @click="hideMobileMenu(mainNav, 'main')"
                                            >
                                                <icons-right-menu-arrow class="rotate-180" />
                                                <p class="text-[#BFBFBF]">{{ $t('back') }}</p>
                                            </a>
                                            <div class="mt-[22px]">
                                                <nuxt-link :to="mainNav.url">
                                                    <h4 class="px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black" @click="$store.dispatch('nav/toggle')">{{ mainNav.name }}</h4>
                                                </nuxt-link>
                                                <ul v-if="mainNav.navChildItems" class="text-[13px] font-normal leading-4 text-black">
                                                    <li v-for="(subNav, subInd) in mainNav.navChildItems" :key="subNav.url + subInd">
                                                        <a
                                                            href="javascript:;"
                                                            v-if="subNav.navChildItems && subNav.navChildItems.length > 0"
                                                            @click="showMobileMenu(subNav, 'level1', mainNav)"
                                                            class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px]"
                                                        >
                                                            <p>{{ subNav.name }}</p>
                                                            <icons-right-menu-arrow class="text-primary" />
                                                        </a>
                                                        <nuxt-link v-else :to="subNav.url" class="rightmenu-link flex items-center justify-start px-6 py-[10px]" @click.native="$store.dispatch('nav/toggle')">
                                                            <p>{{ subNav.name }}</p>
                                                        </nuxt-link>
                                                        <Transition>
                                                            <div v-show="subNav.isOpened" class="left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white">
                                                                <div class="flex flex-col pb-28 lg:pb-10">
                                                                    <a
                                                                        href="javascript:;"
                                                                        to="/business-plan-'immigration_business_plans'google-ad"
                                                                        class="text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary"
                                                                        @click="hideMobileMenu(subNav, 'level1', mainNav)"
                                                                    >
                                                                        <icons-right-menu-arrow class="rotate-180" />
                                                                        <p class="text-[#BFBFBF]">{{ $t('back') }}</p>
                                                                    </a>
                                                                    <div class="mt-[22px]">
                                                                        <nuxt-link :to="subNav.url" @click.native="$store.dispatch('nav/toggle')" class="block px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black">
                                                                            {{ subNav.name }}</nuxt-link
                                                                        >
                                                                        <ul class="text-[13px] font-normal leading-4 text-black">
                                                                            <li v-for="(childNav, childInd) in subNav.navChildItems" :key="childNav.url + childInd">
                                                                                <nuxt-link :to="childNav.url" class="rightmenu-link flex items-center justify-start px-6 py-[10px]" @click.native="$store.dispatch('nav/toggle')">{{
                                                                                    childNav.name
                                                                                }}</nuxt-link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Transition>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>
                            </li>
                        </ul>
                        <ul class="m-0 list-none border-t border-[#d8d8d8] p-0 pt-4 text-[13px] font-semibold leading-4 text-[#707070]">
                            <li>
                                <nuxt-link to="/insights" class="rightmenu-link flex items-center justify-start px-6 py-2 text-center" @click.native="$store.dispatch('nav/toggle')">{{ $t('insights') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/media" class="rightmenu-link flex items-center justify-start px-6 py-2 text-center" @click.native="$store.dispatch('nav/toggle')">{{ $t('media') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/reviews" class="rightmenu-link flex items-center justify-start px-6 py-2 text-center" @click.native="$store.dispatch('nav/toggle')">{{ $t('reviews') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/subscribe" class="rightmenu-link flex items-center justify-start px-6 py-2 text-center" @click="$store.dispatch('nav/toggle')">{{ $t('subscribe') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/about" class="rightmenu-link flex items-center justify-start px-6 py-2 text-center" @click="$store.dispatch('nav/toggle')">{{ $t('faq') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link :to="localePath('/contact-us')" native class="rightmenu-link flex items-center justify-start px-6 py-2 text-center" @click.native="$store.dispatch('nav/toggle')">{{ $t('contact') }}</nuxt-link>
                            </li>

                            <header-right-side-bar-menu-offices :dropdowns="dropdowns" @showMenu="showMenu" @closeMenu="closeMenu" />

                            <header-right-side-bar-menu-language-english :dropdowns="dropdowns" @showMenu="showMenu" @closeMenu="closeMenu" />
                        </ul>
                    </div>
                    <div v-show="dropdowns.search">
                        <a href="javascript:;" class="text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary" @click="closeMenu('search')">
                            <icons-right-menu-arrow class="rotate-180" />
                            <p class="text-[#BFBFBF]">{{ $t('back') }}</p>
                        </a>
                        <div class="relative mx-auto mb-[14px]">
                            <input class="h-[52px] w-full border-b border-[#707070]/10 bg-white px-5 pl-14 text-sm leading-[17px] text-[#BFBFBF] focus:outline-none" type="search" name="search" placeholder="Search" />
                            <button type="submit" class="absolute left-0 top-0 ml-4 mt-4">
                                <svg
                                    class="h-5 w-5 fill-current text-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 56.966 56.966"
                                    style="enable-background: new 0 0 56.966 56.966"
                                    xml:space="preserve"
                                    width="512px"
                                    height="512px"
                                >
                                    <path
                                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <ul class="mb-2 border-b border-[#707070]/20 pb-2 text-[13px] font-semibold leading-4 text-black">
                            <li class="px-6 py-2 text-sm leading-[17px] text-[#707070]">{{ $t('popular_searches') }}</li>
                            <li>
                                <nuxt-link to="/about" class="flex items-center justify-start px-6 py-2 text-center">{{ $t('venture_experts') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/about" class="flex items-center justify-start px-6 py-2 text-center">{{ $t('artificial_intelligence') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/about" class="flex items-center justify-start px-6 py-2 text-center">{{ $t('product_engineering') }}</nuxt-link>
                            </li>
                        </ul>
                        <ul class="mb-2 pb-2 text-[13px] font-semibold leading-4 text-black">
                            <li class="px-6 py-2 text-sm leading-[17px] text-[#707070]">{{ $t('recently_visited_pages') }}</li>
                            <li>
                                <nuxt-link to="/about" class="flex items-center justify-start px-6 py-2 text-center">{{ $t('venture_experts') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/about" class="flex items-center justify-start px-6 py-2 text-center">{{ $t('artificial_intelligence') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/about" class="flex items-center justify-start px-6 py-2 text-center">{{ $t('product_engineering') }}</nuxt-link>
                            </li>
                        </ul>
                        <ul class="m-0 mb-4 list-none p-0 text-[13px] font-semibold leading-4 text-black">
                            <li>
                                <nuxt-link to="/about" class="flex items-center justify-start px-6 py-2 text-center">{{ $t('industries') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/consulting" class="flex items-center justify-start px-6 py-2 text-center">{{ $t('consulting_services') }}</nuxt-link>
                            </li>
                            <li>
                                <a href="javascript:;" class="flex items-center justify-start px-6 py-2 text-center">{{ $t('vector') }}</a>
                            </li>
                            <li>
                                <nuxt-link to="/insights" class="flex items-center justify-start px-6 py-2 text-center">{{ $t('insights') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/about" class="flex items-center justify-start px-6 py-2 text-center">{{ $t('about') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/careers" class="flex items-center justify-start px-6 py-2 text-center">{{ $t('careers') }}</nuxt-link>
                            </li>
                        </ul>
                        <ul class="m-0 list-none border-t border-[#d8d8d8] p-0 pt-4 text-[13px] font-semibold leading-4 text-[#707070]">
                            <header-right-side-bar-menu-offices :dropdowns="dropdowns" @showMenu="showMenu" @closeMenu="closeMenu" />

                            <li>
                                <nuxt-link to="/media" class="flex items-center justify-start px-6 py-2 text-center">{{ $t('media') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/subscribe" class="flex items-center justify-start px-6 py-2 text-center">{{ $t('subscribe') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/contact-us" class="flex items-center justify-start px-6 py-2 text-center">{{ $t('contact') }}</nuxt-link>
                            </li>
                            <header-right-side-bar-menu-language-english :dropdowns="dropdowns" @showMenu="showMenu" @closeMenu="closeMenu" />
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RightSideBar',

        data() {
            return {
                isShowConsulting: false,
                isShowSearch: false,
                isLeftLevel1: false,
                isLeftLevel2: false,
                dropdowns: {
                    search: false,
                    about: false,
                    consulting: false,
                    consulting_sub_menu: {
                        market_reports: false,
                    },
                    bussiness_plans: false,
                    bussiness_plans_sub_menu: {
                        immigration_business_plans: false,
                    },
                    financing: false,
                    financing_sub_menu: {
                        regulation_d: false,
                        mergers_acquisitions: false,
                        private_equity: false,
                    },
                    legal_advisory: false,
                    legal_advisory_sub_menu: {
                        intellectual_property: false,
                    },
                    technology: false,
                    technology_sub_menu: {
                        agile: false,
                    },
                    industries: false,
                    careers: false,
                    careers_sub_menu: {
                        explore_roles: false,
                        meet_us: false,
                        prepare_for_an_interview: false,
                    },
                    market_data_reports: false,
                    offices: false,
                    offices_sub_menu: {
                        califonia: false,
                        texas: false,
                        new_york: false,
                        ohio: false,
                        louisinia: false,
                        florida: false,
                        washington: false,
                        marryland: false,
                        north_carolina: false,
                        tennessee: false,
                        neveda: false,
                        massachusetts: false,
                        pennsylvania: false,
                        illinois: false,
                        indiana: false,
                        georgia: false,
                        arizona: false,
                        michigan: false,
                        colorado: false,
                        oregon: false,
                    },
                    language_english: false,
                    language_english_sub_menu: {
                        global: false,
                        north_south_america: false,
                        europe_middle_east_africa: false,
                        asis_australia: false,
                    },
                },
                mainMenu: ['search', 'about', 'consulting', 'bussiness_plans', 'financing', 'legal_advisory', 'technology', 'industries', 'careers', 'market_data_reports', 'offices', 'language_english'],
                consultingSubmenu: ['market_reports'],
                bussinessPlansSubmenu: ['immigration_business_plans'],
                financingSubmenu: ['regulation_d', 'mergers_acquisitions', 'private_equity'],
                legalAdvisorySubmenu: ['intellectual_property'],
                technologySubmenu: ['agile'],
                officesSubmenu: [
                    'califonia',
                    'texas',
                    'new_york',
                    'ohio',
                    'louisiana',
                    'florida',
                    'washington',
                    'maryland',
                    'north_carolina',
                    'tennessee',
                    'nevada',
                    'massachusetts',
                    'pennsylvania',
                    'illinois',
                    'indiana',
                    'georgia',
                    'arizona',
                    'michigan',
                    'colorado',
                    'oregon',
                ],
                languageEnglishSubmenu: ['global', 'north_south_america', 'europe_middle_east_africa', 'asis_australia'],
                careersSubMenu: ['explore_roles', 'meet_us', 'prepare_for_an_interview'],
            };
        },

        mounted() {
            const fetchNavigationURLs = async () => {
                try {
                    const data = await fetch(`${process.env.strapiURL}/api/mobile-navigation-main?populate=deep,100`, {
                        headers: {
                            authorization: `Bearer ${process.env.strapiReadOnlyToken}`,
                        },
                    }).then((res) => res.json());
                    this.$store.dispatch('nav/formatMobileNavigation', data.data.attributes.navigations.data);
                } catch (err) {}
            };
            fetchNavigationURLs();
        },

        watch: {
            '$store.state.nav.open'(val) {
                if (val) {
                    document.querySelector('html').classList.add('overflow-hidden');
                } else {
                    document.querySelector('html').classList.remove('overflow-hidden');
                }
            },
        },

        methods: {
            showMobileMenu(data, type, sub) {
                this.$store.dispatch('nav/resetAllMenu').then(() => {
                    if (type === 'main') {
                        this.$store.dispatch('nav/activeMobileDropdown', data);
                        if (sub) {
                            this.$store.dispatch('nav/activeMobileDropdown', sub);
                        }
                        this.$store.dispatch('nav/openLevelNavbar', 'level1');
                    } else {
                        this.$store.dispatch('nav/activeMobileDropdown', data);
                        if (sub) {
                            this.$store.dispatch('nav/activeMobileDropdown', sub);
                        }
                        this.$store.dispatch('nav/openLevelNavbar', 'level2');
                    }
                });
            },
            hideMobileMenu(data, type, sub) {
                this.$store.dispatch('nav/resetAllMenu').then(() => {
                    if (type === 'main') {
                        this.$store.dispatch('nav/deactiveDropdown', data);
                        this.$store.dispatch('nav/openLevelNavbar', 'all');
                    } else {
                        this.$store.dispatch('nav/deactiveDropdown', data);
                        if (sub) {
                            this.$store.dispatch('nav/activeMobileDropdown', sub);
                        }
                        this.$store.dispatch('nav/openLevelNavbar', 'level1');
                    }
                });
            },
            showMenu(menu) {
                if (this.mainMenu.includes(menu)) {
                    this.dropdowns[menu] = true;
                    this.$store.dispatch('nav/openLevelNavbar', 'level1');
                } else if (this.consultingSubmenu.includes(menu)) {
                    this.dropdowns.consulting_sub_menu[menu] = true;
                    this.$store.dispatch('nav/openLevelNavbar', 'level2');
                } else if (this.bussinessPlansSubmenu.includes(menu)) {
                    this.dropdowns.bussiness_plans_sub_menu[menu] = true;
                    this.$store.dispatch('nav/openLevelNavbar', 'level2');
                } else if (this.financingSubmenu.includes(menu)) {
                    this.dropdowns.financing_sub_menu[menu] = true;
                    this.$store.dispatch('nav/openLevelNavbar', 'level2');
                } else if (this.legalAdvisorySubmenu.includes(menu)) {
                    this.dropdowns.legal_advisory_sub_menu[menu] = true;
                    this.$store.dispatch('nav/openLevelNavbar', 'level2');
                } else if (this.technologySubmenu.includes(menu)) {
                    this.dropdowns.technology_sub_menu[menu] = true;
                    this.$store.dispatch('nav/openLevelNavbar', 'level2');
                } else if (this.officesSubmenu.includes(menu)) {
                    this.dropdowns.offices_sub_menu[menu] = true;
                    this.$store.dispatch('nav/openLevelNavbar', 'level2');
                } else if (this.languageEnglishSubmenu.includes(menu)) {
                    this.dropdowns.language_english_sub_menu[menu] = true;
                    this.$store.dispatch('nav/openLevelNavbar', 'level2');
                } else if (this.careersSubMenu.includes(menu)) {
                    this.dropdowns.careers_sub_menu[menu] = true;
                    this.$store.dispatch('nav/openLevelNavbar', 'level2');
                }

                const element = document.querySelector('#menu-scroll-top');
                element.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            },

            closeMenu(menu) {
                if (this.mainMenu.includes(menu)) {
                    this.dropdowns[menu] = false;
                    this.$store.dispatch('nav/openLevelNavbar', 'all');
                } else if (this.consultingSubmenu.includes(menu)) {
                    this.dropdowns.consulting_sub_menu[menu] = false;
                    this.$store.dispatch('nav/openLevelNavbar', 'level1');
                } else if (this.bussinessPlansSubmenu.includes(menu)) {
                    this.dropdowns.bussiness_plans_sub_menu[menu] = false;
                    this.$store.dispatch('nav/openLevelNavbar', 'level1');
                } else if (this.financingSubmenu.includes(menu)) {
                    this.dropdowns.financing_sub_menu[menu] = false;
                    this.$store.dispatch('nav/openLevelNavbar', 'level1');
                } else if (this.legalAdvisorySubmenu.includes(menu)) {
                    this.dropdowns.legal_advisory_sub_menu[menu] = false;
                    this.$store.dispatch('nav/openLevelNavbar', 'level1');
                } else if (this.technologySubmenu.includes(menu)) {
                    this.dropdowns.technology_sub_menu[menu] = false;
                    this.$store.dispatch('nav/openLevelNavbar', 'level1');
                } else if (this.officesSubmenu.includes(menu)) {
                    this.dropdowns.offices_sub_menu[menu] = false;
                    this.$store.dispatch('nav/openLevelNavbar', 'level1');
                } else if (this.languageEnglishSubmenu.includes(menu)) {
                    this.dropdowns.language_english_sub_menu[menu] = false;
                    this.$store.dispatch('nav/openLevelNavbar', 'level1');
                } else if (this.careersSubMenu.includes(menu)) {
                    this.dropdowns.careers_sub_menu[menu] = false;
                    this.$store.dispatch('nav/openLevelNavbar', 'level1');
                }

                const element = document.querySelector('#menu-scroll-top');
                element.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            },
        },
    };
</script>

<style>
    .left-right-animation {
        transition: left 400ms;
    }

    .left-side-megamenu {
        transition: left 600ms ease-in-out;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
</style>
