"use strict";(self["webpackChunkhumanometro"]=self["webpackChunkhumanometro"]||[]).push([[962],{1962:function(e,r,s){s.r(r),s.d(r,{default:function(){return g}});var a=s(6768),o=s(5130);const t={class:""},n={class:""};function l(e,r,s,l,i,c){const u=(0,a.g2)("Toaster"),p=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("section",t,[(0,a.bF)(u),r[6]||(r[6]=(0,a.Lk)("h2",{class:""},"Regístrate",-1)),r[7]||(r[7]=(0,a.Lk)("p",{class:""},null,-1)),(0,a.Lk)("form",{onSubmit:r[2]||(r[2]=(0,o.D$)(((...e)=>c.registerUser&&c.registerUser(...e)),["prevent"]))},[(0,a.bo)((0,a.Lk)("input",{type:"email",class:"","onUpdate:modelValue":r[0]||(r[0]=e=>i.email=e),placeholder:"Correo electrónico",required:""},null,512),[[o.Jo,i.email]]),(0,a.bo)((0,a.Lk)("input",{type:"password",class:"","onUpdate:modelValue":r[1]||(r[1]=e=>i.password=e),placeholder:"Contraseña",required:""},null,512),[[o.Jo,i.password]]),r[3]||(r[3]=(0,a.Lk)("button",{type:"submit",class:""},"Registrarse",-1))],32),(0,a.Lk)("p",n,[r[5]||(r[5]=(0,a.eW)("¿Ya tienes cuenta? ")),(0,a.bF)(p,{class:"",to:"/login"},{default:(0,a.k6)((()=>r[4]||(r[4]=[(0,a.eW)("inicia sesión")]))),_:1})])])}var i=s(8881),c=s(2138),u=s(7673),p={name:"RegistreView",components:{Toaster:u.l$},data(){return{email:"",password:""}},methods:{async registerUser(){try{const e=await(0,c.eJ)(i.j,this.email,this.password),r=e.user;console.log(r),await(0,c.gA)(r),u.oR.warning("Por favor verifica tu correo electrónico para continuar.")}catch(e){u.oR.error("Error al crear el usuario."),console.log(e.message)}}}},d=s(1241);const m=(0,d.A)(p,[["render",l]]);var g=m}}]);
//# sourceMappingURL=962.403d1086.js.map