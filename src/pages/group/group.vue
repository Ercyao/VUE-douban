<template>
<div class="page">
	<headerNav></headerNav>
    <div v-show="!showLoading">
    	<template v-for="item in Groups">
    	  <team-box :title="item.name" type="groupsCover" :items="item.groups"></team-box>
	    </template>
	    <drown-app></drown-app>
	</div>
	<loading v-show="showLoading"></loading>	
</div>
</template>

<script>
	import teamBox  from '@/components/team'
	import loading from '@/components/loading'
	import headerNav from '@/components/header'
	import drownApp from '@/components/drownapp'
	import {getGroups} from '@/store/API'
	
	export default{
		data(){
			return {
			    showLoading:true,
			    Groups:[],
			    MovieFreeStream:null,
			    MovieLatest:null,
			    movieInterests:null,
			    MovieClass:null,
			    Groups1:null,
			    Groups2:null,
			    Groups3:null,
			    Groups4:null,
			}
		},
		components: {
			headerNav,
			drownApp,
			loading,
			teamBox,
		},
		created(){
			this.getGroupData();
	   },
		methods: {
			async getGroupData(){
                let Groups = await getGroups().then(res => res.json());
				this.Groups = Groups.rec_groups[0].classified_groups;

                this.hideLoading();
         	},
            hideLoading(){
                this.showLoading = false;
            }
		}
	}
</script>

<style>
</style>