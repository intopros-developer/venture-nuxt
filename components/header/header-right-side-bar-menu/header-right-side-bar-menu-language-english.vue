<template>
    <li>
        <button aria-label="Language | English" class="rightmenu-link group flex items-center justify-start gap-3 px-6 py-2 text-center text-black" @click="showMenu('language_english')">
            <p class="[&>span]:text-black/30 [&>span]:group-hover:text-primary">Language <span>|</span> English</p>
            <icons-right-menu-arrow class="text-primary" />
        </button>
        <Transition>
            <div v-show="dropdowns.language_english" class="left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white">
                <div class="flex flex-col">
                    <button aria-label="Back" class="text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary" @click="closeMenu('language_english')">
                        <icons-right-menu-arrow class="rotate-180" />
                        <p class="text-[#BFBFBF]">Back</p>
                    </button>
                    <div class="mt-[22px]">
                        <p class="px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black">Select your region and language</p>
                        <ul class="text-[13px] font-normal leading-4 text-black">
                            <li>
                                <button aria-label="Global" class="rightmenu-link flex items-center justify-start gap-3 px-6 py-[10px] text-center" @click="showMenu('global')">
                                    <p>Global</p>
                                    <icons-right-menu-arrow class="text-primary" />
                                </button>
                                <Transition>
                                    <div v-show="dropdowns.language_english_sub_menu.global" class="left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white">
                                        <div class="flex flex-col">
                                            <button aria-label="Back" class="text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary" @click="closeMenu('global')">
                                                <icons-right-menu-arrow class="rotate-180" />
                                                <p class="text-[#BFBFBF]">Back</p>
                                            </button>
                                            <div class="mt-[22px]">
                                                <p class="px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black">Global</p>
                                                <ul class="text-[13px] font-normal leading-4 text-black">
                                                    <li @click="$store.dispatch('nav/toggle')">
                                                        <button aria-label="Global (English)" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center">
                                                            <img v-lazyload-img="'/images/flags/flag-global.webp'" class="w-[22px]" alt="Global (English)" loading="lazy" width="22" height="15" />
                                                            <p>Global (English)</p>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>
                            </li>
                            <li>
                                <button aria-label="North & South America" class="rightmenu-link flex items-center justify-start gap-3 px-6 py-[10px] text-center" @click="showMenu('north_south_america')">
                                    <p>North & South America</p>
                                    <icons-right-menu-arrow class="text-primary" />
                                </button>
                                <Transition>
                                    <div v-show="dropdowns.language_english_sub_menu.north_south_america" class="left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white">
                                        <div class="flex flex-col">
                                            <button
                                                aria-label="Back"
                                                class="text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary"
                                                @click="closeMenu('north_south_america')"
                                            >
                                                <icons-right-menu-arrow class="rotate-180" />
                                                <p class="text-[#BFBFBF]">Back</p>
                                            </button>
                                            <div class="mt-[22px]">
                                                <p class="px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black">North & South America</p>
                                                <ul class="text-[13px] font-normal leading-4 text-black">
                                                    <li>
                                                        <button aria-label="Brazil (Português)" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-brazil.webp'" alt="Brazil (Português)" loading="lazy" width="22" height="15" />
                                                            <p>Brazil (Português)</p>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button aria-label="Argentina (Español)" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-argentina.webp'" alt="Argentina (Español)" loading="lazy" width="22" height="15" />
                                                            <p>Argentina (Español)</p>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button aria-label="Chile (Español)" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-chile.webp'" alt="Chile (Español)" loading="lazy" width="22" height="15" />
                                                            <p>Chile (Español)</p>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button aria-label="Colombia (Español)" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-colombia.webp'" alt="Colombia (Español)" loading="lazy" width="22" height="15" />
                                                            <p>Colombia (Español)</p>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button aria-label="Canada" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-canada.webp'" alt="Canada" loading="lazy" width="22" height="15" />
                                                            <p>Canada</p>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>
                            </li>
                            <li>
                                <button aria-label="Europe, Middle East & Africa" class="rightmenu-link flex items-center justify-start gap-3 px-6 py-[10px] text-center" @click="showMenu('europe_middle_east_africa')">
                                    <p>Europe, Middle East & Africa</p>
                                    <icons-right-menu-arrow class="text-primary" />
                                </button>
                                <Transition>
                                    <div v-show="dropdowns.language_english_sub_menu.europe_middle_east_africa" class="left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white">
                                        <div class="flex flex-col">
                                            <button
                                                aria-label="Back"
                                                class="text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary"
                                                @click="closeMenu('europe_middle_east_africa')"
                                            >
                                                <icons-right-menu-arrow class="rotate-180" />
                                                <p class="text-[#BFBFBF]">Back</p>
                                            </button>
                                            <div class="mt-[22px]">
                                                <p class="px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black">Europe, Middle East & Africa</p>
                                                <ul class="text-[13px] font-normal leading-4 text-black">
                                                    <li>
                                                        <button aria-label="France (Français)" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-france.webp'" alt="France (Français)" loading="lazy" width="22" height="15" />
                                                            <p>France (Français)</p>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button aria-label="Germany / Switzerland (Deutsch)" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-germany.webp'" class="w-[22px]" width="22" height="15" alt="Germany" loading="lazy" />
                                                            <p>Germany / Switzerland (Deutsch)</p>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button aria-label="Italy (Italiano)" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-italy.webp'" class="w-[22px]" width="22" height="15" alt="Italy" loading="lazy" />
                                                            <p>Italy (Italiano)</p>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button aria-label="Spain (Español)" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-spain.webp'" class="w-[22px]" width="22" height="15" alt="Spain (Español)" loading="lazy" />
                                                            <p>Spain (Español)</p>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button aria-label="Russia (Русский)" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-russia.webp'" class="w-[22px]" width="22" height="15" alt="Russia (Русский)" loading="lazy" />
                                                            <p>Russia (Русский)</p>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button aria-label="England" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-uk.webp'" class="w-[22px]" width="22" height="15" alt="England" loading="lazy" />
                                                            <p>England</p>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>
                            </li>
                            <li>
                                <button aria-label="Asia & Australia" class="rightmenu-link flex items-center justify-start gap-3 px-6 py-[10px] text-center" @click="showMenu('asis_australia')">
                                    <p>Asia & Australia</p>
                                    <icons-right-menu-arrow class="text-primary" />
                                </button>
                                <Transition>
                                    <div v-show="dropdowns.language_english_sub_menu.asis_australia" class="left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white">
                                        <div class="flex flex-col">
                                            <button
                                                aria-label="Back"
                                                class="text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary"
                                                @click="closeMenu('asis_australia')"
                                            >
                                                <icons-right-menu-arrow class="rotate-180" />
                                                <p class="text-[#BFBFBF]">Back</p>
                                            </button>
                                            <div class="mt-[22px]">
                                                <p class="px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black">Asia & Australia</p>
                                                <ul class="text-[13px] font-normal leading-4 text-black">
                                                    <li>
                                                        <button aria-label="China (中文版)" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-uk.webp'" class="w-[22px]" width="22" height="15" alt="China (中文版)" loading="lazy" />
                                                            <p>China (中文版)</p>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button aria-label="Korea (한국어)" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-korea.webp'" class="w-[22px]" width="22" height="15" alt="Korea (한국어)" loading="lazy" />
                                                            <p>Korea (한국어)</p>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button aria-label="Japan (日本語)" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-japan.webp'" class="w-[22px]" width="22" height="15" alt="Japan (日本語)" loading="lazy" />
                                                            <p>Japan (日本語)</p>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button aria-label="Taiwan (日本語)" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-taiwan.webp'" class="w-[22px]" width="22" height="15" alt="Taiwan (日本語)" loading="lazy" />
                                                            <p>Taiwan (日本語)</p>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button aria-label="Hong Kong (日本語)" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-hongkong.webp'" class="w-[22px]" width="22" height="15" alt="Hong Kong (日本語)" loading="lazy" />
                                                            <p>Hong Kong (日本語)</p>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button aria-label="Australia" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-australia.webp'" class="w-[22px]" width="22" height="15" alt="Australia" loading="lazy" />
                                                            <p>Australia</p>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button aria-label="Iran" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <img v-lazyload-img="'/images/flags/flag-iran.webp'" class="w-[22px]" width="22" height="15" alt="Iran" loading="lazy" />
                                                            <p>Iran</p>
                                                        </button>
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
</template>

<script>
    export default {
        props: {
            dropdowns: {
                type: Object,
                default: () => {},
            },
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
