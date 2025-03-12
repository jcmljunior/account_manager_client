<script lang="ts" setup>
import signinStore from '~/features/account/stores/signinStore';
import { validateField, validateForm, ValidationMode } from '~/features/validations/composables/formValidation';

const useSigninStore: any = signinStore();
const fields: string[] = [
    "email",
    "password",
];
const validateFieldEmail = () => validateField(fields[0], useSigninStore, ValidationMode.ValidateFirst);
const validateFieldPassword = () => validateField(fields[1], useSigninStore, ValidationMode.ValidateFirst);
const isValidForm = () => fields.every((field: string) => useSigninStore[field].test);

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
const handleSubmit = () => {
    if(validateForm(fields, useSigninStore, ValidationMode.ValidateAll)) {
        useSigninStore.success = true;
        console.log('O formulário foi preenchido corretamente.');
    }
};
</script>

<template>
    <div class="container">
        <h1>Fazer Login</h1>
        <h2>Use sua conta do ??</h2>
        <form class="mb-3 mt-3" @submit.prevent="handleSubmit">
            <div class="form-floating mb-3">
                <input type="email"
                    :class="{ 'is-invalid': useSigninStore.errors.email, 'is-valid': useSigninStore.email.test }"
                    class="form-control" id="floatingInput" placeholder="" v-model="useSigninStore.email.value"
                    autocomplete="email" @keyup="handleKeyup($event, validateFieldEmail)"
                    @blur="handleBlur($event, validateFieldEmail)" />
                <label for="floatingInput">Endereço de email</label>
                <div class="form-text text-danger" v-if="useSigninStore.errors.email">{{
                    useSigninStore.errors.email }}</div>
            </div>
            <div class="form-floating">
                <input type="password"
                    :class="{ 'is-invalid': useSigninStore.errors.password, 'is-valid': useSigninStore.password.test }"
                    class="form-control" id="floatingPassword" placeholder="" v-model="useSigninStore.password.value"
                    autocomplete="password" @keyup="handleKeyup($event, validateFieldPassword)"
                    @blur="handleBlur($event, validateFieldPassword)" />
                <label for="floatingPassword">Senha</label>
                <div class="form-text text-danger" v-if="useSigninStore.errors.password">{{
                    useSigninStore.errors.password }}</div>
            </div>
            <p class="mt-3">Não está no seu computador? Use o modo visitante para fazer login com privacidade.<a
                    href="#">Saiba como
                    usar o modo visitante.</a></p>

            <button type="submit" class="btn btn-primary" :disabled="!isValidForm()">Entrar</button>
        </form>
        <ul>
            <li>
                <NuxtLink to="/signup">Ainda não tem uma conta?</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/recovery">Esqueceu sua senha?</NuxtLink>
            </li>
        </ul>
    </div>
</template>
