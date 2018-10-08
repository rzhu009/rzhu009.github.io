<template>
	<div>
		<top-nav></top-nav>
		<banner :mainText="bannerTextToNav[currentNav]"></banner>
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
				bannerTextToNav: {
					WhoWeAre: "As a start-up independent financial advisory groups, we aim to leverage our cross border expertise to provide a distinct and innovative perspective and long term solutions for our partners in Asia",
					WhatWeDo: "What We Do",
					Careers: "Careers",
					ContactUs: "Contact Us"
				},

				currentNav: "WhoWeAre"
			};
		},

		mounted(){
			window.eventBus.$on('navChange', this.navChange);
		},

		methods: {
			navChange(payload){
				this.currentNav = payload;
			}
		}
	};
</script>