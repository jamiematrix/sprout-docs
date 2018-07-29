(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{220:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",[t._v("Custom SQL Queries")]),a("p",[t._v("One reason Craft is powerful is because it allows users to build complex relational content from a very user-friendly UI. While that is nice for users, it can make certain queries very complex when retrieving your data.  Sprout Reports is designed to help make it easy for clients to run queries and get back the data they need. It is not designed to write those queries for you.")]),a("p",[t._v("The examples below are not meant to be comprehensive or accurate for every situation. They are meant to be used as a starting point and the responsibility is on you to update the queries to meet your needs or find someone who can.")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("If you need help building a specific query, feel free to reach out.  We're happy to consider adding another example for common use cases or help out in a consulting relationship to help you meet your projects reporting needs.")]),a("p",[t._v("Contact us: "),a("a",{attrs:{href:"mailto:sprout@barrelstrengthdesign.com"}},[t._v("sprout@barrelstrengthdesign.com")])])]),a("h2",{attrs:{id:"relations-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relations-fields","aria-hidden":"true"}},[t._v("#")]),t._v(" Relations Fields")]),a("p",[t._v("Relation Fields (Entries, Categories, Users, Assets, and Tag fields) store their data via a related ID. This means a basic query will not return any information about the Relations Fields in an Entry.")]),a("div",{pre:!0},[a("p",[t._v("In this example, we create two queries: the first returning the data about our content from a particular section without the relation data and the second returning the data about all of the content related to our section.  We then use a "),a("code",[t._v("UNION")]),t._v(" to combine the results of our two queries.")])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" content"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n       content"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Related IDs (comma-separated)"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),a("span",{attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Related Titles (comma-separated)"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" craft_content "),a("span",{attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" content\n"),a("span",{attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" craft_entries "),a("span",{attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" entries\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" entries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" content"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elementId\n"),a("span",{attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" craft_relations "),a("span",{attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" relations\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" entries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" relations"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sourceId\n"),a("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" entries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sectionId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("UNION")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" relations"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("targetId "),a("span",{attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" relatedElementId"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t   content"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" relatedContentTitle"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t   GROUP_CONCAT"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elementId separator "),a("span",{attrs:{class:"token string"}},[t._v("','")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Related IDs (comma-separated)"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t   GROUP_CONCAT"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title separator "),a("span",{attrs:{class:"token string"}},[t._v("','")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Related Titles (comma-separated)"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" craft_relations "),a("span",{attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" relations\n"),a("span",{attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" craft_entries "),a("span",{attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" entries\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" entries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" relations"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sourceId\n"),a("span",{attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" craft_content "),a("span",{attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" content\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" relations"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("targetId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" content"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elementId\n"),a("span",{attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" relations"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sourceId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" entries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n"),a("span",{attrs:{class:"token operator"}},[t._v("AND")]),t._v(" entries"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sectionId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" relations"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sourceId\n")])])])])}],!1,null,null,null);s.default=n.exports}}]);