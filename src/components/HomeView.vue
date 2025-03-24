<template>
    <div class="tt">

        <div class="tout2">
            <h1>Search Book </h1>
            <br>
            <div class="filtre">
                <input type="text" v-model="text" @input="filterBooks(text)"/>
            </div>
            <br>
            <div class="dispo">
                Dispo:  
                <select v-model="disponible">
                    <option value="Toutes" selected>Toutes</option>
                    <option value="Disponible en stock">Disponible en stock</option>
                    <option value="En rupture de stock" >En rupture de stock</option>
                </select> 
            </div>

        </div>

        <div class="tout">
            <h1>Available Books</h1>
            <br>
            <div class="books">
                <div v-for="book in filteredBooks" :key="book.id" class="book">
                    
                        <div><router-link :to="'/details/' + book.id" class="link">{{ book.titre }}</router-link></div> 
                        <div class="auteur"><router-link :to="'/details/' + book.id" class="link2">{{ book.auteur }}</router-link></div> 

                </div>
            </div>
        </div>

    </div>
</template>
  
<script>



export default {
name: 'HomeView',

data(){
    return {
        books : [],
        filteredBooks: [],
        text: "",
        disponible: "Toutes" ,
    };
},
async mounted(){
    await this.fetchBooks();
},
methods:{
    async fetchBooks(){
        try{
            const response = await fetch("http://localhost:3009/livres");
            this.books = await response.json();
            this.filteredBooks=this.books;
        }
        catch (error) {
            console.error("Error fetching books:", error);
        }
    },

    filterBooks(text){
        const search = text.toLowerCase();
        this.filteredBooks = this.books.filter( (book) => (((book.titre.toLowerCase().includes(search) )|| (book.auteur.toLowerCase().includes(search) )) 
        && ((book.disponible==true && this.disponible=="Disponible en stock") || (book.disponible==false && this.disponible=="En rupture de stock") || this.disponible=="Toutes")  ) );
},
},

}
</script>



<style scoped>

.dispo {
    font-weight : bold;
    color : rgb(165, 7, 7);
}
input, select{
    padding : 10px;
    font-family :Arial, Helvetica, sans-serif;
    border-radius : 2px;
    font-size : 18px
}

.tt{
    display:flex;
    flex-direction : row;
    gap : 10px;
}
.books {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    margin-bottom: 50px;
}

.book {
    text-align : center;
    padding: 40px;
    border: 1px solid #f0eded;
    border-radius: 8px;
    width: 50%;
    background-color: #f9f9f9;
    box-shadow: 0 4px 6px rgba(134, 133, 133, 0.1);
    cursor:pointer; 
}

.book:hover {
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
    color: #9b1313;
    text-decoration: underline;
}

.link2{
    text-decoration : none; 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #06376b;
    transition: color 0.2s;
}
.link2:hover {
    color: #940f0f;
    text-decoration: underline;
}

h1 {
    font-family: 'Arial', sans-serif;
    font-size: 28px;
    color: #041d61;
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
    border: 2px solid #ddd; 
    border-radius: 10px; 
    padding: 20px;
    width : 65%;
    margin: 50px auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}
.tout2 {
    height : 500px;
    display:flex;
    flex-direction : column;
    gap : 10px;
    border: 2px solid #ddd; 
    border-radius: 10px; 
    padding: 20px;
    width : 20%;
    margin: 50px auto;
    max-width: 800px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}
</style>