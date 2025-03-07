import { reactive } from "vue";
import { isRequired, isValidEmail, hasMinLength, isEqual } from "~/features/validations/composables/formValidation";

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
        password: [
            isRequired,
            // Declare a função responsável pela avaliação como primeiro parametro.
            // Informe os estados a serem avaliados.
            [isEqual, "confirmPassword"],
        ],
        confirmPassword: [
            isRequired,
            [isEqual, "password"],
        ],
    },

    validateField(fieldName: keyof typeof useSignUpStore) {
        const value = this[fieldName] as string;
        const rules: any = this.validations[fieldName];

        for (const rule of rules) {
            if (typeof rule === "function") {
                const error = rule(value);
                if (error) return error;
            } else if (Array.isArray(rule) && typeof rule[0] === "function") {
                const error = rule[0]()(value, ...rule.slice(1).map((r) => this[r as keyof typeof useSignUpStore]));
                if (error) return error;
            }
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
