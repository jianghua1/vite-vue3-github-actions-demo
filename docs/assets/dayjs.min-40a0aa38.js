var P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F={},Q={get exports(){return F},set exports(j){F=j}};(function(j,K){(function(A,b){j.exports=b()})(P,function(){var A=1e3,b=6e4,J=36e5,k="millisecond",D="second",S="minute",w="hour",M="day",H="week",$="month",Z="quarter",y="year",O="date",z="Invalid Date",E=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,B={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var e=["th","st","nd","rd"],t=i%100;return"["+i+(e[(t-20)%10]||e[t]||e[0])+"]"}},I=function(i,e,t){var r=String(i);return!r||r.length>=e?i:""+Array(e+1-r.length).join(t)+i},G={s:I,z:function(i){var e=-i.utcOffset(),t=Math.abs(e),r=Math.floor(t/60),n=t%60;return(e<=0?"+":"-")+I(r,2,"0")+":"+I(n,2,"0")},m:function i(e,t){if(e.date()<t.date())return-i(t,e);var r=12*(t.year()-e.year())+(t.month()-e.month()),n=e.clone().add(r,$),u=t-n<0,s=e.clone().add(r+(u?-1:1),$);return+(-(r+(t-n)/(u?n-s:s-n))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:$,y,w:H,d:M,D:O,h:w,m:S,s:D,ms:k,Q:Z}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},T="en",p={};p[T]=B;var N=function(i){return i instanceof W},L=function i(e,t,r){var n;if(!e)return T;if(typeof e=="string"){var u=e.toLowerCase();p[u]&&(n=u),t&&(p[u]=t,n=u);var s=e.split("-");if(!n&&s.length>1)return i(s[0])}else{var a=e.name;p[a]=e,n=a}return!r&&n&&(T=n),n||!r&&T},c=function(i,e){if(N(i))return i.clone();var t=typeof e=="object"?e:{};return t.date=i,t.args=arguments,new W(t)},o=G;o.l=L,o.i=N,o.w=function(i,e){return c(i,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var W=function(){function i(t){this.$L=L(t.locale,null,!0),this.parse(t)}var e=i.prototype;return e.parse=function(t){this.$d=function(r){var n=r.date,u=r.utc;if(n===null)return new Date(NaN);if(o.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var s=n.match(E);if(s){var a=s[2]-1||0,h=(s[7]||"0").substring(0,3);return u?new Date(Date.UTC(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,h)):new Date(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,h)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},e.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},e.$utils=function(){return o},e.isValid=function(){return this.$d.toString()!==z},e.isSame=function(t,r){var n=c(t);return this.startOf(r)<=n&&n<=this.endOf(r)},e.isAfter=function(t,r){return c(t)<this.startOf(r)},e.isBefore=function(t,r){return this.endOf(r)<c(t)},e.$g=function(t,r,n){return o.u(t)?this[r]:this.set(n,t)},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(t,r){var n=this,u=!!o.u(r)||r,s=o.p(t),a=function(_,l){var g=o.w(n.$u?Date.UTC(n.$y,l,_):new Date(n.$y,l,_),n);return u?g:g.endOf(M)},h=function(_,l){return o.w(n.toDate()[_].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(l)),n)},f=this.$W,d=this.$M,v=this.$D,m="set"+(this.$u?"UTC":"");switch(s){case y:return u?a(1,0):a(31,11);case $:return u?a(1,d):a(0,d+1);case H:var x=this.$locale().weekStart||0,Y=(f<x?f+7:f)-x;return a(u?v-Y:v+(6-Y),d);case M:case O:return h(m+"Hours",0);case w:return h(m+"Minutes",1);case S:return h(m+"Seconds",2);case D:return h(m+"Milliseconds",3);default:return this.clone()}},e.endOf=function(t){return this.startOf(t,!1)},e.$set=function(t,r){var n,u=o.p(t),s="set"+(this.$u?"UTC":""),a=(n={},n[M]=s+"Date",n[O]=s+"Date",n[$]=s+"Month",n[y]=s+"FullYear",n[w]=s+"Hours",n[S]=s+"Minutes",n[D]=s+"Seconds",n[k]=s+"Milliseconds",n)[u],h=u===M?this.$D+(r-this.$W):r;if(u===$||u===y){var f=this.clone().set(O,1);f.$d[a](h),f.init(),this.$d=f.set(O,Math.min(this.$D,f.daysInMonth())).$d}else a&&this.$d[a](h);return this.init(),this},e.set=function(t,r){return this.clone().$set(t,r)},e.get=function(t){return this[o.p(t)]()},e.add=function(t,r){var n,u=this;t=Number(t);var s=o.p(r),a=function(d){var v=c(u);return o.w(v.date(v.date()+Math.round(d*t)),u)};if(s===$)return this.set($,this.$M+t);if(s===y)return this.set(y,this.$y+t);if(s===M)return a(1);if(s===H)return a(7);var h=(n={},n[S]=b,n[w]=J,n[D]=A,n)[s]||1,f=this.$d.getTime()+t*h;return o.w(f,this)},e.subtract=function(t,r){return this.add(-1*t,r)},e.format=function(t){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||z;var u=t||"YYYY-MM-DDTHH:mm:ssZ",s=o.z(this),a=this.$H,h=this.$m,f=this.$M,d=n.weekdays,v=n.months,m=function(l,g,U,C){return l&&(l[g]||l(r,u))||U[g].slice(0,C)},x=function(l){return o.s(a%12||12,l,"0")},Y=n.meridiem||function(l,g,U){var C=l<12?"AM":"PM";return U?C.toLowerCase():C},_={YY:String(this.$y).slice(-2),YYYY:this.$y,M:f+1,MM:o.s(f+1,2,"0"),MMM:m(n.monthsShort,f,v,3),MMMM:m(v,f),D:this.$D,DD:o.s(this.$D,2,"0"),d:String(this.$W),dd:m(n.weekdaysMin,this.$W,d,2),ddd:m(n.weekdaysShort,this.$W,d,3),dddd:d[this.$W],H:String(a),HH:o.s(a,2,"0"),h:x(1),hh:x(2),a:Y(a,h,!0),A:Y(a,h,!1),m:String(h),mm:o.s(h,2,"0"),s:String(this.$s),ss:o.s(this.$s,2,"0"),SSS:o.s(this.$ms,3,"0"),Z:s};return u.replace(q,function(l,g){return g||_[l]||s.replace(":","")})},e.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},e.diff=function(t,r,n){var u,s=o.p(r),a=c(t),h=(a.utcOffset()-this.utcOffset())*b,f=this-a,d=o.m(this,a);return d=(u={},u[y]=d/12,u[$]=d,u[Z]=d/3,u[H]=(f-h)/6048e5,u[M]=(f-h)/864e5,u[w]=f/J,u[S]=f/b,u[D]=f/A,u)[s]||f,n?d:o.a(d)},e.daysInMonth=function(){return this.endOf($).$D},e.$locale=function(){return p[this.$L]},e.locale=function(t,r){if(!t)return this.$L;var n=this.clone(),u=L(t,r,!0);return u&&(n.$L=u),n},e.clone=function(){return o.w(this.$d,this)},e.toDate=function(){return new Date(this.valueOf())},e.toJSON=function(){return this.isValid()?this.toISOString():null},e.toISOString=function(){return this.$d.toISOString()},e.toString=function(){return this.$d.toUTCString()},i}(),V=W.prototype;return c.prototype=V,[["$ms",k],["$s",D],["$m",S],["$H",w],["$W",M],["$M",$],["$y",y],["$D",O]].forEach(function(i){V[i[1]]=function(e){return this.$g(e,i[0],i[1])}}),c.extend=function(i,e){return i.$i||(i(e,W,c),i.$i=!0),c},c.locale=L,c.isDayjs=N,c.unix=function(i){return c(1e3*i)},c.en=p[T],c.Ls=p,c.p={},c})})(Q);const R=F;export{R as d};
