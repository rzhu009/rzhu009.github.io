<template>
    <div class="row nav-bar">
        <div class="nav-element clickable col-sm-3 col-3" :class="{active: currentTab == 'firm'}" @click="tabClick('firm')">
            <span class="d-none d-sm-block">Firm</span><span class="d-sm-none"><i class="fa fa-building" aria-hidden="true"></i></span>
        </div>
        <div class="nav-element clickable col-sm-3 col-3" :class="{active: currentTab == 'investmentbanking'}" @click="tabClick('investmentbanking')">
            <span class="d-none d-sm-block">Investment Banking</span><span class="d-sm-none"><i class="fa fa-money" aria-hidden="true"></i></span>
        </div>
        <div class="nav-element clickable col-sm-3 col-3" :class="{active: currentTab == 'careers'}" @click="tabClick('careers')">
            <span class="d-none d-sm-block">Careers</span><span class="d-sm-none"><i class="fa fa-briefcase" aria-hidden="true"></i></span>
        </div>
        <div class="nav-element clickable col-sm-3 col-3" :class="{active: currentTab == 'contactus'}" @click="tabClick('contactus')">
            <span class="d-none d-sm-block">Contact Us</span><span class="d-sm-none"><i class="fa fa-phone" aria-hidden="true"></i></span>
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
        background-color: rgb(232, 134, 48);
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