<template>
    <div class="yzwb-ksxx">
        <van-panel title="奖惩信息" status="6/7">
            <van-field 
                value="何时何地何原因受过何种奖励或处分"
                required
                disabled
            />
            <van-field
                v-model="jcxx.value"
                type="textarea"
                rows="1"
                :error="jcxx.error"
                :error-message="jcxx.errorMessage"
            />
            <van-field 
                value="考生作弊情况"
                required
                disabled
            />
            <van-field
                v-model="zbqk.value"
                type="textarea"
                rows="1"
                :error="zbqk.error"
                :error-message="zbqk.errorMessage"
            />
            <van-cell-group class="yzwb-bg">
                <van-cell>
                    <van-button size="large" type="primary" @click="$router.push({ name: 'lxfs' })">下一步</van-button>
                </van-cell>
            </van-cell-group>
        </van-panel>
    </div>   
</template>
<script>
export default {
    name: 'jcxx',
    data () {
        return {
            jcxx: {
                value: '',
                error: false,
                errorMessage: ''
            },
            zbqk: {
                value: '',
                error: false,
                errorMessage: ''
            }
        }
    }
}
</script>

