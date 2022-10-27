(function(){"use strict";var e={230:function(e,t,n){var o=n(963),s=n(252),a=n(577);const i={key:0,id:"pokemons"},l=["src"],r={class:"id"},p=["onClick"],c={key:0,class:"info"},u={class:"pokemon-info"},m=["onClick"],f=(0,s._)("path",{fill:"#fff","fill-rule":"evenodd",d:"M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"},null,-1),v=[f],k=["src"],h={class:"types-container"},d={class:"types"},_={class:"stats-moves"},w={class:"stats"},g=(0,s._)("h3",null,"Stats",-1),b={class:"stat"},I=(0,s._)("p",null,"Hp:",-1),y={class:"stat"},z=(0,s._)("p",null,"Attack:",-1),C={class:"stat"},O=(0,s._)("p",null,"Defense:",-1),x={class:"stat"},P=(0,s._)("p",null,"Special-attack:",-1),D={class:"stat"},j=(0,s._)("p",null,"Special-defense:",-1),A={class:"stat"},S=(0,s._)("p",null,"Speed:",-1),L={class:"moves"},H=(0,s._)("h3",null,"Moves",-1),T={class:"move"},U={class:"move"},Z={class:"move"},$={class:"move m4"};function q(e,t,n,f,q,K){return(0,s.wg)(),(0,s.iD)("main",null,[(0,s._)("h1",{style:(0,a.j5)({marginTop:K.margin()})},"Pokédex",4),(0,s.wy)((0,s._)("input",{type:"search",placeholder:"Search Pokémon...",id:"search","onUpdate:modelValue":t[0]||(t[0]=e=>q.search=e)},null,512),[[o.nr,q.search]]),""!==q.search?((0,s.wg)(),(0,s.iD)("section",i,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(K.filter.slice(0,5),(e=>((0,s.wg)(),(0,s.iD)("div",{class:"pokemon-card",key:e.nome},[(0,s._)("img",{class:"poke-img",src:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${K.pokemonId(e)}.png`},null,8,l),(0,s._)("span",r,"#"+(0,a.zw)(K.pokemonId(e)),1),(0,s._)("h3",null,(0,a.zw)(e.name.charAt(0).toUpperCase()+e.name.slice(1)),1),(0,s._)("button",{onClick:t=>K.show(e,K.pokemonId(e)),class:"open-btn"},"Select",8,p),q.active==e.name?((0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("div",u,[(0,s._)("button",{onClick:t[1]||(t[1]=e=>q.active=""),class:"close-btn"},[((0,s.wg)(),(0,s.iD)("svg",{onClick:t=>K.show(e,K.pokemonId(e)),xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18"},v,8,m))]),(0,s._)("h2",null,(0,a.zw)(e.name.charAt(0).toUpperCase()+e.name.slice(1)),1),(0,s._)("img",{src:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${K.pokemonId(e)}.png`},null,8,k),(0,s._)("div",h,[(0,s._)("div",d,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(q.pokeInfo.types,(e=>((0,s.wg)(),(0,s.iD)("div",{class:(0,a.C_)(e.type.name),key:e.slot},(0,a.zw)(e.type.name),3)))),128))])]),(0,s._)("div",_,[(0,s._)("div",w,[g,(0,s._)("div",b,[I,(0,s._)("p",null,(0,a.zw)(q.pokeInfo.stats[0].base_stat),1)]),(0,s._)("div",y,[z,(0,s._)("p",null,(0,a.zw)(q.pokeInfo.stats[1].base_stat),1)]),(0,s._)("div",C,[O,(0,s._)("p",null,(0,a.zw)(q.pokeInfo.stats[2].base_stat),1)]),(0,s._)("div",x,[P,(0,s._)("p",null,(0,a.zw)(q.pokeInfo.stats[3].base_stat),1)]),(0,s._)("div",D,[j,(0,s._)("p",null,(0,a.zw)(q.pokeInfo.stats[4].base_stat),1)]),(0,s._)("div",A,[S,(0,s._)("p",null,(0,a.zw)(q.pokeInfo.stats[5].base_stat),1)])]),(0,s._)("div",L,[H,(0,s._)("p",T,(0,a.zw)(q.pokeInfo.moves[0].move.name),1),(0,s._)("p",U,(0,a.zw)(q.pokeInfo.moves[1].move.name),1),(0,s._)("p",Z,(0,a.zw)(q.pokeInfo.moves[2].move.name),1),(0,s._)("p",$,(0,a.zw)(q.pokeInfo.moves[3].move.name),1)])])])])):(0,s.kq)("",!0)])))),128))])):(0,s.kq)("",!0)])}var K=n(544),M={name:"App",components:{},data(){return{pokemons:[],pokeInfo:[],search:"",active:"",mt:"100px"}},mounted(){K.ZP.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((e=>{this.pokemons=e.data.results}))},methods:{pokemonId(e){return e.url.split("/")[6]},show(e,t){K.ZP.get(`https://pokeapi.co/api/v2/pokemon/${t}`).then((e=>{this.pokeInfo=e.data})),this.active=e.name},margin(){if(""===this.search)return"150px"}},computed:{filter(){return this.pokemons.filter((e=>e.name.includes(this.search.toLowerCase())))}}},Y=n(744);const E=(0,Y.Z)(M,[["render",q]]);var F=E;(0,o.ri)(F).mount("#app")}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,s,a){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],s=e[c][1],a=e[c][2];for(var l=!0,r=0;r<o.length;r++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[r])}))?o.splice(r--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var p=s();void 0!==p&&(t=p)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,s,a]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,a,i=o[0],l=o[1],r=o[2],p=0;if(i.some((function(t){return 0!==e[t]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(r)var c=r(n)}for(t&&t(o);p<i.length;p++)a=i[p],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self["webpackChunkpokedex_api"]=self["webpackChunkpokedex_api"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(230)}));o=n.O(o)})();
//# sourceMappingURL=app.e1966513.js.map