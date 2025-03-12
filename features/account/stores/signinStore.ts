import { reactive } from 'vue';
import type { SigninStoreProps } from '~/@types';
import { hasMinLength, isRequired, isValidEmail } from '~/features/validations/composables/formValidation';
import { INVALID_EMAIL_MESSAGE, IS_REQUIRED_MESSAGE, MIN_LENGTH_MESSAGE } from '~/features/validations/config/formMessages';

const useSigninStore = () => {
    const state = reactive<SigninStoreProps>({
        success: false,
        errors: {},
        email: {
            value: '',
            test: false,
            rules: [
                isRequired,
                isValidEmail,
            ],
            messages: [
                IS_REQUIRED_MESSAGE,
                INVALID_EMAIL_MESSAGE,
            ]
        },
        password: {
            value: '',
            test: false,
            rules: [
                isRequired,
                hasMinLength(6),
            ],
            messages: [
                IS_REQUIRED_MESSAGE,
                MIN_LENGTH_MESSAGE.replace('%s', '6'),
            ]
        },
    });

    return state;
};

export default useSigninStore;