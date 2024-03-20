<template>
	<div class="resume-container">
		<div class="content-container">
			<div class="type-container">
				<img src="../assets/book-icon.svg" />
				<h1>Education</h1>
			</div>
			<div style="padding-left: 55px">
				<ResumeInfo v-for="info in eduInfo" :key="title" :title="info.title" :time="info.time" :description="info.description" />
			</div>
		</div>
		<hr class="info-line" />
		<div class="content-container">
			<div class="type-container">
				<img src="../assets/work-icon.svg" />
				<h1>Experience</h1>
			</div>
			<div style="padding-left: 55px">
				<ResumeInfo v-for="info in expInfo" :key="title" :title="info.title" :time="info.time" :description="info.description" />
			</div>
		</div>
		<hr class="info-line" />
		<div class="content-container">
			<div class="type-container"><h2>My Skills</h2></div>
			<div class="resume-progress-bar-container">
				<ProgressBar type="3D Design" percentage="90" />
				<ProgressBar type="Web Development" percentage="80" />
				<ProgressBar type="Web Design" percentage="80" />
				<ProgressBar type="Graphic Design" percentage="70" />
			</div>
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
