export default {
    setJbxx (states, data) {
    },
    sethjda (states, data) {

    },
    setJtxx (states, data) {

    },
    setGzxxjl (states, data) {

    },
    setLxfs (states, data) {

    },
    setLocalStorage(states){ //提交存本地
        sessionStorage.setItem('ksxx', JSON.stringify(states.ksxx));
    },
    getLocalStorage(states) { //刷新取值
        states.ksxx = JSON.parse(sessionStorage.getItem('ksxx'));
    }
}