export default {
    computed: {
        currentLocale() {
            const locale = this.$i18n.locales.filter((i) => i.code === this.$i18n.locale);
            if (locale.length > 0) {
                return locale[0].name;
            }
            return 'English';
        },
    },

    methods: {
        async switchLang(code) {
            // await this.$i18n.setLocale(code);
        },
    },
};
