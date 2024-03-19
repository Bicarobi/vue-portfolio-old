<template>
	<div class="profile-info-grid-container">
		<div class="profile-info-grid-left-side">
			<img class="profile-info-image" :src="require('../assets/' + image)" />
		</div>
		<div class="profile-info-grid-right-side">
			<div class="profile-info-type">{{ type }}</div>
			<div class="profile-info-description">{{ description }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["image", "type", "description"],
};
</script>

<style>
.profile-info-grid-left-side {
	grid-area: left-side;
	width: 100%;
	background-color: #1e1e1f;
}

.profile-info-grid-right-side {
	grid-area: right-side;
	width: 100%;

	background-color: #1e1e1f;

	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
}

.profile-info-grid-container {
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: auto;
	grid-template-areas: "left-side right-side";
	gap: 10px;
}

.profile-info-image {
	width: 70%;
	height: auto;
	border-radius: 10px;
	padding: 5px;
	box-shadow: #171717 0px 4px 6px 0px;
	background-color: #2b2b2b;
}

.profile-info-type {
	text-transform: uppercase;
	font-weight: bold;
	color: #727272;
	font-size: 0.8em;
}

.profile-info-description {
	color: #ebebeb;
	font-size: 0.9em;
	word-break: break-all;
}
</style>
