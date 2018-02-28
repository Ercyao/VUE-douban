<template>
<div class="page">
	<headerNav></headerNav>
        <div v-show="!showLoading">
		    <ul class="quick-nav">
		        <li><a href="https://m.douban.com/movie/nowintheater?loc_id=108288">影院热映</a></li>
		        <li><a :href="QuickUrl">{{QuickName}}</a></li>
		        <li><a id="hot-topics" href="https://m.douban.com/time/?dt_time_source=douban-msite_shortcut">豆瓣时间</a></li>
		        <li><a href="https://www.douban.com/doubanapp/app?channel=card_home&direct_dl=1">使用豆瓣App</a></li>
		    </ul>
		     <div class="recommend-box">
		    	<div v-for="item in AllData" :key="item.id">
		    	<p class="time">{{item.time}}</p>
		    	<ul>
		    		<li v-for="feed in item.data" :key="feed.id">
		    			<a :href="feed.target.url">
		    			<div class="recommend-content">
		    				<div class="left">
		    					<p class="title">{{feed.title}}</p>
		    					<p class="desc">{{feed.target.desc}}</p>
		    				</div>
		    				<div class="right">
		    					<img :src="feed.target.cover_url"/>
		    				</div>
		    			</div>
		    			<p class="author"><span>by {{feed.target.author.name}}</span><span>{{feed.source_cn}}</span></p>
		    			</a>
		    		</li>
		    	</ul>
		    	</div>
		    </div>	
		    <div class="load-more"  @click="loaderMore">
		    		<span v-show="downFlag === false">点击加载更多</span>
                    <span class="active" v-show="downFlag === true">加载中…</span>
		    </div>
		    <div class="goTop" v-show="isShow" @click="goTopScroll">返回顶部</div>
		    <drown-app></drown-app>
	    </div>

	<loading v-show="showLoading"></loading>	
	
</div>
</template>

<script>
	import loading from '@/components/loading'
	import headerNav from '@/components/header'
	import drownApp from '@/components/drownapp'
	import {getBookData,getHotTopic,getFilmLive,getRecTopic,getRecommend,getQuickData} from '@/store/API'
	
	export default{
		data(){
			return {
				  isShow:false,
			    showLoading:true,
			    downFlag:false,
			    next_date:'',
			    AllData:[],
			    Recommend:null,
			    QuickData:null,
			    QuickName:null,
			    QuickUrl:null,
			}
		},
		components: {
			headerNav,
			drownApp,
			loading,
		},
		created(){
			this.getBookData();
			this.beforeDate();
	  },
		methods: {
			async getBookData(){               
                let Recommend = await getRecommend(this.next_date).then(res => res.json());
                this.Recommend = Recommend.recommend_feeds;
                this.next_date = Recommend.date;
                this.AllData.push({time: this.next_date, data: this.Recommend});

                this.QuickData = await getQuickData().then(res => res.json());
                let i = Math.floor(Math.random()*10);
                this.QuickName= this.QuickData[i].name;
                this.QuickUrl= this.QuickData[i].url;

        				this.hideLoading();
           },
            //加载更多
            async loaderMore(){
            	this.downFlag=true;
                this.beforeDate();
                let Recommend = await getRecommend(this.next_date).then(res => res.json());
                this.Recommend = Recommend.recommend_feeds;
                this.AllData.push({time: this.next_date, data: this.Recommend});
 		        

            },
            changeRecData(){
           	   this.rec_start = parseInt(10*Math.random());
           	   this.getBookData();
            },
            hideLoading(){
                this.showLoading = false;
            },
            beforeDate(){
            	let d = this.next_date;
                d = new Date(d);      
                d = +d - 1000*60*60*24;       
                d = new Date(d);         
                this.next_date = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
            }
		  }
	}
</script>

<style lang="less" scoped>
    @import '../../assets/style/less.less';
    
    .quick-nav {
	    overflow: hidden;
	    padding: .5rem 0 2rem;
	    li {
		    float: left;
		    width: 50%;
		    padding: 5px;
		    box-sizing: border-box;
		    font-size: 15px;
		    a {
			    background-color: #f6f6f6;
			    color: #494949;
			    display: block;
			    text-align: center;
			    height: 3rem;
		        line-height: 3rem;
			    border-radius: 2px;
			    max-width: 100%;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    word-wrap: normal;
			}
		}
    }
    .recommend-box{
    	.time{
    		width: 100%;
    		height: 4rem;
    		line-height: 4rem;
		    text-align: center;
		    font-size: 18px;
		    color: #111;
		    .border(0,.1rem,0,0);
    	}
    	ul{
    		li{
    			padding: 2rem 0;
				.border(0,.1rem,0,0);
    		}
    	}
    	.author{
    		display: flex;
    		justify-content: space-between;
    		font-size: 12px;
    		color: #CCCCCC;
    		padding-top: 1rem;
    	}
    }
     .recommend-content{
    	display: -webkit-flex;
    	display: flex;
    	width: 100%;
    	overflow: hidden;
    	.left{
    		-webkit-flex: 2;
    		flex: 2;
    		.title{
    			.ellipsis(2);    
    			text-align: justify;
			    font-size: 17px;
			    font-weight: 500;
			    line-height: 1.41;
			    color: #494949;
			    margin-bottom: 6px;
			};
    		.desc{
    			.ellipsis(3);
			    text-align: justify;
			    color: #aaa;
			    font-size: 12px;
			    line-height: 1.5;
			    display: -webkit-box;
			    overflow: hidden;
			    -webkit-box-orient: vertical;
			    -webkit-line-clamp: 3;
    		};
    	}
    	.right{
    		height: 7rem;
    		overflow: hidden;
    		img{
    			width: 5rem;
    			padding-left: 20%;
    		}
    	}
    }
    .load-more {
    	margin: 1rem 20%;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        color: #fff;
        span{
        	background: #aaa;
        	width: 100%;
    		height: 100%;
        }
        .active{
	        opacity: 0.5;
	    }
    }
    .goTop{
    	position: fixed;
    	bottom: 2.5rem;
    	right: .5rem;
    	width: 40px;
    	height: 40px;
    	padding: 10px;
    	text-align: center;
    	color: #FFFFFF;
    	border-radius: 50%;
    	background: @green;
    	box-shadow: 0 4px 8px rgba(0,0,0,0.5);
    }
</style>
