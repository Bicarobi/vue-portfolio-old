<template>
	<div class="resume-container">
		<div class="type-container">
			<img src="../assets/book-icon.svg" />
			<h1>Education</h1>
		</div>
		<div style="padding-left: 55px">
			<ResumeInfo v-for="info in eduInfo" :key="title" :title="info.title" :time="info.time" :description="info.description" />
		</div>
	</div>
	<hr class="resume-info-line" />
	<div class="resume-container">
		<div class="type-container">
			<img src="../assets/work-icon.svg" />
			<h1>Experience</h1>
		</div>
		<div style="padding-left: 55px">
			<ResumeInfo v-for="info in expInfo" :key="title" :title="info.title" :time="info.time" :description="info.description" />
		</div>
	</div>
	<hr class="resume-info-line" />
	<div class="resume-container">
		<div class="type-container"><h2>My Skills</h2></div>
		<div class="resume-progress-bar-container">
			<ProgressBar type="3D Design" percentage="90" />
			<ProgressBar type="Web Development" percentage="80" />
			<ProgressBar type="Web Design" percentage="80" />
			<ProgressBar type="Graphic Design" percentage="70" />
		</div>
	</div>
</template>

<script>
import ResumeInfo from "../components/ResumeInfo.vue";
import ProgressBar from "../components/ProgressBar.vue";

export default {
	name: "Resume",
	components: { ResumeInfo, ProgressBar },
	data() {
		return {
			eduInfo: [
				{ title: "Sveučilište Sjever Varaždin", time: "2020 — present", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam." },
				{ title: "Elektrostrojarska Škola Varaždin", time: "2016 — 2020", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam." },
			],
			expInfo: [{ title: "Prolink", time: "2023 — 2024    ", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam." }],
		};
	},
};
</script>

<style>
.resume-container {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px 40px;
}

.type-container {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 15px;
	font-weight: bold;
	color: #ebebeb;
	width: 100%;
}

.type-container img {
	height: auto;
	border-radius: 10px;
	padding: 7px;
	box-shadow: #171717 0px 4px 6px 0px;
	background-color: #2b2b2b;

	height: 2.5em;
}

.resume-info-line {
	width: calc(100% - 80px);
	margin: 0px auto 20px auto;
	border: 1px solid #292929;
	border-radius: 1px;
}

.resume-progress-bar-container {
	width: 100%;
	background-color: #2b2b2b;
	border-radius: 15px;
	padding: 20px 20px 5px 20px;
	margin: 0px auto;
	border-style: solid;
	border-width: 1px;
	border-color: #383838;
}
</style>
