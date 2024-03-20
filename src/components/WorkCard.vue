<template>
	<div>{{ title }}</div>
	<div>{{ type }}</div>
	<div>{{ desc }}</div>
</template>

<script>
export default {
	props: {
		title: String,
		type: String,
		desc: String,
	},
};
</script>
