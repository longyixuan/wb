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
                    <van-button size="large" type="primary">下一步</van-button>
                </van-cell>
            </van-cell-group>
        </van-panel>
    </div>
</template>
<script>
export default {
    name: 'jtxx',
    data () {
        return {
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
            if (index === -1) {
                console.log(index)
            } else {
                console.log(index)
            }
        }
    }
}
</script>

