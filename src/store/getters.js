export default {
    getJbxx(states, getters) {

    },
    gethjda(states, getters) {

    },
    getJtxx(states, getters) {

    },
    getGzxxjl(states, getters) {

    },
    getLxfs(states, getters) {

    },
    getKsxx (states) { //提交表单
        let itemList = [];
        for (const itme in states.ksxx) {
            if (states.ksxx.hasOwnProperty(itme)) {
                const value = states.ksxx[itme].value;
                itemList.push({ 'name': itme, 'value': value})
            }
        }
        return itemList;
    }
}