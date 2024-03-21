<template>
	<div class="profile-container">
		<!-- <div class="rainbow"><img class="image" src="../assets/profile-placeholder.jpg" /></div> -->
		<img src="../assets/profile-placeholder.jpg" />
		<h2 class="name">Robert Cmrečki</h2>
		<a class="title" href="https://urn.nsk.hr/urn:nbn:hr:122:388921"><h3>bacc. ing. techn. graph.</h3></a>
		<div class="tag-container">
			<h4 class="tag">Web Developer</h4>
			<h4 class="tag">Web Designer</h4>
			<h4 class="tag">3D Designer</h4>
			<h4 class="tag">Graphic Designer</h4>
			<h4 class="tag">Photographer</h4>
		</div>

		<hr class="line" />

		<div class="info-container">
			<ProfileInfoTag v-for="tag in processedTags" :key="tag.type" :type="tag.type" :description="tag.description" :image="tag.image" />
		</div>
		<hr class="line" />
		<div class="social-container">
			<a href="https://www.linkedin.com/in/robert-cmrecki/" target="_blank"> <img src="../assets/linkedin-icon-yellow.svg" /></a>
			<a href="https://github.com/Bicarobi/" target="_blank"> <img src="../assets/github-icon-yellow.svg" /></a>
			<a href="https://www.instagram.com/ro2tsa/" target="_blank"><img src="../assets/instagram-icon-yellow.svg" /></a>
		</div>
	</div>
</template>

<script>
import ProfileInfoTag from "../components/ProfileInfoTag.vue";

export default {
	name: "Profile",
	components: { ProfileInfoTag },
	computed: {
		processedTags() {
			const tags = [
				{ type: "email", description: "cmrecki.robert@gmail.com", image: "email-icon-yellow.svg" },
				{ type: "phone", description: "+385 91 211 1165", image: "phone-icon-yellow.svg" },
				{ type: "location", description: " / Varaždin", image: "location-icon-yellow.svg" },
			];

			return tags.map((tag) => {
				if (tag.type == "phone") {
					tag.type = this.$i18n.t("profile.phone");
				}

				if (tag.type == "location") {
					if (tag.type == "location") {
						tag.type = this.$i18n.t("profile.location");
					}
					tag.description = this.$i18n.t("profile.location2") + " / Varaždin";
				}
				return {
					type: tag.type,
					description: tag.description,
					image: tag.image,
				};
			});
		},
	},
};
</script>
