<template>
    <div class="grid flex-none grid-cols-2 gap-3 sm:gap-[22px] md:w-full md:max-w-sm lg:max-w-[422px] xl:max-w-[660px] xl:gap-[34px]">
        <div class="rounded-xl bg-white shadow-[0px_1px_8px_rgba(0,161,241,0.12)]">
            <div class="flex items-center gap-2 border-b border-[#707070]/20 px-7 py-3">
                <p class="text-sm font-semibold leading-8 text-[#5CAFCE] sm:text-[28px] xl:text-[46px] xl:leading-[56px]">{{ chart1.avgCount }}</p>
                <p class="text-left text-[10px] font-extrabold leading-[14px] -tracking-[0.03px] text-[#707070] sm:text-sm xl:text-[15px] xl:leading-[22px]">
                    {{ $t('industry_consultants') }}
                </p>
            </div>
            <div class="px-2 py-3 text-center">
                <!-- <client-only>
                    <apexchart type="radialBar" :options="chartRadialBar.options" :series="chart1.series"></apexchart>
                </client-only> -->
            </div>
        </div>
        <div class="rounded-xl bg-white shadow-[0px_1px_8px_rgba(0,161,241,0.12)]">
            <div class="flex items-center gap-2 border-b border-[#707070]/20 px-7 py-3">
                <p class="text-sm font-semibold leading-8 text-[#5CAFCE] sm:text-[28px] xl:text-[46px] xl:leading-[56px]">{{ chart2.avgCount }}</p>
                <p class="text-left text-[10px] font-extrabold leading-[14px] -tracking-[0.03px] text-[#707070] sm:text-sm xl:text-[15px] xl:leading-[22px]">
                    {{ $t('raised') }}
                </p>
            </div>
            <div class="px-2 py-3 text-center">
                <!-- <client-only>
                    <apexchart type="radialBar" :options="chartRadialBar.options" :series="chart1.series"></apexchart>
                </client-only> -->
            </div>
        </div>
        <div class="rounded-xl bg-white shadow-[0px_1px_8px_rgba(0,161,241,0.12)]">
            <div class="flex items-center gap-2 border-b border-[#707070]/20 px-7 py-3">
                <p class="text-sm font-semibold leading-8 text-[#5CAFCE] sm:text-[28px] xl:text-[46px] xl:leading-[56px]">{{ chart3.avgCount }}</p>
                <p class="text-left text-[10px] font-extrabold leading-[14px] -tracking-[0.03px] text-[#707070] sm:text-sm xl:text-[15px] xl:leading-[22px]">
                    {{ $t('business_plans_written') }}
                </p>
            </div>
            <div class="px-2 py-3 text-center">
                <!-- <client-only>
                    <apexchart type="radialBar" :options="chartRadialBar.options" :series="chart1.series"></apexchart>
                </client-only> -->
            </div>
        </div>
        <div class="rounded-xl bg-white shadow-[0px_1px_8px_rgba(0,161,241,0.12)]">
            <div class="flex items-center gap-2 border-b border-[#707070]/20 px-7 py-3">
                <p class="text-sm font-semibold leading-8 text-[#5CAFCE] sm:text-[28px] xl:text-[46px] xl:leading-[56px]">{{ chart4.avgCount }}</p>
                <p class="text-left text-[10px] font-extrabold leading-[14px] -tracking-[0.03px] text-[#707070] sm:text-sm xl:text-[15px] xl:leading-[22px]">
                    {{ $t('years_of_experience') }}
                </p>
            </div>
            <div class="px-2 py-3 text-center">
                <!-- <client-only>
                    <apexchart type="radialBar" :options="chartRadialBar.options" :series="chart1.series"></apexchart>
                </client-only> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeSectorExcelled',
        data() {
            return {
                raisedToChart: {
                    32: [15, 90, 10, 45, 30, 50, 35, 70, 49],
                    36: [10, 45, 35, 80, 49, 35, 60, 45, 49],
                    34: [15, 90, 10, 45, 30, 50, 35, 70, 49],
                    26: [10, 20, 35, 51, 49, 50, 35, 99, 49],
                    31: [15, 90, 10, 45, 30, 50, 35, 70, 49],
                    33: [10, 20, 35, 51, 49, 50, 35, 99, 49],
                    38: [10, 45, 35, 80, 49, 35, 60, 45, 49],
                    25: [10, 45, 35, 80, 49, 35, 60, 45, 49],
                    332: [10, 85, 40, 51, 90, 40, 35, 20, 49],
                    30: [15, 90, 10, 45, 30, 50, 35, 70, 49],
                    334: [10, 20, 35, 51, 49, 50, 35, 99, 49],
                },
                chartRadialBar: {
                    options: {
                        chart: {
                            height: 300,
                            type: 'radialBar',
                            width: '100%',
                            zoom: {
                                enabled: false,
                            },
                        },
                        plotOptions: {
                            radialBar: {
                                dataLabels: {
                                    name: {
                                        show: false,
                                        fontSize: '0px',
                                    },
                                    value: {
                                        fontSize: '36px',
                                        fontWeight: 700,
                                        color: '#051057',
                                        offsetY: 58,
                                    },
                                    total: {
                                        show: true,
                                        label: 'Total',
                                        formatter(w) {
                                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                            return parseInt(w.config.series.reduce((a, b) => a + b, 0) / w.config.series.length);
                                        },
                                    },
                                    track: {
                                        show: true,
                                        width: '50',
                                        opacity: 1,
                                        margin: 5,
                                        dropShadow: {
                                            enabled: false,
                                            top: 0,
                                            left: 0,
                                            blur: 3,
                                            opacity: 0.5,
                                        },
                                    },
                                },
                                hollow: {
                                    size: '60%',
                                },
                            },
                        },
                        stroke: {
                            lineCap: 'round',
                        },
                        fill: {
                            type: 'solid',
                            colors: ['#00ADFF', '#9DDEFF'],
                        },
                        tooltip: {
                            enabled: false,
                        },
                        states: {
                            hover: {
                                filter: {
                                    type: 'none',
                                    value: 0,
                                },
                            },
                        },
                    },
                },
                chartArea: {
                    options: {
                        chart: {
                            height: 300,
                            type: 'area',
                            width: '100%',
                            zoom: {
                                enabled: false,
                            },
                            toolbar: {
                                show: false,
                            },
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        stroke: {
                            curve: 'straight',
                            colors: ['#00ADFF'],
                            width: 1,
                        },
                        markers: {
                            size: 3,
                            colors: ['#00ADFF'],
                        },
                        colors: ['#00ADFF'],
                        grid: {
                            borderColor: '#E8E8E8',
                            backgroundColor: '#E8E8E8',
                            xaxis: {
                                lines: {
                                    show: true,
                                },
                                labels: {
                                    show: false,
                                },
                            },
                            yaxis: {
                                lines: {
                                    show: true,
                                },
                            },
                        },
                        plotOptions: {
                            area: {
                                fillTo: 'end',
                            },
                        },
                        xaxis: {
                            labels: {
                                show: false,
                                offsetX: 0,
                                offsetY: 0,
                                maxHeight: 0,
                            },
                            axisBorder: {
                                show: false,
                                height: 0,
                            },
                            tooltip: {
                                enabled: false,
                            },
                            axisTicks: {
                                show: false,
                            },
                        },
                        yaxis: {
                            labels: {
                                show: false,
                                offsetX: 0,
                                offsetY: 0,
                                maxHeight: 0,
                            },
                            axisBorder: {
                                show: false,
                                height: 0,
                            },
                        },
                        tooltip: {
                            enabled: true,
                            custom({ series, seriesIndex, dataPointIndex, w }) {
                                return '<div class="apexchart-tooltip">' + '<span>' + series[seriesIndex][dataPointIndex] + 'MM</span>' + '</div>';
                            },
                        },
                    },
                },
                chart1: {
                    series: [60, 96],
                    // avgCount: parseInt(this.chart1.series.reduce((a, b) => a + b, 0) / this.chart1.series.length),
                },
                chart2: {
                    series: [
                        {
                            data: [10, 20, 35, 51, 49, 50, 35, 99, 49],
                        },
                    ],
                    avgCount: '35MM',
                },
                chart3: {
                    series: [500, 800],
                    // avgCount: parseInt(this.chart3.series.reduce((a, b) => a + b, 0) / this.chart3.series.length),
                },
                chart4: {
                    series: [
                        {
                            data: [10, 20, 35, 51, 49, 50, 35, 99, 49],
                        },
                    ],
                    avgCount: 10,
                },
            };
        },

        mounted() {
            if (window.innerWidth <= 576) {
                this.chartRadialBar.options.plotOptions.radialBar.hollow.size = '40%';
                this.chartRadialBar.options.plotOptions.radialBar.dataLabels.value.fontSize = '16px';
                this.chartRadialBar.options.plotOptions.radialBar.dataLabels.value.offsetY = 6;
            } else if (window.innerWidth <= 768) {
                this.chartRadialBar.options.plotOptions.radialBar.hollow.size = '40%';
                this.chartRadialBar.options.plotOptions.radialBar.dataLabels.value.fontSize = '20px';
                this.chartRadialBar.options.plotOptions.radialBar.dataLabels.value.offsetY = 8;
            } else if (window.innerWidth <= 1240) {
                this.chartRadialBar.options.plotOptions.radialBar.hollow.size = '60%';
                this.chartRadialBar.options.plotOptions.radialBar.dataLabels.value.fontSize = '28px';
                this.chartRadialBar.options.plotOptions.radialBar.dataLabels.value.offsetY = 12;
            } else {
                this.chartRadialBar.options.plotOptions.radialBar.hollow.size = '60%';
                this.chartRadialBar.options.plotOptions.radialBar.dataLabels.value.fontSize = '40px';
                this.chartRadialBar.options.plotOptions.radialBar.dataLabels.value.offsetY = 16;
            }
        },

        methods: {
            updateChart(service) {
                const chart1Md = parseInt(service.attributes.industryConsultant);
                const chart1p1 = parseInt(service.attributes.industryConsultant) / 2;
                const chart1p2 = chart1Md * 2 - chart1p1;
                this.chart1.series = [chart1p1, chart1p2];
                this.chart1.avgCount = parseInt(service.attributes.industryConsultant);

                const chart2Md = parseInt(service.attributes.businessPlansWritten);
                const chart2p1 = parseInt(service.attributes.businessPlansWritten) / 2;
                const chart2p2 = chart2Md * 2 - chart2p1;

                this.chart3.series = [chart2p1, chart2p2];
                this.chart3.avgCount = parseInt(service.attributes.businessPlansWritten);

                if (service.attributes.sectorName === 'Commercial Real Estate') {
                    this.chart2 = {
                        series: [
                            {
                                data: [10, 20, 35, 51, 49, 50, 35, 99, 49],
                            },
                        ],
                        avgCount: '34MM',
                    };
                    this.chart4 = {
                        series: [
                            {
                                data: [10, 20, 35, 51, 49, 50, 35, 99, 49],
                            },
                        ],
                        avgCount: 12,
                    };
                } else if (service.attributes.sectorName === 'Education & E-Learning') {
                    this.chart2 = {
                        series: [
                            {
                                data: [10, 45, 35, 80, 49, 35, 60, 45, 49],
                            },
                        ],
                        avgCount: '38MM',
                    };

                    this.chart4 = {
                        series: [
                            {
                                data: [10, 85, 40, 51, 90, 40, 35, 20, 49],
                            },
                        ],
                        avgCount: 15,
                    };
                } else if (service.attributes.sectorName === 'Software/Apps & Telecommunications') {
                    this.chart2 = {
                        series: [
                            {
                                data: [15, 90, 10, 45, 30, 50, 35, 70, 49],
                            },
                        ],
                        avgCount: '32MM',
                    };

                    this.chart4 = {
                        series: [
                            {
                                data: [10, 15, 60, 50, 85, 35, 40, 65, 49],
                            },
                        ],
                        avgCount: 10,
                    };
                } else if (service.attributes.sectorName === 'Cannabis') {
                    this.chart2 = {
                        series: [
                            {
                                data: [10, 45, 35, 80, 49, 35, 60, 45, 49],
                            },
                        ],
                        avgCount: '36MM',
                    };

                    this.chart4 = {
                        series: [
                            {
                                data: [10, 85, 40, 51, 90, 40, 35, 20, 49],
                            },
                        ],
                        avgCount: 8,
                    };
                } else if (service.attributes.sectorName === 'Financial Services') {
                    this.chart2 = {
                        series: [
                            {
                                data: [15, 90, 10, 45, 30, 50, 35, 70, 49],
                            },
                        ],
                        avgCount: '34MM',
                    };

                    this.chart4 = {
                        series: [
                            {
                                data: [10, 15, 60, 50, 85, 35, 40, 65, 49],
                            },
                        ],
                        avgCount: 9,
                    };
                } else if (service.attributes.sectorName === 'Law, Consulting & Accounting Brokerage, Insurance') {
                    this.chart2 = {
                        series: [
                            {
                                data: [10, 20, 35, 51, 49, 50, 35, 99, 49],
                            },
                        ],
                        avgCount: '26MM',
                    };

                    this.chart4 = {
                        series: [
                            {
                                data: [10, 20, 35, 51, 49, 50, 35, 99, 49],
                            },
                        ],
                        avgCount: 5,
                    };
                } else if (service.attributes.sectorName === 'Clean Tech') {
                    this.chart2 = {
                        series: [
                            {
                                data: [15, 90, 10, 45, 30, 50, 35, 70, 49],
                            },
                        ],
                        avgCount: '31MM',
                    };

                    this.chart4 = {
                        series: [
                            {
                                data: [10, 15, 60, 50, 85, 35, 40, 65, 49],
                            },
                        ],
                        avgCount: 9,
                    };
                } else if (service.attributes.sectorName === 'Medical Technology, Biotech, Healthcare & Fitness') {
                    this.chart2 = {
                        series: [
                            {
                                data: [10, 20, 35, 51, 49, 50, 35, 99, 49],
                            },
                        ],
                        avgCount: '33MM',
                    };

                    this.chart4 = {
                        series: [
                            {
                                data: [10, 20, 35, 51, 49, 50, 35, 99, 49],
                            },
                        ],
                        avgCount: 9,
                    };
                } else if (service.attributes.sectorName === 'Automation, Artificial Intelligence') {
                    this.chart2 = {
                        series: [
                            {
                                data: [10, 45, 35, 80, 49, 35, 60, 45, 49],
                            },
                        ],
                        avgCount: '38MM',
                    };

                    this.chart4 = {
                        series: [
                            {
                                data: [10, 85, 40, 51, 90, 40, 35, 20, 49],
                            },
                        ],
                        avgCount: 12,
                    };
                } else if (service.attributes.sectorName === 'Consumer Products & Services') {
                    this.chart2 = {
                        series: [
                            {
                                data: [10, 45, 35, 80, 49, 35, 60, 45, 49],
                            },
                        ],
                        avgCount: '25MM',
                    };

                    this.chart4 = {
                        series: [
                            {
                                data: [15, 90, 10, 45, 30, 50, 35, 70, 49],
                            },
                        ],
                        avgCount: 6,
                    };
                } else if (service.attributes.sectorName === 'Manufacturing, Aerospace & Defense') {
                    this.chart2 = {
                        series: [
                            {
                                data: [10, 85, 40, 51, 90, 40, 35, 20, 49],
                            },
                        ],
                        avgCount: '32MM',
                    };

                    this.chart4 = {
                        series: [
                            {
                                data: [10, 45, 35, 80, 49, 35, 60, 45, 49],
                            },
                        ],
                        avgCount: 9,
                    };
                } else if (service.attributes.sectorName === 'Blockchain & Digital Transformation') {
                    this.chart2 = {
                        series: [
                            {
                                data: [15, 90, 10, 45, 30, 50, 35, 70, 49],
                            },
                        ],
                        avgCount: '30MM',
                    };

                    this.chart4 = {
                        series: [
                            {
                                data: [10, 15, 60, 50, 85, 35, 40, 65, 49],
                            },
                        ],
                        avgCount: 8,
                    };
                }
            },
        },
    };
</script>
