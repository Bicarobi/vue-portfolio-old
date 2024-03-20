<template>
	<div class="about-card-container">
		<div class="grid-container">
			<div class="grid-left-side">
				<img class="card-image" :src="require('../assets/' + image)" />
			</div>
			<div class="grid-right-side">
				<div class="card-type">{{ type }}</div>
				<div class="card-desc">{{ description }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["image", "type", "description"],
};
</script>

<style scoped>
.about-card-container > .grid-container {
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

.grid-container > .grid-left-side {
	grid-area: left-side;
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	aspect-ratio: 1 / 1;
	object-fit: cover;
}

.grid-container > .grid-right-side {
	grid-area: right-side;
	width: 100%;

	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
}

.grid-container > .card-image {
	width: 3rem;
}

.grid-right-side > .card-type {
	text-transform: uppercase;
	font-weight: bold;
	color: #727272;
	font-size: 0.8em;
}

.grid-right-side > .card-desc {
	color: #ebebeb;
	font-size: 0.9em;
	word-break: break-all;
}
</style>
