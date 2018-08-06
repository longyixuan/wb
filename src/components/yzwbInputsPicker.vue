<template>
    <van-panel class="yzwb-panel">
        <van-nav-bar
            title="工作与学习经历"
            left-arrow
            @click-left="goback"
        />
        <van-field
            v-model="formData.date"
            required
            clearable
            label="起止年月"
        />
        <van-field
            v-model="formData.company"
            required
            clearable
            label="学习或工作单位"
        />
        <van-field
            v-model="formData.position"
            required
            clearable
            label="任何职务"
        />
        <van-cell-group>
            <van-cell>
                <van-button size="large" type="primary" @click="save" style="margin-bottom: 10px;">保存</van-button>
                <van-button size="large" type="default" @click="del">删除</van-button>
            </van-cell>
        </van-cell-group>
    </van-panel>
</template>
<script>
export default {
    name: 'yzwbInputPicker',
    data () {
        return {
            formData: {
                date: '',
                company: '',
                position: '' 
            }
        }
    },
    props: {
        "defaultValue": {
            type: Object,
            defalut: null
        },
        "defaultIndex": {
            type: Number,
            defalut: -1
        },
        "name": {
            type: String,
            defalut: ""
        }
    },
    methods: {
        init () {
            if (!!this.defaultValue) {
                this.formData.date = this.defaultValue.date;
                this.formData.company = this.defaultValue.company;
                this.formData.position = this.defaultValue.position;
            } else {
                this.formData.date = '';
                this.formData.company = '';
                this.formData.position = '';
            }
        },
        save () {
            if(this.formData.date===""&&this.formData.company===""&&this.formData.position==="") {
                this.$toast("请填写一条完整的记录");
            } else {
                this.$emit('save',this.formData)
            }
        },
        del () {
            this.$emit('del')
        },
        goback () {
            this.$emit('goback')
        }
    },
    mounted () {
        this.init();
    },
    watch: {
        defaultValue() {
            this.init();
        }
    }
}
</script>