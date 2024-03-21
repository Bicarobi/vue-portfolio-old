<template>
	<div class="grid-container">
		<div class="grid-left-side">
			<Profile />
		</div>
		<div class="grid-right-side">
			<nav>
				<div class="nav-grid-container">
					<div class="nav-grid-left-side">
						<div class="current-page">{{ $t("nav." + route.name) }}</div>
					</div>
					<div class="nav-grid-right-side">
						<router-link :to="{ name: 'about' }">{{ $t("nav.about") }}</router-link>
						<router-link :to="{ name: 'resume' }">{{ $t("nav.resume") }}</router-link>
						<router-link :to="{ name: 'portfolio' }">{{ $t("nav.portfolio") }}</router-link>
						<!-- <router-link :to="{ name: 'contact' }">Contact</router-link> -->
						<div class="locale-changer">
							<select v-model="$i18n.locale">
								<option selected value="hr">Hrvatski</option>
								<option value="en">English</option>
							</select>
							<!-- <select v-model="$i18n.locale">
								<option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
									{{ locale }}
								</option>
							</select> -->
						</div>
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

	computed: {
		route: () => useRoute(),
	},
};
</script>
