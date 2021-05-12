<template>
  <div>
	<Header></Header>
	<div class="chat-w">
		<!-- 上边的大框框 -->
		<div class="chat-w-t">
			<!-- 左右的两个框框 -->
			<div class="chat-w-t-l">在线用户</div>
			<div class="chat-w-t-r">*{{name}}*</div>
		</div>
		<!-- 底下的大框框 -->
		<div class="chat-w-b">
			<!-- 左边的 框框 -->
			<div class="chat-w-b-l">
				<ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
					<li v-for="item in countList" class="infinite-list-item" :key="item" @click="vctUser(item.username)">
						<img :src="item.images" alt="" srcset="">
						{{item.username}}
					</li>
				</ul>
			</div>
			<!-- 右边的框框 -->
			<div class="chat-w-b-r">
				<!-- 右边上的框框 -->
				<div class="chat-w-b-r-t">
					<!-- 聊天内容 -->
					<!-- <div class="chat-content"><p id="message"></p></div> -->
					<textarea id="message" readonly></textarea>
				</div>
				<!-- 右边下的框框 -->
				<div class="chat-w-b-r-b">
					<input id="text" type="text" style="width:100%; height:7em" v-model="text" />
					<button style="width:60px; height:27px" @click="fsend()">发送</button>
				</div>
			</div>
		</div>
	</div>

    <!-- <table border="1" style="margin: auto;">
		<tr height="60px">
			<td>在线用户列表</td>
			<td>----------{{name}}对话框------------</td>
		</tr>
		<tr height="300px" style="overflow:hidden"> 
			<td>
                用户列表
            </td>
			<td>
				<textarea id="message" style="height: 400px; width:880px"></textarea>
                
			</td>
		</tr>
		<tr height="60px">
			<td>
				
			</td>
			<td>
				<input id="text" type="text" style="width:1009px; height:70px" />
				<button  @click="send()">发送</button>
			</td>
		</tr>
		
	</table> -->

  </div>
</template>

<script>
import Header from "../components/Header";
export default {
	components:{Header},
    data() {
        return {
			text:'',
            name:'默认用户名',
			countList:[
				{'images':require('@/assets/01.jpg'),'username':'张三'},
				{'images':require('@/assets/01.jpg'),'username':'张四'},
				{'images':require('@/assets/01.jpg'),'username':'李四'},
				{'images':require('@/assets/01.jpg'),'username':'李三'},
				{'images':require('@/assets/01.jpg'),'username':'赵六'},
				{'images':require('@/assets/01.jpg'),'username':'张三'},
				{'images':require('@/assets/01.jpg'),'username':'张四'},
				{'images':require('@/assets/01.jpg'),'username':'李四'},
				{'images':require('@/assets/01.jpg'),'username':'李三'},
				{'images':require('@/assets/01.jpg'),'username':'赵六'},
				{'images':require('@/assets/01.jpg'),'username':'李三'},
				{'images':require('@/assets/01.jpg'),'username':'赵六'},
				{'images':require('@/assets/01.jpg'),'username':'张三'},
				{'images':require('@/assets/01.jpg'),'username':'张四'},
				{'images':require('@/assets/01.jpg'),'username':'李四'},
				{'images':require('@/assets/01.jpg'),'username':'李三'},
				{'images':require('@/assets/01.jpg'),'username':'赵六'},
			]
        }
    },
    methods: {
		fsend(){
			const _this = this
			var message ={
				message
			}
			JSON.stringify(message)
			this.$axios.post('/sendall',{
				data:{
					message:this.text
				}
			}).then(res=>{
				console.log(res,'klklklkl');
			})
		},
        send(){
			
            var websocket = null;
			if('WebSocket' in window){
		        websocket = new WebSocket("ws://10.20.81.129:8080/SocketServer/"+this.name);
		    }
		    else{
		        alert('Not support websocket')
		    }
			
		    //连接发生错误的回调方法
		    websocket.onerror = function(){
		        setMessageInnerHTML("服务器有问题");
		    };
		
		    //连接成功建立的回调方法
		    websocket.onopen = function(event){
		        console.log('建立连接')
		        setMessageInnerHTML("连接成功");
		    }
		
		    //接收到消息的回调方法
		    websocket.onmessage = function(event){
		        console.log('收到消息： ', event.data)
		        setMessageInnerHTML(event.data);
		    }
		
		    //连接关闭的回调方法
		    websocket.onclose = function(){
		        console.log('连接关闭')
		        setMessageInnerHTML("连接断开");
		    }
		
		    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
		    window.onbeforeunload = function(){
		        websocket.close();
		    }
		
		    //将消息显示在网页上
		    function setMessageInnerHTML(innerHTML){
		        document.getElementById('message').innerHTML += innerHTML+'&#10;';
		    }
		
		    //关闭连接
		    function closeWebSocket(){
		        websocket.close();
		    }
		
		    //发送消息
		    function send(){
		        var message = document.getElementById('text').value;
		        websocket.send(message);
		    }
        },
		vctUser(val){
			// alert(val)
			this.name=val
		}
    },
     created() {
		 this.send()
         const _this = this
        if (this.$store.getters.getUser.name){
            _this.name=this.$store.getters.getUser.name
        }
    }
}
</script>

