import { reactive, type Reactive } from 'vue';
import type { RecoveryStoreProps } from '~/@types';
import { isRequired, isValidEmail } from '~/features/validations/composables/formValidation';
import { IS_REQUIRED_MESSAGE, INVALID_EMAIL_MESSAGE } from '~/features/validations/config/formMessages';

const recoveryStore: () => Reactive<RecoveryStoreProps> = () => {
    const state = reactive({
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
        }
    });

    return state;
}

export default recoveryStore;