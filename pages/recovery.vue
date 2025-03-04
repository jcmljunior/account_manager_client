<template>
    <div class="container">
        <h1>Recuperar Senha</h1>
        <form class="mb-3 mt-3">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Endereço de email</label>
            </div>
            <button disabled type="submit" class="btn btn-primary">Enviar</button>
        </form>

        <ul>
            <li>
                <NuxtLink to="/signin">Já tem uma conta?</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/signup">Ainda não tem uma conta?</NuxtLink>
            </li>
        </ul>
    </div>
</template>
