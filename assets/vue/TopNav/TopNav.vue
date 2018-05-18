<template>
	<div class="base-container">
		<div class="col-sm-12 top-bar">
			<div class="container">
				<div class="row">
					<div class="col-md-10 top-bar-item"></div>
					<div class="col-md-2 top-bar-item">Search</div>
				</div>
			</div>
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
							<nav-element class="col-md-2" navName="WhoWeAre">
								<template slot="title">Who We Are</template>
								<template slot="body">
									<div class="container">
										<div class="row">
											<div class="col-md-12"><h6>Who We Are</h6></div>
										</div>
										<div class="row">
											<div class="col-md-12">As a start-up independent financial advisory groups, we aim to leverage our cross border expertise to provide a distinct and innovative perspective and long term solutions for our partners in Asia</div>
										</div>
										<br>
										<div class="row">
											<div class="col-md-12"><h6>The Prime Number Way</h6></div>
										</div>
										<div class="row">
											<div class="col-md-4">Innovative</div>
											<div class="col-md-4">Disciplined</div>
											<div class="col-md-4">Solution driven</div>
										</div>
										<br>
										<div class="row">
											<div class="col-md-12"><h6>Our people</h6></div>
										</div>
										<div class="row">
											<div class="col-md-12">Xxx has over 20 years of financial investment and advisory experience across asia Europe and the Americas </div>
										</div>
										<br>
										<div class="row">
											<div class="col-md-12"><h6>CSR</h6></div>
										</div>
										<div class="row">
											<div class="col-md-12">We invest in building the community around the same value system: we are here to make the world a better place and to make a difference</div>
										</div>
									</div>
								</template>
							</nav-element>
							<nav-element class="col-md-2" navName="WhatWeDo">
								<template slot="title">What Do We Do</template>
								<template slot="body">
									<div class="container">
										<div class="row">
											<div class="col-md-12"><h6>What We Do</h6></div>
										</div>
										<div class="row">
											<div class="col-md-12">
												M&A and strategic advisory<br>
												Pre IPO fund raising<br>
												JV and strategic alliances<br>
												Investments and disposals
											</div>
										</div>

										<div class="row">
											<div class="col-md-12"><h6>Debt advisory and restructuring</h6></div>
										</div>
										<div class="row">
											<div class="col-md-12">												
												Refinancing existing debt<br>
												Supporting acquisitions and funding development<br>
												Lender negotiations<br>
												<br>
												Equity advisory<br> 
												IPO<br>
												Share issues<br>
												Block trades and sell-downs<br>
												Crafting the equity story<br>
												<br>
												Asset management<br>
												Risk-based investment solutions 
											</div>
										</div>
									</div>
								</template>
							</nav-element>
							<nav-element class="col-md-2" navName="Careers">
								<template slot="title">Careers</template>
								<template slot="body">
									<div class="container">
										<div class="row">
											<div class="col-md-12">												
												Students and graduates<br>
												We provide summer internship opportunities<br>
												Experienced professionals<br>
												We would like to attract like-minded, high potential colleagues to our unique platform<br>
												Our people strive to make a positive impact on our clients and communities
											</div>
										</div>
									</div>
								</template>
							</nav-element>
							<nav-element class="col-md-2" navName="ContactUs">
								<template slot="title">Contact Us</template>
								<template slot="body">
									<div class="container">
										<div class="row">
											<div class="col-md-12">												
												14 Myrtle Drive<br> 
												Great Neck, NY 11021<br>
												Email: info@pncps.com
											</div>
										</div>										
									</div>
								</template>
							</nav-element>
						</div>
					</div>
					<div class="col-md-2">
						
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

	.top-bar-item {
		color: #000;
    	line-height: 1rem;
		font-size: 0.8rem;
		font-weight: bold;
		cursor: pointer;
	}
</style>