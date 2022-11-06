import{_ as p,o as i,c as o,a as n,F as f,r as A,t as h,d as y,b as _,e as d,f as l,g}from"./index.72d64ef4.js";const x="/yanbrasiliano.github.io/assets/profile.a7e1fed0.jpeg",v={setup(){return{bios:[{id:1,bio:"Hi, I am Yan and I have been working with development for 2 years. Ex-Military Marine Corps, passionate about technology and challenges! In my spare time, I like to read, write and play sports. "},{id:2,bio:"Currently I work as Developer II for Qintess, based at PRODEB,an organization that assures the Bahia State Government the domain in the application of development solutions. My current work stack is: PHP, Laravel, Javascript and Vue.js. But I also have experience with Python, Shell Script and GNU/Linux Systems Administration."}]}}},k={class:"block sm:flex sm:gap-10 mt-10 sm:mt-20"},w=n("div",{class:"w-full sm:w-1/4 mb-7 sm:mb-0"},[n("img",{src:x,class:"rounded-xl w-96",alt:""})],-1),S={class:"w-full sm:w-3/4 text-left"};function C(t,e,s,r,u,m){return i(),o("div",k,[w,n("div",S,[(i(!0),o(f,null,A(r.bios,a=>(i(),o("p",{key:a.id,class:"font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"},h(a.bio),1))),128))])])}const F=p(v,[["render",C]]);var b=y({name:"Vue3Autocounter",interval:null,props:{startAmount:{type:Number,default:0},endAmount:{type:Number,default:0,required:!0},duration:{type:Number,default:3,validator(t){return t>=1}},autoinit:{type:Boolean,default:!0},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimalSeparator:{type:String,default:"."},decimals:{type:Number,default:0,validator(t){return t>=0}}},data(){return{timestamp:0,startTimestamp:0,currentAmount:0,currentStartAmount:0,currentDuration:0,paused:!1,remaining:0,animationFrame:0}},mounted(){this.currentAmount=this.startAmount,this.currentStartAmount=this.startAmount,this.currentDuration=this.duration*1e3,this.remaining=this.duration*1e3,this.autoinit?this.start():this.paused=!0,this.$emit("mounted")},unmounted(){this.cancelAnimation()},watch:{startAmount(){this.reset()},endAmount(){this.reset()},duration(){this.reset()}},computed:{isCountingUp(){return this.endAmount>this.startAmount},displayedAmount(){return`${this.prefix}${this.formatedAmount}${this.suffix}`},formatedAmount(){const t=/(\d+)(\d{3})/;let e=this.currentAmount.toFixed(this.decimals);e+="";let s=e.split("."),r=s[0],u=s.length>1?this.decimalSeparator+s[1]:"",m=!isNaN(parseFloat(this.separator));if(this.separator&&!m)for(;t.test(r);)r=r.replace(t,"$1"+this.separator+"$2");return r+u}},methods:{start(){this.cancelAnimation(),this.currentStartAmount=this.startAmount,this.startTimestamp=null,this.currentDuration=this.duration*1e3,this.paused=!1,this.animationFrame=window.requestAnimationFrame(this.counting)},pause(){this.paused||(this.cancelAnimation(),this.paused=!0)},resume(){!this.paused||(this.startTimestamp=null,this.currentDuration=+this.remaining,this.currentStartAmount=+this.currentAmount,this.animationFrame=window.requestAnimationFrame(this.counting),this.paused=!1)},reset(){this.paused=!1,this.startTimestamp=null,this.cancelAnimation(),this.currentAmount=this.startAmount,this.autoinit?this.start():this.paused=!0},counting(t){this.timestamp=t,this.startTimestamp||(this.startTimestamp=t);let e=t-this.startTimestamp;this.remaining=this.currentDuration-e,this.isCountingUp?(this.currentAmount=this.currentStartAmount+(this.endAmount-this.currentStartAmount)*(e/this.currentDuration),this.currentAmount=this.currentAmount>this.endAmount?this.endAmount:this.currentAmount):(this.currentAmount=this.currentStartAmount-(this.currentStartAmount-this.endAmount)*(e/this.currentDuration),this.currentAmount=this.currentAmount<this.endAmount?this.endAmount:this.currentAmount),e<this.currentDuration?this.animationFrame=window.requestAnimationFrame(this.counting):setTimeout(()=>{this.$emit("finished")},1e3)},cancelAnimation(){this.animationFrame&&window.cancelAnimationFrame(this.animationFrame)}}});function T(t,e,s,r,u,m){return i(),_("span",null,h(t.displayedAmount),1)}b.render=T;var D=(()=>{const t=b;return t.install=e=>{e.component("Vue3Autocounter",t)},t})();const N=D,I={components:{counter:N},data:()=>({experienceTitle:"Years of experience",githubTitle:"Stars on GitHub",feedbackTitle:"Positive feedback",projectsTitle:"Projects completed"})},B={class:"mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm"},P={class:"font-general-regular container mx-auto py-20 block sm:flex sm:justify-center sm:items-center"},j={class:"mb-20 sm:mb-0 mr-10"},M={class:"block text-md text-ternary-dark dark:text-ternary-light"},q={class:"mb-20 sm:mb-0"},H={class:"block text-md text-ternary-dark dark:text-ternary-light"};function V(t,e,s,r,u,m){const a=d("counter");return i(),o("div",B,[n("div",P,[n("div",j,[l(a,{ref:"counter",startAmount:0,endAmount:2,duration:1,autoinit:!0,onFinished:e[0]||(e[0]=c=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2","aria-label":"About Status Counter"},null,512),n("span",M,h(t.experienceTitle),1)]),n("div",q,[l(a,{ref:"counter",startAmount:0,endAmount:25,duration:1,autoinit:!0,onFinished:e[1]||(e[1]=c=>t.alert("Counting finished!")),class:"font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"},null,512),n("span",H,h(t.projectsTitle),1)])])])}const G=p(I,[["render",V]]),E={props:["client"]},L=["src","alt"];function U(t,e,s,r,u,m){return i(),o("div",null,[n("img",{src:s.client.img,alt:s.client.title,class:"w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"},null,8,L)])}const Q=p(E,[["render",U]]),R={components:{AboutClientSingle:Q},data:()=>({clientsHeading:"Companies in which I provide or have provided services",clients:[{id:1,title:"Ramiro Campelo",img:"/src/assets/images/brands/ramiro_logo.png"},{id:2,title:"ACP Group",img:"/src/assets/images/brands/acp_logo.png"},{id:3,title:"Qintess",img:"/src/assets/images/brands/qintess_logo.png"},{id:5,title:"Prodeb",img:"/src/assets/images/brands/prodeb_logo.png"}]})},Y={class:"mt-10 sm:mt-20"},z={class:"font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"},J={class:"grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2"};function O(t,e,s,r,u,m){const a=d("AboutClientSingle");return i(),o("div",Y,[n("p",z,h(t.clientsHeading),1),n("div",J,[(i(!0),o(f,null,A(t.clients,c=>(i(),_(a,{key:c.id,client:c},null,8,["client"]))),128))])])}const K=p(R,[["render",O]]),W={name:"About",components:{AboutMe:F,AboutCounter:G,AboutClients:K},data:()=>({}),mounted(){g.replace()},updated(){g.replace()},methods:{}},X={class:"container mx-auto"},Z={class:"container mx-auto"};function tt(t,e,s,r,u,m){const a=d("AboutMe"),c=d("AboutCounter"),$=d("AboutClients");return i(),o("div",null,[n("div",X,[l(a)]),l(c),n("div",Z,[l($)])])}const nt=p(W,[["render",tt]]);export{nt as default};