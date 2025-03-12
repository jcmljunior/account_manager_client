<script lang="ts" setup>
import useSignupStore from "~/features/account/stores/signupStore";
import { validateForm, ValidationMode, validateField } from "~/features/validations/composables/formValidation";

const signUpStore: any = useSignupStore();
const fields: string[] = [
    "firstName",
    "lastName",
    "email",
    "password",
    "confirmPassword",
];
const validateFieldFirstName = () => validateField(fields[0], signUpStore, ValidationMode.ValidateFirst);
const validateFieldLastName = () => validateField(fields[1], signUpStore, ValidationMode.ValidateFirst);
const validateFieldEmail = () => validateField(fields[2], signUpStore, ValidationMode.ValidateFirst);
const validateFieldPassword = () => validateField(fields[3], signUpStore, ValidationMode.ValidateFirst);
const validateFieldConfirmPassword = () => validateField(fields[4], signUpStore, ValidationMode.ValidateFirst);
const isValidForm = () => fields.every((field: string) => signUpStore[field].test);

const handleKeyup = (event: any, dispatch: CallableFunction) => {
    setTimeout(() => {
        const nextElement = document.activeElement;

        if (nextElement && nextElement.tagName === "INPUT" && event.key === "Tab") {
            return;
        }

        dispatch();
    }, 10);
}
const handleBlur = (event: any, dispatch: CallableFunction) => {
    setTimeout(() => {
        const nextElement = document.activeElement;

        if (nextElement && nextElement.tagName === "INPUT" && event.key === "Tab") {
            return;
        }

        dispatch();
    }, 10);
};
const handleSubmit = async () => {
    if (validateForm(fields, signUpStore, ValidationMode.ValidateFirst)) {
        signUpStore.success = true;
        console.log('O formulário foi preenchido corretamente.');
    }
}
</script>

<template>
    <div class="container">
        <h1>Crie uma Conta</h1>

        <form class="mb-3 mt-3" @submit.prevent="handleSubmit">
            <div class="row g-2">
                <div class="col-md">
                    <div class="form-floating mb-3">
                        <input type="text"
                            :class="{ 'is-invalid': signUpStore.errors.firstName, 'is-valid': signUpStore.firstName.test }"
                            class="form-control" name="firstName" id="firstName" placeholder=""
                            v-model="signUpStore.firstName.value" autocomplete="firstName"
                            @keyup="handleKeyup($event, validateFieldFirstName)"
                            @blur="handleBlur($event, validateFieldFirstName)" />
                        <label for="firstName">Nome</label>
                        <div class="form-text text-danger" v-if="signUpStore.errors.firstName">{{
                            signUpStore.errors.firstName }}</div>
                    </div>
                </div>

                <div class="col-md">
                    <div class="form-floating mb-3">
                        <input type="text"
                            :class="{ 'is-invalid': signUpStore.errors.lastName, 'is-valid': signUpStore.lastName.test }"
                            class="form-control" name="lastName" id="lastName" placeholder=""
                            v-model="signUpStore.lastName.value" autocomplete="lastName"
                            @keyup="handleKeyup($event, validateFieldLastName)"
                            @blur="handleBlur($event, validateFieldLastName)" />
                        <label for=" firstName">Sobrenome</label>
                        <div class="form-text text-danger" v-if="signUpStore.errors.lastName">{{
                            signUpStore.errors.lastName }}</div>
                    </div>
                </div>
            </div>

            <div class="row g-2">
                <div class="col-md">
                    <div class="form-floating mb-3">
                        <input type="text"
                            :class="{ 'is-invalid': signUpStore.errors.email, 'is-valid': signUpStore.email.test }"
                            class="form-control" name="email" id="email" placeholder=""
                            v-model="signUpStore.email.value" autocomplete="email"
                            @keyup="handleKeyup($event, validateFieldEmail)"
                            @blur="handleBlur($event, validateFieldEmail)" />
                        <label for=" email">Endereço de email</label>
                        <div class="form-text text-danger" v-if="signUpStore.errors.email">{{
                            signUpStore.errors.email }}</div>
                        <div class="form-text">Nunca compartilharemos seu e-mail com mais ninguém.</div>
                    </div>
                </div>
                <div class="col-md"></div>
            </div>

            <div class="row g-2">
                <div class="col-md">
                    <div class="form-floating mb-3">
                        <input type="password"
                            :class="{ 'is-invalid': signUpStore.errors.password, 'is-valid': signUpStore.password.test }"
                            class="form-control" name="password" id="password" placeholder=""
                            v-model="signUpStore.password.value" autocomplete="password"
                            @keyup="handleKeyup($event, validateFieldPassword)"
                            @blur="handleBlur($event, validateFieldPassword)" />
                        <label for=" password">Senha</label>
                        <div class="form-text text-danger" v-if="signUpStore.errors.password">{{
                            signUpStore.errors.password }}</div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating mb-3">
                        <input type="password"
                            :class="{ 'is-invalid': signUpStore.errors.confirmPassword, 'is-valid': signUpStore.confirmPassword.test }"
                            class="form-control" name="confirmPassword" id="confirmPassword" placeholder=""
                            v-model="signUpStore.confirmPassword.value" autocomplete="confirmPassword"
                            @keyup="handleKeyup($event, validateFieldConfirmPassword)"
                            @blur="handleBlur($event, () => { validateFieldConfirmPassword(), isValidForm() })" />
                        <label for=" confirmPassword">Confirmar Senha</label>
                        <div class="form-text text-danger" v-if="signUpStore.errors.confirmPassword">{{
                            signUpStore.errors.confirmPassword }}</div>
                    </div>
                </div>
            </div>

            <button type="submit" class="btn btn-primary" :disabled="!isValidForm()">Cadastrar</button />
        </form>

        <ul>
            <li>
                <NuxtLink to="/signin">Já tem uma conta?</NuxtLink>
            </li>
        </ul>

        <div class="alert alert-success" role="alert" v-if="signUpStore.success">
            <h4 class="alert-heading">Sucesso!</h4>
            <p>Seu cadastro foi realizado com sucesso.</p>
        </div>
    </div>
</template>
