<template>
    <!-- <section class="sticky z-20 block border-b-2 border-[#CFCFCF] bg-white" :class="scrollPosition === 'up' ? 'top-[55px] md:top-[57px] xl:top-[106px]' : 'top-[54px] lg:top-[47px] xl:top-[54px]'"> -->
    <section class="sticky z-20 block border-b-2 border-[#CFCFCF] bg-white" :class="scrollPosition === 'up' ? 'top-[56px] md:top-[58px] xl:top-[114px]' : 'top-[56px] lg:top-[55px] xl:top-[54px]'">
        <div class="container relative lg:px-[97px] xl:px-4">
            <div class="flex items-center justify-between gap-2">
                <div id="banner_header_tab" class="w-[940px] overflow-x-auto overflow-y-hidden lg:overflow-visible">
                    <ul class="pb-0.5 lg:pb-0">
                        <scrollactive
                            class="my-nav flex items-center gap-6 text-[11px] font-medium leading-[13px] -tracking-[-0.02px] text-[#353535] xl:gap-8 xl:text-[13px] xl:leading-5 xl:-tracking-[-0.03px]"
                            :modify-url="false"
                            :offset="scrollPosition === 'up' ? 200 : 160"
                            :scroll-offset="scrollPosition === 'up' ? 200 : 160"
                            :exact="true"
                            @itemchanged="onItemChanged"
                        >
                            <li>
                                <popper
                                    ref="role"
                                    trigger="click"
                                    :options="{
                                        placement: 'bottom-start',
                                        modifiers: { offset: { offset: '0,0' }, arrow: { enabled: false }, shift: { enabled: false } },
                                        preventOverflow: {
                                            padding: 0,
                                        },
                                    }"
                                    @show="isOpenFindRole = true"
                                    @hide="isOpenFindRole = false"
                                >
                                    <div class="popper absolute !left-0 !top-11 z-[10] max-w-[180px] border border-[#ededed] bg-white !shadow-[0_3px_6px_rgba(0,0,0,0.16)] lg:!left-11 lg:!top-[1px]">
                                        <ul class="text-base -tracking-[0.03px] text-[#030303]">
                                            <li class="border-b border-[#f1f1f1]">
                                                <nuxt-link
                                                    :to="localePath('/careers/contact-form')"
                                                    class="group flex items-center gap-2 px-2.5 py-3.5 text-[11px] text-xs font-light text-[#030303] transition-all duration-300 hover:bg-gray-100 hover:bg-primary hover:text-white"
                                                    @click.stop="$refs.share.doClose()"
                                                >
                                                    <p>{{ $t('summer_internship') }}</p>
                                                </nuxt-link>
                                            </li>
                                            <li class="border-b border-[#f1f1f1]">
                                                <nuxt-link
                                                    :to="localePath('/careers/contact-form')"
                                                    class="group flex items-center gap-2 px-2.5 py-3.5 text-[11px] text-xs font-light text-[#030303] transition-all duration-300 hover:bg-gray-100 hover:bg-primary hover:text-white"
                                                    @click.stop="$refs.share.doClose()"
                                                >
                                                    <p>{{ $t('associate_consultant_internship') }}</p>
                                                </nuxt-link>
                                            </li>
                                            <li class="border-b border-[#f1f1f1]">
                                                <nuxt-link
                                                    :to="localePath('/careers/contact-form')"
                                                    class="group flex items-center gap-2 px-2.5 py-3.5 text-[11px] text-xs font-light text-[#030303] transition-all duration-300 hover:bg-gray-100 hover:bg-primary hover:text-white"
                                                    @click.stop="$refs.share.doClose()"
                                                >
                                                    <p>{{ $t('consultant_jd_phd') }}</p>
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link
                                                    :to="localePath('/careers/contact-form')"
                                                    class="group flex items-center gap-2 px-2.5 py-3.5 text-[11px] text-xs font-light text-[#030303] transition-all duration-300 hover:bg-gray-100 hover:bg-primary hover:text-white"
                                                    @click.stop="$refs.share.doClose()"
                                                >
                                                    <p>{{ $t('associate_consultant') }}</p>
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link
                                                    :to="localePath('/careers/contact-form')"
                                                    class="group flex items-center gap-2 px-2.5 py-3.5 text-[11px] text-xs font-light text-[#030303] transition-all duration-300 hover:bg-gray-100 hover:bg-primary hover:text-white"
                                                    @click.stop="$refs.share.doClose()"
                                                >
                                                    <p>{{ $t('professional_and_functional') }}</p>
                                                </nuxt-link>
                                            </li>
                                        </ul>
                                    </div>

                                    <button slot="reference" :aria-label="$t('find_roles')" class="flex items-center justify-center whitespace-nowrap py-4 hover:text-primary" :class="{ '!text-primary': isOpenFindRole }">
                                        {{ $t('find_roles') }}
                                        <icons-downarrow class="ml-1 rotate-0 text-primary" :class="{ '!rotate-180': isOpenFindRole }" />
                                    </button>
                                </popper>
                            </li>
                            <li v-for="tab in tabs" :key="tab.id">
                                <a
                                    :id="`tab_${tab.id}`"
                                    :href="`#${tab.id}`"
                                    class="scrollactive-item inline-block whitespace-nowrap py-4 hover:text-primary"
                                    :class="{ 'relative text-primary before:absolute before:left-0 before:-bottom-[2px] before:h-[3px] before:w-full before:bg-primary': activeId === tab.id }"
                                >
                                    {{ $t(tab.title) }}
                                </a>
                            </li>
                        </scrollactive>
                    </ul>
                </div>
                <common-share :is-show-save-btn="true" />
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                lastScrollTop: 0,
                scrollPosition: null,
                activeId: '',
                isOpenFindRole: false,
                tabs: [
                    {
                        id: 'careersAtVenturePlans',
                        title: 'careers_at_venture_plans',
                    },
                    {
                        id: 'overview',
                        title: 'overview',
                    },
                    {
                        id: 'professionalFunctionalPositions',
                        title: 'professional_nd_functional_positions',
                    },
                    {
                        id: 'ourFounder',
                        title: 'our_founder',
                    },
                    {
                        id: 'readyToTalk',
                        title: 'ready_to_talk',
                    },
                    {
                        id: 'faqs',
                        title: 'faqs',
                    },
                ],
            };
        },

        beforeDestroy() {
            document.removeEventListener('scroll', this.handleScroll(), false);
        },

        mounted() {
            this.lastScrollTop = 0;
            document.addEventListener('scroll', this.handleScroll);
            document.addEventListener('scroll', () => {
                this.$refs?.role?.doClose();
            });
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
