<template>
    <div class="">
        <iframe ref="iframe" src="https://shopify-nuxt-kit.netlify.app/" frameborder="0" width="100%" height="700px" @load="iframeLoaded"></iframe>
    </div>
</template>

<!-- <script type="text/javascript">
    function iframeLoaded() {
        const iFrameID = document.getElementById('idIframe');
        if (iFrameID) {
            // here you can make the height, I delete it first, then I make it again
            iFrameID.height = '';
            iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + 'px';
        }
    }
</script> -->
<script>
    export default {
        data() {
            return {
                height: '',
                frameHeight: '',
            };
        },

        mounted() {
            this.$nextTick(() => {
                window.addEventListener('load', () => {
                    this.frameHeight = this.$refs.iframe.contentWindow.document.body.scrollHeight + 'px';
                });
            });
        },

        methods: {
            iframeLoaded() {
                const iFrameID = this.$refs.iframe;
                // if (iFrameID) {
                //     // here you can make the height, I delete it first, then I make it again
                //     iFrameID.height = '';
                //     iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + 'px';
                // }
            },
        },
    };
</script>
