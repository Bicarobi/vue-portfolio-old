<template>
	<div class="about-text-container">
		<div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, praesentium dolores. Omnis fuga minima, quaerat dolorem et ad alias ipsam totam consequuntur sit error! Ducimus quisquam,
			magnam odio earum reprehenderit libero nisi natus est, voluptate, facere facilis distinctio non repellat autem consectetur! Praesentium, ipsum. Explicabo amet corrupti nemo esse sit?
		</div>
		<br />
		<div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae unde numquam consequuntur dolores, neque doloremque voluptatem corporis cumque doloribus officiis delectus porro
			praesentium quos pariatur repellat ab tempora maxime iste deleniti quia esse architecto fuga? Ipsam, voluptatibus. Labore maiores quis quibusdam blanditiis ipsam provident quasi quidem
			aspernatur, quod ad perspiciatis dolorem autem iusto. A, vitae enim doloribus in inventore reprehenderit assumenda quisquam molestias adipisci debitis nemo est harum earum blanditiis at
			laboriosam. Sequi delectus repudiandae dolor qui totam error voluptate eaque consequuntur doloremque! Impedit, nobis earum eligendi unde neque rerum explicabo hic, cum tenetur totam
			aperiam vero. Adipisci, delectus?
		</div>
	</div>
	<div class="about-doing-container">
		<h1>What I'm Doing</h1>
		<div class="about-card-container">
			<AboutCard v-for="card in cards" :key="card.type" :type="card.type" :description="card.description" :image="card.image" />
		</div>
	</div>
</template>

<script>
import AboutCard from "../components/AboutCard.vue";

export default {
	name: "About",
	components: { AboutCard },
	data() {
		return {
			cards: [
				{ type: "web development", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam.", image: "development-icon.svg" },
				{ type: "web design", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam.", image: "design-icon.svg" },
				{ type: "3D design", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam.", image: "3d-icon.svg" },
				{ type: "photography", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam.", image: "photo-icon.svg" },
			],
		};
	},
};
</script>

<style>
.about-text-container {
	padding: 0px 40px;
	margin: 0px 0px 50px 0px;

	text-align: justify;
	color: #727272;
}

.about-doing-container {
	padding: 0px 40px 0px 40px;

	text-align: justify;
	color: #ebebeb;
}

.about-card-container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 20px;
}
</style>
