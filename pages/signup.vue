<script lang="ts" setup>
import useSignUpStore from "~/features/account/stores/signupStore";

const signUpStore = useSignUpStore();
const handleSubmit = async () => {
    signUpStore.validateForm();

    if(Object.keys(signUpStore.errors).length) return;
    console.log('Formulário validado com sucesso.');
}
</script>

<template>
    <div class="container">
        <h1>Criar uma conta do ??</h1>
        <form class="mb-3 mt-3" @submit.prevent="handleSubmit">
            <div class="row g-2">
                <div class="col-md">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" name="firstName" id="firstName" placeholder="" v-model="signUpStore.firstName">
                        <label for="firstName">Nome</label>
                        <div class="form-text" v-if="signUpStore.errors.firstName">
                            {{ signUpStore.errors.firstName.replace("%s", "Nome") }}
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" name="lastName" id="lastName" placeholder="" v-model="signUpStore.lastName">
                        <label for="lastName">Sobrenome</label>
                        <div class="form-text" v-if="signUpStore.errors.lastName">
                            {{ signUpStore.errors.lastName.replace("%s", "Sobrenome") }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-floating mb-3">
                <input type="email" class="form-control" name="email" id="email" placeholder="" v-model="signUpStore.email">
                <label for="email">Endereço de email</label>
                <div class="form-text">Nunca compartilharemos seu e-mail com mais ninguém.</div>
                <div class="form-text" v-if="signUpStore.errors.email">
                    {{ signUpStore.errors.email.replace("%s", "E-mail") }}
                </div>
            </div>

            <div class="form-floating mb-3">
                <input type="password" class="form-control" name="password" id="password" placeholder="" v-model="signUpStore.password">
                <label for="password">Senha</label>
                <div class="form-text" v-if="signUpStore.errors.password">
                    {{ signUpStore.errors.password.replace("%s", "Senha") }}
                </div>
            </div>

            <div class="form-floating mb-3">
                <input type="password" class="form-control" name="confirmPassword" id="confirmPassword" placeholder="" v-model="signUpStore.confirmPassword">
                <label for="confirmPassword">Senha</label>
                <div class="form-text" v-if="signUpStore.errors.confirmPassword">
                    {{ signUpStore.errors.confirmPassword.replace("%s", "Senha") }}
                </div>
            </div>


            <button type="submit" class="btn btn-primary">Criar Conta</button>
        </form>

        <ul>
            <li>
                <NuxtLink to="/signin">Já tem uma conta?</NuxtLink>
            </li>
        </ul>
    </div>
</template>
