// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17906__auto__ = [];
var len__17899__auto___26692 = arguments.length;
var i__17900__auto___26693 = (0);
while(true){
if((i__17900__auto___26693 < len__17899__auto___26692)){
args__17906__auto__.push((arguments[i__17900__auto___26693]));

var G__26694 = (i__17900__auto___26693 + (1));
i__17900__auto___26693 = G__26694;
continue;
} else {
}
break;
}

var argseq__17907__auto__ = ((((2) < args__17906__auto__.length))?(new cljs.core.IndexedSeq(args__17906__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17907__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26684_26695 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26685_26696 = null;
var count__26686_26697 = (0);
var i__26687_26698 = (0);
while(true){
if((i__26687_26698 < count__26686_26697)){
var k_26699 = cljs.core._nth.call(null,chunk__26685_26696,i__26687_26698);
e.setAttribute(cljs.core.name.call(null,k_26699),cljs.core.get.call(null,attrs,k_26699));

var G__26700 = seq__26684_26695;
var G__26701 = chunk__26685_26696;
var G__26702 = count__26686_26697;
var G__26703 = (i__26687_26698 + (1));
seq__26684_26695 = G__26700;
chunk__26685_26696 = G__26701;
count__26686_26697 = G__26702;
i__26687_26698 = G__26703;
continue;
} else {
var temp__4425__auto___26704 = cljs.core.seq.call(null,seq__26684_26695);
if(temp__4425__auto___26704){
var seq__26684_26705__$1 = temp__4425__auto___26704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26684_26705__$1)){
var c__17644__auto___26706 = cljs.core.chunk_first.call(null,seq__26684_26705__$1);
var G__26707 = cljs.core.chunk_rest.call(null,seq__26684_26705__$1);
var G__26708 = c__17644__auto___26706;
var G__26709 = cljs.core.count.call(null,c__17644__auto___26706);
var G__26710 = (0);
seq__26684_26695 = G__26707;
chunk__26685_26696 = G__26708;
count__26686_26697 = G__26709;
i__26687_26698 = G__26710;
continue;
} else {
var k_26711 = cljs.core.first.call(null,seq__26684_26705__$1);
e.setAttribute(cljs.core.name.call(null,k_26711),cljs.core.get.call(null,attrs,k_26711));

var G__26712 = cljs.core.next.call(null,seq__26684_26705__$1);
var G__26713 = null;
var G__26714 = (0);
var G__26715 = (0);
seq__26684_26695 = G__26712;
chunk__26685_26696 = G__26713;
count__26686_26697 = G__26714;
i__26687_26698 = G__26715;
continue;
}
} else {
}
}
break;
}

var seq__26688_26716 = cljs.core.seq.call(null,children);
var chunk__26689_26717 = null;
var count__26690_26718 = (0);
var i__26691_26719 = (0);
while(true){
if((i__26691_26719 < count__26690_26718)){
var ch_26720 = cljs.core._nth.call(null,chunk__26689_26717,i__26691_26719);
e.appendChild(ch_26720);

var G__26721 = seq__26688_26716;
var G__26722 = chunk__26689_26717;
var G__26723 = count__26690_26718;
var G__26724 = (i__26691_26719 + (1));
seq__26688_26716 = G__26721;
chunk__26689_26717 = G__26722;
count__26690_26718 = G__26723;
i__26691_26719 = G__26724;
continue;
} else {
var temp__4425__auto___26725 = cljs.core.seq.call(null,seq__26688_26716);
if(temp__4425__auto___26725){
var seq__26688_26726__$1 = temp__4425__auto___26725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26688_26726__$1)){
var c__17644__auto___26727 = cljs.core.chunk_first.call(null,seq__26688_26726__$1);
var G__26728 = cljs.core.chunk_rest.call(null,seq__26688_26726__$1);
var G__26729 = c__17644__auto___26727;
var G__26730 = cljs.core.count.call(null,c__17644__auto___26727);
var G__26731 = (0);
seq__26688_26716 = G__26728;
chunk__26689_26717 = G__26729;
count__26690_26718 = G__26730;
i__26691_26719 = G__26731;
continue;
} else {
var ch_26732 = cljs.core.first.call(null,seq__26688_26726__$1);
e.appendChild(ch_26732);

var G__26733 = cljs.core.next.call(null,seq__26688_26726__$1);
var G__26734 = null;
var G__26735 = (0);
var G__26736 = (0);
seq__26688_26716 = G__26733;
chunk__26689_26717 = G__26734;
count__26690_26718 = G__26735;
i__26691_26719 = G__26736;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26681){
var G__26682 = cljs.core.first.call(null,seq26681);
var seq26681__$1 = cljs.core.next.call(null,seq26681);
var G__26683 = cljs.core.first.call(null,seq26681__$1);
var seq26681__$2 = cljs.core.next.call(null,seq26681__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26682,G__26683,seq26681__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17754__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17755__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17756__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17757__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17758__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17754__auto__,prefer_table__17755__auto__,method_cache__17756__auto__,cached_hierarchy__17757__auto__,hierarchy__17758__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17754__auto__,prefer_table__17755__auto__,method_cache__17756__auto__,cached_hierarchy__17757__auto__,hierarchy__17758__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17758__auto__,method_table__17754__auto__,prefer_table__17755__auto__,method_cache__17756__auto__,cached_hierarchy__17757__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_26737 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26737.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26737.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_26737.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26737);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26738,st_map){
var map__26743 = p__26738;
var map__26743__$1 = ((((!((map__26743 == null)))?((((map__26743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26743):map__26743);
var container_el = cljs.core.get.call(null,map__26743__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26743,map__26743__$1,container_el){
return (function (p__26745){
var vec__26746 = p__26745;
var k = cljs.core.nth.call(null,vec__26746,(0),null);
var v = cljs.core.nth.call(null,vec__26746,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26743,map__26743__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26747,dom_str){
var map__26750 = p__26747;
var map__26750__$1 = ((((!((map__26750 == null)))?((((map__26750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26750):map__26750);
var c = map__26750__$1;
var content_area_el = cljs.core.get.call(null,map__26750__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26752){
var map__26755 = p__26752;
var map__26755__$1 = ((((!((map__26755 == null)))?((((map__26755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26755):map__26755);
var content_area_el = cljs.core.get.call(null,map__26755__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto__){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto__){
return (function (state_26798){
var state_val_26799 = (state_26798[(1)]);
if((state_val_26799 === (1))){
var inst_26783 = (state_26798[(7)]);
var inst_26783__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26784 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26785 = ["10px","10px","100%","68px","1.0"];
var inst_26786 = cljs.core.PersistentHashMap.fromArrays(inst_26784,inst_26785);
var inst_26787 = cljs.core.merge.call(null,inst_26786,style);
var inst_26788 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26783__$1,inst_26787);
var inst_26789 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26783__$1,msg);
var inst_26790 = cljs.core.async.timeout.call(null,(300));
var state_26798__$1 = (function (){var statearr_26800 = state_26798;
(statearr_26800[(8)] = inst_26789);

(statearr_26800[(7)] = inst_26783__$1);

(statearr_26800[(9)] = inst_26788);

return statearr_26800;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26798__$1,(2),inst_26790);
} else {
if((state_val_26799 === (2))){
var inst_26783 = (state_26798[(7)]);
var inst_26792 = (state_26798[(2)]);
var inst_26793 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26794 = ["auto"];
var inst_26795 = cljs.core.PersistentHashMap.fromArrays(inst_26793,inst_26794);
var inst_26796 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26783,inst_26795);
var state_26798__$1 = (function (){var statearr_26801 = state_26798;
(statearr_26801[(10)] = inst_26792);

return statearr_26801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26798__$1,inst_26796);
} else {
return null;
}
}
});})(c__22650__auto__))
;
return ((function (switch__22538__auto__,c__22650__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22539__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22539__auto____0 = (function (){
var statearr_26805 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26805[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22539__auto__);

(statearr_26805[(1)] = (1));

return statearr_26805;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22539__auto____1 = (function (state_26798){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_26798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e26806){if((e26806 instanceof Object)){
var ex__22542__auto__ = e26806;
var statearr_26807_26809 = state_26798;
(statearr_26807_26809[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26810 = state_26798;
state_26798 = G__26810;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22539__auto__ = function(state_26798){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22539__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22539__auto____1.call(this,state_26798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22539__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22539__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto__))
})();
var state__22652__auto__ = (function (){var statearr_26808 = f__22651__auto__.call(null);
(statearr_26808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto__);

return statearr_26808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto__))
);

return c__22650__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__26812 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__26812,(0),null);
var ln = cljs.core.nth.call(null,vec__26812,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26815 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26815,(0),null);
var file_line = cljs.core.nth.call(null,vec__26815,(1),null);
var file_column = cljs.core.nth.call(null,vec__26815,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26815,file_name,file_line,file_column){
return (function (p1__26813_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__26813_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__26815,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16841__auto__ = file_line;
if(cljs.core.truth_(or__16841__auto__)){
return or__16841__auto__;
} else {
var and__16829__auto__ = cause;
if(cljs.core.truth_(and__16829__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16829__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__26818 = figwheel.client.heads_up.ensure_container.call(null);
var map__26818__$1 = ((((!((map__26818 == null)))?((((map__26818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26818):map__26818);
var content_area_el = cljs.core.get.call(null,map__26818__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto__){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto__){
return (function (state_26866){
var state_val_26867 = (state_26866[(1)]);
if((state_val_26867 === (1))){
var inst_26849 = (state_26866[(7)]);
var inst_26849__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26850 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26851 = ["0.0"];
var inst_26852 = cljs.core.PersistentHashMap.fromArrays(inst_26850,inst_26851);
var inst_26853 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26849__$1,inst_26852);
var inst_26854 = cljs.core.async.timeout.call(null,(300));
var state_26866__$1 = (function (){var statearr_26868 = state_26866;
(statearr_26868[(7)] = inst_26849__$1);

(statearr_26868[(8)] = inst_26853);

return statearr_26868;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26866__$1,(2),inst_26854);
} else {
if((state_val_26867 === (2))){
var inst_26849 = (state_26866[(7)]);
var inst_26856 = (state_26866[(2)]);
var inst_26857 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26858 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26859 = cljs.core.PersistentHashMap.fromArrays(inst_26857,inst_26858);
var inst_26860 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26849,inst_26859);
var inst_26861 = cljs.core.async.timeout.call(null,(200));
var state_26866__$1 = (function (){var statearr_26869 = state_26866;
(statearr_26869[(9)] = inst_26860);

(statearr_26869[(10)] = inst_26856);

return statearr_26869;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26866__$1,(3),inst_26861);
} else {
if((state_val_26867 === (3))){
var inst_26849 = (state_26866[(7)]);
var inst_26863 = (state_26866[(2)]);
var inst_26864 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26849,"");
var state_26866__$1 = (function (){var statearr_26870 = state_26866;
(statearr_26870[(11)] = inst_26863);

return statearr_26870;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26866__$1,inst_26864);
} else {
return null;
}
}
}
});})(c__22650__auto__))
;
return ((function (switch__22538__auto__,c__22650__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22539__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22539__auto____0 = (function (){
var statearr_26874 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26874[(0)] = figwheel$client$heads_up$clear_$_state_machine__22539__auto__);

(statearr_26874[(1)] = (1));

return statearr_26874;
});
var figwheel$client$heads_up$clear_$_state_machine__22539__auto____1 = (function (state_26866){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_26866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e26875){if((e26875 instanceof Object)){
var ex__22542__auto__ = e26875;
var statearr_26876_26878 = state_26866;
(statearr_26876_26878[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26879 = state_26866;
state_26866 = G__26879;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22539__auto__ = function(state_26866){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22539__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22539__auto____1.call(this,state_26866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22539__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22539__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto__))
})();
var state__22652__auto__ = (function (){var statearr_26877 = f__22651__auto__.call(null);
(statearr_26877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto__);

return statearr_26877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto__))
);

return c__22650__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22650__auto__){
return (function (){
var f__22651__auto__ = (function (){var switch__22538__auto__ = ((function (c__22650__auto__){
return (function (state_26911){
var state_val_26912 = (state_26911[(1)]);
if((state_val_26912 === (1))){
var inst_26901 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26911__$1 = state_26911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26911__$1,(2),inst_26901);
} else {
if((state_val_26912 === (2))){
var inst_26903 = (state_26911[(2)]);
var inst_26904 = cljs.core.async.timeout.call(null,(400));
var state_26911__$1 = (function (){var statearr_26913 = state_26911;
(statearr_26913[(7)] = inst_26903);

return statearr_26913;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26911__$1,(3),inst_26904);
} else {
if((state_val_26912 === (3))){
var inst_26906 = (state_26911[(2)]);
var inst_26907 = figwheel.client.heads_up.clear.call(null);
var state_26911__$1 = (function (){var statearr_26914 = state_26911;
(statearr_26914[(8)] = inst_26906);

return statearr_26914;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26911__$1,(4),inst_26907);
} else {
if((state_val_26912 === (4))){
var inst_26909 = (state_26911[(2)]);
var state_26911__$1 = state_26911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26911__$1,inst_26909);
} else {
return null;
}
}
}
}
});})(c__22650__auto__))
;
return ((function (switch__22538__auto__,c__22650__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22539__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22539__auto____0 = (function (){
var statearr_26918 = [null,null,null,null,null,null,null,null,null];
(statearr_26918[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22539__auto__);

(statearr_26918[(1)] = (1));

return statearr_26918;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22539__auto____1 = (function (state_26911){
while(true){
var ret_value__22540__auto__ = (function (){try{while(true){
var result__22541__auto__ = switch__22538__auto__.call(null,state_26911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22541__auto__;
}
break;
}
}catch (e26919){if((e26919 instanceof Object)){
var ex__22542__auto__ = e26919;
var statearr_26920_26922 = state_26911;
(statearr_26920_26922[(5)] = ex__22542__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26923 = state_26911;
state_26911 = G__26923;
continue;
} else {
return ret_value__22540__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22539__auto__ = function(state_26911){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22539__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22539__auto____1.call(this,state_26911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22539__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22539__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22539__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22539__auto__;
})()
;})(switch__22538__auto__,c__22650__auto__))
})();
var state__22652__auto__ = (function (){var statearr_26921 = f__22651__auto__.call(null);
(statearr_26921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22650__auto__);

return statearr_26921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22652__auto__);
});})(c__22650__auto__))
);

return c__22650__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map