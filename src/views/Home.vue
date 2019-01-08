<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-input placeholder="请输入内容" v-model="inputTxt" @change="iptChange" clearable></el-input>
    <div>{{ cplRtn }}</div>
    <hello-world msg="Welcome to Your Vue.js + TypeScript App"></hello-world>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  inputTxt = '请输入';
  cplRtn = '';
  iptChange (val: any) {
    console.log(`val -->: ${val}`);
    this.cplRtn = val;
  }
}
</script>
