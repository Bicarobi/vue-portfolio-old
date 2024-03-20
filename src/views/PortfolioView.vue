<template>
	<div class="portfolio-container">
		<div class="type-container">
			<router-link :to="{ name: 'portfolio' }">All</router-link>
			<router-link :to="{ name: 'portfolio', params: { filter: 'web-design' } }">Web Design</router-link>
			<router-link :to="{ name: 'portfolio', params: { filter: '3d-design' } }">3D Design</router-link>
			<router-link :to="{ name: 'portfolio', params: { filter: 'graphic-design' } }">Graphic Design</router-link>
			<router-link :to="{ name: 'portfolio', params: { filter: 'photography' } }">Photography</router-link>
		</div>
		<div class="works-container">
			<div v-for="work in filterWorks(works)" :key="title">
				<!-- <div v-if="work.type == filter || filter == null">{{ work.title }}</div> v-if="work.type == filter || filter == null"-->
				<WorkCard :title="work.title" :type="work.type" :desc="work.desc" />
			</div>
		</div>
	</div>
</template>

<script>
import WorkCard from "../components/WorkCard.vue";

export default {
	props: ["filter"],
	components: { WorkCard },
	data() {
		return {
			works: [
				{ title: "work", type: "web-design", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam." },
				{ title: "work2", type: "3d-design", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam." },
				{ title: "work3", type: "graphic-design", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam." },
				{ title: "work4", type: "photography", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam." },
			],
		};
	},
	computed: {
		filterWorks(works) {
			if (this.filter) {
				console.log(this.works.filter((work) => work));
				return this.works.filter((work) => work.type == this.filter);
			} else {
				console.log(works);
				return works;
			}
		},
	},
};
</script>

<style>
.portfolio-container {
	width: 100%;
	height: 100%;
	padding-left: 40px;

	color: #ebebeb;
}

.portfolio-container .type-container {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
}

.portfolio-container a {
	font-weight: bold;
	color: #ebebeb;
	text-decoration: none;
}

.portfolio-container a.router-link-exact-active {
	color: #fbb300;
	/* text-decoration: underline; */
}

.portfolio-container .works-container {
	display: flex;
	margin-top: 50px;
}
</style>
