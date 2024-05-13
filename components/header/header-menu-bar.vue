<template>
    <div>
        <div class="col-span-10 col-span-3 col-span-6 col-span-9 col-span-full flex hidden w-1/3 w-1/4 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-rows-3 grid-rows-5 flex-col flex-wrap gap-x-2 gap-y-1">
            Sample Business Data push
        </div>
        <div class="show-separator-border relative border-b border-[#ede7e7] md:border-b-0 xl:px-4">
            <div class="px-4 lg:container" :class="{ relative: scrollPosition !== 'down' }">
                <div class="flex items-center justify-between py-3 xl:py-0" :class="{ '!py-3': scrollPosition == 'down' }">
                    <a href="javascript:;" class="home-header-text inline-block flex-none p-2 pl-0 text-primary md:pt-0" :class="{ 'md:pt-2': scrollPosition == 'down' }" @click="$store.dispatch('nav/toggle')">
                        <icons-hamburger class="w-[17px] !text-primary xl:w-5" />
                    </a>
                    <div class="ml-3 mr-[3px] flex flex-1 items-center justify-center gap-[17px] md:flex-none md:justify-start">
                        <div class="home-header-logo flex-none text-black">
                            <nuxt-link :to="localePath('/')">
                                <icons-logo class="w-28 lg:w-[66px] xl:w-[93px]" :class="{ 'w-28': scrollPosition == 'down' }" />
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="flex flex-none items-center justify-end gap-[10px] md:flex-1 xl:justify-between" :class="{ '!flex-none': scrollPosition == 'down' }">
                        <ul
                            v-show="scrollPosition !== 'down'"
                            class="megamenu hidden items-center text-xs font-semibold leading-[13px] text-black xl:flex xl:text-[13px] xl:leading-4"
                            :class="{ 'opacity-0 duration-300': $store.state.nav.dropdown.search }"
                        >
                            <li v-for="(mainNav, mainId) in $store.state.nav.desktopNavbar" :key="mainNav.url + mainId" class="menu group cursor-auto" @mouseleave="$store.dispatch('nav/deactiveDropdown', mainNav)">
                                <nuxt-link
                                    :to="mainNav.url"
                                    class="home-header-text inline-block px-[9px] py-8 transition-all duration-300 hover:text-primary group-hover:text-primary"
                                    @mouseenter.native="$store.dispatch('nav/activeDropdown', mainNav)"
                                    @click.native="$store.dispatch('nav/deactiveDropdown', mainNav)"
                                    >{{ mainNav.name }}</nuxt-link
                                >
                                <div v-show="mainNav.isOpened" :id="mainNav.url" class="sub-menu right-0 mx-auto grid max-w-[1198px] grid-cols-12">
                                    <template v-if="mainNav.navChildItems">
                                        <div v-for="(subNav, subId) in mainNav.navChildItems" :key="subNav.url + subId" class="bg-white px-10 py-6" :class="subNav.mainClass ? subNav.mainClass : ''">
                                            <div class="mb-6">
                                                <h3>
                                                    <nuxt-link :to="subNav.url" @click.native="$store.dispatch('nav/resetAllDesktopMenu', mainNav)" class="uppercase transition-all duration-300 hover:text-primary">{{
                                                        subNav.name
                                                    }}</nuxt-link>
                                                </h3>
                                            </div>
                                            <div
                                                v-if="subNav.navChildItems && Array.isArray(subNav.navChildItems) && subNav.navChildItems.length > 0 && Array.isArray(subNav.navChildItems[0])"
                                                class="mb-2 gap-2"
                                                :class="subNav.subClass ? subNav.subClass : 'grid grid-cols-5'"
                                            >
                                                <ul :key="nvK" v-for="(navItems, nvK) in subNav.navChildItems" class="mb-2">
                                                    <li v-for="(childNav, childId) in navItems" :key="childNav.url + childId">
                                                        <nuxt-link :to="childNav.url" @click.native="$store.dispatch('nav/resetAllDesktopMenu', mainNav)">{{ childNav.name }}</nuxt-link>
                                                        <ul v-if="childNav.navChildItems" class="sub-sub-menu">
                                                            <li v-for="(subChildNav, subChildId) in childNav.navChildItems" :key="subChildNav.url + subChildId">
                                                                <nuxt-link :to="subChildNav.url" @click.native="$store.dispatch('nav/resetAllDesktopMenu', mainNav)">{{ subChildNav.name }}</nuxt-link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </li>
                            <li class="menu group cursor-auto">
                                <nuxt-link to="/insights" class="home-header-text inline-block px-[9px] py-8 transition-all duration-300 hover:text-primary group-hover:text-primary">{{ $t('insights') }}</nuxt-link>
                            </li>
                        </ul>
                        <div class="flex flex-none items-center gap-[10px]">
                            <nuxt-link
                                v-if="$helper.isInternalUrl(this.navigationButtons.navigationButton1Link)"
                                v-show="scrollPosition !== 'down'"
                                :to="this.navigationButtons.navigationButton1Link"
                                class="hidden items-center gap-3 rounded bg-primary px-[15px] py-[7px] text-[10px] font-semibold leading-[11px] text-white transition-all duration-300 hover:bg-primary-700 md:flex xl:py-3 xl:text-xs xl:leading-4"
                            >
                                <icons-calendar class="w-3 xl:w-[17px]" />
                                <p>{{ this.navigationButtons.navigationButton1Text }}</p>
                            </nuxt-link>
                            <a
                                v-else
                                v-show="scrollPosition !== 'down'"
                                :href="this.navigationButtons.navigationButton1Link"
                                target="_blank"
                                class="hidden items-center gap-3 rounded bg-primary px-[15px] py-[7px] text-[10px] font-semibold leading-[11px] text-white transition-all duration-300 hover:bg-primary-700 md:flex xl:py-3 xl:text-xs xl:leading-4"
                            >
                                <icons-calendar class="w-3 xl:w-[17px]" />
                                <p>{{ this.navigationButtons.navigationButton1Text }}</p>
                            </a>
                            <a
                                v-show="scrollPosition !== 'down'"
                                :href="this.navigationButtons.NavigationButton2Link"
                                class="hidden items-center gap-2 rounded bg-primary px-[15px] py-[7px] text-[10px] font-semibold leading-[11px] text-white transition-all duration-300 hover:bg-primary-700 md:flex md:pl-[35.79px] md:pr-[35.8px] lg:pl-[39.55px] lg:pr-[39.55px] xl:py-3 xl:text-xs xl:leading-4"
                            >
                                <icons-phone class="h-[19px] w-3 xl:w-[17px]" />
                                <p>{{ this.navigationButtons.navigationButton2Text }}</p>
                            </a>
                            <a href="javascript:;" class="home-header-text !text-primary" @click.stop="$store.dispatch('nav/activeLegacyDropdown', 'search')">
                                <icons-search id="search-show" class="w-5" />
                            </a>

                            <Transition :duration="{ enter: 500, leave: 800 }" name="slide-left-to-right">
                                <div v-show="$store.state.nav.dropdown.search" class="absolute right-0 top-0 z-[60] mr-0 h-full w-full bg-white xl:ml-[13%] xl:w-[87%]" :class="searchExpand">
                                    <div class="relative ml-auto mt-0 flex w-full items-center justify-end gap-2 xl:mt-[13px] xl:max-w-[845px]" :class="{ '!mt-0 !max-w-full': scrollPosition == 'down' }">
                                        <div class="pl-5">
                                            <icons-search class="w-5 text-primary" />
                                        </div>
                                        <input
                                            ref="search"
                                            v-model="params.search"
                                            type="search"
                                            placeholder="Search insights, services, and experts"
                                            name=""
                                            class="form-input p-[14px] text-base text-black placeholder:text-[#bfbfbf]"
                                            @keydown.enter="onSearch()"
                                        />
                                        <button class="text-[#909090] hover:text-primary" :class="{ 'pr-5': scrollPosition == 'down' }" @click.stop="$store.dispatch('nav/deactiveLegacyDropdown', 'search')">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 57 56">
                                                <g>
                                                    <g>
                                                        <g><path fill="none" stroke="currentColor" stroke-miterlimit="20" stroke-width="2" d="M20.416 36.038L36.454 20" /></g>
                                                        <g transform="rotate(90 28.5 28)"><path fill="none" stroke="currentColor" stroke-miterlimit="20" stroke-width="2" d="M20.416 36.038L36.454 20" /></g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </button>
                                        <div
                                            class="megamenu absolute left-0 top-[55px] flex max-h-[370px] w-full flex-wrap overflow-y-auto border-t border-[#d5d5d5] bg-white px-6 pb-9 pt-4 md:max-h-fit md:overflow-y-visible"
                                            :class="[isExapndSearchDetails ? 'is-expanded' : 'is-not-expanded', scrollPosition === 'down' ? '!top-[55px]' : 'xl:!top-[68px]']"
                                        >
                                            <div class="w-full pb-4 sm:w-1/2">
                                                <h6 class="mb-[15px] w-full text-[0.85rem] font-light leading-5 text-[#767676]">{{ $t('popular_searches') }}</h6>
                                                <ul class="space-y-4 text-[15px] text-[#030303]">
                                                    <li>
                                                        <nuxt-link to="/search?search=venture Experts" class="hover:text-primary">{{ $t('venture_experts') }}</nuxt-link>
                                                    </li>
                                                    <li>
                                                        <nuxt-link to="/search?search=artificial intelligence" class="hover:text-primary">{{ $t('artificial_intelligence') }}</nuxt-link>
                                                    </li>
                                                    <li>
                                                        <nuxt-link to="/search?search=Product Engineering" class="hover:text-primary">{{ $t('product_engineering') }}</nuxt-link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="w-full border-t border-[#d5d5d5] pt-4 sm:w-1/2 sm:border-t-0 sm:pb-4 sm:pt-0">
                                                <h6 class="mb-[15px] w-full text-[0.85rem] font-light leading-5 text-[#767676]">{{ $t('previous_searches') }}</h6>
                                                <ul class="space-y-4 text-[15px] text-[#030303]">
                                                    <li>
                                                        <nuxt-link to="/search?search=New start up technology" class="hover:text-primary">{{ $t('new_start_up_technology') }}</nuxt-link>
                                                    </li>
                                                    <li>
                                                        <nuxt-link to="/search?search=New York" class="hover:text-primary">{{ $t('new_york') }}</nuxt-link>
                                                    </li>
                                                    <li>
                                                        <nuxt-link to="/search?search=Agile" class="hover:text-primary">{{ $t('agile') }}</nuxt-link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="hidden w-full border-t border-[#d5d5d5] pt-4 sm:block">
                                                <h6 class="mb-[15px] w-full text-[0.85rem] font-light leading-5 text-[#767676]">{{ $t('recently_visited_pages') }}</h6>
                                                <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                                    <nuxt-link to="/search?search=grant service" class="flex items-center gap-4 text-[15px] font-semibold text-[#030303]">
                                                        <div class="h-16 w-16 flex-none overflow-hidden rounded-md">
                                                            <img loading="lazy" src="/assets/img/hero-slider/slide-3.jpg" class="h-full w-full object-cover" />
                                                        </div>
                                                        <p>Grant Service</p>
                                                    </nuxt-link>
                                                    <nuxt-link to="/search?search=media" class="flex items-center gap-4 text-[15px] font-semibold text-[#030303]">
                                                        <div class="h-16 w-16 flex-none overflow-hidden rounded-md">
                                                            <img loading="lazy" src="/assets/img/hero-slider/slide-3.jpg" class="h-full w-full object-cover" />
                                                        </div>
                                                        <p>Media</p>
                                                    </nuxt-link>
                                                    <nuxt-link to="/search?search=careers" class="flex items-center gap-4 text-[15px] font-semibold text-[#030303]">
                                                        <div class="h-16 w-16 flex-none overflow-hidden rounded-md">
                                                            <img loading="lazy" src="/assets/img/hero-slider/slide-3.jpg" class="h-full w-full object-cover" />
                                                        </div>
                                                        <p>Careers</p>
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="scrollPosition === null" class="flex items-center justify-center gap-1 py-2 md:hidden">
            <nuxt-link
                v-if="$helper.isInternalUrl(this.navigationButtons.navigationButton1Link)"
                :to="this.navigationButtons.navigationButton1Link"
                class="flex w-[167px] items-center justify-center gap-3 rounded bg-primary px-4 py-[7px] text-[10px] leading-[11px] text-white transition-all duration-300 hover:bg-primary-700"
            >
                <icons-calendar class="h-[19px] w-3 xl:w-[17px]" />
                <p>{{ this.navigationButtons.navigationButton1Text }}</p>
            </nuxt-link>
            <a
                v-else
                target="_blank"
                :href="this.navigationButtons.navigationButton1Link"
                class="flex w-[167px] items-center justify-center gap-3 rounded bg-primary px-4 py-[7px] text-[10px] leading-[11px] text-white transition-all duration-300 hover:bg-primary-700"
            >
                <icons-calendar class="h-[19px] w-[17px]" />
                <p>{{ this.navigationButtons.navigationButton1Text }}</p>
            </a>
            <a
                :href="this.navigationButtons.NavigationButton2Link"
                class="flex w-[167px] items-center justify-center gap-2 rounded bg-primary px-4 py-[7px] text-[10px] leading-[11px] text-white transition-all duration-300 hover:bg-primary-700"
            >
                <icons-phone class="h-[19px] w-[13px]" />
                <p>{{ this.navigationButtons.navigationButton2Text }}</p>
            </a>
        </div>
    </div>
