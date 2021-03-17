import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

fb.postCollection.orderBy('createdOn', 'desc')
.onSnapshot(snapshot=>{
    let postArray = []
    snapshot.forEach(doc =>{
        let post = doc.data()
        post.id = doc.id
        postArray.push(post)
    }) 
    store.commit('setposts', postArray)
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      UserProfile: {},
      Posts: []
  },
  mutations: {
      setUserProfile(state, value){
          state.UserProfile = value
      },
      setPosts(state, value){
          state.Posts = value
      }
  },
  actions: {
  },
  modules: {
  }
})
