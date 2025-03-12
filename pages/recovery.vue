<script lang="ts" setup>
import recoveryStore from '~/features/account/stores/recoveryStore';
import { validateField, validateForm, ValidationMode } from '~/features/validations/composables/formValidation';

const useRecoveryStore = recoveryStore();
const validateFieldEmail = () => validateField("email", useRecoveryStore, ValidationMode.ValidateFirst);
const isValidForm = () => useRecoveryStore.email.test;

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
    if (validateForm(["email"], useRecoveryStore, ValidationMode.ValidateFirst)) {
        useRecoveryStore.success = true;
        console.log('O formulário foi preenchido corretamente.');
    }
};
</script>

<template>
    <div class="container">
        <h1>Recuperar Senha</h1>
        <form class="mb-3 mt-3" @submit.prevent="handleSubmit">
            <div class="form-floating mb-3">
                <input type="email"
                    :class="{ 'is-invalid': useRecoveryStore.errors.email, 'is-valid': useRecoveryStore.email.test }"
                    class="form-control" placeholder="" v-model="useRecoveryStore.email.value"
                    @keyup="handleKeyup($event, validateFieldEmail)" @blur="handleBlur($event, validateFieldEmail)" />
                <label for="floatingInput">Endereço de email</label>
                <div class="form-text text-danger" v-if="useRecoveryStore.errors.email">{{
                    useRecoveryStore.errors.email }}</div>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
        <ul>
            <li>
                <NuxtLink to="/signin">Já tem uma conta?</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/signup">Ainda não tem uma conta?</NuxtLink>
            </li>
        </ul>

        <div class="alert alert-info" role="alert" v-if="useRecoveryStore.success">
            <h4 class="alert-heading">Sucesso!</h4>
            <p>Um email para recuperação de sua conta foi enviado.</p>
        </div>
    </div>
</template>
