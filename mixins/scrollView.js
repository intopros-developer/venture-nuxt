export default {
    data() {
        return {
            lastScrollTop: 0,
            scrollPosition: null,
            activeId: '',
        };
    },

    mounted() {
        this.lastScrollTop = 0;
        document.addEventListener('scroll', this.handleScroll);
    },

    methods: {
        checkInView(id) {
            const element = document.getElementById(id);
            if (!element) return false;
            const rect = element.getBoundingClientRect();

            // checking for partial visibility
            if (rect.top < window.innerHeight && rect.bottom >= 350) {
                return true;
            }
        },

        scrollToId(id) {
            this.activeId = id;
            const element = document.getElementById(id);
            if (element) {
                const offset = this.scrollPosition === 'down' ? 200 : 200;
                window.scrollTo({
                    top: element.offsetTop - offset,
                    behavior: 'smooth',
                });
            }
        },
    },
};
