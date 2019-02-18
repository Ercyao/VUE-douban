<template>
  <div class="rating">
    <div v-if="rating == 0">
      <span>暂无评分</span>
    </div>
    <div v-else>
      <template v-for="n in full" >
        <span :key="n" class="star star-full"></span>
      </template>
      <template v-for="n in gray">
        <span :key="n" class="star star-gray"></span>
      </template>
      <span class="value">{{rating}}</span>
    </div>
    <!--<slot name="ratingsCount"></slot>-->
  </div>
</template>

<script>
export default {
  props: ['rating'],
  data () {
    return {
      full: 0,
      gray: 0
    }
  },
  created () {
    let value = this.rating
    this.full = parseInt(value / 2)
    this.gray = 5 - this.full
  }
}
</script>

<style lang="less" scoped>
.rating {
  margin: 5px 0;
  span {
    display: inline-block;
  }
}
.star {
  margin: 0 -3px;
  border-style: solid;
  border-top-width: 5px;
  border-right-width: 10px;
  border-left-width: 10px;
  height: 0;
  position: relative;
  width: 0;
  transform: scale(0.7);
}
.star:before,
.star:after {
  border-style: solid;
  border-top-width: 5px;
  border-right-width: 10px;
  border-left-width: 10px;
  content: "";
  display: block;
  height: 0;
  left: -10px;
  position: absolute;
  top: -5px;
  width: 0;
}
.star:before {
  transform: rotate(70deg);
}
.star:after {
  transform: rotate(-70deg);
}

.star-full {
  border-color: #fd4 transparent transparent transparent;
}
.star-full:before,
.star-full:after {
  border-color: #fd4 transparent transparent transparent;
}
.star-gray {
  border-color: #c0c0c0 transparent transparent transparent;
}
.star-gray:before,
.star-gray:after {
  border-color: #c0c0c0 transparent transparent transparent;
}
</style>
