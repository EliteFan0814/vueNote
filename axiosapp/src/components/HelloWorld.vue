<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ fromSon }}</h2>
    <h2>我是Vuex---{{getNum}}</h2>
    <button @click="getData">点击获取</button>
    <ul>
      <li v-for="item in items" :key="item.id">{{item.title}}</li>
    </ul>
    <hr>
    <son :msg='msg +" 来自父组件的信息"' @toParent='getFromSon'></son>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import son from './son'
Vue.prototype.$http = axios
export default {
  name: 'HelloWorld',
  components:{
    son
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:[],
      fromSon:'未收到数据'
    }
  },
  computed:{
    getNum:function(){
      return this.$store.state.num
    }
  },
  methods:{
    getData(){
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        params: {
          page: 2,
          limit: 10
        }
      }).then((val) => {
        this.items = val.data.data
      })
    },
    getFromSon:function(val){
      this.fromSon = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
