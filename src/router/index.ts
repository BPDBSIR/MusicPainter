import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
// @ts-ignore
import Nprogress from "nprogress"
import 'nprogress/nprogress.css'
import Layout from '../pages/index.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: "discover",
    children: [
      /*{
        path: "home",
        name: "Home",
        component: () => import("../pages/Home/index.vue")
      },*/
      {
        path: "discover",
        name: "Discover",
        component: () => import("../pages/Discover/index.vue"),
      },
      {
        path: "playlist",
        name: "PlayList",
        component: () => import("../pages/Playlist/index.vue")
      },
      {
        path: "playlist/:id",
        name: "PlaylistDetail",
        component: () => import("../pages/PlaylistDetail/index.vue")
      },
      {
        path: "rank",
        name: "Rank",
        component: () => import("../pages/Rank/index.vue")
      }/*,
      {
        path: "singer",
        name: "Singer",
        component: () => import("../pages/Singer/index.vue")
      }*/
    ]
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

Nprogress.inc(0.2)
Nprogress.configure({ easing: 'ease', speed: 500, showSpinner: false })

router.beforeEach(((to, from, next) => {
  Nprogress.start()
  next()
}))

router.afterEach(((to, from, failure) => {
  Nprogress.done()
}))
export default router