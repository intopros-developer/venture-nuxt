<template>
    <client-only>
        <apexchart :type="type" :options="options" :series="series"></apexchart>
    </client-only>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: 'VueApexchartLoader',
        components: {
            apexchart: VueApexCharts,
        },
        props: {
            type: String,
            options: Object,
            series: Array,
        },
    };
</script>
