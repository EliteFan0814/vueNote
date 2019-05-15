<template>
    <div>
        <span>我是子组件--{{msg}}</span>
        <h2>我是Vuex--- {{getNum}}</h2>
        <button @click='toParent'>点击传给父组件</button>
        <button @click='padd'>点击增加</button>
        <button @click='paddAction'>点击减少使用action</button>
    </div>
</template>

<script>
export default {
    name:'son',
    data:function(){
        return {
            toFather:'我是子组件传给父组件的'
        }
    },
    props:{
        msg:{
            type: String
        }
    },
    computed:{
        getNum:function(){
            return this.$store.state.num
            // return this.$store.getters.getNum
        }
    },
    methods:{
        toParent:function(){
            this.$emit('toParent',this.toFather)
        },
        padd(){
            this.$store.commit('increase')
        },
        paddAction(){
            this.$store.dispatch('decreaseAction')
        }
    }
}
</script>

