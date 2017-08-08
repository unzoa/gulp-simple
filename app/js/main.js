var menuli = document.querySelector('.menu-con ul').getElementsByTagName('li'),
	scroll_con = document.querySelector('.scroll-con').getElementsByTagName('div');

for(var i= 0; i<menuli.length;i++){
	menuli[i].onclick= function(){
		let i = this.innerHTML.substring(this.innerHTML.length-1,this.innerHTML.length);
		for(var j=0;j<scroll_con.length;j++){
			scroll_con[j].setAttribute('style','transform:translate3d(-'+(i-1)+'00%,0,0);transition:transform .5s ease');
		}
	}
}

// 自动执行
var sonMoveMark = 0;
setInterval(()=>{
	if (sonMoveMark<scroll_con.length) {
		for(var j=0;j<scroll_con.length;j++){
			scroll_con[j].setAttribute('style','transform:translate3d(-'+sonMoveMark+'00%,0,0);transition:transform .5s ease');
		}
		sonMoveMark++
	}else{
		sonMoveMark = 0
	}
	
},2000)