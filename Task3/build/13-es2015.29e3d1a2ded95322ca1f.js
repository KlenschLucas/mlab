(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"Z1+G":function(n,t,e){"use strict";e.r(t),e.d(t,"QuizResultsPageModule",(function(){return f}));var o=e("ofXK"),c=e("3Pt+"),r=e("TEn/"),i=e("tyNb"),s=e("fXoL");function b(n,t){if(1&n&&(s.Kb(0,"div"),s.Kb(1,"ion-card"),s.Kb(2,"h1"),s.gc(3,"Passed"),s.Jb(),s.Kb(4,"h2"),s.gc(5),s.Jb(),s.Jb(),s.Jb()),2&n){const n=s.Ub();s.xb(5),s.ic("",100*n.marks,"%")}}function u(n,t){if(1&n&&(s.Kb(0,"ion-card"),s.Kb(1,"h1"),s.gc(2,"Failed"),s.Jb(),s.Kb(3,"h2"),s.gc(4),s.Jb(),s.Kb(5,"ion-button",3),s.gc(6," Retry Quiz "),s.Jb(),s.Kb(7,"ion-button",4),s.gc(8," Go Home "),s.Jb(),s.Jb()),2&n){const n=s.Ub();s.xb(4),s.ic("",100*n.marks,"%")}}const a=[{path:"",component:(()=>{class n{constructor(n){this.router=n}ngOnInit(){var n;this.marks=null===(n=this.router.getCurrentNavigation().extras.state)||void 0===n?void 0:n.marks}}return n.\u0275fac=function(t){return new(t||n)(s.Hb(i.g))},n.\u0275cmp=s.Bb({type:n,selectors:[["app-quiz-results"]],decls:4,vars:3,consts:[[2,"height","100%","background-color","lightgreen",3,"fullscreen"],[4,"ngIf","ngIfElse"],["failed",""],["expand","block","routerLink","/quiz"],["expand","block","color","danger","routerLink","/home"]],template:function(n,t){if(1&n&&(s.Kb(0,"ion-content",0),s.ec(1,b,6,1,"div",1),s.ec(2,u,9,1,"ng-template",null,2,s.fc),s.Jb()),2&n){const n=s.ac(3);s.Xb("fullscreen",!0),s.xb(1),s.Xb("ngIf",t.marks>.8)("ngIfElse",n)}},directives:[r.e,o.i,r.c,r.b,r.y,i.h],styles:[".success[_ngcontent-%COMP%]{background-color:#90ee90}"]}),n})()}];let l=(()=>{class n{}return n.\u0275mod=s.Fb({type:n}),n.\u0275inj=s.Eb({factory:function(t){return new(t||n)},imports:[[i.i.forChild(a)],i.i]}),n})(),f=(()=>{class n{}return n.\u0275mod=s.Fb({type:n}),n.\u0275inj=s.Eb({factory:function(t){return new(t||n)},imports:[[o.b,c.a,r.u,l]]}),n})()}}]);