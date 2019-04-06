<!-- <template lang="html">
  <div v-if="skis">
      <ski-image v-for="(ski, index) in skis" :key="index" :ski="ski"></ski-image>
  </div>
</template>

<script>
import SkiImage from '../components/SkiImage.vue';
export default {
  data(){
    return {
      skis:[]
    }
  },
  components: {
    SkiImage
  },
  mounted(){
    fetch("http://localhost:3000/api/skiInfo/")
    .then(res => res.json())
    .then(data => this.skis = data)
  }
}
</script>

<style lang="css" scoped>
</style> -->
