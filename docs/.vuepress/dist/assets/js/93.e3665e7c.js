(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{319:function(e,t,n){"use strict";n.r(t);var r=n(0),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",[e._v("Generating Lots of Data")]),e._v(" "),n("p",[e._v("Sprout Import's Seed Generator is a quick way to generate fake data to work with in Craft. For very specific and larger fake data scenarios, consider generating fake data using "),n("RouterLink",{attrs:{to:"/import/faker-and-fake-data.html"}},[e._v("Faker and an import generator file")]),e._v(".")],1),e._v(" "),n("h2",{attrs:{id:"resource-limits"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#resource-limits"}},[e._v("#")]),e._v(" Resource Limits")]),e._v(" "),n("p",[e._v("When using the Seed Generator in Sprout Import, it's a good idea to consider how complicated your Field Layout is. Some Field Layouts have tens or hundreds of fields and use advanced fields like Element Relations and Matrix Fields with Element Relations fields, etc.")]),e._v(" "),n("p",[e._v("The current Seed Generator is very simple in how it is implemented. It can generate 100s of Elements at a time if the Element being generated is simple and the resource limits of the environment are appropriate.  However, as the complexity of the type of content you are generating seed data goes up, you may run into resources limits in your environment such as PHPs Memory Limit or Max Execution time.")]),e._v(" "),n("p",[e._v("Consider raising these values in your environment if you are generating lots of Seed content and also consider generating smaller numbers of Seed content for more advanced data types. For example, if your Channel has hundreds of fields, try generating 1 or 2 entries at a time if you are running into resource limits when trying to generate more entries.")])])}),[],!1,null,null,null);t.default=a.exports}}]);