<style lang="less" space>
.chat-w{
	width: 70em;
	height: 35em;
	// background-color: red;
	border: 1px solid #ccc;
	margin: 50px auto;
	.chat-w-t{
		width: 68em;
		height: 3em;
		margin: 0 auto;
		// background-color: blue;
		display: flex;
		justify-content: space-between;
		//在线用户四个字
		.chat-w-t-l{
			width: 10em;
			height: 3em;
			// background-color: rgb(25, 238, 89);
			line-height: 3em;
			font-weight: 600;
			color: black;
			border-right: 1px solid #ccc;
			border-bottom: 1px solid #ccc ;
		}
		.chat-w-t-r{
			width: 58em;
			height: 3em;
			// background-color: rgb(197, 248, 10);
			line-height: 3em;
			font-weight: 600;
			color: black;
		}
	}

	.chat-w-b{
		width: 68em;
		height: 32em;
		margin: 0 auto;
		// background-color: pink;
		display: flex;
		justify-content: space-between;
		// 下面左边的框框  ---在线成员
		.chat-w-b-l{
			width: 10em;
			height: 32em;
			background-color: #fff;
			overflow-y: auto;
        	overflow-x:hidden ;
			ul{
				li{
					display: flex;
					justify-content: flex-start;
					text-align: center;
					line-height: 26px;
					margin-top: 5px;
					border-bottom: 1px solid #ccc;
					cursor: pointer;
					img{
						width: 32px;
						height: 32px;
						margin-left: 10px;
						margin-right: 10px;
						border-radius: 100%;
					}
				}
			}
		}
		// 下面右边的框框  
		.chat-w-b-r{
			width: 58em;
			height: 32em;
			// background-color: rgb(11, 207, 241);
			// 下面右边的上边的额
			.chat-w-b-r-t{
				width: 58em;
				height: 25em;
				background-color: #fff;
				img{
					width: 45px;
					height: 45px;
					border-radius: 100%;
				}
					#message{
						display: inline-block;
						width: 100%;
						height: 100%;
						background-color: rgb(255, 254, 245);
						padding-left: 50px;
						padding-top: 30px;
						resize:none;
					}
				// }
			}
			//下面右边的下面的额 发送
			.chat-w-b-r-b{
				width: 58em;
				height: 7em;
				// background-color: rgb(255, 208, 0);
				border: 1px solid #ccc;
				input{
					padding-bottom: 71px;
    				padding-left: 12px;
					border-top: 0px ;
				}
				button{
					position: relative;
					left: 364px;
    				bottom: 32px;
				}
			}
		}
	}

}
</style>