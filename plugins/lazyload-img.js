import Vue from 'vue';

Vue.directive('lazyload-img', {
    bind(el, binding) {
        function loadImage() {
            const imageUrl = binding.value;
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            el.src = imageUrl;
                            observer.disconnect();
                        }
                    });
                });
                observer.observe(el);
            } else {
                el.src = imageUrl;
            }
        }

        if (binding.value) {
            loadImage();
        }
    },
});
