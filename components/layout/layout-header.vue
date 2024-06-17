<template>
    <header
        class="absolute top-0 z-40 w-full border-b border-white/20 bg-white shadow-[0px_1px_8px_rgba(0,0,0,0.08)] transition-all duration-700"
        :class="{ 'home-header': isIndexPage && !$store.state.nav.isDropdownOpen && scrollPosition == null && !$store.state.nav.isMenuBarSearchExpanded, '!fixed !shadow-none': scrollPosition !== null }"
    >
        <!-- Top Header -->
        <header-top-bar v-show="scrollPosition !== 'down'" />

        <!-- Menu Bar -->
        <header-menu-bar :scroll-position="scrollPosition" />
    </header>
</template>

<script>
    export default {
        name: 'Header',

        data() {
            return {
                lastScrollTop: 0,
                scrollPosition: null,
            };
        },

        mounted() {
            this.lastScrollTop = 0;
            document.addEventListener('scroll', this.handleScroll);
        },

        computed: {
            isIndexPage() {
                return this.$route.name?.split('___')[0] == 'index';
            },
        },

        beforeDestroy() {
            document.removeEventListener('scroll', this.handleScroll(), false);
        },

        methods: {
            handleScroll() {
                const st = window.pageYOffset || document.documentElement.scrollTop;
                if (st > this.lastScrollTop) {
                    this.scrollPosition = 'down';
                } else {
                    this.scrollPosition = 'up';
                }

                this.lastScrollTop = st <= 0 ? 0 : st;

                if ((window.innerWidth < 768 && this.lastScrollTop <= 100) || (window.innerWidth > 767 && this.lastScrollTop <= 20)) {
                    this.scrollPosition = null;
                }

                this.$emit('changeScrollPosition', this.scrollPosition, this.isIndexPage);
            },
        },
    };
</script>
