import { reactive } from "vue";
import { isRequired, isValidEmail, hasMinLength } from "~/features/validations/composables/formValidation";

type ValidationRule = (value: string) => string;
type ValidationSchema = Record<string, ValidationRule[]>;

const useSignUpStore = () => reactive({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {} as Record<string, string>,
    validations: {
        firstName: [isRequired, hasMinLength(3)],
        lastName: [isRequired, hasMinLength(3)],
        email: [isRequired, isValidEmail],
        password: [isRequired],
        confirmPassword: [isRequired],
    } as ValidationSchema,

    validateField(fieldName: keyof typeof useSignUpStore) {
        const value = this[fieldName] as string;
        const rules: any = this.validations[fieldName];

        for (const rule of rules) {
            const error = rule(value);
            if (error) return error;
        }

        return "";
    },

    validateForm() {
        for (const field in this.validations) {
            const fieldName = field as keyof typeof useSignUpStore;
            const errorMessage = this.validateField(fieldName);

            if (errorMessage) {
                this.errors[fieldName] = errorMessage;
                continue;
            }

            delete this.errors[fieldName];
        }
    },
});

export default useSignUpStore;
