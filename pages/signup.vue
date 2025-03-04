<template>
    <div class="container">
        <h1>Criar uma conta do ??</h1>
        <form>
            <div class="row g-2">
                <div class="col-md">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="John">
                        <label for="floatingInput">Nome</label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Doe">
                        <label for="floatingInput">Sobrenome</label>
                    </div>
                </div>
            </div>

            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Endereço de email</label>
                <div id="emailHelp" class="form-text">Nunca compartilharemos seu e-mail com mais ninguém.</div>
            </div>

            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Senha</label>
            </div>

            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Confirmar Senha</label>
            </div>

            <button disabled type="submit" class="btn btn-primary">Criar Conta</button>
        </form>

        <ul>
            <li>
                <NuxtLink to="/signin">Já tem uma conta?</NuxtLink>
            </li>
        </ul>
    </div>
</template>
