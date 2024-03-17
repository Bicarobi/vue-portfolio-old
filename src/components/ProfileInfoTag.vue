<template>
	<div class="profile-info-grid-container">
		<div class="profile-info-grid-left-side"><img class="profile-info-image" src="../assets/profile-placeholder.jpg" /></div>
		<div class="profile-info-grid-right-side">
			<div>Type</div>
			<div>Description</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.profile-info-grid-left-side {
	grid-area: left-side;
	background-color: #1e1e1f;
}

.profile-info-grid-right-side {
	grid-area: right-side;
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
	gap: 20px;
}

.profile-info-image {
	width: 100%;
	height: auto;
	border-radius: 10px;
	padding: 5px;
	box-shadow: #171717 0px 4px 6px 0px;
}
</style>
