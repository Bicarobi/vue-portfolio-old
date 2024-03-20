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

<style>
.work-card-container {
	max-width: calc(33% - 15px);
	color: #ebebeb;
	width: 100%;

	.text-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
		margin-top: 10px;
		text-transform: capitalize;
	}

	img {
		background-color: #2b2b2b;
		border-radius: 20px;

		width: 100%;
	}

	.title {
		font-size: 1.2em;
	}

	.type {
		text-transform: uppercase;
		font-size: 1em;
		font-weight: bold;
		color: #727272;
		margin-top: 5px;
	}

	.desc {
	}
}
</style>
