<template>
    <div>
        <section class="pt-10 pb-6">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <h1 class="text-[40px] font-medium uppercase">Startup Form</h1>
                <p class="text-md pt-[24px] font-light leading-[14px]">To enable us for better assessment please fill in all the required details below</p>
            </div>
        </section>
        <div class="h-[1px] w-full bg-[#646464]/25"></div>
        <section class="container py-12">
            <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
            <script>
                hbspt.forms.create({
                    region: 'na1',
                    portalId: '22527844',
                    formId: '549be3dd-74d7-42b7-bf3e-c80c5ef6dc4b',
                });
            </script>
        </section>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Start Up Form | Venture Plans',
                meta: [
                    {
                        name: 'robots',
                        content: 'index, all',
                    },
                ],
            };
        },
    };
</script>
