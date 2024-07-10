export default function ({ $axios, $toast, $config }, inject) {
    $axios.onError((error) => {
        if (error.response.status !== 401 && error.response.data.errors) {
            const obj = error.response.data.errors;
            if (obj.length) {
                $toast.error(obj[0].message);
            }
        }
        if (error.response.data.error) {
            $toast.error(error.response.data.error);
        }

        if (error.response.status !== 401 && error.response.data.message) {
            $toast.error(error.response.data.message);
        }
    });

    $axios.onResponse((response) => {
        if (response.data) {
            if (response.data.success) {
                $toast.success(response.data.success);
            }

            if (response.data.error) {
                $toast.error(response.data.error);
            }
        }
    });

    // Laravel axios instance
    const strapiInstance = $axios.create({
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: 'Bearer ' + $config.strapiReadOnlyToken,
        },
        credentials: true,
    });
    strapiInstance.setBaseURL(process.env.STRAPI_URL);
    inject('strapiInstance', strapiInstance);

    strapiInstance.onError((error) => {
        if (error.response.data && error.response.data.data && error.response.data.data.length && error.response.data.data[0].message) $toast.error(error.response.data.data[0].message);
        // WP Error Handeler
        else if (error.response.data.errors) {
            // strapi Error Handeler
            const obj = error.response.data.errors;
            $toast.error(obj[Object.keys(obj)[0]][0]);
        }
    });

    strapiInstance.onResponse((response) => {
        if (response.data && response.data.success && response.data.data && response.data.data.success) $toast.success(response.data.data.success);
    });
}
