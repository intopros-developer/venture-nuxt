<template>
    <section class="py-10 md:py-16 xl:py-20">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div id="materialityAssesment" class="mb-10 flex items-center justify-center gap-[33px] text-center">
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                <h2 class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl">MATERIAL <span class="text-primary">TOPICS</span></h2>
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
            </div>
            <div class="shadow-[0_1px_8px_rgba(0,0,0,0.1)]">
                <div class="overflow-x-auto border-b-2 border-[#cfcfcf] px-4 md:px-8">
                    <ul id="topic_header_tab" class="flex items-center gap-6 overflow-y-hidden text-[13px] font-medium -tracking-[-0.02px] text-black-700 xl:gap-8 xl:text-base xl:font-normal xl:leading-5 xl:-tracking-[-0.03px]">
                        <li v-for="(topic, i) in topicList" :key="i">
                            <button
                                :id="`topic_${$helper.toSnakeCase(topic)}`"
                                class="inline-block whitespace-nowrap py-4"
                                :class="{ 'relative before:absolute before:left-0 before:-bottom-[2px] before:h-[3px] before:w-full before:bg-primary': activeTab === topic }"
                                @click="changeTab(topic)"
                                :aria-label="topic"
                            >
                                {{ topic }}
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="p-4 font-light text-[#353535] md:p-8 md:text-lg xl:text-xl xl:leading-9">
                    <div class="space-y-6">
                        <p v-if="topicDescription" class="whitespace-pre-line">{{ topicDescription.fields.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            values: {
                type: Array,
                default: () => [],
            },
        },

        data() {
            return {
                activeTab: '',
                topicList: [],
            };
        },

        computed: {
            topicDescription() {
                return this.values.find((value) => value.fields.title === this.activeTab);
            },
        },

        mounted() {
            this.topicList = this.values.map((value) => value.fields.title);
            this.activeTab = this.topicList[0];
        },

        methods: {
            changeTab(topic) {
                this.activeTab = topic;
                const parent = document.querySelector('#topic_header_tab');
                const activeSpan = document.querySelector(`#topic_${this.$helper.toSnakeCase(topic)}`);
                parent.scrollTo({ left: activeSpan.offsetLeft - window.innerWidth / 2 + activeSpan.offsetWidth, top: 0, behavior: 'smooth' });
            },
        },
    };
</script>
