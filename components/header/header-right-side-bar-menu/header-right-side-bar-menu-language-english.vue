<template>
    <li>
        <a href="javascript:;" class="rightmenu-link group flex items-center justify-start gap-3 px-6 py-2 text-center text-black" @click="showMenu('language_english')">
            <p class="[&>span]:text-black/30 [&>span]:group-hover:text-primary">Language <span>|</span> English</p>
            <icons-right-menu-arrow class="text-primary" />
        </a>
        <Transition>
            <div v-show="dropdowns.language_english" class="left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white">
                <div class="flex flex-col">
                    <a href="javascript:;" class="text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary" @click="closeMenu('language_english')">
                        <icons-right-menu-arrow class="rotate-180" />
                        <p class="text-[#BFBFBF]">Back</p>
                    </a>
                    <div class="mt-[22px]">
                        <p class="px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black">Select your region and language</p>
                        <ul class="text-[13px] font-normal leading-4 text-black">
                            <li>
                                <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-3 px-6 py-[10px] text-center" @click="showMenu('global')">
                                    <p>Global</p>
                                    <icons-right-menu-arrow class="text-primary" />
                                </a>
                                <Transition>
                                    <div v-show="dropdowns.language_english_sub_menu.global" class="left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white">
                                        <div class="flex flex-col">
                                            <a href="javascript:;" class="text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary" @click="closeMenu('global')">
                                                <icons-right-menu-arrow class="rotate-180" />
                                                <p class="text-[#BFBFBF]">Back</p>
                                            </a>
                                            <div class="mt-[22px]">
                                                <p class="px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black">Global</p>
                                                <ul class="text-[13px] font-normal leading-4 text-black">
                                                    <li @click="$store.dispatch('nav/toggle')">
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center">
                                                            <nuxt-img format="webp" src="/assets/img/flag-global.png" class="w-[22px]" alt="Global (English)" loading="lazy" width="22" height="15" />
                                                            <p>Global (English)</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>
                            </li>
                            <li>
                                <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-3 px-6 py-[10px] text-center" @click="showMenu('north_south_america')">
                                    <p>North & South America</p>
                                    <icons-right-menu-arrow class="text-primary" />
                                </a>
                                <Transition>
                                    <div v-show="dropdowns.language_english_sub_menu.north_south_america" class="left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white">
                                        <div class="flex flex-col">
                                            <a
                                                href="javascript:;"
                                                class="text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary"
                                                @click="closeMenu('north_south_america')"
                                            >
                                                <icons-right-menu-arrow class="rotate-180" />
                                                <p class="text-[#BFBFBF]">Back</p>
                                            </a>
                                            <div class="mt-[22px]">
                                                <p class="px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black">North & South America</p>
                                                <ul class="text-[13px] font-normal leading-4 text-black">
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/flag-brazil.png" alt="Brazil (Português)" loading="lazy" width="22" height="15" quality="100" />
                                                            <p>Brazil (Português)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/flag-argentina.png" alt="Argentina (Español)" loading="lazy" width="22" height="15" quality="100" />
                                                            <p>Argentina (Español)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/flag-chile.png" alt="Chile (Español)" loading="lazy" width="22" height="15" quality="100" />
                                                            <p>Chile (Español)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/flag-colombia.png" alt="Colombia (Español)" loading="lazy" width="22" height="15" quality="100" />
                                                            <p>Colombia (Español)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/canada.jpg" alt="Canada" loading="lazy" width="22" height="15" quality="100" />
                                                            <p>Canada</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>
                            </li>
                            <li>
                                <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-3 px-6 py-[10px] text-center" @click="showMenu('europe_middle_east_africa')">
                                    <p>Europe, Middle East & Africa</p>
                                    <icons-right-menu-arrow class="text-primary" />
                                </a>
                                <Transition>
                                    <div v-show="dropdowns.language_english_sub_menu.europe_middle_east_africa" class="left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white">
                                        <div class="flex flex-col">
                                            <a
                                                href="javascript:;"
                                                class="text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary"
                                                @click="closeMenu('europe_middle_east_africa')"
                                            >
                                                <icons-right-menu-arrow class="rotate-180" />
                                                <p class="text-[#BFBFBF]">Back</p>
                                            </a>
                                            <div class="mt-[22px]">
                                                <p class="px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black">Europe, Middle East & Africa</p>
                                                <ul class="text-[13px] font-normal leading-4 text-black">
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/flag-france.png" alt="France (Français)" loading="lazy" width="22" height="15" quality="100" />
                                                            <p>France (Français)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/flag-germany.png" class="w-[22px]" width="22" height="15" alt="Germany" loading="lazy" />
                                                            <p>Germany / Switzerland (Deutsch)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/flag-italy.png" class="w-[22px]" width="22" height="15" alt="Italy" loading="lazy" />
                                                            <p>Italy (Italiano)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/flag-spain.png" class="w-[22px]" width="22" height="15" alt="Spain (Español)" loading="lazy" />
                                                            <p>Spain (Español)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/flag-russia.png" class="w-[22px]" width="22" height="15" alt="Russia (Русский)" loading="lazy" />
                                                            <p>Russia (Русский)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/uk.jpg" class="w-[22px]" width="22" height="15" alt="England" loading="lazy" />
                                                            <p>England</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>
                            </li>
                            <li>
                                <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-3 px-6 py-[10px] text-center" @click="showMenu('asis_australia')">
                                    <p>Asia & Australia</p>
                                    <icons-right-menu-arrow class="text-primary" />
                                </a>
                                <Transition>
                                    <div v-show="dropdowns.language_english_sub_menu.asis_australia" class="left-right-animation pointer-events-auto absolute left-full top-0 h-full w-full bg-white">
                                        <div class="flex flex-col">
                                            <a href="javascript:;" class="text flex items-center gap-[10px] border-b border-[#707070]/20 px-6 py-[17px] text-sm font-medium leading-[17px] text-primary" @click="closeMenu('asis_australia')">
                                                <icons-right-menu-arrow class="rotate-180" />
                                                <p class="text-[#BFBFBF]">Back</p>
                                            </a>
                                            <div class="mt-[22px]">
                                                <p class="px-6 pb-[19px] text-[13px] font-semibold leading-4 text-black">Asia & Australia</p>
                                                <ul class="text-[13px] font-normal leading-4 text-black">
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/flag-chaina.png" class="w-[22px]" width="22" height="15" alt="China (中文版)" loading="lazy" />
                                                            <p>China (中文版)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/flag-korea.png" class="w-[22px]" width="22" height="15" alt="Korea (한국어)" loading="lazy" />
                                                            <p>Korea (한국어)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/flag-japan.png" class="w-[22px]" width="22" height="15" alt="Japan (日本語)" loading="lazy" />
                                                            <p>Japan (日本語)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/flag-taiwan.png" class="w-[22px]" width="22" height="15" alt="Taiwan (日本語)" loading="lazy" />
                                                            <p>Taiwan (日本語)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/flag-hongkong.png" class="w-[22px]" width="22" height="15" alt="Hong Kong (日本語)" loading="lazy" />
                                                            <p>Hong Kong (日本語)</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/australia.png" class="w-[22px]" width="22" height="15" alt="Australia" loading="lazy" />
                                                            <p>Australia</p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;" class="rightmenu-link flex items-center justify-start gap-2 px-6 py-[10px] text-center" @click="$store.dispatch('nav/toggle')">
                                                            <nuxt-img format="webp" src="/assets/img/iran.png" class="w-[22px]" width="22" height="15" alt="Iran" loading="lazy" />
                                                            <p>Iran</p>
                                                        </a>
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
