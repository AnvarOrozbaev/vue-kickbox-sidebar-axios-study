<template>
    <div class="auth">
        <div class="auth-wrapper">
            <input id="auth-input" class="auth-wrapper__input" type="text" placeholder="your email...">
            <button
             class="auth-wrapper__input-btn"  
             @click="authEmail">send</button>
            <p 
            class="invalid-msg" 
            v-if="this.isValid"> Invalid email</p>
        </div>
    </div>
</template>
<script>

 import {mapGetters, mapActions} from 'vuex' 
 import axios from 'axios'
export default {
    name: 'auth',
    data() {
        return {
            response:{},
            isValid: false,
            IsUnvalid: false,
        }
    },
    methods: {
        ...mapActions([
            'ADD_IS_VALID_TO_STATE'
        ]),
        fetchKickbox(email,api){
             axios.get(`https://api.kickbox.com/v2/verify?email=${email}&apikey=${api}`)
        .then(({ data }) => {
            this.response = data
            console.log(this.response)
            if(this.response.result == 'deliverable' || this.response.result == 'risky' ){
                this.$router.push("/catalog")
                this.isValid = true
                this.IsUnvalid = false
                this.ADD_IS_VALID_TO_STATE(this.isValid)
            } else {
                this.isValid = false;
                this.IsUnvalid = true;
                this.ADD_IS_VALID_TO_STATE(this.isValid)
            }
        })
        .catch((error) => {
            console.log(error)
            return error;
      });
        },
    
        authEmail(){
            const email =  document.querySelector("#auth-input").value;
            const api = 'test_54c1229b994f4a584e52ab1b531ade0b79f460c6f3f5d721057dcfed62e1d6d9';
            this.fetchKickbox(email,api);
        }
},
    computed:{
        ...mapGetters(['IS_VALID'])
    }


}
</script>
<style lang="scss">
.invalid-msg{
    color: red;
}
.auth{
    background: rgb(42, 43, 44);
    position: relative;
    height: 100vh;
}
.auth-wrapper {
    position: absolute;
    top: 40%;
    left: 40%;
    z-index: 1;
    max-width: 400px;
    max-height: 400px;
    display: flex;
       &__input{
           width: 200px;    
           height: 46px;
           padding: 0;
        }
        &__input-btn{
            width: 100px;
            height: 50px;
            padding: 0;
       
        }
}
 
</style>