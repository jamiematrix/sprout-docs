(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{392:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",[t._v("Element Importers")]),t._v(" "),s("p",[t._v("Add support for importing any custom Element by creating a custom Element Importer integration. Element Importers allow you to take advantage of Craft's Element API and common behaviors consistent across Elements.")]),t._v(" "),s("h2",{attrs:{id:"craft-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#craft-3","aria-hidden":"true"}},[t._v("#")]),t._v(" Craft 3")]),t._v(" "),s("p",[t._v("To add support for your custom Element you will need to:")]),t._v(" "),s("div",{pre:!0},[s("ol",[s("li",[t._v("Create an Element Importer class that extends "),s("code",[t._v("barrelstrength\\sproutbase\\contracts\\sproutimport\\BaseElementImporter")])]),t._v(" "),s("li",[t._v("Register your Element Importer")])])]),t._v(" "),s("div",{pre:!0},[s("p",[t._v("To register your Element Importer, you can register your custom Element Importer class using the "),s("code",[t._v("EVENT_REGISTER_IMPORTER_TYPES")]),t._v(" event:")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("barrelstrength"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutbase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("services"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("sproutimport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Importers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Importers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Importers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EVENT_REGISTER_IMPORTER_TYPES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RegisterComponentTypesEvent "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("types")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FormElementImporter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$event")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("types")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EntryElementImporter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{pre:!0},[s("p",[t._v("Please refer to example Element Importers in "),s("code",[t._v("sproutimport/src/integrations/sproutimport/elements")]),t._v(" and "),s("code",[t._v("sproutbase/src/contracts/sproutimport/Importer")]),t._v(" and "),s("code",[t._v("sproutbase/src/contracts/sproutimport/BaseElementImporter")]),t._v(" for more details.")])]),t._v(" "),s("h2",{attrs:{id:"craft-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#craft-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Craft 2")]),t._v(" "),s("p",[t._v("To add support for your custom Element you will need to:")]),t._v(" "),s("ol",[s("li",[t._v("Create an Element Importer class that extends BaseSproutImportElementImporter")]),t._v(" "),s("li",[t._v("Register your Element Importer")])]),t._v(" "),s("div",{pre:!0},[s("p",[t._v("Sprout Import extends itself to add support for the default Element Importers for Craft and Craft Commerce. Please refer to example Element Importers in "),s("code",[t._v("sproutimport/integrations/sproutimport")]),t._v(" and the "),s("code",[t._v("BaseSproutImportElementImporter")]),t._v(" and "),s("code",[t._v("BaseSproutImportImporter")]),t._v(" Classes for more details.")])]),t._v(" "),s("div",{pre:!0},[s("p",[t._v("Once you have created your custom Element Importer you will need to register it in your primary plugin class via the "),s("code",[t._v("registerSproutImportImporters")]),t._v(" hook. For example:")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerSproutImportImporters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SproutEmail_CampaignEmailSproutImportElementImporter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SproutEmail_NotificationEmailSproutImportElementImporter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"element-integrations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-integrations","aria-hidden":"true"}},[t._v("#")]),t._v(" Element Integrations")]),t._v(" "),s("p",[t._v("The following Elements have Element Importer integrations:")]),t._v(" "),s("ul",[s("li",[t._v("Sprout Email Campaign Email Element")]),t._v(" "),s("li",[t._v("Sprout Email Notification Email Element")]),t._v(" "),s("li",[t._v("Sprout Forms Form Element")]),t._v(" "),s("li",[t._v("Sprout Forms Form Entry Element")]),t._v(" "),s("li",[t._v("Sprout SEO Redirect Element")])])])}],!1,null,null,null);e.default=r.exports}}]);