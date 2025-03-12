import { reactive } from "vue";
import { isRequired, hasMinLength, isEqual, isValidEmail } from "~/features/validations/composables/formValidation";
import { IS_REQUIRED_MESSAGE, INVALID_EMAIL_MESSAGE, MIN_LENGTH_MESSAGE, EQUAL_PASSWORD_MESSAGE } from "~/features/validations/config/formMessages";
import type { SignupStoreProps } from '~/@types';

const useSignupStore = () => {
    const state: any = reactive<SignupStoreProps>({
        success: false,
        errors: {},
        firstName: {
            value: "",
            test: false,
            rules: [
                isRequired,
                hasMinLength(3),
            ],
            messages: [
                IS_REQUIRED_MESSAGE,
                MIN_LENGTH_MESSAGE.replace("%s", "3")
            ],
        },
        lastName: {
            value: "",
            test: false,
            rules: [
                isRequired,
                hasMinLength(3),
            ],
            messages: [
                IS_REQUIRED_MESSAGE,
                MIN_LENGTH_MESSAGE.replace("%s", "3")
            ],
        },
        email: {
            value: "",
            test: false,
            rules: [
                isRequired,
                isValidEmail,
            ],
            messages: [
                IS_REQUIRED_MESSAGE,
                INVALID_EMAIL_MESSAGE
            ],
        },
        password: {
            value: "",
            test: false,
            rules: [
                isRequired,
                hasMinLength(6),
            ],
            messages: [
                IS_REQUIRED_MESSAGE,
                MIN_LENGTH_MESSAGE.replace("%s", "6")
            ],
        },
        confirmPassword: {
            value: "",
            test: false,
            rules: [
                isRequired,
                hasMinLength(6),
                isEqual<string>(() => [state.password.value, state.confirmPassword.value]),
            ],
            messages: [
                IS_REQUIRED_MESSAGE,
                MIN_LENGTH_MESSAGE.replace("%s", "6"),
                EQUAL_PASSWORD_MESSAGE
            ],
        },
    });

    return state;
};

export default useSignupStore;
