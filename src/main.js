import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.filter('snippet', function (value) {
    return value.length > 222 ? `${value.slice(0, 222)}...` : value
})

Vue.mixin({
        methods: {
            formattedDate(timestamp) {
                return `${
                    new Date(timestamp).toLocaleDateString(
                        'en',
                        {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }
                    )
                }`
            }
        }
    }
)

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')

