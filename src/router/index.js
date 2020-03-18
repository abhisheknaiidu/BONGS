import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Root from "./Root"
import i18n, { loadLocaleMessagesAsync } from "@/i18n"
import {
  setDocumentDirectionPerLocale,
  setDocumentLang,
  setDocumentTitle
} from "@/util/i18n/document"

Vue.use(VueRouter)

const { locale } = i18n

const routes = [
  {
    path: "/",
    redirect: locale
  },
  {
    path: "/:locale",
    component: Root,
    children: [
      {
        path: "",
        name: "home",
        component: Home
      },
      {
        path: "about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.params.locale === from.params.locale) {
    next()
    return
  }

  const { locale } = to.params

  loadLocaleMessagesAsync(locale).then(() => {
    setDocumentLang(locale)

    setDocumentDirectionPerLocale(locale)

    setDocumentTitle(i18n.t("app.title"))
  })

  next()
})

export default router
