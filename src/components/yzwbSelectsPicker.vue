<template>
    <!-- 下拉选择器组件（多选） -->
    <van-picker
        :columns="columns"
        show-toolbar
        value-key = "value"
        @confirm="confirm"
        @cancel="cancel"
        @change="change"
    />
</template>
<script>
const province = [
    {
        key: '11',
        value: '北京'
    },
    {
        key: '12',
        value: '河北'
    }
]
const citys = [
    {
        key: '11',
        value: '太原'
    },
    {
        key: '12',
        value: '大同'
    }
]
const county = [
    {
        key: '11',
        value: '清徐'
    },
    {
        key: '12',
        value: '小店'
    }
]
export default {
    name: 'yzwbSelectsPicker',
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
                    values: province,
                    className: 'column1'
                },
                {
                    values: citys,
                    className: 'column2',
                },
                {
                    values: county,
                    className: 'column3',
                }
            ]
        }
    },
    methods: {
        confirm (item) { 
            this.$emit('confirm',{value: item.value, name: this.name});
        },
        cancel () { 
            this.$emit('cancel');
        },
        change (picker, values) {
            
        }
    },
    mounted () {

    }
}
</script>

