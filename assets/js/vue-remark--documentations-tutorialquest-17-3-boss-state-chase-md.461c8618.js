(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{176:function(t,s,a){"use strict";s.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},185:function(t,s,a){t.exports=a.p+"assets/img/boss-state-chase.3b9cba23.gif"},342:function(t,s,a){"use strict";a.r(s);var n=a(36),e=a(176),r=a(1);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.default.config.optionMergeStrategies;var p={VueRemarkRoot:e.a},c=function(t){var s=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===o(p[t])&&"function"==typeof p[t].render?s[t]=p[t]:a[t]=function(){return p[t]}}))},v=r.default.config.optionMergeStrategies,u="__vueRemarkFrontMatter",_={excerpt:null,slug:"tutoquest-pourchasser",order:40,title:"17.3 Pourchasser l'avatar",author:"Olivier Perrault",tag:"tutorialquest"};var l=function(t){t.options[u]&&(t.options[u]=_),r.default.util.defineReactive(t.options,u,_),t.options.computed=v.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},i=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("VueRemarkRoot",[n("h2",{attrs:{id:"173-pourchasser-lavatar"}},[n("a",{attrs:{href:"#173-pourchasser-lavatar","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("17.3. Pourchasser l'avatar")]),n("hr"),n("p",[t._v("Les premiers états que nous ajouterons sont les états "),n("code",{pre:!0},[t._v("Chase")]),t._v(" et "),n("code",{pre:!0},[t._v("Waypoint")]),t._v(".")]),n("h3",{attrs:{id:"chase"}},[n("a",{attrs:{href:"#chase","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),n("code",{pre:!0},[t._v("Chase")])]),n("p",[t._v("Comme nous avons vu, dans cet état le "),n("em",[t._v("boss")]),t._v(" pourchasse le joueur de façons similaires au comportement de l'ennemi.")]),n("img",{staticClass:"w-50 center",attrs:{src:a(185)}}),n("p",[t._v("Utiliser la classe "),n("code",{pre:!0},[t._v("State")]),t._v(" se fait très facilement, il s'agit de copier le code de l'ennemi à l'intérieur de la méthode "),n("code",{pre:!0},[t._v("update")]),t._v(" de la nouvelle classe "),n("code",{pre:!0},[t._v("ChaseState")])]),n("hr"),n("blockquote",[n("h3",{attrs:{id:"étapes-à-suivre"}},[n("a",{attrs:{href:"#%C3%A9tapes-%C3%A0-suivre","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Étapes à suivre")]),n("ol",[n("li",[t._v("ajoutez une la classe "),n("code",{pre:!0},[t._v("ChaseState")])]),n("li",[t._v("ajoutez une instance de "),n("code",{pre:!0},[t._v("ChaseState")]),t._v(" à l'intérieur de la méthode "),n("code",{pre:!0},[t._v("initStateMachine")]),t._v(" du "),n("em",[t._v("boss")])])])]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",{pre:!0,attrs:{class:"language-java"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ChaseState.java */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tutorialquest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("entities"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boss")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// import ..")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChaseState")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BossState")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" timeLimitChase "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" SPEED "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChaseState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Boss")]),t._v(" boss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StateMachine")]),t._v(" stateMachine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" probability"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" timeLimit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" timeoutState"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("boss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stateMachine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" probability"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeLimit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeoutState"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chase"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" deltaTime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deltaTime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Ne plus pourchasser le joueur lorsque la partie est termine")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Game")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("level"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("avatar "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            boss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("locomotionVelocity"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setZero")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            boss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controlAxes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setZero")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Déplacement en direction de l'avatar")]),t._v("\n        boss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("direction\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Game")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("level"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("avatar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sub")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("boss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        boss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controlAxes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("boss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("direction"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        boss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("locomotionVelocity\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("boss"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("direction"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SPEED"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])}),[],!1,null,null,null);"function"==typeof c&&c(i),"function"==typeof l&&l(i);s.default=i.exports}}]);