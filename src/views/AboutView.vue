<template>
	<div class="about-container">
		<div class="text-container">
			<div>
				Nakon završetka Elektrostrojarske Škole za Tehničara za Računalstvo, trenutno sam student na Sveučilištu Sjever, gdje sam postigao titulu prvostupnika inženjera multimedijske i
				grafičke tehnologije (bacc. ing. techn. graph.). Nastavljam svoje obrazovanje na diplomskom studiju Multimedija. Odabrao sam ovaj smjer zbog svoje strasti prema programiranju i
				povezivanju grafičkog dizajna s funkcionalnošću. Posebno sam zainteresiran za frontend i backend development jer smatram da su to područja koja oblikuju budućnost.
			</div>
			<br />
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae unde numquam consequuntur dolores, neque doloremque voluptatem corporis cumque doloribus officiis delectus porro
				praesentium quos pariatur repellat ab tempora maxime iste deleniti quia esse architecto fuga? Ipsam, voluptatibus. Labore maiores quis quibusdam blanditiis ipsam provident quasi quidem
				aspernatur, quod ad perspiciatis dolorem autem iusto. A, vitae enim doloribus in inventore reprehenderit assumenda quisquam molestias adipisci debitis nemo est harum earum blanditiis
				at laboriosam. Sequi delectus repudiandae dolor qui totam error voluptate eaque consequuntur doloremque! Impedit, nobis earum eligendi unde neque rerum explicabo hic, cum tenetur totam
				aperiam vero. Adipisci, delectus?
			</div>
		</div>
		<div class="doing-container">
			<h1>What I'm Doing</h1>
			<div class="card-container">
				<AboutCard v-for="card in cards" :key="card.type" :type="card.type" :description="card.description" :image="card.image" />
			</div>
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
