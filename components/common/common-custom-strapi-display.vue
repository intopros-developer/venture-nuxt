<template>
    <p v-if="data" class="custom-html-data" :class="classes" v-html="data"></p>
</template>
<script>
    export default {
        props: {
            data: {
                type: String,
                default: ``,
            },
            classes: {
                type: String,
                default: '',
            },
        },
    };
</script>
