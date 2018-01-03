// el是dom对象，className是选择器名
export function addClass(el, className){
	// 如果有这个className的时候return
	// 否则可以获取到这个className
	if(hasClass(el, className)){
		return
	}
	let newClass = el.className.split(' ')
	newClass.push(className)
	el.className = newClass.join(' ')
}

// 判断是否有这个class
export function hasClass(el,className){
	// 创建正则
	// (^|\\s)的意思是 开头空白字符在前面
	// (\\s|$)的意思是 后面可以跟一个空白字符或结束
	let reg = new RegExp('(^|\\s)'+className+'(\\s|$)')
	return reg.test(el.className)
}

// 获取dom的函数
export function getData(el, name, val){
	const prefix = 'data-'
	name = prefix + name
	if(val){
		return el.setAttribute(name, val)
	}else{
		return el.getAttribute(name)
	}
}