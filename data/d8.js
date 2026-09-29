/* Domain 8: AI, mobile & Redwood. Source: Oracle Cloud Readiness (What's New) 24A–26C and the MyLearn "What's New in Inventory" playlist outline. Generic setup patterns, not per-feature detail. */
MOD({id:"m8a",d:"d8",title:"Enabling Redwood capabilities",
lede:"How new Redwood pages and features reach you each quarter, the handful of switches that turn them on, and what changes for an existing implementation when you flip them.",
topics:["Enable the Redwood capabilities and understand their implications on existing configurations"],
sections:[
{t:"How new features arrive",h:`<ul>
<li>Fusion gets <b>four updates a year</b> (e.g. 26A, 26B, 26C, 26D). Each one ships a <b>Cloud Readiness / What's New</b> page per product, reached from Applications Help → Oracle Help Center → Get Started, filtered with "Select your update".</li>
<li>Every feature in the readiness tables is in one of two buckets:
<ul><li><b>Ready for use by end users</b>: switched on by the update, little or no action needed.</li>
<li><b>Customer must take action before use</b>: nothing changes for users until you act. This is where almost all Redwood pages and AI agents sit.</li></ul></li>
<li>Oracle's Redwood adoption list tags each Redwood feature with how it is switched on: <b>Setup Required</b>, <b>Opt In</b>, <b>Opt In plus Setup</b>, or <b>Ready to use</b> (sometimes "with prerequisite"). Some also show an <b>opt-in expiration</b> update, after which the feature is on for everyone (e.g. View License Plate Number in Electronic Records, opt-in until 26D).</li></ul>
<div class="tbl"><table>
<tr><th>Enablement type</th><th>What you do</th><th>Typical example</th></tr>
<tr><td>Ready to use</td><td>Nothing, or grant the privilege</td><td>A new column or filter on an existing Redwood page</td></tr>
<tr><td>Opt In</td><td>Setup and Maintenance → offering → Change Feature Opt In (or My Enterprise → New Features) → tick Enable</td><td>Offering-level features such as Project-Driven Supply Chain</td></tr>
<tr><td>Setup Required</td><td>Set a profile option, security, or other configuration</td><td>Most Redwood Inventory pages; every AI agent</td></tr>
<tr><td>Opt In plus Setup</td><td>Both of the above</td><td>View License Plate Number in Electronic Records</td></tr></table></div>
<div class="focus"><b>Exam focus</b>Know the difference between an opt-in (feature switch at offering level) and a profile option (the usual switch for a Redwood page). Opt-in expiration means the choice goes away in a later update.</div>
<p class="src">Source: Oracle Cloud Readiness and Redwood adoption pages; SCM Foundation exercise "Navigating basic elements"</p>`},
{t:"The profile option pattern for Redwood pages",h:`<p>Most Redwood Inventory pages are switched on with a site-level profile option whose code ends in <b>_REDWOOD_ENABLED</b>. The steps are the same every time:</p>
<ol><li>Setup and Maintenance → search the task <b>Manage Inventory Profile Options</b> (or <b>Manage Administrator Profile Values</b>, which reaches every profile).</li>
<li>Search the profile option code, e.g. <b>ORA_INV_INVENTORY_MANAGEMENT_LANDING_PAGE_REDWOOD_ENABLED</b>.</li>
<li>In Profile Values set the <b>Site</b> level to <b>Yes</b>. The default is <b>No</b>.</li>
<li>Save and Close. The change applies <b>the next time users sign in</b>.</li></ol>
<ul><li>When the Redwood landing page is switched on, the old tile is renamed <b>Inventory Management (Classic)</b>; both exist side by side until the classic page is retired.</li>
<li>Some Redwood capabilities need a <b>scheduled process</b> first. Redwood saved searches, for example, need a job run by the Supply Chain Application Administrator that builds the search index and ingests existing data (parameter Index Name to Reingest).</li>
<li>Other products follow the same pattern with their own prefix, e.g. ORA_CST_MANAGE_COST_ACCOUNTING_PERIODS_REDWOOD_ENABLED for the Redwood Cost Accounting Periods page.</li></ul>
<div class="focus"><b>Exam focus</b>Profile option → Site level → Yes → users sign in again. Default is always No, so nothing changes until you act.</div>
<p class="src">Source: Readiness 25B "Improved Inventory Management Landing Page", 25C "Period Close Summary"</p>`},
{t:"Implications for an existing implementation",h:`<p>Use this as a checklist before switching a Redwood page on in a live environment:</p>
<div class="tbl"><table>
<tr><th>Area</th><th>What changes</th><th>What to do</th></tr>
<tr><td>Navigation</td><td>New tile or task link; classic one renamed "(Classic)" and later retired</td><td>Tell users which to use; plan before the classic page disappears</td></tr>
<tr><td>Security</td><td>Redwood (responsive) pages use their own privileges, e.g. "… Using Responsive Inventory" (…_PWA_PRIV)</td><td>Add the new privileges to custom job roles; predefined roles already have them</td></tr>
<tr><td>Personalisation and extensions</td><td>Classic pages are tailored with Page Composer; Redwood pages with <b>Visual Builder Studio</b>. Classic tailoring doesn't carry over</td><td>Rebuild needed changes in VBS or with business rules</td></tr>
<tr><td>Field behaviour</td><td>Redwood <b>business rules</b> default values (25C) and make fields hidden, read-only or required (26B–26C)</td><td>Move defaulting/validation logic into rules where possible</td></tr>
<tr><td>Search</td><td>Saved searches need the search index job</td><td>Run it before go-live</td></tr>
<tr><td>Timing</td><td>Profile changes take effect at next sign-in</td><td>Switch outside working hours; test in a test pod first</td></tr>
<tr><td>Reversibility</td><td>Most profile options can be set back to No, but some Redwood pages switch off the legacy page</td><td>Read the readiness note; treat those as one-way</td></tr></table></div>
<ul><li>Guided journeys (Setup and Maintenance, 24C/24D) add in-page help and checklists to Redwood pages, and are also how AI agents are placed on a page.</li></ul>
<div class="focus"><b>Exam focus</b>Scenario questions: "users can't see the new page" → privilege missing or they haven't signed in again; "old personalisation gone" → redo it in Visual Builder Studio.</div>
<p class="src">Source: Readiness notes 24B–26C (Visual Builder Studio, business rules, guided journeys, landing page)</p>`},
{t:"Extending Redwood pages with Visual Builder Studio",h:`<ul>
<li>Open from the page: Settings and Actions → Administration → <b>Edit Page in Visual Builder Studio</b>. Oracle recommends Google Chrome.</li>
<li>Privileges: <b>View Administration Link</b> (FND_VIEW_ADMIN_LINK_PRIV) shows the link; <b>Administer Sandbox</b> (FND_ADMINISTER_SANDBOX_PRIV) lets you deploy and manage the extension lifecycle.</li>
<li>You change <b>page properties</b> (for AI, the agent team code), hide buttons (e.g. an AI Assist button), or add fields. Then <b>Publish</b> and give a justification.</li>
<li>Redwood pages also support saved searches, quick actions from the landing page, and guided journeys, which classic pages don't.</li></ul>
<p class="src">Source: Readiness 26A Planning Measure Expression Assistant; 25C Period Close Summary</p>`},
{t:"Where Redwood has reached in Inventory",h:`<p>You don't need release numbers for the exam. What matters is that almost every Inventory setup and execution page now has a Redwood version. Rough timeline:</p>
<div class="tbl"><table>
<tr><th>Updates</th><th>Examples of what went Redwood</th></tr>
<tr><td>24A–24D</td><td>Subinventories and locators, item transaction defaults, lots and serials, Item Quantities, cycle count creation, mobile inventory</td></tr>
<tr><td>25A</td><td>Transfer orders, movement requests, physical inventory, ABC, picking rules, consigned inventory, completed transactions, supply and demand</td></tr>
<tr><td>25B</td><td>Landing page, reservations, picks, material statuses, transaction sources and types, cycle count sequences</td></tr>
<tr><td>25C–25D</td><td>Business rules to default fields, reports on demand, setup quick actions, cycle counts by locator</td></tr>
<tr><td>26A–26C</td><td>Lot split/merge/translate, schedules, policy profiles, classification groups, extra business rules, more AI agents</td></tr></table></div>
<p class="src">Source: Readiness Reports Center, Inventory Management features 24A–26C</p>`}
]});
QS("m8a",[
["Most new Redwood pages in Inventory are classified in the readiness documents as…",["Customer must take action before use by end users","Ready for use by end users","Mandatory at the next update","Available only through a service request"],"Redwood pages and AI agents sit in the 'customer must take action' bucket: nothing changes for users until you enable them."],
["How is a typical Redwood Inventory page switched on?",["Set its _REDWOOD_ENABLED profile option to Yes at Site level","Opt in to the Inventory Management offering","Run the Process Agent Documents scheduled process","Assign the Supply Chain Operations Manager role"],"The standard pattern is a site-level profile option ending in _REDWOOD_ENABLED."],
["What is the default value of a Redwood-enabling profile option such as ORA_INV_INVENTORY_MANAGEMENT_LANDING_PAGE_REDWOOD_ENABLED?",["No","Yes","Blank until the first update","Inherited from the user level"],"The default is No, so the classic experience stays until the administrator changes it."],
["You set a Redwood profile option to Yes, but a user still sees the old page. What is the most likely reason?",["The user hasn't signed in again since the change","The profile needs to be set at User level too","The opt-in expired","Visual Builder Studio hasn't been published"],"Profile changes take effect the next time users sign in."],
["After enabling the Redwood Inventory Management landing page, what happens to the existing navigation tile?",["It's renamed Inventory Management (Classic)","It's deleted immediately","It's renamed Inventory Management (Mobile)","It redirects to Setup and Maintenance"],"The old tile stays but is renamed 'Inventory Management (Classic)'."],
["Which two tasks can you use to set an Inventory profile option?",["Manage Inventory Profile Options or Manage Administrator Profile Values","Manage Inventory Lookups or Manage Organization Parameters","Change Feature Opt In or New Features","Security Console or Manage Data Access for Users"],"Both tasks reach the profile; Manage Administrator Profile Values covers every profile option."],
["What does an 'opt-in expiration' update on a feature mean?",["From that update the feature is on for everyone and can no longer be declined","The feature is removed in that update","You must opt in again after that update","The feature becomes a paid add-on"],"After the expiration update, the choice goes away and the feature is enabled for all customers."],
["Which is the right tool to tailor a Redwood page, e.g. hide a button or set a page property?",["Visual Builder Studio","Page Composer","Manage Descriptive Flexfields","Functional Setup Manager"],"Redwood pages are extended in Visual Builder Studio; Page Composer is for classic pages."],
["Which privilege makes the 'Edit Page in Visual Builder Studio' link visible?",["View Administration Link (FND_VIEW_ADMIN_LINK_PRIV)","Administer Sandbox (FND_ADMINISTER_SANDBOX_PRIV)","Manage Inventory Profile Options","Fai Genai Agent Runtime Duty"],"View Administration Link shows the link; Administer Sandbox lets you deploy the extension."],
["A customer switched to a Redwood page and complains their classic page personalisations are gone. What do you advise?",["Rebuild the needed changes in Visual Builder Studio or with Redwood business rules","Set the profile option at User level","Re-run the Page Composer sandbox publish","Opt out of the Redwood offering"],"Classic tailoring doesn't carry over to Redwood pages; recreate it with Redwood tools."],
["Custom job roles lose access after a Redwood page is enabled. What is the likely cause?",["The new responsive-page privileges (e.g. …_PWA_PRIV) aren't in the custom roles","The profile option was set at Site level","Permission groups were enabled","The search index job ran twice"],"Redwood pages use their own privileges. Predefined roles have them; custom roles need them added."],
["Before Redwood saved searches work, what must be run?",["A scheduled process that builds the search index and ingests existing data","Process Supply Chain Orchestration Interface","Maintain Project Organization","Refresh Order Promising"],"Saved search depends on the search index job, run by the Supply Chain Application Administrator."],
["Which Redwood capability, delivered in 25C and extended in 26B–26C, lets you default values and make fields hidden, read-only or required without code?",["Business rules","Guided journeys","Descriptive flexfield contexts","Processing constraints"],"Redwood business rules cover defaulting (25C) and hidden/read-only/required fields (26B–26C)."],
["Where do you enable an offering-level feature such as Project-Driven Supply Chain?",["Setup and Maintenance → offering → Change Feature Opt In","Manage Administrator Profile Values","AI Agent Studio → Agent Teams","Visual Builder Studio → Page properties"],"Offering features are switched on through Change Feature Opt In (Edit Features)."]
]);

