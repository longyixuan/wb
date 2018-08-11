<template>
    <div class="yzwb-ksxx">
        <van-panel title="学历信息" status="2/7">
            <van-field 
                v-model="bydw"
                label="毕业学校"
                placeholder="请选择"
                icon="arrow"
                disabled
                @click-icon="openActionsheets(shengshiArray,'bydw')">
            </van-field>
        </van-panel>
        <!-- 选择器插件 -->
        <van-popup v-model="actionsheets.isShow" position="right" :overlay="false" class="yzwb-popup">
            <yzwb-sheet-picker @check="check" @confirm="confirm" @cancel="cancel" :List="actionsheets.list" :init-data="actionsheets.initData"></yzwb-sheet-picker>
        </van-popup>
    </div>
</template>
<script>
import {shengshiArray} from '@/lib/include.js'
import yzwbSheetPicker from '@/components/yzwbSheetPicker'
export default {
    name: 'jbxx',
    components: {
        yzwbSheetPicker
    },
    data () {
        return {
            bydw: '',
            actionsheets: {
                isShow: false,
                title: '自定义',
                list: [],
                initData: []
            },
            schList: [
                {
                    name: '清华大学',
                    code: '10001'
                }
            ]
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
        check (data) {
            console.log(data)
            if(data.arrIndex===0&&this.actionsheets.list.length===1) {
                this.actionsheets.list.push(this.schList);
                this.actionsheets.initData.push(data.item.code)
            } else {
                this.actionsheets.initData.push(data.item.code)
            }
        },
        confirm (data) {
            this.bydw = data[1].name;
            this.actionsheets.isShow = false;
        },
        cancel () {
            this.actionsheets.isShow = false;
        },
        openActionsheets (Arr,value) {
            this.actionsheets.isShow = true;
            if(this.actionsheets.list.length===0){
                this.actionsheets.list.push(shengshiArray);
            }
            
        },
        sheetClick (item) {
            this[item.traget] = item.code;
            this.actionsheet.isShow = false;
        }
    },
    mounted () {
    }
}
</script>