import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import todo from '../views/TodoApp.vue'
import TodoEdit from '../views/TodoEdit.vue'
import TodoDetails from '../views/TodoDetails.vue'
import UserProfile from '../views/UserProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo,
    },
    {
      path: '/todo/edit',
      name: 'edit',
      component: TodoEdit,
    },
    {
      path: '/todo/details',
      name: 'details',
      component: TodoDetails,
    },
    {
      path: '/user/:username',
      name: 'profile',
      component: UserProfile,
    }
  ]
})

export default router
