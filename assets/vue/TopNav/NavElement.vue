<template>
	<div class="element-container">
		<div class="title-slot">
			<slot name="title"></slot>
		</div>
		<div class="body-slot">
			<slot name="body"></slot>
		</div>
	</div>
</template>

<script>

</script>

<style scoped>
	.body-slot {
		display: none;
	    position: absolute;
	    padding: 4em 0 1em;
	    left: 0;
	    background: #fafafa;
	    width: 100vw;
	}

	.title-slot {
		cursor: pointer;
	}

	.element-container {
		position: static;
	}

	.element-container:hover > .body-slot {
		display: block;
	}
</style>