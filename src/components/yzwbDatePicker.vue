<template>
    <!-- 时间选择器组件 -->
    <van-datetime-picker
        v-model="CurrentDate"
        :type="type"
        :min-date="new Date('1910-01-01')"
        @confirm="confirm"
        @cancel="cancel"
    />
</template>
<script>
import moment from 'moment';
export default {
    name: 'yzwbPicker',
    data () {
        return {
            CurrentDate: new Date()
        }
    },
    props: {
        "defaultValue": {
            type: String,
            defalut: ""
        },
        "name": {
            type: String,
            defalut: ""
        },
        "type": {
            type: String,
            defalut: "date"
        }
    },
    methods: {
        confirm (value) { //选择出生日期
            let checkValue =  moment(value).format('YYYY-MM-DD');
            this.$emit('confirm',{value: checkValue, name: this.name});
        },
        cancel () { //日期插件取消恢复原值
            this.$emit('cancel');
        },
        init () { //出生日期插件编辑赋值
            if(this.defaultValue === "") {
                return ;
            }
            this.$set(this, 'CurrentDate', new Date(this.defaultValue));
        }
    },
    mounted () {
        this.init();
    }
}
</script>
