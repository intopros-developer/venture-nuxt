export default (context) => ({
    validateDateTime(dateTime) {
        return context.$dayjs(dateTime).isValid();
    },

    formatInsightPublishDate(date) {
        return this.validateDateTime(date) ? context.$dayjs.utc(date).format('MMMM DD, YYYY') : date;
    },

    isInternalUrl(url) {
        if (typeof url !== 'string') return false;
        else if (url.slice(0, 1) === '/') return true;
        else return false;
    },

    // getDayJsLocale() {

    // },
    // convertDateTimeToUTC(dateTime) {
    //     return context.$dayjs(dateTime).utc().format('YYYY-MM-DD HH:mm:ss');
    // },

    // convertDateTimeToLocal(dateTime) {
    //     return context.$dayjs.utc(dateTime).local().format('YYYY-MM-DD HH:mm:ss');
    // },

    // convertDateToLocal(dateTime) {
    //     return context.$dayjs.utc(dateTime).local().format('DD MM.YYYY');
    // },

    // displayDateTimeInLocal(dateTime) {
    //     return context.$dayjs.utc(dateTime).local().format('DD MM.YYYY hh:mm A');
    // },

    // getTimezoneOffset() {
    //     const dateArr = new Date().toString().split('GMT');
    //     const timezone = dateArr[1].split(' ')[0];
    //     return timezone.substring(0, 3) + ':' + timezone.substring(3, 5);
    // },

    // formatDateTime(value) {
    //     return this.validateDateTime(value) ? context.$dayjs.utc(value).format('YYYY-MM-DD HH:mm:ss') : '';
    // },

    // formatCustomDateTime(value, format = 'DD MMM YYYY @ hh:mmA ([GMT] Z)') {
    //     return this.validateDateTime(value) ? context.$dayjs.utc(value).local().format(format) : '';
    // },

    isEmpty(value) {
        // test results
        // ---------------
        // []        true, empty array
        // {}        true, empty object
        // null      true
        // undefined true
        // ""        true, empty string
        // ''        true, empty string
        // 0         false, number
        if (value === undefined || value === null || value === '') return true;
        if (Array.isArray(value) && value.length === 0) return true;
        if (typeof value === 'object' && Object.keys(value).length === 0) return true;
        if (typeof value === 'string' && value.trim().length === 0) return true;
        if (typeof value === 'number' && value === 0) return true;
        return false;
    },

    formatUSCurreny(value) {
        return '$' + Intl.NumberFormat('en-US').format(value);
    },

    formatUSNumber(value) {
        return value < 0 ? value : Intl.NumberFormat('en-US').format(value);
    },

    formatSpaceNumber(value) {
        return value < 0 ? value : value.toLocaleString().replace(/,/g, '  ');
    },

    toCapitalize(str) {
        const words = str.split(' ');
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    },

    isDevMode() {
        // eslint-disable-next-line no-unneeded-ternary
        return context.$config.isDevMode === true || context.$config.isDevMode === 'true' ? true : false;
    },

    requiredMessage(field) {
        return `${field} is required`;
    },

    emailMessage() {
        return `This is not a valid email`;
    },

    alphaNumSpaceMessage(field) {
        return `${field} can only contain alphanumeric characters`;
    },

    getLocalStorage(key) {
        return window.localStorage.getItem(key);
    },

    setLocalStorage(key, value) {
        window.localStorage.setItem(key, value);
    },

    toSnakeCase(str = '') {
        const strArr = str.split(' ');
        const snakeArr = strArr.reduce((acc, val) => {
            return acc.concat(val.toLowerCase());
        }, []);
        return snakeArr.join('_');
    },

    getContentFullLangCode() {
        const array = {
            en: 'en',
            pt_br: 'pt-BR',
            es_ar: 'es-AR',
            es_cl: 'es-CL',
            es_co: 'es-CO',
            fr: 'fr',
            de_ch: 'de-CH',
            it: 'it',
            es: 'es',
            ru: 'ru',
            zh: 'zh',
            ko: 'ko',
            ja: 'ja',
            zh_tw: 'zh-TW',
            zh_hk: 'zh-HK',
        };

        return array[context.i18n.locale.replaceAll('-', '_')];
    },

    filterMap(sections, sectionName) {
        return sections
            .filter((s) => s.fields.sectionName === sectionName)
            .map((s) => {
                return s.fields;
            });
    },

    UUID() {
        let dt = new Date().getTime();
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
        return uuid;
    },

    isDeviceIphone() {
        return navigator.userAgent.includes('iPhone');
    },

    parseData(value) {
        if (Array.isArray(value?.data)) {
            return value?.data.map((data) => {
                return { ...data?.attributes };
            });
        } else if (typeof value?.data?.attributes === 'object') {
            return { ...value?.data?.attributes };
        } else if (typeof value?.attributes === 'object') {
            return { ...value?.attributes };
        } else if (typeof value?.data === 'object') {
            return { ...value?.data };
        } else {
            return { ...value };
        }
    },
});
