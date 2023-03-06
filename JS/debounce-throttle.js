// 防抖
function debounce(fn, delay){  //fn：执行函数，delay：延迟时间
	let timer = null;
	return function(){
		if(timer) clearTimeout(timer);
		timer = setTimeout(()=> {
			fn.apply(this, arguments);
			clearTimeout(timer);
			timer = null;
		}, delay)
	}
}
// 节流
function throttle(fn, delay){
	let timer = null;
	return function(){
		if(!timer) {
			timer = setTimeout(()=> {
				fn.apply(this, arguments);
				clearTimeout(timer);
				timer = null;
			}, delay)
		}
	}
}