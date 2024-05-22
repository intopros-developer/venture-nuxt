<template>
    <div class="nuxt-error">
        <section class="item-center flex min-h-[calc(100vh-530px)] flex-col justify-center">
            <div class="container py-20 text-center">
                <h1 v-if="error.statusCode === 404" class="text-8xl font-bold text-black/70">404</h1>
                <h1 v-else class="text-3xl font-bold text-black/70">An error occurred</h1>
                <p class="my-5">{{ error.message || 'Page not found' }}</p>
                <nuxt-link class="text-primary" :to="localePath('/')">Home page</nuxt-link>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'NuxtError',
        layout: 'default',

        props: {
            error: {
                type: Object,
                default: () => {},
            },
        },

        mounted() {
            document.querySelector('html').classList.add('overflow-x-hidden');
        },
    };
</script>
