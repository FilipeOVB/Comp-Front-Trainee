<template>
  <div class="projetos">
    
    <h1>Cases de sucesso Comp Jr</h1>
    
    <div class="Cards">

      <a href="http://seti.ufla.br/" class="Card">
        <img src="/images/logoSE7I.png" alt="">
        <p class="descricao"> SE7I - Semana de Tecnologia da Informação </p> 
      </a>

      <a href="http://larevida.org.br/" class="Card">
        <img src="/images/logoLarEVida.png" alt="">
        <p class="descricao"> Lar Esperança e Vida</p> 
 
      </a>

      <a href="https://juridicajunior.ufla.br/" class="Card">
        <img src="/images/JuridicaJr.png" alt="">
        <p class="descricao"> Jurídica Jr. - UFLA</p> 
      </a>

      <a href="https://play.google.com/store/apps/details?id=com.compjunior.comp20anos" class="Card">
        <img src="/images/Comp20anos.png" alt="">
        <p class="descricao"> Comp 20 Anos</p> 
      </a>

    </div>
  </div>
</template>

<script>
export default {
  name: "Projetos"
}
</script>

<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&display=swap');

    .projetos{
      padding: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .Cards {
      padding-top: 100px;
      display: flex;
      justify-content: center;
      gap: 50px;
    }

    .Card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      padding-top: 30px;
    

      background-color: #1B2D50;
      width: 300px;
      height: 330px;
      border-radius: 10px;
      text-decoration: none;
      box-shadow: 0px 5px 10px 5px #9e9e9e;
      transition: .5s;
    }

    .Card:hover{
      box-shadow: 0px 5px 10px 8px #878787;

    }

    img {
      width: 220px;
      border-radius: 10px;
      border: 5px solid #ffff;
    }

    .descricao{
      font-family: Noto Sans;
      color: #ffff;
      font-size: 18px;
      padding: 0 20px 20px 20px;
    }

    h1 {
      
      font-family: Roboto;
      font-size: 50px;
      color: #1B2D50;
      border: 10px #797979;
    }

    @media screen and (max-width: 1370px) {
      
      .Cards{
        display: flex;
        flex-direction: column;
      
      }


  }

</style>
