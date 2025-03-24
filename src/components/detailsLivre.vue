<template>
    <div class="tout">

        <h1>Available Books</h1>
        
        <div class="books">
            <div v-for="book in filteredBooks" :key="book.id" class="book">
                <div><router-link :to="'/details/' + book.id" class="link">{{ book.titre }}</router-link></div>
                <div><router-link :to="'/details/' + book.id" class="link">{{ book.author }}</router-link></div>
            </div>
        </div>

    </div>
  </template>
  
<script></script>