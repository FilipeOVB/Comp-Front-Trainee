<template>
    <div class="view">

        <div class="view-info">
            
            <div class="textos">
                <h1 class="title"> Projeto Trainee </h1>
                <p class="descricao">Caso seja sua primeira vez aqui, clique <router-link to="/Cadastro">aqui</router-link> para fazer o seu cadastro</p>
            </div>

        </div>
        
        <div class="view-login">

            <form id="login">
                <p>Iniciar Sessão</p>
                <div class="input-container">
                    <img class="icons" src="/images/email.png" alt="">
                    <input type="email" name="e-mail" id="e-mail" v-model="email" placeholder="E-mail">
                </div>
                <div class="input-container">
                    <img class="icons" src="/images/unlock.png" alt="">
                    <input type="password" name="senha" id="senha" v-model="senha" placeholder= "Senha">
                </div>
                <div class="submit-container">
                    <input type="submit" class="submit-btn" value="Entrar"> 
                </div>
            </form>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Login"
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap');

    *{
        margin: 0;
        padding: 0;
    }
    .view{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .view-info {
        background-color: #C4C4C4;
        width: 50%;
        height: 90vh;
    }

    .textos{
        padding: 100px;
    }

    .title{
        font-family: Montserrat;
        font-weight: bold;
        font-size: 64px;
        color: #1B2D50;
        margin-bottom: 50px;
    }

    .descricao {
        max-width: 400px;
        font-size: 24px;
    }

    a {
        text-decoration: none;
    }

    p {
        font-family: Montserrat;
        font-size: 48px;
        margin-bottom: 100px;
        color: #1B2D50;
    }

    .view-login{
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        width: 50%;
        min-width: 50vh;

    }

    #login {
        font-family: Roboto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .input-container {
        max-width: 370px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        background-color: #E4E4E4;
        border-radius: 5px;
    }

    .input-container:hover {
        box-shadow: 0px 0px 5px 0px #C3C3C3;        
    }

    input {
        padding: 0px 15px;
        width: 370px;
        height: 67px;
        border: 0;
        border-radius: 5px;
        font-family: Roboto;
        background-color: transparent;
        font-size: 18px;
        color: #1B2D50;
    }

    .icons {
        width: 30px;
        margin-left: 20px;
        opacity: 60%;
    }

   ::placeholder {
        color: #1B2D50;
        opacity: 60%;
    }
    
    input:focus{
        outline: none;
    }

    .submit-container{
        max-width: 370px;        
        margin-top: 50px;
    }

    .submit-btn {
        background-color: #1B2D50;
        color: #ffff;
        font-size: 24px;
        cursor: pointer;
        transition: .5s;
    }

    .submit-btn:hover {
        box-shadow: 0px 0px 15px 0px #1B2D50;
        font-size: 25px;
    }

</style>