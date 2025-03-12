const isRequired = (value: string): boolean => {
    return value ? true : false;
}

const hasMinLength = (min: number): (value: string) => boolean => {
    return (value: string): boolean => {
        return value.length >= min;
    }
}

const hasMaxLength = (max: number): (value: string) => boolean => {
    return (value: string): boolean => {
        return value.length <= max;
    }
}

const isAlphaNumeric = (value: string): boolean => {
    const alphaNumericRegex = /^[0-9a-zA-Z\s]+$/;
    return alphaNumericRegex.test(value) ? true : false;
};

const isNumeric = (value: string): boolean => {
    const numericRegex = /^[0-9]+$/;
    return numericRegex.test(value) ? true : false;
};

const isAlpha = (value: string): boolean => {
    const alphaRegex = /^[a-zA-Z\s]+$/;
    return alphaRegex.test(value) ? true : false;
};

const isValidEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? true : false;
};

const isEqual = <T>(values: () => T[]): (value: any) => boolean => {
    return (_: any) => {
        const [a, b] = values();
        return a === b;
    };
};

export enum ValidationMode {
    ValidateFirst,
    ValidateAll,
}

const validateField = (field: any, state: any, mode: ValidationMode): boolean => {
    const { value, rules, messages } = state[field];

    if (mode === ValidationMode.ValidateFirst) {
        delete state.errors[field];
    }

    for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        const result = rule(value);

        state[field].test = result;

        if (!result) {
            state.errors[field] = messages[i];
            break;
        }
    }

    return state[field].test;
}

const validateForm = (fields: string[], state: any, mode: ValidationMode): boolean => {
    state.errors = {};

    if (mode === ValidationMode.ValidateFirst) {
        for (let i = 0; i < fields.length; i++) {
            const field = fields[i];
            const result = validateField(field, state, mode);

            state[field].test = result;

            if (!result) {
                break;
            }
        }
    } else {
        for (let i = 0; i < fields.length; i++) {
            const field = fields[i];
            const result = validateField(field, state, mode);
            state[field].test = result;
        }
    }

    return !Object.keys(state.errors).length;
};

export {
    isRequired,
    hasMinLength,
    hasMaxLength,
    isAlphaNumeric,
    isNumeric,
    isAlpha,
    isValidEmail,
    isEqual,
    validateField,
    validateForm,
}
