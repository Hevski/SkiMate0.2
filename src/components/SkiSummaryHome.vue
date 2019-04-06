<template lang="html">
  <div class="zoom">
    <div class="ski-summary" :style="style">
      <h3>{{ski.Country}}</h3>
      <h3>{{ski.Resort}}</h3>
      <div id="app">
        <!-- <button type="button" class="btn" @click="showModal">View Piste Map</button> -->
      </div>
      <!-- <router-link :to="{name: 'SkiPisteMap', params: {id: this.ski._id, ski: this.ski}}" tag="button">View Piste Map</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "skiSummaryHome",
  props: ['ski'],
  computed: {
    style () {
      return 'background-image: url(' + this.ski.picture + ');'
    }
  }
}
</script>

<style lang="css" scoped>

.ski-summary {
  display: flex;
  height: 200px;
  background-size: cover;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

h3 {
  color: white;
  background-color: rgba(74,70,70,0.5);
  padding: 10px;
  border-radius: 10px;
}

div.container {
  padding: 10px;
}

.zoom {
  transition: transform .2s;
}

.zoom:hover {
  -ms-transform: scale(1.05);
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

@media (min-width:768px) {
  .zoom {
    width: 46%;
    margin: 2%;
  }
}
</style>
