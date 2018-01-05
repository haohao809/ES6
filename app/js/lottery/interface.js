import $ from 'jquery'
class Interface{
	//获取遗漏数据接口
	getOmit(issue){
		let self = this;
		return new Promise((resolve,reject) =>{
			$.ajax({
				type:"get",
				url:"/get/omit",
				async:true,
				data: {
					issue:issue
				},
				dataType: 'json',
				success: function(res){
					self.setOmit(res.data);
					resolve.call(self,res)
				},
				error:function(err){
					reject.call(err)
				}
			});
		})
	}
	//获取开奖号码
	getOpenCode(issue){
		let self = this;
		return new Promise((resolve,reject) =>{
			$.ajax({
				type:"get",
				url:"/get/opencode",
				async:true,
				data: {
					issue:issue
				},
				dataType: 'json',
				success: function(res){
					self.setOpenCode(res.data);
					resolve.call(self,res)
				},
				error:function(err){
					reject.call(err)
				}
			});
		})
	}
	//获取当前状态
	getState(issue) {
		let self = this;
		return new Promise((resolve,reject) =>{
			$.ajax({
				type:"get",
				url:"/get/state",
				async:true,
				data: {
					issue:issue
				},
				dataType: 'json',
				success: function(res){
					resolve.call(self,res)
				},
				error:function(err){
					reject.call(err)
				}
			});
		})
	}
}
export default Interface