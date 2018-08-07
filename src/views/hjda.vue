<template>
    <div class="yzwb-ksxx">
        <van-panel title="户籍档案" status="3/7">
            <van-field 
                v-model="jgd.value"
                placeholder="籍贯所在地"
                label="籍贯地"
                required
                :error="jgd.error"
                :error-message="jgd.errorMessage"
                icon="arrow"
                disabled
                @click-icon="openPicker('yzwbSelectsPicker','jgd')"
            />
            <van-field 
                v-model="hkd.value"
                placeholder="户口所在地"
                label="户口地"
                required
                :error="hkd.error"
                :error-message="hkd.errorMessage"
                icon="arrow"
                disabled
                @click-icon="openPicker('yzwbSelectsPicker','hkd')"
            />
            <van-field 
                v-model="hkdxxdz.value"
                placeholder="户口所在地详细地址"
                label="详细地址"
                required
                type="textarea"
                rows="1"
                autosize
                :error="hkdxxdz.error"
                :error-message="hkdxxdz.errorMessage"
            />
            <van-field 
                v-model="csd.value"
                placeholder="出生所在地"
                label="出生地"
                required
                :error="csd.error"
                :error-message="csd.errorMessage"
                icon="arrow"
                disabled
                @click-icon="openPicker('yzwbSelectsPicker','csd')"
            />
            <van-field 
                v-model="dad.value"
                placeholder="请选择考生档案所在地"
                label="档案地"
                required
                :error="dad.error"
                :error-message="dad.errorMessage"
                icon="arrow"
                disabled
                @click-icon="openPicker('yzwbSelectsPicker','dad')"
            />
            <van-field 
                v-model="daddw.value"
                placeholder="填写考生档案所在单位名称"
                label="单位名称"
                required
                type="textarea"
                rows="1"
                autosize
                :error="daddw.error"
                :error-message="daddw.errorMessage"
            />
            <van-field 
                v-model="daddwdz.value"
                placeholder="填写考生档案所在单位地址"
                label="单位地址"
                required
                type="textarea"
                rows="1"
                autosize
                :error="daddwdz.error"
                :error-message="daddwdz.errorMessage"
            />
            <van-field
                v-model="yzbm.value"
                placeholder="填写考生档案所在单位邮政编码"
                label="邮政编码"
                required
                :error="yzbm.error"
                :error-message="yzbm.errorMessage"
            />
            <van-cell-group class="yzwb-bg">
                <van-cell>
                    <van-button size="large" type="primary" @click="$router.push({ name: 'jtxx' })">下一步</van-button>
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
import yzwbSelectPicker from '@/components/yzwbSelectPicker'
import yzwbSelectsPicker from '@/components/yzwbSelectsPicker'
export default {
    name: 'hjda',
    components: {
        yzwbSelectPicker,
        yzwbSelectsPicker
    },
    data () {
        return {
            Picker: {
                isShow: false,
                value: '',
                component: '',
                name: ''
            },
            jgd: {
                value: '',
                error: false,
                errorMessage: ''
            },
            hkd: {
                value: '',
                error: false,
                errorMessage: ''
            },
            hkdxxdz: {
                value: '',
                error: false,
                errorMessage: ''
            },
            csd: {
                value: '',
                error: false,
                errorMessage: ''
            },
            dad: {
                value: '',
                error: false,
                errorMessage: ''
            },
            daddw: {
                value: '',
                error: false,
                errorMessage: ''
            },
            daddwdz: {
                value: '',
                error: false,
                errorMessage: ''
            },
            yzbm: {
                value: '',
                error: false,
                errorMessage: ''
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


