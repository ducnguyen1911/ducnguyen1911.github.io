(function(c){"function"===typeof define&&define.amd?define(["jquery"],c):c(jimdoGen002)})(function(c){function h(b){return c.isFunction(b)||"object"==typeof b?b:{top:b,left:b}}var k=c.scrollTo=function(b,d,a){return c(window).scrollTo(b,d,a)};k.defaults={axis:"xy",duration:1.3<=parseFloat(c.fn.jquery)?0:1,limit:!0};k.window=function(b){return c(window)._scrollable()};c.fn._scrollable=function(){return this.map(function(){if(this.nodeName&&-1==c.inArray(this.nodeName.toLowerCase(),["iframe","#document",
"html","body"]))return this;var b=(this.contentWindow||this).document||this.ownerDocument||this;return/webkit/i.test(navigator.userAgent)||"BackCompat"==b.compatMode?b.body:b.documentElement})};c.fn.scrollTo=function(b,d,a){"object"==typeof d&&(a=d,d=0);"function"==typeof a&&(a={onAfter:a});"max"==b&&(b=9E9);a=c.extend({},k.defaults,a);d=d||a.duration;a.queue=a.queue&&1<a.axis.length;a.queue&&(d/=2);a.offset=h(a.offset);a.over=h(a.over);return this._scrollable().each(function(){function q(b){n.animate(e,
d,a.easing,b&&function(){b.call(this,f,a)})}if(null!=b){var l=this,n=c(l),f=b,p,e={},s=n.is("html,body");switch(typeof f){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)){f=h(f);break}f=c(f,this);if(!f.length)return;case "object":if(f.is||f.style)p=(f=c(f)).offset()}var t=c.isFunction(a.offset)&&a.offset(l,f)||a.offset;c.each(a.axis.split(""),function(b,c){var d="x"==c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=l[g],r=k.max(l,c);p?(e[g]=p[m]+(s?0:h-n.offset()[m]),a.margin&&
(e[g]-=parseInt(f.css("margin"+d))||0,e[g]-=parseInt(f.css("border"+d+"Width"))||0),e[g]+=t[m]||0,a.over[m]&&(e[g]+=f["x"==c?"width":"height"]()*a.over[m])):(d=f[m],e[g]=d.slice&&"%"==d.slice(-1)?parseFloat(d)/100*r:d);a.limit&&/^\d+$/.test(e[g])&&(e[g]=0>=e[g]?0:Math.min(e[g],r));!b&&a.queue&&(h!=e[g]&&q(a.onAfterFirst),delete e[g])});q(a.onAfter)}}).end()};k.max=function(b,d){var a="x"==d?"Width":"Height",h="scroll"+a;if(!c(b).is("html,body"))return b[h]-c(b)[a.toLowerCase()]();var a="client"+a,
l=b.ownerDocument.documentElement,k=b.ownerDocument.body;return Math.max(l[h],k[h])-Math.min(l[a],k[a])};return k});