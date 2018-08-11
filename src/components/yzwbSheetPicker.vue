<template>
    <div class="yzwb-action">
        <van-nav-bar
            :title="title"
            left-text="返回"
            left-arrow
            right-text="确定"
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
        <van-tabs v-model="active" sticky>
            <van-tab v-for="item,index in List" :key="index" :title="initData[index] | nameFilter(item)">
                <van-cell-group>
                    <template v-for="itemChild in List[active]">
                        <van-cell :title="itemChild.name" @click="check(itemChild)"/>
                    </template>
                </van-cell-group>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    name: 'yzwbSheetPicker',
    data () {
        return {
            active: 0
        }
    },
    props: {
        List: {
            type: Array,
            default: []
        },
        initData: {
            type: Array,
            default: []
        },
        title: {
            type: String,
            default: ''
        }
    },
    filters: {
        nameFilter (value,list) {
            let title = '请选择';
            list.map(item => {
                if(item.code===value) {
                    title = item.name;
                }
            });
            return title;
        }
    },
    methods: {
        mapList (value,list) {
            let obj = null;
            list.map(item => {
                if(item.code===value) {
                    obj = {
                        'code': value,
                        'name': item.name
                    }
                }
            });
            return obj;
        },
        check (item) {
            this.$emit('check',{'item': item, 'arrIndex': this.active});
        },
        onClickLeft () {
            this.$emit('cancel');
        },
        onClickRight () {
            this.$emit('confirm', [this.mapList(this.initData[0],this.List[0]), this.mapList(this.initData[1],this.List[1])]);
        }
    },
    watch:{
        'List.length': function(a,b) {
            
        }
    }
}
</script>

