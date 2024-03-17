import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import ResumeView from "../views/ResumeView.vue";
import PortfolioView from "../views/PortfolioView.vue";

const routes = [
	{
		path: "/",
		name: "about",
		component: AboutView,
	},
	{
		path: "/resume",
		name: "resume",
		component: ResumeView,
	},
	{
		path: "/portfolio",
		name: "portfolio",
		component: PortfolioView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