MOD({id:"m8b",d:"d8",title:"AI agents, mobile & automation",
lede:"One setup pattern covers nearly every Inventory AI agent: switch on the security integration, give the right roles, copy the template in AI Agent Studio, publish it and place it on a Redwood page. Plus mobile inventory and other automation.",
topics:["Use AI/ML/mobile and other automation features to streamline processes and drive operational efficiency"],
sections:[
{t:"What kinds of AI agents there are",h:`<p>A study heuristic from the agent descriptions (not an official Oracle split):</p>
<div class="tbl"><table>
<tr><th>Kind</th><th>What it does</th><th>Inventory examples</th></tr>
<tr><td>Advisor</td><td>Answers questions and analyses data or documents; you act on its advice</td><td>Materials Expiration, Cycle Count Analysis, Inventory Aging, Stock Location, Lot Management, Inbound Goods, Item Shortages Analysis, Outbound Compliance, Material Handling, Goods Delivery</td></tr>
<tr><td>Assistant</td><td>Performs transactions for you through the application's REST services</td><td>Inventory Reservation, Inventory Organization Update, Inventory Shortages, Label and Document Printing, Receipt Creation, ASN Creation, Goods Return, Fulfillment Processing, Inventory Tasking, Task Allocation</td></tr>
<tr><td>Agentic app</td><td>A workspace built around agents</td><td>Warehouse Operations Workspace (26B, stockout and outbound recommendations in 26C)</td></tr></table></div>
<ul><li>An <b>agent team</b> has a supervisor agent that routes the user's question to <b>worker agents</b>. Workers use <b>tools</b>: a <b>business object tool</b> (a REST resource) or a <b>document tool</b> (uploaded PDFs). Topics steer what the agent will discuss.</li>
<li>Oracle ships <b>agent templates</b>; you never build an Inventory agent from scratch.</li></ul>
<p class="src">Source: Readiness 25C–26C Inventory; 26A Planning Measure Expression Assistant</p>`},
{t:"Generic setup: from template to Redwood page",h:`<ol>
<li><b>Switch on the integration.</b> Manage Administrator Profile Values → <b>Enable Security Console External Application Integration</b> (ORA_ASE_SAS_INTEGRATION_ENABLED) → Site = Yes.</li>
<li><b>Security for builders.</b> A configured job role with SCM Intelligent Agent Management Duty (ORA_RCS_SCM_AI_AGENT_MANAGEMENT_DUTY, plus the _HCM variant) and Fai Genai Agent SCM Administrator Duty.</li>
<li><b>Security for users.</b> A configured job role with <b>Fai Genai Agent Runtime Duty</b>, <b>permission groups enabled</b> on that role in the Security Console, and the privileges for the page the agent sits on (e.g. Manage Inventory Reservation).</li>
<li><b>Create the agent team.</b> Navigator → Tools → <b>AI Agent Studio</b> → find the template → <b>Copy Template</b> (enter a unique suffix; opens the agent team canvas) or <b>Use Template</b> (step-by-step wizard).</li>
<li><b>Adjust</b> agents, tools and topics if needed. For a document tool: upload a PDF, set it from Draft to <b>Ready to publish</b>, run the scheduled process <b>Process Agent Documents</b>, check the status is <b>Published</b>.</li>
<li><b>Publish</b> the agent team (Agent Teams tab → Draft → Edit → Publish) and note its <b>agent team code</b>.</li>
<li><b>Expose it on a page</b>, either:
<ul><li>through the page's <b>guided journey</b>: create an <b>Agent</b> task of type <b>Workflow Agent</b> for the agent and add it to the journey, or</li>
<li>in <b>Visual Builder Studio</b>: put the agent team code in the page property for that agent, then Publish with a justification.</li></ul></li></ol>
<div class="focus"><b>Exam focus</b>The chain is profile option → roles and permission groups → Copy Template → publish → guided journey (Workflow Agent task) or VBS page property. Copy Template adds a suffix to every artifact; Use Template walks you through each one.</div>
<p class="src">Source: Readiness 26A Inventory Reservation Assistant and Planning Measure Expression Assistant; 25D–26C Inventory agents</p>`},
{t:"Worked example: Inventory Reservation Assistant",h:`<ul>
<li><b>Does:</b> reservation status for a document, view demand lines and unreserved lines, create reservations to on-hand automatically, update or delete reservations, change the supply source of a line, all in natural language.</li>
<li><b>Where:</b> one agent team can be placed on the Reservations page (Inventory), New Sales Orders (Order Management) and Work Orders (Manufacturing).</li>
<li><b>Who:</b> Inventory Manager, Production Supervisor, Order Entry Specialist, with the reservation privileges (Manage Inventory Reservation, Manage Inventory Reservation and Picks, View Inventory Reservation).</li>
<li><b>Limit:</b> no reservations for Assemble to Order or Pick to Order models; fine for purchased and finished items.</li></ul>
<p>Other triggers exist: the <b>Receipt Creation Assistant (Email)</b> starts from an incoming email, configured on the AI Agent Studio <b>Credentials</b> tab and a message template.</p>
<p class="src">Source: Readiness 26A Inventory Reservation Assistant; 26B Receipt Creation Assistant</p>`},
{t:"How the setup evolved",h:`<ul>
<li><b>24D/25A "SCM AI Agents":</b> document-based agents built in a separate configuration tool, then attached through a guided journey Agent task.</li>
<li><b>25C onward:</b> prebuilt agents are templates in <b>AI Agent Studio</b>. Older document tools can be migrated: create a new agent from the template, add the migrated tool, publish, and point the guided journeys to the new journey code.</li>
<li>If an exam option mentions AI Agent Studio templates and a Workflow Agent task, that is the current way.</li></ul>
<p class="src">Source: Readiness 25A "Redwood: SCM AI Agents", 25C Inventory agents</p>`},
{t:"Mobile inventory",h:`<ul>
<li>Redwood mobile pages are responsive web pages under the <b>Inventory Management (Mobile)</b> tile (called Inventory Management (New) before 24D). They use their own privileges (… Using Responsive Inventory).</li>
<li>Covered transactions include miscellaneous receipts and issues, subinventory and interorg transfers, issues, pick confirm, ad hoc and PO receipts, cycle counts, PAR counts and physical inventory tags.</li>
<li>Scanning: item or <b>GTIN</b> barcode (GTIN populates item and transaction UOM, 25D), subinventory and locator barcodes, serial <b>ranges</b> (25D), health industry barcodes (24C). Barcode configurations and label printing were added in 24B.</li>
<li>Descriptive flexfields and attachments work in mobile (25A); more fields and a streamlined flow followed in 25B–25C.</li></ul>
<div class="lab"><b>Hands-on link</b>In the Foundation exercises you already used two mobile pages: <i>Miscellaneous Inventory Transactions (Mobile)</i> (Receive By Item, Item or GTIN Barcode, Subinventory Barcode) and <i>Sub-inventory Transfer (Mobile)</i>, where a subinventory with a blocking material status simply isn't offered as a source.</div>
<p class="src">Source: Readiness 24B–25D Inventory; SCM Foundation exercises</p>`},
{t:"Other automation worth knowing",h:`<div class="tbl"><table>
<tr><th>Automation</th><th>What it removes</th></tr>
<tr><td>Automatically ship confirm after manual pick confirm (25C)</td><td>A separate ship confirm step</td></tr>
<tr><td>Automatically transact goods from PAR counts for quantity-tracked PAR locations (25B)</td><td>Manual issues after counting</td></tr>
<tr><td>Default subinventory and locator when an item has only one location (25B)</td><td>Keying the location</td></tr>
<tr><td>Nudges for item shortages and stockouts (25A)</td><td>Watching the shortage page</td></tr>
<tr><td>Automatically add new items to cycle counts and ABC assignment groups (25D)</td><td>Maintaining count scope</td></tr>
<tr><td>Review calculated min-max and PAR levels before updating (26A–26C)</td><td>Blind overwrites of planning values</td></tr>
<tr><td>RFID-based replenishment (24D, improved for cabinets in 26B)</td><td>Manual replenishment requests</td></tr>
<tr><td>High-volume REST transactions and pick confirms (24A)</td><td>Throughput limits for integrations</td></tr>
<tr><td>Publish on-hand balances to an external execution system by file for reconciliation (26C)</td><td>Manual stock comparisons with a 3PL or WMS</td></tr></table></div>
<p class="src">Source: Readiness Inventory Management 24A–26C</p>`}
]});
QS("m8b",[
["Which profile option must be Yes at Site level before SCM AI agents can be used?",["Enable Security Console External Application Integration (ORA_ASE_SAS_INTEGRATION_ENABLED)","ORA_INV_INVENTORY_MANAGEMENT_LANDING_PAGE_REDWOOD_ENABLED","Material Status Enforced","Min-Max Replenishment Reorder Approval"],"This profile enables the permission groups that AI agent access relies on."],
["Where are Oracle's prebuilt AI agent templates found?",["Navigator → Tools → AI Agent Studio","Setup and Maintenance → Change Feature Opt In","Visual Builder Studio → Components","Scheduled Processes → Process Agent Documents"],"Templates live in AI Agent Studio."],
["What is the difference between Copy Template and Use Template in AI Agent Studio?",["Copy Template adds a suffix to all artifacts and opens the agent team canvas; Use Template walks you through each artifact step by step","Copy Template publishes immediately; Use Template stays in draft","Copy Template is for HCM; Use Template is for SCM","There is no difference"],"Copy = suffix + canvas; Use = guided step-by-step configuration."],
["After publishing an agent team, how do you place it on a Redwood page through a guided journey?",["Create an Agent task of type Workflow Agent and add it to the page's guided journey","Add the agent to the page's descriptive flexfield","Assign the agent to an inventory organisation","Set a profile option with the agent's name"],"The documented route is an Agent task of type Workflow Agent in the page's guided journey."],
["Besides a guided journey, where can the published agent team code be entered so a page calls your agent?",["A page property in Visual Builder Studio","Manage Inventory Profile Options","The item's operational attributes","The Security Console user record"],"Some pages expose a page property in VBS that holds the agent team code; you then publish the change."],
["Which duty role must end users have to interact with AI agents on product pages?",["Fai Genai Agent Runtime Duty","SCM Intelligent Agent Management Duty","Fai Genai Agent SCM Administrator Duty","Supply Chain Application Administrator"],"Runtime duty is for using agents; the management and administrator duties are for building them."],
["Users have the runtime duty but still can't use the agent. What else is required on their configured job role?",["Permission groups enabled in the Security Console, plus privileges for the page the agent is on","A user-level profile option","A Visual Builder Studio sandbox","The Project Accountant role"],"Permission groups must be enabled on the configured role, and users need access to the host page."],
["An agent uses a document tool. You uploaded the PDF. What turns it into usable knowledge?",["Set the document to Ready to publish and run Process Agent Documents until it shows Published","Publish the page in Visual Builder Studio","Run Process Supply Chain Orchestration Interface","Attach it to the item as an attachment"],"Draft → Ready to publish → Process Agent Documents → Published."],
["In an agent team, what routes a user's question to the right worker agent?",["The supervisor agent","The guided journey","The document tool","The permission group"],"The supervisor orchestrates; worker agents use tools such as business object (REST) or document tools."],
["The Inventory Reservation Assistant can be placed on which pages?",["Reservations (Inventory), New Sales Orders (OM) and Work Orders (Manufacturing)","Only the Reservations page","Item Quantities and Cycle Counts","Supplier Portal and Receipts"],"One agent team can be added to guided journeys on all three pages."],
["Which reservations does the Inventory Reservation Assistant NOT support?",["Assemble to Order and Pick to Order models","Purchased items","Finished items","Reservations to on-hand supply"],"ATO and PTO models are excluded; purchased and finished items are supported."],
["An agent that analyses slow-moving stock and suggests actions, without transacting, is best described as…",["An advisor, e.g. the Inventory Aging Advisor","An assistant, e.g. the Receipt Creation Assistant","A business rule","A guided journey"],"Advisors analyse and advise; assistants perform transactions."],
["Which tile gives warehouse users the Redwood mobile inventory pages?",["Inventory Management (Mobile)","Inventory Management (Classic)","Warehouse Operations Workspace","Supply Chain Orchestration"],"The Redwood mobile pages sit under the Inventory Management (Mobile) tile, renamed from '(New)' in 24D."],
["What does scanning a GTIN barcode on a mobile transaction populate (25D)?",["The item number and the transaction UOM","The subinventory and locator","The lot and expiration date","The supplier and PO number"],"GTIN scanning fills item and transaction UOM."],
["A customer wants to reconcile on-hand with an external 3PL system without building an API. Which 26C feature fits?",["Publish inventory on-hand balances to an external execution system using a file-based integration","High-volume REST inventory transactions","Nudges for item shortages","The Inventory Aging Advisor"],"The 26C file-based on-hand publish exists for reconciliation with external execution systems."]
]);
