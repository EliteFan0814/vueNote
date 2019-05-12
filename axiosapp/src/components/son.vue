<template>
    <div>
        <span>我是子组件--{{msg}}</span>
        <button @click='toParent'>点击传给父组件</button>
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
    methods:{
        toParent:function(){
            this.$emit('toParent',this.toFather)
        }
    }
}
</script>

