// Garden Gnome Software - Skin
// Pano2VR 7.0.7/20014
// Filename: ?? on-off ??.ggsk
// Generated 2023-11-28T19:47:30

function pano2vrSkin(player,base) {
	player.addVariable('vis_bg', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_size', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_room', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_downmenu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_foot', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_foot2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_footshow', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__3=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\uba54\ub274";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -15%;';
		hs+='height : 15%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_room') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__3.style.transition='left 800ms ease-in 0ms, bottom 800ms ease-in 0ms';
				if (me.__3.ggCurrentLogicStatePosition == 0) {
					me.__3.style.left='0%';
					me.__3.style.bottom='0%';
				}
				else {
					me.__3.style.left='0%';
					me.__3.style.bottom='-15%';
				}
			}
		}
		me.__3.logicBlock_position();
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 107.7px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 639px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 5 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 5 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.65;
				me._scrollarea_1.ggDragInertiaY *= 0.65;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elHorScrollBg = me._scrollarea_1__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 640px; height: 5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._scrollarea_1__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 640px; height: 5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._scrollarea_1.ggScrollPosX = 0;
		me._scrollarea_1.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._scrollarea_1.ggDragLastX;
				me._scrollarea_1.ggDragInertiaX = diffX;
				me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._scrollarea_1.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if (e.offsetX < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__horScrollBg.getBoundingClientRect();
			var diffX = me._scrollarea_1.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._scrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._scrollarea_1.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._scrollarea_1.ggScrollByXSmooth(30 * me._scrollarea_1.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._scrollarea_1__horScrollBg.style.visibility = 'inherit';
					me._scrollarea_1__horScrollFg.style.visibility = 'inherit';
					me._scrollarea_1.ggHorScrollVisible = true;
				} else {
					me._scrollarea_1__horScrollBg.style.visibility = 'hidden';
					me._scrollarea_1__horScrollFg.style.visibility = 'hidden';
					me._scrollarea_1.ggHorScrollVisible = false;
				}
				if(me._scrollarea_1.ggHorScrollVisible) {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 5;
					if (me._scrollarea_1.ggVertScrollVisible) {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 5;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width - me._scrollarea_1__horScrollBg.getBoundingClientRect().height;
					} else {
						me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
						me._scrollarea_1.ggAvailableWidthWithScale = me._scrollarea_1.getBoundingClientRect().width;
					}
					me._scrollarea_1__horScrollBg.style.width = me._scrollarea_1.ggAvailableWidth + 'px';
					me._scrollarea_1.ggHPercentVisible = contentWidth != 0 ? me._scrollarea_1.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._scrollarea_1.ggHPercentVisible > 1.0) me._scrollarea_1.ggHPercentVisible = 1.0;
					me._scrollarea_1.ggScrollWidth = Math.round(me._scrollarea_1__horScrollBg.offsetWidth * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1__horScrollFg.style.width = me._scrollarea_1.ggScrollWidth + 'px';
					me._scrollarea_1.ggScrollPosX = me._scrollarea_1.ggScrollPosXPercent * me._scrollarea_1.ggAvailableWidth;
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
					if (me._scrollarea_1.ggHPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
						me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
					me._scrollarea_1.ggScrollPosX = 0;
					me._scrollarea_1.ggScrollPosXPercent = 0.0;
					me._scrollarea_1__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me.__4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uacf5\uac04\uc120\ud0dd\uce74\ud14c\uace0\ub9ac";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 120;
		el.ggHeight = 63;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_1.ggUpdating == true) return;
			me._cloner_1.ggUpdating = true;
			var el=me._cloner_1;
			var curNumRows = 0;
			curNumRows = me._cloner_1.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_1.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_1.getFilteredNodes(tourNodes, filter);
			me._cloner_1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_1.ggWidth) + 'px';
				parameter.width=me._cloner_1.ggWidth + 'px';
				parameter.height=me._cloner_1.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_1_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._cloner_1.ggNodeCount = me._cloner_1.ggNumFilterPassed;
			me._cloner_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_1.parentNode && me._cloner_1.parentNode.classList.contains('ggskin_subelement') && me._cloner_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "가구있음";
		el.ggId="Cloner 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 63px;';
		hs+='left : 10px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 570))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._cloner_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._cloner_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._cloner_1.style.transition='left 0s, top 0s, transform 0s';
				if (me._cloner_1.ggCurrentLogicStatePosition == 0) {
					me._cloner_1.style.left='10px';
					me._cloner_1.style.top='30px';
				}
				else {
					me._cloner_1.style.left='10px';
					me._cloner_1.style.top='20px';
				}
			}
		}
		me._cloner_1.logicBlock_position();
		me._cloner_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 400))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 570))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._cloner_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._cloner_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._cloner_1.style.transition='left 0s, top 0s, transform 0s';
				if (me._cloner_1.ggCurrentLogicStateScaling == 0) {
					me._cloner_1.ggParameter.sx = 0.7;
					me._cloner_1.ggParameter.sy = 0.7;
					me._cloner_1.style.transform=parameterToTransform(me._cloner_1.ggParameter);
					skin.updateSize(me._cloner_1);
				}
				else if (me._cloner_1.ggCurrentLogicStateScaling == 1) {
					me._cloner_1.ggParameter.sx = 0.8;
					me._cloner_1.ggParameter.sy = 0.8;
					me._cloner_1.style.transform=parameterToTransform(me._cloner_1.ggParameter);
					skin.updateSize(me._cloner_1);
				}
				else {
					me._cloner_1.ggParameter.sx = 1;
					me._cloner_1.ggParameter.sy = 1;
					me._cloner_1.style.transform=parameterToTransform(me._cloner_1.ggParameter);
					skin.updateSize(me._cloner_1);
				}
			}
		}
		me._cloner_1.logicBlock_scaling();
		me._cloner_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cloner_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cloner_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cloner_1.style.transition='left 0s, top 0s, transform 0s';
				if (me._cloner_1.ggCurrentLogicStateVisible == 0) {
					me._cloner_1.style.visibility=(Number(me._cloner_1.style.opacity)>0||!me._cloner_1.style.opacity)?'inherit':'hidden';
					me._cloner_1.ggVisible=true;
				}
				else {
					me._cloner_1.style.visibility="hidden";
					me._cloner_1.ggVisible=false;
				}
			}
		}
		me._cloner_1.logicBlock_visible();
		me._cloner_1.ggCurrentLogicStatePosition = -1;
		me._cloner_1.ggCurrentLogicStateScaling = -1;
		me._cloner_1.ggCurrentLogicStateVisible = -1;
		me._cloner_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_1.childNodes.length; i++) {
				var child=me._cloner_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cloner_1.ggUpdatePosition=function (useTransition) {
			me._cloner_1.ggUpdate();
		}
		me.__4.appendChild(me._cloner_1);
		el=me._cloner_2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 120;
		el.ggHeight = 63;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_2.ggUpdating == true) return;
			me._cloner_2.ggUpdating = true;
			var el=me._cloner_2;
			var curNumRows = 0;
			curNumRows = me._cloner_2.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_2.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_2.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_2.getFilteredNodes(tourNodes, filter);
			me._cloner_2.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_2.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_2.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_2.ggWidth) + 'px';
				parameter.width=me._cloner_2.ggWidth + 'px';
				parameter.height=me._cloner_2.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_2_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._cloner_2.ggNodeCount = me._cloner_2.ggNumFilterPassed;
			me._cloner_2.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_2.parentNode && me._cloner_2.parentNode.classList.contains('ggskin_subelement') && me._cloner_2.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_2.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "가구없음";
		el.ggId="Cloner 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 63px;';
		hs+='left : 10px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 570))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._cloner_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._cloner_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._cloner_2.style.transition='left 0s, top 0s, transform 0s';
				if (me._cloner_2.ggCurrentLogicStatePosition == 0) {
					me._cloner_2.style.left='10px';
					me._cloner_2.style.top='30px';
				}
				else {
					me._cloner_2.style.left='10px';
					me._cloner_2.style.top='20px';
				}
			}
		}
		me._cloner_2.logicBlock_position();
		me._cloner_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 400))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 570))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._cloner_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._cloner_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._cloner_2.style.transition='left 0s, top 0s, transform 0s';
				if (me._cloner_2.ggCurrentLogicStateScaling == 0) {
					me._cloner_2.ggParameter.sx = 0.7;
					me._cloner_2.ggParameter.sy = 0.7;
					me._cloner_2.style.transform=parameterToTransform(me._cloner_2.ggParameter);
					skin.updateSize(me._cloner_2);
				}
				else if (me._cloner_2.ggCurrentLogicStateScaling == 1) {
					me._cloner_2.ggParameter.sx = 0.8;
					me._cloner_2.ggParameter.sy = 0.8;
					me._cloner_2.style.transform=parameterToTransform(me._cloner_2.ggParameter);
					skin.updateSize(me._cloner_2);
				}
				else {
					me._cloner_2.ggParameter.sx = 1;
					me._cloner_2.ggParameter.sy = 1;
					me._cloner_2.style.transform=parameterToTransform(me._cloner_2.ggParameter);
					skin.updateSize(me._cloner_2);
				}
			}
		}
		me._cloner_2.logicBlock_scaling();
		me._cloner_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cloner_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cloner_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cloner_2.style.transition='left 0s, top 0s, transform 0s';
				if (me._cloner_2.ggCurrentLogicStateVisible == 0) {
					me._cloner_2.style.visibility=(Number(me._cloner_2.style.opacity)>0||!me._cloner_2.style.opacity)?'inherit':'hidden';
					me._cloner_2.ggVisible=true;
				}
				else {
					me._cloner_2.style.visibility="hidden";
					me._cloner_2.ggVisible=false;
				}
			}
		}
		me._cloner_2.logicBlock_visible();
		me._cloner_2.ggCurrentLogicStatePosition = -1;
		me._cloner_2.ggCurrentLogicStateScaling = -1;
		me._cloner_2.ggCurrentLogicStateVisible = -1;
		me._cloner_2.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_2.childNodes.length; i++) {
				var child=me._cloner_2.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cloner_2.ggUpdatePosition=function (useTransition) {
			me._cloner_2.ggUpdate();
		}
		me.__4.appendChild(me._cloner_2);
		me._scrollarea_1__content.appendChild(me.__4);
		me.__3.appendChild(me._scrollarea_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADRklEQVRogdWaS2sUQRSFv55ko0GM/g134gN8rtWdv8GVK3+BBEFwKQii4FpBHBNNouJGnHESSdwm6gQXbhQfCxUCLozHRadlzHRX3equno4HatPV99Y91O3bt043kpB0QdJ7SZ8kXd289j+MS5I+Svog6aIkkHRew3i+DYL1jXs5cV9OJK0DOxnGAnAS+JUz1zTmgdM51zcSSXIYLgGH64mpNOaAM0WTLeCaw/gQ0IkdUQW0cZAB7mf52MnJx0F0JI01/Mw89MS4Imli0GDBY7DcIJlHntj6kia0WeWy0ZK06DHsNECm7YnptaQ92f15DizpNyoyMwYyE4M2RY56HkdLkpKayTzxxPB2KxkXoWQzaBd6NZKZNp'+
			'CZzLP1OW4i/XzPzIpydsZKyELqpdKCEoPMY89aqy4yVkIoLdkuLEQg88CzxpqkXT4/1sXGVG/6WUqzl0wIIWv69SSNB/r0vTSHSnNMQshf/ZYCfM15fL0LIVOW0Lj876muwY+lmu0Oja9szlvSr6vihnbWQCZoZ2IQQuUaWl9p/ttoNkGopfQ95MJg9QtqNMuMRHIdWM3oAscc83eBH8A5xz1vgAPAepVAYhEC6AFHStr2gf1UJAPpETwWjgOvStj1SXWLymQgLqHfpBpEN8BmlXRnvsUKIiYhAAEngDuGe58C+4i0MxliE8pgCfJnHQvHLAoZ2sBZ471d0h2NhtiEHgGnAm2iKrQxCRXJsxYskxaUyoj1DLVxk3kGzDrmDxJWHYtRsfWxNpoxGtqR9HK+RnNNw41mrQptFTKWRnNvjl1oQzsSQjMGMr4jQLcOUmXI'+
			'lFI0C0Z0hTaUzLSBzGSAv+gKbcxnpvSxWRElMuuClRXNCKQWZVBoLQtFUTSNo7JC61sg79P5IMyKpnFUVmhdzucNZKqmWdn0K1RoixxGVzRLjFIKbZ6jWhTNEsOi0A6l31Ynpk/nIyATkn7//HIwaGj+dN7AMDe0mYGlmlVSNCsO6y8HCZKmDGSa2pnQ9LuVSNqg+OQaTdGMiBfA0aLJFqmWloc+6Tl/O5GBVKFdLppsAVM51zNF83s9MVWCKFZob2S5eUXpb45fJd2WtGMbPC+WcVPSF0mfJV2XxB/AAHPf+VGAGAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 1%;';
		hs+='top : 8%;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 570))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_2.style.transition='transform 0s';
				if (me._image_2.ggCurrentLogicStateScaling == 0) {
					me._image_2.ggParameter.sx = 0.6;
					me._image_2.ggParameter.sy = 0.6;
					me._image_2.style.transform=parameterToTransform(me._image_2.ggParameter);
					skin.updateSize(me._image_2);
				}
				else {
					me._image_2.ggParameter.sx = 1;
					me._image_2.ggParameter.sy = 1;
					me._image_2.style.transform=parameterToTransform(me._image_2.ggParameter);
					skin.updateSize(me._image_2);
				}
			}
		}
		me._image_2.logicBlock_scaling();
		me._image_2.onclick=function (e) {
			player.setVariableValue('vis_room', false);
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._image_2);
		me.divSkin.appendChild(me.__3);
		el=me.__2=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd \ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 2%;';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 2%;';
		hs+='visibility : inherit;';
		hs+='width : 144px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 570))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__2.style.transition='transform 0s';
				if (me.__2.ggCurrentLogicStateScaling == 0) {
					me.__2.ggParameter.sx = 0.8;
					me.__2.ggParameter.sy = 0.8;
					me.__2.style.transform=parameterToTransform(me.__2.ggParameter);
					skin.updateSize(me.__2);
				}
				else {
					me.__2.ggParameter.sx = 1;
					me.__2.ggParameter.sy = 1;
					me.__2.style.transform=parameterToTransform(me.__2.ggParameter);
					skin.updateSize(me.__2);
				}
			}
		}
		me.__2.logicBlock_scaling();
		me.__2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_room') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2.style.transition='transform 0s';
				if (me.__2.ggCurrentLogicStateVisible == 0) {
					me.__2.style.visibility="hidden";
					me.__2.ggVisible=false;
				}
				else {
					me.__2.style.visibility=(Number(me.__2.style.opacity)>0||!me.__2.style.opacity)?'inherit':'hidden';
					me.__2.ggVisible=true;
				}
			}
		}
		me.__2.logicBlock_visible();
		me.__2.onclick=function (e) {
			player.setVariableValue('vis_room', true);
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #232323;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 40%;';
		hs+='position : absolute;';
		hs+='right : 2%;';
		hs+='top : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("Select ROOM", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAc1JREFUeF7tWlGuhCAMpDd7e7J9e7K3N+tLiRhEZWmUMSvDlyaoMC2dYVDC4E0Gn3+4BABV/QkhPCfw7fpl1yLyiw4IHABV/Qsh2KS32gsNAhQAVbUIp8jvBRsKAhoAbUzxh4i8G/se6gYDoDH6aTLDAwBbBsgMqBW/Mo0JAIoNmAGHSqjj4Q/8zyVQIMAawBoA2hewCDrq2KGuLIL1XSBZgCywRIA0SBokDWL8QeqAQ+TueJg64Bt1wOTfO+Jc7Wpu8J4dXj5ohmg8Kzij1QzWVQ3IDi1aB3vGGBHvMEDfJRgLAJzOLWLQPb6xEFklAK2+fY+BId852+4zAINEP4FsS+FhNzkAHtsaGa0e39oEYJT0j4CKSAw+MyDll1Op9U'+
			'hL5DtnJsgzwHjf6sDtW0r/xRKwm0GYYF8HTCBYJuS/sNwlI6K8rirBcqYX7gWibD0Ledde4KyPboDp0Rn0BOkJ0hOkJwj5aZKmaK+qTxYoEHDuNUiDpEHSIGmQNIhgKOoABMqTz8DdoONskDqAOoA64H46wGO737IGNAOQ+/a9WQqmAxznDrDorw5GeqPdAMJ8aosYyyUAZCDYpf03lPz/1aEFAgToEkBMyPuNfwS+M1BCNhq2AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-55;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 62.5%;';
		hs+='left : calc(50% - ((13.4% + 0px) / 2) - 55%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((62.5% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13.4%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._text_1.appendChild(me._image_1);
		me._rectangle_2.appendChild(me._text_1);
		me.__2.appendChild(me._rectangle_2);
		me.divSkin.appendChild(me.__2);
		el=me._onoff=document.createElement('div');
		el.ggId="\uac00\uad6con\/off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10%;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 2%;';
		hs+='visibility : inherit;';
		hs+='width : 144px;';
		hs+='pointer-events:none;';
		hs+='cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._onoff.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._onoff.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_room') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._onoff.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._onoff.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._onoff.style.transition='right 800ms linear 0ms, bottom 800ms linear 0ms, width 500ms ease-in 0ms, height 500ms ease-in 0ms, transform 0s';
				if (me._onoff.ggCurrentLogicStatePosition == 0) {
					me._onoff.style.right='2%';
					me._onoff.style.bottom='15.5%';
				}
				else {
					me._onoff.style.right='2%';
					me._onoff.style.bottom='10%';
				}
			}
		}
		me._onoff.logicBlock_position();
		me._onoff.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_size') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._onoff.ggCurrentLogicStateSize != newLogicStateSize) {
				me._onoff.ggCurrentLogicStateSize = newLogicStateSize;
				me._onoff.style.transition='right 800ms linear 0ms, bottom 800ms linear 0ms, width 500ms ease-in 0ms, height 500ms ease-in 0ms, transform 0s';
				if (me._onoff.ggCurrentLogicStateSize == 0) {
					me._onoff.style.width='105px';
					me._onoff.style.height='105px';
					setTimeout(function() {skin.updateSize(me._onoff);}, 550);
				}
				else {
					me._onoff.style.width='144px';
					me._onoff.style.height='60px';
					setTimeout(function() {skin.updateSize(me._onoff);}, 550);
				}
			}
		}
		me._onoff.logicBlock_size();
		me._onoff.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 570))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._onoff.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._onoff.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._onoff.style.transition='right 800ms linear 0ms, bottom 800ms linear 0ms, width 500ms ease-in 0ms, height 500ms ease-in 0ms, transform 0s';
				if (me._onoff.ggCurrentLogicStateScaling == 0) {
					me._onoff.ggParameter.sx = 0.8;
					me._onoff.ggParameter.sy = 0.8;
					me._onoff.style.transform=parameterToTransform(me._onoff.ggParameter);
					skin.updateSize(me._onoff);
				}
				else {
					me._onoff.ggParameter.sx = 1;
					me._onoff.ggParameter.sy = 1;
					me._onoff.style.transform=parameterToTransform(me._onoff.ggParameter);
					skin.updateSize(me._onoff);
				}
			}
		}
		me._onoff.logicBlock_scaling();
		me._onoff.ggUpdatePosition=function (useTransition) {
		}
		el=me.__16=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uacbd1-\ud604\uad00";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ed5658;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\ud604\uad00"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__16.style.transition='background-color 0s';
				if (me.__16.ggCurrentLogicStateVisible == 0) {
					me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
					me.__16.ggVisible=true;
				}
				else {
					me.__16.style.visibility="hidden";
					me.__16.ggVisible=false;
				}
			}
		}
		me.__16.logicBlock_visible();
		me.__16.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__16.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__16.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__16.style.transition='background-color 0s';
				if (me.__16.ggCurrentLogicStateBackgroundColor == 0) {
					me.__16.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__16.style.backgroundColor="rgba(237,86,88,1)";
				}
			}
		}
		me.__16.logicBlock_backgroundcolor();
		me.__16.onclick=function (e) {
			player.setVariableValue('vis_bg', !player.getVariableValue('vis_bg'));
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me._on6=document.createElement('div');
		els=me._on6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6con";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on6.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on6.ggUpdateText();
		el.appendChild(els);
		me._on6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on6.onclick=function (e) {
			player.openNext("{node26}","$(cur)");
		}
		me._on6.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_16=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_16.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_46=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_46.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_46.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_46.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_46.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_46.ggCurrentLogicStatePosition == 0) {
					me._rectangle_46.style.left='14px';
					me._rectangle_46.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_46.style.left='-1px';
					me._rectangle_46.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_46.logicBlock_position();
		me._rectangle_46.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_46.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_46.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_46.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_46.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_46.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_46.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_46.logicBlock_backgroundcolor();
		me._rectangle_46.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_16.appendChild(me._rectangle_46);
		me._on6.appendChild(me._rectangle_16);
		me.__16.appendChild(me._on6);
		el=me._off6=document.createElement('div');
		els=me._off6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6coff";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off6.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off6.ggUpdateText();
		el.appendChild(els);
		me._off6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off6.style.transition='';
				if (me._off6.ggCurrentLogicStateVisible == 0) {
					me._off6.style.visibility=(Number(me._off6.style.opacity)>0||!me._off6.style.opacity)?'inherit':'hidden';
					me._off6.ggVisible=true;
				}
				else {
					me._off6.style.visibility="hidden";
					me._off6.ggVisible=false;
				}
			}
		}
		me._off6.logicBlock_visible();
		me._off6.onclick=function (e) {
			player.openNext("{node13}","$(cur)");
		}
		me._off6.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1off5=document.createElement('div');
		el.ggId="Rectangle 1-off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1off5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1off5.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4off5=document.createElement('div');
		el.ggId="Rectangle 4-off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4off5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4off5.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_4off5.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_4off5.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_4off5.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_4off5.ggCurrentLogicStatePosition == 0) {
					me._rectangle_4off5.style.left='14px';
					me._rectangle_4off5.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_4off5.style.left='-1px';
					me._rectangle_4off5.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_4off5.logicBlock_position();
		me._rectangle_4off5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_4off5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_4off5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_4off5.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_4off5.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_4off5.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_4off5.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_4off5.logicBlock_backgroundcolor();
		me._rectangle_4off5.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1off5.appendChild(me._rectangle_4off5);
		me._off6.appendChild(me._rectangle_1off5);
		me.__16.appendChild(me._off6);
		me._onoff.appendChild(me.__16);
		el=me.__15=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uacbd1-\uac70\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ed5658;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uac70\uc2e4"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__15.style.transition='background-color 0s';
				if (me.__15.ggCurrentLogicStateVisible == 0) {
					me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
					me.__15.ggVisible=true;
				}
				else {
					me.__15.style.visibility="hidden";
					me.__15.ggVisible=false;
				}
			}
		}
		me.__15.logicBlock_visible();
		me.__15.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__15.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__15.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__15.style.transition='background-color 0s';
				if (me.__15.ggCurrentLogicStateBackgroundColor == 0) {
					me.__15.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__15.style.backgroundColor="rgba(237,86,88,1)";
				}
			}
		}
		me.__15.logicBlock_backgroundcolor();
		me.__15.onclick=function (e) {
			player.setVariableValue('vis_bg', !player.getVariableValue('vis_bg'));
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me._on5=document.createElement('div');
		els=me._on5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6con-\uac70\uc2e4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on5.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on5.ggUpdateText();
		el.appendChild(els);
		me._on5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on5.onclick=function (e) {
			player.openNext("{node14}","$(cur)");
		}
		me._on5.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_15=document.createElement('div');
		el.ggId="Rectangle 1-\uac70\uc2e4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_15.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_45=document.createElement('div');
		el.ggId="Rectangle 4-\uac70\uc2e4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_45.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_45.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_45.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_45.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_45.ggCurrentLogicStatePosition == 0) {
					me._rectangle_45.style.left='14px';
					me._rectangle_45.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_45.style.left='-1px';
					me._rectangle_45.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_45.logicBlock_position();
		me._rectangle_45.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_45.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_45.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_45.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_45.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_45.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_45.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_45.logicBlock_backgroundcolor();
		me._rectangle_45.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_15.appendChild(me._rectangle_45);
		me._on5.appendChild(me._rectangle_15);
		me.__15.appendChild(me._on5);
		el=me._off5=document.createElement('div');
		els=me._off5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6coff-\uac70\uc2e4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off5.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off5.ggUpdateText();
		el.appendChild(els);
		me._off5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off5.style.transition='';
				if (me._off5.ggCurrentLogicStateVisible == 0) {
					me._off5.style.visibility=(Number(me._off5.style.opacity)>0||!me._off5.style.opacity)?'inherit':'hidden';
					me._off5.ggVisible=true;
				}
				else {
					me._off5.style.visibility="hidden";
					me._off5.ggVisible=false;
				}
			}
		}
		me._off5.logicBlock_visible();
		me._off5.onclick=function (e) {
			player.openNext("{node1}","$(cur)");
		}
		me._off5.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1off4=document.createElement('div');
		el.ggId="Rectangle 1-off-\uac70\uc2e4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1off4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1off4.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4off4=document.createElement('div');
		el.ggId="Rectangle 4-off-\uac70\uc2e4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4off4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4off4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_4off4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_4off4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_4off4.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_4off4.ggCurrentLogicStatePosition == 0) {
					me._rectangle_4off4.style.left='14px';
					me._rectangle_4off4.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_4off4.style.left='-1px';
					me._rectangle_4off4.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_4off4.logicBlock_position();
		me._rectangle_4off4.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_4off4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_4off4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_4off4.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_4off4.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_4off4.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_4off4.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_4off4.logicBlock_backgroundcolor();
		me._rectangle_4off4.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1off4.appendChild(me._rectangle_4off4);
		me._off5.appendChild(me._rectangle_1off4);
		me.__15.appendChild(me._off5);
		me._onoff.appendChild(me.__15);
		el=me.__14=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uacbd1-\uc8fc\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ed5658;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__14.style.transition='background-color 0s';
				if (me.__14.ggCurrentLogicStateVisible == 0) {
					me.__14.style.visibility=(Number(me.__14.style.opacity)>0||!me.__14.style.opacity)?'inherit':'hidden';
					me.__14.ggVisible=true;
				}
				else {
					me.__14.style.visibility="hidden";
					me.__14.ggVisible=false;
				}
			}
		}
		me.__14.logicBlock_visible();
		me.__14.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__14.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__14.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__14.style.transition='background-color 0s';
				if (me.__14.ggCurrentLogicStateBackgroundColor == 0) {
					me.__14.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__14.style.backgroundColor="rgba(237,86,88,1)";
				}
			}
		}
		me.__14.logicBlock_backgroundcolor();
		me.__14.onclick=function (e) {
			player.setVariableValue('vis_bg', !player.getVariableValue('vis_bg'));
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me._on4=document.createElement('div');
		els=me._on4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6con-\uc8fc\ubc29";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on4.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on4.ggUpdateText();
		el.appendChild(els);
		me._on4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on4.onclick=function (e) {
			player.openNext("{node21}","$(cur)");
		}
		me._on4.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_14=document.createElement('div');
		el.ggId="Rectangle 1-\uc8fc\ubc29";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_14.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_44=document.createElement('div');
		el.ggId="Rectangle 4-\uc8fc\ubc29";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_44.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_44.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_44.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_44.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_44.ggCurrentLogicStatePosition == 0) {
					me._rectangle_44.style.left='14px';
					me._rectangle_44.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_44.style.left='-1px';
					me._rectangle_44.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_44.logicBlock_position();
		me._rectangle_44.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_44.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_44.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_44.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_44.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_44.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_44.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_44.logicBlock_backgroundcolor();
		me._rectangle_44.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_14.appendChild(me._rectangle_44);
		me._on4.appendChild(me._rectangle_14);
		me.__14.appendChild(me._on4);
		el=me._off4=document.createElement('div');
		els=me._off4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6coff-\uc8fc\ubc29";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off4.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off4.ggUpdateText();
		el.appendChild(els);
		me._off4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off4.style.transition='';
				if (me._off4.ggCurrentLogicStateVisible == 0) {
					me._off4.style.visibility=(Number(me._off4.style.opacity)>0||!me._off4.style.opacity)?'inherit':'hidden';
					me._off4.ggVisible=true;
				}
				else {
					me._off4.style.visibility="hidden";
					me._off4.ggVisible=false;
				}
			}
		}
		me._off4.logicBlock_visible();
		me._off4.onclick=function (e) {
			player.openNext("{node8}","$(cur)");
		}
		me._off4.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1off3=document.createElement('div');
		el.ggId="Rectangle 1-\uc8fc\ubc29off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1off3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1off3.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4off3=document.createElement('div');
		el.ggId="Rectangle 4-\uc8fc\ubc29off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4off3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4off3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_4off3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_4off3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_4off3.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_4off3.ggCurrentLogicStatePosition == 0) {
					me._rectangle_4off3.style.left='14px';
					me._rectangle_4off3.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_4off3.style.left='-1px';
					me._rectangle_4off3.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_4off3.logicBlock_position();
		me._rectangle_4off3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_4off3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_4off3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_4off3.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_4off3.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_4off3.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_4off3.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_4off3.logicBlock_backgroundcolor();
		me._rectangle_4off3.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1off3.appendChild(me._rectangle_4off3);
		me._off4.appendChild(me._rectangle_1off3);
		me.__14.appendChild(me._off4);
		me._onoff.appendChild(me.__14);
		el=me.__110=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uacbd1-\uc695\uc2e41";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ed5658;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__110.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc695\uc2e41"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__110.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__110.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__110.style.transition='background-color 0s';
				if (me.__110.ggCurrentLogicStateVisible == 0) {
					me.__110.style.visibility=(Number(me.__110.style.opacity)>0||!me.__110.style.opacity)?'inherit':'hidden';
					me.__110.ggVisible=true;
				}
				else {
					me.__110.style.visibility="hidden";
					me.__110.ggVisible=false;
				}
			}
		}
		me.__110.logicBlock_visible();
		me.__110.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__110.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__110.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__110.style.transition='background-color 0s';
				if (me.__110.ggCurrentLogicStateBackgroundColor == 0) {
					me.__110.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__110.style.backgroundColor="rgba(237,86,88,1)";
				}
			}
		}
		me.__110.logicBlock_backgroundcolor();
		me.__110.onclick=function (e) {
			player.setVariableValue('vis_bg', !player.getVariableValue('vis_bg'));
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		el=me._on10=document.createElement('div');
		els=me._on10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6con-\uc695\uc2e41";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on10.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on10.ggUpdateText();
		el.appendChild(els);
		me._on10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on10.onclick=function (e) {
			player.openNext("{node15}","$(cur)");
		}
		me._on10.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_110=document.createElement('div');
		el.ggId="Rectangle 1-\uc695\uc2e41";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_110.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_410=document.createElement('div');
		el.ggId="Rectangle 4-\uc695\uc2e41";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_410.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_410.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_410.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_410.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_410.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_410.ggCurrentLogicStatePosition == 0) {
					me._rectangle_410.style.left='14px';
					me._rectangle_410.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_410.style.left='-1px';
					me._rectangle_410.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_410.logicBlock_position();
		me._rectangle_410.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_410.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_410.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_410.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_410.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_410.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_410.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_410.logicBlock_backgroundcolor();
		me._rectangle_410.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_110.appendChild(me._rectangle_410);
		me._on10.appendChild(me._rectangle_110);
		me.__110.appendChild(me._on10);
		el=me._off10=document.createElement('div');
		els=me._off10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6coff-\uc695\uc2e41";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off10.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off10.ggUpdateText();
		el.appendChild(els);
		me._off10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off10.style.transition='';
				if (me._off10.ggCurrentLogicStateVisible == 0) {
					me._off10.style.visibility=(Number(me._off10.style.opacity)>0||!me._off10.style.opacity)?'inherit':'hidden';
					me._off10.ggVisible=true;
				}
				else {
					me._off10.style.visibility="hidden";
					me._off10.ggVisible=false;
				}
			}
		}
		me._off10.logicBlock_visible();
		me._off10.onclick=function (e) {
			player.openNext("{node2}","$(cur)");
		}
		me._off10.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1off2=document.createElement('div');
		el.ggId="Rectangle 1-\uc695\uc2e4off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1off2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1off2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4off2=document.createElement('div');
		el.ggId="Rectangle 4-\uc695\uc2e4off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4off2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4off2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_4off2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_4off2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_4off2.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_4off2.ggCurrentLogicStatePosition == 0) {
					me._rectangle_4off2.style.left='14px';
					me._rectangle_4off2.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_4off2.style.left='-1px';
					me._rectangle_4off2.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_4off2.logicBlock_position();
		me._rectangle_4off2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_4off2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_4off2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_4off2.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_4off2.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_4off2.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_4off2.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_4off2.logicBlock_backgroundcolor();
		me._rectangle_4off2.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1off2.appendChild(me._rectangle_4off2);
		me._off10.appendChild(me._rectangle_1off2);
		me.__110.appendChild(me._off10);
		me._onoff.appendChild(me.__110);
		el=me.__13=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uacbd1-\ubcf5\ub3c4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ed5658;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\ubcf5\ub3c41"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__13.style.transition='background-color 0s';
				if (me.__13.ggCurrentLogicStateVisible == 0) {
					me.__13.style.visibility=(Number(me.__13.style.opacity)>0||!me.__13.style.opacity)?'inherit':'hidden';
					me.__13.ggVisible=true;
				}
				else {
					me.__13.style.visibility="hidden";
					me.__13.ggVisible=false;
				}
			}
		}
		me.__13.logicBlock_visible();
		me.__13.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__13.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__13.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__13.style.transition='background-color 0s';
				if (me.__13.ggCurrentLogicStateBackgroundColor == 0) {
					me.__13.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__13.style.backgroundColor="rgba(237,86,88,1)";
				}
			}
		}
		me.__13.logicBlock_backgroundcolor();
		me.__13.onclick=function (e) {
			player.setVariableValue('vis_bg', !player.getVariableValue('vis_bg'));
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me._on3=document.createElement('div');
		els=me._on3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6con-\ubcf5\ub3c4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on3.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on3.ggUpdateText();
		el.appendChild(els);
		me._on3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on3.onclick=function (e) {
			player.openNext("{node17}","$(cur)");
		}
		me._on3.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_13=document.createElement('div');
		el.ggId="Rectangle 1-\ubcf5\ub3c4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_13.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_43=document.createElement('div');
		el.ggId="Rectangle 4-\ubcf5\ub3c4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_43.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_43.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_43.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_43.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_43.ggCurrentLogicStatePosition == 0) {
					me._rectangle_43.style.left='14px';
					me._rectangle_43.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_43.style.left='-1px';
					me._rectangle_43.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_43.logicBlock_position();
		me._rectangle_43.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_43.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_43.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_43.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_43.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_43.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_43.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_43.logicBlock_backgroundcolor();
		me._rectangle_43.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_13.appendChild(me._rectangle_43);
		me._on3.appendChild(me._rectangle_13);
		me.__13.appendChild(me._on3);
		el=me._off3=document.createElement('div');
		els=me._off3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6coff-\ubcf5\ub3c4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off3.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off3.ggUpdateText();
		el.appendChild(els);
		me._off3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off3.style.transition='';
				if (me._off3.ggCurrentLogicStateVisible == 0) {
					me._off3.style.visibility=(Number(me._off3.style.opacity)>0||!me._off3.style.opacity)?'inherit':'hidden';
					me._off3.ggVisible=true;
				}
				else {
					me._off3.style.visibility="hidden";
					me._off3.ggVisible=false;
				}
			}
		}
		me._off3.logicBlock_visible();
		me._off3.onclick=function (e) {
			player.openNext("{node4}","$(cur)");
		}
		me._off3.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1off1=document.createElement('div');
		el.ggId="Rectangle 1-\ubcf5\ub3c4off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1off1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1off1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4off1=document.createElement('div');
		el.ggId="Rectangle 4-\ubcf5\ub3c4off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4off1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4off1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_4off1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_4off1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_4off1.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_4off1.ggCurrentLogicStatePosition == 0) {
					me._rectangle_4off1.style.left='14px';
					me._rectangle_4off1.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_4off1.style.left='-1px';
					me._rectangle_4off1.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_4off1.logicBlock_position();
		me._rectangle_4off1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_4off1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_4off1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_4off1.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_4off1.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_4off1.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_4off1.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_4off1.logicBlock_backgroundcolor();
		me._rectangle_4off1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1off1.appendChild(me._rectangle_4off1);
		me._off3.appendChild(me._rectangle_1off1);
		me.__13.appendChild(me._off3);
		me._onoff.appendChild(me.__13);
		el=me.__122=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uacbd1-\ubcf5\ub3c42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ed5658;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__122.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__122.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\ubcf5\ub3c42"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__122.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__122.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__122.style.transition='background-color 0s';
				if (me.__122.ggCurrentLogicStateVisible == 0) {
					me.__122.style.visibility=(Number(me.__122.style.opacity)>0||!me.__122.style.opacity)?'inherit':'hidden';
					me.__122.ggVisible=true;
				}
				else {
					me.__122.style.visibility="hidden";
					me.__122.ggVisible=false;
				}
			}
		}
		me.__122.logicBlock_visible();
		me.__122.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__122.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__122.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__122.style.transition='background-color 0s';
				if (me.__122.ggCurrentLogicStateBackgroundColor == 0) {
					me.__122.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__122.style.backgroundColor="rgba(237,86,88,1)";
				}
			}
		}
		me.__122.logicBlock_backgroundcolor();
		me.__122.onclick=function (e) {
			player.setVariableValue('vis_bg', !player.getVariableValue('vis_bg'));
		}
		me.__122.ggUpdatePosition=function (useTransition) {
		}
		el=me._on22=document.createElement('div');
		els=me._on22__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6con-\ubcf5\ub3c42";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on22.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on22.ggUpdateText();
		el.appendChild(els);
		me._on22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on22.onclick=function (e) {
			player.openNext("{node16}","$(cur)");
		}
		me._on22.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_122=document.createElement('div');
		el.ggId="Rectangle 1-\ubcf5\ub3c42";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_122.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_122.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_422=document.createElement('div');
		el.ggId="Rectangle 4-\ubcf5\ub3c42";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_422.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_422.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_422.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_422.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_422.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_422.ggCurrentLogicStatePosition == 0) {
					me._rectangle_422.style.left='14px';
					me._rectangle_422.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_422.style.left='-1px';
					me._rectangle_422.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_422.logicBlock_position();
		me._rectangle_422.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_422.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_422.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_422.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_422.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_422.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_422.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_422.logicBlock_backgroundcolor();
		me._rectangle_422.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_122.appendChild(me._rectangle_422);
		me._on22.appendChild(me._rectangle_122);
		me.__122.appendChild(me._on22);
		el=me._off22=document.createElement('div');
		els=me._off22__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6coff-\ubcf5\ub3c42";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off22.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off22.ggUpdateText();
		el.appendChild(els);
		me._off22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off22.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off22.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off22.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off22.style.transition='';
				if (me._off22.ggCurrentLogicStateVisible == 0) {
					me._off22.style.visibility=(Number(me._off22.style.opacity)>0||!me._off22.style.opacity)?'inherit':'hidden';
					me._off22.ggVisible=true;
				}
				else {
					me._off22.style.visibility="hidden";
					me._off22.ggVisible=false;
				}
			}
		}
		me._off22.logicBlock_visible();
		me._off22.onclick=function (e) {
			player.openNext("{node3}","$(cur)");
		}
		me._off22.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_12off1=document.createElement('div');
		el.ggId="Rectangle 1-\ubcf5\ub3c42off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_12off1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_12off1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_42off1=document.createElement('div');
		el.ggId="Rectangle 4-\ubcf5\ub3c42off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_42off1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_42off1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_42off1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_42off1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_42off1.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_42off1.ggCurrentLogicStatePosition == 0) {
					me._rectangle_42off1.style.left='14px';
					me._rectangle_42off1.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_42off1.style.left='-1px';
					me._rectangle_42off1.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_42off1.logicBlock_position();
		me._rectangle_42off1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_42off1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_42off1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_42off1.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_42off1.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_42off1.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_42off1.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_42off1.logicBlock_backgroundcolor();
		me._rectangle_42off1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_12off1.appendChild(me._rectangle_42off1);
		me._off22.appendChild(me._rectangle_12off1);
		me.__122.appendChild(me._off22);
		me._onoff.appendChild(me.__122);
		el=me.__10=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uacbd1-\uc548\ubc29";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ed5658;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc548\ubc29"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__10.style.transition='background-color 0s';
				if (me.__10.ggCurrentLogicStateVisible == 0) {
					me.__10.style.visibility=(Number(me.__10.style.opacity)>0||!me.__10.style.opacity)?'inherit':'hidden';
					me.__10.ggVisible=true;
				}
				else {
					me.__10.style.visibility="hidden";
					me.__10.ggVisible=false;
				}
			}
		}
		me.__10.logicBlock_visible();
		me.__10.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__10.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__10.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__10.style.transition='background-color 0s';
				if (me.__10.ggCurrentLogicStateBackgroundColor == 0) {
					me.__10.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__10.style.backgroundColor="rgba(237,86,88,1)";
				}
			}
		}
		me.__10.logicBlock_backgroundcolor();
		me.__10.onclick=function (e) {
			player.setVariableValue('vis_bg', !player.getVariableValue('vis_bg'));
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me._on0=document.createElement('div');
		els=me._on0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6con-\uc548\ubc29";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on0.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on0.ggUpdateText();
		el.appendChild(els);
		me._on0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on0.onclick=function (e) {
			player.openNext("{node20}","$(cur)");
		}
		me._on0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_10=document.createElement('div');
		el.ggId="Rectangle 1-\uc548\ubc29";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_40=document.createElement('div');
		el.ggId="Rectangle 4-\uc548\ubc29";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_40.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_40.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_40.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_40.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_40.ggCurrentLogicStatePosition == 0) {
					me._rectangle_40.style.left='14px';
					me._rectangle_40.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_40.style.left='-1px';
					me._rectangle_40.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_40.logicBlock_position();
		me._rectangle_40.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_40.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_40.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_40.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_40.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_40.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_40.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_40.logicBlock_backgroundcolor();
		me._rectangle_40.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_10.appendChild(me._rectangle_40);
		me._on0.appendChild(me._rectangle_10);
		me.__10.appendChild(me._on0);
		el=me._off0=document.createElement('div');
		els=me._off0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6coff-\uc548\ubc29";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off0.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off0.ggUpdateText();
		el.appendChild(els);
		me._off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off0.style.transition='';
				if (me._off0.ggCurrentLogicStateVisible == 0) {
					me._off0.style.visibility=(Number(me._off0.style.opacity)>0||!me._off0.style.opacity)?'inherit':'hidden';
					me._off0.ggVisible=true;
				}
				else {
					me._off0.style.visibility="hidden";
					me._off0.ggVisible=false;
				}
			}
		}
		me._off0.logicBlock_visible();
		me._off0.onclick=function (e) {
			player.openNext("{node7}","$(cur)");
		}
		me._off0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1off0=document.createElement('div');
		el.ggId="Rectangle 1-\uc548\ubc29off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1off0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4off0=document.createElement('div');
		el.ggId="Rectangle 4-\uc548\ubc29off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4off0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_4off0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_4off0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_4off0.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_4off0.ggCurrentLogicStatePosition == 0) {
					me._rectangle_4off0.style.left='14px';
					me._rectangle_4off0.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_4off0.style.left='-1px';
					me._rectangle_4off0.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_4off0.logicBlock_position();
		me._rectangle_4off0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_4off0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_4off0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_4off0.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_4off0.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_4off0.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_4off0.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_4off0.logicBlock_backgroundcolor();
		me._rectangle_4off0.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1off0.appendChild(me._rectangle_4off0);
		me._off0.appendChild(me._rectangle_1off0);
		me.__10.appendChild(me._off0);
		me._onoff.appendChild(me.__10);
		el=me.__120=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uacbd1-\uc548\ubc292";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ed5658;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__120.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__120.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc548\ubc291-1"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__120.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__120.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__120.style.transition='background-color 0s';
				if (me.__120.ggCurrentLogicStateVisible == 0) {
					me.__120.style.visibility=(Number(me.__120.style.opacity)>0||!me.__120.style.opacity)?'inherit':'hidden';
					me.__120.ggVisible=true;
				}
				else {
					me.__120.style.visibility="hidden";
					me.__120.ggVisible=false;
				}
			}
		}
		me.__120.logicBlock_visible();
		me.__120.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__120.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__120.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__120.style.transition='background-color 0s';
				if (me.__120.ggCurrentLogicStateBackgroundColor == 0) {
					me.__120.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__120.style.backgroundColor="rgba(237,86,88,1)";
				}
			}
		}
		me.__120.logicBlock_backgroundcolor();
		me.__120.onclick=function (e) {
			player.setVariableValue('vis_bg', !player.getVariableValue('vis_bg'));
		}
		me.__120.ggUpdatePosition=function (useTransition) {
		}
		el=me._on20=document.createElement('div');
		els=me._on20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6con-\uc548\ubc292";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on20.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on20.ggUpdateText();
		el.appendChild(els);
		me._on20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on20.onclick=function (e) {
			player.openNext("{node19}","$(cur)");
		}
		me._on20.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_120=document.createElement('div');
		el.ggId="Rectangle 1-\uc548\ubc292";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_120.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_120.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_420=document.createElement('div');
		el.ggId="Rectangle 4-\uc548\ubc292";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_420.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_420.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_420.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_420.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_420.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_420.ggCurrentLogicStatePosition == 0) {
					me._rectangle_420.style.left='14px';
					me._rectangle_420.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_420.style.left='-1px';
					me._rectangle_420.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_420.logicBlock_position();
		me._rectangle_420.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_420.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_420.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_420.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_420.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_420.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_420.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_420.logicBlock_backgroundcolor();
		me._rectangle_420.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_120.appendChild(me._rectangle_420);
		me._on20.appendChild(me._rectangle_120);
		me.__120.appendChild(me._on20);
		el=me._off20=document.createElement('div');
		els=me._off20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6coff-\uc548\ubc292";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off20.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off20.ggUpdateText();
		el.appendChild(els);
		me._off20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off20.style.transition='';
				if (me._off20.ggCurrentLogicStateVisible == 0) {
					me._off20.style.visibility=(Number(me._off20.style.opacity)>0||!me._off20.style.opacity)?'inherit':'hidden';
					me._off20.ggVisible=true;
				}
				else {
					me._off20.style.visibility="hidden";
					me._off20.ggVisible=false;
				}
			}
		}
		me._off20.logicBlock_visible();
		me._off20.onclick=function (e) {
			player.openNext("{node6}","$(cur)");
		}
		me._off20.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_12off0=document.createElement('div');
		el.ggId="Rectangle 1-\uc548\ubc292off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_12off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_12off0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_42off0=document.createElement('div');
		el.ggId="Rectangle 4-\uc548\ubc292off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_42off0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_42off0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_42off0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_42off0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_42off0.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_42off0.ggCurrentLogicStatePosition == 0) {
					me._rectangle_42off0.style.left='14px';
					me._rectangle_42off0.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_42off0.style.left='-1px';
					me._rectangle_42off0.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_42off0.logicBlock_position();
		me._rectangle_42off0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_42off0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_42off0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_42off0.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_42off0.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_42off0.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_42off0.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_42off0.logicBlock_backgroundcolor();
		me._rectangle_42off0.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_12off0.appendChild(me._rectangle_42off0);
		me._off20.appendChild(me._rectangle_12off0);
		me.__120.appendChild(me._off20);
		me._onoff.appendChild(me.__120);
		el=me.__1=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uacbd1-\uc548\ubc29\uc695\uc2e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ed5658;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc695\uc2e42"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1.style.transition='background-color 0s';
				if (me.__1.ggCurrentLogicStateVisible == 0) {
					me.__1.style.visibility=(Number(me.__1.style.opacity)>0||!me.__1.style.opacity)?'inherit':'hidden';
					me.__1.ggVisible=true;
				}
				else {
					me.__1.style.visibility="hidden";
					me.__1.ggVisible=false;
				}
			}
		}
		me.__1.logicBlock_visible();
		me.__1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1.style.transition='background-color 0s';
				if (me.__1.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__1.style.backgroundColor="rgba(237,86,88,1)";
				}
			}
		}
		me.__1.logicBlock_backgroundcolor();
		me.__1.onclick=function (e) {
			player.setVariableValue('vis_bg', !player.getVariableValue('vis_bg'));
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me._on=document.createElement('div');
		els=me._on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6con-\uc548\ubc29\uc695\uc2e4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on.ggUpdateText();
		el.appendChild(els);
		me._on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on.onclick=function (e) {
			player.openNext("{node18}","$(cur)");
		}
		me._on.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1-\uc548\ubc29\uc695\uc2e4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4-\uc548\ubc29\uc695\uc2e4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_4.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_4.ggCurrentLogicStatePosition == 0) {
					me._rectangle_4.style.left='14px';
					me._rectangle_4.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_4.style.left='-1px';
					me._rectangle_4.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_4.logicBlock_position();
		me._rectangle_4.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_4.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_4.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_4.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_4.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_4.logicBlock_backgroundcolor();
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._rectangle_4);
		me._on.appendChild(me._rectangle_1);
		me.__1.appendChild(me._on);
		el=me._off=document.createElement('div');
		els=me._off__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6coff-\uc548\ubc29\uc695\uc2e4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off.ggUpdateText();
		el.appendChild(els);
		me._off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off.style.transition='';
				if (me._off.ggCurrentLogicStateVisible == 0) {
					me._off.style.visibility=(Number(me._off.style.opacity)>0||!me._off.style.opacity)?'inherit':'hidden';
					me._off.ggVisible=true;
				}
				else {
					me._off.style.visibility="hidden";
					me._off.ggVisible=false;
				}
			}
		}
		me._off.logicBlock_visible();
		me._off.onclick=function (e) {
			player.openNext("{node5}","$(cur)");
		}
		me._off.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1off=document.createElement('div');
		el.ggId="Rectangle 1-\uc548\ubc29\uc695\uc2e4off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1off.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4off=document.createElement('div');
		el.ggId="Rectangle 4-\uc548\ubc29\uc695\uc2e4off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4off.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_4off.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_4off.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_4off.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_4off.ggCurrentLogicStatePosition == 0) {
					me._rectangle_4off.style.left='14px';
					me._rectangle_4off.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_4off.style.left='-1px';
					me._rectangle_4off.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_4off.logicBlock_position();
		me._rectangle_4off.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_4off.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_4off.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_4off.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_4off.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_4off.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_4off.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_4off.logicBlock_backgroundcolor();
		me._rectangle_4off.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1off.appendChild(me._rectangle_4off);
		me._off.appendChild(me._rectangle_1off);
		me.__1.appendChild(me._off);
		me._onoff.appendChild(me.__1);
		el=me.__11=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uacbd1-\uce68\uc2e41";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ed5658;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uce68\uc2e41"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__11.style.transition='background-color 0s';
				if (me.__11.ggCurrentLogicStateVisible == 0) {
					me.__11.style.visibility=(Number(me.__11.style.opacity)>0||!me.__11.style.opacity)?'inherit':'hidden';
					me.__11.ggVisible=true;
				}
				else {
					me.__11.style.visibility="hidden";
					me.__11.ggVisible=false;
				}
			}
		}
		me.__11.logicBlock_visible();
		me.__11.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__11.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__11.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__11.style.transition='background-color 0s';
				if (me.__11.ggCurrentLogicStateBackgroundColor == 0) {
					me.__11.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__11.style.backgroundColor="rgba(237,86,88,1)";
				}
			}
		}
		me.__11.logicBlock_backgroundcolor();
		me.__11.onclick=function (e) {
			player.setVariableValue('vis_bg', !player.getVariableValue('vis_bg'));
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me._on1=document.createElement('div');
		els=me._on1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6con-\uce68\uc2e41";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on1.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on1.ggUpdateText();
		el.appendChild(els);
		me._on1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on1.onclick=function (e) {
			player.openNext("{node23}","$(cur)");
		}
		me._on1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_11=document.createElement('div');
		el.ggId="Rectangle 1-\uce68\uc2e41";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_41=document.createElement('div');
		el.ggId="Rectangle 4-\uce68\uc2e41";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_41.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_41.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_41.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_41.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_41.ggCurrentLogicStatePosition == 0) {
					me._rectangle_41.style.left='14px';
					me._rectangle_41.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_41.style.left='-1px';
					me._rectangle_41.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_41.logicBlock_position();
		me._rectangle_41.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_41.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_41.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_41.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_41.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_41.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_41.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_41.logicBlock_backgroundcolor();
		me._rectangle_41.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_11.appendChild(me._rectangle_41);
		me._on1.appendChild(me._rectangle_11);
		me.__11.appendChild(me._on1);
		el=me._off1=document.createElement('div');
		els=me._off1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6coff-\uce68\uc2e41";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off1.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off1.ggUpdateText();
		el.appendChild(els);
		me._off1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off1.style.transition='';
				if (me._off1.ggCurrentLogicStateVisible == 0) {
					me._off1.style.visibility=(Number(me._off1.style.opacity)>0||!me._off1.style.opacity)?'inherit':'hidden';
					me._off1.ggVisible=true;
				}
				else {
					me._off1.style.visibility="hidden";
					me._off1.ggVisible=false;
				}
			}
		}
		me._off1.logicBlock_visible();
		me._off1.onclick=function (e) {
			player.openNext("{node10}","$(cur)");
		}
		me._off1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_11off=document.createElement('div');
		el.ggId="Rectangle 1-\uce68\uc2e41off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_11off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_11off.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_41off=document.createElement('div');
		el.ggId="Rectangle 4-\uce68\uc2e41off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_41off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_41off.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_41off.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_41off.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_41off.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_41off.ggCurrentLogicStatePosition == 0) {
					me._rectangle_41off.style.left='14px';
					me._rectangle_41off.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_41off.style.left='-1px';
					me._rectangle_41off.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_41off.logicBlock_position();
		me._rectangle_41off.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_41off.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_41off.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_41off.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_41off.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_41off.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_41off.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_41off.logicBlock_backgroundcolor();
		me._rectangle_41off.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_11off.appendChild(me._rectangle_41off);
		me._off1.appendChild(me._rectangle_11off);
		me.__11.appendChild(me._off1);
		me._onoff.appendChild(me.__11);
		el=me.__111=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uacbd1-\uce68\uc2e41-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ed5658;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__111.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uce68\uc2e41-1"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__111.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__111.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__111.style.transition='background-color 0s';
				if (me.__111.ggCurrentLogicStateVisible == 0) {
					me.__111.style.visibility=(Number(me.__111.style.opacity)>0||!me.__111.style.opacity)?'inherit':'hidden';
					me.__111.ggVisible=true;
				}
				else {
					me.__111.style.visibility="hidden";
					me.__111.ggVisible=false;
				}
			}
		}
		me.__111.logicBlock_visible();
		me.__111.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__111.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__111.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__111.style.transition='background-color 0s';
				if (me.__111.ggCurrentLogicStateBackgroundColor == 0) {
					me.__111.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__111.style.backgroundColor="rgba(237,86,88,1)";
				}
			}
		}
		me.__111.logicBlock_backgroundcolor();
		me.__111.onclick=function (e) {
			player.setVariableValue('vis_bg', !player.getVariableValue('vis_bg'));
		}
		me.__111.ggUpdatePosition=function (useTransition) {
		}
		el=me._on11=document.createElement('div');
		els=me._on11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6con-\uce68\uc2e41-1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on11.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on11.ggUpdateText();
		el.appendChild(els);
		me._on11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on11.onclick=function (e) {
			player.openNext("{node22}","$(cur)");
		}
		me._on11.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_111=document.createElement('div');
		el.ggId="Rectangle 1-\uce68\uc2e41-1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_111.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_411=document.createElement('div');
		el.ggId="Rectangle 4-\uce68\uc2e41-1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_411.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_411.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_411.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_411.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_411.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_411.ggCurrentLogicStatePosition == 0) {
					me._rectangle_411.style.left='14px';
					me._rectangle_411.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_411.style.left='-1px';
					me._rectangle_411.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_411.logicBlock_position();
		me._rectangle_411.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_411.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_411.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_411.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_411.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_411.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_411.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_411.logicBlock_backgroundcolor();
		me._rectangle_411.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_111.appendChild(me._rectangle_411);
		me._on11.appendChild(me._rectangle_111);
		me.__111.appendChild(me._on11);
		el=me._off11=document.createElement('div');
		els=me._off11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6coff-\uce68\uc2e41-1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off11.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off11.ggUpdateText();
		el.appendChild(els);
		me._off11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off11.style.transition='';
				if (me._off11.ggCurrentLogicStateVisible == 0) {
					me._off11.style.visibility=(Number(me._off11.style.opacity)>0||!me._off11.style.opacity)?'inherit':'hidden';
					me._off11.ggVisible=true;
				}
				else {
					me._off11.style.visibility="hidden";
					me._off11.ggVisible=false;
				}
			}
		}
		me._off11.logicBlock_visible();
		me._off11.onclick=function (e) {
			player.openNext("{node9}","$(cur)");
		}
		me._off11.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_111off=document.createElement('div');
		el.ggId="Rectangle 1-\uce68\uc2e41-1off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_111off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_111off.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_411off=document.createElement('div');
		el.ggId="Rectangle 4-\uce68\uc2e41-1off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_411off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_411off.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_411off.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_411off.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_411off.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_411off.ggCurrentLogicStatePosition == 0) {
					me._rectangle_411off.style.left='14px';
					me._rectangle_411off.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_411off.style.left='-1px';
					me._rectangle_411off.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_411off.logicBlock_position();
		me._rectangle_411off.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_411off.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_411off.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_411off.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_411off.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_411off.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_411off.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_411off.logicBlock_backgroundcolor();
		me._rectangle_411off.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_111off.appendChild(me._rectangle_411off);
		me._off11.appendChild(me._rectangle_111off);
		me.__111.appendChild(me._off11);
		me._onoff.appendChild(me.__111);
		el=me.__12=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uacbd1-\uce68\uc2e42";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ed5658;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uce68\uc2e42"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__12.style.transition='background-color 0s';
				if (me.__12.ggCurrentLogicStateVisible == 0) {
					me.__12.style.visibility=(Number(me.__12.style.opacity)>0||!me.__12.style.opacity)?'inherit':'hidden';
					me.__12.ggVisible=true;
				}
				else {
					me.__12.style.visibility="hidden";
					me.__12.ggVisible=false;
				}
			}
		}
		me.__12.logicBlock_visible();
		me.__12.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__12.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__12.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__12.style.transition='background-color 0s';
				if (me.__12.ggCurrentLogicStateBackgroundColor == 0) {
					me.__12.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__12.style.backgroundColor="rgba(237,86,88,1)";
				}
			}
		}
		me.__12.logicBlock_backgroundcolor();
		me.__12.onclick=function (e) {
			player.setVariableValue('vis_bg', !player.getVariableValue('vis_bg'));
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me._on2=document.createElement('div');
		els=me._on2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6con-\uce68\uc2e42";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on2.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on2.ggUpdateText();
		el.appendChild(els);
		me._on2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on2.onclick=function (e) {
			player.openNext("{node25}","$(cur)");
		}
		me._on2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_12=document.createElement('div');
		el.ggId="Rectangle 1-\uce68\uc2e42";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_12.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_42=document.createElement('div');
		el.ggId="Rectangle 4-\uce68\uc2e42";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_42.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_42.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_42.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_42.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_42.ggCurrentLogicStatePosition == 0) {
					me._rectangle_42.style.left='14px';
					me._rectangle_42.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_42.style.left='-1px';
					me._rectangle_42.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_42.logicBlock_position();
		me._rectangle_42.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_42.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_42.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_42.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_42.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_42.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_42.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_42.logicBlock_backgroundcolor();
		me._rectangle_42.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_12.appendChild(me._rectangle_42);
		me._on2.appendChild(me._rectangle_12);
		me.__12.appendChild(me._on2);
		el=me._off2=document.createElement('div');
		els=me._off2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6coff-\uce68\uc2e42";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off2.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off2.ggUpdateText();
		el.appendChild(els);
		me._off2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off2.style.transition='';
				if (me._off2.ggCurrentLogicStateVisible == 0) {
					me._off2.style.visibility=(Number(me._off2.style.opacity)>0||!me._off2.style.opacity)?'inherit':'hidden';
					me._off2.ggVisible=true;
				}
				else {
					me._off2.style.visibility="hidden";
					me._off2.ggVisible=false;
				}
			}
		}
		me._off2.logicBlock_visible();
		me._off2.onclick=function (e) {
			player.openNext("{node12}","$(cur)");
		}
		me._off2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_12off=document.createElement('div');
		el.ggId="Rectangle 1-\uce68\uc2e42off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_12off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_12off.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_42off=document.createElement('div');
		el.ggId="Rectangle 4-\uce68\uc2e42off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_42off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_42off.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_42off.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_42off.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_42off.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_42off.ggCurrentLogicStatePosition == 0) {
					me._rectangle_42off.style.left='14px';
					me._rectangle_42off.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_42off.style.left='-1px';
					me._rectangle_42off.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_42off.logicBlock_position();
		me._rectangle_42off.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_42off.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_42off.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_42off.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_42off.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_42off.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_42off.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_42off.logicBlock_backgroundcolor();
		me._rectangle_42off.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_12off.appendChild(me._rectangle_42off);
		me._off2.appendChild(me._rectangle_12off);
		me.__12.appendChild(me._off2);
		me._onoff.appendChild(me.__12);
		el=me.__121=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uacbd1-\uce68\uc2e42-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ed5658;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='cursor:pointer;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__121.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__121.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uce68\uc2e42-1"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__121.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__121.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__121.style.transition='background-color 0s';
				if (me.__121.ggCurrentLogicStateVisible == 0) {
					me.__121.style.visibility=(Number(me.__121.style.opacity)>0||!me.__121.style.opacity)?'inherit':'hidden';
					me.__121.ggVisible=true;
				}
				else {
					me.__121.style.visibility="hidden";
					me.__121.ggVisible=false;
				}
			}
		}
		me.__121.logicBlock_visible();
		me.__121.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__121.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__121.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__121.style.transition='background-color 0s';
				if (me.__121.ggCurrentLogicStateBackgroundColor == 0) {
					me.__121.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__121.style.backgroundColor="rgba(237,86,88,1)";
				}
			}
		}
		me.__121.logicBlock_backgroundcolor();
		me.__121.onclick=function (e) {
			player.setVariableValue('vis_bg', !player.getVariableValue('vis_bg'));
		}
		me.__121.ggUpdatePosition=function (useTransition) {
		}
		el=me._on21=document.createElement('div');
		els=me._on21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6con-\uce68\uc2e42-1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._on21.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._on21.ggUpdateText();
		el.appendChild(els);
		me._on21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._on21.onclick=function (e) {
			player.openNext("{node24}","$(cur)");
		}
		me._on21.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_121=document.createElement('div');
		el.ggId="Rectangle 1-\uce68\uc2e42-1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_121.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_121.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_421=document.createElement('div');
		el.ggId="Rectangle 4-\uce68\uc2e42-1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_421.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_421.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_421.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_421.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_421.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_421.ggCurrentLogicStatePosition == 0) {
					me._rectangle_421.style.left='14px';
					me._rectangle_421.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_421.style.left='-1px';
					me._rectangle_421.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_421.logicBlock_position();
		me._rectangle_421.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_421.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_421.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_421.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_421.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_421.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_421.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_421.logicBlock_backgroundcolor();
		me._rectangle_421.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_121.appendChild(me._rectangle_421);
		me._on21.appendChild(me._rectangle_121);
		me.__121.appendChild(me._on21);
		el=me._off21=document.createElement('div');
		els=me._off21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6coff-\uce68\uc2e42-1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._off21.ggUpdateText=function() {
			var params = [];
			var hs = player._("INTERIOR", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._off21.ggUpdateText();
		el.appendChild(els);
		me._off21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._off21.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._off21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._off21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._off21.style.transition='';
				if (me._off21.ggCurrentLogicStateVisible == 0) {
					me._off21.style.visibility=(Number(me._off21.style.opacity)>0||!me._off21.style.opacity)?'inherit':'hidden';
					me._off21.ggVisible=true;
				}
				else {
					me._off21.style.visibility="hidden";
					me._off21.ggVisible=false;
				}
			}
		}
		me._off21.logicBlock_visible();
		me._off21.onclick=function (e) {
			player.openNext("{node11}","$(cur)");
		}
		me._off21.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_121off=document.createElement('div');
		el.ggId="Rectangle 1-\uce68\uc2e42-1off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 15px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_121off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_121off.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_421off=document.createElement('div');
		el.ggId="Rectangle 4-\uce68\uc2e42-1off";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #00007f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_421off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_421off.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_421off.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_421off.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_421off.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_421off.ggCurrentLogicStatePosition == 0) {
					me._rectangle_421off.style.left='14px';
					me._rectangle_421off.style.top = 'calc(50% - (18px / 2))';
				}
				else {
					me._rectangle_421off.style.left='-1px';
					me._rectangle_421off.style.top='calc(50% - ((18px + 0px) / 2) + 0px)';
				}
			}
		}
		me._rectangle_421off.logicBlock_position();
		me._rectangle_421off.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_bg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_421off.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_421off.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_421off.style.transition='left 0s, top 0s, background-color 0s';
				if (me._rectangle_421off.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_421off.style.backgroundColor="rgba(237,86,88,1)";
				}
				else {
					me._rectangle_421off.style.backgroundColor="rgba(0,0,127,1)";
				}
			}
		}
		me._rectangle_421off.logicBlock_backgroundcolor();
		me._rectangle_421off.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_121off.appendChild(me._rectangle_421off);
		me._off21.appendChild(me._rectangle_121off);
		me.__121.appendChild(me._off21);
		me._onoff.appendChild(me.__121);
		me.divSkin.appendChild(me._onoff);
		el=me._header=document.createElement('div');
		el.ggId="header";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 5.41667%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._header.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._header.ggUpdatePosition=function (useTransition) {
		}
		el=me._header_=document.createElement('div');
		el.ggId="header \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(90deg, rgba(55,56,89,1) 0%, rgba(24,22,40,1) 0%, rgba(48,50,69,1) 82%); box-shadow:2px 2px 4px rgba(0,0,0,0.3);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._header_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._header_.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._header_);
		el=me._logo=document.createElement('div');
		el.ggId="logo";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 65.4762%;';
		hs+='left : 1.2%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((65.4762% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 10%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._logo.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 520))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._logo.ggCurrentLogicStateSize != newLogicStateSize) {
				me._logo.ggCurrentLogicStateSize = newLogicStateSize;
				me._logo.style.transition='width 0s, height 0s';
				if (me._logo.ggCurrentLogicStateSize == 0) {
					me._logo.style.width='32%';
					me._logo.style.height='50%';
					me._logo.style.top = 'calc(50% - (50% / 2))';
					skin.updateSize(me._logo);
				}
				else {
					me._logo.style.width='10%';
					me._logo.style.height='65.4762%';
					me._logo.style.top = 'calc(50% - (65.4762% / 2))';
					skin.updateSize(me._logo);
				}
			}
		}
		me._logo.logicBlock_size();
		me._logo.ggUpdatePosition=function (useTransition) {
		}
		el=me._logo1=document.createElement('div');
		els=me._logo1__img=document.createElement('img');
		els.className='ggskin ggskin_logo1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAiCAYAAAAah5Z6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGZ0lEQVR4nO2ceWwVRRjAf68XBQq1RRESU6rgERJEQzTiTYIYxCNU/MeDhBgxaDzwAo0iaJNCBDRqJFET8EITxSiiKBrEeKBGCXgkKAEBTzzaIkcrYJ9/fG/T2XGv2feWt32dX7Lpm92Zb+a97TfzHbObyWazGHIF8DxQ5XHtPqDZVKDFklbKDOvfDLyEt3IAPAg8DVTkMyiLJS1kIq4gGaAFmBVR7jvISrMn5rgsllQQRUGqgKeAqYayNwGTgJ9jjMtiSQVhClIDrAAmAP8A84BfQ2RWAjcCo4GfgIuAr/MeqcVSBIIUZDDwFjAmV36O6KvIOGBt7vPfwOXAezHHaLEUDT8nvRH4hG7lAGg1kNumfB6IKNqVRi'+
			'OzWFKAn4K0AMML2E8lsAwx2SyWHoOfggxNoK9K4MgE5FosiWGaB0maUUC7cszIo62fSXcs8DiwWavvdWwDlgInB/RbAczN1Q2TF3RMUmRO0q6d7dP3aGRljtL3ZuAxxHz2Ykae41ePUYrc2dq1Bp/+zwdeBnaGyG4FvkKsnCgT7gTgNSRgFCT3L2AjEog6wmmctoReOVCrlPvk0dYrmTkFeBboG1FmLaJQU4FbkX8wnSeBaZFH6U+l9ln9Ll736RZgMdEnuVrgROBa4BokOqnSR+szH8qVz9WaXH28GWARMNNAfh2ihNcBlyL+stcYluTqRKUemXSmI5PUhrStIElyGrCc6MqhUgY8ClymnW+gMMphShPwCPEsgL7Ai7gDMMVkJmbKoTIIWAUc43FtDmbKoTIEeBM4Km0rSJLMxz1LHwQ+Bnb71O8HnJX767AQWAk4'+
			'sfGRWps24COgK8b4wvJLDpncOFT2I99lv0+bWsRMc+53JbAAGK/U2Qq8HtCvOjm8G9AX+P+mXuOap51rB9YDB3zaDAbGKuU6ZA/g9cq5ocBdWrs/gc+R++7FUOB0pTwEmNVbFKQeyc04tAPnIbZsEA3AB3Tb7SMQf2RTrlyt1Z8JPJPHOKNwKmL2OfyAfJcfQ9qdAqyj29wZh/xzOSH5N3KHH2rCbDqwPcpgQ7gAd2TzU2Aicn+CmIDM8M7/7xTcCjIR9715HzHF9obIbQJeQSYhgKbeYmKNoPtLAzxBuHKAOIzztXPHB9SPOnPmg95/M+HKAeKALlHKZbgVrRiM0Mp3E64cAGtw+1D1wAClrP9GdxCuHACvIvsIHRp7i4L008pbDNp+p5WLncvRfahtBm3vR1YN54gySSSJvgJvN2ir30M1MJDPb6TKzVSghLTUCw'+
			'YCq/n/F+1v0L6UeAF/GzeMqxCzIUkO4G/b9zT+TUiuy3+swL0txGEyYtdGYTYyM6nswEzJSgV9pTKhMryK5XBTSk56b1RIU6pwK/Fe4FCRxpIv5eFV8idtCtKhlY8zaHuCVo4Tas2Xb5FwYhyitvP6jdZFbDsXcYQdxgAbIrZNgk6tPIzofoju4CdicqVNQXYiNrKTBZ+GhE2/DGl3NJIYUtlR2KFF4l5kW0OS6M7pPcDbwC8h7Ubh3rqTRULExWSrVm5BQrRh0cDxyCMUDm0k9PRq2hSkAwmzXZIr1wCfAR/i/6NVIUkwNcz3G97bD0qBjYjyD8uVhwPfIwlKfUZ2qAHOxe3nrMXb/zycrAH20R3UGYtEnNbjb/oNQhK4qkmtb5spGGlTEJAZcTzdobpyZCObCbOIH01KO13A7UhCy6E/cKGBjINIcKXY7EbMvoeU'+
			'c/W4N26G0Q48ULghuUljHuQb5IUP+2K2n4NsSCxlViBKEsfP6kRCyl8UdETxWYTsc4tDK2JtREmUxiKNKwhIPmAkcCcyMw4Oqb8HMTEeRvbb6BzCbaKZ5AKC2h7UrhVq1dLlepkbixHn/DbEfBoYIvMPZA/VQswSZw7qeEwUszOkbRbZmbwSeZfBGQSHy7OIv7UKUa7fPep0aH2avPzN1TaT9X4ofTLRnc25eOdBGg0GZbGkkjLkQZFCU4wIksVScMqQh2eCti6bsgu4oYDyLJaiUQasRmzYXcr5Ad7VPVE3720BzkQSZhZLj0d9L1YjoiwnIQmkBcjL4oKoQ3yQgYhzfDHiDFosJYH+4rg65KmycwzlrEYeWimkqWaxFB09D9KGJOmWG8hYijytZZXDUnJ4JQoPAFcj+2LCaEbektFTd4RaLIGEvbx6OvKYpq5IXc'+
			'BNyKOrFkvJ8h/4X38gSoNHYwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="logo1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 72.7273%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72.7273% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 73%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logo1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._logo1.ggUpdatePosition=function (useTransition) {
		}
		me._logo.appendChild(me._logo1);
		me._header.appendChild(me._logo);
		el=me.__=document.createElement('div');
		el.ggId="\ud0c0\uc785";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__.onclick=function (e) {
			player.setVariableValue('vis_downmenu', !player.getVariableValue('vis_downmenu'));
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__0=document.createElement('div');
		els=me.__0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud0c0\uc785\uba85";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px; line-height:26px; @import url(\"https:\/\/fonts.googleapis.com\/css2?family=Noto+Sans+Display:wght@500&display=swap\"); font-family: \"Noto Sans Display\", sans-serif;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 22px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__0.ggUpdateText=function() {
			var params = [];
			var hs = player._("52m\xb2 TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__0.ggUpdateText();
		el.appendChild(els);
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 520))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__0.style.transition='transform 0s';
				if (me.__0.ggCurrentLogicStateScaling == 0) {
					me.__0.ggParameter.sx = 0.8;
					me.__0.ggParameter.sy = 0.8;
					me.__0.style.transform=parameterToTransform(me.__0.ggParameter);
					skin.updateSize(me.__0);
				}
				else {
					me.__0.ggParameter.sx = 1;
					me.__0.ggParameter.sy = 1;
					me.__0.style.transform=parameterToTransform(me.__0.ggParameter);
					skin.updateSize(me.__0);
				}
			}
		}
		me.__0.logicBlock_scaling();
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me.__0);
		me._header.appendChild(me.__);
		me.divSkin.appendChild(me._header);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize().width <= 570))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_1.style.transition='';
				if (me._container_1.ggCurrentLogicStateVisible == 0) {
					me._container_1.style.visibility="hidden";
					me._container_1.ggVisible=false;
				}
				else if (me._container_1.ggCurrentLogicStateVisible == 1) {
					me._container_1.style.visibility="hidden";
					me._container_1.ggVisible=false;
				}
				else {
					me._container_1.style.visibility=(Number(me._container_1.style.opacity)>0||!me._container_1.style.opacity)?'inherit':'hidden';
					me._container_1.ggVisible=true;
				}
			}
		}
		me._container_1.logicBlock_visible();
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=100;
		el.ggId="Timer 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_2.ggTimestamp) / me._timer_2.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_foot2') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._timer_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._timer_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._timer_2.style.transition='left 50ms ease-in-out 0ms, top 50ms ease-in-out 0ms';
				if (me._timer_2.ggCurrentLogicStatePosition == 0) {
					me._timer_2.style.left = 'calc(50% - (50% / 2))';
					me._timer_2.style.top = 'calc(50% - (50% / 2) + (0px / 2) + -5px)';
				}
				else {
					me._timer_2.style.left='calc(50% - ((50% + 0px) / 2) + 0px)';
					me._timer_2.style.top='calc(50% - ((50% + 0px) / 2) + 0px)';
				}
			}
		}
		me._timer_2.logicBlock_position();
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style.transition='left 50ms ease-in-out 0ms, top 50ms ease-in-out 0ms';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
				else {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
			}
		}
		me._timer_2.logicBlock_visible();
		me._timer_2.ggActivate=function () {
			player.setVariableValue('vis_foot2', !player.getVariableValue('vis_foot2'));
		}
		me._timer_2.ggCurrentLogicStatePosition = -1;
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAelJREFUeF7tmkFuxCAMRT0369yKXTs7btW5WStXyQihaYDE/naCs8kiUcAv38Y23Gjy6za5/RQAQgGTEwgXmFwAEQTDBTRdIKX0tXz/sxjnSUSPnDPfzS81BSzGl4bXxjKEFZAZCBUAKaUPIvrusMocghYANp4h9FymEDwAYEhmEMQBDMi/VsfdIjB6AkA5Z/H5tHxQfMCO6L81J7graAAYCYA1jGfO+d76a5LPvQGAu4E7AOgVwSMAqBt4BAB1A5cAiAiWE3gFAFsOA4DkmsrfOpgIvaaDygo1FMA1/lYfoIv5mQH09gJaICCBUFwBixv8tKzreH5qAEfqgZXNqQFIxIHzApBwg9MGwVW/B5dDWD2gEgQLCHuDIUT+PE9tAH'+
			'tiASwNVgewIzOEGg8BsEBoLYtww1c3VXWBMtn5Jyg++B3LLTIYgCIw/u0YWewBvMs+4QA6UmDoKwEAitvhYKEAbz/lzakS1bTYjQIatYNanmAOYKBoUoFgCiCl1MoQSw+9JIDRYkm8SrRWwCgAcRWYAtjRObokgBEViC+J5goY7BlcE0Bnz4Bfu54LVGXy5ulSjU6xCxeoIPC+Yn3KlBsnLH/xA9auAFQdJEjjxC0AVJEWAFCkvY4TCvD6Z1DzCgWgSHsdZ3oF/AKGyNBBDXzfXQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:10,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._timer_2.appendChild(me._image_4);
		me._container_1.appendChild(me._timer_2);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=100;
		el.ggId="Timer 1";
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((50% + 0px) / 2) - 5px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_foot') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._timer_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._timer_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._timer_1.style.transition='right 30ms ease-in-out 0ms, top 30ms ease-in-out 0ms';
				if (me._timer_1.ggCurrentLogicStatePosition == 0) {
					me._timer_1.style.right='0px';
					me._timer_1.style.top = 'calc(50% - (50% / 2))';
				}
				else {
					me._timer_1.style.right='0px';
					me._timer_1.style.top='calc(50% - ((50% + 0px) / 2) - 5px)';
				}
			}
		}
		me._timer_1.logicBlock_position();
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style.transition='right 30ms ease-in-out 0ms, top 30ms ease-in-out 0ms';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.logicBlock_visible();
		me._timer_1.ggActivate=function () {
			player.setVariableValue('vis_foot', !player.getVariableValue('vis_foot'));
		}
		me._timer_1.ggCurrentLogicStatePosition = -1;
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAgFJREFUeF7tmk1ywzAIhZ2bNbdi13anWzU3a4eOPKPxJApCPJBsZe0f8fF4Qji37eK/28Xj3xaApYCLE1glcHEBLBMctgSI6COl9EArdBgARPSVg/0sgmYA30gQQwDIwZeBHxPPEHZApqIIByAI/j/glBJkrZCHSlMkDT4/D6KCMACNwcNUEAKAHX7bth+pUvbrEGUQBYCDZwitP/MycAegzT7KByIAaLPPDOZWQGf2GcAjpXRvrZva9a4K0Dj/YfHTA+iR/ykU8Nsp33kVYFD/cyvAoP6nB9Bb/wvA1H0AEfUa4LyNkJEBMoC79XTIpRGyAjDtadAIgHkPwJKaSQHm8ncDwC/qNUGE/L0B8FS3NvmtdckQ+c8EACJ/VwC5DD'+
			'QqMB+ClFJzMcHyhY07Akz6+5rcAewvJqJ3ZwNo5sMB5JLgyTAb43FC7BK8uwfUbD6XBn8Cg38RDvWAzomQ+e1hHmAeifKBC4AS3GlugyngyX4P/7eHJitIAK/2+aFAQAA0dHtu+/0rdaAAvOvyyvWEQjAH0JD9HQK83695wwgAYEddiSkiALTIPzT7kLOA4JRXJiY0+ygA0qFHqPnBjsPCj6Dh0ocBEE6Aw6WPBhA+6JDsABAPeDL/cx9ySIOHA2hZSNS15n1AVCDa9y4AWnJnuW8p4CyZ1MaxFKAld5b7/gA9GtdBYovkUgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-15,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_foot') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_3.style.transition='right 0s, top 0s';
				if (me._image_3.ggCurrentLogicStatePosition == 0) {
					me._image_3.style.right='0px';
					me._image_3.style.top = 'calc(50% - (100% / 2) + (0px / 2) + 20px)';
				}
				else {
					me._image_3.style.right='0px';
					me._image_3.style.top='calc(50% - ((100% + 0px) / 2) + 0px)';
				}
			}
		}
		me._image_3.logicBlock_position();
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me._timer_1.appendChild(me._image_3);
		me._container_1.appendChild(me._timer_1);
		me.divSkin.appendChild(me._container_1);
		me.__3.logicBlock_position();
		me._cloner_1.logicBlock_position();
		me._cloner_1.logicBlock_scaling();
		me._cloner_1.logicBlock_visible();
		me._cloner_2.logicBlock_position();
		me._cloner_2.logicBlock_scaling();
		me._cloner_2.logicBlock_visible();
		me._image_2.logicBlock_scaling();
		me.__2.logicBlock_scaling();
		me.__2.logicBlock_visible();
		me._onoff.logicBlock_position();
		me._onoff.logicBlock_size();
		me._onoff.logicBlock_scaling();
		me.__16.logicBlock_visible();
		me.__16.logicBlock_backgroundcolor();
		me._rectangle_46.logicBlock_position();
		me._rectangle_46.logicBlock_backgroundcolor();
		me._off6.logicBlock_visible();
		me._rectangle_4off5.logicBlock_position();
		me._rectangle_4off5.logicBlock_backgroundcolor();
		me.__15.logicBlock_visible();
		me.__15.logicBlock_backgroundcolor();
		me._rectangle_45.logicBlock_position();
		me._rectangle_45.logicBlock_backgroundcolor();
		me._off5.logicBlock_visible();
		me._rectangle_4off4.logicBlock_position();
		me._rectangle_4off4.logicBlock_backgroundcolor();
		me.__14.logicBlock_visible();
		me.__14.logicBlock_backgroundcolor();
		me._rectangle_44.logicBlock_position();
		me._rectangle_44.logicBlock_backgroundcolor();
		me._off4.logicBlock_visible();
		me._rectangle_4off3.logicBlock_position();
		me._rectangle_4off3.logicBlock_backgroundcolor();
		me.__110.logicBlock_visible();
		me.__110.logicBlock_backgroundcolor();
		me._rectangle_410.logicBlock_position();
		me._rectangle_410.logicBlock_backgroundcolor();
		me._off10.logicBlock_visible();
		me._rectangle_4off2.logicBlock_position();
		me._rectangle_4off2.logicBlock_backgroundcolor();
		me.__13.logicBlock_visible();
		me.__13.logicBlock_backgroundcolor();
		me._rectangle_43.logicBlock_position();
		me._rectangle_43.logicBlock_backgroundcolor();
		me._off3.logicBlock_visible();
		me._rectangle_4off1.logicBlock_position();
		me._rectangle_4off1.logicBlock_backgroundcolor();
		me.__122.logicBlock_visible();
		me.__122.logicBlock_backgroundcolor();
		me._rectangle_422.logicBlock_position();
		me._rectangle_422.logicBlock_backgroundcolor();
		me._off22.logicBlock_visible();
		me._rectangle_42off1.logicBlock_position();
		me._rectangle_42off1.logicBlock_backgroundcolor();
		me.__10.logicBlock_visible();
		me.__10.logicBlock_backgroundcolor();
		me._rectangle_40.logicBlock_position();
		me._rectangle_40.logicBlock_backgroundcolor();
		me._off0.logicBlock_visible();
		me._rectangle_4off0.logicBlock_position();
		me._rectangle_4off0.logicBlock_backgroundcolor();
		me.__120.logicBlock_visible();
		me.__120.logicBlock_backgroundcolor();
		me._rectangle_420.logicBlock_position();
		me._rectangle_420.logicBlock_backgroundcolor();
		me._off20.logicBlock_visible();
		me._rectangle_42off0.logicBlock_position();
		me._rectangle_42off0.logicBlock_backgroundcolor();
		me.__1.logicBlock_visible();
		me.__1.logicBlock_backgroundcolor();
		me._rectangle_4.logicBlock_position();
		me._rectangle_4.logicBlock_backgroundcolor();
		me._off.logicBlock_visible();
		me._rectangle_4off.logicBlock_position();
		me._rectangle_4off.logicBlock_backgroundcolor();
		me.__11.logicBlock_visible();
		me.__11.logicBlock_backgroundcolor();
		me._rectangle_41.logicBlock_position();
		me._rectangle_41.logicBlock_backgroundcolor();
		me._off1.logicBlock_visible();
		me._rectangle_41off.logicBlock_position();
		me._rectangle_41off.logicBlock_backgroundcolor();
		me.__111.logicBlock_visible();
		me.__111.logicBlock_backgroundcolor();
		me._rectangle_411.logicBlock_position();
		me._rectangle_411.logicBlock_backgroundcolor();
		me._off11.logicBlock_visible();
		me._rectangle_411off.logicBlock_position();
		me._rectangle_411off.logicBlock_backgroundcolor();
		me.__12.logicBlock_visible();
		me.__12.logicBlock_backgroundcolor();
		me._rectangle_42.logicBlock_position();
		me._rectangle_42.logicBlock_backgroundcolor();
		me._off2.logicBlock_visible();
		me._rectangle_42off.logicBlock_position();
		me._rectangle_42off.logicBlock_backgroundcolor();
		me.__121.logicBlock_visible();
		me.__121.logicBlock_backgroundcolor();
		me._rectangle_421.logicBlock_position();
		me._rectangle_421.logicBlock_backgroundcolor();
		me._off21.logicBlock_visible();
		me._rectangle_421off.logicBlock_position();
		me._rectangle_421off.logicBlock_backgroundcolor();
		me._logo.logicBlock_size();
		me.__0.logicBlock_scaling();
		me._container_1.logicBlock_visible();
		me._timer_2.logicBlock_position();
		me._timer_2.logicBlock_visible();
		me._timer_1.logicBlock_position();
		me._timer_1.logicBlock_visible();
		me._image_3.logicBlock_position();
		player.addListener('activehotspotchanged', function(event) {
			me.__16.logicBlock_visible();
			me.__15.logicBlock_visible();
			me.__14.logicBlock_visible();
			me.__110.logicBlock_visible();
			me.__13.logicBlock_visible();
			me.__122.logicBlock_visible();
			me.__10.logicBlock_visible();
			me.__120.logicBlock_visible();
			me.__1.logicBlock_visible();
			me.__11.logicBlock_visible();
			me.__111.logicBlock_visible();
			me.__12.logicBlock_visible();
			me.__121.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			me.__3.logicBlock_position();
			me._cloner_1.logicBlock_visible();
			me._cloner_1.ggUpdateConditionNodeChange();
			me._cloner_2.logicBlock_visible();
			me._cloner_2.ggUpdateConditionNodeChange();
			me.__2.logicBlock_visible();
			me._onoff.logicBlock_position();
			me._onoff.logicBlock_size();
			me.__16.logicBlock_visible();
			me.__16.logicBlock_backgroundcolor();
			me._rectangle_46.logicBlock_position();
			me._rectangle_46.logicBlock_backgroundcolor();
			me._off6.logicBlock_visible();
			me._rectangle_4off5.logicBlock_position();
			me._rectangle_4off5.logicBlock_backgroundcolor();
			me.__15.logicBlock_visible();
			me.__15.logicBlock_backgroundcolor();
			me._rectangle_45.logicBlock_position();
			me._rectangle_45.logicBlock_backgroundcolor();
			me._off5.logicBlock_visible();
			me._rectangle_4off4.logicBlock_position();
			me._rectangle_4off4.logicBlock_backgroundcolor();
			me.__14.logicBlock_visible();
			me.__14.logicBlock_backgroundcolor();
			me._rectangle_44.logicBlock_position();
			me._rectangle_44.logicBlock_backgroundcolor();
			me._off4.logicBlock_visible();
			me._rectangle_4off3.logicBlock_position();
			me._rectangle_4off3.logicBlock_backgroundcolor();
			me.__110.logicBlock_visible();
			me.__110.logicBlock_backgroundcolor();
			me._rectangle_410.logicBlock_position();
			me._rectangle_410.logicBlock_backgroundcolor();
			me._off10.logicBlock_visible();
			me._rectangle_4off2.logicBlock_position();
			me._rectangle_4off2.logicBlock_backgroundcolor();
			me.__13.logicBlock_visible();
			me.__13.logicBlock_backgroundcolor();
			me._rectangle_43.logicBlock_position();
			me._rectangle_43.logicBlock_backgroundcolor();
			me._off3.logicBlock_visible();
			me._rectangle_4off1.logicBlock_position();
			me._rectangle_4off1.logicBlock_backgroundcolor();
			me.__122.logicBlock_visible();
			me.__122.logicBlock_backgroundcolor();
			me._rectangle_422.logicBlock_position();
			me._rectangle_422.logicBlock_backgroundcolor();
			me._off22.logicBlock_visible();
			me._rectangle_42off1.logicBlock_position();
			me._rectangle_42off1.logicBlock_backgroundcolor();
			me.__10.logicBlock_visible();
			me.__10.logicBlock_backgroundcolor();
			me._rectangle_40.logicBlock_position();
			me._rectangle_40.logicBlock_backgroundcolor();
			me._off0.logicBlock_visible();
			me._rectangle_4off0.logicBlock_position();
			me._rectangle_4off0.logicBlock_backgroundcolor();
			me.__120.logicBlock_visible();
			me.__120.logicBlock_backgroundcolor();
			me._rectangle_420.logicBlock_position();
			me._rectangle_420.logicBlock_backgroundcolor();
			me._off20.logicBlock_visible();
			me._rectangle_42off0.logicBlock_position();
			me._rectangle_42off0.logicBlock_backgroundcolor();
			me.__1.logicBlock_visible();
			me.__1.logicBlock_backgroundcolor();
			me._rectangle_4.logicBlock_position();
			me._rectangle_4.logicBlock_backgroundcolor();
			me._off.logicBlock_visible();
			me._rectangle_4off.logicBlock_position();
			me._rectangle_4off.logicBlock_backgroundcolor();
			me.__11.logicBlock_visible();
			me.__11.logicBlock_backgroundcolor();
			me._rectangle_41.logicBlock_position();
			me._rectangle_41.logicBlock_backgroundcolor();
			me._off1.logicBlock_visible();
			me._rectangle_41off.logicBlock_position();
			me._rectangle_41off.logicBlock_backgroundcolor();
			me.__111.logicBlock_visible();
			me.__111.logicBlock_backgroundcolor();
			me._rectangle_411.logicBlock_position();
			me._rectangle_411.logicBlock_backgroundcolor();
			me._off11.logicBlock_visible();
			me._rectangle_411off.logicBlock_position();
			me._rectangle_411off.logicBlock_backgroundcolor();
			me.__12.logicBlock_visible();
			me.__12.logicBlock_backgroundcolor();
			me._rectangle_42.logicBlock_position();
			me._rectangle_42.logicBlock_backgroundcolor();
			me._off2.logicBlock_visible();
			me._rectangle_42off.logicBlock_position();
			me._rectangle_42off.logicBlock_backgroundcolor();
			me.__121.logicBlock_visible();
			me.__121.logicBlock_backgroundcolor();
			me._rectangle_421.logicBlock_position();
			me._rectangle_421.logicBlock_backgroundcolor();
			me._off21.logicBlock_visible();
			me._rectangle_421off.logicBlock_position();
			me._rectangle_421off.logicBlock_backgroundcolor();
			me._timer_2.logicBlock_position();
			me._timer_2.logicBlock_visible();
			me._timer_1.logicBlock_position();
			me._timer_1.logicBlock_visible();
			me._image_3.logicBlock_position();
		});
		player.addListener('configloaded', function(event) {
			me.__3.logicBlock_position();
			me._scrollarea_1.ggUpdatePosition();
			me.__2.logicBlock_visible();
			me._onoff.logicBlock_position();
			me._onoff.logicBlock_size();
			me.__16.logicBlock_visible();
			me.__16.logicBlock_backgroundcolor();
			me._rectangle_46.logicBlock_position();
			me._rectangle_46.logicBlock_backgroundcolor();
			me._off6.logicBlock_visible();
			me._rectangle_4off5.logicBlock_position();
			me._rectangle_4off5.logicBlock_backgroundcolor();
			me.__15.logicBlock_visible();
			me.__15.logicBlock_backgroundcolor();
			me._rectangle_45.logicBlock_position();
			me._rectangle_45.logicBlock_backgroundcolor();
			me._off5.logicBlock_visible();
			me._rectangle_4off4.logicBlock_position();
			me._rectangle_4off4.logicBlock_backgroundcolor();
			me.__14.logicBlock_visible();
			me.__14.logicBlock_backgroundcolor();
			me._rectangle_44.logicBlock_position();
			me._rectangle_44.logicBlock_backgroundcolor();
			me._off4.logicBlock_visible();
			me._rectangle_4off3.logicBlock_position();
			me._rectangle_4off3.logicBlock_backgroundcolor();
			me.__110.logicBlock_visible();
			me.__110.logicBlock_backgroundcolor();
			me._rectangle_410.logicBlock_position();
			me._rectangle_410.logicBlock_backgroundcolor();
			me._off10.logicBlock_visible();
			me._rectangle_4off2.logicBlock_position();
			me._rectangle_4off2.logicBlock_backgroundcolor();
			me.__13.logicBlock_visible();
			me.__13.logicBlock_backgroundcolor();
			me._rectangle_43.logicBlock_position();
			me._rectangle_43.logicBlock_backgroundcolor();
			me._off3.logicBlock_visible();
			me._rectangle_4off1.logicBlock_position();
			me._rectangle_4off1.logicBlock_backgroundcolor();
			me.__122.logicBlock_visible();
			me.__122.logicBlock_backgroundcolor();
			me._rectangle_422.logicBlock_position();
			me._rectangle_422.logicBlock_backgroundcolor();
			me._off22.logicBlock_visible();
			me._rectangle_42off1.logicBlock_position();
			me._rectangle_42off1.logicBlock_backgroundcolor();
			me.__10.logicBlock_visible();
			me.__10.logicBlock_backgroundcolor();
			me._rectangle_40.logicBlock_position();
			me._rectangle_40.logicBlock_backgroundcolor();
			me._off0.logicBlock_visible();
			me._rectangle_4off0.logicBlock_position();
			me._rectangle_4off0.logicBlock_backgroundcolor();
			me.__120.logicBlock_visible();
			me.__120.logicBlock_backgroundcolor();
			me._rectangle_420.logicBlock_position();
			me._rectangle_420.logicBlock_backgroundcolor();
			me._off20.logicBlock_visible();
			me._rectangle_42off0.logicBlock_position();
			me._rectangle_42off0.logicBlock_backgroundcolor();
			me.__1.logicBlock_visible();
			me.__1.logicBlock_backgroundcolor();
			me._rectangle_4.logicBlock_position();
			me._rectangle_4.logicBlock_backgroundcolor();
			me._off.logicBlock_visible();
			me._rectangle_4off.logicBlock_position();
			me._rectangle_4off.logicBlock_backgroundcolor();
			me.__11.logicBlock_visible();
			me.__11.logicBlock_backgroundcolor();
			me._rectangle_41.logicBlock_position();
			me._rectangle_41.logicBlock_backgroundcolor();
			me._off1.logicBlock_visible();
			me._rectangle_41off.logicBlock_position();
			me._rectangle_41off.logicBlock_backgroundcolor();
			me.__111.logicBlock_visible();
			me.__111.logicBlock_backgroundcolor();
			me._rectangle_411.logicBlock_position();
			me._rectangle_411.logicBlock_backgroundcolor();
			me._off11.logicBlock_visible();
			me._rectangle_411off.logicBlock_position();
			me._rectangle_411off.logicBlock_backgroundcolor();
			me.__12.logicBlock_visible();
			me.__12.logicBlock_backgroundcolor();
			me._rectangle_42.logicBlock_position();
			me._rectangle_42.logicBlock_backgroundcolor();
			me._off2.logicBlock_visible();
			me._rectangle_42off.logicBlock_position();
			me._rectangle_42off.logicBlock_backgroundcolor();
			me.__121.logicBlock_visible();
			me.__121.logicBlock_backgroundcolor();
			me._rectangle_421.logicBlock_position();
			me._rectangle_421.logicBlock_backgroundcolor();
			me._off21.logicBlock_visible();
			me._rectangle_421off.logicBlock_position();
			me._rectangle_421off.logicBlock_backgroundcolor();
			me._container_1.logicBlock_visible();
			me._timer_2.logicBlock_position();
			me._timer_1.logicBlock_position();
			me._image_3.logicBlock_position();
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me._cloner_1.logicBlock_position();
			me._cloner_1.logicBlock_scaling();
			me._cloner_2.logicBlock_position();
			me._cloner_2.logicBlock_scaling();
			me._image_2.logicBlock_scaling();
			me.__2.logicBlock_scaling();
			me._onoff.logicBlock_scaling();
			me._logo.logicBlock_size();
			me.__0.logicBlock_scaling();
			me._container_1.logicBlock_visible();
		});
		player.addListener('varchanged_vis_bg', function(event) {
			me.__16.logicBlock_backgroundcolor();
			me._rectangle_46.logicBlock_position();
			me._rectangle_46.logicBlock_backgroundcolor();
			me._off6.logicBlock_visible();
			me._rectangle_4off5.logicBlock_position();
			me._rectangle_4off5.logicBlock_backgroundcolor();
			me.__15.logicBlock_backgroundcolor();
			me._rectangle_45.logicBlock_position();
			me._rectangle_45.logicBlock_backgroundcolor();
			me._off5.logicBlock_visible();
			me._rectangle_4off4.logicBlock_position();
			me._rectangle_4off4.logicBlock_backgroundcolor();
			me.__14.logicBlock_backgroundcolor();
			me._rectangle_44.logicBlock_position();
			me._rectangle_44.logicBlock_backgroundcolor();
			me._off4.logicBlock_visible();
			me._rectangle_4off3.logicBlock_position();
			me._rectangle_4off3.logicBlock_backgroundcolor();
			me.__110.logicBlock_backgroundcolor();
			me._rectangle_410.logicBlock_position();
			me._rectangle_410.logicBlock_backgroundcolor();
			me._off10.logicBlock_visible();
			me._rectangle_4off2.logicBlock_position();
			me._rectangle_4off2.logicBlock_backgroundcolor();
			me.__13.logicBlock_backgroundcolor();
			me._rectangle_43.logicBlock_position();
			me._rectangle_43.logicBlock_backgroundcolor();
			me._off3.logicBlock_visible();
			me._rectangle_4off1.logicBlock_position();
			me._rectangle_4off1.logicBlock_backgroundcolor();
			me.__122.logicBlock_backgroundcolor();
			me._rectangle_422.logicBlock_position();
			me._rectangle_422.logicBlock_backgroundcolor();
			me._off22.logicBlock_visible();
			me._rectangle_42off1.logicBlock_position();
			me._rectangle_42off1.logicBlock_backgroundcolor();
			me.__10.logicBlock_backgroundcolor();
			me._rectangle_40.logicBlock_position();
			me._rectangle_40.logicBlock_backgroundcolor();
			me._off0.logicBlock_visible();
			me._rectangle_4off0.logicBlock_position();
			me._rectangle_4off0.logicBlock_backgroundcolor();
			me.__120.logicBlock_backgroundcolor();
			me._rectangle_420.logicBlock_position();
			me._rectangle_420.logicBlock_backgroundcolor();
			me._off20.logicBlock_visible();
			me._rectangle_42off0.logicBlock_position();
			me._rectangle_42off0.logicBlock_backgroundcolor();
			me.__1.logicBlock_backgroundcolor();
			me._rectangle_4.logicBlock_position();
			me._rectangle_4.logicBlock_backgroundcolor();
			me._off.logicBlock_visible();
			me._rectangle_4off.logicBlock_position();
			me._rectangle_4off.logicBlock_backgroundcolor();
			me.__11.logicBlock_backgroundcolor();
			me._rectangle_41.logicBlock_position();
			me._rectangle_41.logicBlock_backgroundcolor();
			me._off1.logicBlock_visible();
			me._rectangle_41off.logicBlock_position();
			me._rectangle_41off.logicBlock_backgroundcolor();
			me.__111.logicBlock_backgroundcolor();
			me._rectangle_411.logicBlock_position();
			me._rectangle_411.logicBlock_backgroundcolor();
			me._off11.logicBlock_visible();
			me._rectangle_411off.logicBlock_position();
			me._rectangle_411off.logicBlock_backgroundcolor();
			me.__12.logicBlock_backgroundcolor();
			me._rectangle_42.logicBlock_position();
			me._rectangle_42.logicBlock_backgroundcolor();
			me._off2.logicBlock_visible();
			me._rectangle_42off.logicBlock_position();
			me._rectangle_42off.logicBlock_backgroundcolor();
			me.__121.logicBlock_backgroundcolor();
			me._rectangle_421.logicBlock_position();
			me._rectangle_421.logicBlock_backgroundcolor();
			me._off21.logicBlock_visible();
			me._rectangle_421off.logicBlock_position();
			me._rectangle_421off.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_vis_foot', function(event) {
			me._timer_1.logicBlock_position();
			me._image_3.logicBlock_position();
		});
		player.addListener('varchanged_vis_foot2', function(event) {
			me._timer_2.logicBlock_position();
		});
		player.addListener('varchanged_vis_room', function(event) {
			me.__3.logicBlock_position();
			me.__2.logicBlock_visible();
			me._onoff.logicBlock_position();
		});
		player.addListener('varchanged_vis_size', function(event) {
			me._onoff.logicBlock_size();
		});
		player.addListener('viewerinit', function(event) {
			me._cloner_1.ggUpdate();
			me._cloner_2.ggUpdate();
		});
	};
	function SkinCloner_cloner_2_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_2__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_2.onclick=function (e) {
			if (me._nodeimage_2.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._nodeimage_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__20;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04\uba85 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -32px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__20.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__20.ggUpdateText();
		player.addListener('changenode', function() {
			me.__20.ggUpdateText();
		});
		el.appendChild(els);
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		me._nodeimage_2.appendChild(me.__20);
		me.__div.appendChild(me._nodeimage_2);
	};
	function SkinCloner_cloner_1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1.onclick=function (e) {
			if (me._nodeimage_1.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._nodeimage_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__5;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -32px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__5.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__5.ggUpdateText();
		player.addListener('changenode', function() {
			me.__5.ggUpdateText();
		});
		el.appendChild(els);
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		me._nodeimage_1.appendChild(me.__5);
		me.__div.appendChild(me._nodeimage_1);
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmousemove=function (e) {
			skin._container_1.style.transition='none';
			skin._container_1.style.visibility=(Number(skin._container_1.style.opacity)>0||!skin._container_1.style.opacity)?'inherit':'hidden';
			skin._container_1.ggVisible=true;
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin._container_1.style.transition='none';
			skin._container_1.style.visibility='hidden';
			skin._container_1.ggVisible=false;
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['ht_node']) {
				skin._container_1.style.transition='none';
				skin._container_1.style.visibility=(Number(skin._container_1.style.opacity)>0||!skin._container_1.style.opacity)?'inherit':'hidden';
				skin._container_1.ggVisible=true;
			}
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAACjRJREFUeF7lm3tsHEcdx3+zu/ew4wAqQglBuNhO4sclcSmtHTtSyMN2jACJfyIhWlSlTh0qgVBR09CSBkRTJCRUQV0kWrVNS1JUSFNAQoKKChq3KSFuTOMQ6ji1ndqN7SZ2/XbOt7sz6Dc7s94732P37uws5aTVnu98e/f9/B7zm9nfEFj+B3H5lczl/+X0b25/TC5fIr8Dz85DXlO+LwU7z/g88fVcfsuizy4VAKdQpaLmeyWqGi6hVFeBaDcDYwSAEUUNFjPGCDVjA4QQxiieVQqEMD02dfndfz15GQBMAKDikEDy5h35BCCvpQCAUn7bd0vVwMpthCgljJkqMKowRvE9VIpnNC6xYOCrhOFbeCZ4xjeJQg19+nVFDRrdZx'+
			'57DQAMcSAQp3dk7RX5AoDXUSpr95cSJbRDikbhjFEVqDgD4yqlB4hf7QgBCwDngQKJQgkQCopqEqKYpj7T3nP2ib8DQEyAQO/ICUSuALirV9buL0PhAFDGmKGhaEZNTVhdBWAKujq3uP1wPrfTQYJrE4ahAUAoAuCHohmmPnOyp/OXf8sHiFwAcFeP1D20E4i2nVE9QKkRYMzUuPg40Q6xjCfC9A9iJz7pJDw8CJEgVCMBxLwjNDA8XD8y/5jFl7KtrmiFdzNqaIwalnhqBCzhGONCtBvBbn6uDUWhiSBmJ/uODnQf7wEACcJ1WHgFwGN9w5ZDOxiDnZTGgiiaH4yi6+dfeCKcZCAUTTdiU+3vvv3UXwHgekKiTIvXCwBLfP3BnQzITmrGQpTqQXR3nuhAZPZ8WTyTV8SBwNygGkZs6mTvuacRwhwA6I6hM+XV3ALg'+
			'4qvqHm4BYGsZ1YMIgMc7F4/DmYvYziQqm/c5CMwPPEHqxvxke2/XMxICjhZyyEx6dTcAuPhI3UMNDBR0+xAz9SBjJrq95fI3SvxCLSkhUEJUnVKj71Jn27PCE9JCyATAdnvKoMFhecz2qlXL3CDLJ80N3BM4BD020d7XdQQ9YVYMl0k9IR0Anu031B9ssGPecvu0lu/pfOKubDzZy2fW3/rt51P4s1VEESycbAivODxh0eiQDgBWdmWKWtBCzfmwlfCMYCa3/9PxH+z6yu5H8Uvz+nj00Dduqd5Ysmp92adXpwTA1ds5gXvC9Hj3saHeP18QELCUjqsTUgHA19XIlh8+Qs35EDVjYTHUZUx4+QSAolHT7q/VVztppgUQD4Enxosdj/0EACbFECnLZ37JVABwuGugjDVy65s6z/huEl4+AKDwRNGeAMRBUA09OvZG/4'+
			'VjfwGAaVEs2V6QDIBl/fpDhy3x6P5mgI/zLhJetgBSWTtZHGX0gLjRQaGKoupTY++8MNz/ynlHjSAnXYu+Aoe8RsbAsj4V1nchHq+UDQCvidM1AOEJmBRNM9bf+/avjohQiIp1hkUhgNbXIvWHMPY9W9+vAKxCSTWmxi78ZuTyq+gFGApYKS6akuZkfV8CcHqBMX+599yT6AUTAMC9wJkDcop9GUi+CwE7H+BUWjV6zv7ipwDwIQDM4KTJCWAh8xvRAq+x738AuMSmmhPXzv326sDJcwAwhRWiBGBNdjYfaGJAGqkxX0CpEXSb+Z1p1L8egAWSQqmJYfDUcwAwjnWBEwBPfqYZLUAAbsf9xDHEtwCsGnlRGEgAuHS9VlEL91LjeiGlethayfU+0fE3ACsMJq91vfjBwGtdOCTaAKyxnzWZ5nwBVn7ZuL9vR4GEwigW'+
			'vXbqvf+8iJXhBJ/x2fHPoIkiAA+V3/9WCFgTpfm5q/8Y6P4dTtjGJQC1snZ/E4DCPUAsbma10OH3EEAAphEd6Ot6GqfUHy4A2PzgPYyZFXLm52bik6xO9zUAkQhN/fpg3/lnfu0EoFXWHmhljJZzADjzY0zcvvI2rfc/AGCGfn2w//yzRwFgTHqAFql/+LCJI4ANwPsIkG0SPPH8Pr6KtHHjRle0PU2GEq9I+Ehg9Jx9/GcAMCoBBKrqDh7OdQjMFsBXt4fuisVi0NbWtlwAzEUAKmoeaAXMATnUANkC+P3Re7kHRCKRZQFg6HPv958/8oLTA7SKmgf2AThzwPKFwJKuByQJAZEDjsXlgIUkKMrgLKrAbD1geQEQGp0dPjN48cSrcQAqbr+vGZRAgz0P+CiOAmLFeH7ug9MD3cfjAKiVNffvAqI2/j8UQqISxJsmdi'+
			'GkrK2+pyIQvmmvVQrjVDi7W16+rgO4Byh04mrniWvvn/q3BIChi0VPuGrzg4+YRrQw27UA3+cAAeBSZ9vPMf7lZMhaNQMIlt9+/z4CbH0uQ6HfPSA6M9wx2PMyttcggKm4BZGSyJ1VoaI1d+eSCH0LwE6AI/8c6H6Jxz/eOHWuCeLd3oLKzd//8Ud5SexSZ9vjQnzckpjMAxgGrQCsnFk3RDyvCvnZA6KzIzj+Y5sdWj9uUVTmAS3XMPAlgIXkh5MNvCeA1se+gbj7AggBwyC8/rb7Wgkh66zb4d68wK8AHNZH8Wh97CijiTdH8e/AzVVfjxQUfXaPPTX2UBP4DkBy62MTFfYKJOvWtLxg3ee/1axoK3Z4zQXZAEDX+3LzF1bf29JcjQ0QmaaEntYDCLBU1pdxv3i+BBAAgMLK2gM/Wq7b4/JHIIj6mvLVshskGQzX'+
			'ANLEvmzDT9kgAQCh4ordVYUri/dgZej2Rkm2HpBMaCqvcAVAjPvjI2/9YXTodLdIfjzzO9tk0rbIYF2w9pbWZjVQtP1GtMg4oThhZAQgxEdnhzsGL55oFz0BnlpkZF2gYSiUVe/dpQVWbsvUIYYf8jq3zxTvnkNAip8Zemuw5+XXhXi0vEx8rpqkZH7gcwSEsO7W77QoilZqQfBZj6CkFC/+DTHcSfHo+p7a5CQEnCkihBWlm/Y0BoKf2OrGE7KxbE6fEb3DYr3vJWF57ATBgidl33C6PsEFrtZ0mXtC6aY9Tb6DEG/5U8LyUnxOrbJJIZRtamnUQh/f6jYx5mTZTB+OT3jo9igcD4z5vDRLJ0LgNcKasi9Vrryp8g4/tMuPj3T8cXTodK8Qjq0veW+XT4SAo0MBABSVbPjm9mD4k1v4PiG+kLrE+wbsfQKERa1M/6'+
			'YQjKJR/JJtmHBC4O10WCwJEIWfi9zxxVDBp+qWDIRDuKHPXpkee+eMsDoKxwOFL/mWGWdE8k1TDhBhhLEYROJuMZct9nEbp6w9hYY+MySE44bKROEy0y/5piknBPv2ugCBIwUHURK5cytupAoVrqpNvm0OL5Np65wtumN06PR7IqmhlfHAPj88UDif2Tm22WZKnfb7boZBNxdLBgLDA4GEVhVvKwkXrS5mFLfXAGjBj30GN09qwRVrcEFWj00P812jqCQ2OYSbHuamr1wZvfLmoBCNIjGjo3A84994yG21WW+lzReAxPwgQwPzBB44cuCBz2XoOM/cHRz7e1AYHnKrrBSMfzv3EsvPuTFS0v/JN4BEELz/SBxofflcvi7PUogTAsayBLFkm6f/C/vNGqmimfbdAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_6.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 570))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_6.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_6.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_6.style.transition='width 0s, height 0s';
				if (me._image_6.ggCurrentLogicStateSize == 0) {
					me._image_6.style.width='34px';
					me._image_6.style.height='34px';
					me._image_6.style.left = 'calc(50% - (34px / 2))';
					me._image_6.style.top = 'calc(50% - (34px / 2))';
					skin.updateSize(me._image_6);
				}
				else {
					me._image_6.style.width='64px';
					me._image_6.style.height='64px';
					me._image_6.style.left = 'calc(50% - (64px / 2))';
					me._image_6.style.top = 'calc(50% - (64px / 2))';
					skin.updateSize(me._image_6);
				}
			}
		}
		me._image_6.logicBlock_size();
		me._image_6.onmouseover=function (e) {
			me.elementMouseOver['image_6']=true;
			me._text_2.logicBlock_visible();
		}
		me._image_6.onmouseout=function (e) {
			me.elementMouseOver['image_6']=false;
			me._text_2.logicBlock_visible();
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -22px;';
		hs+='color : rgba(253,253,253,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_2.ggUpdateText();
		});
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 570))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._text_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._text_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._text_2.style.transition='width 0s, height 0s';
				if (me._text_2.ggCurrentLogicStateSize == 0) {
					me._text_2.style.width='80px';
					me._text_2.style.height='20px';
					me._text_2.style.left = 'calc(50% - (80px / 2))';
					skin.updateSize(me._text_2);
				}
				else {
					me._text_2.style.width='100px';
					me._text_2.style.height='20px';
					me._text_2.style.left = 'calc(50% - (100px / 2))';
					skin.updateSize(me._text_2);
				}
			}
		}
		me._text_2.logicBlock_size();
		me._text_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['image_6'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_2.style.transition='width 0s, height 0s';
				if (me._text_2.ggCurrentLogicStateVisible == 0) {
					me._text_2.style.visibility=(Number(me._text_2.style.opacity)>0||!me._text_2.style.opacity)?'inherit':'hidden';
					me._text_2.ggVisible=true;
				}
				else {
					me._text_2.style.visibility="hidden";
					me._text_2.ggVisible=false;
				}
			}
		}
		me._text_2.logicBlock_visible();
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._image_6.appendChild(me._text_2);
		me._external_1.appendChild(me._image_6);
		me._ht_node.appendChild(me._external_1);
		if ((hotspot) && (hotspot.customimage)) {
			me._external_1.style.width=hotspot.customimagewidth + 'px';
			me._external_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._image_6.logicBlock_size();
		me._text_2.logicBlock_size();
		me._text_2.logicBlock_visible();
			me.ggEvent_sizechanged=function() {
				me._image_6.logicBlock_size();
				me._text_2.logicBlock_size();
			};
			me.hotspotTimerEvent=function() {
				me._ht_node.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me._container_1.ggParameter) {
			hs+=parameterToTransform(me._container_1.ggParameter) + ' ';
		}
		hs+='translate(' + (1 * player.mouse.x + -35) + 'px,0px) ';
		hs+='translate(0px,' + (1 * player.mouse.y + 20) + 'px) ';
		me._container_1.style.transform=hs;
		me._timer_2.ggUpdateConditionTimer();
		if (me._timer_2.ggLastIsActive!=me._timer_2.ggIsActive()) {
			me._timer_2.ggLastIsActive=me._timer_2.ggIsActive();
			if (me._timer_2.ggLastIsActive) {
				player.setVariableValue('vis_foot2', !player.getVariableValue('vis_foot2'));
			} else {
			}
		}
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('vis_foot', !player.getVariableValue('vis_foot'));
			} else {
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};