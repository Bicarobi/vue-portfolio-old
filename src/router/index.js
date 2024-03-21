import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import ResumeView from "../views/ResumeView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
	{
		path: "/about",
		name: "about",
		component: AboutView,
	},
	{
		path: "/resume",
		name: "resume",
		component: ResumeView,
	},
	{
		path: "/portfolio/:filter?",
		name: "portfolio",
		component: PortfolioView,
		props: true,
	},
	/* {
		path: "/contact",
		name: "contact",
		component: ContactView,
	}, */
	/* {
		path: "/:catchAll(.*)*",
		name: "about",
		component: AboutView,
	}, */
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
