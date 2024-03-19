<template>
	<div class="about-card-grid-container">
		<div class="about-card-grid-left-side">
			<img class="about-card-image" :src="require('../assets/' + image)" />
		</div>
		<div class="about-card-grid-right-side">
			<div class="about-card-type">{{ type }}</div>
			<div class="about-card-description">{{ description }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["image", "type", "description"],
};
</script>

<style>
.about-card-grid-left-side {
	grid-area: left-side;
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	aspect-ratio: 1 / 1;
	object-fit: cover;
}

.about-card-grid-right-side {
	grid-area: right-side;
	width: 100%;

	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
}

.about-card-grid-container {
	display: grid;
	grid-template-columns: 1fr 5fr;
	grid-template-rows: auto;
	grid-template-areas: "left-side right-side";
	gap: 20px;
	max-width: calc(50% - 10px);

	box-shadow: #171717 0px 4px 6px 0px;
	border-radius: 15px;
	background-color: #2b2b2b;
	padding: 20px;
}

.about-card-image {
	width: 70%;
	border-radius: 10px;
	color: #581fc6;
}

.about-card-type {
	text-transform: uppercase;
	font-weight: bold;
	color: #727272;
	font-size: 0.8em;
}

.about-card-description {
	color: #ebebeb;
	font-size: 0.9em;
	word-break: break-all;
}
</style>
