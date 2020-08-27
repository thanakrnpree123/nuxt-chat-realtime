<template>
  <div class="container_login">
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" @click="login">Login</a-button>
      </a-form-item>
    </a-form>
    <!-- <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="email">
        <a-input
          v-decorator="[
            'email',
            {
              rules: [{ required: true, message: 'Please input your email!' }],
            },
          ]"
        />
      </a-form-item>
      <a-form-item label="password">
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                { required: true, message: 'Please input your password!' },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>-->
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  methods:{
      login(){
          var provider = new firebase.auth.GoogleAuthProvider();
          provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
          firebase.auth().signInWithPopup(provider).then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
             var token = result.credential.accessToken;
             // The signed-in user info.
              var user = result.user; 
              this.$router.push('/chat')
                 // ...
            }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            });
      }
  }

}
</script>

<style lang="css" scoped>
.container_login {
  margin: 0, auto;
  margin-top: 10%;
  min-height: 100vh;
  /* display: block; */
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>