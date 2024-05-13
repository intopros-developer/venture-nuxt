export default {
    methods: {
        clickEventListenerTocloseMenu() {
            document.querySelectorAll('.megamenu ul > li > a').forEach((el) => {
                el.addEventListener('click', (e) => {
                    this.$store.dispatch('nav/deactiveAllDropdown');
                    // if (e.target.offsetParent) {
                    //     if (e.target.offsetParent.previousElementSibling.children[1]) {
                    //         e.target.offsetParent.previousElementSibling.children[1].children[0].classList.remove('menu-icon-open');
                    //     }

                    //     e.target.offsetParent.previousElementSibling.classList.remove('submenu-open');
                    //     // e.target.offsetParent.classList.toggle('hidden');
                    //     this.$store.dispatch('nav/deactiveDropdown', e.target.offsetParent.previousElementSibling.getAttribute('id'));
                    //     document.removeEventListener('click', this.detectOutsideClick, false);
                    // }
                });
            });

            document.querySelectorAll('.megamenu div > a').forEach((el) => {
                el.addEventListener('click', (e) => {
                    this.$store.dispatch('nav/deactiveAllDropdown');
                });
            });
        },

        // detectOutsideClick(e) {
        //     if (e.target === null || e.target.offsetParent === undefined || e.target.offsetParent === null || e.target.classList === null || (!e.target.offsetParent.classList.contains('sub-menu') && !e.target.classList.contains('submenu-open'))) {
        //         if (document.querySelector('.menu .submenu-open')) {
        //             if (document.querySelector('.menu .submenu-open').children[1]) {
        //                 document.querySelector('.menu .submenu-open').children[1].children[0].classList.remove('menu-icon-open');
        //                 document.querySelector('.menu .submenu-open').children[1].children[0].classList.add('menu-icon-close');
        //             }

        //             // document.querySelector('.menu .submenu-open').nextElementSibling.classList.toggle('hidden');
        //             this.$store.dispatch('nav/deactiveDropdown', document.querySelector('.menu .submenu-open').nextElementSibling.getAttribute('id'));
        //             document.querySelector('.menu .submenu-open').classList.remove('submenu-open');
        //             document.removeEventListener('click', this.detectOutsideClick, false);
        //         }
        //     }
        // },

        // toggleMenuDropdown(event) {
        //     if (event.target.classList.contains('submenu-open')) {
        //         if (event.target.children[1]) {
        //             event.target.children[1].children[0].classList.remove('menu-icon-open');
        //             event.target.children[1].children[0].classList.add('menu-icon-close');
        //         }

        //         // event.target.nextElementSibling.classList.toggle('hidden');
        //         this.$store.dispatch('nav/deactiveDropdown', event.target.nextElementSibling.getAttribute('id'));
        //         event.target.classList.remove('submenu-open');

        //         document.removeEventListener('click', this.detectOutsideClick, false);
        //     } else {
        //         if (document.querySelector('.menu .submenu-open')) {
        //             if (document.querySelector('.menu .submenu-open').children[1]) {
        //                 document.querySelector('.menu .submenu-open').children[1].children[0].classList.remove('menu-icon-open');
        //                 document.querySelector('.menu .submenu-open').children[1].children[0].classList.add('menu-icon-close');
        //             }

        //             // document.querySelector('.menu .submenu-open').nextElementSibling.classList.toggle('hidden');
        //             this.$store.dispatch('nav/deactiveDropdown', document.querySelector('.menu .submenu-open').nextElementSibling.getAttribute('id'));
        //             document.querySelector('.menu .submenu-open').classList.remove('submenu-open');
        //         }

        //         if (event.target.children[1]) {
        //             event.target.children[1].children[0].classList.remove('menu-icon-close');
        //             event.target.children[1].children[0].classList.add('menu-icon-open');
        //         }

        //         event.target.classList.add('submenu-open');
        //         // event.target.nextElementSibling.classList.toggle('hidden');
        //         this.$store.dispatch('nav/activeDropdown', event.target.nextElementSibling.getAttribute('id'));

        //         document.addEventListener('click', this.detectOutsideClick);
        //     }
        // },

        // toggleMenuDropdownHover(event) {
        //     if (document.querySelector('.menu .submenu-open')) {
        //         if (document.querySelector('.menu .submenu-open').children[1]) {
        //             document.querySelector('.menu .submenu-open').children[1].children[0].classList.remove('menu-icon-open');
        //             document.querySelector('.menu .submenu-open').children[1].children[0].classList.add('menu-icon-close');
        //         }

        //         // document.querySelector('.menu .submenu-open').nextElementSibling.classList.toggle('hidden');
        //         this.$store.dispatch('nav/deactiveDropdown', document.querySelector('.menu .submenu-open').nextElementSibling.getAttribute('id'));

        //         document.querySelector('.menu .submenu-open').classList.remove('submenu-open');
        //     }

        //     if (event.target.children[1]) {
        //         event.target.children[1].children[0].classList.remove('menu-icon-close');
        //         event.target.children[1].children[0].classList.add('menu-icon-open');
        //     }

        //     event.target.classList.add('submenu-open');
        //     // event.target.nextElementSibling.classList.toggle('hidden');
        //     this.$store.dispatch('nav/activeDropdown', event.target.nextElementSibling.getAttribute('id'));

        //     document.addEventListener('click', this.detectOutsideClick);
        // },

        // closeMenuDropdown(event) {
        //     const dealyCloseDropdownMenu = setTimeout(() => {
        //         if (event.target.offsetParent === null || event.target.classList === null || (!event.target.offsetParent.classList.contains('sub-menu') && !event.target.classList.contains('submenu-open'))) {
        //             if (document.querySelector('.menu .submenu-open')) {
        //                 if (document.querySelector('.menu .submenu-open').children[1]) {
        //                     document.querySelector('.menu .submenu-open').children[1].children[0].classList.remove('menu-icon-open');
        //                     document.querySelector('.menu .submenu-open').children[1].children[0].classList.add('menu-icon-close');
        //                 }

        //                 // document.querySelector('.menu .submenu-open').nextElementSibling.classList.toggle('hidden');
        //                 this.$store.dispatch('nav/deactiveDropdown', document.querySelector('.menu .submenu-open').nextElementSibling.getAttribute('id'));
        //                 document.querySelector('.menu .submenu-open').classList.remove('submenu-open');
        //                 document.removeEventListener('click', this.detectOutsideClick, false);
        //             }
        //         }
        //     }, 500);

        //     this.$store.dispatch('nav/setDelayCloseDropdownMenu', dealyCloseDropdownMenu);
        // },
    },
};
