import{_ as d,o,c as n,F as h,r as u,t as c,a as e,g as _,e as g,w as b,v as x,f as y,b as j}from"./index.72d64ef4.js";const k={props:{select:{type:String,default:"projects",required:!0},selectOptions:{type:Array,default:()=>["Web Application","API Application"]}}},P=["name","id"],v=e("option",{value:"",class:"text-sm sm:text-md"},"All Projects",-1),$=["value"];function w(r,t,s,p,m,l){return o(),n("select",{onChange:t[0]||(t[0]=a=>r.$emit("filter",a.target.value)),name:s.select,id:s.select,class:"font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"},[v,(o(!0),n(h,null,u(s.selectOptions,a=>(o(),n("option",{key:a,value:a,class:"sm:text-md"},c(a),9,$))),128))],40,P)}const A=d(k,[["render",w]]),S={props:["project"]},C=["href"],B=["src","alt"],F={class:"text-center px-4 py-6"},I={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},L={class:"font-general-medium text-lg text-ternary-dark dark:text-ternary-light"},T={class:"font-general-medium text-base p-4 text-ternary-dark dark:text-ternary-light"};function D(r,t,s,p,m,l){return o(),n("a",{href:s.project.href,target:"_blank",class:"rounded-2xl shadow-lg shadow-black hover:shadow-2xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark shadow-white","aria-label":"Single Project"},[e("div",null,[e("img",{src:s.project.img,alt:s.project.title,class:"rounded-t-xl border-none"},null,8,B)]),e("div",F,[e("p",I,c(s.project.title),1),e("span",L,c(s.project.category),1)]),e("span",T,c(s.project.description),1)],8,C)}const G=d(S,[["render",D]]),H=[{id:1,title:"Mini Framework PHP",category:"API Application",description:"A php-based mini framework with the main uses in the market.",href:"https://github.com/yanbrasiliano/mini-framework-php",img:"/src/assets/images/mini-framework.jpg"},{id:2,title:"Make Your Burguer Vue",category:"Web Application",description:"A project to manage a hamburger restaurant with Vue 3 + TailwindCSS + JSON Server.",href:"https://github.com/yanbrasiliano/make-burger-vue",img:"/src/assets/images/make-burger-vue.png"},{id:3,title:"Climate Weather",category:"Web Application",description:"A Javascript, HTML and CSS project to consult the weather.",href:"https://github.com/yanbrasiliano/weather-js-api",img:"/src/assets/images/climate-weather.png"},{id:4,title:"To Do List",category:"Web Application",description:"A fully featured To Do List in Javascript, HTML and CSS.",href:"https://github.com/yanbrasiliano/to-do-list-js",img:"/src/assets/images/to-do-list.png"},{id:5,title:"API Laravel IBGE",category:"API Application",description:"A Rest API querying IBGE with CRUD and unit tests.",href:"https://github.com/yanbrasiliano/api-laravel-ibge",img:"/src/assets/images/api-rest-full-laravel.png"}],M={components:{ProjectSingle:G,ProjectsFilter:A},data:()=>({projects:H,projectsHeading:"Projects",selectedCategory:"",searchProject:""}),computed:{filteredProjects(){return this.selectedCategory?this.filterProjectsByCategory():this.searchProject?this.filterProjectsBySearch():this.projects}},methods:{filterProjectsByCategory(){return this.projects.filter(r=>{let t=r.category.charAt(0).toUpperCase()+r.category.slice(1);return console.log(t),t.includes(this.selectedCategory)})},filterProjectsBySearch(){let r=new RegExp(this.searchProject,"i");return this.projects.filter(t=>t.title.match(r))}},mounted(){_.replace()}},V={class:"pt-10 sm:pt-14"},W={class:"text-center"},E={class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},N={class:"mt-10 sm:mt-10"},q=e("h3",{class:"font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"}," Search projects by title or filter by category ",-1),J={class:"flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"},O={class:"flex justify-between gap-2"},R=e("span",{class:"hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"},[e("i",{"data-feather":"search",class:"text-ternary-dark dark:text-ternary-light"})],-1),U={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"};function Y(r,t,s,p,m,l){const a=g("ProjectsFilter"),f=g("ProjectSingle");return o(),n("section",V,[e("div",W,[e("p",E,c(r.projectsHeading),1)]),e("div",N,[q,e("div",J,[e("div",O,[R,b(e("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>r.searchProject=i),class:"font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"},null,512),[[x,r.searchProject]])]),y(a,{onFilter:t[1]||(t[1]=i=>r.selectedCategory=i)})])]),e("div",U,[(o(!0),n(h,null,u(l.filteredProjects,i=>(o(),j(f,{key:i.id,project:i,href:i.href},null,8,["project","href"]))),128))])])}const z=d(M,[["render",Y]]),K={name:"Projects",components:{ProjectsGrid:z}},Q={class:"container mx-auto"};function X(r,t,s,p,m,l){const a=g("ProjectsGrid");return o(),n("div",Q,[y(a)])}const ee=d(K,[["render",X]]);export{ee as default};
