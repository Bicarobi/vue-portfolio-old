<template>
	<div class="grid-container">
		<div class="grid-left-side">
			<Profile />
		</div>
		<div class="grid-right-side">
			<nav>
				<div class="nav-grid-container">
					<div class="nav-grid-left-side">
						<div class="current-page">{{ route.name }}</div>
					</div>
					<div class="nav-grid-right-side">
						<router-link to="/">About</router-link>
						<router-link :to="{ name: 'resume' }">Resume</router-link>
						<router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
						<!-- <router-link :to="{ name: 'contact' }">Contact</router-link> -->
					</div>
					<div class="nav-grid-bottom-side">
						<hr class="nav-line" />
					</div>
				</div>
			</nav>
			<router-view />
		</div>
	</div>
</template>

<script>
import Profile from "./components/Profile.vue";
import { useRoute } from "vue-router";

export default {
	name: "App",
	components: { Profile },
	data() {
		return {
			page: "about",
		};
	},
	computed: {
		route: () => useRoute(),
	},
};
</script>
