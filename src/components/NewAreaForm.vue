<template lang="html">
  <div id="ski-area-form">
  <form v-on:submit="createNewArea">
    <label>Country:
      <input type="text" name="Country" value="" v-model="newResort.Country" required>
    </label>
    <label>Resort:
      <input type="text" name="Resort" value="" v-model="newResort.Resort" required>
    </label>
    <label>Picture:
      <input type="text" name="Picture" value="" v-model="newResort.Picture" required>
    </label>
    <label>piste Map:
      <input type="text" name="pisteMap" value="" v-model="newResort.pisteMap" required>
    </label>
    <button type="submit" name="button">Create</button>
  </form>
</div>

</template>

<script>
import {eventBus} from '../main.js'
export default {
  data(){
    return {
      newResort: {
        Country: "",
        Resort: "",
        Picture: "",
        pisteMap: ""
      },
      skiInfo:[]
    }
  },
  mounted(){
    fetch("http://localhost:3000/api/skiInfo/")
    .then(res => res.json())
    .then(data => this.skiInfo = data)
  },
  methods: {
    createNewArea(e){
      e.preventDefault();
      fetch("http://localhost:3000/api/skiInfo/", {
        method: 'post',
        body: JSON.stringify(this.newResort),
        headers: { 'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(res => eventBus.$emit('new-resort', res))
    }
  }
}
</script>

<style lang="css" scoped>
/* form {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 30px;
	}
	label {
		margin-bottom: 20px;
	}
	input {
		padding: 5px;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		font-size: 0.9em;
	}

	button:not([type="reset"]), button:not([type="reset"]):hover, button:not([type="reset"]):active {
		background-color: white;
		box-shadow: 0 0 0 white;
	} */

</style>
