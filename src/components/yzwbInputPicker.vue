<template>
    <van-panel class="yzwb-panel">
        <van-nav-bar
            title="家庭信息"
            left-arrow
            @click-left="goback"
        />
        <van-field
            v-model="formData.name"
            required
            clearable
            label="姓名"
        />
        <van-field
            v-model="formData.relation"
            required
            clearable
            label="关系"
        />
        <van-field
            v-model="formData.position"
            required
            clearable
            label="单位/职务"
        />
        <van-field
            v-model="formData.phone"
            required
            clearable
            label="联系电话"
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
                name: '',
                relation: '',
                position: '',
                phone: ''   
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
                this.formData.name = this.defaultValue.name;
                this.formData.relation = this.defaultValue.relation;
                this.formData.position = this.defaultValue.position;
                this.formData.phone = this.defaultValue.phone;
            } else {
                this.formData.name = '';
                this.formData.relation = '';
                this.formData.position = '';
                this.formData.phone = '';
            }
        },
        save () {
            if(this.formData.name===""&&this.formData.relation===""&&this.formData.position===""&&this.formData.phone==="") {
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