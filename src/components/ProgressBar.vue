<template>
	<div class="progress-bar-container">
		<div class="text-container">
			<div>{{ type }}</div>
			<div style="color: #727272">{{ percentage }}%</div>
		</div>
		<div class="bar-outline">
			<div class="bar-fill" :style="{ width: percentage + '%' }"></div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["type", "percentage"],
};
</script>
