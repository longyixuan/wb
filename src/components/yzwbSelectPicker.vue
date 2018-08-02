<template>
    <!-- 下拉选择器组件 -->
    <van-picker
        :columns="columns"
        show-toolbar
        value-key="value"
        @confirm="confirm"
        @cancel="cancel"
    />
</template>
<script>
export default {
    name: 'yzwbSelectPicker',
    props: {
        "defaultValue": {
            type: String,
            defalut: ""
        },
        "name": {
            type: String,
            defalut: ""
        }
    },
    data () {
        return {
            columns: [
                {
                    key: '01',
                    value: '男'
                },
                {
                    key: '02',
                    value: '女'
                }
            ]
        }
    },
    methods: {
        confirm (item) { 
            this.$emit('confirm',{value: item.value, name: this.name});
        },
        cancel () { //
            this.$emit('cancel');
        },
    },
    mounted () {

    }
}
</script>

