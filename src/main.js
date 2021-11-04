import Vue from 'vue'
import App from './App'

new Vue({
    /*render(createElement) {
        return createElement(App)
    }*/
    render: h => h(App) //equivalente às linhas comentadas
}).$mount("#app")