<template>
    <div class="yzwb-ksxx">
        <van-panel title="家庭信息" status="4/7">
            <van-field
                placeholder=""
                label="家庭主要成员"
                required
                icon="add-o"
                @click-icon = "editJtcy(-1)"
                disabled
            />
            <template v-for="item,index in jtcy">
                <van-field 
                    :value="item.name + ' ' + item.relation + ' ' + item.position + ' ' + item.phone"
                    type="textarea"
                    rows="1"
                    autosize
                    disabled
                    icon="edit"
                    @click-icon = "editJtcy(index)"
                />
            </template>
            <van-cell-group>
                <van-cell>
                    <van-button size="large" type="primary" @click="$router.push({ name: 'gzxxjl' })">下一步</van-button>
                </van-cell>
            </van-cell-group>
        </van-panel>
        <van-popup v-model="Picker.isShow" position="right" class="yzwb-popup">
            <yzwb-input-picker
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
import yzwbInputPicker from '@/components/yzwbInputPicker'
export default {
    name: 'jtxx',
    components: {
        yzwbInputPicker
    },
    data () {
        return {
            Picker: {
                isShow: false,
                value: null,
                defaultIndex: -1
            },
            jtcy: [ //家庭信息
                {
                    name: '张敏',
                    relation: '母亲',
                    phone: '13028129329312',
                    position: '北京和谐发展有限公司 / 职员',
                    error: '',
                    errorMessage: ''
                },
                {
                    name: '王瑞',
                    relation: '父亲',
                    phone: '1322812932935',
                    position: '北京烤鸭总店 / 店长',
                    error: '',
                    errorMessage: ''
                }
            ]
        }
    },
    methods: {
        editJtcy (index) { //增加、修改家庭信息
            this.Picker.value = index === -1 ? null : this.jtcy[index];
            this.Picker.defaultIndex = index;
            this.Picker.isShow = true;
        },
        save (value) {
            if(this.Picker.defaultIndex===-1) {
                this.jtcy.push(value)
            } else {
                this.jtcy[this.Picker.defaultIndex].name = value.name;
                this.jtcy[this.Picker.defaultIndex].relation = value.relation;
                this.jtcy[this.Picker.defaultIndex].phone = value.phone;
                this.jtcy[this.Picker.defaultIndex].position = value.position;
            }
            this.Picker.isShow = false;
        },
        del () {
            this.jtcy.splice(this.Picker.defaultIndex,1);
            this.Picker.isShow = false;
        },
        goback () {
            this.Picker.isShow = false;
        }
    }
}
</script>

