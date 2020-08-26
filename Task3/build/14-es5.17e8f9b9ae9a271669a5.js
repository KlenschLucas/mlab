!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"Rc+H":function(t,n,r){"use strict";r.r(n),r.d(n,"QuizPageModule",(function(){return J}));var o,s=r("ofXK"),a=r("3Pt+"),u=r("TEn/"),c=r("tyNb"),h=r("fXoL"),b=[{question:"What does COVID-19 stand for?",answers:["It's a term for Coronavirus Disease 19, because it's the 19th strain of coronavirus discovered.","It's a term that stands for Coronavirus Disease 2019, the year it was first identified."],answer:1,info:'It\'s a term for Coronavirus Disease 2019, the year it was first identified.\n    According to the National Institute of Allergy and Infectious Diseases, coronaviruses are a family of viruses that typically impact the respiratory tract and are common in people and many different species of animals. \n    Doctors on the frontlines of the coronavirus outbreak in Wuhan, China, posing in their protective equipment "I Was on the Front Lines of the COVID-19 Outbreak in Wuhan": A Doctor Shares His Story"\n    A new type of coronavirus, SARS-CoV-2, has been found to cause what we now call COVID-19. The first case of COVID-19 was reported in December 2019.'},{question:"What other viruses belong to the coronavirus family?",answers:["SARS and influenza","SARS and MERS","SARS and HIV"],answer:1,info:"In addition to this new, or novel, coronavirus, there are at least six other coronaviruses that we currently know of, according to the Centers for Disease Control and Prevention (CDC). Four of them are extremely common and generally cause only mild symptoms, like the ones you might experience if you had a cold.\n    Before the current pandemic, there were two known types of coronavirus that could prove more harmful, and potentially even fatal: MERS-CoV (the coronavirus that causes Middle East Respiratory Syndrome, or MERS) and SARS-CoV (the coronavirus that causes severe acute respiratory syndrome, or SARS, pictured at right).\n    SARS-CoV-2 is the third type of this kind to be discovered."},{question:"True or False: A vaccine stimulates your immune system to produce antibodies, like it would if you were exposed to the virus.",answers:["True","False"],answer:0,info:"Hanneke Schuitemaker, Ph.D., Global Head of Viral Vaccine Discovery and Translational Medicine and the Disease Area Stronghold Leader for Viral Vaccines at Janssen Vaccines & Prevention, a Janssen Pharmaceutical Company of Johnson & Johnson She's a Scientist with One of the World's Most Important Jobs: Creating a Potential COVID-19 Vaccine\n    Vaccines contain the same germs that cause disease, but in a weakened or inactivated form, according to the CDC. The vaccine stimulates your immune system so that after getting vaccinated you develop immunity to that disease, without having to get the disease first."}],f=r("e8h1"),l=((o=function(){function t(i){var n=this;e(this,t),this.storage=i,this.quiz=b,this.results=[],i.get("results").then((function(e){e&&(n.results=JSON.parse(e))})).catch((function(e){return console.error("error",e)}))}return i(t,[{key:"save",value:function(){this.storage.set("results",JSON.stringify(this.results))}}]),t}()).\u0275fac=function(e){return new(e||o)(h.Ob(f.b))},o.\u0275prov=h.Db({token:o,factory:o.\u0275fac,providedIn:"root"}),o);function d(e,t){if(1&e){var i=h.Lb();h.Kb(0,"ion-item"),h.Kb(1,"ion-label",6),h.gc(2),h.Jb(),h.Kb(3,"ion-radio",7),h.Sb("click",(function(){h.bc(i);var e=t.index,n=h.Ub().index;return h.Ub().setAnswer(n,e)})),h.Jb(),h.Jb()}if(2&e){var n=t.$implicit,r=t.index;h.xb(2),h.hc(n),h.xb(1),h.Yb("value",r)}}function m(e,t){if(1&e){var i=h.Lb();h.Kb(0,"div"),h.Ib(1,"ion-item-divider"),h.Kb(2,"ion-item"),h.Kb(3,"ion-button",8),h.Sb("click",(function(){return h.bc(i),h.Ub(2).submitQuiz()})),h.gc(4,"Submit"),h.Jb(),h.Jb(),h.Jb()}}function v(e,t){if(1&e&&(h.Kb(0,"ion-slide"),h.Kb(1,"ion-list",3),h.Kb(2,"ion-radio-group"),h.Kb(3,"ion-list-header"),h.Kb(4,"ion-label"),h.Kb(5,"h1"),h.gc(6),h.Jb(),h.Jb(),h.Jb(),h.ec(7,d,4,2,"ion-item",2),h.Jb(),h.Kb(8,"ion-item"),h.Ib(9,"ion-progress-bar",4),h.Jb(),h.ec(10,m,5,0,"div",5),h.Jb(),h.Jb()),2&e){var i=t.$implicit,n=t.index,r=h.Ub();h.xb(6),h.jc("",n+1,". ",i.question,""),h.xb(1),h.Xb("ngForOf",i.answers),h.xb(2),h.Xb("value",r.numberOfAnswers/r.quizService.quiz.length),h.xb(1),h.Xb("ngIf",r.numberOfAnswers/r.quizService.quiz.length==1)}}var p,w,y,g=[{path:"",component:(p=function(){function t(i,n){e(this,t),this.quizService=i,this.router=n,this.answers=new Array(this.quizService.quiz.length),this.numberOfAnswers=0,this.submit=!1}return i(t,[{key:"ngOnInit",value:function(){}},{key:"submitQuiz",value:function(){var e=this;this.marks=this.answers.reduce((function(t,i,n){return t+(i===e.quizService.quiz[n].answer?1:0)})),this.router.navigateByUrl("/quiz-results",{state:{marks:this.marks/this.quizService.quiz.length}})}},{key:"setAnswer",value:function(e,t){0===this.answers[e]||this.answers[e]||++this.numberOfAnswers===this.quizService.quiz.length&&(this.submit=!0),this.answers[e]=t}}]),t}(),p.\u0275fac=function(e){return new(e||p)(h.Hb(l),h.Hb(c.g))},p.\u0275cmp=h.Bb({type:p,selectors:[["app-quiz"]],decls:7,vars:1,consts:[["fullscreen","true"],["pager","true"],[4,"ngFor","ngForOf"],[2,"width","80%"],[3,"value"],[4,"ngIf"],["text-wrap",""],[3,"value","click"],[2,"width","100%","height","3rem",3,"click"]],template:function(e,t){1&e&&(h.Kb(0,"ion-header"),h.Kb(1,"ion-toolbar"),h.Kb(2,"ion-title"),h.gc(3,"quiz"),h.Jb(),h.Jb(),h.Jb(),h.Kb(4,"ion-content",0),h.Kb(5,"ion-slides",1),h.ec(6,v,11,5,"ion-slide",2),h.Jb(),h.Jb()),2&e&&(h.xb(6),h.Xb("ngForOf",t.quizService.quiz))},directives:[u.f,u.t,u.s,u.e,u.r,s.h,u.q,u.k,u.o,u.z,u.l,u.j,u.h,u.m,s.i,u.n,u.x,u.i,u.b],styles:["ion-slides[_ngcontent-%COMP%]{height:100%}"]}),p)}],S=((y=function t(){e(this,t)}).\u0275mod=h.Fb({type:y}),y.\u0275inj=h.Eb({factory:function(e){return new(e||y)},imports:[[c.i.forChild(g)],c.i]}),y),J=((w=function t(){e(this,t)}).\u0275mod=h.Fb({type:w}),w.\u0275inj=h.Eb({factory:function(e){return new(e||w)},imports:[[s.b,a.a,u.u,S]]}),w)}}])}();