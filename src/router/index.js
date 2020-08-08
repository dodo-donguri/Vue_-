import Vue from 'vue'
import VueRouter from 'vue-router'
import MessageView from '../views/MessageView.vue'
// import General from '../views/General';
// import Chat from '../views/Chat';
// import SelfIntroduction from '../views/SelfIntroduction';


Vue.use(VueRouter)

  // const routes = [
  //   {
  //     path: '/:channelId',
  //     name: 'MessageView',
  //     component: MessageView
  //   },
  //   {
  //     path: '*',
  //     redirect: '/general'
  //   }
  // ]

  const routes = [
    // {
    //   path: '/',
    //   name: 'General',
    //   component: General
    // },
    // {
    //   path: '/chat',
    //   name: 'Chat',
    //   component: Chat
    // },
    // {
    //   path: '/self-introduction',
    //   name: 'SelfIntroduction',
    //   component: SelfIntroduction
    // },
    {
      path: '/:channelId',
      name: 'MessageView',
      component: MessageView
    },
    {
      path: '*',
      redirect: '/general'
    }
  ]

const router = new VueRouter({
  routes
})

export default router
