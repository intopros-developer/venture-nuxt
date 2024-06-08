<template>
    <div class="bg-[#FBFBFD] font-proximanova text-base font-normal text-black antialiased">
        <div v-if="$store.state.nav.isDropdownOpen" class="fixed left-0 top-0 z-20 h-full w-full bg-transparent" @click="$store.dispatch('nav/deactiveAllDropdown')"></div>

        <div v-show="$store.state.nav.open" class="sidebar-left-overlay fixed left-0 top-0 z-50 h-full w-full cursor-pointer bg-black/30 transition-all duration-300" @click="$store.dispatch('nav/toggle')"></div>
        <div v-show="$store.state.nav.isMenuBarSearchExpanded" class="sidebar-left-overlay fixed left-0 top-0 z-30 h-full w-full cursor-pointer bg-black/30" @click="$store.dispatch('nav/deactiveLegacyDropdown', 'search')"></div>

        <layout-header @changeScrollPosition="changeScrollPosition" />

        <header-right-side-bar />
        <div class="mt-[106px] md:mt-[57px] xl:mt-[114px]" :class="{ 'mt-[114px]': isIndexPage }">
            <nuxt />
        </div>
        <layout-footer />
    </div>
</template>

<script>
    export default {
        name: 'Default',

        data() {
            return {
                isIndexPage: false,
                scrollPosition: null,
            };
        },

        mounted() {
            document.querySelector('html').classList.add('overflow-x-hidden');

            const wistiaScript = document.createElement('script');
            wistiaScript.src = 'https://fast.wistia.net/assets/external/iframe-api-v1.js';
            wistiaScript.defer = true;
            document.head.appendChild(wistiaScript);

            this.visiblity();

            if (typeof document.addEventListener !== 'undefined' && this.hidden !== undefined) {
                document.addEventListener(this.visibilityChange, this.handleVisibilityChange, false);
            }
        },

        methods: {
            changeScrollPosition(position, isIndexPage) {
                this.scrollPosition = position;
                this.isIndexPage = isIndexPage;
            },

            visiblity() {
                if (typeof document.hidden !== 'undefined') {
                    this.hidden = 'hidden';
                    this.visibilityChange = 'visibilitychange';
                } else if (typeof document.msHidden !== 'undefined') {
                    this.hidden = 'msHidden';
                    this.visibilityChange = 'msvisibilitychange';
                } else if (typeof document.webkitHidden !== 'undefined') {
                    this.hidden = undefined;
                    this.visibilityChange = undefined;
                }
            },

            handleVisibilityChange() {
                this.visiblity();
                if (!document[this.hidden]) {
                    document.querySelectorAll('.force-video-reload').forEach((element) => {
                        element.load();
                        element.play();
                    });
                }
            },
        },
    };
</script>
