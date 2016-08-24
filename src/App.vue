<template>
  <div class="outer">
    <Bar>
      <Basket></Basket>
    </Bar>
    <div class="inner">
      <Clear></Clear>
      <router-view class='animated' transition='fade' transition-mode='out-in'></router-view>
    </div>
  </div>
</template>

<script>
  import Bar from './components/Bar'
  import Basket from './components/Basket'
  import Clear from './components/Clear'
  import store from './store/index'
  export default {
    components: {
      Basket,
      Clear,
      Bar
    },
    store: store // make this and all child components aware of the new store
  }
</script>
  
  <style>
    .inner {
      padding: 25px;
    }
  </style>