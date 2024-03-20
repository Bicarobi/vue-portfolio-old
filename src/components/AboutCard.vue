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
