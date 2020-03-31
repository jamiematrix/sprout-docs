(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{287:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",[e._v("FAQ")]),e._v(" "),a("p",[e._v("Frequently asked questions about Sprout Forms.")]),e._v(" "),a("h2",{attrs:{id:"i-am-using-the-available-captchas-but-i-am-still-getting-spam"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-am-using-the-available-captchas-but-i-am-still-getting-spam"}},[e._v("#")]),e._v(" I am using the available Captchas but I am still getting SPAM!")]),e._v(" "),a("p",[e._v("Spam strategies are always evolving and sometimes the conventions you use on your website will also need to evolve. The default options provided don't depend on third-party services however, often, third-party services have a larger network of data to work with to provide effective spam prevention measures.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://plugins.craftcms.com/sprout-forms-google-recaptcha",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google ReCAPTCHA for Sprout Forms"),a("OutboundLink")],1),e._v(". If you continue to see spam after implementing ReCAPTCHA with the default settings, there is a setting to increase the security level.")]),e._v(" "),a("li",[e._v("Cloudflare offers several "),a("a",{attrs:{href:"https://support.cloudflare.com/hc/en-us/articles/115002059131-Understanding-your-Site-Protection-Options",target:"_blank",rel:"noopener noreferrer"}},[e._v("Site Protection Options"),a("OutboundLink")],1),e._v(", some of which are free, if you route your DNS through Cloudflare")])]),e._v(" "),a("p",[e._v("To better understand your spam traffic, you can enable Spam tracking and Sprout Forms will log all Failed Captcha error messages as well as capture meta information about each submission such as Remote IP Address, Referrer URL, and User Agent. The Spam Log report provides an overview of all of this information that can be used to analyze the data and detect trends.")]),e._v(" "),a("h2",{attrs:{id:"how-do-i-validate-an-email-address-phone-number-or-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-validate-an-email-address-phone-number-or-url"}},[e._v("#")]),e._v(" How do I validate an Email Address, Phone Number, or URL?")]),e._v(" "),a("p",[e._v("Install "),a("RouterLink",{attrs:{to:"/fields/"}},[e._v("Sprout Fields")]),e._v("!  Sprout Fields provides you several additional field types to help ensure you're collecting clean and accurate data.")],1),e._v(" "),a("h2",{attrs:{id:"how-do-i-export-my-form-entries-to-csv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-export-my-form-entries-to-csv"}},[e._v("#")]),e._v(" How do I export my form Entries to CSV?")]),e._v(" "),a("p",[e._v("You can use "),a("RouterLink",{attrs:{to:"/reports/"}},[e._v("Sprout Reports")]),e._v(" to export your Form Entries to CSV.")],1),e._v(" "),a("p",[e._v("To export all entries from a particular form, you can create a custom SQL query to target that form. Each form uses a different table in the database.")]),e._v(" "),a("div",{pre:!0},[a("p",[e._v("For example, to export all data for a form with the handle "),a("code",[e._v("contact")])])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" craft_sproutformscontent_contact\n")])])]),a("p",[e._v("You will need to update your query to match your Craft database prefix and your form handle. Here is a generic example template of what this query should be using variables that you will need to update for your use case:")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" {databasePrefix}_sproutformscontent_{formHandle}\n")])])]),a("h2",{attrs:{id:"my-form-submissions-are-not-working-my-submitted-form-entries-never-appear-in-my-database-what-is-broken"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#my-form-submissions-are-not-working-my-submitted-form-entries-never-appear-in-my-database-what-is-broken"}},[e._v("#")]),e._v(" My form submissions are not working. My submitted form entries never appear in my database. What is broken?")]),e._v(" "),a("p",[e._v("When form submissions never make it to the database, usually something else is blocking them.")]),e._v(" "),a("p",[e._v("Do you have any spam plugins installed? Try disabling them or making their settings less strict.")]),e._v(" "),a("p",[e._v("Are your forms triggering any other events that may be causing errors? Spam filters or email notifications that are failing could affect your form entries from reaching the database.")]),e._v(" "),a("p",[e._v("Check your logs and see if there are any errors:")]),e._v(" "),a("p",[e._v("In your files:")]),e._v(" "),a("ul",[a("li",[e._v("craft/storage/runtime/logs/sproutforms.log")]),e._v(" "),a("li",[e._v("craft/storage/runtime/logs/craft.log")])]),e._v(" "),a("p",[e._v("Or in your Control Panel:")]),e._v(" "),a("ul",[a("li",[e._v("/admin/utils/logs")])]),e._v(" "),a("h2",{attrs:{id:"my-form-notification-emails-are-not-being-sent-or-my-form-notification-emails-are-sometimes-being-sent-but-behaving-erratically"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#my-form-notification-emails-are-not-being-sent-or-my-form-notification-emails-are-sometimes-being-sent-but-behaving-erratically"}},[e._v("#")]),e._v(" My form notification emails are not being sent. Or, my form notification emails are sometimes being sent but behaving erratically.")]),e._v(" "),a("p",[e._v("The most frequent issue that causes notification emails to not be sent or behave erratically is the selected Email Protocol.  By default, this is usually set to PHP Mail.  PHP Mail and Sendmail are often misconfigured on local computers and may be configured in a variety of different ways by hosting providers.  They also do not provide much information to help troubleshoot what might be going wrong.")]),e._v(" "),a("p",[e._v("The first step necessary to better troubleshoot why notifications are not behaving as expected is to update your settings to a proper SMTP Protocol. "),a("a",{attrs:{href:"https://mandrill.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mandrill"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"https://www.mailgun.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MailGun"),a("OutboundLink")],1),e._v(" are good options and MailGun has a free plan which allows you to send up to 10,000 emails a month, if cost is a concern.  Once you are sending email via Mandrill and MailGun, they also can provide more information on what is happening to your email after it is being sent.")]),e._v(" "),a("p",[e._v("Another decent option to troubleshoot with is Gmail. While Gmail doesn't provide as much information on how emails are behaving after they are sent, and can sometimes behave in unintuitive ways if you are sending and receiving from the same Gmail address, it is more reliable than PHP Mail and Sendmail and most people have a Gmail account.")]),e._v(" "),a("h2",{attrs:{id:"where-can-i-install-example-forms-after-sprout-forms-is-installed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-can-i-install-example-forms-after-sprout-forms-is-installed"}},[e._v("#")]),e._v(" Where can I install example forms after Sprout Forms is installed?")]),e._v(" "),a("div",{pre:!0},[a("p",[e._v("You can install the default example forms in the Control Panel at "),a("code",[e._v("admin/sproutforms/examples")]),e._v(" or find a link to install the Example Forms in the Sprout Forms Settings area.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);