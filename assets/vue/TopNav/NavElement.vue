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
	    padding: 1em;
	    left: 0;
	    background: #fafafa;
	    width: 100vw;
	}

	.title-slot {
		cursor: pointer;
		padding: 0.7rem;
		font-size: 0.8rem;
		font-weight: bold;
		white-space: nowrap;
	}

	.element-container {
		position: static;
	}

	.element-container:hover > .body-slot {
		display: block;
	}

	.element-container:hover > .title-slot {
		background-color: #fafafa;
	}
</style>