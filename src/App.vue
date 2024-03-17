<template>
	<div class="grid-container">
		<div class="grid-left-side">
			<Profile />
		</div>
		<div class="grid-right-side">
			<nav>
				<router-link to="/">About</router-link>
				<router-link :to="{ name: 'resume' }">Resume</router-link>
				<router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
			</nav>
			<router-view />
		</div>
	</div>
</template>

<script>
import Profile from "./components/Profile.vue";

export default {
	name: "App",
	components: { Profile },
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

#app nav {
	padding: 30px;
}

#app nav a {
	font-weight: bold;
	color: #ebebeb;
}

#app nav a.router-link-exact-active {
	color: #42b983;
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
