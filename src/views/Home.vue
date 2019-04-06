<template lang="html">
  <div class="skiList-container">
    <div class="skiList-container">
      <h1>Places To Go</h1>
      <new-area-form :ski="ski"></new-area-form>
      <section>
        <draggable id="ski-container" :list="placesToGo" group="placesToGo">
          <ski-summary-home v-for="(ski, index) in placesToGo" :key="index" :ski="ski" :index="ski.Resort"></ski-summary-home>
        </draggable>
      </section>
    </div>

    <div>
      <h1>Places Been</h1>
      <section>
        <draggable id="ski-container" :list="placesBeen" group="placesToGo">
          <ski-summary-home v-for="(ski, index) in placesBeen" :key="index" :ski="ski"></ski-summary-home>
        </draggable>
      </section>
    </div>
    <div class="skiList-container">
      <h1>blah</h1>
    </div>
  </div>

</template>

<script>
import {eventBus} from '../main.js'
import SkiSummaryHome from '../components/SkiSummaryHome.vue';
import NewAreaForm from '../components/NewAreaForm.vue';
import draggable from 'vuedraggable'
export default {
  name: "Home",
  components: {
    NewAreaForm,
    SkiSummaryHome,
    draggable,
  },
  data() {
  return {
    ski:'',
    placesBeen:[],
    placesToGo:[],
  }
},
mounted(){
  fetch("http://localhost:3000/api/skiInfo/")
  .then(res => res.json())
  .then(data => this.placesToGo = data)
  eventBus.$on('new-resort', (res) => {
    this.placesToGo.push(res)
  })
}
}
</script>

<style lang="css" scoped>

#ski-container {
  display: flex;
  flex-direction: column;
}

#skiList-container {
  display: flex;
  flex-direction: column;
}

@media (min-width:768px) {
  #skiList-container {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
