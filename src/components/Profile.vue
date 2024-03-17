<template>
	<img class="profile-image" src="../assets/profile-placeholder.jpg" />
	<h2 class="profile-name">Robert Cmrečki</h2>
	<div class="profile-tag-container">
		<h4 class="profile-tag">Web Developer</h4>
		<h4 class="profile-tag">Web Designer</h4>
		<h4 class="profile-tag">3D Designer</h4>
		<h4 class="profile-tag">Graphic Designer</h4>
	</div>

	<hr class="profile-line" />

	<div class="profile-info-container">
		<ProfileInfoTag />
		<ProfileInfoTag />
		<ProfileInfoTag />
		<ProfileInfoTag />
	</div>

	<div class="profile-social-container"></div>
</template>

<script>
import ProfileInfoTag from "../components/ProfileInfoTag.vue";

export default {
	name: "Profile",
	components: { ProfileInfoTag },
};
</script>

<style>
.profile-image {
	width: 50%;
	height: auto;
	border-radius: 25px;
}

.profile-name {
	font-weight: bold;
	color: #ebebeb;
	margin: 50px 0 0 0;
}

.profile-tag-container {
	width: 80%;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 5px;

	margin: 50px 0 0 0;
}

.profile-tag {
	color: #ebebeb;
	padding: 10px 15px;
	margin: 0;

	border-radius: 20px;
	background-color: #2b2b2b;
	/* box-shadow: #171717 0px 4px 6px 0px; */
}

.profile-line {
	width: 80%;
	margin: 30px 0;
	border: 1px solid #292929;
	border-radius: 1px;
}

.profile-info-container {
	width: 70%;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 10px;

	margin: 0;
}

.profile-social-container {
}
</style>
