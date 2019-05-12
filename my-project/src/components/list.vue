<template>
    <ul>
        <li><router-link to='/'>helloWorld</router-link></li>
        <li><router-link :to="{name:'helloEarth',params:{earthmsg:'你好世界'}}">helloEarth</router-link></li>
    </ul>
</template>

<script>
    export default {
        name:'list'
    }
</script>
