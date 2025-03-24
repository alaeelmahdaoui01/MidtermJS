<template>
    <div class="tout">

        <h1>Available Books</h1>
        
        <div class="books">
            <div v-for="book in filteredBooks" :key="book.id" class="book">
                <router-link :to="'/details/' + book.id" class="link"><img :src="book.image"/></router-link>
                <div><router-link :to="'/details/' + book.id" class="link">{{ book.titre }}</router-link></div>
                
            </div>
        </div>

    </div>
  </template>
  
<script>



export default {
name: 'HomeView',

data(){
    return {
        showFilter : false ,
        books : [],
        filteredBooks: [],
    };
},
async mounted(){
    await this.fetchBooks();
},
methods:{
    async fetchBooks(){
        try{
            const response = await fetch("http://localhost:3007/livres");
            this.books = await response.json();
            this.filteredBooks=this.books;
        }
        catch (error) {
            console.error("Error fetching books:", error);
        }
    },
    
    toggleFilter() {
        this.showFilter = !this.showFilter; // Toggle the visibility of the FilterNav component
        },
    filterBooks(text){
        const search = text.toLowerCase();
        this.filteredBooks = this.books.filter( (book) => book.titre.toLowerCase().includes(search) );
},
},

}
</script>



<style scoped>
.jobs {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    margin-bottom: 50px;
}

.job {
    text-align : center;
    padding: 15px;
    border: 1px solid #f0eded;
    border-radius: 8px;
    width: 50%;
    background-color: #f9f9f9;
    box-shadow: 0 4px 6px rgba(134, 133, 133, 0.1);
    cursor:pointer; 
}

.job:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.link{
    text-decoration : none; 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #06376b;
    transition: color 0.2s;
}
.link:hover {
    color: #246ab6;
    text-decoration: underline;
}

h1 {
    font-family: 'Arial', sans-serif;
    font-size: 28px;
    color: #333;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #b31307;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
    width : 200px;
}
.butt{
    display: flex;
    justify-content: center; 
    margin: 20px 0;
    margin-bottom : 50px;
}
.butt1{
    display: flex;
    flex-direction : column; 
    margin: 20px 0;
    margin-bottom : 50px;
    gap : 10px;
    align-items:center ;
}
button:hover {
    background-color: #06386e;
}
.tout {
    border: 2px solid #ddd; /* Bordure grise */
     /* Couleur de fond grise */
    border-radius: 10px; /* Coins arrondis pour un design plus moderne */
    padding: 20px; /* Espacement interne pour éviter que le contenu touche la bordure */
    margin: 50px auto; /* Centrer le conteneur horizontalement */
    max-width: 800px; /* Limiter la largeur maximale */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ajouter une ombre légère */
}
</style>