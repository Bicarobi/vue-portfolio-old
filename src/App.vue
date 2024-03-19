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

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

#app nav .nav-grid-left-side {
	grid-area: left-side;
	width: 100%;
	padding-left: 40px;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-end;
}

#app nav .nav-grid-right-side {
	grid-area: right-side;
	width: fit-content;
	height: 60px;
	padding: 0 40px;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 20px;

	border-bottom-left-radius: 15px;
	border-top-right-radius: 15px;

	background-color: #2f2f2f;
}

#app nav .nav-grid-bottom-side {
	grid-area: bottom-side;
	width: 100%;
	padding-left: 40px;
}

#app nav .nav-grid-container {
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: auto 75px;
	grid-template-areas:
		"left-side right-side"
		"bottom-side bottom-side";
	justify-items: end;
}

#app nav .current-page {
	font-size: 2rem;
	color: #ebebeb;
	text-transform: capitalize;
	font-weight: bold;
	line-height: 0.6em;
}

#app nav a {
	font-weight: bold;
	color: #ebebeb;
	text-decoration: none;
}

#app nav a.router-link-exact-active {
	color: #fbb300;
	/* text-decoration: underline; */
}

#app .nav-line {
	width: 3em;
	border-radius: 15px;
	border: solid 3px #fbb300;
	margin: 30px 0px 50px 0px;
}

#app .grid-left-side {
	grid-area: left-side;
	background-color: #1e1e1f;
	padding: 50px 0 50px 0;

	border-radius: 15px;
	border-style: solid;
	border-width: 1px;
	border-color: #2f2f2f;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

#app .grid-right-side {
	grid-area: right-side;
	background-color: #1e1e1f;

	border-radius: 15px;
	border-style: solid;
	border-width: 1px;
	border-color: #2f2f2f;
}

#app .grid-container {
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: auto;
	grid-template-areas: "left-side right-side";
	gap: 20px;
}
</style>
