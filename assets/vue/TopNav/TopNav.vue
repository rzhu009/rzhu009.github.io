<template>
    <div class="nav-bar">
        <div class="container row">
            <div class="nav-element clickable col-sm-3 col-3" :class="{active: currentTab == 'firm'}" @click="tabClick('firm')">
                <span class="d-none d-md-block">Firm</span><span class="d-md-none"><i class="fa fa-building" aria-hidden="true"></i></span>
            </div>
            <div class="nav-element clickable col-sm-3 col-3" :class="{active: currentTab == 'investmentbanking'}" @click="tabClick('investmentbanking')">
                <span class="d-none d-md-block">Investment Banking</span><span class="d-md-none"><i class="fa fa-money" aria-hidden="true"></i></span>
            </div>
            <div class="nav-element clickable col-sm-3 col-3" :class="{active: currentTab == 'careers'}" @click="tabClick('careers')">
                <span class="d-none d-md-block">Careers</span><span class="d-md-none"><i class="fa fa-briefcase" aria-hidden="true"></i></span>
            </div>
            <div class="nav-element clickable col-sm-3 col-3" :class="{active: currentTab == 'contactus'}" @click="tabClick('contactus')">
                <span class="d-none d-md-block">Contact Us</span><span class="d-md-none"><i class="fa fa-phone" aria-hidden="true"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
        data(){
            return {
                currentTab: "firm"
            };
        },

        methods: {
            tabClick(tab){
                this.currentTab = tab;
                window.eventBus.$emit('navChange', tab);
            }
        }
	};
</script>

<style scoped>
    .nav-bar {
        background-color: var(--main-orange);
        color: white;
        padding: 0.3rem 0rem;
        margin-bottom: 1rem;
    }

    .nav-element {
        text-align: center;
        font-size: larger;
        white-space: nowrap;
    }

    .active {
        font-weight: bold;
    }
</style>