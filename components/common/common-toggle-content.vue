<template>
    <div>
        <div class="relative">
            <div ref="dummyComp" style="display: none" v-html="content"></div>
            <p :key="updateBox" ref="customToggleContainer" class="custom-html-data overflow-hidden" :class="contentClass" v-html="textBoxContent"></p>
            <div v-if="hasReadMore" :style="expanded || !showBlur ? 'display:none' : 'display:block;height: 28px;overflow:hidden;'" :class="expanded ? contentClass : ''">
                &nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet asperiores at dolor, ducimus earum eligendi, esse facilis illum impedit iure laborum, nobis possimus quo reprehenderit soluta tempora ut vero!&nbsp;
            </div>
            <div v-if="hasReadMore && showBlur" :class="!expanded ? 'toggle-gradient' : ''"></div>
        </div>
        <button v-if="hasReadMore" class="mt-[25px] flex gap-3.5 text-base font-semibold text-primary" :class="readMoreClass" @click="toggleContentShow">
            read {{ expanded ? 'less' : 'more' }}
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" class="h-1 w-2 xl:h-[6px] xl:w-[11px]">
                <g>
                    <g><path fill="currentColor" d="M.439.546l4.907 4.907L10.254.546z"></path></g>
                </g>
            </svg>
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            content: {
                type: String,
                default: '',
            },
            contentClass: {
                type: String,
                default: '!leading-normal text-lg',
            },
            showBlur: {
                type: Boolean,
                default: true,
            },
            readMoreClass: {
                type: String,
                default: 'w-full items-center justify-center',
            },
            nl2br: {
                type: Boolean,
                default: true,
            },
            only_mobile: {
                type: Boolean,
                default: false,
            },
            show_more_label: {
                type: String,
                default: 'read_more',
            },
            blurHeight: {
                type: Number,
                default: 24,
            },
            showAll: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
                expanded: false,
                firstElementTag: null,
                secondElementTag: null,
                perLineHeight: 0,
                hasReadMore: false,
                textBoxContent: ``,
                textBoxFullContent: ``,
                updateBox: 1,
            };
        },
        mounted() {
            this.textBoxContent = this.content;
            this.textBoxFullContent = this.content;
            this.hideCustomContent();
            if (this.showAll) {
                this.toggleContentShow();
            }
            // this.perLineHeight = parseInt(getComputedStyle(this.$refs.customToggleContainer.$el).lineHeight);
            // console.log(this.$refs.customToggleContainer.$el.firstChild)
        },
        methods: {
            hideCustomContent() {
                const customContainerElement = this.$refs.dummyComp;
                if (customContainerElement.firstChild) {
                    if (customContainerElement.children.length > 1) {
                        this.hasReadMore = true;
                        this.textBoxContent = customContainerElement.firstChild.innerHTML;
                    } else {
                        this.hasReadMore = false;
                        this.textBoxContent = this.content;
                    }
                }
                this.updateBox += 1;
            },
            toggleContentShow() {
                this.expanded = !this.expanded;
                if (this.expanded) {
                    this.textBoxContent = this.content;
                } else {
                    this.hideCustomContent();
                }
                this.updateBox += 1;
            },
        },
    };
</script>
<style scoped>
    .toggle-gradient {
        position: absolute;
        bottom: 0;
        width: 100%;
        background-image: linear-gradient(rgba(255, 255, 255, 0.5), #fbfbfd);
        backdrop-filter: blur(4px);
        height: 28px;
        overflow: hidden;
    }
</style>
