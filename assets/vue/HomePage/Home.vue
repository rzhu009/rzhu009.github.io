<template>
	<div>
        <div class="home-background"></div>
        <banner></banner>
		<top-nav></top-nav>
        <div class="container main-section-container">
            <transition name="drawerSlide">
                <firm-tab v-if="currentNav == 'firm'"></firm-tab>
                <investment-banking-tab v-if="currentNav == 'investmentbanking'"></investment-banking-tab>
                <careers-tab v-if="currentNav == 'careers'"></careers-tab>
                <contact-us-tab v-if="currentNav == 'contactus'"></contact-us-tab>
            </transition>
        </div>
	</div>
</template>

<script>
	import TopNav from "../TopNav/TopNav.vue";
    import Banner from "../Banner/banner.vue";
    import FirmTab from "../Components/FirmTab.vue";
    import InvestmentBankingTab from "../Components/InvestmentBankingTab.vue";
    import CareersTab from "../Components/CareersTab.vue";
    import ContactUsTab from "../Components/ContactUsTab.vue";

	export default {
		components: {
			"top-nav" : TopNav,
            "banner" : Banner,
            "firm-tab" : FirmTab,
            "investment-banking-tab": InvestmentBankingTab,
            "careers-tab": CareersTab,
            "contact-us-tab": ContactUsTab
		},

		data(){
			return {
				currentNav: "firm"
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

<style scoped>
    /*drawerSlide*/
    .drawerSlide-enter-active,
    .drawerSlide-leave-active {
        opacity: 0;
        max-height: 4000px;
    }
    .drawerSlide-enter-active {
        transition: all 1.0s;
    }
    .drawerSlide-leave-active {
        transition: all 0.5s;
    }
    .drawerSlide-enter-to {
        opacity: 1;
    }
    .drawerSlide-enter,
    .drawerSlide-leave-to {
        max-height: 0px;
    }
</style>