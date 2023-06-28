<template>
    <div class="view">
        <div class="cadastro">
            <p>Cadastre-se</p>

            <form class="form">

                <div class="input-container">
                    <img class="icons" src="/images/user.png" alt="">
                    <input type="text" name="nome" id="nome" v-model="nome" placeholder="Nome">
                </div>
                <div class="input-container">
                    <img class="icons" src="/images/email.png" alt="">
                    <input type="email" name="e-mail" id="e-mail" v-model="email" placeholder="E-mail">
                </div>
                <div class="input-container">
                    <img class="icons" src="/images/unlock.png" alt="">
                    <input type="password" name="senha" id="senha" v-model="senha" placeholder= "Senha">
                </div>
                <div class="submit-container">
                    <input type="submit" class="submit-btn" value="Cadastrar"> 
                </div>      

            </form>


        </div>
    </div>
</template>

<script>
export default {
    name: "Cadastro"
}
</script>

<style scoped>
    
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&display=swap');

    .view{
        padding: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    
    }
    .cadastro{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    p{
        font-family: Montserrat;
        font-size: 60px;
        color: #1B2D50;
        
    }

    .form{
        padding-top: 50px;
    }

    .input-container {
        max-width: 370px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        border: 2px solid #1B2D50;
        border-radius: 5px;
        transition: .5s;
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

    .input-container:hover {
        box-shadow: 0px 0px 5px 0px #1B2D50;        
    }

   ::placeholder {
        color: #1B2D50;
        
    }
    
    input:focus{
        outline: none;
    }

    .icons {
        width: 34px;
        margin-left: 20px;
        
    }

    .submit-container{     
        margin-top: 50px;
    }

    .submit-btn {
        background-color: #1B2D50;
        color: #ffff;
        width: 370px;
        border: 2px solid #1B2D50;   
        font-size: 24px;
        cursor: pointer;
        transition: .5s;
    }

    .submit-btn:hover {
        background-color: transparent;
        color: #1B2D50;
                box-shadow: 0px 0px 5px 0px #1B2D50;        

    }
</style>