"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[782],{9679:function(e,t,s){s.d(t,{OI:function(){return r},Se:function(){return l},nv:function(){return o}});var a=s(3396),c=s(65);const l=()=>{const e=(0,c.oR)();return Object.fromEntries(Object.keys(e.getters).map((t=>[t,(0,a.Fl)((()=>e.getters[t]))])))},r=()=>{const e=(0,c.oR)();return Object.fromEntries(Object.keys(e._mutations).map((t=>[t,s=>e.commit(t,s)])))},o=()=>{const e=(0,c.oR)();return Object.fromEntries(Object.keys(e._actions).map((t=>[t,s=>e.dispatch(t,s)])))}},6782:function(e,t,s){s.r(t),s.d(t,{default:function(){return S}});var a=s(3396),c=s(4870),l=s(7139),r=s(9679);const o=e=>((0,a.dD)("data-v-3806cf12"),e=e(),(0,a.Cn)(),e),d={class:"table-max mx-auto px-md-3 table-scroll"},i=o((()=>(0,a._)("div",{class:"w-md-75"},[(0,a._)("h1",{class:"fs-4 text-center py-2"},"User Scores")],-1))),n={class:"table-container table-scroll w-100"},v={class:"mb-0 fw-lighter text-center fs-4"},f=(0,a.uE)('<div class="d-flex bg-secondary text-white text-center" data-v-3806cf12><div class="col d-flex" data-v-3806cf12><div class="col border border-white" data-v-3806cf12>Play TIme</div><div class="col border border-white" data-v-3806cf12>High Score</div></div><div class="col-8 d-flex" data-v-3806cf12><div class="dateColumn border border-white" data-v-3806cf12>Dates</div><div class="scoresColumn flex-grow-1 border border-white" data-v-3806cf12>Scores</div></div></div>',1),u={class:"d-flex py-1"},m={class:"col d-flex"},w={class:"col my-auto text-center"},b={class:"col my-auto text-center"},g={class:"col-8"},x={class:"dateColumn fs-7 text-center"},h={class:"d-flex table-scroll flex-grow-1"};var _={__name:"statistics",setup(e){const{fetchUserScores:t}=(0,r.nv)();let s=(0,c.iH)(null);return(0,a.bv)((async()=>{s.value=await t(),s.value.forEach((e=>e.gameStats.totalUsageTime=`${Math.floor(e.gameStats.totalUsageTime/6e4)} minutes`))})),(e,t)=>((0,a.wg)(),(0,a.iD)("div",d,[i,(0,a._)("div",n,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,c.SU)(s),((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"my-4 px-2",key:t},[(0,a._)("h2",v,(0,l.zw)(e.email),1),f,(0,a._)("div",u,[(0,a._)("div",m,[(0,a._)("div",w,(0,l.zw)(e.gameStats.totalUsageTime),1),(0,a._)("div",b,(0,l.zw)(e.gameStats.highScore),1)]),(0,a._)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.gameStats.days,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"d-flex py-2",key:t},[(0,a._)("div",x,(0,l.zw)(e.date),1),(0,a._)("div",h,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.scores,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:"mx-2 fs-7"},(0,l.zw)(e),1)))),128))])])))),128))])])])))),128))])]))}},y=s(89);const p=(0,y.Z)(_,[["__scopeId","data-v-3806cf12"]]);var S=p}}]);
//# sourceMappingURL=782.6653e6df.js.map