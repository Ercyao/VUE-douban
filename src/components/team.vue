<template>
	<div class="team-box">
		<p class="title">{{title}}</p>
		<div  v-if="type === 'groupsCover'">
		<ul class="content">
			<li v-for="item in items">
				<a :href="item.url">
					<p class="avatar"><img :src="item.avatar" class="img"/><span class="name">{{item.name}}</span><span class="member">{{item.member_count}}人</span></p>
					<p class="des">{{item.desc_abstract}}</p>
				</a>
			</li>
		</ul>
		<a href="#" class="more_group">更多相关小组</a>
		</div>
		<div v-if="type === 'searchCover'">
		<ul class="content">
			<li v-for="item in items">
				<a :href="item.alt">
					<div class="search_avatar">
						<template v-if="item.image">
						<img :src="item.image" class="img"/>
						</template>
						<template v-else>
						<img :src="item.images.small" class="img"/>
						</template>
						<div class="search_des">
							<p class="title">{{item.title}}</p>
							<rating v-if="item.rating" class="price" :rating="item.rating.average"></rating>
						</div>
					</div>
				</a>
			</li>
		</ul>
		<a href="#" class="more_group" v-if="items">查看更多结果</a>
		<a href="#" class="no_group" v-if="!items">暂无结果</a>
		</div>
	</div>
</template>

<script>
	import Rating  from './rating'
	
	export default{
		props: ['title','type','items'],
		data(){
			return {}
		},
		components: { Rating },
	}
</script>

<style lang="less" scoped>
@import '../assets/style/less.less';
.team-box{
	padding: 15px 0 30px;
	.title{
	    font-size: 18px;
	    color: #111;
	}
	.content{
		li{.border(0, 0.1rem, 0, 0)}
		a{
			font-size: 18px;
		    display: block;
		    padding: 15px 0;
		    color: #111;
		    .avatar{height: 3rem;line-height: 3rem;}
		    .img{   
		    	border-radius: 3px;
			    width: 40px;
			    height: 40px;
			    border: 1px solid #f1f1f1;
			    vertical-align: baseline;
			}
			.name{
				-webkit-box-flex: 1;
			    -webkit-flex: 1;
			    -ms-flex: 1;
			    flex: 1;
			    width: 60%;
			    padding-left: 10px;
			    padding-right: 10px;
			    white-space: nowrap;
			    overflow: hidden;
			    text-overflow: ellipsis;
			}
			.member{
				float: right;
				color: #CCCCCC;
				font-size: 1rem;
			}
			.des{
				margin-top: 10px;
			    font-size: 15px;
			    color: #aaa;
			    white-space: nowrap;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    .search_img{
			    	width: 40px;
			    	height: 40px;
			    }
			    .search_text{
			    	
			    }
			}
		}
	}
	.search_des{
		display: inline-block;
		margin-left: 10px;
		width: 80%;
		overflow: hidden;
		.title{margin-bottom: 5px;}
		.price{
			color: #aaa;
		    font-size: 12px;
		    height: 14px;
		    margin: 0;
		}
	}
}
.more_group{
	display: block;
	width: 100%;
	height: 3.2rem;
	line-height: 3.2rem;
	font-size: 1.2rem;
	text-align: center;
	color: @green;
	.border(0, 0.1rem, 0, 0)
}
.no_group{
	display: block;
	width: 100%;
	height: 3.2rem;
	line-height: 3.2rem;
	font-size: 1.1rem;
	text-align: center;
	color: #AAAAAA;
	.border(0, 0.1rem, 0, 0)
}
</style>