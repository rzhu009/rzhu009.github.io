<template>
		<div class="banner">
			<div class="container banner-main-text">
				<p>
					{{mainText}}
				</p>
			</div>
		</div>
</template>

<script>
	export default {
		props: ['mainText']
	}
</script>