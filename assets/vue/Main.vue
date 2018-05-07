<template>
	<div>
		<top-nav></top-nav>
		<div class="banner"></div>
	</div>
</template>

<script>
	import TopNav from "./TopNav/TopNav.vue";

	export default {
		components: {
			"top-nav" : TopNav
		}
	};
</script>