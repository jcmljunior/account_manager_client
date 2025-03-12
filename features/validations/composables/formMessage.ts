declare type FormMessage = (value: boolean) => string | null;

const isNotEmpty: FormMessage = (value: boolean) => {
    if (!value) {
        return "Este campo precisa ser preenchido.";
    }

    return null;
};

const hasMinLength = (min: number): FormMessage => (value: boolean) => {
    if (!value) {
        return `Este campo precisa ter pelo menos ${min} caracteres.`;
    }

    return null;
};

const hasMaxLength = (max: number): FormMessage => (value: boolean) => {
    if (!value) {
        return `Este campo precisa ter no máximo ${max} caracteres.`;
    }

    return null;
};

export {
    type FormMessage,
    isNotEmpty,
    hasMinLength,
    hasMaxLength
}
