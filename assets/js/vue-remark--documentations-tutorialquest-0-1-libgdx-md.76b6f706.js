(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{176:function(t,s,a){"use strict";s.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},281:function(t,s,a){t.exports=a.p+"assets/img/tutorialquest-cercle-center.bae49ae4.png"},354:function(t,s,a){"use strict";a.r(s);var n=a(36),e=a(176),r=a(1);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.default.config.optionMergeStrategies;var o={VueRemarkRoot:e.a},c=function(t){var s=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(o).forEach((function(t){"object"===p(o[t])&&"function"==typeof o[t].render?s[t]=o[t]:a[t]=function(){return o[t]}}))},v=r.default.config.optionMergeStrategies,l="__vueRemarkFrontMatter",_={excerpt:null,slug:"libgdx-intro",order:0,title:"0. Premier programme LibGDX",author:"Olivier Perrault",tag:"tutorialquest"};var u=function(t){t.options[l]&&(t.options[l]=_),r.default.util.defineReactive(t.options,l,_),t.options.computed=v.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},i=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("VueRemarkRoot",[n("h2",{attrs:{id:"01-le-point-dentrée-libgdx"}},[n("a",{attrs:{href:"#01-le-point-dentr%C3%A9e-libgdx","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("0.1 Le point d'entrée "),n("em",[t._v("LibGDX")])]),n("hr"),n("p",[t._v("Similairement au point d'entrée "),n("code",{pre:!0},[t._v("FirstProgram")]),t._v(", le fichier "),n("code",{pre:!0},[t._v("JavaQuest.java")]),t._v(" est le "),n("strong",[t._v("point d'entrée")]),t._v(" du programme que nous développons avec "),n("em",[t._v("LibGDX")]),t._v(".")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",{pre:!0,attrs:{class:"language-java"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* JavaQuest.java */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tutorialquest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("badlogic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gdx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationAdapter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("badlogic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gdx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gdx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("badlogic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gdx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Screen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("badlogic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gdx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("graphics")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JavaQuest")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationAdapter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),n("p",[t._v("Un programme LibGDX contient deux méthodes principales.")]),n("ul",[n("li",[n("p",[t._v("La méthode "),n("code",{pre:!0},[t._v("create")]),t._v(" est exécutée au commencement de l'application et sert à initialiser des valeurs.")])]),n("li",[n("p",[t._v("La méthode "),n("code",{pre:!0},[t._v("render")]),t._v(" est exécutée 60 fois par seconde et sert à mettre à jour les dessins à l'écran.")])])]),n("h2",{attrs:{id:"02-introduction-à-la-programmation-libgdx"}},[n("a",{attrs:{href:"#02-introduction-%C3%A0-la-programmation-libgdx","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("0.2 Introduction à la programmation LibGDX")]),n("hr"),n("p",[t._v("Afin de dessiner un cercle à l'écran, modifiez le point d'entrée.")]),n("img",{staticClass:"center",attrs:{width:"512",src:a(281)}}),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",{pre:!0,attrs:{class:"language-java"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* JavaQuest.java */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tutorialquest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// import ...")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AJOUT: Importez la classe `ShapeRenderer`")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("badlogic"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gdx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("graphics"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("glutils")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShapeRenderer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JavaQuest")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApplicationAdapter")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpriteBatch")]),t._v(" batch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Texture")]),t._v(" img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AJOUT:")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Déclarez la variable")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShapeRenderer")]),t._v(" shapeRenderer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        batch "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpriteBatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AJOUT:")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initializez la variable")]),t._v("\n        shapeRenderer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShapeRenderer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gdx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("glClearColor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gdx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("glClear")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GL20"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GL_COLOR_BUFFER_BIT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AJOUT:")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dessinez un cercle à l'écran")]),t._v("\n        shapeRenderer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShapeRenderer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShapeType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Filled")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        shapeRenderer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setColor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("YELLOW"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        shapeRenderer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("circle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gdx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("graphics"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWidth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gdx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("graphics"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHeight")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        shapeRenderer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])}),[],!1,null,null,null);"function"==typeof c&&c(i),"function"==typeof u&&u(i);s.default=i.exports}}]);