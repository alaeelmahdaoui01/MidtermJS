import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import detailsLivre from '../components/detailsLivre.vue'

const routes = [{
        path: '/',
        component: HomeView
    },
    {
        path: '/details/:id',
        component: detailsLivre
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

/*<div class="butt1">
            <div><button type="button" @click="toggleFilter">Filter</button></div>
            <div><FilterNav v-if="showFilter" @filter-jobs="filterJobs"/></div>
        </div>*/