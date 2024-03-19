<template>
	<div class="portfolio-container">
		<div class="portfolio-type-container">
			<a href="">All</a>
			<a href="">Web Design</a>
			<a href="">3D Design</a>
			<a href="">Graphic Design</a>
			<a href="">Photography</a>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.portfolio-container {
	width: 100%;
	height: 100%;
	padding-left: 40px;

	color: #ebebeb;
}

.portfolio-type-container {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
}
</style>
