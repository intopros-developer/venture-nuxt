import { helpers } from 'vuelidate/lib/validators';

const alphaNumericSpace = helpers.regex('alpha', /^[0-9a-zA-Z\s]*$/);

export { alphaNumericSpace };
