 <template>
	<div class="loading_container">
	  <div class="file"></div>
	  <span>Loading</span>
	</div>
</template>
<script>
    export default {
    	data(){
            return{
            }
       }
    }
</script>

<style lang="less" scoped>
.loading_container{
	position: absolute;
	z-index: 99;
	top: 40%;
	left: 40%;
	width: 80px;
	height: 80px;
	border: 1px solid #5CB85C;
	border-radius: 50%;
	background:#5CB85C;
	overflow: hidden;
	span{
		position: absolute;
		top: 30px;
		z-index: 999;
		width: 100%;
		text-align: center;
	}
	.file{
		position: absolute;
		top: -100px;
		left: -40px;
		width: 160px;
		height: 160px;
		border-radius: 40%;
		background:#fff;
		animation: file 3s ease infinite;
	}
	@keyframes file{
		0% {transform: translate(0%, 10px) rotateZ(0deg);}
	    50% {transform: translate(-10%, -10px) rotateZ(180deg);}
	    100% {transform: translate(5%, 10px) rotateZ(360deg);}
	}
}

</style>
