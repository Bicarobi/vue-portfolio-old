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
			<!-- 			<div v-for="work in filterWorks(works)" :key="title">
				<div v-if="work.type == filter || filter == null">{{ work.title }}</div> v-if="work.type == filter || filter == null"
				<WorkCard :title="work.title" :type="work.type" :desc="work.desc" :img="work.img" :link="work.link" />
			</div> -->
			<WorkCard v-for="work in filterWorks(works)" :key="title" :title="work.title" :type="replaceDash(work.type)" :desc="work.desc" :img="work.img" :link="work.link" />
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
				{ title: "work", type: "web-design", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam.", img: "placeholder.png", link: "" },
				{ title: "work2", type: "3d-design", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam.", img: "placeholder.png", link: "" },
				{ title: "work3", type: "graphic-design", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam.", img: "placeholder.png", link: "" },
				{ title: "work4", type: "photography", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam.", img: "placeholder.png", link: "" },
				{ title: "work5", type: "web-design", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam.", img: "placeholder.png", link: "" },
				{ title: "work6", type: "3d-design", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam.", img: "placeholder.png", link: "" },
				{ title: "work7", type: "graphic-design", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam.", img: "placeholder.png", link: "" },
				{ title: "work8", type: "photography", desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam.", img: "placeholder.png", link: "" },
			],
		};
	},
	methods: {
		filterWorks(works) {
			if (this.filter) {
				console.log(this.works.filter((work) => work));
				return this.works.filter((work) => work.type == this.filter);
			} else {
				console.log(works);
				return works;
			}
		},
		replaceDash(string) {
			return string.replace("-", " ");
		},
	},
};
</script>
