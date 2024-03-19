<template>
	<div class="resume-info-container">
		<div class="resume-info-title">{{ title }}</div>
		<div class="resume-info-time">{{ time }}</div>
		<div class="resume-info-desc">{{ description }}</div>
	</div>
</template>

<script>
export default {
	props: ["image", "title", "time", "description"],
};
</script>

<style>
.resume-info-container {
	display: flex;
	color: #ebebeb;
	align-items: flex-start;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 40px;
}

.resume-info-title {
	font-size: 1.5em;
}

.resume-info-time {
	color: #fbb300;

	font-size: 1em;
}

.resume-info-desc {
	font-size: 1.2em;
	color: #727272;
}
</style>
