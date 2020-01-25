<template>
  <div>
      <div class="avatar"></div>
			<p>{{username}}</p>
  </div>
</template>

<script>
export default {
	name:"userInfo",
	created () {
		this.username = this.$route.query.name;
	},
	data () {
		return {
			username:""
		}
	}
}
</script>

<style scoped>
	.avatar{
		margin: 20px auto;
		background-color: blue;
		width: 100px;
		height: 100px;
		border:1px solid #ffffff;
		border-radius: 50px;
		box-shadow: #666666 3px 3px 10px 3px;
	}
	p{
		text-align: center;
	}
</style>