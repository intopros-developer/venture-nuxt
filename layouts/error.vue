<template>
    <div class="nuxt-error">
        <section class="item-center flex min-h-[calc(100vh-530px)] flex-col justify-center">
            <div class="container py-20 text-center">
                <h1 class="text-8xl font-bold text-black/70">404</h1>
                <p class="my-5">An error occurred</p>
                <nuxt-link class="text-primary hover:underline" :to="localePath('/')">Home page</nuxt-link>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'NuxtError',
        layout: 'error',

        props: {
            error: {
                type: Object,
                default: () => {},
            },
        },

        head() {
            return {
                title: '404 | Page not found',
                meta: [
                    {
                        name: 'robots',
                        content: 'noindex',
                    },
                ],
            };
        },

        mounted() {
            document.querySelector('html').classList.add('overflow-x-hidden');
        },
    };
</script>
