<template>
	<div class="progress-bar-container">
		<div class="progress-bar-text-container">
			<div>{{ type }}</div>
			<div style="color: #727272">{{ percentage }}%</div>
		</div>
		<div class="progress-bar-outline">
			<div class="progress-bar-fill"></div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["type", "percentage"],
};
</script>

<style>
.progress-bar-outline {
	width: 100%;
	height: 7px;
	border-radius: 20px;
	background-color: #464646;
}

.progress-bar-fill {
	/* background-color: #fbb300; */
	background-image: linear-gradient(to right, #fbb300, #fb7100);
	border-radius: 20px;

	height: 100%;
	width: v-bind(percentage + "%");
}

.progress-bar-text-container {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
	color: #ebebeb;
	margin-bottom: 10px;
	font-size: 1.1em;
}

.progress-bar-container {
	margin-bottom: 20px;
}
</style>
