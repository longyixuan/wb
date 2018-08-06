<template>
    <div class="yzwb-ksxx">
        <van-panel title="工作与学习经历" status="4/7">
            <van-field 
                value="现学习工作单位"
                required
                icon="edit"
                disabled
            />
            <van-field
                v-model="xxygzjl.value"
                type="textarea"
                :error="xxygzjl.error"
                :error-message="xxygzjl.errorMessage"
            />
            <van-field 
                value="工作与学习经历(高中毕业后起)"
                required
                icon="add-o"
                disabled
                @click-icon = "editGzjl(-1)"
            />
            <template v-for="item,index in gzjl">
                <van-field 
                    :value="item.date + ' ' + item.company + '（' + item.position+'）'"
                    type="textarea"
                    rows="1"
                    autosize
                    disabled
                    icon="arrow"
                    @click-icon = "editGzjl(index)"
                />
            </template>
            <van-cell-group>
                <van-cell>
                    <van-button size="large" type="primary" @click="$router.push({ name: 'jcxx' })">下一步</van-button>
                </van-cell>
            </van-cell-group>
        </van-panel>
        <van-popup v-model="Picker.isShow" position="right" class="yzwb-popup">
            <yzwb-inputs-picker
                :defaultValue="Picker.value"
                :defaultIndex= "Picker.defaultIndex"
                @save="save"
                @del="del"
                @goback="goback"
            />
        </van-popup>
    </div>
</template>
<script>
import yzwbInputsPicker from '@/components/yzwbInputsPicker'
export default {
    name: 'gzxxjl',
    components: {
        yzwbInputsPicker
    },
    data () {
       return {
           Picker: {
                isShow: false,
                value: null,
                defaultIndex: -1
            },
            xxygzjl: {
                value: '',
                error: false,
                errorMessage: ''
            },
            gzjl: [
                {
                    date: '2011-09-01 ~ 2018-09-01',
                    company: '北京知满天文化发展有限公司',
                    position: '会计',
                    error: '',
                    errorMessage: ''
                },
                {
                    date: '2018-09-02 ~ 2018-10-01',
                    company: '北京知满天文化发展有限公司',
                    position: '总编',
                    error: '',
                    errorMessage: ''
                }
            ]
       } 
    },
    methods: {
        editGzjl (index) {
            this.Picker.value = index === -1 ? null : this.gzjl[index];
            this.Picker.defaultIndex = index;
            this.Picker.isShow = true;
        },
        save (value) {
            if(this.Picker.defaultIndex===-1) {
                this.gzjl.push(value);
            } else {
                this.gzjl[this.Picker.defaultIndex].date = value.date;
                this.gzjl[this.Picker.defaultIndex].company = value.company;
                this.gzjl[this.Picker.defaultIndex].position = value.position;
            }
            this.Picker.isShow = false;
        },
        del () {
            this.gzjl.splice(this.Picker.defaultIndex,1);
            this.Picker.isShow = false;
        },
        goback () {
            this.Picker.isShow = false;
        }
    }
}
</script>

