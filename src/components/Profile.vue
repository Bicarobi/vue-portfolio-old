<template>
	<div class="rainbow"><img class="profile-image" src="../assets/profile-placeholder.jpg" /></div>
	<h2 class="profile-name">Robert Cmrečki</h2>
	<a class="profile-title" href="https://urn.nsk.hr/urn:nbn:hr:122:388921"><h3>bacc. ing. techn. graph.</h3></a>
	<div class="profile-tag-container">
		<h4 class="profile-tag">Web Developer</h4>
		<h4 class="profile-tag">Web Designer</h4>
		<h4 class="profile-tag">3D Designer</h4>
		<h4 class="profile-tag">Graphic Designer</h4>
		<h4 class="profile-tag">Photographer</h4>
	</div>

	<hr class="profile-line" />

	<div class="profile-info-container">
		<!-- <ProfileInfoTag type="email" description="cmrecki.robert@gmail.com" image="email-icon.svg" />
		<ProfileInfoTag type="phone" description="+385 91 211 1165" image="phone-icon.svg" />
		<ProfileInfoTag type="location" description="Croatia / Varaždin" image="location-icon.svg" /> -->

		<ProfileInfoTag v-for="tag in tags" :key="tag.type" :type="tag.type" :description="tag.description" :image="tag.image" />
	</div>

	<hr class="profile-line" />

	<div class="profile-social-container">
		<a href="https://www.linkedin.com/in/robert-cmrecki/" target="_blank"> <img src="../assets/linkedin-icon.svg" /></a>
		<a href="https://github.com/Bicarobi/" target="_blank"> <img src="../assets/github-icon.svg" /></a>
		<a href="https://www.instagram.com/ro2tsa/" target="_blank"><img src="../assets/instagram-icon.svg" /></a>
	</div>
</template>

<script>
import ProfileInfoTag from "../components/ProfileInfoTag.vue";

export default {
	name: "Profile",
	components: { ProfileInfoTag },
	data() {
		return {
			tags: [
				{ type: "email", description: "cmrecki.robert@gmail.com", image: "email-icon.svg" },
				{ type: "phone", description: "+385 91 211 1165", image: "phone-icon.svg" },
				{ type: "location", description: "Croatia / Varaždin", image: "location-icon.svg" },
			],
		};
	},
};
</script>

<style>
.profile-image {
	width: 100%;
	height: 100%;
	border-radius: 25px;
}

.profile-name {
	font-weight: bold;
	color: #ebebeb;
	margin: 50px 0 0 0;
}

.profile-title {
	font-size: 0.8em;
	color: #fbb300;
	text-decoration: none;
}

.profile-tag-container {
	width: 80%;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 5px;

	margin: 35px 0 0 0;
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
	gap: 20px;

	margin: 0;
}

.profile-social-container {
	width: 70%;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	gap: 10px;

	margin: 0;
}

.profile-social-container a {
	max-width: 15%;
}

.profile-social-container img {
	width: 100%;
	cursor: pointer;
}

.rainbow {
	position: relative;
	z-index: 0;
	width: 50%;
	height: auto;
	border-radius: 25px;
	overflow: hidden;
	padding: 2px;

	&::before {
		content: "";
		position: absolute;
		z-index: -2;
		left: -50%;
		top: -50%;
		width: 200%;
		height: 200%;
		background-color: #399953;
		background-repeat: no-repeat;
		background-size: 50% 50%, 50% 50%;
		background-position: 0 0, 100% 0, 100% 100%, 0 100%;
		background-image: linear-gradient(#7b42e6, #7b42e6), linear-gradient(#fbb300, #fbb300), linear-gradient(#7b42e6, #7b42e6), linear-gradient(#fbb300, #fbb300);
		animation: rotate 4s linear infinite;
	}
}

@keyframes rotate {
	100% {
		transform: rotate(1turn);
	}
}
</style>