</template>

<script>
    import { toggleMenuDropdown } from '@/mixins';
    export default {
        name: 'MenuBar',

        mixins: [toggleMenuDropdown],

        props: {
            scrollPosition: {
                type: String,
                default: null,
            },
        },

        data() {
            return {
                params: {
                    search: '',
                },
                isExapndSearchDetails: false,
                navigationButtons: {},
            };
        },

        computed: {
            searchExpand() {
                let classes = '';
                if (this.scrollPosition === 'down') {
                    classes += ' !w-full !ml-0';
                }

                // if (this.$store.state.nav.isMenuBarSearchExpanded) {
                //     classes += ' is-expanded-search';
                // } else {
                //     classes += classes + ' is-not-expanded-search';
                // }
                return classes;
            },
        },

        watch: {
            '$store.state.nav.dropdown.search'(val) {
                if (val) {
                    this.$store.dispatch('nav/setIsMenuBarSearchExpanded', true);
                    setTimeout(() => {
                        this.$refs.search.focus();
                    }, 700);
                    setTimeout(() => {
                        this.isExapndSearchDetails = true;
                    }, 700);
                } else {
                    this.isExapndSearchDetails = false;
                    setTimeout(() => {
                        this.$store.dispatch('nav/setIsMenuBarSearchExpanded', false);
                    }, 700);
                }
            },
        },

        mounted() {
            this.clickEventListenerTocloseMenu();
            const fetchNavigationButtons = async () => {
                try {
                    const data = await fetch(`${process.env.strapiURL}/api/navigation-bars?populate=deep`, {
                        headers: {
                            authorization: `Bearer ${process.env.strapiReadOnlyToken}`,
                        },
                    }).then((res) => res.json());
                    this.navigationButtons = data?.data[0]?.attributes || {};
                } catch (err) {}
            };

            const fetchNavigationURLs = async () => {
                try {
                    const data = await fetch(`${process.env.strapiURL}/api/desktop-navigation-main?populate=deep,100`, {
                        headers: {
                            authorization: `Bearer ${process.env.strapiReadOnlyToken}`,
                        },
                    }).then((res) => res.json());
                    this.$store.dispatch('nav/formatDesktopNavigation', data.data.attributes.navigations.data);
                    this.$store.dispatch('nav/formatIndustriesNavigation', data.data.attributes.industries.data);
                } catch (err) {}
            };
            fetchNavigationURLs();
            fetchNavigationButtons();
        },

        methods: {
            onSearch() {
                this.$router.push(`/search?search=${this.params.search}`);
                this.params.search = '';
                this.$store.dispatch('nav/deactiveLegacyDropdown', 'search');
            },
        },
    };
