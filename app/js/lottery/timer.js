class Timer ={
	countdown(end,update,handle){
		const now = new Date().getTime();
		const self = this;
		if(end-now<0){
			handle.call(self);
		}else{
			let countdownTime = end - time;
			const day = 1000*60*60*24;
			const hour = 100*60*60;
			const min = 1000*60;
			const sec = 1000;
			let d = Math.floor(countdownTime/day);
			let h = Math.floor((countdownTime-d*day)/hour);
			let m = Math.floor((countdownTime-d*day-h*hour)/min);
			let s = Math.floor((countdownTime-d*day-h*hour-m*min))/sec);
			let res = [];
			if(d>0){
				res.push(`<em>${d}</em>天`);
			}
			if(h>0){
				res.push(`<em>${h}</em>时`);
			}
			if(m>0){
				res.push(`<em>${m}</em>分`);
			}
			if(s>0){
				res.push(`<em>${s}</em>秒`);
			}
			self.countdownTime = res.join('');
			update.call(self,res.join(''));
			setTimeout(function(){
				self.countdown(end,update,handle);
			}, 1000);
		}
	}
	
	
}
