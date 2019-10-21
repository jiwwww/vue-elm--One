import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex);
const store=new vuex.Store({
    state:{
        name:'登陆',
        falg:false,
        list:[]
    },
    mutations:{
        deng(state,obj){
            state.name='退出'
            state.falg=true
            state.list=obj
        },
        tui(state){
            state.name="登陆"
            state.falg=false
        }
    }
})
export default store;