</script>

<style scoped>
    .slide-left-to-right-enter-active,
    .slide-left-to-right-leave-active {
        left: 0;
        transition-property: left, opacity;
        transition-duration: 0.5s;
        transition-timing-function: linear;
    }
    .slide-left-to-right-enter-to {
        opacity: 1;
        left: 0;
        transition-property: left, opacity;
        transition-duration: 0.5s;
        transition-timing-function: linear;
    }
    .slide-left-to-right-enter {
        left: 100% !important;
    }
    .slide-left-to-right-leave-to {
        opacity: 1;
        transition-delay: 0.3s !important;
        left: 100% !important;
        transition: all 0.5s linear, opacity 0.5s;
        transition-property: left, opacity;
    }
    .is-expanded {
        transition-delay: 0s;
        transform: scaleY(1);
        transition: transform 0.25s 0.25s;
        transform-origin: 0 0;
    }
    .is-not-expanded {
        transform: scaleY(0);
        transition: all 0.25s linear;
        transform-origin: 0 0;
    }
    /* .is-expanded-search {
        transition: left 0.5s, opacity 0.5s;
        left: 0;
        visibility: visible;
        overflow: visible;
        opacity: 1;
    }
    .is-not-expanded-search {
        opacity: 1;
        left: 100%;
        transition: all 0.5s linear, opacity 0.5s;
    } */
</style>
