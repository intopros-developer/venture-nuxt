<template>
    <!-- <section class="sticky z-20 block border-b-2 border-[#CFCFCF] bg-white" :class="scrollPosition === 'up' ? 'top-[55px] md:top-[57px] xl:top-[106px]' : 'top-[54px] lg:top-[47px] xl:top-[54px]'"> -->
    <section class="sticky z-20 block border-b-2 border-[#CFCFCF] bg-white" :class="scrollPosition === 'up' ? 'top-[56px] md:top-[58px] xl:top-[114px]' : 'top-[55px] lg:top-[55px] xl:top-[54px]'">
        <div class="container relative lg:px-[97px] xl:px-4">
            <div class="flex items-center justify-between gap-2">
                <div id="banner_header_tab" class="w-[940px] overflow-x-auto overflow-y-hidden lg:overflow-visible">
                    <ul class="pb-0.5 lg:pb-0">
                        <scrollactive
                            class="my-nav flex items-center gap-6 text-[11px] font-medium leading-[13px] -tracking-[-0.02px] text-black-700 xl:gap-8 xl:text-[13px] xl:font-normal xl:leading-5 xl:-tracking-[-0.03px]"
                            :modify-url="false"
                            :offset="scrollPosition === 'up' ? 200 : 160"
                            :scroll-offset="scrollPosition === 'up' ? 200 : 160"
                            :exact="true"
                            @itemchanged="onItemChanged"
                        >
                            <li v-for="tab in tabs" :key="tab.id">
                                <a
                                    :id="`tab_${tab.id}`"
                                    :href="`#${tab.id}`"
                                    class="scrollactive-item inline-block whitespace-nowrap py-4 hover:text-primary"
                                    :class="{ 'relative text-primary before:absolute before:left-0 before:-bottom-[2px] before:h-[3px] before:w-full before:bg-primary': activeId === tab.id }"
                                >
                                    {{ tab.title }}
                                </a>
                            </li>
                        </scrollactive>
                    </ul>
                </div>
                <common-share :is-show-save-btn="isShowSaveBtn" />
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            tabs: {
                type: Array,
                default: () => [],
            },
            isShowSaveBtn: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
                lastScrollTop: 0,
                scrollPosition: null,
                activeId: '',
            };
        },

        beforeDestroy() {
            document.removeEventListener('scroll', this.handleScroll(), false);
        },

        mounted() {
            this.lastScrollTop = 0;
            document.addEventListener('scroll', this.handleScroll);
        },

        methods: {
            onItemChanged(event, currentItem, lastActiveItem) {
                if (currentItem) {
                    const id = currentItem.getAttribute('id');
                    this.activeId = id.replace('tab_', '');

                    const parent = document.querySelector('#banner_header_tab');
                    const activeSpan = document.querySelector(`#${id}`);
                    parent.scrollTo({ left: activeSpan.offsetLeft - window.innerWidth / 2 + activeSpan.offsetWidth, top: 0, behavior: 'smooth' });
                }
            },

            handleScroll() {
                const st = window.pageYOffset || document.documentElement.scrollTop;
                if (st > this.lastScrollTop) {
                    this.scrollPosition = 'down';
                } else {
                    this.scrollPosition = 'up';
                }

                this.lastScrollTop = st <= 0 ? 0 : st;

                if (this.lastScrollTop <= 20) {
                    this.scrollPosition = null;
                    this.activeId = '';
                }
            },
        },
    };
</script>
