<template>
    <div class="view">
        <div class="conteudo">
            <div class="dev">
                <img class="Filipe" src="images/Filipe.jpeg" alt="">
            </div>

            <div class="contatosLista">
                
                <p class="nome"> <strong>Filipe Oliveira</strong> - Trainee CompJr</p>
                <div class="contato">
                    <img class="icons" src="images/mailF.png" alt="">
                    <p class="contatoTexto"> filipe.boas@compjunior.com.br </p>
                </div>
                <div class="contato">
                    <img class="icons" src="images/whatsappF.png" alt="">
                    <p class="contatoTexto">(35) 9 9823-7331</p>
                </div>
                <div class="contato">
                    <img class="icons" src="images/github.png" alt="">
                    <p class="contatoTexto">FilipeOVB</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contato"
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&display=swap');

    .view{
        padding: 50px;
        display: flex;
        justify-content: center;
    }

    .conteudo{
        background-color: #c9c9c9;
        width:950px;
        height: 300px;
        border-radius: 40px;
        box-shadow: 0px 5px 10px 5px #9e9e9e;


        display: flex;
        align-items: center;
        justify-items: center;
        padding: 100px;
        display: flex;
        gap: 100px;
    }

    .dev{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    .Filipe{
        width: 300px;
        border: 5px solid #1B2D50;
        border-radius: 20px;
    }

    .nome {
        font-family: Noto Sans;
        font-size: 35px;
        color: #1B2D50;
    }

    .contatosLista {
        display: flex;
        flex-direction: column;
        justify-content: right;
        gap: 20px;
    }

    .contato{
        display: flex;
        align-items: center;
        gap: 20px;   
    }

    .icons{
        width: 50px;
        height: 50px;
    }

    .contatoTexto{
        font-family: Noto Sans;
        color: #1B2D50;
        font-size: 24px;
    }

</style>