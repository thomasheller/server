(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{51:function(e,t,n){(function(t){!function(t){"use strict";var n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:m,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,nptable:m,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:m,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,text:/^[^\n]+/};function r(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||x.defaults,this.rules=n.normal,this.options.pedantic?this.rules=n.pedantic:this.options.gfm&&(this.options.tables?this.rules=n.tables:this.rules=n.gfm)}n._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,n._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,n.def=h(n.def).replace("label",n._label).replace("title",n._title).getRegex(),n.bullet=/(?:[*+-]|\d{1,9}\.)/,n.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,n.item=h(n.item,"gm").replace(/bull/g,n.bullet).getRegex(),n.list=h(n.list).replace(/bull/g,n.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+n.def.source+")").getRegex(),n._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",n._comment=/<!--(?!-?>)[\s\S]*?-->/,n.html=h(n.html,"i").replace("comment",n._comment).replace("tag",n._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),n.paragraph=h(n.paragraph).replace("hr",n.hr).replace("heading",n.heading).replace("lheading",n.lheading).replace("tag",n._tag).getRegex(),n.blockquote=h(n.blockquote).replace("paragraph",n.paragraph).getRegex(),n.normal=b({},n),n.gfm=b({},n.normal,{fences:/^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),n.gfm.paragraph=h(n.paragraph).replace("(?!","(?!"+n.gfm.fences.source.replace("\\1","\\2")+"|"+n.list.source.replace("\\1","\\3")+"|").getRegex(),n.tables=b({},n.gfm,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),n.pedantic=b({},n.normal,{html:h("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",n._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/}),r.rules=n,r.lex=function(e,t){return new r(t).lex(e)},r.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},r.prototype.token=function(e,t){var r,i,s,o,a,l,p,c,u,h,d,f,g,m,b,x;for(e=e.replace(/^ +$/gm,"");e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length),s[0].length>1&&this.tokens.push({type:"space"})),s=this.rules.code.exec(e))e=e.substring(s[0].length),s=s[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?s:k(s,"\n")});else if(s=this.rules.fences.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"code",lang:s[2]?s[2].trim():s[2],text:s[3]||""});else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:s[1].length,text:s[2]});else if(t&&(s=this.rules.nptable.exec(e))&&(l={type:"table",header:y(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/\n$/,"").split("\n"):[]}).header.length===l.align.length){for(e=e.substring(s[0].length),d=0;d<l.align.length;d++)/^ *-+: *$/.test(l.align[d])?l.align[d]="right":/^ *:-+: *$/.test(l.align[d])?l.align[d]="center":/^ *:-+ *$/.test(l.align[d])?l.align[d]="left":l.align[d]=null;for(d=0;d<l.cells.length;d++)l.cells[d]=y(l.cells[d],l.header.length);this.tokens.push(l)}else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"hr"});else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"blockquote_start"}),s=s[0].replace(/^ *> ?/gm,""),this.token(s,t),this.tokens.push({type:"blockquote_end"});else if(s=this.rules.list.exec(e)){for(e=e.substring(s[0].length),p={type:"list_start",ordered:m=(o=s[2]).length>1,start:m?+o:"",loose:!1},this.tokens.push(p),c=[],r=!1,g=(s=s[0].match(this.rules.item)).length,d=0;d<g;d++)h=(l=s[d]).length,~(l=l.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(h-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+h+"}","gm"),"")),d!==g-1&&(a=n.bullet.exec(s[d+1])[0],(o.length>1?1===a.length:a.length>1||this.options.smartLists&&a!==o)&&(e=s.slice(d+1).join("\n")+e,d=g-1)),i=r||/\n\n(?!\s*$)/.test(l),d!==g-1&&(r="\n"===l.charAt(l.length-1),i||(i=r)),i&&(p.loose=!0),x=void 0,(b=/^\[[ xX]\] /.test(l))&&(x=" "!==l[1],l=l.replace(/^\[[ xX]\] +/,"")),u={type:"list_item_start",task:b,checked:x,loose:i},c.push(u),this.tokens.push(u),this.token(l,!1),this.tokens.push({type:"list_item_end"});if(p.loose)for(g=c.length,d=0;d<g;d++)c[d].loose=!0;this.tokens.push({type:"list_end"})}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===s[1]||"script"===s[1]||"style"===s[1]),text:s[0]});else if(t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),f=s[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[f]||(this.tokens.links[f]={href:s[2],title:s[3]});else if(t&&(s=this.rules.table.exec(e))&&(l={type:"table",header:y(s[1].replace(/^ *| *\| *$/g,"")),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:s[3]?s[3].replace(/(?: *\| *)?\n$/,"").split("\n"):[]}).header.length===l.align.length){for(e=e.substring(s[0].length),d=0;d<l.align.length;d++)/^ *-+: *$/.test(l.align[d])?l.align[d]="right":/^ *:-+: *$/.test(l.align[d])?l.align[d]="center":/^ *:-+ *$/.test(l.align[d])?l.align[d]="left":l.align[d]=null;for(d=0;d<l.cells.length;d++)l.cells[d]=y(l.cells[d].replace(/^ *\| *| *\| *$/g,""),l.header.length);this.tokens.push(l)}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"heading",depth:"="===s[2]?1:2,text:s[1]});else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),this.tokens.push({type:"paragraph",text:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]});else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),this.tokens.push({type:"text",text:s[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var i={escape:/^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:m,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:m,text:/^(`+|[^`])[\s\S]*?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};function s(e,t){if(this.options=t||x.defaults,this.links=e,this.rules=i.normal,this.renderer=this.options.renderer||new o,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=i.pedantic:this.options.gfm&&(this.options.breaks?this.rules=i.breaks:this.rules=i.gfm)}function o(e){this.options=e||x.defaults}function a(){}function l(e){this.tokens=[],this.token=null,this.options=e||x.defaults,this.options.renderer=this.options.renderer||new o,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new p}function p(){this.seen={}}function c(e,t){if(t){if(c.escapeTest.test(e))return e.replace(c.escapeReplace,function(e){return c.replacements[e]})}else if(c.escapeTestNoEncode.test(e))return e.replace(c.escapeReplaceNoEncode,function(e){return c.replacements[e]});return e}function u(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function h(e,t){return e=e.source||e,t=t||"",{replace:function(t,n){return n=(n=n.source||n).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,n),this},getRegex:function(){return new RegExp(e,t)}}}function d(e,t,n){if(e){try{var r=decodeURIComponent(u(n)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!g.test(n)&&(n=function(e,t){f[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?f[" "+e]=e+"/":f[" "+e]=k(e,"/",!0));return e=f[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n}i._punctuation="!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~",i.em=h(i.em).replace(/punctuation/g,i._punctuation).getRegex(),i._escapes=/\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g,i._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,i._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,i.autolink=h(i.autolink).replace("scheme",i._scheme).replace("email",i._email).getRegex(),i._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,i.tag=h(i.tag).replace("comment",n._comment).replace("attribute",i._attribute).getRegex(),i._label=/(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/,i._href=/\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f\\]*\)|[^\s\x00-\x1f()\\])*?)/,i._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,i.link=h(i.link).replace("label",i._label).replace("href",i._href).replace("title",i._title).getRegex(),i.reflink=h(i.reflink).replace("label",i._label).getRegex(),i.normal=b({},i),i.pedantic=b({},i.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:h(/^!?\[(label)\]\((.*?)\)/).replace("label",i._label).getRegex(),reflink:h(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",i._label).getRegex()}),i.gfm=b({},i.normal,{escape:h(i.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:h(i.text).replace("]|","~]|").replace("|$","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|$").getRegex()}),i.gfm.url=h(i.gfm.url,"i").replace("email",i.gfm._extended_email).getRegex(),i.breaks=b({},i.gfm,{br:h(i.br).replace("{2,}","*").getRegex(),text:h(i.gfm.text).replace("{2,}","*").getRegex()}),s.rules=i,s.output=function(e,t,n){return new s(t,n).output(e)},s.prototype.output=function(e){for(var t,n,r,i,o,a,l="";e;)if(o=this.rules.escape.exec(e))e=e.substring(o[0].length),l+=c(o[1]);else if(o=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(o[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(o[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(o[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(o[0])&&(this.inRawBlock=!1),e=e.substring(o[0].length),l+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(o[0]):c(o[0]):o[0];else if(o=this.rules.link.exec(e))e=e.substring(o[0].length),this.inLink=!0,r=o[2],this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))?(r=t[1],i=t[3]):i="":i=o[3]?o[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),l+=this.outputLink(o,{href:s.escapes(r),title:s.escapes(i)}),this.inLink=!1;else if((o=this.rules.reflink.exec(e))||(o=this.rules.nolink.exec(e))){if(e=e.substring(o[0].length),t=(o[2]||o[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){l+=o[0].charAt(0),e=o[0].substring(1)+e;continue}this.inLink=!0,l+=this.outputLink(o,t),this.inLink=!1}else if(o=this.rules.strong.exec(e))e=e.substring(o[0].length),l+=this.renderer.strong(this.output(o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.em.exec(e))e=e.substring(o[0].length),l+=this.renderer.em(this.output(o[6]||o[5]||o[4]||o[3]||o[2]||o[1]));else if(o=this.rules.code.exec(e))e=e.substring(o[0].length),l+=this.renderer.codespan(c(o[2].trim(),!0));else if(o=this.rules.br.exec(e))e=e.substring(o[0].length),l+=this.renderer.br();else if(o=this.rules.del.exec(e))e=e.substring(o[0].length),l+=this.renderer.del(this.output(o[1]));else if(o=this.rules.autolink.exec(e))e=e.substring(o[0].length),r="@"===o[2]?"mailto:"+(n=c(this.mangle(o[1]))):n=c(o[1]),l+=this.renderer.link(r,null,n);else if(this.inLink||!(o=this.rules.url.exec(e))){if(o=this.rules.text.exec(e))e=e.substring(o[0].length),this.inRawBlock?l+=this.renderer.text(o[0]):l+=this.renderer.text(c(this.smartypants(o[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{if("@"===o[2])r="mailto:"+(n=c(o[0]));else{do{a=o[0],o[0]=this.rules._backpedal.exec(o[0])[0]}while(a!==o[0]);n=c(o[0]),r="www."===o[1]?"http://"+n:n}e=e.substring(o[0].length),l+=this.renderer.link(r,null,n)}return l},s.escapes=function(e){return e?e.replace(s.rules._escapes,"$1"):e},s.prototype.outputLink=function(e,t){var n=t.href,r=t.title?c(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,c(e[1]))},s.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},s.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},o.prototype.code=function(e,t,n){var r=(t||"").match(/\S*/)[0];if(this.options.highlight){var i=this.options.highlight(e,r);null!=i&&i!==e&&(n=!0,e=i)}return r?'<pre><code class="'+this.options.langPrefix+c(r,!0)+'">'+(n?e:c(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:c(e,!0))+"</code></pre>"},o.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},o.prototype.html=function(e){return e},o.prototype.heading=function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},o.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},o.prototype.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},o.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},o.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},o.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},o.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},o.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},o.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},o.prototype.strong=function(e){return"<strong>"+e+"</strong>"},o.prototype.em=function(e){return"<em>"+e+"</em>"},o.prototype.codespan=function(e){return"<code>"+e+"</code>"},o.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},o.prototype.del=function(e){return"<del>"+e+"</del>"},o.prototype.link=function(e,t,n){if(null===(e=d(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<a href="'+c(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>"},o.prototype.image=function(e,t,n){if(null===(e=d(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},o.prototype.text=function(e){return e},a.prototype.strong=a.prototype.em=a.prototype.codespan=a.prototype.del=a.prototype.text=function(e){return e},a.prototype.link=a.prototype.image=function(e,t,n){return""+n},a.prototype.br=function(){return""},l.parse=function(e,t){return new l(t).parse(e)},l.prototype.parse=function(e){this.inline=new s(e.links,this.options),this.inlineText=new s(e.links,b({},this.options,{renderer:new a})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},l.prototype.next=function(){return this.token=this.tokens.pop()},l.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},l.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},l.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,u(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,i="",s="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});s+=this.renderer.tablerow(n)}return this.renderer.table(i,s);case"blockquote_start":for(s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":s="";for(var o=this.token.ordered,a=this.token.start;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,o,a);case"list_item_start":s="";var l=this.token.loose;for(this.token.task&&(s+=this.renderer.checkbox(this.token.checked));"list_item_end"!==this.next().type;)s+=l||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(s);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:var p='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(p);console.log(p)}},p.prototype.slug=function(e){var t=e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){var n=t;do{this.seen[n]++,t=n+"-"+this.seen[n]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t},c.escapeTest=/[&<>"']/,c.escapeReplace=/[&<>"']/g,c.replacements={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},c.escapeTestNoEncode=/[<>"']|&(?!#?\w+;)/,c.escapeReplaceNoEncode=/[<>"']|&(?!#?\w+;)/g;var f={},g=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function m(){}function b(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function y(e,t){var n=e.replace(/\|/g,function(e,t,n){for(var r=!1,i=t;--i>=0&&"\\"===n[i];)r=!r;return r?"|":" |"}).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function k(e,t,n){if(0===e.length)return"";for(var r=0;r<e.length;){var i=e.charAt(e.length-r-1);if(i!==t||n){if(i===t||!n)break;r++}else r++}return e.substr(0,e.length-r)}function x(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null);var i,s,o=(t=b({},x.defaults,t||{})).highlight,a=0;try{i=r.lex(e,t)}catch(e){return n(e)}s=i.length;var p=function(e){if(e)return t.highlight=o,n(e);var r;try{r=l.parse(i,t)}catch(t){e=t}return t.highlight=o,e?n(e):n(null,r)};if(!o||o.length<3)return p();if(delete t.highlight,!s)return p();for(;a<i.length;a++)!function(e){"code"!==e.type?--s||p():o(e.text,e.lang,function(t,n){return t?p(t):null==n||n===e.text?--s||p():(e.text=n,e.escaped=!0,void(--s||p()))})}(i[a])}else try{return t&&(t=b({},x.defaults,t)),l.parse(r.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||x.defaults).silent)return"<p>An error occurred:</p><pre>"+c(e.message+"",!0)+"</pre>";throw e}}m.exec=m,x.options=x.setOptions=function(e){return b(x.defaults,e),x},x.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new o,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tables:!0,xhtml:!1}},x.defaults=x.getDefaults(),x.Parser=l,x.parser=l.parse,x.Renderer=o,x.TextRenderer=a,x.Lexer=r,x.lexer=r.lex,x.InlineLexer=s,x.inlineLexer=s.output,x.Slugger=p,x.parse=x,e.exports=x}(this||"undefined"!=typeof window&&window)}).call(this,n(4))},52:function(e,t,n){e.exports=function(){"use strict";var e=["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"],t=["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"],n=["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"],r=["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"],i=["#text"],s=["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"],o=["accent-height","accumulate","additivive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"],a=["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"],l=["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"];function p(e,t){for(var n=t.length;n--;)"string"==typeof t[n]&&(t[n]=t[n].toLowerCase()),e[t[n]]=!0;return e}function c(e){var t={},n=void 0;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}var u=/\{\{[\s\S]*|[\s\S]*\}\}/gm,h=/<%[\s\S]*|[\s\S]*%>/gm,d=/^data-[\-\w.\u00B7-\uFFFF]/,f=/^aria-[\-\w]+$/,g=/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,m=/^(?:\w+script|data):/i,b=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function k(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var x=function(){return"undefined"==typeof window?null:window};return function v(){var _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x(),w=function(e){return v(e)};if(w.version="1.0.8",w.removed=[],!_||!_.document||9!==_.document.nodeType)return w.isSupported=!1,w;var A=_.document,S=!1,T=!1,L=_.document,R=_.DocumentFragment,E=_.HTMLTemplateElement,z=_.Node,$=_.NodeFilter,O=_.NamedNodeMap,C=void 0===O?_.NamedNodeMap||_.MozNamedAttrMap:O,N=_.Text,D=_.Comment,M=_.DOMParser;if("function"==typeof E){var F=L.createElement("template");F.content&&F.content.ownerDocument&&(L=F.content.ownerDocument)}var H=L,I=H.implementation,q=H.createNodeIterator,Z=H.getElementsByTagName,P=H.createDocumentFragment,j=A.importNode,U={};w.isSupported=I&&void 0!==I.createHTMLDocument&&9!==L.documentMode;var B=u,W=h,G=d,V=f,X=m,J=b,Y=g,K=null,Q=p({},[].concat(k(e),k(t),k(n),k(r),k(i))),ee=null,te=p({},[].concat(k(s),k(o),k(a),k(l))),ne=null,re=null,ie=!0,se=!0,oe=!1,ae=!1,le=!1,pe=!1,ce=!1,ue=!1,he=!1,de=!1,fe=!1,ge=!0,me=!0,be=!1,ye={},ke=p({},["audio","head","math","script","style","template","svg","video"]),xe=p({},["audio","video","img","source","image"]),ve=p({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),_e=null,we=L.createElement("form"),Ae=function(u){"object"!==(void 0===u?"undefined":y(u))&&(u={}),K="ALLOWED_TAGS"in u?p({},u.ALLOWED_TAGS):Q,ee="ALLOWED_ATTR"in u?p({},u.ALLOWED_ATTR):te,ne="FORBID_TAGS"in u?p({},u.FORBID_TAGS):{},re="FORBID_ATTR"in u?p({},u.FORBID_ATTR):{},ye="USE_PROFILES"in u&&u.USE_PROFILES,ie=!1!==u.ALLOW_ARIA_ATTR,se=!1!==u.ALLOW_DATA_ATTR,oe=u.ALLOW_UNKNOWN_PROTOCOLS||!1,ae=u.SAFE_FOR_JQUERY||!1,le=u.SAFE_FOR_TEMPLATES||!1,pe=u.WHOLE_DOCUMENT||!1,he=u.RETURN_DOM||!1,de=u.RETURN_DOM_FRAGMENT||!1,fe=u.RETURN_DOM_IMPORT||!1,ue=u.FORCE_BODY||!1,ge=!1!==u.SANITIZE_DOM,me=!1!==u.KEEP_CONTENT,be=u.IN_PLACE||!1,Y=u.ALLOWED_URI_REGEXP||Y,le&&(se=!1),de&&(he=!0),ye&&(K=p({},[].concat(k(i))),ee=[],!0===ye.html&&(p(K,e),p(ee,s)),!0===ye.svg&&(p(K,t),p(ee,o),p(ee,l)),!0===ye.svgFilters&&(p(K,n),p(ee,o),p(ee,l)),!0===ye.mathMl&&(p(K,r),p(ee,a),p(ee,l))),u.ADD_TAGS&&(K===Q&&(K=c(K)),p(K,u.ADD_TAGS)),u.ADD_ATTR&&(ee===te&&(ee=c(ee)),p(ee,u.ADD_ATTR)),u.ADD_URI_SAFE_ATTR&&p(ve,u.ADD_URI_SAFE_ATTR),me&&(K["#text"]=!0),pe&&p(K,["html","head","body"]),K.table&&p(K,["tbody"]),Object&&"freeze"in Object&&Object.freeze(u),_e=u},Se=function(e){w.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},Te=function(e,t){try{w.removed.push({attribute:t.getAttributeNode(e),from:t})}catch(e){w.removed.push({attribute:null,from:t})}t.removeAttribute(e)},Le=function(e){var t=void 0;if(ue&&(e="<remove></remove>"+e),S)try{t=(new M).parseFromString(e,"text/html")}catch(e){}if(T&&p(ne,["title"]),!t||!t.documentElement){var n=t=I.createHTMLDocument(""),r=n.body;r.parentNode.removeChild(r.parentNode.firstElementChild),r.outerHTML=e}return Z.call(t,pe?"html":"body")[0]};w.isSupported&&(function(){try{var e=Le('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">');e.querySelector("svg img")&&(S=!0)}catch(e){}}(),function(){try{var e=Le("<x/><title>&lt;/title&gt;&lt;img&gt;");e.querySelector("title").textContent.match(/<\/title/)&&(T=!0)}catch(e){}}());var Re=function(e){return q.call(e.ownerDocument||e,e,$.SHOW_ELEMENT|$.SHOW_COMMENT|$.SHOW_TEXT,function(){return $.FILTER_ACCEPT},!1)},Ee=function(e){return"object"===(void 0===z?"undefined":y(z))?e instanceof z:e&&"object"===(void 0===e?"undefined":y(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},ze=function(e,t,n){U[e]&&U[e].forEach(function(e){e.call(w,t,n,_e)})},$e=function(e){var t,n=void 0;if(ze("beforeSanitizeElements",e,null),!((t=e)instanceof N||t instanceof D||"string"==typeof t.nodeName&&"string"==typeof t.textContent&&"function"==typeof t.removeChild&&t.attributes instanceof C&&"function"==typeof t.removeAttribute&&"function"==typeof t.setAttribute))return Se(e),!0;var r=e.nodeName.toLowerCase();if(ze("uponSanitizeElement",e,{tagName:r,allowedTags:K}),!K[r]||ne[r]){if(me&&!ke[r]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(e){}return Se(e),!0}return!ae||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(w.removed.push({element:e.cloneNode()}),e.innerHTML?e.innerHTML=e.innerHTML.replace(/</g,"&lt;"):e.innerHTML=e.textContent.replace(/</g,"&lt;")),le&&3===e.nodeType&&(n=(n=(n=e.textContent).replace(B," ")).replace(W," "),e.textContent!==n&&(w.removed.push({element:e.cloneNode()}),e.textContent=n)),ze("afterSanitizeElements",e,null),!1},Oe=function(e,t,n){if(ge&&("id"===t||"name"===t)&&(n in L||n in we))return!1;if(le&&(n=(n=n.replace(B," ")).replace(W," ")),se&&G.test(t));else if(ie&&V.test(t));else{if(!ee[t]||re[t])return!1;if(ve[t]);else if(Y.test(n.replace(J,"")));else if("src"!==t&&"xlink:href"!==t||"script"===e||0!==n.indexOf("data:")||!xe[e])if(oe&&!X.test(n.replace(J,"")));else if(n)return!1}return!0},Ce=function(e){var t=void 0,n=void 0,r=void 0,i=void 0,s=void 0;ze("beforeSanitizeAttributes",e,null);var o=e.attributes;if(o){var a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ee};for(s=o.length;s--;){var l=t=o[s],p=l.name,c=l.namespaceURI;if(n=t.value.trim(),r=p.toLowerCase(),a.attrName=r,a.attrValue=n,a.keepAttr=!0,ze("uponSanitizeAttribute",e,a),n=a.attrValue,"name"===r&&"IMG"===e.nodeName&&o.id)i=o.id,o=Array.prototype.slice.apply(o),Te("id",e),Te(p,e),o.indexOf(i)>s&&e.setAttribute("id",i.value);else{if("INPUT"===e.nodeName&&"type"===r&&"file"===n&&(ee[r]||!re[r]))continue;"id"===p&&e.setAttribute(p,""),Te(p,e)}if(a.keepAttr){var u=e.nodeName.toLowerCase();if(Oe(u,r,n))try{c?e.setAttributeNS(c,p,n):e.setAttribute(p,n),w.removed.pop()}catch(e){}}}ze("afterSanitizeAttributes",e,null)}},Ne=function e(t){var n=void 0,r=Re(t);for(ze("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)ze("uponSanitizeShadowNode",n,null),$e(n)||(n.content instanceof R&&e(n.content),Ce(n));ze("afterSanitizeShadowDOM",t,null)};return w.sanitize=function(e,t){var n=void 0,r=void 0,i=void 0,s=void 0,o=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Ee(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!w.isSupported){if("object"===y(_.toStaticHTML)||"function"==typeof _.toStaticHTML){if("string"==typeof e)return _.toStaticHTML(e);if(Ee(e))return _.toStaticHTML(e.outerHTML)}return e}if(ce||Ae(t),w.removed=[],be);else if(e instanceof z)n=Le("\x3c!--\x3e"),1===(r=n.ownerDocument.importNode(e,!0)).nodeType&&"BODY"===r.nodeName?n=r:n.appendChild(r);else{if(!he&&!pe&&-1===e.indexOf("<"))return e;if(!(n=Le(e)))return he?null:""}n&&ue&&Se(n.firstChild);for(var a=Re(be?e:n);i=a.nextNode();)3===i.nodeType&&i===s||$e(i)||(i.content instanceof R&&Ne(i.content),Ce(i),s=i);if(be)return e;if(he){if(de)for(o=P.call(n.ownerDocument);n.firstChild;)o.appendChild(n.firstChild);else o=n;return fe&&(o=j.call(A,o,!0)),o}return pe?n.outerHTML:n.innerHTML},w.setConfig=function(e){Ae(e),ce=!0},w.clearConfig=function(){_e=null,ce=!1},w.isValidAttribute=function(e,t,n){_e||Ae({});var r=e.toLowerCase(),i=t.toLowerCase();return Oe(r,i,n)},w.addHook=function(e,t){"function"==typeof t&&(U[e]=U[e]||[],U[e].push(t))},w.removeHook=function(e){U[e]&&U[e].pop()},w.removeHooks=function(e){U[e]&&(U[e]=[])},w.removeAllHooks=function(){U={}},w}()}()}}]);
//# sourceMappingURL=4.js.map