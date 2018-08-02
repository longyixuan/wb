<template>
    <div class="yzwb-jbxx">
        <van-panel title="基本信息" status="1/7">
            <van-field 
                v-model="ksxm.value"
                placeholder=""
                label="考生姓名"
                required
                :error="ksxm.error"
                :error-message="ksxm.errorMessage"
                icon="arrow"
                disabled
                @click-icon="$toast('调到实名注册')"
            />
            <van-field
                v-model="xmpy.value"
                placeholder=""
                label="姓名拼音"
                required
                :error="xmpy.error"
                :error-message="xmpy.errorMessage"
            />
            <van-field
                v-model="zjlx.value"
                placeholder=""
                label="证件类型"
                required
                :error="zjlx.error"
                :error-message="zjlx.errorMessage"
                disabled
                icon="arrow"
                @click-icon="$toast('调到实名注册')"
            />
            <van-field
                v-model="zjhm.value"
                placeholder=""
                label="证件号码"
                required
                :error="zjhm.error"
                :error-message="zjhm.errorMessage"
                disabled
            />
            <van-field
                v-model="csrq.value"
                placeholder=""
                label="出生日期"
                required
                :error="csrq.error"
                :error-message="csrq.errorMessage"
                icon="arrow"
                @click-icon="openPicker('yzwbDatePicker','csrq')"
                disabled
            />
            <van-field
                v-model="ksxb.value"
                placeholder=""
                label="考生性别"
                required
                :error="ksxb.error"
                :error-message="ksxb.errorMessage"
                icon="arrow"
                @click-icon="openPicker('yzwbSelectPicker','ksxb')"
                disabled
            />
            <van-field
                v-model="ksmz.value"
                placeholder=""
                label="考生民族"
                required
                :error="ksmz.error"
                :error-message="ksmz.errorMessage"
                icon="arrow"
                @click-icon="openPicker('yzwbSelectPicker','ksmz')"
                disabled
            />
            <van-field
                v-model="hyzk.value"
                placeholder=""
                label="婚姻状况"
                required
                :error="hyzk.error"
                :error-message="hyzk.errorMessage"
                icon="arrow"
                @click-icon="openPicker('yzwbSelectPicker','hyzk')"
                disabled
            />
            <van-field
                v-model="xyjr.value"
                placeholder=""
                label="现役军人"
                required
                :error="xyjr.error"
                :error-message="xyjr.errorMessage"
                icon="arrow"
                @click-icon="openPicker('yzwbSelectPicker','xyjr')"
                disabled
            />
            <van-field
                v-model="zzmm.value"
                placeholder=""
                label="政治面貌"
                required
                :error="zzmm.error"
                :error-message="zzmm.errorMessage"
                icon="arrow"
                @click-icon="openPicker('yzwbSelectPicker','zzmm')"
                disabled
            />
            <van-cell-group>
                <van-cell>
                    <template slot="title">
                        <span class="van-cell-text">说明：以上不可修改项信息来自 <a href="###">实名注册</a> ，如证件号码填写错误，请重新注册学信网账号。</span>
                    </template>
                </van-cell>
                <van-cell>
                    <van-button size="large" type="primary">下一步</van-button>
                </van-cell>
            </van-cell-group>
        </van-panel>
        <!-- 选择器插件 -->
        <van-popup v-model="Picker.isShow" position="bottom">
            <keep-alive>
                <component :is="Picker.component" @confirm="confirm" @cancel="cancel" :defaultValue="Picker.value" :name="Picker.name"></component>
            </keep-alive>
        </van-popup>
    </div>
</template>
<script>
import yzwbDatePicker from '@/components/yzwbDatePicker'
import yzwbSelectPicker from '@/components/yzwbSelectPicker'
export default {
    name: 'jbxx',
    components: {
        yzwbDatePicker,
        yzwbSelectPicker
    },
    data () {
        return {
            Picker: {
                isShow: false,
                value: '',
                component: '',
                name: ''
            },
            ksxm: {
                value: '阿皓',
                error: false,
                errorMessage: ''
            },
            xmpy: {
                value: '',
                error: true,
                errorMessage: '姓名拼音不能为空'
            },
            zjlx: {
                value: '01（居民身份证）',
                error: false,
                errorMessage: ''
            },
            zjhm: {
                value: '32072319930101523X',
                error: false,
                errorMessage: ''
            },
            csrq: {
                value: '1999-11-12',
                error: false,
                errorMessage: ''
            },
            ksxb: {
                value: '男',
                error: false,
                errorMessage: '',
            },
            ksmz: {
                value: '汉族',
                error: false,
                errorMessage: '',
            },
            hyzk: {
                value: '未婚',
                error: false,
                errorMessage: '',
            },
            xyjr: {
                value: '非现役军人',
                error: false,
                errorMessage: '',
            },
            zzmm: {
                value: '中国共产主义共青团团员',
                error: false,
                errorMessage: '',
            }
        }
    },
    methods: {
        openPicker (component,picker) {
            this.Picker = {
                isShow: true,
                value: this[picker].value,
                component: component,
                name: picker
            };
        },
        confirm (picker) {
            this[picker.name].value = picker.value;
            this.Picker.isShow = false;
        },
        cancel () {
            this.Picker.isShow = false;
        }
    },
    mounted () {
        
    }
}
</script>
<style lang="less">
    .yzwb-jbxx {
        .van-panel__header {
            background-color: #e8eaec;
            color: #455a64;
        }
        .van-cell__value {
            color: #455a64;
        }
        .van-hairline--top-bottom::after {
            border-width: 0;
        }
    }
</style>


