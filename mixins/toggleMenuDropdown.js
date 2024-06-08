export default {
    methods: {
        clickEventListenerTocloseMenu() {
            document.querySelectorAll('.megamenu ul > li > a').forEach((el) => {
                el.addEventListener('click', (e) => {
                    this.$store.dispatch('nav/deactiveAllDropdown');
                });
            });

            document.querySelectorAll('.megamenu div > a').forEach((el) => {
                el.addEventListener('click', (e) => {
                    this.$store.dispatch('nav/deactiveAllDropdown');
                });
            });
        },
    },
};
