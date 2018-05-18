<template>
	<div>
		<top-nav></top-nav>
		<banner :mainText="bannerText"></banner>
	</div>
</template>

<script>
	import TopNav from "./TopNav/TopNav.vue";
	import Banner from "./Banner/banner.vue";

	export default {
		components: {
			"top-nav" : TopNav,
			"banner" : Banner
		},

		data(){
			return {
				bannerText: "As a start-up independent financial advisory groups, we aim to leverage our cross border expertise to provide a distinct and innovative perspective and long term solutions for our partners in Asia"
			};
		},

		mounted(){

		}
	};
</script>