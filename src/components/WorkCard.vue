<template>
	<div class="work-card-container">
		<div>{{ title }}</div>
		<div>{{ type }}</div>
		<div>{{ desc }}</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		type: String,
		desc: String,
		img: String,
		link: String,
	},
};
</script>

<style>
.work-card-container {
	background-color: #2b2b2b;
	border-radius: 20px;

	width: 100%;
	max-width: calc(25% - 15px);
}
</style>
