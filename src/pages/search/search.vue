<template>
	<div class="search_box">
		<headerNav></headerNav>
		<div class="search_input mtop">
			<input type="text" v-model.trim="keyword" placeholder="请输入关键字" @keyup.enter="SearchResult()"/>
			<span class="search" @click="SearchResult()">搜索</span>
		</div>
		<div class="search_team">
			<team-box title="音乐" type="searchCover" :items="MusicRoot"></team-box>
			<team-box title="读书" type="searchCover" :items="BookRoot"></team-box>
			<team-box title="影视" type="searchCover" :items="MovieRoot"></team-box>
		</div>
	</div>
	
	
</template>

<script>
	import teamBox  from '@/components/team'
	import headerNav from '@/components/header'
	import {getMusicRoot,getBookRoot,getMovieRoot} from '@/store/API'
	export default{
		data(){
			return {
				keyword:'',
				SearchClass:null,
				MusicRoot:null,
				BookRoot:null,
				MovieRoot:null,
			}
		},
		components: {
			headerNav,
			teamBox,
		},
		created(){
			this.getSearchData();
	   },
		methods: {
			async getSearchData(){
				this.keyword = this.$route.query.q;
				if(this.keyword){
					let MusicRoot = await getMusicRoot(this.keyword).then(res => res.json());
					this.MusicRoot = MusicRoot.musics;
					let BookRoot = await getBookRoot(this.keyword).then(res => res.json());
					this.BookRoot = BookRoot.books;
					let MovieRoot = await getMovieRoot(this.keyword).then(res => res.json());
					this.MovieRoot = MovieRoot.subjects;
				}
      },
      SearchResult(){
				this.getSearchData();
				this.ShowSearchClass = false;
			}
		}
	}
</script>

<style lang="less"> 
.search_box{
	.mtop{margin-top: 3.5rem;}
	.search_team{
		padding: 0 5%;
	}
	.search_input{
		width: 100%;
		height: 2.5rem;
		padding: 15px;
		border-bottom: 1px solid #f3f3f3;
    	input{
		    float: left;
		    width: 75%;
		    height: 2.5rem;
		    font-size: 14px;
		    background: #F1F1F1;
		    margin-right: 10px;
		    border: 0;
		    border-radius: 5px;
		    padding:0 10px;
    	}
    	.search{
    		font-size: 16px;
    		margin-top: 5px;
    	}
	}
}
</style>
