// JavaScript Documentwindow.addEventListener('DOMContentLoaded',function(){	//1 改变html fontSize	function change(){		document.documentElement.style.fontSize=document.documentElement.clientWidth/320*20+'px';	}	change();	window.addEventListener('resize',change,false);			//banner滑动事件	var oUl=document.querySelector('#banner');	var oOl=document.querySelector('#ol');			var aLi=oUl.children,aBtn=oOl.children;	var len=aLi.length,length=aBtn.length;		var W=aLi[0].offsetWidth;		var bOk=true;	var iNow=1;	var l=-W,t=0;//原始偏移量			oUl.style.width=len*W+'px';	oUl.addEventListener('touchstart',function(ev){		if(!bOk)return;		bOk=false;			oUl.style.WebkitTransition='none';			var moveX;		var downX=ev.targetTouches[0].pageX;//指尖down的位置		var oldL=l;//down时的偏移量				document.addEventListener('touchmove',fnmove,false);		document.addEventListener('touchend',fnend,false);						function fnmove(ev){			moveX=ev.targetTouches[0].pageX;//移动是的指尖位置			l=moveX-downX+oldL;			oUl.style.WebkitTransform='translateX('+l+'px)';					}		function fnend(ev){			//判断指尖滑动的距离			var disX=moveX-downX;			if(Math.abs(disX)>50){				if(disX>0){//向右划了 inow--					iNow--;				}else{//向左划了 inow++					iNow++;				}			}			tab();			document.removeEventListener('touchmove',fnmove,false);			document.removeEventListener('touchend',fnend,false);		}		ev.preventDefault();			},false);				//切换函数  已有新的iNow	function tab(){		oUl.style.WebkitTransition='0.8s all linear';		l=-iNow*W;		oUl.style.WebkitTransform='translateX('+l+'PX)';			}		function tabend(){//运动完成时的事情		if(iNow==0){			iNow=len-2;		}else if(iNow==len-1){			iNow=1;		}		l=-W*iNow;		oUl.style.WebkitTransition='none';		oUl.style.WebkitTransform='translateX('+l+'px)';		bOk=true;			for(var i=0;i<length;i++){			aBtn[i].classList.remove('active');		}		aBtn[iNow-1].classList.add('active');		oUl.removeEventListener('animationend',tabend,false);	}		oUl.addEventListener('transitionend',tabend,false);			},false);