<template>
    <div v-if="book" class="tout">

        <h1>Book Details</h1>

        <div> 
            <h2>{{ book.titre }}</h2>
            <p>{{ book.auteur }}</p>
            <p>{{ book.annee }}</p>
            <p>{{ book.categorie }}</p>
            <p>Resume : {{ book.resume }}</p>
        </div>
        <div class="butt">
            <button type="button" @click="returnlist"> Return to Home page </button>
        </div>
        

    </div>
</template>
  

<script>
export default {
name: 'DetailsBook',
props:["id"],

data(){
    return {
        book : null
    };
},

async mounted(){
    await this.fetchBook();
},

methods : {
    
    returnlist(){
        this.$router.push('/');
    },
    async fetchBook(){
        try{
            const response = await fetch(`http://localhost:3009/livres/${this.id}`);
            this.book = await response.json();
        }
        catch (error) {
            console.error("Error fetching jobs:", error);
        }
    }
}
}
</script>


<style>
.tout {
    border: 2px solid #ddd; 
    border-radius: 10px; 
    padding: 20px;
    width : 65%;
    margin: 50px auto;
    /*max-width: 800px; /* Limiter la largeur maximale */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ajouter une ombre légère */
}

.butt{
    display: flex;
    justify-content: center; 
    margin: 20px 0;
    margin-bottom : 50px;
}
button {
    color : white;
    font-family: Arial, Helvetica, sans-serif;
    padding : 10px;
    background-color:rgb(110, 7, 7);
}
button:hover {
    background-color: #06386e;
}
</style>