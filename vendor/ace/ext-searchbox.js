ace.define("ace/ext/searchbox",["require","exports","module","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/keyboard/hash_handler","ace/lib/keys"],function(a,b,c){"use strict";var d=a("../lib/dom"),e=a("../lib/lang"),f=a("../lib/event"),g=".ace_search {background-color: #ddd;border: 1px solid #cbcbcb;border-top: 0 none;max-width: 325px;overflow: hidden;margin: 0;padding: 4px;padding-right: 6px;padding-bottom: 0;position: absolute;top: 0px;z-index: 99;white-space: normal;}.ace_search.left {border-left: 0 none;border-radius: 0px 0px 5px 0px;left: 0;}.ace_search.right {border-radius: 0px 0px 0px 5px;border-right: 0 none;right: 0;}.ace_search_form, .ace_replace_form {border-radius: 3px;border: 1px solid #cbcbcb;float: left;margin-bottom: 4px;overflow: hidden;}.ace_search_form.ace_nomatch {outline: 1px solid red;}.ace_search_field {background-color: white;border-right: 1px solid #cbcbcb;border: 0 none;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;float: left;height: 22px;outline: 0;padding: 0 7px;width: 214px;margin: 0;}.ace_searchbtn,.ace_replacebtn {background: #fff;border: 0 none;border-left: 1px solid #dcdcdc;cursor: pointer;float: left;height: 22px;margin: 0;padding: 0;position: relative;}.ace_searchbtn:last-child,.ace_replacebtn:last-child {border-top-right-radius: 3px;border-bottom-right-radius: 3px;}.ace_searchbtn:disabled {background: none;cursor: default;}.ace_searchbtn {background-position: 50% 50%;background-repeat: no-repeat;width: 27px;}.ace_searchbtn.prev {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpiSU1NZUAC/6E0I0yACYskCpsJiySKIiY0SUZk40FyTEgCjGgKwTRAgAEAQJUIPCE+qfkAAAAASUVORK5CYII=);    }.ace_searchbtn.next {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADRJREFUeNpiTE1NZQCC/0DMyIAKwGJMUAYDEo3M/s+EpvM/mkKwCQxYjIeLMaELoLMBAgwAU7UJObTKsvAAAAAASUVORK5CYII=);    }.ace_searchbtn_close {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;border-radius: 50%;border: 0 none;color: #656565;cursor: pointer;float: right;font: 16px/16px Arial;height: 14px;margin: 5px 1px 9px 5px;padding: 0;text-align: center;width: 14px;}.ace_searchbtn_close:hover {background-color: #656565;background-position: 50% 100%;color: white;}.ace_replacebtn.prev {width: 54px}.ace_replacebtn.next {width: 27px}.ace_button {margin-left: 2px;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-o-user-select: none;-ms-user-select: none;user-select: none;overflow: hidden;opacity: 0.7;border: 1px solid rgba(100,100,100,0.23);padding: 1px;-moz-box-sizing: border-box;box-sizing:    border-box;color: black;}.ace_button:hover {background-color: #eee;opacity:1;}.ace_button:active {background-color: #ddd;}.ace_button.checked {border-color: #3399ff;opacity:1;}.ace_search_options{margin-bottom: 3px;text-align: right;-webkit-user-select: none;-moz-user-select: none;-o-user-select: none;-ms-user-select: none;user-select: none;}",h=a("../keyboard/hash_handler").HashHandler,i=a("../lib/keys");d.importCssString(g,"ace_searchbox");var j='<div class="ace_search right">    <button type="button" action="hide" class="ace_searchbtn_close"></button>    <div class="ace_search_form">        <input class="ace_search_field" placeholder="Search for" spellcheck="false"></input>        <button type="button" action="findNext" class="ace_searchbtn next"></button>        <button type="button" action="findPrev" class="ace_searchbtn prev"></button>        <button type="button" action="findAll" class="ace_searchbtn" title="Alt-Enter">All</button>    </div>    <div class="ace_replace_form">        <input class="ace_search_field" placeholder="Replace with" spellcheck="false"></input>        <button type="button" action="replaceAndFindNext" class="ace_replacebtn">Replace</button>        <button type="button" action="replaceAll" class="ace_replacebtn">All</button>    </div>    <div class="ace_search_options">        <span action="toggleRegexpMode" class="ace_button" title="RegExp Search">.*</span>        <span action="toggleCaseSensitive" class="ace_button" title="CaseSensitive Search">Aa</span>        <span action="toggleWholeWords" class="ace_button" title="Whole Word Search">\\b</span>    </div></div>'.replace(/>\s+/g,">"),k=function(a,b,c){var e=d.createElement("div");e.innerHTML=j,this.element=e.firstChild,this.$init(),this.setEditor(a)};(function(){this.setEditor=function(a){a.searchBox=this,a.container.appendChild(this.element),this.editor=a},this.$initElements=function(a){this.searchBox=a.querySelector(".ace_search_form"),this.replaceBox=a.querySelector(".ace_replace_form"),this.searchOptions=a.querySelector(".ace_search_options"),this.regExpOption=a.querySelector("[action=toggleRegexpMode]"),this.caseSensitiveOption=a.querySelector("[action=toggleCaseSensitive]"),this.wholeWordOption=a.querySelector("[action=toggleWholeWords]"),this.searchInput=this.searchBox.querySelector(".ace_search_field"),this.replaceInput=this.replaceBox.querySelector(".ace_search_field")},this.$init=function(){var a=this.element;this.$initElements(a);var b=this;f.addListener(a,"mousedown",function(a){setTimeout(function(){b.activeInput.focus()},0),f.stopPropagation(a)}),f.addListener(a,"click",function(a){var c=a.target||a.srcElement,d=c.getAttribute("action");d&&b[d]?b[d]():b.$searchBarKb.commands[d]&&b.$searchBarKb.commands[d].exec(b),f.stopPropagation(a)}),f.addCommandKeyListener(a,function(a,c,d){var e=i.keyCodeToString(d),g=b.$searchBarKb.findKeyCommand(c,e);g&&g.exec&&(g.exec(b),f.stopEvent(a))}),this.$onChange=e.delayedCall(function(){b.find(!1,!1)}),f.addListener(this.searchInput,"input",function(){b.$onChange.schedule(20)}),f.addListener(this.searchInput,"focus",function(){b.activeInput=b.searchInput,b.searchInput.value&&b.highlight()}),f.addListener(this.replaceInput,"focus",function(){b.activeInput=b.replaceInput,b.searchInput.value&&b.highlight()})},this.$closeSearchBarKb=new h([{bindKey:"Esc",name:"closeSearchBar",exec:function(a){a.searchBox.hide()}}]),this.$searchBarKb=new h,this.$searchBarKb.bindKeys({"Ctrl-f|Command-f|Ctrl-H|Command-Option-F":function(a){var b=a.isReplace=!a.isReplace;a.replaceBox.style.display=b?"":"none",a[b?"replaceInput":"searchInput"].focus()},"Ctrl-G|Command-G":function(a){a.findNext()},"Ctrl-Shift-G|Command-Shift-G":function(a){a.findPrev()},esc:function(a){setTimeout(function(){a.hide()})},Return:function(a){a.activeInput==a.replaceInput&&a.replace(),a.findNext()},"Shift-Return":function(a){a.activeInput==a.replaceInput&&a.replace(),a.findPrev()},"Alt-Return":function(a){a.activeInput==a.replaceInput&&a.replaceAll(),a.findAll()},Tab:function(a){(a.activeInput==a.replaceInput?a.searchInput:a.replaceInput).focus()}}),this.$searchBarKb.addCommands([{name:"toggleRegexpMode",bindKey:{win:"Alt-R|Alt-/",mac:"Ctrl-Alt-R|Ctrl-Alt-/"},exec:function(a){a.regExpOption.checked=!a.regExpOption.checked,a.$syncOptions()}},{name:"toggleCaseSensitive",bindKey:{win:"Alt-C|Alt-I",mac:"Ctrl-Alt-R|Ctrl-Alt-I"},exec:function(a){a.caseSensitiveOption.checked=!a.caseSensitiveOption.checked,a.$syncOptions()}},{name:"toggleWholeWords",bindKey:{win:"Alt-B|Alt-W",mac:"Ctrl-Alt-B|Ctrl-Alt-W"},exec:function(a){a.wholeWordOption.checked=!a.wholeWordOption.checked,a.$syncOptions()}}]),this.$syncOptions=function(){d.setCssClass(this.regExpOption,"checked",this.regExpOption.checked),d.setCssClass(this.wholeWordOption,"checked",this.wholeWordOption.checked),d.setCssClass(this.caseSensitiveOption,"checked",this.caseSensitiveOption.checked),this.find(!1,!1)},this.highlight=function(a){this.editor.session.highlight(a||this.editor.$search.$options.re),this.editor.renderer.updateBackMarkers()},this.find=function(a,b){var c=this.editor.find(this.searchInput.value,{skipCurrent:a,backwards:b,wrap:!0,regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked}),e=!c&&this.searchInput.value;d.setCssClass(this.searchBox,"ace_nomatch",e),this.editor._emit("findSearchBox",{match:!e}),this.highlight()},this.findNext=function(){this.find(!0,!1)},this.findPrev=function(){this.find(!0,!0)},this.findAll=function(){var a=this.editor.findAll(this.searchInput.value,{regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked}),b=!a&&this.searchInput.value;d.setCssClass(this.searchBox,"ace_nomatch",b),this.editor._emit("findSearchBox",{match:!b}),this.highlight(),this.hide()},this.replace=function(){this.editor.getReadOnly()||this.editor.replace(this.replaceInput.value)},this.replaceAndFindNext=function(){this.editor.getReadOnly()||(this.editor.replace(this.replaceInput.value),this.findNext())},this.replaceAll=function(){this.editor.getReadOnly()||this.editor.replaceAll(this.replaceInput.value)},this.hide=function(){this.element.style.display="none",this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb),this.editor.focus()},this.show=function(a,b){this.element.style.display="",this.replaceBox.style.display=b?"":"none",this.isReplace=b,a&&(this.searchInput.value=a),this.searchInput.focus(),this.searchInput.select(),this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb)},this.isFocused=function(){var a=document.activeElement;return a==this.searchInput||a==this.replaceInput}}).call(k.prototype),b.SearchBox=k,b.Search=function(a,b){var c=a.searchBox||new k(a);c.show(a.session.getTextRange(),b)}}),function(){ace.require(["ace/ext/searchbox"],function(){})}();