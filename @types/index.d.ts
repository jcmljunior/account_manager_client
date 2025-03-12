declare type RuleItem = (value: any) => boolean;
declare type FormField = {
    value: string;
    test: boolean;
    rules: RuleItem[];
    messages: string[];
};
declare type SignupStoreProps = {
    success: boolean,
    errors: Partial<Record<string, string>>;
    firstName: FormField;
    lastName: FormField;
    email: FormField;
    password: FormField;
    confirmPassword: FormField;
};
declare type SigninStoreProps = {
    success: boolean,
    errors: Partial<Record<string, string>>;
    email: FormField;
    password: FormField;
};

export type {
    RuleItem,
    FormField,
    SignupStoreProps,
    SigninStoreProps,
}