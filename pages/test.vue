<template>
  <div class="container_login">
    <a-form
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
      <!-- <a-form-item label="Gender">
        <a-select
          v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please select your password!' }] },
        ]"
          placeholder="Select a option and change input text above"
          @change="handleSelectChange"
        >
          <a-select-option value="male">male</a-select-option>
          <a-select-option value="female">female</a-select-option>
        </a-select>
      </a-form-item>-->
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import loginAPI from '~/api/login.js'
import axios from 'axios'
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          let data = axios
            .get('http://localhost:3000/user?email=' + values.email)
            .then((data) => {
              console.log(data)
            })
        }
      })
    },
  },
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
