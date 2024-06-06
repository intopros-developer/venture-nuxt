import Vue from 'vue';

Vue.directive('lazyload-bg', {
    bind(el, binding) {
        function loadImage() {
            const imageUrl = binding.value;
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            el.style.backgroundImage = `url(${imageUrl})`;
                            observer.disconnect();
                        }
                    });
                });
                observer.observe(el);
            } else {
                el.style.backgroundImage = `url(${imageUrl})`;
            }
        }

        if (binding.value) {
            loadImage();
        }
    },
});
