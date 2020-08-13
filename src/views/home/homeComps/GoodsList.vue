!<template>
  <div class="goodslist">
      <slot>
          
      </slot>
  </div>
</template>

<script type="text/ecmascript-6">
    import GoodsListItem from 'views/home/homeComps/GoodsListItem';
    export default {
        name:'GoodsList',
        components:{
            GoodsListItem
        }
    }
</script>

<style scoped>
</style>
