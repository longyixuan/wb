<template>
    <div class="yzwb-ksxx">
        <form action="">
            <template v-for="item in formList">
                <input type="hidden" :value="item.value" :name="item.name">
            </template>
        </form>
        <van-panel title="联系方式" status="7/7">
            <van-field
                v-model="txdz.value"
                type="textarea"
                label="通讯地址"
                placeholder="考生通讯详细地址"
                rows="1"
                autosize
                required
                :error="txdz.error"
                :error-message="txdz.errorMessage"
            />
            <van-field
                v-model="dzxx.value"
                label="邮政编码"
                placeholder="考生通讯邮政编码"
                required
                :error="dzxx.error"
                :error-message="dzxx.errorMessage"
            />
            <van-field
                v-model="gddh.value"
                label="固定电话"
                placeholder="无固定电话填写0"
                required
                :error="gddh.error"
                :error-message="gddh.errorMessage"
            />
            <van-field
                v-model="yddh.value"
                label="移动电话"
                required
                :error="yddh.error"
                :error-message="yddh.errorMessage"
            />
            <van-field
                v-model="dzxx.value"
                label="电子信箱"
                required
                :error="dzxx.error"
                :error-message="dzxx.errorMessage"
            />
            <van-cell-group>
                <van-cell>
                    <template slot="title">
                        <span class="van-cell-text">说明：以上不可修改项信息来自 <a href="###">实名注册</a> ，如证件号码填写错误，请重新注册学信网账号。</span>
                    </template>
                </van-cell>
                <van-cell>
                    <van-button size="large" type="primary" @click="submit">提交</van-button>
                </van-cell>
            </van-cell-group>
        </van-panel>
    </div>   
</template>
<script>
export default {
    name: 'lxfs',
    data () {
        return {
            txdz: {
                value: '',
                error: false,
                errorMessage: ''
            },
            yzbm: {
                value: '',
                error: false,
                errorMessage: ''
            },
            gddh: {
                value: '',
                error: false,
                errorMessage: ''
            },
            yddh: {
                value: '',
                error: false,
                errorMessage: ''
            },
            dzxx: {
                value: '',
                error: false,
                errorMessage: ''
            }
        }
    },
    computed: {
        formList () {
            return this.$store.getters.getKsxx;
        }
    },
    methods: {
        submit () {
            this.$store.commit('setLocalStorage')
        }
    }
}
</script>

