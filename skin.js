// Garden Gnome Software - Skin
// Pano2VR 7.0.7/20014
// Filename: version2-downarrow.ggsk
// Generated 2023-11-28T14:26:07

function pano2vrSkin(player,base) {
	player.addVariable('vis_down', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_downmenu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_2', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_3', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_4', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_5', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_buttonbg_6', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_footerdownmenu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_door', 2, false, { ignoreInState: 0  });
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
		el=me._header=document.createElement('div');
		el.ggId="header";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 5%;';
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
		hs+='background: linear-gradient(90deg, rgba(55,56,89,1) 0%, rgba(24,22,40,1) 0%, rgba(48,50,69,1) 82%);';
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
					me._logo.style.height='45%';
					me._logo.style.top = 'calc(50% - (45% / 2))';
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
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
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
		el.ggId="Image 1";
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
		me._logo.appendChild(me._image_1);
		me._header.appendChild(me._logo);
		el=me.__51=document.createElement('div');
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
		hs+='left : calc(50% - ((150px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__51.ggIsActive=function() {
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
		me.__51.onclick=function (e) {
			player.setVariableValue('vis_downmenu', !player.getVariableValue('vis_downmenu'));
		}
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
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
		hs+='letter-spacing:1px;';
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
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2e8\uce35\ud615 52m\xb2", params);
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
		me._text_1.logicBlock_scaling = function() {
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
			if (me._text_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_1.style.transition='transform 0s';
				if (me._text_1.ggCurrentLogicStateScaling == 0) {
					me._text_1.ggParameter.sx = 0.8;
					me._text_1.ggParameter.sy = 0.8;
					me._text_1.style.transform=parameterToTransform(me._text_1.ggParameter);
					skin.updateSize(me._text_1);
				}
				else {
					me._text_1.ggParameter.sx = 1;
					me._text_1.ggParameter.sy = 1;
					me._text_1.style.transform=parameterToTransform(me._text_1.ggParameter);
					skin.updateSize(me._text_1);
				}
			}
		}
		me._text_1.logicBlock_scaling();
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._headerdown=document.createElement('div');
		el.ggId="header-down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 33.6px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._headerdown.ggIsActive=function() {
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
		me._headerdown.ggUpdatePosition=function (useTransition) {
		}
		me._text_1.appendChild(me._headerdown);
		me.__51.appendChild(me._text_1);
		me._header.appendChild(me.__51);
		el=me.__46=document.createElement('div');
		el.ggId="\ub4dc\ub86d\ub2e4\uc6b4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((223px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 100%;';
		hs+='visibility : inherit;';
		hs+='width : 223px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__46.ggIsActive=function() {
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
		me.__46.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 560))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__46.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__46.ggCurrentLogicStateSize = newLogicStateSize;
				me.__46.style.transition='width 0s, height 0s';
				if (me.__46.ggCurrentLogicStateSize == 0) {
					me.__46.style.width='160px';
					me.__46.style.height='40px';
					me.__46.style.left = 'calc(50% - (160px / 2))';
					skin.updateSize(me.__46);
				}
				else {
					me.__46.style.width='223px';
					me.__46.style.height='40px';
					me.__46.style.left = 'calc(50% - (223px / 2))';
					skin.updateSize(me.__46);
				}
			}
		}
		me.__46.logicBlock_size();
		me.__46.onclick=function (e) {
			player.setVariableValue('vis_downmenu', !player.getVariableValue('vis_downmenu'));
		}
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		el=me.__48=document.createElement('div');
		el.ggId="\ub4dc\ub86d\ub2e4\uc6b4\uba54\ub274";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 240%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 3px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__48.ggIsActive=function() {
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
		me.__48.logicBlock_scaling = function() {
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
			if (me.__48.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__48.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__48.style.transition='transform 0s, opacity 500ms ease 0ms';
				if (me.__48.ggCurrentLogicStateScaling == 0) {
					me.__48.ggParameter.sx = 0.8;
					me.__48.ggParameter.sy = 0.8;
					me.__48.style.transform=parameterToTransform(me.__48.ggParameter);
					skin.updateSize(me.__48);
				}
				else {
					me.__48.ggParameter.sx = 1;
					me.__48.ggParameter.sy = 1;
					me.__48.style.transform=parameterToTransform(me.__48.ggParameter);
					skin.updateSize(me.__48);
				}
			}
		}
		me.__48.logicBlock_scaling();
		me.__48.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_downmenu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__48.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__48.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__48.style.transition='transform 0s, opacity 500ms ease 0ms';
				if (me.__48.ggCurrentLogicStateAlpha == 0) {
					me.__48.style.visibility=me.__48.ggVisible?'inherit':'hidden';
					me.__48.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__48.style.opacity == 0.0) { me.__48.style.visibility="hidden"; } }, 505);
					me.__48.style.opacity=0;
				}
			}
		}
		me.__48.logicBlock_alpha();
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		el=me.__49=document.createElement('div');
		el.ggId="\ub4dc\ub86d\ub2e4\uc6b4\uba54\ub274\ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((70% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(90deg, rgba(55,56,89,1) 0%, rgba(24,22,40,1) 0%, rgba(48,50,69,1) 82%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__49.ggIsActive=function() {
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
		me.__49.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 560))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__49.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__49.ggCurrentLogicStateSize = newLogicStateSize;
				me.__49.style.transition='width 0s, height 0s';
				if (me.__49.ggCurrentLogicStateSize == 0) {
					me.__49.style.width='90%';
					me.__49.style.height='100%';
					me.__49.style.left = 'calc(50% - (90% / 2))';
					skin.updateSize(me.__49);
				}
				else {
					me.__49.style.width='70%';
					me.__49.style.height='100%';
					me.__49.style.left = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__49);
				}
			}
		}
		me.__49.logicBlock_size();
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me.__212=document.createElement('div');
		els=me.__212__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud0c0\uc7852";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__212.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uce35\ud615\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__212.ggUpdateText();
		el.appendChild(els);
		me.__212.ggIsActive=function() {
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
		me.__212.ggUpdatePosition=function (useTransition) {
		}
		me.__49.appendChild(me.__212);
		el=me.__119=document.createElement('div');
		els=me.__119__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud0c0\uc7851";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border-color : #000000;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__119.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub2e8\uce35\ud615 52m\xb2", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__119.ggUpdateText();
		el.appendChild(els);
		me.__119.ggIsActive=function() {
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
		me.__119.onclick=function (e) {
			if (
				(
					((me.ggUserdata.tags.indexOf("52") != -1))
				)
			) {
				player.openNext("{"+player.getStartNode()+"}","");
			}
		}
		me.__119.ggUpdatePosition=function (useTransition) {
		}
		me.__49.appendChild(me.__119);
		me.__48.appendChild(me.__49);
		me.__46.appendChild(me.__48);
		el=me.__47=document.createElement('div');
		el.ggId="\ub4dc\ub86d\ub2e4\uc6b4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(14% 69%, 84% 69%, 100% 100%, 0% 100%); background: linear-gradient(90deg, rgba(55,56,89,1) 0%, rgba(24,22,40,1) 0%, rgba(48,50,69,1) 82%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__47.ggIsActive=function() {
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
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA6JJREFUeF7tnVt22zAMROmdtStLu7JkZ82hU+rQ1MMkhcdAGn/m2BLM68EMoI88El9QJ/CAqobFJAIB+xEQCIGAnQBYOVQIIJBfYDXdupyskD8ppY9bnwLOl/8qLesfTk23ruRRgFAl/r+Dv7lb1aZOlfhB+Uop/c63r4FQJX5AMowMZTWpE4o9lEUdW0Dy39i6bKEs6tgDQpXYAXkaeX27vUmdKrGBsjr/PSBUiT6Ql1ZVbne0y/pMKXGtogPmxch7WlZ+D1WiAyNfdVMde6Zel0Eo8lB21dEDhDFYHsiuOnqBUCVyUFYxt7107wMqxuDzUA5bVU/Kopech1Bf4bBVjQJh6joHp0sdvR5SSskzSZ5N+Bo/gS51jAKhSsZB5E'+
			'90q2MGCGPwOJTe4PS88tCb/9fCGNwP5W3MnY297ecYg99DGWpVMymLMfg9hOGYK6UQGvwxnCl1zHpIXQpb1zaY7pgrqRCqZBvGsJHXl5lJWTT443Z16kxPfZgxeEVmulWdTVltJXzcOziR74lMQiH0kp/TPa0OiZTF2eTnBKZjrnTKosELqkNaIXdtXadirrZC8vXvNCyKtSrplHVXLxExcunBcCvB3WFFL64ODQ8pcO7wuFdcHZpArm7wKurQBnJlg5caqFftXu3CF95zicZci9h75WFRrVVpxt4WyJUSl4qRW8TeK0JRV4eFqddgok/w6uqwBhK5dakauUfLKveMqhLtNLowMbtR4Bhs0qosU1Zr8JEe95oYuWfLirZSMVWHtalHW9Gbq8MTSIQ9l7k6vIEgx2CzmOuxy9p6gIUcg11alWfKQvcSl1aFAgQtdbmq'+
			'w9tDyo8C6XGvqzpQgKCoxF0dSEAQYrD1Gmkz7EAUAbDncou5aLG3rcdjGwzRqpBSlncMdjdy7+Xi0aBobfBQ6kAz9RqUVeuCUgcyEIs9F4yRo7csqz0XUsJcmEAWZRCD4VoVaspqDV/jcS+ckUdpWVqJC1YdyKauNZtAqyMKEMk9F7Q6IgGRiMGQMRd9l3U0xZ8ZFuFbVZSUJeUl8K0qIpDZ1BVGHZE8pPyAZh73hlFHRCCjKgmljqhARmIw8mpoM8CEK3hgzxUi5kaOvW3tRzE4XKuKmrJ6Y3AoI4+0XDwaFPcMPqw6Ipt6DaptXWHVcRUg9Z4rpJFfqWWV71JUEjU1LkzCf4EqBmfveP6T+MivqwCJzOCldgIBQ0kgBAJ2AmDlUCEEAnYCYOVQIWBAvgH28qJkyH7gowAAAABJRU5ErkJggg==';
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
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 99;';
		hs+='bottom : -10.4%;';
		hs+='height : 31.7647%;';
		hs+='left : calc(50% - ((12% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 12%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
				((player.getViewerSize().width <= 560))
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
					me._image_2.ggParameter.sx = 0.8;
					me._image_2.ggParameter.sy = 0.8;
					me._image_2.style.transform=parameterToTransform(me._image_2.ggParameter);
					skin.updateSize(me._image_2);
				}
			}
		}
		me._image_2.logicBlock_scaling();
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me.__47.appendChild(me._image_2);
		me.__46.appendChild(me.__47);
		me._header.appendChild(me.__46);
		me.divSkin.appendChild(me._header);
		el=me._footer=document.createElement('div');
		el.ggId="footer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 7%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footer.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._footer.onclick=function (e) {
			player.setVariableValue('vis_footerdownmenu', true);
		}
		me._footer.ggUpdatePosition=function (useTransition) {
		}
		el=me._footerarrow=document.createElement('div');
		el.ggId="footer-arrow";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footerarrow.ggIsActive=function() {
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
		me._footerarrow.ggUpdatePosition=function (useTransition) {
		}
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1000;
		el.ggId="Timer 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -120%;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
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
				me._timer_1.style.transition='';
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
			player.setVariableValue('vis_down', !player.getVariableValue('vis_down'));
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._down=document.createElement('div');
		els=me._down__img=document.createElement('img');
		els.className='ggskin ggskin_down';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAydJREFUeF7t3FFyokAUhWHalZmlqAtJshB1KXFlkmpLUqZEoaG773/h+DJVM4iH83ExwITQ6IVqIKDSKEwjENhOIBCBwBqAxdGECATWACyOJkQgsAZgcTQhAoE1AIujCREIrAFYHE2IQGANwOJoQgQCawAWRxMiEFgDsDiaEIHAGoDF0YR4ADmfz9uY83q9bjebzWW3211guV3GGdPrvwk5Ho9fIYTPvq1t2/b7cDh8uWzCOHRKr38gp9Ppp2ma22S8egklXTa11xvIO8GeCJf9fv+RHm197xiD0bXS7ewhEaN7v1AG9q8UjG5VIYSPqSBxHUJ5gTIF476qS5jxZqH0gMztM4K0M4/umpR7gTMxbmuZOyH6TsmIEb8GcoGs+v'+
			'CVYzJigfEnrRDPHtu2jecgOV6rO3zlwvgDmXAeMgS3GpTcGPFKSNKZ+pDEw78vHiUnxuMpxL9rWaU+JAHSxaIle3q6/F7yw1y0XeAM/M0qn44kvfdDhNJfYY1eXt6gqvHhniamVh9v7xjWCkGHqdnD4C3cmmGIMLW3fxAkllQ7FAXGYrtHgawRxQLjdnExZW+0CpmSMceyltuZBLKGSbHESJ6Qbu+zDp1jCvrWQdiu5AlZKgoBY/KELA2FgjEbZAnfKSSMLCCeUWgY2UA8ohAxsoJ4QqFiZAfxgELGKAJCRqFjFAMhonjAKApCQvGCURyEgOIJowqIJYo3jGogFigeMaqC1ETxilEdpAaKZwwTkJIo3jHMQEqg3G8JvP0t4u62wYg/zf5v8uQbVCM2anCRzHv04OeNXMAMw3RCunJgKKYYCJACh6+Rg/C0mDkGBgSA'+
			'gsBAgRiiYDBwIAYoKAwkSEUUHAYWpAIKEgMNUhAFi4EHKYCCxnABkhEFj+EGJAOKCwxXIDNQ3GC4A5mA4grDJUgMPfKxhO4w3IIMoXh+eqrp/ZCpl2Uf3xcfL9U98Dn+vfeHPrsHyYFKWodASBqpvxYNy77IOJoQGKtABAJrABZHEyIQWAOwOJoQgcAagMXRhAgE1gAsjiZEILAGYHE0IQKBNQCLowkRCKwBWBxNiEBgDcDi/AJ2jwbyAUZLDwAAAABJRU5ErkJggg==';
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
		el.ggId="down";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._down.ggIsActive=function() {
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
		me._down.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_down') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._down.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._down.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._down.style.transition='left 1000ms linear 0ms, top 1000ms linear 0ms, width 0s, height 0s';
				if (me._down.ggCurrentLogicStatePosition == 0) {
					me._down.style.left = 'calc(50% - (100% / 2))';
					me._down.style.top='50px';
				}
				else {
					me._down.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me._down.style.top='0px';
				}
			}
		}
		me._down.logicBlock_position();
		me._down.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._down.ggCurrentLogicStateSize != newLogicStateSize) {
				me._down.ggCurrentLogicStateSize = newLogicStateSize;
				me._down.style.transition='left 1000ms linear 0ms, top 1000ms linear 0ms, width 0s, height 0s';
				if (me._down.ggCurrentLogicStateSize == 0) {
					me._down.style.width='80%';
					me._down.style.height='80%';
					me._down.style.left = 'calc(50% - (80% / 2))';
					skin.updateSize(me._down);
				}
				else {
					me._down.style.width='100%';
					me._down.style.height='100%';
					me._down.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me._down);
				}
			}
		}
		me._down.logicBlock_size();
		me._down.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_footerdownmenu') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._down.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._down.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._down.style.transition='left 1000ms linear 0ms, top 1000ms linear 0ms, width 0s, height 0s';
				if (me._down.ggCurrentLogicStateVisible == 0) {
					me._down.style.visibility="hidden";
					me._down.ggVisible=false;
				}
				else {
					me._down.style.visibility=(Number(me._down.style.opacity)>0||!me._down.style.opacity)?'inherit':'hidden';
					me._down.ggVisible=true;
				}
			}
		}
		me._down.logicBlock_visible();
		me._down.ggUpdatePosition=function (useTransition) {
		}
		me._timer_1.appendChild(me._down);
		me._footerarrow.appendChild(me._timer_1);
		me._footer.appendChild(me._footerarrow);
		me.divSkin.appendChild(me._footer);
		el=me.__7=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\uc2a4\ud0a8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -20.38%;';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((500px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__7.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__7.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 420)) && 
				((player.getVariableValue('vis_footerdownmenu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('vis_footerdownmenu') == true)) && 
				((player.getViewerSize().width <= 1500))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('vis_footerdownmenu') == true))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__7.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__7.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__7.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__7.ggCurrentLogicStatePosition == 0) {
					me.__7.style.left = 'calc(50% - (500px / 2) + (0px / 2) + 8%)';
					me.__7.style.bottom='5%';
				}
				else if (me.__7.ggCurrentLogicStatePosition == 1) {
					me.__7.style.left = 'calc(50% - (500px / 2) + (0px / 2) + 3%)';
					me.__7.style.bottom='5%';
				}
				else if (me.__7.ggCurrentLogicStatePosition == 2) {
					me.__7.style.left = 'calc(50% - (500px / 2))';
					me.__7.style.bottom='5%';
				}
				else {
					me.__7.style.left='calc(50% - ((500px + 0px) / 2) + 0%)';
					me.__7.style.bottom='-20.38%';
				}
			}
		}
		me.__7.logicBlock_position();
		me.__7.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1500))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__7.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__7.ggCurrentLogicStateSize = newLogicStateSize;
				me.__7.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__7.ggCurrentLogicStateSize == 0) {
					me.__7.style.width='430px';
					me.__7.style.height='80px';
					me.__7.style.left = 'calc(50% - (430px / 2))';
					skin.updateSize(me.__7);
				}
				else {
					me.__7.style.width='500px';
					me.__7.style.height='80px';
					me.__7.style.left = 'calc(50% - (500px / 2))';
					skin.updateSize(me.__7);
				}
			}
		}
		me.__7.logicBlock_size();
		me.__7.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 340))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__7.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__7.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__7.style.transition='left 1000ms ease 0ms, bottom 1000ms ease 0ms, width 0s, height 0s, transform 0s';
				if (me.__7.ggCurrentLogicStateScaling == 0) {
					me.__7.ggParameter.sx = 0.55;
					me.__7.ggParameter.sy = 0.55;
					me.__7.style.transform=parameterToTransform(me.__7.ggParameter);
					skin.updateSize(me.__7);
				}
				else {
					me.__7.ggParameter.sx = 0.75;
					me.__7.ggParameter.sy = 0.75;
					me.__7.style.transform=parameterToTransform(me.__7.ggParameter);
					skin.updateSize(me.__7);
				}
			}
		}
		me.__7.logicBlock_scaling();
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\uc2a4\ud0a8\ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(90deg, rgba(55,56,89,1) 0%, rgba(24,22,40,1) 0%, rgba(48,50,69,1) 82%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
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
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__43=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4\ubcf4\uae30";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 2%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__43.ggIsActive=function() {
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
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me.__50=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50.ggIsActive=function() {
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
		me.__50.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__50.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__50.ggCurrentLogicStateSize = newLogicStateSize;
				me.__50.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__50.ggCurrentLogicStateSize == 0) {
					me.__50.style.width='48px';
					me.__50.style.height='48px';
					me.__50.style.left = 'calc(50% - (48px / 2))';
					me.__50.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__50);
				}
				else {
					me.__50.style.width='60px';
					me.__50.style.height='60px';
					me.__50.style.left = 'calc(50% - (60px / 2))';
					me.__50.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__50);
				}
			}
		}
		me.__50.logicBlock_size();
		me.__50.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__50.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__50.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__50.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__50.ggCurrentLogicStateBackgroundColor == 0) {
					me.__50.style.backgroundColor="rgba(2,2,2,1)";
				}
				else {
					me.__50.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__50.logicBlock_backgroundcolor();
		me.__50.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_4', !player.getVariableValue('vis_buttonbg_4'));
		}
		me.__50.onmouseover=function (e) {
			me.elementMouseOver['_50']=true;
			me.__45.logicBlock_visible();
		}
		me.__50.onmouseout=function (e) {
			me.elementMouseOver['_50']=false;
			me.__45.logicBlock_visible();
		}
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		el=me.__45=document.createElement('div');
		els=me.__45__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud3c9\uba74\ub3c4\uc628\uc624\ud504";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='text-align:center;';
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
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__45.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ub3c4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__45.ggUpdateText();
		el.appendChild(els);
		me.__45.ggIsActive=function() {
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
		me.__45.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_50'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__45.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__45.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__45.style.transition='';
				if (me.__45.ggCurrentLogicStateVisible == 0) {
					me.__45.style.visibility=(Number(me.__45.style.opacity)>0||!me.__45.style.opacity)?'inherit':'hidden';
					me.__45.ggVisible=true;
				}
				else {
					me.__45.style.visibility="hidden";
					me.__45.ggVisible=false;
				}
			}
		}
		me.__45.logicBlock_visible();
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me.__45);
		el=me.__44=document.createElement('div');
		els=me.__44__img=document.createElement('img');
		els.className='ggskin ggskin__44';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA8SAAAPEgEhm/IzAAAE/klEQVR4nO3aW4hVVRzH8c+MVpZZMUEEXcC8VBKUFoZ2sbCop6gIK8LoQkQ9GV1okCQqEqOnCKIg6IZkNyiF6PJgQXShMNJKgyyie0llmZnm6WFbnKY9M2dmzj77zJ//F/7MsNh77d9a37332ouZnkajIYlLb90BkmpJwcFJwcFJwcFJwcFJwcFJwcFJwcFJwcHp2fNzGs7H71iNL+sKlLSfSXgGf2IrVuEazKgzVNI+VqExSL2FpZhbW7r6ORlLsKiFY2fjRlyKAyrMNCJ2Glxwc32OB3AeDqwjaIc4QDHG+/GZ/87BI0Oct3jAsb/gWVyPWdXFHZ7tWhPcXL/ieVyN6Z2P3Ham4SrFUrXV0GM/d5A+Ph3mvD'+
			'dxO+ZXNIZSehQDmjLGft7Dq/gI67B+jP1VzXGK1+nROAcnjeDcZbhzQNsk/ID9W+zjC7yEDdiomLvdI8gwIoa7Y0dTm7ACp2FiVcFHwEScirsUN+FYxnZLSf+T8dMY+vwKT+BKHNHGcaMawc31LZ7CJTi43eGHoA8X4Ul804Zx/FM3lVxrP2xp4zVeVHyszWnHRFQtuLm24xX0q+bD4xjcjJexraIxdEJwc23EcizEvqOZlE4KHljv416chQmjyN6LBbhHsfZ3InOnBTfXj4pt7cU4pNVJqlNwc32teJ32G/5OvRUrFWtXp3PWKbi5dmCt4ua+UrETKKVbBDfXmsHCKsTWma1bBJfV27gN85rDdaPgBmaWTOTULsjVzYKbax1md/Nfk44saWv7FiIwJ+Dpbha8s6RtV8dTjG8O72bBjRbbksHZ1c2Ck7GzOwUHJwUH'+
			'JwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHJwUHpxcT6g6RVEcv9qo7RFIdvdhQd4hxxt4lbT269EHpxWJ8U3eQccS2krY/sKPTQVqhFx9iKi7Hc/i11kTdTQPPlLT/hdc6nGXUHIh5uBSP4zvFwDpdp5dkm1dTlu/xGI4ZYt760I93aspYVluHyPsve+MM3IEPOhiubsEf426ciX1amagmZuAWvKR4I3a14I'+
			'EcjyVYjZ0Vhuu04L/wIm7A7NFMzCAchAuxEl9VmL9tgps5FJfhUXzZ5nCdEPytYhlajMPGOhktMAGn4E6sb/NYKhHcTI/idbYc77Yh3IKSa8xvQ7/rsAIL1b+1mYXrsQbbdbnggRylmMR+rB1FuLNL+lwwin7ewNI9Waa3e5BtpA9zcYViN7NFlwseyExci6fwQwvhZpT0MbWF835WbGWuw7FVDaYD7ItzcR82G53g2ra8k3ARHsSmkmBPD3HuwyXHf4KHcAmmVJa6XubgJryudcF/9NQS9f+ciAsUT9wG3K4IOBjLFF/zm/AC3qo4X7cxTbFcLVQ85X2DHPdbxxIllTFZ8XDcr3g4mpeqRd3yBCdjZ7JiC3bynt8346GeRmOoN2Ey3sn/6AhOCg5OCg5OCg5OCg5OCg5OCg5OCg5OCg7O30osxceEvq98AAAAAElF'+
			'TkSuQmCC';
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
		el.ggId="\ud3c9\uba74\ub3c4\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__44.ggIsActive=function() {
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
		me.__44.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__44.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__44.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__44.style.transition='';
				if (me.__44.ggCurrentLogicStateVisible == 0) {
					me.__44.style.visibility="hidden";
					me.__44.ggVisible=false;
				}
				else {
					me.__44.style.visibility=(Number(me.__44.style.opacity)>0||!me.__44.style.opacity)?'inherit':'hidden';
					me.__44.ggVisible=true;
				}
			}
		}
		me.__44.logicBlock_visible();
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me.__44);
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA8SAAAPEgEhm/IzAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODoyODoz'+
			'MSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MDcrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MDcrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmZiNDg1M2I3LTc0NTYtOTg0Mi05OGM4LTM0OTFkZDZkZmY4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmYjQ4NTNiNy03NDU2LTk4NDItOThjOC0zNDkxZGQ2ZGZmODYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYjQ4NTNiNy03NDU2LTk4NDItOThjOC0zNDkxZGQ2ZG'+
			'ZmODYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmZiNDg1M2I3LTc0NTYtOTg0Mi05OGM4LTM0OTFkZDZkZmY4NiIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODoyODozMSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj68+/gAAAWTSURBVHic7drbr1TlGcfxz2yQ'+
			'7Ko1hnjhOUUs9VwVgwdiQBtQ0RJsPaQmmqaJ/AdNGi+MaW+98NrECw8x8RBsbVWKiEoqKk1F4xERE7Vq1HgBaoWiLC/eIYzjnr1nmDUHHp9vMpk976z3Xb+1vut95l2zp1FVlSQuE6MOkAyWFBycFBycFBycFBycFBycFBycFBycFByc2c3n+ViF/+Hv+O+oAiX10qiqahL3YSV24QmsxzPYNrpoSR00qqp6ANd1eP9FZUY/ic1DSzVenI8L8REenGHbc3Bpc9vHsHOw0WamUVXVHvtL9XS8p8zuJ/Asdgwy2Ag5AkuxHFfiZy3v3Y3fd+h3I+5peb1TqYRPKdXwjVpTdkmjqqqvMdljvy+xAY8qst+pO9iQmY8lWKGI/ek0216BtVO0b8dJ0/R7Af/EOmw6sJi906iqaqfpD6gb/qNcrW9gC17tN9iAOUMpp7/AZT'+
			'ivh7634i9tbZP4DId3Ocb7iuzX8JZy7vb2kKFruinN3bCw+djH2/gr/oHn8U1N+zlQZuMCXI7f4NQ+xto9RdssvR3jibi55fVHeFop5+vxwQGna6OuGTwdn2Aj1iiLtc8HuK9W5ioLnmuU8nt0TeP+Ebe3tR2qSJlb0z7WKqKfxkv9DDQMwa3swr+Uz++/qX/hcQp+jWVYrJz4uhmG4Fa24hFF+CZ83UvnYQtu5xUl+Frlav22x/4TuFhZ7S7D2XWG68CwBbfyuVLG1yjn69OZOoxacCsfK6X8Fdxh+iv1TzhLKb3HDjzZ9xml4Fb+r6xvNuNN5dxtb9+orkVWHRyD65uPxbiqw3b343fDCjXGzFEu8CUtbZuVhe16Rf7Y/rPhSiyYon2elDsdi/Bn5bN6C84ZV8GUW4l2Thh6ioOXs/HQOAveM0XbqO+nDzaOH2fB'+
			'U/0iP3+l3xvfjLPgpH/2puDgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgpODgTGDWqEMkg2MCh4w6RDI4JvDaqEMcZMyZoq1hTCfKBG7Ex6MOchDx1RRtu7B72EG6YQKvYx5uwhp8MdJE402Fh6do/xbPDjlLV+xbRe/GvfgtTsBFuAH34dPRRBsrPlPOz2n4sMM2q3EL/j2sUN3QqKpqpm3mKMIvxS'+
			'qcOeBM+1iCjW1tF2LTkPb/Fh7Bk8199lKCf46r8Svl3B1ee7ru+KIbwe38Epco4S/H7LpTNRm24L1Y13w8gy01jXukMjmuUY7p2JrG7YYDEtzK0Yro5c3n4+pI1WQYgj9RZug6bNC5/NbFLFygTIxVOGPA++tbcCsNLFVkL8PCPsdb6ocLl4vwXJ/jvmz/TN2IPX2O1w+nKce5QpkgkzWPX6vgdk5SVueLcJkyI3thuTK7WlmilM9e2ITH8QLewzs99h8Wc3GyIn2lcqxz+xxzoILbWWD/Z/clOKqL7be1tc3DuzP024H1eEq5GN7sNeiY8BNF8gpcpRx7r3w5TMGtTCqhlyklakHb+w/j2g5978If2tq2KTI34DEx7+XPVRZrK3Fxl312j0pwOwuV24pTla9Ob1O+VOjErcpqfiseVcrvj4n5yuzedyfTqZSPbAYn'+
			'9XGY/XcxS3F6s30HVqfgOByGxTi/+fe7uDMFByd/0RGcFBycFBycFBycFBycFBycFBycFBycFByc7wDHNR/ErjqpsQAAAABJRU5ErkJggg==';
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
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
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
			return player.getCurrentNode();
		}
		me._image_6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_4') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_6.style.transition='';
				if (me._image_6.ggCurrentLogicStateVisible == 0) {
					me._image_6.style.visibility=(Number(me._image_6.style.opacity)>0||!me._image_6.style.opacity)?'inherit':'hidden';
					me._image_6.ggVisible=true;
				}
				else {
					me._image_6.style.visibility="hidden";
					me._image_6.ggVisible=false;
				}
			}
		}
		me._image_6.logicBlock_visible();
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me._image_6);
		me.__43.appendChild(me.__50);
		me.__9.appendChild(me.__43);
		el=me.__39=document.createElement('div');
		el.ggId="\uc601\uc0c1\ubcf4\uae30";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 16%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
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
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me.__118=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__118.ggIsActive=function() {
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
		me.__118.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__118.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__118.ggCurrentLogicStateSize = newLogicStateSize;
				me.__118.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__118.ggCurrentLogicStateSize == 0) {
					me.__118.style.width='48px';
					me.__118.style.height='48px';
					me.__118.style.left = 'calc(50% - (48px / 2))';
					me.__118.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__118);
				}
				else {
					me.__118.style.width='60px';
					me.__118.style.height='60px';
					me.__118.style.left = 'calc(50% - (60px / 2))';
					me.__118.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__118);
				}
			}
		}
		me.__118.logicBlock_size();
		me.__118.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__118.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__118.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__118.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__118.ggCurrentLogicStateBackgroundColor == 0) {
					me.__118.style.backgroundColor="rgba(2,2,2,1)";
				}
				else {
					me.__118.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__118.logicBlock_backgroundcolor();
		me.__118.onclick=function (e) {
			player.setVariableValue('vis_buttonbg', !player.getVariableValue('vis_buttonbg'));
		}
		me.__118.onmouseover=function (e) {
			me.elementMouseOver['_118']=true;
			me.__42.logicBlock_visible();
		}
		me.__118.onmouseout=function (e) {
			me.elementMouseOver['_118']=false;
			me.__42.logicBlock_visible();
		}
		me.__118.ggUpdatePosition=function (useTransition) {
		}
		el=me.__42=document.createElement('div');
		els=me.__42__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc601\uc0c1\uc628\uc624\ud504";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__42.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc601\uc0c1\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__42.ggUpdateText();
		el.appendChild(els);
		me.__42.ggIsActive=function() {
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
		me.__42.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_118'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__42.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__42.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__42.style.transition='';
				if (me.__42.ggCurrentLogicStateVisible == 0) {
					me.__42.style.visibility=(Number(me.__42.style.opacity)>0||!me.__42.style.opacity)?'inherit':'hidden';
					me.__42.ggVisible=true;
				}
				else {
					me.__42.style.visibility="hidden";
					me.__42.ggVisible=false;
				}
			}
		}
		me.__42.logicBlock_visible();
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me.__118.appendChild(me.__42);
		el=me.__41=document.createElement('div');
		els=me.__41__img=document.createElement('img');
		els.className='ggskin ggskin__41';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABLpJREFUeF7tnWt2nDAMhcnK2q6szcqarqw94kRTD7FetsfIcOdPTwMYcT9LFn7xtuGXSoG3VNbAmA1AklUCAAGQZAokMwceAiDJFEhmDjwEQJIpkMwceAiAJFMgmTnwkJsA+X54zuP/+fC3Rj2k8qTiPpz3+WOcVyvHW7bLhFYP+fVZOgsaFchl3IInlXDet20Lw4oAIQg/FxTpbJMJCsGhnwnIAwQgxiH9YUGxgADGOBhcEnkJgan+NCC/t23L3DaY7v/5xBmfQYQiAWmFcRSplrVoQnpFHlFvLVC141pWaJV3tLkKpQbEE6bKRmqmiCNAvLoMBkMJkAWJdOSMdbfrCIQKIO+Qfl8KePXTLV4+6WmBedL0CEQLVYDRXjusqP'+
			'PgUALRvAMw2mHwlRqUh74lEMk71DSt385blSBBqQL5K0hjvszcStK+h9W8ZHcO9hApXME7+gDUrpYq/u4lDEQiByDjgahhi4FI7QfC1XggajRiIJIbWX1d4829R4k1vfdoRIKj/ZhfCUQHAJD5MOiOUhPxpgHBy+DrYEkN+x6yzJeV19l125JFzTUgGTKs0nAeCr1C7/KSQLSOzgyVpce9pUTqnTwk4zuINQxAYqzsMcsBsbqry9q5IpjlgLQMIa8ERnz3yxqyWoCw16yQrqtAMnab9ABZBUy1+4Q8ZCUgVPtp5oc1eYChZA5jlwDC6a5n8kD2hv9SQFjslcFcEohnAkHtBS7DwNulgbDo0WTgzIzsFkAITDSM0TVndMXcBkhr+zLbW0JAzo6xI/vXIh4zc8i6+rohvYdcCUik4Z8ZugDEsSQPQIRBhZEhi6f7e9ZH'+
			'pgVSzmrsGYhpvXYUkEg3foZGfZ9KulJflrcGR0BQpZkNg+4ZakNW9ZAVQHDUuDSQFhAkzNNystb42njdJYFEQVA6TwtRzwRxSQ8hQSPjIme1E5rzXMJDuIZ7UtjsI4ehrpOsjXokXJ+ROUXsuw2Q7CC4R7q2/PxjtfcQrQauAKLsiRaBiFPjI/43+NxI9sS7SmTInLwyNM3LmtkVfXwQz1TSjJlTL5C0c3v5pU3KplYKTzVI6lRScfGItdmWtzp0nMdxlh5gxdAkPfqyQDpYpr4UQJLhwZI2AEmmQDJzxAE4LIs+h5QKhEzKOGp4jlRz7gogc3R23UV76d03DqDfqEkFLotufpJr8xlsHjCvlqg791n7Za3eRTFPZv+d1GhUdiCiYfeL2nqm1n7sU5xKIAhbrTL7rzM3GvUAWbmb2y/V68/UxngeEwCPYx5S2AKUPm'+
			'BaqHpaaXAEYo3U8VdjrrAjT5/E/qstTZ+mx9ZGBa0CyBSejsNgAOg/IPKGckN+Dd2XdTjSMK0Wuqy6IcE5frrCgmgdt+zwHNc2IKgdO36uwruBQc0W9+cq6GLvmLbnoXFOXYHqTH5rIkN0mTHEtxVQt/uwgFDxnjbFNgNnuDJVDxCWMrKaFfI/K+DugooAKW/BjRn9WzZ0PY3c6hDLJIQTGPpbKDlpBWKJVwNjwfJ+htUqh9Nyy0bpuOdDZiGRI4a8CkjEBpxbKAAgyaoDgABIMgWSmQMPAZBkCiQzBx4CIMkUSGYOPARAkimQzBx4CIAkUyCZOf8A56lgm63gz7kAAAAASUVORK5CYII=';
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
		el.ggId="\uc601\uc0c1\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
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
		me.__41.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__41.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__41.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__41.style.transition='';
				if (me.__41.ggCurrentLogicStateVisible == 0) {
					me.__41.style.visibility="hidden";
					me.__41.ggVisible=false;
				}
				else {
					me.__41.style.visibility=(Number(me.__41.style.opacity)>0||!me.__41.style.opacity)?'inherit':'hidden';
					me.__41.ggVisible=true;
				}
			}
		}
		me.__41.logicBlock_visible();
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		me.__118.appendChild(me.__41);
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABQ1JREFUeF7tnVt23CAMhu2VtVlZm5U1WZl7RGAO9qALNsY/tvLUnvEwQp91AQTMk/9BaWCGksaFmRwI2EvgQBwImAbAxHELcSBgGgATxy3EgYBpAEwctxAHAqYBMHHcQp4AZFmW35t+bv+fPv61Ux9ce1xzX8bf+Vaee2tnnmdr2yYRdlnIsix/Y+tJobUKMgk34EM5nM89sMxAIoQ/AyrpapEJ0icJYQGkAnEQTXl+aFBEIA6jKYzU2Nc8zx9cyyyQZVn+TdOEHBuswRSxDyyUIpADMLZKKmUtrCI1c275vhYywW3zJZBSVlgLvgjlDYjRTYUgNU0TNWp9U1vqE7atDDQlQBokysRSxhr6tAISGyNXxf29NQCrGQDBoj41MC'+
			'udboFIccNh7ISseZ15nl8cXv9QrMNh7ISRvqZAeek3B8JZh5imHZTzUV8XoBSBLIx21MHMo7R6oLOSlSS3FSxEcFduHQcAlL66LAv34gcrSUAo9SrNUzmQ9kA4Xa+AcPHD3VV7IDQ2KQ0twsufLKRoRnk61liuRzfHuK0fIB4/+r8bXBwhA3Ag/XlQElUMERoQHwyeBEtIf4PLEqP+STI9ullR5yKti2dyN7KFpdA7zC4PCURZkxk6HRcSqU9yWXBjEMMyQFiLGdViRgTCxbVS7BkOzIhA9qznDwNGHPuBuqw9QJL1wKfrGhC4aZMDRRa5S4MGw06fSMP4qwYLAhAqrqDKD614IIkO68buAiSku8bigfx9ggNzKyDZOjVZilbVAQnmlkCMBQTFVFkq5+zhqm8NJANTm51dFvgfASSrD6hxY/S17lMxjwFyIL50tZZa'+
			'IJcWN7QcrNZkZD2XrNnhhrS+2yO4MaUyzSc8tXLOKEc31+VA+IW4/J1wIGdbSLZB1bI/EhYIbVBU9x+e5dJaxRCjm7pkUrLWZQ0NpBIEAemaYcX0vDypO9jkouhSRgCRpeX3BbIHBClmu53sLBfMxMn7AdkBgmZ9v68EcUsLiSBq1kUuiROSxd0lqIc3nNk6wfW/e8C2uL7aqRPULMvS10vS2BrBhCzri+qy7ramDmkRObCnFDnAg9jMRJc37Uil8bVm2Or5yuwpHX20OhGhlSxntKNZCLtX4QxhLG0aS0nhMidL32L84La1Ydb2RqGlctJh3BMzKBSBcB3vNvPJvVnRndLH1IHhXJPQrzGBWF3AaM9pxdawFjKaoq3y+pY2q6Y6PedAOina+jPiApzvU7eqsd1zIhBhXuXS+ax23cdryYEAMZEGveHggGghzeuggH'+
			'QAJYoWIrTjmYYeEUORiMII7mp1GpCf5tCJnlbilJ+5CLcu0klH3X5GmTQNU1U5ELeSk9Fo7op+3gJk2Gnuk/Vb1byyxvOayN0epMwd0OhQqtS/flhxVautH1sg2pEWNAXu571XwDGsfq6WOfYexp/KccJB/Hc4MqlCx+Kj0RrSPnqt4v5tYxR3XYXkujTZudsStldXiLcq9ICsXFlhua7CeoBBSWe26yriyJ1b0dJg+Od2DRRXZLUrj2q3GdvFee6T4qkS6qYcQ1B6rmrre65ORalA0m/W7Gatl/P231BBJA2YgeQqy4IhxZr8XqYjQW50KnmSkhKY6iHCLiCa5pjsRYNlvYZVa4fEO3IvlnqR2ZkZ4ClANGD+Oa8BBwL2djgQBwKmATBx3EIcCJgGwMRxC3EgYBoAE8ctxIGAaQBMHLcQBwKmATBx/gNCBJRB0iAR'+
			'hwAAAABJRU5ErkJggg==';
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
		el.ggId="Image 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8.ggIsActive=function() {
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
		me._image_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_8.style.transition='';
				if (me._image_8.ggCurrentLogicStateVisible == 0) {
					me._image_8.style.visibility=(Number(me._image_8.style.opacity)>0||!me._image_8.style.opacity)?'inherit':'hidden';
					me._image_8.ggVisible=true;
				}
				else {
					me._image_8.style.visibility="hidden";
					me._image_8.ggVisible=false;
				}
			}
		}
		me._image_8.logicBlock_visible();
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		me.__118.appendChild(me._image_8);
		me.__39.appendChild(me.__118);
		me.__9.appendChild(me.__39);
		el=me.__23=document.createElement('div');
		el.ggId="\uac00\uad6c\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 30%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
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
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me.__onoff_6=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uac70\uc2e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_6.ggIsActive=function() {
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
		me.__onoff_6.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_6.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_6.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_6.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_6.ggCurrentLogicStateSize == 0) {
					me.__onoff_6.style.width='48px';
					me.__onoff_6.style.height='48px';
					me.__onoff_6.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_6.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_6);
				}
				else {
					me.__onoff_6.style.width='60px';
					me.__onoff_6.style.height='60px';
					me.__onoff_6.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_6.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_6);
				}
			}
		}
		me.__onoff_6.logicBlock_size();
		me.__onoff_6.logicBlock_visible = function() {
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
			if (me.__onoff_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_6.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_6.ggCurrentLogicStateVisible == 0) {
					me.__onoff_6.style.visibility=(Number(me.__onoff_6.style.opacity)>0||!me.__onoff_6.style.opacity)?'inherit':'hidden';
					me.__onoff_6.ggVisible=true;
				}
				else {
					me.__onoff_6.style.visibility="hidden";
					me.__onoff_6.ggVisible=false;
				}
			}
		}
		me.__onoff_6.logicBlock_visible();
		me.__onoff_6.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_6.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_6.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_6.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_6.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_6.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__onoff_6.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__onoff_6.logicBlock_backgroundcolor();
		me.__onoff_6.onmouseover=function (e) {
			me.elementMouseOver['_onoff_6']=true;
			me.__38.logicBlock_visible();
			me.__37.logicBlock_visible();
		}
		me.__onoff_6.onmouseout=function (e) {
			me.elementMouseOver['_onoff_6']=false;
			me.__38.logicBlock_visible();
			me.__37.logicBlock_visible();
		}
		me.__onoff_6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_6=document.createElement('div');
		els=me.__off_6__img=document.createElement('img');
		els.className='ggskin ggskin__off_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uac70\uc2e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_6.ggIsActive=function() {
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
		me.__off_6.logicBlock_visible = function() {
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
			if (me.__off_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_6.style.transition='';
				if (me.__off_6.ggCurrentLogicStateVisible == 0) {
					me.__off_6.style.visibility=(Number(me.__off_6.style.opacity)>0||!me.__off_6.style.opacity)?'inherit':'hidden';
					me.__off_6.ggVisible=true;
				}
				else {
					me.__off_6.style.visibility="hidden";
					me.__off_6.ggVisible=false;
				}
			}
		}
		me.__off_6.logicBlock_visible();
		me.__off_6.onclick=function (e) {
			player.openNext("{node14}","$(cur)");
			me.__off_6.style.transition='none';
			me.__off_6.style.visibility='hidden';
			me.__off_6.ggVisible=false;
			me.__on_6.style.transition='none';
			me.__on_6.style.visibility=(Number(me.__on_6.style.opacity)>0||!me.__on_6.style.opacity)?'inherit':'hidden';
			me.__on_6.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_6.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_6.appendChild(me.__off_6);
		el=me.__on_6=document.createElement('div');
		els=me.__on_6__img=document.createElement('img');
		els.className='ggskin ggskin__on_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uac70\uc2e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_6.ggIsActive=function() {
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
		me.__on_6.logicBlock_visible = function() {
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
			if (me.__on_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_6.style.transition='';
				if (me.__on_6.ggCurrentLogicStateVisible == 0) {
					me.__on_6.style.visibility=(Number(me.__on_6.style.opacity)>0||!me.__on_6.style.opacity)?'inherit':'hidden';
					me.__on_6.ggVisible=true;
				}
				else {
					me.__on_6.style.visibility="hidden";
					me.__on_6.ggVisible=false;
				}
			}
		}
		me.__on_6.logicBlock_visible();
		me.__on_6.onclick=function (e) {
			player.openNext("{node1}","$(cur)");
			me.__on_6.style.transition='none';
			me.__on_6.style.visibility='hidden';
			me.__on_6.ggVisible=false;
			me.__off_6.style.transition='none';
			me.__off_6.style.visibility=(Number(me.__off_6.style.opacity)>0||!me.__off_6.style.opacity)?'inherit':'hidden';
			me.__off_6.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_6.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_6.appendChild(me.__on_6);
		el=me.__38=document.createElement('div');
		els=me.__38__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac70\uc2e4\uc628";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__38.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__38.ggUpdateText();
		el.appendChild(els);
		me.__38.ggIsActive=function() {
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
		me.__38.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_6'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__38.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__38.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__38.style.transition='';
				if (me.__38.ggCurrentLogicStateVisible == 0) {
					me.__38.style.visibility=(Number(me.__38.style.opacity)>0||!me.__38.style.opacity)?'inherit':'hidden';
					me.__38.ggVisible=true;
				}
				else {
					me.__38.style.visibility="hidden";
					me.__38.ggVisible=false;
				}
			}
		}
		me.__38.logicBlock_visible();
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_6.appendChild(me.__38);
		el=me.__37=document.createElement('div');
		els=me.__37__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac70\uc2e4\uc624\ud504";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__37.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c OFF\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__37.ggUpdateText();
		el.appendChild(els);
		me.__37.ggIsActive=function() {
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
		me.__37.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_6'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__37.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__37.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__37.style.transition='';
				if (me.__37.ggCurrentLogicStateVisible == 0) {
					me.__37.style.visibility=(Number(me.__37.style.opacity)>0||!me.__37.style.opacity)?'inherit':'hidden';
					me.__37.ggVisible=true;
				}
				else {
					me.__37.style.visibility="hidden";
					me.__37.ggVisible=false;
				}
			}
		}
		me.__37.logicBlock_visible();
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_6.appendChild(me.__37);
		me.__23.appendChild(me.__onoff_6);
		el=me.__onoff_5=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \ubcf5\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_5.ggIsActive=function() {
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
		me.__onoff_5.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_5.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_5.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_5.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_5.ggCurrentLogicStateSize == 0) {
					me.__onoff_5.style.width='48px';
					me.__onoff_5.style.height='48px';
					me.__onoff_5.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_5.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_5);
				}
				else {
					me.__onoff_5.style.width='60px';
					me.__onoff_5.style.height='60px';
					me.__onoff_5.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_5.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_5);
				}
			}
		}
		me.__onoff_5.logicBlock_size();
		me.__onoff_5.logicBlock_visible = function() {
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
			if (me.__onoff_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_5.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_5.ggCurrentLogicStateVisible == 0) {
					me.__onoff_5.style.visibility=(Number(me.__onoff_5.style.opacity)>0||!me.__onoff_5.style.opacity)?'inherit':'hidden';
					me.__onoff_5.ggVisible=true;
				}
				else {
					me.__onoff_5.style.visibility="hidden";
					me.__onoff_5.ggVisible=false;
				}
			}
		}
		me.__onoff_5.logicBlock_visible();
		me.__onoff_5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_5.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_5.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_5.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__onoff_5.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__onoff_5.logicBlock_backgroundcolor();
		me.__onoff_5.onmouseover=function (e) {
			me.elementMouseOver['_onoff_5']=true;
			me.__36.logicBlock_visible();
			me.__35.logicBlock_visible();
		}
		me.__onoff_5.onmouseout=function (e) {
			me.elementMouseOver['_onoff_5']=false;
			me.__36.logicBlock_visible();
			me.__35.logicBlock_visible();
		}
		me.__onoff_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_5=document.createElement('div');
		els=me.__off_5__img=document.createElement('img');
		els.className='ggskin ggskin__off_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \ubcf5\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_5.ggIsActive=function() {
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
		me.__off_5.logicBlock_visible = function() {
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
			if (me.__off_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_5.style.transition='';
				if (me.__off_5.ggCurrentLogicStateVisible == 0) {
					me.__off_5.style.visibility=(Number(me.__off_5.style.opacity)>0||!me.__off_5.style.opacity)?'inherit':'hidden';
					me.__off_5.ggVisible=true;
				}
				else {
					me.__off_5.style.visibility="hidden";
					me.__off_5.ggVisible=false;
				}
			}
		}
		me.__off_5.logicBlock_visible();
		me.__off_5.onclick=function (e) {
			player.openNext("{node17}","$(cur)");
			me.__off_5.style.transition='none';
			me.__off_5.style.visibility='hidden';
			me.__off_5.ggVisible=false;
			me.__on_5.style.transition='none';
			me.__on_5.style.visibility=(Number(me.__on_5.style.opacity)>0||!me.__on_5.style.opacity)?'inherit':'hidden';
			me.__on_5.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_5.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_5.appendChild(me.__off_5);
		el=me.__on_5=document.createElement('div');
		els=me.__on_5__img=document.createElement('img');
		els.className='ggskin ggskin__on_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \ubcf5\ub3c4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_5.ggIsActive=function() {
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
		me.__on_5.logicBlock_visible = function() {
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
			if (me.__on_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_5.style.transition='';
				if (me.__on_5.ggCurrentLogicStateVisible == 0) {
					me.__on_5.style.visibility=(Number(me.__on_5.style.opacity)>0||!me.__on_5.style.opacity)?'inherit':'hidden';
					me.__on_5.ggVisible=true;
				}
				else {
					me.__on_5.style.visibility="hidden";
					me.__on_5.ggVisible=false;
				}
			}
		}
		me.__on_5.logicBlock_visible();
		me.__on_5.onclick=function (e) {
			player.openNext("{node4}","$(cur)");
			me.__on_5.style.transition='none';
			me.__on_5.style.visibility='hidden';
			me.__on_5.ggVisible=false;
			me.__off_5.style.transition='none';
			me.__off_5.style.visibility=(Number(me.__off_5.style.opacity)>0||!me.__off_5.style.opacity)?'inherit':'hidden';
			me.__off_5.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_5.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_5.appendChild(me.__on_5);
		el=me.__36=document.createElement('div');
		els=me.__36__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\ub3c4 \uc628";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__36.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__36.ggUpdateText();
		el.appendChild(els);
		me.__36.ggIsActive=function() {
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
		me.__36.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_5'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__36.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__36.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__36.style.transition='';
				if (me.__36.ggCurrentLogicStateVisible == 0) {
					me.__36.style.visibility=(Number(me.__36.style.opacity)>0||!me.__36.style.opacity)?'inherit':'hidden';
					me.__36.ggVisible=true;
				}
				else {
					me.__36.style.visibility="hidden";
					me.__36.ggVisible=false;
				}
			}
		}
		me.__36.logicBlock_visible();
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_5.appendChild(me.__36);
		el=me.__35=document.createElement('div');
		els=me.__35__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\ub3c4 \uc624\ud504";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__35.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c OFF\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__35.ggUpdateText();
		el.appendChild(els);
		me.__35.ggIsActive=function() {
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
		me.__35.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_5'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__35.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__35.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__35.style.transition='';
				if (me.__35.ggCurrentLogicStateVisible == 0) {
					me.__35.style.visibility=(Number(me.__35.style.opacity)>0||!me.__35.style.opacity)?'inherit':'hidden';
					me.__35.ggVisible=true;
				}
				else {
					me.__35.style.visibility="hidden";
					me.__35.ggVisible=false;
				}
			}
		}
		me.__35.logicBlock_visible();
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_5.appendChild(me.__35);
		me.__23.appendChild(me.__onoff_5);
		el=me.__onoff_4=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uc8fc\ubc29";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_4.ggIsActive=function() {
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
		me.__onoff_4.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_4.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_4.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_4.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_4.ggCurrentLogicStateSize == 0) {
					me.__onoff_4.style.width='48px';
					me.__onoff_4.style.height='48px';
					me.__onoff_4.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_4.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_4);
				}
				else {
					me.__onoff_4.style.width='60px';
					me.__onoff_4.style.height='60px';
					me.__onoff_4.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_4.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_4);
				}
			}
		}
		me.__onoff_4.logicBlock_size();
		me.__onoff_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\uc8fc\ubc29"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_4.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_4.ggCurrentLogicStateVisible == 0) {
					me.__onoff_4.style.visibility=(Number(me.__onoff_4.style.opacity)>0||!me.__onoff_4.style.opacity)?'inherit':'hidden';
					me.__onoff_4.ggVisible=true;
				}
				else {
					me.__onoff_4.style.visibility="hidden";
					me.__onoff_4.ggVisible=false;
				}
			}
		}
		me.__onoff_4.logicBlock_visible();
		me.__onoff_4.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_4.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_4.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_4.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__onoff_4.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__onoff_4.logicBlock_backgroundcolor();
		me.__onoff_4.onmouseover=function (e) {
			me.elementMouseOver['_onoff_4']=true;
			me.__34.logicBlock_visible();
			me.__33.logicBlock_visible();
		}
		me.__onoff_4.onmouseout=function (e) {
			me.elementMouseOver['_onoff_4']=false;
			me.__34.logicBlock_visible();
			me.__33.logicBlock_visible();
		}
		me.__onoff_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_4=document.createElement('div');
		els=me.__off_4__img=document.createElement('img');
		els.className='ggskin ggskin__off_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uc8fc\ubc29";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_4.ggIsActive=function() {
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
		me.__off_4.logicBlock_visible = function() {
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
			if (me.__off_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_4.style.transition='';
				if (me.__off_4.ggCurrentLogicStateVisible == 0) {
					me.__off_4.style.visibility=(Number(me.__off_4.style.opacity)>0||!me.__off_4.style.opacity)?'inherit':'hidden';
					me.__off_4.ggVisible=true;
				}
				else {
					me.__off_4.style.visibility="hidden";
					me.__off_4.ggVisible=false;
				}
			}
		}
		me.__off_4.logicBlock_visible();
		me.__off_4.onclick=function (e) {
			player.openNext("{node21}","$(cur)");
			me.__off_4.style.transition='none';
			me.__off_4.style.visibility='hidden';
			me.__off_4.ggVisible=false;
			me.__on_4.style.transition='none';
			me.__on_4.style.visibility=(Number(me.__on_4.style.opacity)>0||!me.__on_4.style.opacity)?'inherit':'hidden';
			me.__on_4.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_4.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_4.appendChild(me.__off_4);
		el=me.__on_4=document.createElement('div');
		els=me.__on_4__img=document.createElement('img');
		els.className='ggskin ggskin__on_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uc8fc\ubc29";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_4.ggIsActive=function() {
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
		me.__on_4.logicBlock_visible = function() {
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
			if (me.__on_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_4.style.transition='';
				if (me.__on_4.ggCurrentLogicStateVisible == 0) {
					me.__on_4.style.visibility=(Number(me.__on_4.style.opacity)>0||!me.__on_4.style.opacity)?'inherit':'hidden';
					me.__on_4.ggVisible=true;
				}
				else {
					me.__on_4.style.visibility="hidden";
					me.__on_4.ggVisible=false;
				}
			}
		}
		me.__on_4.logicBlock_visible();
		me.__on_4.onclick=function (e) {
			player.openNext("{node8}","$(cur)");
			me.__on_4.style.transition='none';
			me.__on_4.style.visibility='hidden';
			me.__on_4.ggVisible=false;
			me.__off_4.style.transition='none';
			me.__off_4.style.visibility=(Number(me.__off_4.style.opacity)>0||!me.__off_4.style.opacity)?'inherit':'hidden';
			me.__off_4.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_4.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_4.appendChild(me.__on_4);
		el=me.__34=document.createElement('div');
		els=me.__34__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\ubc29 \uc628";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__34.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__34.ggUpdateText();
		el.appendChild(els);
		me.__34.ggIsActive=function() {
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
		me.__34.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_4'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__34.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__34.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__34.style.transition='';
				if (me.__34.ggCurrentLogicStateVisible == 0) {
					me.__34.style.visibility=(Number(me.__34.style.opacity)>0||!me.__34.style.opacity)?'inherit':'hidden';
					me.__34.ggVisible=true;
				}
				else {
					me.__34.style.visibility="hidden";
					me.__34.ggVisible=false;
				}
			}
		}
		me.__34.logicBlock_visible();
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_4.appendChild(me.__34);
		el=me.__33=document.createElement('div');
		els=me.__33__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\ubc29 \uc624\ud504";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__33.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c OFF\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__33.ggUpdateText();
		el.appendChild(els);
		me.__33.ggIsActive=function() {
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
		me.__33.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_4'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__33.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__33.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__33.style.transition='';
				if (me.__33.ggCurrentLogicStateVisible == 0) {
					me.__33.style.visibility=(Number(me.__33.style.opacity)>0||!me.__33.style.opacity)?'inherit':'hidden';
					me.__33.ggVisible=true;
				}
				else {
					me.__33.style.visibility="hidden";
					me.__33.ggVisible=false;
				}
			}
		}
		me.__33.logicBlock_visible();
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_4.appendChild(me.__33);
		me.__23.appendChild(me.__onoff_4);
		el=me.__onoff_10=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uce68\uc2e41";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_10.ggIsActive=function() {
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
		me.__onoff_10.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_10.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_10.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_10.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_10.ggCurrentLogicStateSize == 0) {
					me.__onoff_10.style.width='48px';
					me.__onoff_10.style.height='48px';
					me.__onoff_10.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_10.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_10);
				}
				else {
					me.__onoff_10.style.width='60px';
					me.__onoff_10.style.height='60px';
					me.__onoff_10.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_10.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_10);
				}
			}
		}
		me.__onoff_10.logicBlock_size();
		me.__onoff_10.logicBlock_visible = function() {
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
			if (me.__onoff_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_10.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_10.ggCurrentLogicStateVisible == 0) {
					me.__onoff_10.style.visibility=(Number(me.__onoff_10.style.opacity)>0||!me.__onoff_10.style.opacity)?'inherit':'hidden';
					me.__onoff_10.ggVisible=true;
				}
				else {
					me.__onoff_10.style.visibility="hidden";
					me.__onoff_10.ggVisible=false;
				}
			}
		}
		me.__onoff_10.logicBlock_visible();
		me.__onoff_10.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_10.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_10.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_10.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_10.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_10.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__onoff_10.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__onoff_10.logicBlock_backgroundcolor();
		me.__onoff_10.onmouseover=function (e) {
			me.elementMouseOver['_onoff_10']=true;
			me.__117.logicBlock_visible();
			me.__116.logicBlock_visible();
		}
		me.__onoff_10.onmouseout=function (e) {
			me.elementMouseOver['_onoff_10']=false;
			me.__117.logicBlock_visible();
			me.__116.logicBlock_visible();
		}
		me.__onoff_10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_3=document.createElement('div');
		els=me.__off_3__img=document.createElement('img');
		els.className='ggskin ggskin__off_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uce68\uc2e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_3.ggIsActive=function() {
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
		me.__off_3.logicBlock_visible = function() {
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
			if (me.__off_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_3.style.transition='';
				if (me.__off_3.ggCurrentLogicStateVisible == 0) {
					me.__off_3.style.visibility=(Number(me.__off_3.style.opacity)>0||!me.__off_3.style.opacity)?'inherit':'hidden';
					me.__off_3.ggVisible=true;
				}
				else {
					me.__off_3.style.visibility="hidden";
					me.__off_3.ggVisible=false;
				}
			}
		}
		me.__off_3.logicBlock_visible();
		me.__off_3.onclick=function (e) {
			player.openNext("{node23}","$(cur)");
			me.__off_3.style.transition='none';
			me.__off_3.style.visibility='hidden';
			me.__off_3.ggVisible=false;
			me.__on_3.style.transition='none';
			me.__on_3.style.visibility=(Number(me.__on_3.style.opacity)>0||!me.__on_3.style.opacity)?'inherit':'hidden';
			me.__on_3.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_3.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_10.appendChild(me.__off_3);
		el=me.__on_3=document.createElement('div');
		els=me.__on_3__img=document.createElement('img');
		els.className='ggskin ggskin__on_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uce68\uc2e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_3.ggIsActive=function() {
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
		me.__on_3.logicBlock_visible = function() {
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
			if (me.__on_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_3.style.transition='';
				if (me.__on_3.ggCurrentLogicStateVisible == 0) {
					me.__on_3.style.visibility=(Number(me.__on_3.style.opacity)>0||!me.__on_3.style.opacity)?'inherit':'hidden';
					me.__on_3.ggVisible=true;
				}
				else {
					me.__on_3.style.visibility="hidden";
					me.__on_3.ggVisible=false;
				}
			}
		}
		me.__on_3.logicBlock_visible();
		me.__on_3.onclick=function (e) {
			player.openNext("{node10}","$(cur)");
			me.__on_3.style.transition='none';
			me.__on_3.style.visibility='hidden';
			me.__on_3.ggVisible=false;
			me.__off_3.style.transition='none';
			me.__off_3.style.visibility=(Number(me.__off_3.style.opacity)>0||!me.__off_3.style.opacity)?'inherit':'hidden';
			me.__off_3.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_3.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_10.appendChild(me.__on_3);
		el=me.__117=document.createElement('div');
		els=me.__117__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e41\uc628";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__117.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__117.ggUpdateText();
		el.appendChild(els);
		me.__117.ggIsActive=function() {
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
		me.__117.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_10'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__117.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__117.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__117.style.transition='';
				if (me.__117.ggCurrentLogicStateVisible == 0) {
					me.__117.style.visibility=(Number(me.__117.style.opacity)>0||!me.__117.style.opacity)?'inherit':'hidden';
					me.__117.ggVisible=true;
				}
				else {
					me.__117.style.visibility="hidden";
					me.__117.ggVisible=false;
				}
			}
		}
		me.__117.logicBlock_visible();
		me.__117.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_10.appendChild(me.__117);
		el=me.__116=document.createElement('div');
		els=me.__116__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e41\uc624\ud504";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__116.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c OFF\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__116.ggUpdateText();
		el.appendChild(els);
		me.__116.ggIsActive=function() {
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
		me.__116.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_10'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__116.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__116.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__116.style.transition='';
				if (me.__116.ggCurrentLogicStateVisible == 0) {
					me.__116.style.visibility=(Number(me.__116.style.opacity)>0||!me.__116.style.opacity)?'inherit':'hidden';
					me.__116.ggVisible=true;
				}
				else {
					me.__116.style.visibility="hidden";
					me.__116.ggVisible=false;
				}
			}
		}
		me.__116.logicBlock_visible();
		me.__116.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_10.appendChild(me.__116);
		me.__23.appendChild(me.__onoff_10);
		el=me.__onoff_3=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uc695\uc2e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_3.ggIsActive=function() {
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
		me.__onoff_3.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_3.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_3.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_3.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_3.ggCurrentLogicStateSize == 0) {
					me.__onoff_3.style.width='48px';
					me.__onoff_3.style.height='48px';
					me.__onoff_3.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_3.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_3);
				}
				else {
					me.__onoff_3.style.width='60px';
					me.__onoff_3.style.height='60px';
					me.__onoff_3.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_3.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_3);
				}
			}
		}
		me.__onoff_3.logicBlock_size();
		me.__onoff_3.logicBlock_visible = function() {
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
			if (me.__onoff_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_3.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_3.ggCurrentLogicStateVisible == 0) {
					me.__onoff_3.style.visibility=(Number(me.__onoff_3.style.opacity)>0||!me.__onoff_3.style.opacity)?'inherit':'hidden';
					me.__onoff_3.ggVisible=true;
				}
				else {
					me.__onoff_3.style.visibility="hidden";
					me.__onoff_3.ggVisible=false;
				}
			}
		}
		me.__onoff_3.logicBlock_visible();
		me.__onoff_3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_3.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_3.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_3.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__onoff_3.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__onoff_3.logicBlock_backgroundcolor();
		me.__onoff_3.onmouseover=function (e) {
			me.elementMouseOver['_onoff_3']=true;
			me.__115.logicBlock_visible();
			me.__114.logicBlock_visible();
		}
		me.__onoff_3.onmouseout=function (e) {
			me.elementMouseOver['_onoff_3']=false;
			me.__115.logicBlock_visible();
			me.__114.logicBlock_visible();
		}
		me.__onoff_3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_10=document.createElement('div');
		els=me.__off_10__img=document.createElement('img');
		els.className='ggskin ggskin__off_10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uc695\uc2e41";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_10.ggIsActive=function() {
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
		me.__off_10.logicBlock_visible = function() {
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
			if (me.__off_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_10.style.transition='';
				if (me.__off_10.ggCurrentLogicStateVisible == 0) {
					me.__off_10.style.visibility=(Number(me.__off_10.style.opacity)>0||!me.__off_10.style.opacity)?'inherit':'hidden';
					me.__off_10.ggVisible=true;
				}
				else {
					me.__off_10.style.visibility="hidden";
					me.__off_10.ggVisible=false;
				}
			}
		}
		me.__off_10.logicBlock_visible();
		me.__off_10.onclick=function (e) {
			player.openNext("{node15}","$(cur)");
			me.__off_10.style.transition='none';
			me.__off_10.style.visibility='hidden';
			me.__off_10.ggVisible=false;
			me.__on_10.style.transition='none';
			me.__on_10.style.visibility=(Number(me.__on_10.style.opacity)>0||!me.__on_10.style.opacity)?'inherit':'hidden';
			me.__on_10.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_10.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_3.appendChild(me.__off_10);
		el=me.__on_10=document.createElement('div');
		els=me.__on_10__img=document.createElement('img');
		els.className='ggskin ggskin__on_10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uc695\uc2e41";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_10.ggIsActive=function() {
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
		me.__on_10.logicBlock_visible = function() {
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
			if (me.__on_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_10.style.transition='';
				if (me.__on_10.ggCurrentLogicStateVisible == 0) {
					me.__on_10.style.visibility=(Number(me.__on_10.style.opacity)>0||!me.__on_10.style.opacity)?'inherit':'hidden';
					me.__on_10.ggVisible=true;
				}
				else {
					me.__on_10.style.visibility="hidden";
					me.__on_10.ggVisible=false;
				}
			}
		}
		me.__on_10.logicBlock_visible();
		me.__on_10.onclick=function (e) {
			player.openNext("{node2}","$(cur)");
			me.__on_10.style.transition='none';
			me.__on_10.style.visibility='hidden';
			me.__on_10.ggVisible=false;
			me.__off_10.style.transition='none';
			me.__off_10.style.visibility=(Number(me.__off_10.style.opacity)>0||!me.__off_10.style.opacity)?'inherit':'hidden';
			me.__off_10.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_10.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_3.appendChild(me.__on_10);
		el=me.__115=document.createElement('div');
		els=me.__115__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e41\uc628";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__115.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__115.ggUpdateText();
		el.appendChild(els);
		me.__115.ggIsActive=function() {
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
		me.__115.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_3'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__115.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__115.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__115.style.transition='';
				if (me.__115.ggCurrentLogicStateVisible == 0) {
					me.__115.style.visibility=(Number(me.__115.style.opacity)>0||!me.__115.style.opacity)?'inherit':'hidden';
					me.__115.ggVisible=true;
				}
				else {
					me.__115.style.visibility="hidden";
					me.__115.ggVisible=false;
				}
			}
		}
		me.__115.logicBlock_visible();
		me.__115.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_3.appendChild(me.__115);
		el=me.__114=document.createElement('div');
		els=me.__114__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e41\uc624\ud504";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__114.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c OFF\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__114.ggUpdateText();
		el.appendChild(els);
		me.__114.ggIsActive=function() {
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
		me.__114.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_3'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__114.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__114.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__114.style.transition='';
				if (me.__114.ggCurrentLogicStateVisible == 0) {
					me.__114.style.visibility=(Number(me.__114.style.opacity)>0||!me.__114.style.opacity)?'inherit':'hidden';
					me.__114.ggVisible=true;
				}
				else {
					me.__114.style.visibility="hidden";
					me.__114.ggVisible=false;
				}
			}
		}
		me.__114.logicBlock_visible();
		me.__114.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_3.appendChild(me.__114);
		me.__23.appendChild(me.__onoff_3);
		el=me.__onoff_1=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \ud604\uad00";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_1.ggIsActive=function() {
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
		me.__onoff_1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_1.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_1.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_1.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_1.ggCurrentLogicStateSize == 0) {
					me.__onoff_1.style.width='48px';
					me.__onoff_1.style.height='48px';
					me.__onoff_1.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_1.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_1);
				}
				else {
					me.__onoff_1.style.width='60px';
					me.__onoff_1.style.height='60px';
					me.__onoff_1.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_1.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_1);
				}
			}
		}
		me.__onoff_1.logicBlock_size();
		me.__onoff_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.comment) == "\ud604\uad00"))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("start") != -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__onoff_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_1.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_1.ggCurrentLogicStateVisible == 0) {
					me.__onoff_1.style.visibility=(Number(me.__onoff_1.style.opacity)>0||!me.__onoff_1.style.opacity)?'inherit':'hidden';
					me.__onoff_1.ggVisible=true;
				}
				else if (me.__onoff_1.ggCurrentLogicStateVisible == 1) {
					me.__onoff_1.style.visibility=(Number(me.__onoff_1.style.opacity)>0||!me.__onoff_1.style.opacity)?'inherit':'hidden';
					me.__onoff_1.ggVisible=true;
				}
				else {
					me.__onoff_1.style.visibility="hidden";
					me.__onoff_1.ggVisible=false;
				}
			}
		}
		me.__onoff_1.logicBlock_visible();
		me.__onoff_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_1.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_1.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_1.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__onoff_1.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__onoff_1.logicBlock_backgroundcolor();
		me.__onoff_1.onmouseover=function (e) {
			me.elementMouseOver['_onoff_1']=true;
			me.__32.logicBlock_visible();
			me.__31.logicBlock_visible();
		}
		me.__onoff_1.onmouseout=function (e) {
			me.elementMouseOver['_onoff_1']=false;
			me.__32.logicBlock_visible();
			me.__31.logicBlock_visible();
		}
		me.__onoff_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_1=document.createElement('div');
		els=me.__off_1__img=document.createElement('img');
		els.className='ggskin ggskin__off_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \ud604\uad00";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_1.ggIsActive=function() {
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
		me.__off_1.logicBlock_visible = function() {
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
			if (me.__off_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_1.style.transition='';
				if (me.__off_1.ggCurrentLogicStateVisible == 0) {
					me.__off_1.style.visibility=(Number(me.__off_1.style.opacity)>0||!me.__off_1.style.opacity)?'inherit':'hidden';
					me.__off_1.ggVisible=true;
				}
				else {
					me.__off_1.style.visibility="hidden";
					me.__off_1.ggVisible=false;
				}
			}
		}
		me.__off_1.logicBlock_visible();
		me.__off_1.onclick=function (e) {
			player.openNext("{node26}","$(cur)");
			me.__off_1.style.transition='none';
			me.__off_1.style.visibility='hidden';
			me.__off_1.ggVisible=false;
			me.__on_1.style.transition='none';
			me.__on_1.style.visibility=(Number(me.__on_1.style.opacity)>0||!me.__on_1.style.opacity)?'inherit':'hidden';
			me.__on_1.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_1.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_1.appendChild(me.__off_1);
		el=me.__on_1=document.createElement('div');
		els=me.__on_1__img=document.createElement('img');
		els.className='ggskin ggskin__on_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \ud604\uad00";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_1.ggIsActive=function() {
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
		me.__on_1.logicBlock_visible = function() {
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
			if (me.__on_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_1.style.transition='';
				if (me.__on_1.ggCurrentLogicStateVisible == 0) {
					me.__on_1.style.visibility=(Number(me.__on_1.style.opacity)>0||!me.__on_1.style.opacity)?'inherit':'hidden';
					me.__on_1.ggVisible=true;
				}
				else {
					me.__on_1.style.visibility="hidden";
					me.__on_1.ggVisible=false;
				}
			}
		}
		me.__on_1.logicBlock_visible();
		me.__on_1.onclick=function (e) {
			player.openNext("{node13}","$(cur)");
			me.__on_1.style.transition='none';
			me.__on_1.style.visibility='hidden';
			me.__on_1.ggVisible=false;
			me.__off_1.style.transition='none';
			me.__off_1.style.visibility=(Number(me.__off_1.style.opacity)>0||!me.__off_1.style.opacity)?'inherit':'hidden';
			me.__off_1.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_1.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_1.appendChild(me.__on_1);
		el=me.__32=document.createElement('div');
		els=me.__32__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uad00\uc628";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__32.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__32.ggUpdateText();
		el.appendChild(els);
		me.__32.ggIsActive=function() {
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
		me.__32.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_1'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__32.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__32.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__32.style.transition='';
				if (me.__32.ggCurrentLogicStateVisible == 0) {
					me.__32.style.visibility=(Number(me.__32.style.opacity)>0||!me.__32.style.opacity)?'inherit':'hidden';
					me.__32.ggVisible=true;
				}
				else {
					me.__32.style.visibility="hidden";
					me.__32.ggVisible=false;
				}
			}
		}
		me.__32.logicBlock_visible();
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_1.appendChild(me.__32);
		el=me.__31=document.createElement('div');
		els=me.__31__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uad00\uc624\ud504";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__31.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c OFF\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__31.ggUpdateText();
		el.appendChild(els);
		me.__31.ggIsActive=function() {
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
		me.__31.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_1'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__31.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__31.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__31.style.transition='';
				if (me.__31.ggCurrentLogicStateVisible == 0) {
					me.__31.style.visibility=(Number(me.__31.style.opacity)>0||!me.__31.style.opacity)?'inherit':'hidden';
					me.__31.ggVisible=true;
				}
				else {
					me.__31.style.visibility="hidden";
					me.__31.ggVisible=false;
				}
			}
		}
		me.__31.logicBlock_visible();
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_1.appendChild(me.__31);
		me.__23.appendChild(me.__onoff_1);
		el=me.__onoff_110=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uce68\uc2e41-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_110.ggIsActive=function() {
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
		me.__onoff_110.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_110.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_110.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_110.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_110.ggCurrentLogicStateSize == 0) {
					me.__onoff_110.style.width='48px';
					me.__onoff_110.style.height='48px';
					me.__onoff_110.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_110.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_110);
				}
				else {
					me.__onoff_110.style.width='60px';
					me.__onoff_110.style.height='60px';
					me.__onoff_110.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_110.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_110);
				}
			}
		}
		me.__onoff_110.logicBlock_size();
		me.__onoff_110.logicBlock_visible = function() {
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
			if (me.__onoff_110.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_110.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_110.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_110.ggCurrentLogicStateVisible == 0) {
					me.__onoff_110.style.visibility=(Number(me.__onoff_110.style.opacity)>0||!me.__onoff_110.style.opacity)?'inherit':'hidden';
					me.__onoff_110.ggVisible=true;
				}
				else {
					me.__onoff_110.style.visibility="hidden";
					me.__onoff_110.ggVisible=false;
				}
			}
		}
		me.__onoff_110.logicBlock_visible();
		me.__onoff_110.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_110.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_110.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_110.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_110.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_110.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__onoff_110.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__onoff_110.logicBlock_backgroundcolor();
		me.__onoff_110.onmouseover=function (e) {
			me.elementMouseOver['_onoff_110']=true;
			me.__113.logicBlock_visible();
			me.__112.logicBlock_visible();
		}
		me.__onoff_110.onmouseout=function (e) {
			me.elementMouseOver['_onoff_110']=false;
			me.__113.logicBlock_visible();
			me.__112.logicBlock_visible();
		}
		me.__onoff_110.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_110=document.createElement('div');
		els=me.__off_110__img=document.createElement('img');
		els.className='ggskin ggskin__off_110';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uce68\uc2e41-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_110.ggIsActive=function() {
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
		me.__off_110.logicBlock_visible = function() {
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
			if (me.__off_110.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_110.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_110.style.transition='';
				if (me.__off_110.ggCurrentLogicStateVisible == 0) {
					me.__off_110.style.visibility=(Number(me.__off_110.style.opacity)>0||!me.__off_110.style.opacity)?'inherit':'hidden';
					me.__off_110.ggVisible=true;
				}
				else {
					me.__off_110.style.visibility="hidden";
					me.__off_110.ggVisible=false;
				}
			}
		}
		me.__off_110.logicBlock_visible();
		me.__off_110.onclick=function (e) {
			player.openNext("{node22}","$(cur)");
			me.__off_110.style.transition='none';
			me.__off_110.style.visibility='hidden';
			me.__off_110.ggVisible=false;
			me.__on_3.style.transition='none';
			me.__on_3.style.visibility=(Number(me.__on_3.style.opacity)>0||!me.__on_3.style.opacity)?'inherit':'hidden';
			me.__on_3.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_110.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_110.appendChild(me.__off_110);
		el=me.__on_110=document.createElement('div');
		els=me.__on_110__img=document.createElement('img');
		els.className='ggskin ggskin__on_110';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uce68\uc2e41-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_110.ggIsActive=function() {
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
		me.__on_110.logicBlock_visible = function() {
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
			if (me.__on_110.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_110.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_110.style.transition='';
				if (me.__on_110.ggCurrentLogicStateVisible == 0) {
					me.__on_110.style.visibility=(Number(me.__on_110.style.opacity)>0||!me.__on_110.style.opacity)?'inherit':'hidden';
					me.__on_110.ggVisible=true;
				}
				else {
					me.__on_110.style.visibility="hidden";
					me.__on_110.ggVisible=false;
				}
			}
		}
		me.__on_110.logicBlock_visible();
		me.__on_110.onclick=function (e) {
			player.openNext("{node9}","$(cur)");
			me.__on_110.style.transition='none';
			me.__on_110.style.visibility='hidden';
			me.__on_110.ggVisible=false;
			me.__off_3.style.transition='none';
			me.__off_3.style.visibility=(Number(me.__off_3.style.opacity)>0||!me.__off_3.style.opacity)?'inherit':'hidden';
			me.__off_3.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_110.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_110.appendChild(me.__on_110);
		el=me.__113=document.createElement('div');
		els=me.__113__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e41-1\uc628";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__113.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__113.ggUpdateText();
		el.appendChild(els);
		me.__113.ggIsActive=function() {
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
		me.__113.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_110'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__113.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__113.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__113.style.transition='';
				if (me.__113.ggCurrentLogicStateVisible == 0) {
					me.__113.style.visibility=(Number(me.__113.style.opacity)>0||!me.__113.style.opacity)?'inherit':'hidden';
					me.__113.ggVisible=true;
				}
				else {
					me.__113.style.visibility="hidden";
					me.__113.ggVisible=false;
				}
			}
		}
		me.__113.logicBlock_visible();
		me.__113.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_110.appendChild(me.__113);
		el=me.__112=document.createElement('div');
		els=me.__112__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e41-1\uc624\ud504";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__112.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c OFF\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__112.ggUpdateText();
		el.appendChild(els);
		me.__112.ggIsActive=function() {
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
		me.__112.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_110'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__112.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__112.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__112.style.transition='';
				if (me.__112.ggCurrentLogicStateVisible == 0) {
					me.__112.style.visibility=(Number(me.__112.style.opacity)>0||!me.__112.style.opacity)?'inherit':'hidden';
					me.__112.ggVisible=true;
				}
				else {
					me.__112.style.visibility="hidden";
					me.__112.ggVisible=false;
				}
			}
		}
		me.__112.logicBlock_visible();
		me.__112.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_110.appendChild(me.__112);
		me.__23.appendChild(me.__onoff_110);
		el=me.__onoff_11=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uc548\ubc291-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_11.ggIsActive=function() {
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
		me.__onoff_11.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_11.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_11.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_11.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_11.ggCurrentLogicStateSize == 0) {
					me.__onoff_11.style.width='48px';
					me.__onoff_11.style.height='48px';
					me.__onoff_11.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_11.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_11);
				}
				else {
					me.__onoff_11.style.width='60px';
					me.__onoff_11.style.height='60px';
					me.__onoff_11.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_11.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_11);
				}
			}
		}
		me.__onoff_11.logicBlock_size();
		me.__onoff_11.logicBlock_visible = function() {
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
			if (me.__onoff_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_11.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_11.ggCurrentLogicStateVisible == 0) {
					me.__onoff_11.style.visibility=(Number(me.__onoff_11.style.opacity)>0||!me.__onoff_11.style.opacity)?'inherit':'hidden';
					me.__onoff_11.ggVisible=true;
				}
				else {
					me.__onoff_11.style.visibility="hidden";
					me.__onoff_11.ggVisible=false;
				}
			}
		}
		me.__onoff_11.logicBlock_visible();
		me.__onoff_11.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_11.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_11.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_11.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_11.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_11.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__onoff_11.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__onoff_11.logicBlock_backgroundcolor();
		me.__onoff_11.onmouseover=function (e) {
			me.elementMouseOver['_onoff_11']=true;
			me.__111.logicBlock_visible();
			me.__110.logicBlock_visible();
		}
		me.__onoff_11.onmouseout=function (e) {
			me.elementMouseOver['_onoff_11']=false;
			me.__111.logicBlock_visible();
			me.__110.logicBlock_visible();
		}
		me.__onoff_11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_11=document.createElement('div');
		els=me.__off_11__img=document.createElement('img');
		els.className='ggskin ggskin__off_11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uc548\ubc291-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_11.ggIsActive=function() {
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
		me.__off_11.logicBlock_visible = function() {
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
			if (me.__off_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_11.style.transition='';
				if (me.__off_11.ggCurrentLogicStateVisible == 0) {
					me.__off_11.style.visibility=(Number(me.__off_11.style.opacity)>0||!me.__off_11.style.opacity)?'inherit':'hidden';
					me.__off_11.ggVisible=true;
				}
				else {
					me.__off_11.style.visibility="hidden";
					me.__off_11.ggVisible=false;
				}
			}
		}
		me.__off_11.logicBlock_visible();
		me.__off_11.onclick=function (e) {
			player.openNext("{node19}","$(cur)");
			me.__off_11.style.transition='none';
			me.__off_11.style.visibility='hidden';
			me.__off_11.ggVisible=false;
			me.__on_3.style.transition='none';
			me.__on_3.style.visibility=(Number(me.__on_3.style.opacity)>0||!me.__on_3.style.opacity)?'inherit':'hidden';
			me.__on_3.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_11.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_11.appendChild(me.__off_11);
		el=me.__on_11=document.createElement('div');
		els=me.__on_11__img=document.createElement('img');
		els.className='ggskin ggskin__on_11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uc548\ubc291-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_11.ggIsActive=function() {
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
		me.__on_11.logicBlock_visible = function() {
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
			if (me.__on_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_11.style.transition='';
				if (me.__on_11.ggCurrentLogicStateVisible == 0) {
					me.__on_11.style.visibility=(Number(me.__on_11.style.opacity)>0||!me.__on_11.style.opacity)?'inherit':'hidden';
					me.__on_11.ggVisible=true;
				}
				else {
					me.__on_11.style.visibility="hidden";
					me.__on_11.ggVisible=false;
				}
			}
		}
		me.__on_11.logicBlock_visible();
		me.__on_11.onclick=function (e) {
			player.openNext("{node6}","$(cur)");
			me.__on_11.style.transition='none';
			me.__on_11.style.visibility='hidden';
			me.__on_11.ggVisible=false;
			me.__off_3.style.transition='none';
			me.__off_3.style.visibility=(Number(me.__off_3.style.opacity)>0||!me.__off_3.style.opacity)?'inherit':'hidden';
			me.__off_3.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_11.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_11.appendChild(me.__on_11);
		el=me.__111=document.createElement('div');
		els=me.__111__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ubc291-1\uc628";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__111.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__111.ggUpdateText();
		el.appendChild(els);
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
				((me.elementMouseOver['_onoff_11'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__111.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__111.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__111.style.transition='';
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
		me.__111.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_11.appendChild(me.__111);
		el=me.__110=document.createElement('div');
		els=me.__110__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ubc291-1\uc624\ud504";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__110.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c OFF\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__110.ggUpdateText();
		el.appendChild(els);
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
				((me.elementMouseOver['_onoff_11'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__110.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__110.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__110.style.transition='';
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
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_11.appendChild(me.__110);
		me.__23.appendChild(me.__onoff_11);
		el=me.__onoff_0=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uc548\ubc29";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_0.ggIsActive=function() {
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
		me.__onoff_0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_0.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_0.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_0.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_0.ggCurrentLogicStateSize == 0) {
					me.__onoff_0.style.width='48px';
					me.__onoff_0.style.height='48px';
					me.__onoff_0.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_0.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_0);
				}
				else {
					me.__onoff_0.style.width='60px';
					me.__onoff_0.style.height='60px';
					me.__onoff_0.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_0.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_0);
				}
			}
		}
		me.__onoff_0.logicBlock_size();
		me.__onoff_0.logicBlock_visible = function() {
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
			if (me.__onoff_0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_0.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_0.ggCurrentLogicStateVisible == 0) {
					me.__onoff_0.style.visibility=(Number(me.__onoff_0.style.opacity)>0||!me.__onoff_0.style.opacity)?'inherit':'hidden';
					me.__onoff_0.ggVisible=true;
				}
				else {
					me.__onoff_0.style.visibility="hidden";
					me.__onoff_0.ggVisible=false;
				}
			}
		}
		me.__onoff_0.logicBlock_visible();
		me.__onoff_0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_0.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_0.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__onoff_0.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__onoff_0.logicBlock_backgroundcolor();
		me.__onoff_0.onmouseover=function (e) {
			me.elementMouseOver['_onoff_0']=true;
			me.__29.logicBlock_visible();
			me.__28.logicBlock_visible();
		}
		me.__onoff_0.onmouseout=function (e) {
			me.elementMouseOver['_onoff_0']=false;
			me.__29.logicBlock_visible();
			me.__28.logicBlock_visible();
		}
		me.__onoff_0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_0=document.createElement('div');
		els=me.__off_0__img=document.createElement('img');
		els.className='ggskin ggskin__off_0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uc548\ubc29";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_0.ggIsActive=function() {
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
		me.__off_0.logicBlock_visible = function() {
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
			if (me.__off_0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_0.style.transition='';
				if (me.__off_0.ggCurrentLogicStateVisible == 0) {
					me.__off_0.style.visibility=(Number(me.__off_0.style.opacity)>0||!me.__off_0.style.opacity)?'inherit':'hidden';
					me.__off_0.ggVisible=true;
				}
				else {
					me.__off_0.style.visibility="hidden";
					me.__off_0.ggVisible=false;
				}
			}
		}
		me.__off_0.logicBlock_visible();
		me.__off_0.onclick=function (e) {
			player.openNext("{node20}","$(cur)");
			me.__off_0.style.transition='none';
			me.__off_0.style.visibility='hidden';
			me.__off_0.ggVisible=false;
			me.__on_3.style.transition='none';
			me.__on_3.style.visibility=(Number(me.__on_3.style.opacity)>0||!me.__on_3.style.opacity)?'inherit':'hidden';
			me.__on_3.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_0.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_0.appendChild(me.__off_0);
		el=me.__on_0=document.createElement('div');
		els=me.__on_0__img=document.createElement('img');
		els.className='ggskin ggskin__on_0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uc548\ubc29";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_0.ggIsActive=function() {
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
		me.__on_0.logicBlock_visible = function() {
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
			if (me.__on_0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_0.style.transition='';
				if (me.__on_0.ggCurrentLogicStateVisible == 0) {
					me.__on_0.style.visibility=(Number(me.__on_0.style.opacity)>0||!me.__on_0.style.opacity)?'inherit':'hidden';
					me.__on_0.ggVisible=true;
				}
				else {
					me.__on_0.style.visibility="hidden";
					me.__on_0.ggVisible=false;
				}
			}
		}
		me.__on_0.logicBlock_visible();
		me.__on_0.onclick=function (e) {
			player.openNext("{node7}","$(cur)");
			me.__on_0.style.transition='none';
			me.__on_0.style.visibility='hidden';
			me.__on_0.ggVisible=false;
			me.__off_3.style.transition='none';
			me.__off_3.style.visibility=(Number(me.__off_3.style.opacity)>0||!me.__off_3.style.opacity)?'inherit':'hidden';
			me.__off_3.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_0.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_0.appendChild(me.__on_0);
		el=me.__29=document.createElement('div');
		els=me.__29__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ubc29\uc628";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__29.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__29.ggUpdateText();
		el.appendChild(els);
		me.__29.ggIsActive=function() {
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
		me.__29.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_0'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__29.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__29.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__29.style.transition='';
				if (me.__29.ggCurrentLogicStateVisible == 0) {
					me.__29.style.visibility=(Number(me.__29.style.opacity)>0||!me.__29.style.opacity)?'inherit':'hidden';
					me.__29.ggVisible=true;
				}
				else {
					me.__29.style.visibility="hidden";
					me.__29.ggVisible=false;
				}
			}
		}
		me.__29.logicBlock_visible();
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_0.appendChild(me.__29);
		el=me.__28=document.createElement('div');
		els=me.__28__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ubc29\uc624\ud504";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__28.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c OFF\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__28.ggUpdateText();
		el.appendChild(els);
		me.__28.ggIsActive=function() {
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
		me.__28.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_0'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__28.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__28.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__28.style.transition='';
				if (me.__28.ggCurrentLogicStateVisible == 0) {
					me.__28.style.visibility=(Number(me.__28.style.opacity)>0||!me.__28.style.opacity)?'inherit':'hidden';
					me.__28.ggVisible=true;
				}
				else {
					me.__28.style.visibility="hidden";
					me.__28.ggVisible=false;
				}
			}
		}
		me.__28.logicBlock_visible();
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_0.appendChild(me.__28);
		me.__23.appendChild(me.__onoff_0);
		el=me.__onoff_21=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uce68\uc2e42-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_21.ggIsActive=function() {
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
		me.__onoff_21.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_21.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_21.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_21.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_21.ggCurrentLogicStateSize == 0) {
					me.__onoff_21.style.width='48px';
					me.__onoff_21.style.height='48px';
					me.__onoff_21.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_21.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_21);
				}
				else {
					me.__onoff_21.style.width='60px';
					me.__onoff_21.style.height='60px';
					me.__onoff_21.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_21.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_21);
				}
			}
		}
		me.__onoff_21.logicBlock_size();
		me.__onoff_21.logicBlock_visible = function() {
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
			if (me.__onoff_21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_21.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_21.ggCurrentLogicStateVisible == 0) {
					me.__onoff_21.style.visibility=(Number(me.__onoff_21.style.opacity)>0||!me.__onoff_21.style.opacity)?'inherit':'hidden';
					me.__onoff_21.ggVisible=true;
				}
				else {
					me.__onoff_21.style.visibility="hidden";
					me.__onoff_21.ggVisible=false;
				}
			}
		}
		me.__onoff_21.logicBlock_visible();
		me.__onoff_21.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_21.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_21.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_21.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_21.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_21.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__onoff_21.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__onoff_21.logicBlock_backgroundcolor();
		me.__onoff_21.onmouseover=function (e) {
			me.elementMouseOver['_onoff_21']=true;
			me.__211.logicBlock_visible();
			me.__210.logicBlock_visible();
		}
		me.__onoff_21.onmouseout=function (e) {
			me.elementMouseOver['_onoff_21']=false;
			me.__211.logicBlock_visible();
			me.__210.logicBlock_visible();
		}
		me.__onoff_21.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_21=document.createElement('div');
		els=me.__off_21__img=document.createElement('img');
		els.className='ggskin ggskin__off_21';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uce68\uc2e42-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_21.ggIsActive=function() {
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
		me.__off_21.logicBlock_visible = function() {
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
			if (me.__off_21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_21.style.transition='';
				if (me.__off_21.ggCurrentLogicStateVisible == 0) {
					me.__off_21.style.visibility=(Number(me.__off_21.style.opacity)>0||!me.__off_21.style.opacity)?'inherit':'hidden';
					me.__off_21.ggVisible=true;
				}
				else {
					me.__off_21.style.visibility="hidden";
					me.__off_21.ggVisible=false;
				}
			}
		}
		me.__off_21.logicBlock_visible();
		me.__off_21.onclick=function (e) {
			player.openNext("{node24}","$(cur)");
			me.__off_21.style.transition='none';
			me.__off_21.style.visibility='hidden';
			me.__off_21.ggVisible=false;
			me.__on_3.style.transition='none';
			me.__on_3.style.visibility=(Number(me.__on_3.style.opacity)>0||!me.__on_3.style.opacity)?'inherit':'hidden';
			me.__on_3.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_21.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_21.appendChild(me.__off_21);
		el=me.__on_21=document.createElement('div');
		els=me.__on_21__img=document.createElement('img');
		els.className='ggskin ggskin__on_21';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uce68\uc2e42-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_21.ggIsActive=function() {
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
		me.__on_21.logicBlock_visible = function() {
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
			if (me.__on_21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_21.style.transition='';
				if (me.__on_21.ggCurrentLogicStateVisible == 0) {
					me.__on_21.style.visibility=(Number(me.__on_21.style.opacity)>0||!me.__on_21.style.opacity)?'inherit':'hidden';
					me.__on_21.ggVisible=true;
				}
				else {
					me.__on_21.style.visibility="hidden";
					me.__on_21.ggVisible=false;
				}
			}
		}
		me.__on_21.logicBlock_visible();
		me.__on_21.onclick=function (e) {
			player.openNext("{node11}","$(cur)");
			me.__on_21.style.transition='none';
			me.__on_21.style.visibility='hidden';
			me.__on_21.ggVisible=false;
			me.__off_3.style.transition='none';
			me.__off_3.style.visibility=(Number(me.__off_3.style.opacity)>0||!me.__off_3.style.opacity)?'inherit':'hidden';
			me.__off_3.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_21.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_21.appendChild(me.__on_21);
		el=me.__211=document.createElement('div');
		els=me.__211__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e42-1\uc628";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__211.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__211.ggUpdateText();
		el.appendChild(els);
		me.__211.ggIsActive=function() {
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
		me.__211.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_21'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__211.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__211.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__211.style.transition='';
				if (me.__211.ggCurrentLogicStateVisible == 0) {
					me.__211.style.visibility=(Number(me.__211.style.opacity)>0||!me.__211.style.opacity)?'inherit':'hidden';
					me.__211.ggVisible=true;
				}
				else {
					me.__211.style.visibility="hidden";
					me.__211.ggVisible=false;
				}
			}
		}
		me.__211.logicBlock_visible();
		me.__211.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_21.appendChild(me.__211);
		el=me.__210=document.createElement('div');
		els=me.__210__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e42-1\uc624\ud504";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__210.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c OFF\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__210.ggUpdateText();
		el.appendChild(els);
		me.__210.ggIsActive=function() {
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
		me.__210.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_21'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__210.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__210.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__210.style.transition='';
				if (me.__210.ggCurrentLogicStateVisible == 0) {
					me.__210.style.visibility=(Number(me.__210.style.opacity)>0||!me.__210.style.opacity)?'inherit':'hidden';
					me.__210.ggVisible=true;
				}
				else {
					me.__210.style.visibility="hidden";
					me.__210.ggVisible=false;
				}
			}
		}
		me.__210.logicBlock_visible();
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_21.appendChild(me.__210);
		me.__23.appendChild(me.__onoff_21);
		el=me.__onoff_20=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uce68\uc2e42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_20.ggIsActive=function() {
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
		me.__onoff_20.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_20.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_20.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_20.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_20.ggCurrentLogicStateSize == 0) {
					me.__onoff_20.style.width='48px';
					me.__onoff_20.style.height='48px';
					me.__onoff_20.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_20.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_20);
				}
				else {
					me.__onoff_20.style.width='60px';
					me.__onoff_20.style.height='60px';
					me.__onoff_20.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_20.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_20);
				}
			}
		}
		me.__onoff_20.logicBlock_size();
		me.__onoff_20.logicBlock_visible = function() {
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
			if (me.__onoff_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_20.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_20.ggCurrentLogicStateVisible == 0) {
					me.__onoff_20.style.visibility=(Number(me.__onoff_20.style.opacity)>0||!me.__onoff_20.style.opacity)?'inherit':'hidden';
					me.__onoff_20.ggVisible=true;
				}
				else {
					me.__onoff_20.style.visibility="hidden";
					me.__onoff_20.ggVisible=false;
				}
			}
		}
		me.__onoff_20.logicBlock_visible();
		me.__onoff_20.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_20.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_20.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_20.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_20.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_20.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__onoff_20.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__onoff_20.logicBlock_backgroundcolor();
		me.__onoff_20.onmouseover=function (e) {
			me.elementMouseOver['_onoff_20']=true;
			me.__27.logicBlock_visible();
			me.__26.logicBlock_visible();
		}
		me.__onoff_20.onmouseout=function (e) {
			me.elementMouseOver['_onoff_20']=false;
			me.__27.logicBlock_visible();
			me.__26.logicBlock_visible();
		}
		me.__onoff_20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_20=document.createElement('div');
		els=me.__off_20__img=document.createElement('img');
		els.className='ggskin ggskin__off_20';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uce68\uc2e42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_20.ggIsActive=function() {
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
		me.__off_20.logicBlock_visible = function() {
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
			if (me.__off_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_20.style.transition='';
				if (me.__off_20.ggCurrentLogicStateVisible == 0) {
					me.__off_20.style.visibility=(Number(me.__off_20.style.opacity)>0||!me.__off_20.style.opacity)?'inherit':'hidden';
					me.__off_20.ggVisible=true;
				}
				else {
					me.__off_20.style.visibility="hidden";
					me.__off_20.ggVisible=false;
				}
			}
		}
		me.__off_20.logicBlock_visible();
		me.__off_20.onclick=function (e) {
			player.openNext("{node25}","$(cur)");
			me.__off_20.style.transition='none';
			me.__off_20.style.visibility='hidden';
			me.__off_20.ggVisible=false;
			me.__on_3.style.transition='none';
			me.__on_3.style.visibility=(Number(me.__on_3.style.opacity)>0||!me.__on_3.style.opacity)?'inherit':'hidden';
			me.__on_3.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_20.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_20.appendChild(me.__off_20);
		el=me.__on_20=document.createElement('div');
		els=me.__on_20__img=document.createElement('img');
		els.className='ggskin ggskin__on_20';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uce68\uc2e42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_20.ggIsActive=function() {
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
		me.__on_20.logicBlock_visible = function() {
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
			if (me.__on_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_20.style.transition='';
				if (me.__on_20.ggCurrentLogicStateVisible == 0) {
					me.__on_20.style.visibility=(Number(me.__on_20.style.opacity)>0||!me.__on_20.style.opacity)?'inherit':'hidden';
					me.__on_20.ggVisible=true;
				}
				else {
					me.__on_20.style.visibility="hidden";
					me.__on_20.ggVisible=false;
				}
			}
		}
		me.__on_20.logicBlock_visible();
		me.__on_20.onclick=function (e) {
			player.openNext("{node12}","$(cur)");
			me.__on_20.style.transition='none';
			me.__on_20.style.visibility='hidden';
			me.__on_20.ggVisible=false;
			me.__off_3.style.transition='none';
			me.__off_3.style.visibility=(Number(me.__off_3.style.opacity)>0||!me.__off_3.style.opacity)?'inherit':'hidden';
			me.__off_3.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_20.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_20.appendChild(me.__on_20);
		el=me.__27=document.createElement('div');
		els=me.__27__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e42\uc628";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__27.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__27.ggUpdateText();
		el.appendChild(els);
		me.__27.ggIsActive=function() {
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
		me.__27.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_20'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__27.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__27.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__27.style.transition='';
				if (me.__27.ggCurrentLogicStateVisible == 0) {
					me.__27.style.visibility=(Number(me.__27.style.opacity)>0||!me.__27.style.opacity)?'inherit':'hidden';
					me.__27.ggVisible=true;
				}
				else {
					me.__27.style.visibility="hidden";
					me.__27.ggVisible=false;
				}
			}
		}
		me.__27.logicBlock_visible();
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_20.appendChild(me.__27);
		el=me.__26=document.createElement('div');
		els=me.__26__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e42\uc624\ud504";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__26.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c OFF\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__26.ggUpdateText();
		el.appendChild(els);
		me.__26.ggIsActive=function() {
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
		me.__26.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_20'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__26.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__26.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__26.style.transition='';
				if (me.__26.ggCurrentLogicStateVisible == 0) {
					me.__26.style.visibility=(Number(me.__26.style.opacity)>0||!me.__26.style.opacity)?'inherit':'hidden';
					me.__26.ggVisible=true;
				}
				else {
					me.__26.style.visibility="hidden";
					me.__26.ggVisible=false;
				}
			}
		}
		me.__26.logicBlock_visible();
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_20.appendChild(me.__26);
		me.__23.appendChild(me.__onoff_20);
		el=me.__onoff_=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \uc548\ubc29\uc695\uc2e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_.ggIsActive=function() {
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
		me.__onoff_.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_.ggCurrentLogicStateSize == 0) {
					me.__onoff_.style.width='48px';
					me.__onoff_.style.height='48px';
					me.__onoff_.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_);
				}
				else {
					me.__onoff_.style.width='60px';
					me.__onoff_.style.height='60px';
					me.__onoff_.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_);
				}
			}
		}
		me.__onoff_.logicBlock_size();
		me.__onoff_.logicBlock_visible = function() {
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
			if (me.__onoff_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_.ggCurrentLogicStateVisible == 0) {
					me.__onoff_.style.visibility=(Number(me.__onoff_.style.opacity)>0||!me.__onoff_.style.opacity)?'inherit':'hidden';
					me.__onoff_.ggVisible=true;
				}
				else {
					me.__onoff_.style.visibility="hidden";
					me.__onoff_.ggVisible=false;
				}
			}
		}
		me.__onoff_.logicBlock_visible();
		me.__onoff_.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__onoff_.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__onoff_.logicBlock_backgroundcolor();
		me.__onoff_.onmouseover=function (e) {
			me.elementMouseOver['_onoff_']=true;
			me.__25.logicBlock_visible();
			me.__24.logicBlock_visible();
		}
		me.__onoff_.onmouseout=function (e) {
			me.elementMouseOver['_onoff_']=false;
			me.__25.logicBlock_visible();
			me.__24.logicBlock_visible();
		}
		me.__onoff_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_=document.createElement('div');
		els=me.__off___img=document.createElement('img');
		els.className='ggskin ggskin__off_';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \uc548\ubc29\uc695\uc2e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_.ggIsActive=function() {
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
		me.__off_.logicBlock_visible = function() {
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
			if (me.__off_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_.style.transition='';
				if (me.__off_.ggCurrentLogicStateVisible == 0) {
					me.__off_.style.visibility=(Number(me.__off_.style.opacity)>0||!me.__off_.style.opacity)?'inherit':'hidden';
					me.__off_.ggVisible=true;
				}
				else {
					me.__off_.style.visibility="hidden";
					me.__off_.ggVisible=false;
				}
			}
		}
		me.__off_.logicBlock_visible();
		me.__off_.onclick=function (e) {
			player.openNext("{node18}","$(cur)");
			me.__off_.style.transition='none';
			me.__off_.style.visibility='hidden';
			me.__off_.ggVisible=false;
			me.__on_10.style.transition='none';
			me.__on_10.style.visibility=(Number(me.__on_10.style.opacity)>0||!me.__on_10.style.opacity)?'inherit':'hidden';
			me.__on_10.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_.appendChild(me.__off_);
		el=me.__on_=document.createElement('div');
		els=me.__on___img=document.createElement('img');
		els.className='ggskin ggskin__on_';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \uc548\ubc29\uc695\uc2e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_.ggIsActive=function() {
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
		me.__on_.logicBlock_visible = function() {
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
			if (me.__on_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_.style.transition='';
				if (me.__on_.ggCurrentLogicStateVisible == 0) {
					me.__on_.style.visibility=(Number(me.__on_.style.opacity)>0||!me.__on_.style.opacity)?'inherit':'hidden';
					me.__on_.ggVisible=true;
				}
				else {
					me.__on_.style.visibility="hidden";
					me.__on_.ggVisible=false;
				}
			}
		}
		me.__on_.logicBlock_visible();
		me.__on_.onclick=function (e) {
			player.openNext("{node5}","$(cur)");
			me.__on_.style.transition='none';
			me.__on_.style.visibility='hidden';
			me.__on_.ggVisible=false;
			me.__off_10.style.transition='none';
			me.__off_10.style.visibility=(Number(me.__off_10.style.opacity)>0||!me.__off_10.style.opacity)?'inherit':'hidden';
			me.__off_10.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_.appendChild(me.__on_);
		el=me.__25=document.createElement('div');
		els=me.__25__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ubc29\uc695\uc2e4\uc628";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__25.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__25.ggUpdateText();
		el.appendChild(els);
		me.__25.ggIsActive=function() {
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
		me.__25.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__25.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__25.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__25.style.transition='';
				if (me.__25.ggCurrentLogicStateVisible == 0) {
					me.__25.style.visibility=(Number(me.__25.style.opacity)>0||!me.__25.style.opacity)?'inherit':'hidden';
					me.__25.ggVisible=true;
				}
				else {
					me.__25.style.visibility="hidden";
					me.__25.ggVisible=false;
				}
			}
		}
		me.__25.logicBlock_visible();
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_.appendChild(me.__25);
		el=me.__24=document.createElement('div');
		els=me.__24__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ubc29\uc695\uc2e4\uc624\ud504";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__24.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c OFF\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__24.ggUpdateText();
		el.appendChild(els);
		me.__24.ggIsActive=function() {
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
		me.__24.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__24.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__24.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__24.style.transition='';
				if (me.__24.ggCurrentLogicStateVisible == 0) {
					me.__24.style.visibility=(Number(me.__24.style.opacity)>0||!me.__24.style.opacity)?'inherit':'hidden';
					me.__24.ggVisible=true;
				}
				else {
					me.__24.style.visibility="hidden";
					me.__24.ggVisible=false;
				}
			}
		}
		me.__24.logicBlock_visible();
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_.appendChild(me.__24);
		me.__23.appendChild(me.__onoff_);
		el=me.__onoff_2=document.createElement('div');
		el.ggId="\uac00\uad6c on\/off \ubcf5\ub3c42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__onoff_2.ggIsActive=function() {
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
		me.__onoff_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__onoff_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__onoff_2.ggCurrentLogicStateSize = newLogicStateSize;
				me.__onoff_2.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_2.ggCurrentLogicStateSize == 0) {
					me.__onoff_2.style.width='48px';
					me.__onoff_2.style.height='48px';
					me.__onoff_2.style.left = 'calc(50% - (48px / 2))';
					me.__onoff_2.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__onoff_2);
				}
				else {
					me.__onoff_2.style.width='60px';
					me.__onoff_2.style.height='60px';
					me.__onoff_2.style.left = 'calc(50% - (60px / 2))';
					me.__onoff_2.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__onoff_2);
				}
			}
		}
		me.__onoff_2.logicBlock_size();
		me.__onoff_2.logicBlock_visible = function() {
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
			if (me.__onoff_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__onoff_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__onoff_2.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_2.ggCurrentLogicStateVisible == 0) {
					me.__onoff_2.style.visibility=(Number(me.__onoff_2.style.opacity)>0||!me.__onoff_2.style.opacity)?'inherit':'hidden';
					me.__onoff_2.ggVisible=true;
				}
				else {
					me.__onoff_2.style.visibility="hidden";
					me.__onoff_2.ggVisible=false;
				}
			}
		}
		me.__onoff_2.logicBlock_visible();
		me.__onoff_2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_1') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__onoff_2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__onoff_2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__onoff_2.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__onoff_2.ggCurrentLogicStateBackgroundColor == 0) {
					me.__onoff_2.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__onoff_2.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__onoff_2.logicBlock_backgroundcolor();
		me.__onoff_2.onmouseover=function (e) {
			me.elementMouseOver['_onoff_2']=true;
			me.__2_0.logicBlock_visible();
			me.__2_.logicBlock_visible();
		}
		me.__onoff_2.onmouseout=function (e) {
			me.elementMouseOver['_onoff_2']=false;
			me.__2_0.logicBlock_visible();
			me.__2_.logicBlock_visible();
		}
		me.__onoff_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__off_2=document.createElement('div');
		els=me.__off_2__img=document.createElement('img');
		els.className='ggskin ggskin__off_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE1klEQVR4nO2dTagWVRjHf++8t2sWleXCqCzDwlwIEdGiD0hx07dWmxZFVFs3kbTRhKAIIhCiiLYh0SILpEVREkQUVCS0qUVfJJGZXeuilb06Lc69oDbje868z7wz88z/Bwdk7nmf89zzu3fm3DPPjIM8zxF+yZpOQNSLBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYORLsHAl2jgQ7R4KdI8HOkWDnDCb8/B3A9cBK9MNSBweBL4HdwLFpDnwt8A6Qq02lfQZsivBiwsM1fiNqZ24vjtdzKsPE/ncBb6QOIsy4Afgb+Dj2A6nX4EPARYmfEbaMgOXAnzGdUxZGm5DcNjADPBPbOUXwA+'+
			'm5iJrYHNsxRfAVFRIR9XAxkWfTFMFnV8tF1MAQWBbTMUVwXikVURdRPiS4u5gLFh1Egp0jwc5JEbymtixEFWZjOs0kBNwGXLrw7yXAKuA64JKktEQqc8AXwHfA/EnHf5vG4BlwE/Ayzd9p8dbeBu4FzomVUTfXAJ/Q/MR0vR0Abkmc+6nyEs1PUlfbh8CFyTPeAHfT/GR1re2oNNNjKLsfvIpQlnMZYbV2fOF4tpDMAeBrQr1QGc8BT1ok2QPeIlxvy7gaWEdY5J7FqT5OAD8TfHw1bqDVpNVafQBsOEO8HxJi9bktL5m/K4FdCXE+B24sicV64GjFBJ8uibmxBZPX9razZO42E6o3qsR8/PRgNxsk+kRJovtaMIltbccovu13u0HsrYvBLiCcxy0SXlmQ7IMtmMi2ttcK5guCeIv4GzJgC5MXwC9StKiKrgDsIe8V'+
			'HLuHsJCyYFtGKIW14raCY98DvxqO4YlvCo7dbxj/qoywUrPicv5/TcmBXwzH8MTvBcdWG8Y/N8N2r3OG4mKwkeEYnvi34Jilj9nFjQtLiuJZXeO9UTQvlj7yaQkW8ZjOnyo6nCPBzpFg50iwcyTYORLsHAl2jgQ7Z1qCLfdXPWF116iUlML3SdhJkFy099pHhoS6qrm6B5qW4B1TGkecRh2n6H9qiNknTM9ydQiOeihKlGL6rFcdgssqLMV4HiXUopsxILxQ6zzLoMC7wJuEMlwxniHheaTHjOPO1yVYtIN5bXQ4R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp2Tkf4/r4juMMjQ/VvPHM/Qs7ueOZoBHzWdhaiNQwPCDeafms5E1MJ9GbAfeKTpTIQ5rwO7F1fQ+wgPHq9vLB1hyR5KXubyEOHFIE2/P0qtenvqZK'+
			'FF74g4H7iTUCO0gvB29xFw68LXLBgB7xNe+OV9s+UEodJ0I7Z16HuBIwSpc4Sz8B7g26oBP8Xup+xw1SQ6zGFsf1OjypNTfnssn6PJgKWG8drOUuzPVCtiOqUMav0qpGk9NtMG6vheo7aYvV//eo8EO0eCnZMieInhuMPEsbtOhv1DeVHX9ZRJtnyscRb4yzBe2zlC+HvYkoMxnVIEP18xkSL2EjY5+sIIeMEw3qvAHzEdU5bvuwh/e61lsiqQ/cArE3y+q2wn7DitYbI9hR+BZ2M7D/I8n2As0Xb6tNDpJRLsHAl2jgQ7R4KdI8HOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnfMfxYKisYR1OHYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c off \ubcf5\ub3c42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__off_2.ggIsActive=function() {
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
		me.__off_2.logicBlock_visible = function() {
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
			if (me.__off_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__off_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__off_2.style.transition='';
				if (me.__off_2.ggCurrentLogicStateVisible == 0) {
					me.__off_2.style.visibility=(Number(me.__off_2.style.opacity)>0||!me.__off_2.style.opacity)?'inherit':'hidden';
					me.__off_2.ggVisible=true;
				}
				else {
					me.__off_2.style.visibility="hidden";
					me.__off_2.ggVisible=false;
				}
			}
		}
		me.__off_2.logicBlock_visible();
		me.__off_2.onclick=function (e) {
			player.openNext("{node16}","$(cur)");
			me.__off_2.style.transition='none';
			me.__off_2.style.visibility='hidden';
			me.__off_2.ggVisible=false;
			me.__on_5.style.transition='none';
			me.__on_5.style.visibility=(Number(me.__on_5.style.opacity)>0||!me.__on_5.style.opacity)?'inherit':'hidden';
			me.__on_5.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', true);
		}
		me.__off_2.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_2.appendChild(me.__off_2);
		el=me.__on_2=document.createElement('div');
		els=me.__on_2__img=document.createElement('img');
		els.className='ggskin ggskin__on_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNDow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTArMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0YjBlMzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBiMTk2MS01YjNkLTFjNDYtYjVmMi1lZDFhMTE0Yj'+
			'BlMzkiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMGIxOTYxLTViM2QtMWM0Ni1iNWYyLWVkMWExMTRiMGUzOSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNDowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PokgIl4AAAUZSURBVHic7Z1LiB1FFIa/2zPO'+
			'GMVEDBjRGBNiiC5EEcEHCj6yMT5iNBsVUdSNiBvBxyISGVCUKGQhIm4CYnBlfISAigZEBBeRCG504SMYRI0xMUNGTG5SLioDN3N7YlX36Zs7p/8PBmZqqk7X9DfdVV1dVbcTQkD4pTjVFRDNIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOaM1y98GXAVciP5ZmmAvsAvYChyuEqCq4CuAF4DVFcuLPHYSz/f7uQU7FeZFPwRszi0kTHgNeCKnQK7gO4APcwoIc54FXk7NnCt4H3BObo2EKV1gIXAwJXNOx+guJHcYGCW2x0nkCL43vy6iIdamZswRfFGFiohmOI/Eu2mO4NOr1UU0wAhwdkrGHMFaZzpcJPmQ4LmLuWAxB5Fg50iwc3IEr2ysFqIKYymZct'+
			'4mrQcuOP79OLAUuBI4P6taIpf9wNfAj8BkT/qfKYWrvE3qpQCuBe4HHqsTSPTxAfAW8BEwVTVIXcG9XEJ8jXiNVcCW8gewDvjCIphlJ+s74tX8umHMtvE58UIxkQvN9KIfB9Y0ENc7zwM3EttcM2a7RS8lTstZTOytHT2eXhBHUH4nXrG7ThL7JeAZo3p65z3g7pP8fgVwGbGTexon+jgG/Er08W1fyRBC79fyEML2kM5nIYSbZ8To/fo5I1abWRjKz9+yEMKWjDg7QwjX9cboDXZTCGGqYgUnZqngqorx2sSmUH7u1oYQuhVjPjkdZ/oWfT31G/angFdK0r8BLq8Z2ytHgHOBAzPSVwPba8Z+GtjYCSEsIDbsnZoBAZYAv8xIe4D4PCf6eZt4fmZymNjW1uWWgjgN00IulHeqvjSK7ZFPStLWYCMXYH1BnAprxa0l'+
			'aT8RH95FP9+XpK0zjH9xASwzDLiE/qkkAfjN8Bie+Kskbblh/DML4AzDgKOUTwbrGh7DE0dK0ix9jE0PXFhSFs+qjfdG2Xmx9BEGJVikY3r+NKPDORLsHAl2jgQ7R4KdI8HOkWDnSLBzBiXYcnzVE1ZvjWal7j5ZqWwiSi4be20jI8R5VaYT7MoYlOANAzqOmEETt+h/G4jZJkzvck0ITloUJWbFdK1XE4InGojZFh4hzkU3oxNCOAicZRkU+Bh4lxqLplrGCHAD8Khx3MmmBIvhYFIDHc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg5xTEcVDhk06B3t965miB1u56ZqrAcFc1MXTs64QQFtO/cYrwwT0FsAd4+FTXRJjzDrB1+jFpM5r56IltwH1w4nPwBPAgA5irKxplA3Dn9A9lm5HOB24nzhFaRNzdvUvcCX'+
			'W+USW6wKfEDb+8D7YcI840XYXtPPQdwCHilg/7iTsKbgN+6M2UsyH4V8DVRpX7m8RP7nLEAWCBYbxxEj4VPOfqsVxHUwDzDOMNO/Owv1MtSsmUc1DrrZAGtWxmGGjib00aYvbe/rUeCXaOBDsnR/C44XFHMo891ymwX5SX1K7nnGTLZY1jwD+G8YadQ8TnYUv2pmTKEbyxYkXK2EHCM5wjusCrhvHeJI4l/C853fctxGevS6k3C2QP8EaN8nOV54gjTiupN6awG3gxNbPlR9uJIaRNHZ1WIsHOkWDnSLBzJNg5EuwcCXaOBDtHgp0jwc6RYOdIsHMk2DkS7BwJdo4EO0eCnSPBzpFg50iwcyTYOf8B7RxQpz1Jx9AAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c on \ubcf5\ub3c42";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__on_2.ggIsActive=function() {
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
		me.__on_2.logicBlock_visible = function() {
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
			if (me.__on_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__on_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__on_2.style.transition='';
				if (me.__on_2.ggCurrentLogicStateVisible == 0) {
					me.__on_2.style.visibility=(Number(me.__on_2.style.opacity)>0||!me.__on_2.style.opacity)?'inherit':'hidden';
					me.__on_2.ggVisible=true;
				}
				else {
					me.__on_2.style.visibility="hidden";
					me.__on_2.ggVisible=false;
				}
			}
		}
		me.__on_2.logicBlock_visible();
		me.__on_2.onclick=function (e) {
			player.openNext("{node3}","$(cur)");
			me.__on_2.style.transition='none';
			me.__on_2.style.visibility='hidden';
			me.__on_2.ggVisible=false;
			me.__off_5.style.transition='none';
			me.__off_5.style.visibility=(Number(me.__off_5.style.opacity)>0||!me.__off_5.style.opacity)?'inherit':'hidden';
			me.__off_5.ggVisible=true;
			player.setVariableValue('vis_buttonbg_1', false);
		}
		me.__on_2.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_2.appendChild(me.__on_2);
		el=me.__2_0=document.createElement('div');
		els=me.__2_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\ub3c42 \uc628";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__2_0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2_0.ggUpdateText();
		el.appendChild(els);
		me.__2_0.ggIsActive=function() {
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
		me.__2_0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_2'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc5c6\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2_0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2_0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2_0.style.transition='';
				if (me.__2_0.ggCurrentLogicStateVisible == 0) {
					me.__2_0.style.visibility=(Number(me.__2_0.style.opacity)>0||!me.__2_0.style.opacity)?'inherit':'hidden';
					me.__2_0.ggVisible=true;
				}
				else {
					me.__2_0.style.visibility="hidden";
					me.__2_0.ggVisible=false;
				}
			}
		}
		me.__2_0.logicBlock_visible();
		me.__2_0.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_2.appendChild(me.__2_0);
		el=me.__2_=document.createElement('div');
		els=me.__2___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\ub3c42 \uc624\ud504";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__2_.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c OFF\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2_.ggUpdateText();
		el.appendChild(els);
		me.__2_.ggIsActive=function() {
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
		me.__2_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_onoff_2'] == true)) && 
				((me.ggUserdata.tags.indexOf("\uac00\uad6c\uc788\uc74c") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2_.style.transition='';
				if (me.__2_.ggCurrentLogicStateVisible == 0) {
					me.__2_.style.visibility=(Number(me.__2_.style.opacity)>0||!me.__2_.style.opacity)?'inherit':'hidden';
					me.__2_.ggVisible=true;
				}
				else {
					me.__2_.style.visibility="hidden";
					me.__2_.ggVisible=false;
				}
			}
		}
		me.__2_.logicBlock_visible();
		me.__2_.ggUpdatePosition=function (useTransition) {
		}
		me.__onoff_2.appendChild(me.__2_);
		me.__23.appendChild(me.__onoff_2);
		me.__9.appendChild(me.__23);
		el=me.__20=document.createElement('div');
		el.ggId="\uc635\uc158\uc628\uc624\ud504";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 43.5%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		el=me.__30=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
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
		me.__30.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__30.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__30.ggCurrentLogicStateSize = newLogicStateSize;
				me.__30.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__30.ggCurrentLogicStateSize == 0) {
					me.__30.style.width='48px';
					me.__30.style.height='48px';
					me.__30.style.left = 'calc(50% - (48px / 2))';
					me.__30.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__30);
				}
				else {
					me.__30.style.width='60px';
					me.__30.style.height='60px';
					me.__30.style.left = 'calc(50% - (60px / 2))';
					me.__30.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__30);
				}
			}
		}
		me.__30.logicBlock_size();
		me.__30.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__30.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__30.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__30.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__30.ggCurrentLogicStateBackgroundColor == 0) {
					me.__30.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__30.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__30.logicBlock_backgroundcolor();
		me.__30.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_2', !player.getVariableValue('vis_buttonbg_2'));
			var list=me.findElements("ht_node",true);
			while(list.length>0) {
				var e=list.pop();
				e.ggVisible = !e.ggVisible;
				var flag=e.ggVisible;
				e.style.transition='none';
				e.style.visibility=((flag)&&(Number(e.style.opacity)>0||!e.style.opacity))?'inherit':'hidden';
			}
		}
		me.__30.onmouseover=function (e) {
			me.elementMouseOver['_30']=true;
			me.__22.logicBlock_visible();
		}
		me.__30.onmouseout=function (e) {
			me.elementMouseOver['_30']=false;
			me.__22.logicBlock_visible();
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		els=me.__22__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc635\uc158\uc628\uc624\ud504\uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__22.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud654\uc0b4\ud45c ON", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__22.ggUpdateText();
		el.appendChild(els);
		me.__22.ggIsActive=function() {
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
		me.__22.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_30'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__22.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__22.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__22.style.transition='';
				if (me.__22.ggCurrentLogicStateVisible == 0) {
					me.__22.style.visibility=(Number(me.__22.style.opacity)>0||!me.__22.style.opacity)?'inherit':'hidden';
					me.__22.ggVisible=true;
				}
				else {
					me.__22.style.visibility="hidden";
					me.__22.ggVisible=false;
				}
			}
		}
		me.__22.logicBlock_visible();
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me.__22);
		el=me.__21=document.createElement('div');
		els=me.__21__img=document.createElement('img');
		els.className='ggskin ggskin__21';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABIhJREFUeF7tnD+uFDEMxr93Au7AEeiogIIDwG1ASEDFaZCoaPlzAA5CTQ3ITztSFCVjx+N4nHmedp3E+X6xncxm9w75hFLgLpQ36QwSSLBFkEASSDAFgrmTEZJAgikQzJ2MkAQSTIFg7mSEJJBgCgRzJyMkIJAPwXx60O5QhPx70AoEm3wCSSDBFAjmTkZIAgmmQDB3MkISSDAFgrnDRchHAHlOsYVGer7vdZlAbMWW9JZAJCo52iQQR7ElQyUQiUqONgnEUWzJUKcAeQrgFYAnAH4D+ArgC4A/Eo8vbuMO5CWANwBeVMJ+AvAOwN8Bwcn5ZwBo+/19oF1kU3cgnwG87ihC4v4UqlV/LXCVL9NcgTwG8AvAo47obwFQpHDPNw'+
			'DPK6OrHFKXA0IgCEjruQIUVyAk4tGU1YqOEs7qqcsdyJGivuvsjcrqUeIOhHTTbHv3UlWdvlaOklOAcEW79TmXqso2K0fJEkB60UHC09N6Xb0qlCWAtK4i0UFwO1z2riqtmLrCA+k5SDC203nPZsUoCQ2kl6rK6NhqhwScpnZ5twkNpFfIy+goBeNSm7e4mvHCAtGkIU0bjWgz24QFol3tvahapcCHBDKaqsoVu3qUhAOyd+aQXjlaGUo4IFYpZ8bZhBYLHUJ/3LbcM74UCwXEcus6I0pKyK2tt0WxDwNk5MwhnXhvcpoC3+prxsEzDJAjhXwPUCt1jQq5J1LvTCRdNLVdCCAWhXybGPVV5naL1LX3ptk6dYUA0ppwPdHN0T0BSpvyJsqRAr8r0G0VWEbJ6UC4Qt76nKDUV3/2cvyRKJH+6FVTl1pp7VQgXCHnVue2'+
			'MiV225a1FmFvdXP9ln1Zpa5TgfRyM63+7m8kKkWltiRYfXWIuuoV+BEYm0sWqes0IJoJa3cuXLseFGm62vq3iJLTgIxOlhP16OetGqBZNKNb6hDb3pELC0eFlrbvCanx9Ujqco+Qkes8UjGt7FpQNP4eSV3uQDQrzkpwST9npy5XIJqcLBHR0sYydWnOJm5ANKFvKfRIXy0hNf5rUpcbkOipqgRmGSWjBd4FiGZ1jazoGbZnFXgXICtFRwn3jAI/HcgKhbwXYWekrqlAVkxVkpePmnlJC/xUIKumqlkFXvJaZRoQzSqaUZwt+rR6+Ui+cLuuaUCivTw8CsbrbDIFyBVSVQ3Qq8CbA7lSqpJA0cxXci+gGdGaPzC7YnRwX0Bp5qz6pnIUyMpnDmmNsTrB9wq8acq6WiHvQWoVeM3cR34Jdu/LaIRonJKuzEh2ra2rZu'+
			'6taDONEOqM/tHnyg/dfKd5lk/vihGnQ/0XVWRvCoRzID/nFUggvEauFgnEVW5+sATCa+RqkUBc5eYHSyC8Rq4WCcRVbn6wQ0DopEn78nzsFKBzXOuW/v0I3Endzo3sSaRAAhHJ5GeUQPy0Fo2UQEQy+RklED+tRSMlEJFMfkYJxE9r0Uia3zeIOk4jnQIJRKfbtFYJZJq0uo4TiE63aa0SyDRpdR0nEJ1u01olkGnS6jpOIDrdprVKINOk1XWcQHS6TWv1HyeloKdbfNVKAAAAAElFTkSuQmCC';
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
		el.ggId="\uc635\uc158\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
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
		me.__21.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__21.style.transition='';
				if (me.__21.ggCurrentLogicStateVisible == 0) {
					me.__21.style.visibility="hidden";
					me.__21.ggVisible=false;
				}
				else {
					me.__21.style.visibility=(Number(me.__21.style.opacity)>0||!me.__21.style.opacity)?'inherit':'hidden';
					me.__21.ggVisible=true;
				}
			}
		}
		me.__21.logicBlock_visible();
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me.__21);
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNZJREFUeF7tnTFyFTEMhuUTcAeOQEcVUnAAuA0MM5CK0zBDRUvCATgINTVi/Gbfyz7HsmSv7JU3ei1eW/6/lWTZ3hDAf6YUCKascWPAgRh7CRyIAzGmgDFz3EMciDEFjJnjHuJAjClgzBz3EAdiTAFj5riHWAOCiF+M2fSszQmIiM9aAWOTdyAOxJgCxsxxD3EgxhQwZo57iAMxpoAxczgPuQsheJ2iCG2p+z5TXToQRbElXTkQiUoD2ziQgWJLhnIgEpUGtnEgA8WWDLULEER8DQDvAOAVAPwBgB8A8D2E8Fdi9JHbDAeCiG8B4AMA3CbCfgWATyGEf1LBF+NvACAuv++lz1lutweQbwDwnhDlJoTwSyJYeiwQQjjEYdpQII'+
			'j4EgB+A8ALQvSPIYToKcUfIv4EgDdJo0MUqdMBQcQIIgLJ/aaHMhRIVBARN4UswjsucGYPXXsAaU7qnLELlam9hJtjl72slmUvE6quwtfMXrILEC5p5/6dC1VHSfBTACl4x90CIrddPWXomgVI7irSfQjhVFxSV5VmDF3mgRQMvD1X54U203mJaSCFUHXxjnPukIBryV2jn7EOJFeRR40u3rEWjAhdT+CNFrlmPLNAWsJQyzM1Yo1oaxlIMZFT4lDL41kSvEkghZojG6qSsBVvwUy7DDYHpFRzSK8czRy6LALJJvLakNOjNlleluh9DwAQFwvqh2KmgGguXXt4SQK5y+rNDJCamkO62qEmV+tty25ALjepF56WgFTVHBVQcqu1KiEZkdiFhtTWAvjH8x7mk7aqiRWWqtQpYHX/0dPWsV0jdDE7zaqhy4SHEBO+mujK'+
			'UFKAdZv1TZQtCZ4TaHnJ1LyEG6/LAZWwbjhNkjAwrm6urv4Q7U4etsVLpB+9tuQl4tyHqqNOzbsC4RI597ac97Qk7ZZbKrmCkXy7Bf2uNVUJXdyYvYFQiTwePJHfSKSng8K20avSq0Oxq2ye4oQh8uHm0MWN2w0IN3DNykShLQWl9hv9zV7C6dITSO1kFXSnu8jlAE4corfqlaEwp/bLIZUXFrqCWHVOeQkVVkt2NYcu7iVQ95Ca6zyjSJSgNNrbHLr2ANLyxg1js3foGgqEG2yY6uWB1EJXS23CaaQWshpdfxdGhJeULnlTdlaHrpFATIeqtLbJHYY1LkaqEvwQIDN5x94JfhSQmbzjcas781UWJ9jW2oTrf3MO4QbYJUnIB1VL8NRdstQUTq9NQCYNValGT3JA47xECb43kClDVccEz26rdAPS+BbJg8nYllqbj9'+
			'Hq4qqrJxBTm4db+Y2qTboAaVyvb9Ws9/NDErw6kIOFqhTyEyiN85XcC8i+YNWrrIN6x1mcrJCNc246qawCwrlb75gyqH8tL8kmeE7DWiCHSuQUYCLBt8y95kuwkzkOJE8lVyy2AMl5m941oMXd4p9LOvLvId0JXt2Kr5r3+Svi9UOqIavKGm+cVcCBGHsxHIgDMaaAMXPcQxyIMQWMmeMecjAg8UZ5/CLVf3oKxDoud0tfVKnrmeE9iRTgtk5EnXgjPQUciJ6WKj05EBUZ9TpxIHpaqvTkQFRk1OvEgehpqdLTIf7HARUljHTiQIyAOJvhQByIMQWMmeMe4kCMKWDMHPcQB2JMAWPmuIc4EGMKGDPnP0T6iuomrW/TAAAAAElFTkSuQmCC';
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
		el.ggId="Image 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_9.ggIsActive=function() {
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
		me._image_9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_2') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_9.style.transition='';
				if (me._image_9.ggCurrentLogicStateVisible == 0) {
					me._image_9.style.visibility=(Number(me._image_9.style.opacity)>0||!me._image_9.style.opacity)?'inherit':'hidden';
					me._image_9.ggVisible=true;
				}
				else {
					me._image_9.style.visibility="hidden";
					me._image_9.ggVisible=false;
				}
			}
		}
		me._image_9.logicBlock_visible();
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me._image_9);
		me.__20.appendChild(me.__30);
		me.__9.appendChild(me.__20);
		el=me.__17=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 29%;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
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
		me.__17.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width >= 1500))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__17.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__17.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__17.style.transition='right 0s, top 0s';
				if (me.__17.ggCurrentLogicStatePosition == 0) {
					me.__17.style.right='30.5%';
					me.__17.style.top = 'calc(50% - (60px / 2))';
				}
				else {
					me.__17.style.right='29%';
					me.__17.style.top='calc(50% - ((60px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__17.logicBlock_position();
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
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
		me.__40.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__40.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__40.ggCurrentLogicStateSize = newLogicStateSize;
				me.__40.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__40.ggCurrentLogicStateSize == 0) {
					me.__40.style.width='48px';
					me.__40.style.height='48px';
					me.__40.style.left = 'calc(50% - (48px / 2))';
					me.__40.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__40);
				}
				else {
					me.__40.style.width='60px';
					me.__40.style.height='60px';
					me.__40.style.left = 'calc(50% - (60px / 2))';
					me.__40.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__40);
				}
			}
		}
		me.__40.logicBlock_size();
		me.__40.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__40.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__40.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__40.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__40.ggCurrentLogicStateBackgroundColor == 0) {
					me.__40.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__40.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__40.logicBlock_backgroundcolor();
		me.__40.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_3', !player.getVariableValue('vis_buttonbg_3'));
			player.toggleFullscreen();
		}
		me.__40.onmouseover=function (e) {
			me.elementMouseOver['_40']=true;
			me.__19.logicBlock_visible();
		}
		me.__40.onmouseout=function (e) {
			me.elementMouseOver['_40']=false;
			me.__19.logicBlock_visible();
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		els=me.__19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc804\uccb4\ud654\uba74\uc628\uc624\ud504\uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__19.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc804\uccb4\ud654\uba74", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__19.ggUpdateText();
		el.appendChild(els);
		me.__19.ggIsActive=function() {
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
		me.__19.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['_40'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__19.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__19.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__19.style.transition='';
				if (me.__19.ggCurrentLogicStateVisible == 0) {
					me.__19.style.visibility=(Number(me.__19.style.opacity)>0||!me.__19.style.opacity)?'inherit':'hidden';
					me.__19.ggVisible=true;
				}
				else {
					me.__19.style.visibility="hidden";
					me.__19.ggVisible=false;
				}
			}
		}
		me.__19.logicBlock_visible();
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me.__19);
		el=me.__18=document.createElement('div');
		els=me.__18__img=document.createElement('img');
		els.className='ggskin ggskin__18';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACrklEQVR4nO3cP2sTcRzH8fdd0n+i1H8EukoVB3cXJ5+AoI9AcHLsU3AXZ518Bj6DdnJwctDBQRzU2kHEgqUqrXFIBk1zl0tyud/1y/sFmXLkPvSdpKVwlwHPgJvAMe3RAV4BD1IPqeg+sAUcpR7yjxz40AVuAdcTjxlnOfWAKVwFbqQeMcZmDuylXlGgrbvG2U89oMCnPPUCLZaBgzNwcG0OfJr+yOqmHlCkzYHXUg+YwlLqAUWqvPO2gJc0+2ZYBr42eL55PQV2gF8NnrMPrAMvgNWig6oE3gZe1zIprt3hI4XSf1BV+VRu1DRE9bsIZGUHtPl3sGpg4OAMHJyBgzNwcAYOzsDBGTg4Awdn4OAMHJyBgzNwcA'+
			'YOzsDBGTg4Awdn4OAMHJyBgzNwcAYOzsDBGTg4Awdn4OBy4MqEY841MUQz6QBnSp6/1gUeM7gJy+hFTBmDN8CbxWxTDQ6AJ8AK8GfkuQ7wpelBkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkqToMuA2sMH4WxlmwDbeEq+tloE7wBInb2WYA/sA74B+yeNeQ2M1vR7l7Q5zYG/CixwucqHmcgz8Lnn+c87Jj/aofn17tACjv1r/e84bggdn4OAMHJyBgzNwcAYOzsDBGTg4Awdn4OAMHJyBgzNwcAYOzsDBGTg4Awdn4OAMHJyBgzNwcAYOzsDBGTg4AwdXJfCPha/QrL4z4cqTboUXOT88Lpt/T2VLDK65OWrwnPPIgTXKrxNahEtM6FIl8HMGF6A1+XW+AuwAdxs85zweAo+Anw2esw90gNWyg6oEvjB8NG0z'+
			'wTln1WPwTdc6bf4j61vqAVM4SD2gSJsDqwYGDs7AweXA5dQjCrR11zhnUw8o0OsCb4F12nWrhozBrtNiF/hI+36G7/8CwN1O7BtfIr8AAAAASUVORK5CYII=';
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
		el.ggId="\uc804\uccb4\ud654\uba74\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
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
		me.__18.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18.style.transition='';
				if (me.__18.ggCurrentLogicStateVisible == 0) {
					me.__18.style.visibility="hidden";
					me.__18.ggVisible=false;
				}
				else {
					me.__18.style.visibility=(Number(me.__18.style.opacity)>0||!me.__18.style.opacity)?'inherit':'hidden';
					me.__18.ggVisible=true;
				}
			}
		}
		me.__18.logicBlock_visible();
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me.__18);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODozNTow'+
			'MSswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTYrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6MTYrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY1YTIyOWNhLTE5NjgtZWQ0Ni1iNGY2LWM2YWViMGQ1MjI1YSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmNWEyMjljYS0xOTY4LWVkNDYtYjRmNi1jNmFlYjBkNTIyNWEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmNWEyMjljYS0xOTY4LWVkNDYtYjRmNi1jNmFlYjBkNT'+
			'IyNWEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY1YTIyOWNhLTE5NjgtZWQ0Ni1iNGY2LWM2YWViMGQ1MjI1YSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODozNTowMSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgUqjYgAAAMHSURBVHic7dy9ahRhAIXhd2Z/'+
			'kogS/1hIKzFY2NtYeQOCeAOClWVuwV6stfICBO8gqSysLLSwEAs1iSBiwGCUxLGYLXSzMzu7O/t9Xw7ngVQz7Bx8N9lFmMmKongK3ACOSUcHeAXcjz2koXvAJnAUe8g/cuBDF7gJXIs8Zpx+7AFTuApcjz1ijPUc2Iu9okKqu8bZjz2gwqc89gJbLAcW58DiUg58mr5kdWMPqJJy4JXYA6bQiz2gSpN33ibwkrBvhj7wNeD15vUE2AZ+BbxmAawCL4DlqpOaBN4CXrcySdfO8CeG2v+gavJbudbSEGvfRSCrOyHlz2BrgQOLc2BxDizOgcU5sDgHFufA4hxYnAOLc2BxDizOgcU5sDgHFufA4hxYnAOLc2BxDizOgcU5sDgHFufA4hxYnAOLy4ErE845F2KIzaQDnKk5vtEFHlE+hGX0JqaM8g3wZjHbrAUHwGNgCf'+
			'gzcqwD7GZFUYQeZQH5M1icA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFicA4tzYHEOLM6BxTmwOAcW58DiHFhcF7gFrDH+UYYZsAXsBt5lzfSB20CPk48yzIH9rCiKd8BGzYvcBZ4vZp/NaQB8qTl+mAN7E17kZ3t7rGXHwO+a459zTv5qj/LTStM2+tH63zF/yRLnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbnwOIcWJwDi3NgcQ4szoHFObA4BxbXJPCPha+wWX1nwp0n3QYvcn54Xjb/nsZ6lPfcHAW85jxyYIX6+4QW4RITujQJ/IzyBrSQf86XgG3gTsBrzuMB8BA4DHjN'+
			'AugAy3UnNQl8YfgT2nqEa85qQPmXLjkpf8n6FnvAFA5iD6iScmBrgQOLc2BxOXA59ogKqe4a52zsARUGXeAtsEpaj2rIKHedFjvAR9L7N3z/F7tKTAa8NAeFAAAAAElFTkSuQmCC';
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
		el.ggId="Image 10";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10.ggIsActive=function() {
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
		me._image_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_3') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_10.style.transition='';
				if (me._image_10.ggCurrentLogicStateVisible == 0) {
					me._image_10.style.visibility=(Number(me._image_10.style.opacity)>0||!me._image_10.style.opacity)?'inherit':'hidden';
					me._image_10.ggVisible=true;
				}
				else {
					me._image_10.style.visibility="hidden";
					me._image_10.ggVisible=false;
				}
			}
		}
		me._image_10.logicBlock_visible();
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me._image_10);
		me.__17.appendChild(me.__40);
		me.__9.appendChild(me.__17);
		el=me.__14=document.createElement('div');
		el.ggId="\ucc38\uace0\ub0b4\uc6a9";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 16%;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
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
		me.__14.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1500))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__14.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__14.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__14.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__14.ggCurrentLogicStatePosition == 0) {
					me.__14.style.right='16.6%';
					me.__14.style.top = 'calc(50% - (60px / 2))';
				}
				else {
					me.__14.style.right='16%';
					me.__14.style.top='calc(50% - ((60px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__14.logicBlock_position();
		me.__14.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1450))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__14.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__14.ggCurrentLogicStateSize = newLogicStateSize;
				me.__14.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__14.ggCurrentLogicStateSize == 0) {
					me.__14.style.width='48px';
					me.__14.style.height='48px';
					me.__14.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__14);
				}
				else {
					me.__14.style.width='60px';
					me.__14.style.height='60px';
					me.__14.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__14);
				}
			}
		}
		me.__14.logicBlock_size();
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__60=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc84\ud2bc\ubc30\uacbd6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60.ggIsActive=function() {
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
		me.__60.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__60.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__60.ggCurrentLogicStateSize = newLogicStateSize;
				me.__60.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__60.ggCurrentLogicStateSize == 0) {
					me.__60.style.width='48px';
					me.__60.style.height='48px';
					me.__60.style.left = 'calc(50% - (48px / 2))';
					me.__60.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__60);
				}
				else {
					me.__60.style.width='60px';
					me.__60.style.height='60px';
					me.__60.style.left = 'calc(50% - (60px / 2))';
					me.__60.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__60);
				}
			}
		}
		me.__60.logicBlock_size();
		me.__60.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__60.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__60.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__60.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__60.ggCurrentLogicStateBackgroundColor == 0) {
					me.__60.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__60.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__60.logicBlock_backgroundcolor();
		me.__60.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_6', !player.getVariableValue('vis_buttonbg_6'));
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
			me.__16.style.transition='none';
			me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
			me.__16.ggVisible=true;
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
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
				me._timer_2.style.transition='';
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
			me.__16.style.transition='none';
			me.__16.style.visibility='hidden';
			me.__16.ggVisible=false;
			player.setVariableValue('vis_buttonbg_6', false);
		}
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__16=document.createElement('div');
		els=me.__16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucc38\uace0\ub0b4\uc6a9\uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__16.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub9c1\ud06c\ubcf5\uc0ac\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__16.ggUpdateText();
		el.appendChild(els);
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
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		me._timer_2.appendChild(me.__16);
		me.__60.appendChild(me._timer_2);
		el=me.__15=document.createElement('div');
		els=me.__15__img=document.createElement('img');
		els.className='ggskin ggskin__15';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAJRUlEQVR4nO2da8wdRRnHfy9yqZFSX6g2pRTbSN+Ctt0TA0EjgRIgEINCIMEQEY2AJoBpJAgi4YOIRuQD5RJuAiEqkoBQ5aYihIJUqdcqsdgWe+FmLUhLtWJL5PhhWHs4nJ2dfeaZ2T1z9pc8SZP37Mx/5unM7M7lmTFaYpABRwPzgdnADGAKsAewHdgKvACsA54CHgZW1CG0xZ1DgcXAGqArsGeAq4GPRNbdUsJhwJ3InFpkPwQOj1mIlrdzOHAXuo7tt3uAI2MVqGUnlxHWsf12eZxitewNLCWuc3NbBkwLXsIRZh/gOepxbm5/A94buqCjyHxgLfU6N7cNwETY4o4WC4D/UL9je20zbUtWoYnOzW11wHKPBN'+
			'NornNzuzlY6RMnw7zQ1O1AFzs4UB0kS0bzW26vrQhSC4kyj+Fybm4n5gUYU62OtJgOrATerZjmc8AqzOTI08CrwF7AQcBCYC6wv0I+a2g/naxkwBb0WtRrwGnALiX5jgGnAv9SyPOTHuVPGu0xdzXVW9P7MS3cJ9+lFfMcCSbQde6vMIv6EnYF/uyZ/3uEeSfJHOB59Jz7YwVN++A3JXqGgoYkyDDjpGbL1eKjHjruVtQxtGTod8vabBJq+W0ALUPFTJrvXIBrhHqeDqRnKJgPPIuec5cE1LpQqOnFgJoaTYbZrtr0lpszXajrH4F1NRLtMffJCJrfBfxToG1rBG2NQnvJ7xeRdO8t1L05kr5GkAEb0XPu/ZG1SzT+PaLGWtEec58k7kLNuUKd6yJqrI35DLdzwQwFEq1PRdYZnX0x45CWcx8ivnOneuh9JLLWqGSY'+
			'9VYt5z4aV/7/WVJBY79dUoPeKGTod8tla7kh+LJQb26HxpccngmGf8wF+JRQb26b4ksOzwTmILWWc++lHueeLdTba5dGVx2YDrpLfjFmqAZxWgWNRfZfYM/YwkPSoe2We+362MJDMpPWuf2WzFadBQzPkp+NcypoLLNzImsPRgf9llsHmi335cjag5HRdsuDLIlzSdPQde4T1OPcTwv1FtmiuPLD0EF3ye8Bx3zPAh7HHDPRQOM7t9c+q6SrVjrottzluLXck3qeWQ/M8iyHdrd8gaeeRnAg9Tj3EwOe3YL8gJi2c28U6mgU70D38LXrkt/BljRewGyjqcKZimXoYsIcJsFy9CrlUcc8T3ZIa1mFMpyhWIYuCR1JWYxepSzH9AZluDg3N5f1Vu0Xqm845DkUHIKuc1265WMEaR9YkuaLiuVIYswFeCd6U5CuS34LgR'+
			'2C9P9Sku7xSuVIpuUCXIhey3WhSrc8yM4vSX+VZ/rJjLk5v0fHuS4t92KFvF4FJlnyuMAj7ascyjBUTOBf4VXmlr+rkF8XONaSh+2Ty2bJjLm93IJfRUtO1n8IeNAz329b0p8CvF4xvQsF5Wg8u+G37WadZ/6/9sh7g2LaZ3uWo7EcgbyCd2B2d/gwC3jDQ8MHLGlf55iGardcx15fGz4XT3wRE2jMh/XAeR7P2+5TWOHw/I3AFzzybzwPIGs5v1PW8SehjjssaR5W8mwS3fI8TNi+IqTBv7T/1y8S6rAFPXmf5bkkXqiOxCz5FY1Tk4BXkFXsHGWtHxTqeJ7iYW8K8O8BzyTxKbQvOwtUxDiyN+hXcFtEqMIk5CETijac78rblz2TWPLrsPOUny3s/DiwjeqVGuoM7GqBli0UO3gM8xmX/zaJ6ccOb92J8Yzlt1OR'+
			'xaFYH0D3LshWgTZjAqYU8dKbv0ti4WDQKb+NmK5qEJORteAd2CtVwjjmfI/EwUVz0vlB7nuUtdZC0Sm/7di3uvx1wDMuZpsHljBoL5aL2XqoDvBNZZ21kGF/WVpgefYnluds9iPlMvxUqONnljRrmVTSzjTDzLnals5s04krhfmeAOwnfLafA5D3CLbYkG8I0/RC08EzMc7dveR3cy1/8zkfdKvHs73c4vHsb5Q0NI4qgT2XWNKZjN9q0rWe5fi6R96vY17OkiOj2qb0zdh7jrsrpDXIviYsh+/J+nuF+TaaDNm364ctaZ4oSK/fbqdahBmNsAmLKuQ3FPgE9rTdYD2GfE661+5zLMfpCnl1sX8dDB0ZfsdJVpWkL41wntuVmK23ZWidrE/qboQMnZC8tvtuZ3mk6/oWrNEt55bMVeuad/nZFsfBbGKrmuZjjuXQdK'+
			'5ts91QMR3dwJ4u8ZZXVkjPdcz9vGIZyoaaoSFD9y6/pY757onbqs4VjulpHuEsm1cfGjJ0w+C7nvLLOagkvbsc09HslrvA5yqUobHMQd+5koAn3ypIr44xt0six0mmoRtkzDew52V96d3u+JxmkLEuiSz5TUb3XKtWkLFjMXfr3ub4e+1QRWfqFKN+NMMmaAcZm+74O+1u+Rq1EtRMf1fYJOe6ou3c78SVH44F6FXKksjac6RX0BTZV+LKD8tD6LXcOtBuuclEbgWzaN92ywl2yznSg1+9Fusuv36035Zviis/PPPwrxTXuWBttONQnRtXfhyuxq9SpDNUvmh3y0m9UPXis3j/LPqHv1zQdm5y3XKOz8vVa/iH15VwlkCrzZKZxBjERcgr5pQa9GoH9kxm+rGI7yGrmDouH9bulpNYOCjjCWSV8/PIOrWDaSc75vaz'+
			'FlkFxXzj1P4UGomWm7MJWSV9PJI+7W45+TG3n63IKuqICNq0u+UkYmJUJQ8rUNWOD6yrHXOVWIeswkLGdtLeZpPsDJULy5BVmu00uw/aLTepJT8J30dWcRsDaGm75QB8FXkFnqSoQ3vJL4kIchr4bNPZhk5sDO3v3JHvlvvxufBxLX6rSe2SXwSuxa9S/4gJ9FUVn8sqBlk75hagsZtyPXAcbq15LvADhTx7bSQnMaogDULWbxsw4es/BszGnJKYiomZsQh4WCmfXhu56UcJGfoV38VEmvUJjVRmI7Vw4MsjhHNECGvH3Ip0qN9prpZESN46uJz6nVdmSQTTrpM/UL8Ti6x9W1ZgHPlGgJDWjrmKzMDcIlK3U3NL4uqZpjEb+YYATTs9dEFHmRnIbwLTsC+FL2ILwA3Edewa/O4ybBFwFPA4YR27HbPc17SLM0eKUz'+
			'H39Gk6dhuwGP8rYlsU+Qz+B8dXA5eSUMTWJqF1pnc2sBA4+s1/jwN7YW5f2Q1zydQOTIyrrZgNBo9huvtfKmloGcD/AG56CJOtna8RAAAAAElFTkSuQmCC';
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
		el.ggId="\ucc38\uace0\ub0b4\uc6a9\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 55%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
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
				((player.getVariableValue('vis_buttonbg_6') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__15.style.transition='';
				if (me.__15.ggCurrentLogicStateVisible == 0) {
					me.__15.style.visibility="hidden";
					me.__15.ggVisible=false;
				}
				else {
					me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
					me.__15.ggVisible=true;
				}
			}
		}
		me.__15.logicBlock_visible();
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me.__15);
		el=me._off=document.createElement('div');
		els=me._off__img=document.createElement('img');
		els.className='ggskin ggskin_off';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YW'+
			'JvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMC0yNFQxODoyODow'+
			'MCswOTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6NTkrMDk6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMTE6NTQ6NTkrMDk6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmIwMmZjOGQ5LTk0ZmItNWM0NC1iZjA1LWE5OWJmMDBjODdiNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpiMDJmYzhkOS05NGZiLTVjNDQtYmYwNS1hOTliZjAwYzg3YjUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMDJmYzhkOS05NGZiLTVjNDQtYmYwNS1hOTliZjAwYz'+
			'g3YjUiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmIwMmZjOGQ5LTk0ZmItNWM0NC1iZjA1LWE5OWJmMDBjODdiNSIgc3RFdnQ6d2hlbj0iMjAyMy0xMC0yNFQxODoyODowMCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsiQM2oAAAvASURBVHic7Z17sFVVHcc/XEFo'+
			'fIGRIAlJykUKOLcxMysLC9OpJNMeGihTgBkXrLEyzGymicBHTQjV5MWcXlr2UEIUh3wAiXExi2jCEB0YDCHKkYAhIHH1x+9u3BzO3nvttX5n733O2Z+ZPcNln/XY53vWY6/f+v1WL2MMJXWnAowHxgDDgdcDJwB9gf3ALmArsAn4K/AwsFaj4F6lwHXjbOBy4IPA6Q7pnwMeBH4O/MG1EqXA+rwLuAb4mGKevwHmAyvTJiwF1uPdwEzgo3Us4z5gAfCYbYJSYB1mAzdkWN4twJdtPlgK7MeJwL3Ae3Io+wngEuCfcR8qBXbntchM95Qc67AdmaHviPpAW3Z1aSrGAE+Sr7gAg3vq0R71gbIFp2cssAZ5hy0KO4GR1GjJZQtORxHFBegPPF7rRimwPYMoprgBI4A7qv+z7KLtqAAPIWNe0TkL+GPwRylwMhWgm+K23G'+
			'r+AnQEf5RddDyjaSxxQX6QFwd/lC04mpOB9cgERovngQ3AcuBp4D/A8cAoYBwyEx6mUM5Gel6dSoFrUwFWICY9DfYB04C7gVdiPtcLuAxYCBzjWeZlwD2lwEeiPeZuBD4EPJMizWnAEuAMj3JXAONKgQ+nHViHnrirka53v0Pa3siE6U0e5Z9UTrJeZQTwKHriLgbOwU1cgJcRE+QmjzpMKFuwUEFaWz+l/FYj4mrwTiJWqSy4txRYf8zVFDdgB/A6h3RPtXoXPZTiiwtwj2O6Y1pZ4DHAKvTEXUR9xAXZk+XCCb1Vq9E4VBDDwdFK+a0GPqKUVy02OKbr24otOBhztcTtpn4tN2AXsMchXZ9WE3gQumPu48DblfKKoy/QxyHdwVYSuIIsHGiJ+wBwrlJeSQzFrd4HWmUM1h5zu4GLlPKywfWHtLcVWvAY9MU9B8hy'+
			'AeETjun2NLvAQxB3Dy1xf0f24g5E3GFc2NHMAlcQm2t/pfyWA+8nW3FBTIeuLG/WMbgeY+77lPJKw5cI7c5wYFkzrkW3Iz62jTzmAkwEfuaR/l80obmwHfG80xL3fvIRdzp+4gL8AJpry04H4iitZfLrJptFjGomAT/1zOMVZLvRnmYZgztovOXHWkzEX1yALnqWNpuhBQ8FnqUcc8OchIzBDb8veixi8tMSdxHSLWctbid64s6gR1xo7BbcgX63nMeYq9lyX0QWRg7RqC24EU1+tdAUF+DC6v9oRIEDLz8tcVeRz5h7Bbrifp6Q01lAowncgZj8tMR9EFnnTRJ3GrKmfbxSudOBnyjlBfAp4Laad4wxjXJ1GGP2Gz26jTG9LMq9JJRmszHmVM/nmKj4DMYYc11ceXmLZnudYfIRd0KNtDuNMcMcn0Nb3NuTysxbOJ'+
			'vrKGPMNsUvZZmxE/etMXlsNcacmPI5pio+gzHGzLcpN2/xbK5uxS/lMcsyL7XIa1WKZ5ii+AymJz+rsvMWL+map/ildBvpDTTEDbjRIr/pOtU/xDctyjx0FXmh4yzkdUiDNditUJ0PLEuZ9yjg7zH3X0CcyTXoAj6TJkFRX5Neg/tu/mrux07ccchOybQsSrh/lUOetZhDSnGhuAJfgxgRfFkDTCBZ3EsRO7LL3uORwBdj7i8hnfN3LabiGOy0qAK77iIME3TLSdwA/NqzrBuJt0P/0CPv+T7piyhwO/AWzzwCw4HNBGOkZ1kgK1xxEWcfdcy3C/icY1qgmAJbxUGOYTHpTH5XAmcCSz3LjduUtxHx2E/DLBzG3GqKNovugzhauW672YwceuHKGmT27sIW4A1KeXcC33esx2EUrQW/A3dx/4fEtPDh47hblYYRHzDl'+
			'CEtPBF0oiQvFE9hHoJlIoDEfNgPXeqQ/L+beWov0t6PQLYcpmsCuOyr+hHw5GsxD9lW7EOdisj4hbSdwtWO5kWQt8Ghk5SeKNzrm2+WYLgrX15IRMffiepdZKHbLYbIU+DzgKSRcXy36Ibs1XHB9DYniYcd0g4n+TncC/63x/13AzY7lJZLVLHoIcnQbRAs8AFm3TTvJegkJMXTQrWo16YfsTDw2ZbrdyLPWCrfQG2nF4ZjTC5BVu7qRRQvuQLz8QN4H44gL1BnFVnTFBQkeus0hXVz9D/bkGzCVOosL8quqJx0cvvsx7gd1VM+VluMc0iTRRvrWC/KKFdUlmlCec/BbvrSmni24nSO3th5L9I9qP24tcQj+oXerOQH3+UDUMwzsue4jw1PS6iVwlJffAKJ3Ju5GDnpKSx/cPeCjOBe37+ZFDu+Gw5wCzEVOK8uMeg'+
			'gcRLMZUuPe0cQfJuVqVvusY7oopjumey7m3jrgK475OqMtcOBZHzcTjrPzJi0GRPFh9E4hOx24wDHt0zH3XCaQ3mgKPBQ7j4M489xqj/Lv9Egbxmfy86RSHdTQEjgI7GnjcRAX8+khosewJM4HvuuYNuAbuK+Hv4x4ShQKDYEriKXEdovNuJhyd+P3JXUCX3dMOwn4qkfZS5FFl0LhK7CLl19/4G0x93093L8G3AWcnSKNRtiERzzT1wUfgX0Ce8aF3v0t/i3hk9i3xivRCZtgfex6lrgKXEHsm66BPS+OuWeQFujDPMR4n0Qn8GPPskBOAV+nkI86LsYGrTMOBhF9cvWpuJ82cicwxeJzGt1ywGASjlrPi7QtWPMsv9r+rMJm4FaHPFeSvbi3UlBxIV0L1j7L7wHkRLA41hO/QSDMEuxC/F6F3u6PZ9DZdls3bFuw'+
			'dmDPFSSLCzLbtjHbfQs7caeiJ+4B8onrkQ4LD7WKMWafonecrZdfcI1KyO9XlvlMUnwGY4z5dIpnyO1K+sAIoy+ujfN19XVTRH4rLNNri3ubwzMUTuBBxpgtil/KYuMmbnDNrsrvLst0nYrPYIwxczyeoTACH2eMeUHxS1mtVOELjDF7jDE/svz8FYrPYIyEYchdtDRX1Cy6m/jlxDRox348GbuJl+arEIghY6ZifplQaxY9m+KKC/mIewcNKC4c+R48FtmNocEi6nvcWxQzkO2oWlwP3KSYX6ZUC7wMsav60sjBtMPMAL6nmF/mhAUeg86CeV7xluvRLU9TzC8XwmOwRjcUnOWXR2BPTXEX0gTiwqsCjwY+4JnXErI7yy+MdmDPmehFxsmdQGDfBwqi2WTNJHTHyOvx39dVKIIxeBuHO0Wl4XkkbIK2f1AS2mPuQp'+
			'qo5Qa0IZMrV3H3IbsQsxZ3GvqLGE0nLoifkI3ZLorJiHE+S6ag6/A9DZkxNyVtxAcOiWMH8EvFutgwCV0x5irnVzjacA87lPUmM61DowIWkoOvUNa0UdtJzIYs9wFrnOUXZi5NOuZW0xs3R2eAv2lWJAbtV6GmHnOracM98NguzYpEoN0tL6CFxAUReL9j2nqETgijfWjUQjKIiVE02qgdEcaGN2tWpArNs/xAVqhaYsytpg0JXeTCezUrEmIiusuFM2hge64vbbi7iFQ0K9JDPbrlhrbn+tKGe9iEQegGFNE+y6+LFu2Ww/Qyxvhs09mLuG78w7Me09FtaQ2/E0OLwJq0Hfe4UJuQIJyuBgdtq1BD76HSJrAH+xxKMRwJ5zsw6YM1uA795cdS3BCBwL7WmbFInI4LsQtHOBK4G90oqwsox9wjCG+6W0qNE6Qd2IK4'+
			'hi5BPBL/jfgTn4bs17qI+AMsXGip5cc0hAUOwjJoswsJ0uK6JJrEXFrAKuRK9b7oR6jfAkY9aMptNppUu658IZdauDGHUtxEqgVeC9ySQz3S4nyWX6sR5V34ZySYdxGpexj8ZiJK4AHABuQshCJRjrkpiQrC8hJyQOTWiPt5MItS3NQkhVEajngtuKxSaTIZXfeUliEpjNImZCx2PQlMg2spxXXGJk7WVmQpUiu+lC3PImfyfifjcpuKNKEMrwbGA7+vU10CDiDmvpFIaMISD1xPPrscWRQ5U7Eue5FZ8rfxP0W0pAffo+0mI2F7fXyLNwK/QAz0hQ3q2ahonV04HAnVP77n38H5SP2Qc40OIl3vHsT4sB2JV7kSeEKjAiW1+T+SupENPZqoEQAAAABJRU5ErkJggg==';
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
		el.ggId="\ucc38\uace0\ub0b4\uc6a9\uc544\uc774\ucf58-off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 55%;';
		hs+='left : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((55% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 55%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
				((player.getVariableValue('vis_buttonbg_6') == true))
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
		me._off.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me._off);
		me.__14.appendChild(me.__60);
		me.__9.appendChild(me.__14);
		el=me.__10=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc84\ud2bc";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 2%;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
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
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__11=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
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
		me.__11.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1470))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__11.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__11.ggCurrentLogicStateSize = newLogicStateSize;
				me.__11.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__11.ggCurrentLogicStateSize == 0) {
					me.__11.style.width='48px';
					me.__11.style.height='48px';
					me.__11.style.left = 'calc(50% - (48px / 2))';
					me.__11.style.top = 'calc(50% - (48px / 2))';
					skin.updateSize(me.__11);
				}
				else {
					me.__11.style.width='60px';
					me.__11.style.height='60px';
					me.__11.style.left = 'calc(50% - (60px / 2))';
					me.__11.style.top = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__11);
				}
			}
		}
		me.__11.logicBlock_size();
		me.__11.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__11.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__11.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__11.style.transition='width 0s, height 0s, background-color 500ms ease 0ms';
				if (me.__11.ggCurrentLogicStateBackgroundColor == 0) {
					me.__11.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me.__11.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me.__11.logicBlock_backgroundcolor();
		me.__11.onclick=function (e) {
			player.setVariableValue('vis_buttonbg_5', !player.getVariableValue('vis_buttonbg_5'));
		}
		me.__11.onmouseover=function (e) {
			me.elementMouseOver['_11']=true;
			me.__13.logicBlock_visible();
		}
		me.__11.onmouseout=function (e) {
			me.elementMouseOver['_11']=false;
			me.__13.logicBlock_visible();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__13=document.createElement('div');
		els=me.__13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubbf8\ub2c8\ub9f5\uba58\ud2b8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #595959;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 46.67%;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
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
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__13.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubbf8\ub2c8\ub9f5\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__13.ggUpdateText();
		el.appendChild(els);
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
				((me.elementMouseOver['_11'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__13.style.transition='';
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
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me.__13);
		el=me.__12=document.createElement('div');
		els=me.__12__img=document.createElement('img');
		els.className='ggskin ggskin__12';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABLRJREFUeF7tnGuS00AMhLMnA04GnAw4GZTAqjJeJ7HV3Xo4mz+7lY0nM/rULc241m+3Oa/Py1T956fV1P29n8t7vzbLsvf9b61X/NZ6drebBfrrBgQy5e/Lxd+QQZTXdgTiEDzrVetvCacTkCwQe4ANTgvVdABSCWILpxxMJZBOINZgSq2sCojZgxdrVY1Axy1RSwWQH7d/3dOEVzqUTCBdLepIYnzJ2sdkATEYpozJrxS1ZACZUC+OJoocihrIlWA4NCkUJZAr2NQ95chqihLI76M+MPBzdlBpUOgvFZBJrW00qBIoCiBXrBv3oNHrCRvIK8FwSNR6wgZy5bpxTyVU62ICyVSHBcEPAS1Qfjdwe1cx67yMphImELU6HMLZW7'+
			'EGaX3nMVrEH11HUwkLiFIdURDbAPoNKJVqKAWeBUSlDsoiN2SUyQPHEx5gufWpyDqaL+94jeoUAZ4zA4hiEwgv7GChYCsbriUMIOxFZcEwZgqlQPNHgbD9WFEznomFvYbLAKmA4bCYtgvZFqoQpl2hc3mmhEd/Z1tXeC3hC8ndVaU6HBTTusK21QUIMg9EGetrmSoJJxgSCFZGQZ7LorGMw6ol4TUhQFiTD2cTGQazDR4NJOy3H0D+jwCrw0JUKmByK10XEozSiStILGOWrisKhNWRhL1WCIRVG0NW/AHkPdmXBmLhiCaFSiQjLcuCUTpxFY3qdSHZ+QHkcVaEYhu6iNyNhIqfSCGs04ewFSNAWMWvU6fFAhJeEwKENflwNglUwrLh8HEQAoS1F7G4drAtZoKNBxKWOFElLHVAikcUwmx9q1XCVEcpEFZh90RHEyQq'+
			'GKY6wnYFkVxWzqwjNmSFdbGTqhQI27ZsPGhBJyXCtio4yRkWwc6wLCgKGHAyMYCwbcuTHF7cA7UokoiSSAwgCttax5IJRv14Dzie8ABL5FQZt1aL/R59yJgaBEUdcAFapbHKtrauY12YPeDyyEMt/T+n7GGZGU8foiiZpRALnFoleyVh/RTSvaeUnmy6oI9TYkkZRLQngaKTfDFFHUzL8vUzd7zJMYW+jpbYtIGW5Sh6eyhSCRfT1KFQiLoFTojv6a+gJjV1sKQW+HTEhBdQ1aFSSFYLLIzz4aHpCU0f8IVUQleHSiE27iuoRJLMkkFfoOOSqEOpkKvvS2SJLBv4wiqRqSNDIVVnXIfbpMAHpUksHfyCZ1xSdWQp5CoqkcPIBHKFNjjDTVL/WWbywWOKOjIV4rWz4iZWoG6/uyRFHRVAJlpXmjoqgEwr8KkwqoBMum'+
			'eSZlVukulfOGhvkq6OSoV0t64SGNVAOltXlXOk7kP22s+OXVeZOjooxObQacNYCqMLkE71pMyqqrusrX11sK5ydXRSSLV1tYDRDUiVdbWB0RFIhXWV1421f7eaTMEuvpU6OirEkyWjFW4HozMQdT1pCaM7EOXRSker/usObScmrCdt1TEBCHt/0hrGFCAsKO1hTAKCFvmKh9rsnW4/fa97DVkvANk0jlnnmIkCRb7D4wOfKqPbae/hCZ+8fzKibnQ/OjkC58hOfhyMaUV9C+oRlJEwpgO513mN6aj2rGBaUd9bgyvFnxQUfYTTEauUf+YP0q/2ZbAn3a4AAAAASUVORK5CYII=';
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
		el.ggId="\ubbf8\ub2c8\ub9f5\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
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
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__12.style.transition='';
				if (me.__12.ggCurrentLogicStateVisible == 0) {
					me.__12.style.visibility="hidden";
					me.__12.ggVisible=false;
				}
				else {
					me.__12.style.visibility=(Number(me.__12.style.opacity)>0||!me.__12.style.opacity)?'inherit':'hidden';
					me.__12.ggVisible=true;
				}
			}
		}
		me.__12.logicBlock_visible();
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me.__12);
		el=me._image_12=document.createElement('div');
		els=me._image_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_12';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABMFJREFUeF7tnP1y2yAQxMWTtXmyNk/W9Mno4IEZokq2fLd7H9j5JzOOrQA/dvdAMmVL8lNr/dmbOn7/mJo+Xvvqr/3ddeurlDL+FrrHJXLrOoRfOxCaJn+2D5dSfmsuwvxsOCAThDHrWf0PCScMEEMQR4A/o6jGHYgziD0cdzBuQIKBmMG4WpkLkFprC9UR1qyM0F7XRS3mQGqtf7ZtYwe2Fsb4vDkUMyCBLeoKvA+rdYwJkA6jKSPzj4la6ECS5MXViUKHQgWyGAyTXKEBWcSmzpRDyxQmkHrVBxK+r21WfjDaTQGSrLSVjisFChzIorlxBg0e8lAgLwZjQILmCRrIyrlxphKodcGAGKuj3f27bQL2G063u4EHdxWt9stgKk'+
			'ECYavjBuHZLYwOqe2dMeHAVAIBQlaHCMTeX3ob28ssMJCARwFhqQPSyRkOc/KUUtTjqb4AsYMwXz5QS7Mwxmanus0IIIz7G+qOXVnt1VrRylZnCQIIulMmMKaqDK0UVftVQAh2Bc+MR0oh9GEZIOYwBizw3pvKtrQKgdkVokJ5pIazv6NvFWj6IgYClrqbOiaVIJ+EEdtWCCCaGSVVBbkUFk+wCEBUnosC0qsuVAkv7pMGCKrx4tmEhAEug1MDEfvtG8g0AqhVboT82O11QSpHab80luXacLQ6pmrLtV8iIMC6Xey1RCCobBRZ8RvIjixw1Z4SSPu+n2hSEBWSz7J6ieja8DeQ/6X9BnJnVkiVL7YLVNm7bZvIaxkKQe7PeQBBVSNhKi0gEHGfNAqB7Y5KZxNaJUDVi7eDNECQDwq42xZQHW2epAciljhKJUB1qEp5'+
			'sUKQpW8fVDeVgNXhCgQV7DcmXlmCVIfGrm5joJE8cE9rNMPcuoBbJaMP4vxQAyHYlioQn51caKtCqFylEPBtz3k8VbPsChgGDK1doRSCLH9NoBBsCmJXECAk26KAYR/vgShK1JZFtK1vULo/i47mY4PoDYXYLAoIy7b2cdC+vNMOuHx4qOX0zal2WKbF6UNxgBip5Cir51NIj04pvZLvkPcg7AqWIR2IlUogAwi+CEQdUCAG4Q4eQ9zlUOpgAIFtyeOGi34lmDrgQF5RJUh1sIBANxzp81v3D6DqYAF5mXBHq4MCxLEE1s315z8NVwcTyPIqYaiDBqSrZOWKi6IOKpCVKy6WOiyArKgSmjroQFYMeKY6rICsFPBUdZgAWUgldBiWQNKrhG1VYxkEuUF1ZU1Feqjgyr9GvMdEHWYKGSNCfLgAMein17BShweQjNZlpg'+
			'5zIAkD3hSGC5BMK3hLqzIP9dmgCc8EMzLEXB1uCklgXS4wXIFEti4Pq3K1rKkMjlh1uanDXSFdJZF2hF1hhAASKU88rSqEZQWzLnd1hFFIAOsKASMUEEfrCgMjIhDzqitCbsyrWrPt96tLaeNVfCh1hFPIFPIWpXA4GGGBGORJSBihgTC3VqLlRugMMdgVDquO8AohrE9Cw0gBBAglPIw0QAAhb36ozdUyf/++cOuQs45o1ieRQzwtkK4SyUre7WA0iUrSKES4aEyRG2nK3jv2dWUlnw5GqlDfw3nwaGpKGKmB3Km80lRURw6QLkPuKOV2UlApRXSEkySAGZ/5B0jLjoPzuUiDAAAAAElFTkSuQmCC';
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
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_12.ggIsActive=function() {
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
		me._image_12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_buttonbg_5') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_12.style.transition='';
				if (me._image_12.ggCurrentLogicStateVisible == 0) {
					me._image_12.style.visibility=(Number(me._image_12.style.opacity)>0||!me._image_12.style.opacity)?'inherit':'hidden';
					me._image_12.ggVisible=true;
				}
				else {
					me._image_12.style.visibility="hidden";
					me._image_12.ggVisible=false;
				}
			}
		}
		me._image_12.logicBlock_visible();
		me._image_12.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._image_12);
		me.__10.appendChild(me.__11);
		me.__9.appendChild(me.__10);
		me.__7.appendChild(me.__9);
		el=me.__8=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\uc2a4\ud0a8\uc81c\uac70";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : -40px;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(90deg, rgba(55,56,89,1) 0%, rgba(24,22,40,1) 0%, rgba(48,50,69,1) 82%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
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
		me.__8.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 560))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__8.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__8.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__8.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__8.ggCurrentLogicStatePosition == 0) {
					me.__8.style.right='-30px';
					me.__8.style.top='-30px';
				}
				else {
					me.__8.style.right='-40px';
					me.__8.style.top='-40px';
				}
			}
		}
		me.__8.logicBlock_position();
		me.__8.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 560))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__8.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__8.ggCurrentLogicStateSize = newLogicStateSize;
				me.__8.style.transition='right 0s, top 0s, width 0s, height 0s';
				if (me.__8.ggCurrentLogicStateSize == 0) {
					me.__8.style.width='38px';
					me.__8.style.height='38px';
					skin.updateSize(me.__8);
				}
				else {
					me.__8.style.width='50px';
					me.__8.style.height='50px';
					skin.updateSize(me.__8);
				}
			}
		}
		me.__8.logicBlock_size();
		me.__8.onclick=function (e) {
			player.setVariableValue('vis_footerdownmenu', false);
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
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
		el.ggId="Image 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 30%;';
		hs+='left : calc(50% - ((30% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.__8.appendChild(me._image_3);
		me.__7.appendChild(me.__8);
		me.divSkin.appendChild(me.__7);
		el=me.__3=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 1%;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__3.onclick=function (e) {
			player.setVariableValue('vis_door', !player.getVariableValue('vis_door'));
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background: linear-gradient(90deg, rgba(55,56,89,1) 0%, rgba(24,22,40,1) 0%, rgba(48,50,69,1) 82%);';
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
		el=me.__6=document.createElement('div');
		els=me.__6__img=document.createElement('img');
		els.className='ggskin ggskin__6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAVNJREFUeF7tm9ENwjAMRM+bMAqdDBiJCegIjMIGRulHVdoi1SgkkfIi8WeR5hLbd45j6nxY5+tXGAB3f0g6NwrcaGZD5Nt+AcAjE5S2NbPQmkLGaTHuDgCldzUyHyegkguMkV3KaLsJxjVOQDjy5gJgLyMBQAUX4AREyQcukAkBYsAOLScIEgTLawGyAFkgqMEzJYGkTDe1CYIgQZAgGCryhIy/VITIAmQBskCsFE0azIQAPAAiBBOECq/vKdECFbTAU9LdzK6Zgvvhv2klCyw/+CYpUeMiN0WtADCdAEmXBRJDCRBaAWAWQ+4+uUEpd2gOgMPOm8kQAGCCMEGYIExw1bIHFa5AhSmKUhSlKEpRNNSgnIkJczmKFkALoAXQAm'+
			'gBtMDn+yXEEGKIHqFQ20/ImB6h/Wdz1AN6rwe8JKXrsRrjJCn95lEiDfb9drjGNv9zzjcvRwpfk/GILwAAAABJRU5ErkJggg==';
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
		el.ggId="\ubb38\ub2eb\ud798";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__6.ggIsActive=function() {
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
		me.__6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_door') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__6.style.transition='';
				if (me.__6.ggCurrentLogicStateVisible == 0) {
					me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
					me.__6.ggVisible=true;
				}
				else {
					me.__6.style.visibility="hidden";
					me.__6.ggVisible=false;
				}
			}
		}
		me.__6.logicBlock_visible();
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me.__6);
		el=me.__5=document.createElement('div');
		els=me.__5__img=document.createElement('img');
		els.className='ggskin ggskin__5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAc5JREFUeF7tW9tRxDAMlDqhBDqAq4RS4CojVwEt0IkYZewZz+H4IV+IRTY/+UjsWCtZ3nVkppNffHL7aQgAEfkkotcJQFyY+WIZxygAYvnoHm2Y2WSLqVE0QEQAwB7etPSJCJhkClyYebF4sNZGRDTZxoT7RERvaZtZIuAhANwZ+9Ky0rgEoNFQjahb8LYud4uIfBHRs7sIEJEPItryaGooMbO+m708AxCXzV9ereWA9Ll3AK4l77YAAQAc5wCdAogATIFChkcOaEAASRBJ0C8TxCqAZRA8AEQITBBMEExwe7OjgQgSmCCYIJig201RUGFQYVBhUOHTU+EbMw9VlXgnQpHsrX+HLLrAOwDXgMC73i1/dd0DEL2uf4ct9QT/Bo'+
			'AW4ZN7BwBADEEMQQx5LZGBGoQahBqEGjy9GgQAFgWIOsEEAWiBM2uBUG+87iXMUCydFjSvldwliRuO2HQnwWC0dh0N100VPTPwnVaRW+T10Jmh3g/2ApDxdjd4tTFOB8CGt4vl8zUjS8+nASDnbSKqTqsR49c9ydEOetrfT4GMt7W7h4f5dBEQBpSeHFl3ikcJUo8z4rtHREA6zj/1dg6gIwA4zNuHA2AJ0b3b/AATOv9fznrjUwAAAABJRU5ErkJggg==';
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
		el.ggId="\ubb38\uc5f4\ub9bc";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
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
		me.__5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_door') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__5.style.transition='';
				if (me.__5.ggCurrentLogicStateVisible == 0) {
					me.__5.style.visibility=(Number(me.__5.style.opacity)>0||!me.__5.style.opacity)?'inherit':'hidden';
					me.__5.ggVisible=true;
				}
				else {
					me.__5.style.visibility="hidden";
					me.__5.ggVisible=false;
				}
			}
		}
		me.__5.logicBlock_visible();
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me.__5);
		me.__3.appendChild(me.__4);
		me.divSkin.appendChild(me.__3);
		el=me.__1=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\uba54\ub274";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 6%;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 15%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 320))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 570))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getViewerSize().width <= 970))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__1.style.transition='right 0s, top 0s, width 0s, height 0s, opacity 800ms linear 0ms';
				if (me.__1.ggCurrentLogicStatePosition == 0) {
					me.__1.style.right='20%';
					me.__1.style.top = 'calc(50% - (50% / 2))';
				}
				else if (me.__1.ggCurrentLogicStatePosition == 1) {
					me.__1.style.right='16%';
					me.__1.style.top = 'calc(50% - (50% / 2))';
				}
				else if (me.__1.ggCurrentLogicStatePosition == 2) {
					me.__1.style.right='9%';
					me.__1.style.top = 'calc(50% - (50% / 2))';
				}
				else {
					me.__1.style.right='6%';
					me.__1.style.top='calc(50% - ((50% + 0px) / 2) + 0px)';
				}
			}
		}
		me.__1.logicBlock_position();
		me.__1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 570))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 970))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__1.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__1.ggCurrentLogicStateSize = newLogicStateSize;
				me.__1.style.transition='right 0s, top 0s, width 0s, height 0s, opacity 800ms linear 0ms';
				if (me.__1.ggCurrentLogicStateSize == 0) {
					me.__1.style.width='50%';
					me.__1.style.height='50%';
					me.__1.style.top = 'calc(50% - (50% / 2))';
					skin.updateSize(me.__1);
				}
				else if (me.__1.ggCurrentLogicStateSize == 1) {
					me.__1.style.width='30%';
					me.__1.style.height='50%';
					me.__1.style.top = 'calc(50% - (50% / 2))';
					skin.updateSize(me.__1);
				}
				else {
					me.__1.style.width='15%';
					me.__1.style.height='50%';
					me.__1.style.top = 'calc(50% - (50% / 2))';
					skin.updateSize(me.__1);
				}
			}
		}
		me.__1.logicBlock_size();
		me.__1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_door') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__1.style.transition='right 0s, top 0s, width 0s, height 0s, opacity 800ms linear 0ms';
				if (me.__1.ggCurrentLogicStateAlpha == 0) {
					me.__1.style.visibility=me.__1.ggVisible?'inherit':'hidden';
					me.__1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me.__1.style.opacity == 0.0) { me.__1.style.visibility="hidden"; } }, 805);
					me.__1.style.opacity=0;
				}
			}
		}
		me.__1.logicBlock_alpha();
		me.__1.ggUpdatePosition=function (useTransition) {
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
		hs+='height : 499px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 159px;';
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
		elVertScrollBg = me._scrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 240px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 240px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1.ggScrollPosY = 0;
		me._scrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
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
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1.ggScrollByYSmooth(30 * me._scrollarea_1.ggVPercentVisible * wheelDelta);
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
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scrollarea_1.ggHorScrollVisible && contentHeight > this.clientHeight - 5) || (!me._scrollarea_1.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_1__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_1__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_1.ggVertScrollVisible = true;
				} else {
					me._scrollarea_1__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_1__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_1.ggVertScrollVisible = false;
				}
				if(me._scrollarea_1.ggVertScrollVisible) {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 5;
					if (me._scrollarea_1.ggHorScrollVisible) {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 5;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height - me._scrollarea_1__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height;
						me._scrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1__vertScrollBg.style.height = me._scrollarea_1.ggAvailableHeight + 'px';
					me._scrollarea_1.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_1.ggVPercentVisible > 1.0) me._scrollarea_1.ggVPercentVisible = 1.0;
					me._scrollarea_1.ggScrollHeight =  Math.round(me._scrollarea_1__vertScrollBg.offsetHeight * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1__vertScrollFg.style.height = me._scrollarea_1.ggScrollHeight + 'px';
					me._scrollarea_1.ggScrollPosY = me._scrollarea_1.ggScrollPosYPercent * me._scrollarea_1.ggAvailableHeight;
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
					if (me._scrollarea_1.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
						me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
					me._scrollarea_1.ggScrollPosY = 0;
					me._scrollarea_1.ggScrollPosYPercent = 0.0;
					me._scrollarea_1__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me.__2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2;
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
		hs+='height : 500px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
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
		me.__2.ggUpdatePosition=function (useTransition) {
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
		el.ggWidth = 150;
		el.ggHeight = 80;
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
			var curNumCols = 0;
			curNumCols = me._cloner_1.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cloner_1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
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
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
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
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 10px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
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
		me.__2.appendChild(me._cloner_1);
		me._scrollarea_1__content.appendChild(me.__2);
		me.__1.appendChild(me._scrollarea_1);
		me.divSkin.appendChild(me.__1);
		el=me._timer_3=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=false;
		el.ggTimeout=3600000;
		el.ggId="Timer 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
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
		me._timer_3.ggIsActive=function() {
			return (me._timer_3.ggTimestamp + me._timer_3.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_3.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_3.style.transition='';
				if (me._timer_3.ggCurrentLogicStateVisible == 0) {
					me._timer_3.style.visibility="hidden";
					me._timer_3.ggVisible=false;
				}
				else {
					me._timer_3.style.visibility=(Number(me._timer_3.style.opacity)>0||!me._timer_3.style.opacity)?'inherit':'hidden';
					me._timer_3.ggVisible=true;
				}
			}
		}
		me._timer_3.logicBlock_visible();
		me._timer_3.ggCurrentLogicStateVisible = -1;
		me._timer_3.ggUpdateConditionTimer=function () {
			me._timer_3.logicBlock_visible();
		}
		me._timer_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
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
		me._container_1.ggIsActive=function() {
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
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
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
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.gif';
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
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
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
		me._rectangle_1.appendChild(me._image_4);
		me._container_1.appendChild(me._rectangle_1);
		me._timer_3.appendChild(me._container_1);
		me.divSkin.appendChild(me._timer_3);
		me._logo.logicBlock_size();
		me._text_1.logicBlock_scaling();
		me.__46.logicBlock_size();
		me.__48.logicBlock_scaling();
		me.__48.logicBlock_alpha();
		me.__49.logicBlock_size();
		me._image_2.logicBlock_scaling();
		me._timer_1.logicBlock_visible();
		me._down.logicBlock_position();
		me._down.logicBlock_size();
		me._down.logicBlock_visible();
		me.__7.logicBlock_position();
		me.__7.logicBlock_size();
		me.__7.logicBlock_scaling();
		me.__50.logicBlock_size();
		me.__50.logicBlock_backgroundcolor();
		me.__45.logicBlock_visible();
		me.__44.logicBlock_visible();
		me._image_6.logicBlock_visible();
		me.__118.logicBlock_size();
		me.__118.logicBlock_backgroundcolor();
		me.__42.logicBlock_visible();
		me.__41.logicBlock_visible();
		me._image_8.logicBlock_visible();
		me.__onoff_6.logicBlock_size();
		me.__onoff_6.logicBlock_visible();
		me.__onoff_6.logicBlock_backgroundcolor();
		me.__off_6.logicBlock_visible();
		me.__on_6.logicBlock_visible();
		me.__38.logicBlock_visible();
		me.__37.logicBlock_visible();
		me.__onoff_5.logicBlock_size();
		me.__onoff_5.logicBlock_visible();
		me.__onoff_5.logicBlock_backgroundcolor();
		me.__off_5.logicBlock_visible();
		me.__on_5.logicBlock_visible();
		me.__36.logicBlock_visible();
		me.__35.logicBlock_visible();
		me.__onoff_4.logicBlock_size();
		me.__onoff_4.logicBlock_visible();
		me.__onoff_4.logicBlock_backgroundcolor();
		me.__off_4.logicBlock_visible();
		me.__on_4.logicBlock_visible();
		me.__34.logicBlock_visible();
		me.__33.logicBlock_visible();
		me.__onoff_10.logicBlock_size();
		me.__onoff_10.logicBlock_visible();
		me.__onoff_10.logicBlock_backgroundcolor();
		me.__off_3.logicBlock_visible();
		me.__on_3.logicBlock_visible();
		me.__117.logicBlock_visible();
		me.__116.logicBlock_visible();
		me.__onoff_3.logicBlock_size();
		me.__onoff_3.logicBlock_visible();
		me.__onoff_3.logicBlock_backgroundcolor();
		me.__off_10.logicBlock_visible();
		me.__on_10.logicBlock_visible();
		me.__115.logicBlock_visible();
		me.__114.logicBlock_visible();
		me.__onoff_1.logicBlock_size();
		me.__onoff_1.logicBlock_visible();
		me.__onoff_1.logicBlock_backgroundcolor();
		me.__off_1.logicBlock_visible();
		me.__on_1.logicBlock_visible();
		me.__32.logicBlock_visible();
		me.__31.logicBlock_visible();
		me.__onoff_110.logicBlock_size();
		me.__onoff_110.logicBlock_visible();
		me.__onoff_110.logicBlock_backgroundcolor();
		me.__off_110.logicBlock_visible();
		me.__on_110.logicBlock_visible();
		me.__113.logicBlock_visible();
		me.__112.logicBlock_visible();
		me.__onoff_11.logicBlock_size();
		me.__onoff_11.logicBlock_visible();
		me.__onoff_11.logicBlock_backgroundcolor();
		me.__off_11.logicBlock_visible();
		me.__on_11.logicBlock_visible();
		me.__111.logicBlock_visible();
		me.__110.logicBlock_visible();
		me.__onoff_0.logicBlock_size();
		me.__onoff_0.logicBlock_visible();
		me.__onoff_0.logicBlock_backgroundcolor();
		me.__off_0.logicBlock_visible();
		me.__on_0.logicBlock_visible();
		me.__29.logicBlock_visible();
		me.__28.logicBlock_visible();
		me.__onoff_21.logicBlock_size();
		me.__onoff_21.logicBlock_visible();
		me.__onoff_21.logicBlock_backgroundcolor();
		me.__off_21.logicBlock_visible();
		me.__on_21.logicBlock_visible();
		me.__211.logicBlock_visible();
		me.__210.logicBlock_visible();
		me.__onoff_20.logicBlock_size();
		me.__onoff_20.logicBlock_visible();
		me.__onoff_20.logicBlock_backgroundcolor();
		me.__off_20.logicBlock_visible();
		me.__on_20.logicBlock_visible();
		me.__27.logicBlock_visible();
		me.__26.logicBlock_visible();
		me.__onoff_.logicBlock_size();
		me.__onoff_.logicBlock_visible();
		me.__onoff_.logicBlock_backgroundcolor();
		me.__off_.logicBlock_visible();
		me.__on_.logicBlock_visible();
		me.__25.logicBlock_visible();
		me.__24.logicBlock_visible();
		me.__onoff_2.logicBlock_size();
		me.__onoff_2.logicBlock_visible();
		me.__onoff_2.logicBlock_backgroundcolor();
		me.__off_2.logicBlock_visible();
		me.__on_2.logicBlock_visible();
		me.__2_0.logicBlock_visible();
		me.__2_.logicBlock_visible();
		me.__30.logicBlock_size();
		me.__30.logicBlock_backgroundcolor();
		me.__22.logicBlock_visible();
		me.__21.logicBlock_visible();
		me._image_9.logicBlock_visible();
		me.__17.logicBlock_position();
		me.__40.logicBlock_size();
		me.__40.logicBlock_backgroundcolor();
		me.__19.logicBlock_visible();
		me.__18.logicBlock_visible();
		me._image_10.logicBlock_visible();
		me.__14.logicBlock_position();
		me.__14.logicBlock_size();
		me.__60.logicBlock_size();
		me.__60.logicBlock_backgroundcolor();
		me._timer_2.logicBlock_visible();
		me.__15.logicBlock_visible();
		me._off.logicBlock_visible();
		me.__11.logicBlock_size();
		me.__11.logicBlock_backgroundcolor();
		me.__13.logicBlock_visible();
		me.__12.logicBlock_visible();
		me._image_12.logicBlock_visible();
		me.__8.logicBlock_position();
		me.__8.logicBlock_size();
		me.__6.logicBlock_visible();
		me.__5.logicBlock_visible();
		me.__1.logicBlock_position();
		me.__1.logicBlock_size();
		me.__1.logicBlock_alpha();
		me._timer_3.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			me.__onoff_6.logicBlock_visible();
			me.__onoff_5.logicBlock_visible();
			me.__onoff_4.logicBlock_visible();
			me.__onoff_10.logicBlock_visible();
			me.__onoff_3.logicBlock_visible();
			me.__onoff_1.logicBlock_visible();
			me.__onoff_110.logicBlock_visible();
			me.__onoff_11.logicBlock_visible();
			me.__onoff_0.logicBlock_visible();
			me.__onoff_21.logicBlock_visible();
			me.__onoff_20.logicBlock_visible();
			me.__onoff_.logicBlock_visible();
			me.__onoff_2.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me.__48.logicBlock_alpha();
			me._timer_1.logicBlock_visible();
			me._down.logicBlock_position();
			me._down.logicBlock_visible();
			me.__7.logicBlock_position();
			me.__50.logicBlock_backgroundcolor();
			me.__44.logicBlock_visible();
			me._image_6.logicBlock_visible();
			me.__118.logicBlock_backgroundcolor();
			me.__41.logicBlock_visible();
			me._image_8.logicBlock_visible();
			me.__onoff_6.logicBlock_visible();
			me.__onoff_6.logicBlock_backgroundcolor();
			me.__off_6.logicBlock_visible();
			me.__on_6.logicBlock_visible();
			me.__38.logicBlock_visible();
			me.__37.logicBlock_visible();
			me.__onoff_5.logicBlock_visible();
			me.__onoff_5.logicBlock_backgroundcolor();
			me.__off_5.logicBlock_visible();
			me.__on_5.logicBlock_visible();
			me.__36.logicBlock_visible();
			me.__35.logicBlock_visible();
			me.__onoff_4.logicBlock_visible();
			me.__onoff_4.logicBlock_backgroundcolor();
			me.__off_4.logicBlock_visible();
			me.__on_4.logicBlock_visible();
			me.__34.logicBlock_visible();
			me.__33.logicBlock_visible();
			me.__onoff_10.logicBlock_visible();
			me.__onoff_10.logicBlock_backgroundcolor();
			me.__off_3.logicBlock_visible();
			me.__on_3.logicBlock_visible();
			me.__117.logicBlock_visible();
			me.__116.logicBlock_visible();
			me.__onoff_3.logicBlock_visible();
			me.__onoff_3.logicBlock_backgroundcolor();
			me.__off_10.logicBlock_visible();
			me.__on_10.logicBlock_visible();
			me.__115.logicBlock_visible();
			me.__114.logicBlock_visible();
			me.__onoff_1.logicBlock_visible();
			me.__onoff_1.logicBlock_backgroundcolor();
			me.__off_1.logicBlock_visible();
			me.__on_1.logicBlock_visible();
			me.__32.logicBlock_visible();
			me.__31.logicBlock_visible();
			me.__onoff_110.logicBlock_visible();
			me.__onoff_110.logicBlock_backgroundcolor();
			me.__off_110.logicBlock_visible();
			me.__on_110.logicBlock_visible();
			me.__113.logicBlock_visible();
			me.__112.logicBlock_visible();
			me.__onoff_11.logicBlock_visible();
			me.__onoff_11.logicBlock_backgroundcolor();
			me.__off_11.logicBlock_visible();
			me.__on_11.logicBlock_visible();
			me.__111.logicBlock_visible();
			me.__110.logicBlock_visible();
			me.__onoff_0.logicBlock_visible();
			me.__onoff_0.logicBlock_backgroundcolor();
			me.__off_0.logicBlock_visible();
			me.__on_0.logicBlock_visible();
			me.__29.logicBlock_visible();
			me.__28.logicBlock_visible();
			me.__onoff_21.logicBlock_visible();
			me.__onoff_21.logicBlock_backgroundcolor();
			me.__off_21.logicBlock_visible();
			me.__on_21.logicBlock_visible();
			me.__211.logicBlock_visible();
			me.__210.logicBlock_visible();
			me.__onoff_20.logicBlock_visible();
			me.__onoff_20.logicBlock_backgroundcolor();
			me.__off_20.logicBlock_visible();
			me.__on_20.logicBlock_visible();
			me.__27.logicBlock_visible();
			me.__26.logicBlock_visible();
			me.__onoff_.logicBlock_visible();
			me.__onoff_.logicBlock_backgroundcolor();
			me.__off_.logicBlock_visible();
			me.__on_.logicBlock_visible();
			me.__25.logicBlock_visible();
			me.__24.logicBlock_visible();
			me.__onoff_2.logicBlock_visible();
			me.__onoff_2.logicBlock_backgroundcolor();
			me.__off_2.logicBlock_visible();
			me.__on_2.logicBlock_visible();
			me.__2_0.logicBlock_visible();
			me.__2_.logicBlock_visible();
			me.__30.logicBlock_backgroundcolor();
			me.__21.logicBlock_visible();
			me._image_9.logicBlock_visible();
			me.__40.logicBlock_backgroundcolor();
			me.__18.logicBlock_visible();
			me._image_10.logicBlock_visible();
			me.__60.logicBlock_backgroundcolor();
			me._timer_2.logicBlock_visible();
			me.__15.logicBlock_visible();
			me._off.logicBlock_visible();
			me.__11.logicBlock_backgroundcolor();
			me.__12.logicBlock_visible();
			me._image_12.logicBlock_visible();
			me.__6.logicBlock_visible();
			me.__5.logicBlock_visible();
			me.__1.logicBlock_alpha();
			me._cloner_1.ggUpdateConditionNodeChange();
			me._timer_3.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me.__48.logicBlock_alpha();
			me._down.logicBlock_position();
			me._down.logicBlock_visible();
			me.__7.logicBlock_position();
			me.__50.logicBlock_backgroundcolor();
			me.__44.logicBlock_visible();
			me._image_6.logicBlock_visible();
			me.__118.logicBlock_backgroundcolor();
			me.__41.logicBlock_visible();
			me._image_8.logicBlock_visible();
			me.__onoff_6.logicBlock_visible();
			me.__onoff_6.logicBlock_backgroundcolor();
			me.__onoff_5.logicBlock_visible();
			me.__onoff_5.logicBlock_backgroundcolor();
			me.__onoff_4.logicBlock_visible();
			me.__onoff_4.logicBlock_backgroundcolor();
			me.__onoff_10.logicBlock_visible();
			me.__onoff_10.logicBlock_backgroundcolor();
			me.__onoff_3.logicBlock_visible();
			me.__onoff_3.logicBlock_backgroundcolor();
			me.__onoff_1.logicBlock_visible();
			me.__onoff_1.logicBlock_backgroundcolor();
			me.__onoff_110.logicBlock_visible();
			me.__onoff_110.logicBlock_backgroundcolor();
			me.__onoff_11.logicBlock_visible();
			me.__onoff_11.logicBlock_backgroundcolor();
			me.__onoff_0.logicBlock_visible();
			me.__onoff_0.logicBlock_backgroundcolor();
			me.__onoff_21.logicBlock_visible();
			me.__onoff_21.logicBlock_backgroundcolor();
			me.__onoff_20.logicBlock_visible();
			me.__onoff_20.logicBlock_backgroundcolor();
			me.__onoff_.logicBlock_visible();
			me.__onoff_.logicBlock_backgroundcolor();
			me.__onoff_2.logicBlock_visible();
			me.__onoff_2.logicBlock_backgroundcolor();
			me.__30.logicBlock_backgroundcolor();
			me.__21.logicBlock_visible();
			me._image_9.logicBlock_visible();
			me.__40.logicBlock_backgroundcolor();
			me.__18.logicBlock_visible();
			me._image_10.logicBlock_visible();
			me.__60.logicBlock_backgroundcolor();
			me.__15.logicBlock_visible();
			me._off.logicBlock_visible();
			me.__11.logicBlock_backgroundcolor();
			me.__12.logicBlock_visible();
			me._image_12.logicBlock_visible();
			me.__6.logicBlock_visible();
			me.__5.logicBlock_visible();
			me.__1.logicBlock_alpha();
			me._scrollarea_1.ggUpdatePosition();
			me._timer_3.ggTimestamp=skin.ggCurrentTime;
			me._timer_3.ggTimeout=5000;
		});
		player.addListener('fullscreenexit', function(event) {
			player.setVariableValue('vis_buttonbg_3', false);
		});
		player.addListener('hotspotsupdated', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_hotspotsupdated();
				}
			}
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me._logo.logicBlock_size();
			me._text_1.logicBlock_scaling();
			me.__46.logicBlock_size();
			me.__48.logicBlock_scaling();
			me.__49.logicBlock_size();
			me._image_2.logicBlock_scaling();
			me._down.logicBlock_size();
			me.__7.logicBlock_position();
			me.__7.logicBlock_size();
			me.__7.logicBlock_scaling();
			me.__50.logicBlock_size();
			me.__118.logicBlock_size();
			me.__onoff_6.logicBlock_size();
			me.__onoff_5.logicBlock_size();
			me.__onoff_4.logicBlock_size();
			me.__onoff_10.logicBlock_size();
			me.__onoff_3.logicBlock_size();
			me.__onoff_1.logicBlock_size();
			me.__onoff_110.logicBlock_size();
			me.__onoff_11.logicBlock_size();
			me.__onoff_0.logicBlock_size();
			me.__onoff_21.logicBlock_size();
			me.__onoff_20.logicBlock_size();
			me.__onoff_.logicBlock_size();
			me.__onoff_2.logicBlock_size();
			me.__30.logicBlock_size();
			me.__17.logicBlock_position();
			me.__40.logicBlock_size();
			me.__14.logicBlock_position();
			me.__14.logicBlock_size();
			me.__60.logicBlock_size();
			me.__11.logicBlock_size();
			me.__8.logicBlock_position();
			me.__8.logicBlock_size();
			me.__1.logicBlock_position();
			me.__1.logicBlock_size();
		});
		player.addListener('varchanged_vis_buttonbg', function(event) {
			me.__118.logicBlock_backgroundcolor();
			me.__41.logicBlock_visible();
			me._image_8.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg_1', function(event) {
			me.__onoff_6.logicBlock_backgroundcolor();
			me.__onoff_5.logicBlock_backgroundcolor();
			me.__onoff_4.logicBlock_backgroundcolor();
			me.__onoff_10.logicBlock_backgroundcolor();
			me.__onoff_3.logicBlock_backgroundcolor();
			me.__onoff_1.logicBlock_backgroundcolor();
			me.__onoff_110.logicBlock_backgroundcolor();
			me.__onoff_11.logicBlock_backgroundcolor();
			me.__onoff_0.logicBlock_backgroundcolor();
			me.__onoff_21.logicBlock_backgroundcolor();
			me.__onoff_20.logicBlock_backgroundcolor();
			me.__onoff_.logicBlock_backgroundcolor();
			me.__onoff_2.logicBlock_backgroundcolor();
		});
		player.addListener('varchanged_vis_buttonbg_2', function(event) {
			me.__30.logicBlock_backgroundcolor();
			me.__21.logicBlock_visible();
			me._image_9.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg_3', function(event) {
			me.__40.logicBlock_backgroundcolor();
			me.__18.logicBlock_visible();
			me._image_10.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg_4', function(event) {
			me.__50.logicBlock_backgroundcolor();
			me.__44.logicBlock_visible();
			me._image_6.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg_5', function(event) {
			me.__11.logicBlock_backgroundcolor();
			me.__12.logicBlock_visible();
			me._image_12.logicBlock_visible();
		});
		player.addListener('varchanged_vis_buttonbg_6', function(event) {
			me.__60.logicBlock_backgroundcolor();
			me.__15.logicBlock_visible();
			me._off.logicBlock_visible();
		});
		player.addListener('varchanged_vis_door', function(event) {
			me.__6.logicBlock_visible();
			me.__5.logicBlock_visible();
			me.__1.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_down', function(event) {
			me._down.logicBlock_position();
		});
		player.addListener('varchanged_vis_downmenu', function(event) {
			me.__48.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_footerdownmenu', function(event) {
			me._down.logicBlock_visible();
			me.__7.logicBlock_position();
		});
		player.addListener('viewerinit', function(event) {
			me._cloner_1.ggUpdate();
		});
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
		hs+='width : 48%;';
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
		me.__div.appendChild(me._nodeimage_1);
		el=me._text_2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
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
		me._text_2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1\n", params);
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
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._text_2);
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
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
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
			player.openNext(player._(me.hotspot.url),"$(cur)");
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
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._lottie_2=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_2.json',
			autoplay: true,
			loop: 99,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggLottie.setSpeed(1.5);
		el.ggId="Lottie 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_2.ggIsActive=function() {
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
		me._lottie_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lottie_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lottie_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStatePosition == 0) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='-20px';
				}
				else if (me._lottie_2.ggCurrentLogicStatePosition == 1) {
					me._lottie_2.style.left='-20px';
					me._lottie_2.style.top='-20px';
				}
				else {
					me._lottie_2.style.left='-30px';
					me._lottie_2.style.top='-20px';
				}
			}
		}
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._lottie_2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._lottie_2.ggCurrentLogicStateSize = newLogicStateSize;
				me._lottie_2.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._lottie_2.ggCurrentLogicStateSize == 0) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else if (me._lottie_2.ggCurrentLogicStateSize == 1) {
					me._lottie_2.style.width='40px';
					me._lottie_2.style.height='40px';
					skin.updateSize(me._lottie_2);
				}
				else {
					me._lottie_2.style.width='70px';
					me._lottie_2.style.height='70px';
					skin.updateSize(me._lottie_2);
				}
			}
		}
		me._lottie_2.logicBlock_size();
		me._lottie_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._lottie_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_6.ggIsActive=function() {
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
		me._container_6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__0=document.createElement('div');
		els=me.__0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='bottom : -28px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__0.ggUpdateText();
		player.addListener('changenode', function() {
			me.__0.ggUpdateText();
		});
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
			return me.ggNodeId;
		}
		me.__0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__0.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__0.ggCurrentLogicStatePosition == 0) {
					me.__0.style.left = 'calc(50% - (50px / 2))';
					me.__0.style.bottom='0px';
				}
				else {
					me.__0.style.left='calc(50% - ((50px + 0px) / 2) + 0px)';
					me.__0.style.bottom='-28px';
				}
			}
		}
		me.__0.logicBlock_position();
		me.__0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__0.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__0.ggCurrentLogicStateSize = newLogicStateSize;
				me.__0.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__0.ggCurrentLogicStateSize == 0) {
					me.__0.style.width='95px';
					me.__0.style.height='25px';
					me.__0.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__0);
				}
				else if (me.__0.ggCurrentLogicStateSize == 1) {
					me.__0.style.width='60px';
					me.__0.style.height='25px';
					me.__0.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__0);
				}
				else if (me.__0.ggCurrentLogicStateSize == 2) {
					me.__0.style.width='60px';
					me.__0.style.height='25px';
					me.__0.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__0);
				}
				else {
					me.__0.style.width='50px';
					me.__0.style.height='25px';
					me.__0.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__0);
				}
			}
		}
		me.__0.logicBlock_size();
		me.__0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__0.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__0.ggCurrentLogicStateVisible == 0) {
					me.__0.style.visibility=(Number(me.__0.style.opacity)>0||!me.__0.style.opacity)?'inherit':'hidden';
					me.__0.ggVisible=true;
				}
				else if (me.__0.ggCurrentLogicStateVisible == 1) {
					me.__0.style.visibility=(Number(me.__0.style.opacity)>0||!me.__0.style.opacity)?'inherit':'hidden';
					me.__0.ggVisible=true;
				}
				else {
					me.__0.style.visibility="hidden";
					me.__0.ggVisible=false;
				}
			}
		}
		me.__0.logicBlock_visible();
		me.__0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__0.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__0.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__0.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__0.logicBlock_backgroundcolor();
		me.__0.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__0.ggCurrentLogicStateText != newLogicStateText) {
				me.__0.ggCurrentLogicStateText = newLogicStateText;
				me.__0.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__0.ggCurrentLogicStateText == 0) {
					if (me.__0.ggUpdateText) {
					me.__0.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__0.ggUpdateText();
					} else {
						if (me.__0.ggUpdatePosition) me.__0.ggUpdatePosition();
					}
				}
				else {
					if (me.__0.ggUpdateText) {
					me.__0.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__0.ggUpdateText();
					} else {
						if (me.__0.ggUpdatePosition) me.__0.ggUpdatePosition();
					}
				}
			}
		}
		me.__0.logicBlock_text();
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__0);
		el=me.__=document.createElement('div');
		els=me.____text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub178\ub4dc\uba85";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text menu";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='bottom : -40px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__.ggUpdateText();
		player.addListener('changenode', function() {
			me.__.ggUpdateText();
		});
		el.appendChild(els);
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
			return me.ggNodeId;
		}
		me.__.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((Math.min(Math.min(me.hotspot.pxp, 100 - me.hotspot.pxp), Math.min(me.hotspot.pyp, 100 - me.hotspot.pyp)) == 0))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__.ggCurrentLogicStatePosition == 0) {
					me.__.style.left = 'calc(50% - (60px / 2))';
					me.__.style.bottom='0px';
				}
				else if (me.__.ggCurrentLogicStatePosition == 1) {
					me.__.style.left = 'calc(50% - (60px / 2) + (0px / 2) + -5px)';
					me.__.style.bottom='40px';
				}
				else {
					me.__.style.left='calc(50% - ((60px + 0px) / 2) + 0px)';
					me.__.style.bottom='-40px';
				}
			}
		}
		me.__.logicBlock_position();
		me.__.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player._(me.ggUserdata.information) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 2;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__.ggCurrentLogicStateSize = newLogicStateSize;
				me.__.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__.ggCurrentLogicStateSize == 0) {
					me.__.style.width='50px';
					me.__.style.height='25px';
					me.__.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__);
				}
				else if (me.__.ggCurrentLogicStateSize == 1) {
					me.__.style.width='50px';
					me.__.style.height='25px';
					me.__.style.left = 'calc(50% - (50px / 2))';
					skin.updateSize(me.__);
				}
				else if (me.__.ggCurrentLogicStateSize == 2) {
					me.__.style.width='95px';
					me.__.style.height='25px';
					me.__.style.left = 'calc(50% - (95px / 2))';
					skin.updateSize(me.__);
				}
				else {
					me.__.style.width='60px';
					me.__.style.height='30px';
					me.__.style.left = 'calc(50% - (60px / 2))';
					skin.updateSize(me.__);
				}
			}
		}
		me.__.logicBlock_size();
		me.__.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__.ggCurrentLogicStateVisible == 0) {
					me.__.style.visibility="hidden";
					me.__.ggVisible=false;
				}
				else if (me.__.ggCurrentLogicStateVisible == 1) {
					me.__.style.visibility="hidden";
					me.__.ggVisible=false;
				}
				else {
					me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
					me.__.ggVisible=true;
				}
			}
		}
		me.__.logicBlock_visible();
		me.__.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__.ggCurrentLogicStateBackgroundColor == 0) {
					me.__.style.backgroundColor="rgba(0,0,0,0)";
				}
				else {
					me.__.style.backgroundColor="rgba(0,0,0,0.54902)";
				}
			}
		}
		me.__.logicBlock_backgroundcolor();
		me.__.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(me.hotspot.title) == "\uc5c6\uc74c"))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__.ggCurrentLogicStateText != newLogicStateText) {
				me.__.ggCurrentLogicStateText = newLogicStateText;
				me.__.style.transition='left 0s, bottom 0s, width 0s, height 0s, background-color 0s';
				if (me.__.ggCurrentLogicStateText == 0) {
					if (me.__.ggUpdateText) {
					me.__.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__.ggUpdateText();
					} else {
						if (me.__.ggUpdatePosition) me.__.ggUpdatePosition();
					}
				}
				else {
					if (me.__.ggUpdateText) {
					me.__.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__.ggUpdateText();
					} else {
						if (me.__.ggUpdatePosition) me.__.ggUpdatePosition();
					}
				}
			}
		}
		me.__.logicBlock_text();
		me.__.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me.__);
		me._lottie_2.appendChild(me._container_6);
		me._ht_node.appendChild(me._lottie_2);
		me._lottie_2.logicBlock_position();
		me._lottie_2.logicBlock_size();
		me.__0.logicBlock_position();
		me.__0.logicBlock_size();
		me.__0.logicBlock_visible();
		me.__0.logicBlock_backgroundcolor();
		me.__0.logicBlock_text();
		me.__.logicBlock_position();
		me.__.logicBlock_size();
		me.__.logicBlock_visible();
		me.__.logicBlock_backgroundcolor();
		me.__.logicBlock_text();
			me.ggEvent_activehotspotchanged=function() {
				me.__0.logicBlock_size();
				me.__0.logicBlock_backgroundcolor();
				me.__0.logicBlock_text();
				me.__.logicBlock_size();
				me.__.logicBlock_backgroundcolor();
				me.__.logicBlock_text();
			};
			me.ggEvent_changenode=function() {
				me.__0.logicBlock_size();
				me.__0.logicBlock_backgroundcolor();
				me.__0.logicBlock_text();
				me.__.logicBlock_size();
				me.__.logicBlock_backgroundcolor();
				me.__.logicBlock_text();
			};
			me.ggEvent_configloaded=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__0.logicBlock_size();
				me.__0.logicBlock_visible();
				me.__0.logicBlock_backgroundcolor();
				me.__0.logicBlock_text();
				me.__.logicBlock_position();
				me.__.logicBlock_size();
				me.__.logicBlock_visible();
				me.__.logicBlock_backgroundcolor();
				me.__.logicBlock_text();
			};
			me.ggEvent_hotspotsupdated=function() {
				me.__0.logicBlock_position();
				me.__.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._lottie_2.logicBlock_position();
				me._lottie_2.logicBlock_size();
				me.__0.logicBlock_size();
				me.__0.logicBlock_visible();
				me.__.logicBlock_size();
				me.__.logicBlock_visible();
			};
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
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('vis_down', !player.getVariableValue('vis_down'));
			} else {
			}
		}
		me._timer_2.ggUpdateConditionTimer();
		if (me._timer_2.ggLastIsActive!=me._timer_2.ggIsActive()) {
			me._timer_2.ggLastIsActive=me._timer_2.ggIsActive();
			if (me._timer_2.ggLastIsActive) {
				me.__16.style.transition='none';
				me.__16.style.visibility='hidden';
				me.__16.ggVisible=false;
				player.setVariableValue('vis_buttonbg_6', false);
			} else {
			}
		}
		me._timer_3.ggUpdateConditionTimer();
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