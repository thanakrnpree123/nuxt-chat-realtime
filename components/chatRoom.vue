<template>
  <div class="con">
    <div :style="{ background: '#fff', padding: '24px'}" class="sc">
      <a-list v-if="messages.length" :data-source="messages" item-layout="horizontal">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-comment :author="item.text" />
        </a-list-item>
      </a-list>
    </div>

    <a-comment>
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
      <div slot="content">
        <a-form-item>
          <!-- <input type="text" name="massange" id="" v-model="massange" /> -->
          <a-textarea :value="value" :rows="4" @change="handleChange" />
        </a-form-item>
        <a-form-item>
          <a-button
            html-type="submit"
            :loading="submitting"
            type="primary"
            @click="handleSubmit"
            style="float: right;"
          >Send</a-button>
        </a-form-item>
      </div>
    </a-comment>
  </div>
</template>
<script>
import moment from 'moment'
import { fireDb } from '~/plugins/firebase.js'
export default {
  
  data() {
    return {
      messages: [],
      submitting: false,
      value: '',
      moment,
    }
  },
  methods: {
    fetchMassage() {
      fireDb
        .collection('chat')
        .orderBy('createAT')
        .onSnapshot((querySnapshot) => {
          let allMassage = []
          querySnapshot.forEach((element) => {
            allMassage.push(element.data())
          })
          console.log(allMassage)
          this.messages = allMassage
        })
    },
    handleSubmit() {
      if (!this.value) {
        return
      }
      this.submitting = true
      this.submitting = false
        fireDb.collection('chat').add({
          text: this.value,
          createAT: new Date(),
        })
        this.value = ''
        this.fetchMassage()
      // setTimeout(() => {
        
      // }, 1000)
    },
    handleChange(e) {
      this.value = e.target.value
    },
  },
  //  watch: {
  //   messages: function (val) {
  //     this.messages = val
  //   }
  // },
  created() {
    this.fetchMassage()
  },
  updated(){
    let container = this.$el.querySelector(".sc")
        container.scrollTop = container.scrollHeight
  }
}

</script>
<style lang="css" scoped>
.con {
  margin-top: 5%;
  margin-left: 15%;
  margin-right: 15%;
  height: 100%;
}
.sc {
  /* background-color: lightblue;
  width: 110px;
  height: 110px; */
  /* min-height: 40vh; */
  height: 40vh;
  overflow: auto;
}
</style>
