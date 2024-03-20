<template>
	<div class="work-card-container">
		<img :src="require('../assets/' + img)" />
		<div class="text-container">
			<div class="title">{{ title }}</div>
			<div class="type">{{ type }}</div>
			<!-- <div class="desc">{{ desc }}</div> -->
		</div>
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
