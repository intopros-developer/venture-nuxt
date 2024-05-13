<template>
    <div class="flex w-[53px] cursor-pointer items-center justify-between">
        <a v-if="isShowSaveBtn" href="javascript:;" class="text-[#5f5f60] hover:text-primary" :class="{'text-white':textWhite , 'text-[#5f5f60]':!textWhite}"
            ><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
        </a>
        <div v-if="isShowSaveBtn && !insights" class="relative mx-1.5 h-[17px] w-px flex-none bg-[#aeaeaf]/30"></div>
        <popper
            ref="share"
            trigger="clickToToggle"
            :append-to-body="true"
            :options="{
                placement: 'bottom-start',
                modifiers: { offset: { offset: '0,16px' }, arrow: { enabled: false }, shift: { enabled: false } },
                preventOverflow: {
                    padding: 0,
                },
            }"
            @show="isOpenShare = true"
            @hide="isOpenShare = false"
        >
            <div class="popper absolute right-0 z-[10] w-[167px] border border-[#ededed] bg-white !shadow-[0_3px_6px_rgba(0,0,0,0.16)] lg:!-left-16" :class="popperClass">
                <ul class="text-base -tracking-[0.03px]" :class="{'text-white':textWhite , 'text-[#707070]':!textWhite}">  
                    <li class="border-b border-[#f1f1f1]">
                        <p class="p-2.5 text-[13px] text-[#030303]">{{ $t('share_on') }}</p>
                    </li>
                    <li class="border-b border-[#f1f1f1]">
                        <a
                            class="hover:bg-gray-100 group flex items-center gap-2 px-2.5 py-3.5 text-xs text-[#030303] transition-all duration-300 hover:bg-primary hover:text-white"
                            href="javascript:;"
                            @click="shareLink('facebook'), $refs.share.doClose()"
                        >
                            <icons-facebook class="h-4 w-4 text-primary transition-all duration-300 group-hover:text-white" />
                            <p>{{ $t('facebook') }}</p>
                        </a>
                    </li>
                    <li class="border-b border-[#f1f1f1]">
                        <a
                            class="hover:bg-gray-100 group flex items-center gap-2 px-2.5 py-3.5 text-xs text-[#030303] transition-all duration-300 hover:bg-primary hover:text-white"
                            href="javascript:;"
                            @click="shareLink('linkedin'), $refs.share.doClose()"
                        >
                            <icons-linkedin class="h-4 w-4 text-primary transition-all duration-300 group-hover:text-white" />
                            <p>{{ $t('linkedin') }}</p>
                        </a>
                    </li>
                    <li>
                        <a
                            class="hover:bg-gray-100 group flex items-center gap-2 px-2.5 py-3.5 text-xs text-[#030303] transition-all duration-300 hover:bg-primary hover:text-white"
                            href="javascript:;"
                            @click="shareLink('twitter'), $refs.share.doClose()"
                        >
                            <icons-twitter class="h-4 w-4 text-primary transition-all duration-300 group-hover:text-white" />
                            <p>{{ $t('twitter') }}</p>
                        </a>
                    </li>
                </ul>
            </div>

            <div slot="reference" href="javascript:;" class="transition-all duration-300 hover:text-primary" :class="{ '!text-primary': isOpenShare, 'text-white':textWhite , 'text-[#707070]':!textWhite }">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                </svg>
            </div>
        </popper>
    </div>
</template>

<script>
    export default {
        props: {
            isShowSaveBtn: {
                type: Boolean,
                default: false,
            },
            textWhite:{
                type:Boolean,
                default:false
            },
            insights: {
                type: Boolean,
                default: false,
            },
            popperClass: {
                type: String,
                default: '',
            },
            customLink: String
        },

        data() {
            return {
                isOpenShare: false,
            };
        },

        mounted() {
            document.addEventListener('scroll', () => {
                this.$refs?.share?.doClose();
            });
        },

        methods: {
            shareLink(media) {
                const mediaLink =
                    media === 'facebook'
                        ? 'https://www.facebook.com/sharer/sharer.php?u='
                        : media === 'twitter'
                        ? 'https://twitter.com/intent/tweet?text='
                        : media === 'instagram'
                        ? 'https://msng.link/o/?'
                        : media === 'linkedin'
                        ? 'https://www.linkedin.com/sharing/share-offsite/?url='
                        : '';
                const url = this.customLink && typeof this.customLink ==='string' ? 
                              this.customLink.includes("/insights/") 
                              ? mediaLink + window.location.origin + this.customLink  
                              : mediaLink + window.location.href + this.customLink 
                            : `${mediaLink + encodeURIComponent(window.location.href)}`;
                window.open(url, '_blank');
            },
        },
    };
</script>
