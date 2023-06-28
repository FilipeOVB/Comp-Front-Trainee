<template>
    <div id="nav">
        
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo" class="filter">
        </router-link>

        <div class="itens">
            <router-link to="/">Home</router-link>
            <router-link to="/projetos">Projetos</router-link>
            <router-link to="/contato">Contato</router-link>
            <div class="input-container">
                <img class="icons" src="/images/search.png" alt="">
                <input type="text" name="pesquisa" id="pesquisa" v-model="pesquisa" placeholder= "Pesquisar">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"]
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&display=swap');

    .filter {
        filter: invert(0%) sepia(100%) saturate(100%) hue-rotate(190deg) brightness(100%) contrast(100%);
    }

    #nav {
        background-color: #1B2D50;
        padding: 25px ;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    #logo {
        width: 60px;
    }

    #nav #logo-url{
        margin: auto;
        margin-left: 0;
    }

    #nav a {
        color: #FFFF;
        text-decoration: none;
        font-family: Noto Sans;
        font-size: 24px;
        
        transition: .5s;
    }

    #nav a:hover {
        text-decoration: underline;
    }

    .itens {
        display: flex;
        align-items: center;
        gap: 80px;
    }

    .input-container {
            
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #ffff;
        border-radius: 5px;
        transition: .5s;
    }

    .input-container:hover {
        box-shadow: 0px 0px 5px 1px #C3C3C3, inset 0px 0px 5px 1px #C3C3C3;         
    }

    .icons {
        width: 20px;
        margin: 10px 15px 10px 15px;  
    }

    input {
        width: 150px;
        border: 0;
        border-radius: 5px;
        font-family: Roboto;
        background-color: transparent;
        font-size: 18px;
        color: #ffff;
    }
    input:focus{
        outline: none;
    }

    ::placeholder {
        color: #ffff;
        font-family: Noto Sans;
        font-size: 17px;
}
</style>