const isRequired = (value: any) => {
    return value ? "" : "O campo %s é obrigatorio.";
};

const hasMinLength = (min: number) => {
    return (value: string): string => {
        return value.length >= min
            ? ""
            : `O campo %s deve ter pelo menos ${min} caracteres.`;
    };
};

const hasMaxLength = (max: number) => {
    return (value: string): string => {
        return value.length <= max
            ? ""
            : `O campo %s deve ter no máximo ${max} caracteres.`;
    };
};

const isAlphaNumeric = (value: string): string => {
    const alphaNumericRegex = /^[0-9a-zA-Z\s]+$/;
    return alphaNumericRegex.test(value)
        ? ""
        : "O campo %s deve conter apenas letras e números.";
};

const isNumeric = (value: string): string => {
    const numericRegex = /^[0-9]+$/;
    return numericRegex.test(value)
        ? ""
        : "O campo %s deve conter apenas números.";
};

const isAlpha = (value: string): string => {
    const alphaRegex = /^[a-zA-Z\s]+$/;
    return alphaRegex.test(value) ? "" : "O campo %s deve conter apenas letras.";
};

const isValidEmail = (value: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value)
        ? ""
        : "O campo %s deve ser um endereço de e-mail valido.";
};

const validateField = (
    value: string,
    ...rules: ((v: string) => string)[]
): string => {
    for (const rule of rules) {
        const error = rule(value);
        if (error) return error;
    }

    return "";
};

export {
    isRequired,
    hasMinLength,
    hasMaxLength,
    isAlphaNumeric,
    isNumeric,
    isAlpha,
    isValidEmail,
    validateField,
};
