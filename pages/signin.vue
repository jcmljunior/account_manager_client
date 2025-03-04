<template>
    <div class="container">
        <h1>Fazer Login</h1>
        <h2>Use sua conta do ??</h2>
        <form class="mb-3 mt-3">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Endereço de email</label>
                <div id="emailHelp" class="form-text">Nunca compartilharemos seu e-mail com mais ninguém.</div>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Senha</label>
            </div>
            <p class="mt-3">Não está no seu computador? Use o modo visitante para fazer login com privacidade.<a
                    href="#">Saiba como
                    usar o modo visitante.</a></p>

            <button disabled type="submit" class="btn btn-primary">Entrar</button>
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
