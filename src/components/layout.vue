<template>
    <div class="yzwb-layout">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'layout',
    data () {
        return {
            test: mixin.test
        }
    },
    mounted () {
    //    console.log(this.test)
    }
}
</script>




