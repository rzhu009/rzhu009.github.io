<template>
	<div class="base-container">
		<div class="col-sm-12 top-bar">
		</div>
		<div class="main-header">
			<div class="container">
				<div class="row">
					<div class="col-md-10 nav-left">
						<div class="row nav-top">
							<div class="col-md-12">
								<div class="main-company-name" href="#">Prime Number Capital</div>
							</div>
						</div>

						<div class="row nav-bottom">
							<nav-element class="col-md-2">
								<template slot="title">Who we are </template>
								<template slot="body">Body1</template>
							</nav-element>
							<nav-element class="col-md-2">
								<template slot="title">Title2</template>
								<template slot="body">Body2</template>
							</nav-element>
							<nav-element class="col-md-2">
								<template slot="title">Title2</template>
								<template slot="body">Body2</template>
							</nav-element>
							<nav-element class="col-md-2">
								<template slot="title">Title2</template>
								<template slot="body">Body2</template>
							</nav-element>
							<nav-element class="col-md-2">
								<template slot="title">Title2</template>
								<template slot="body">Body2</template>
							</nav-element>
							<nav-element class="col-md-2">
								<template slot="title">Title2</template>
								<template slot="body">Body2</template>
							</nav-element>
						</div>
					</div>
					<div class="col-md-2">
						right
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import NavElement from "./NavElement.vue";

	export default {
		components: {
			'nav-element' : NavElement
		}
	};
</script>

<style scoped>
	.container {
		position: static;
	}

	.row {
		position: static;
	}

	.nav-left {
		position: static;
	}

	.top-bar {
		background-color: #ffcd00;
		line-height: 1.8rem;
		padding: 10px 0;
	}

	.nav-top {
		padding-top: 15px;
	    padding-bottom: 0;
	    margin-bottom: 25px;
	    border: 0;
	}

	.main-header {
		position: relative;
		color: #001e41;
	}

	.main-company-name {
		font-size: 30px;
	}
</style>