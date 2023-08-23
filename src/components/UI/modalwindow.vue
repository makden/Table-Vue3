<template>
  <div class="backgroundBlack"></div>
  <div class="modalewindow">
    <div class="modalewindowHead">
      <h4>{{ title }}</h4>
      <span id="close" @click="hidden()">&times;</span>
    </div>
    <div class="modalewindowBody">
      <form action="" method="post" @submit.prevent="sendForm()">
        <div class="row">
          <div class="col">
            <input
              type="text"
              v-model="formData.fname"
              class="form-control"
              placeholder="First name"
            />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <input
              type="text"
              v-model="formData.iname"
              class="form-control"
              placeholder="Last name"
            />
          </div>
        </div>
        <br />
        <input
          type="submit"
          value="Сохранить"
          class="btn btn-primary float-end"
        />
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import toggleMixin from '../../mixins/toggleMixin';
export default {
  name: 'modalWindow',
  mixins: [toggleMixin],
  props: {
    title: String,
  },
  data() {
    return {
      formData: {
        fname: '',
        iname: '',
      },
    };
  },
  methods: {
    sendForm() {
      // axios({
      //   method: 'post',
      //   url: 'addData.php',
      //   data: this.formData,
      // }).then(() => {
      //   // this.tablesresul = response.data;
      //   // this.show_hide=true
      // });
    },
  },
};
</script>

<style scoped>
.backgroundBlack {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: black;
  opacity: 0.5;
}

.modalewindow {
  width: max-content;
  height: max-content;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0;
  position: fixed;
  z-index: 999;
  background-color: rgb(201, 223, 238);
  margin: auto;
  border-radius: 9px;
  overflow: hidden;
  border: solid 2px #fff;
}

.modalewindowHead {
  display: flex;
  margin: 5px 10px 5px 10px;
  align-items: center;
  justify-content: space-between;
}
#close {
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
  float: right;
}

.modalewindowHead h4 {
  font-size: 14px;
  margin: 0;
}
.modalewindowBody {
  padding: 10px;
  background-color: rgb(227, 242, 253);
  text-align: left;
  overflow: hidden;
}
</style>
