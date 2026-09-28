MOD({id:"m1a",d:"d1",title:"Organisation model",
lede:"How legal entities, business units, cost organisations and inventory organisations fit together, and what each one is for.",
topics:["Role of enterprise structure components","Item, cost and inventory organisation","Set up inventory organisation"],
sections:[
{t:"The layers of the enterprise",h:`<ul>
<li><b>Legal entity</b> has one primary ledger (plus optional secondary ledgers) and one or more profit-centre business units.</li>
<li><b>Shared service BU</b> can sit above legal entities, e.g. central purchasing or payables.</li>
<li><b>BU → cost organisations → inventory organisations.</b> All inventory orgs in one cost org must belong to the same BU.</li>
<li><b>Plants</b> are linked to inventory orgs.</li>
<li>No transfer pricing within a BU; transfer pricing applies across BUs.</li></ul>
<div class="focus"><b>Exam focus</b>A cost org groups inventory orgs of a single BU. Transfer pricing only kicks in across BUs.</div>
<p class="src">Source: SCM Foundation, lesson 16</p>`},
{t:"Item organisation vs inventory organisation",h:`<div class="tbl"><table>
<tr><th></th><th>Item org</th><th>Inventory org</th></tr>
<tr><td>Financial setup (BU, legal entity, ledger)</td><td>No</td><td>Yes</td></tr>
<tr><td>Transactions and quantities</td><td>No</td><td>Yes</td></tr>
<tr><td>Weight</td><td>Lightweight</td><td>Full</td></tr>
<tr><td>Change usage</td><td>Can become an inventory org</td><td>Can never become an item org</td></tr>
<tr><td>Setup task</td><td>Manage Item Organizations</td><td>Manage Inventory Organizations</td></tr></table></div>
<ul><li>Item orgs hold item definitions only: master orgs, retail listing, sales catalogs.</li>
<li>An inventory org is a facility where items are stored and transacted: physical (plant, warehouse, DC) or logical (item master). It can have its own location, ledger, costing method, workday calendar and items, or share them.</li>
<li>REST APIs exist for inventory orgs, their parameters and plant parameters.</li></ul>
<div class="focus"><b>Exam focus</b>The one-way change (item org → inventory org) is a classic trick question.</div>
<p class="src">Source: SCM Foundation, lesson 3</p>`},
{t:"Setting up an inventory organisation",h:`<ul>
<li>Path: Setup and Maintenance → Manufacturing and Supply Chain Materials Management → Facilities → Manage Inventory Organizations → Manage Organization Parameters.</li>
<li>Org parameters include lot, serial and packing unit settings, country-of-origin tracking and (for PDSC) inventory tracking by project.</li>
<li><b>Country of origin tracking</b> stripes on-hand by country; you can query, transact (counts, issue, receipt, move, pick confirm, ship) and value by it.</li>
<li>Quick setup: creating an inventory org auto-creates subinventories, receiving and shipping parameters and, for a plant, plant parameters, resources and work centres.</li></ul>
<p class="src">Source: SCM Foundation, lessons 2–3</p>`},
{t:"Overall setup sequence",h:`<p>Common apps (users, roles, security, org structures, UOMs, flexfields) → common SCM (items, catalogs, structures, calendars) → inventory (subinventories, locators, transaction types, picking rules, material status, receiving and shipping parameters) → costing (cost orgs, books, elements, profiles).</p>
<p class="src">Source: SCM Foundation, course overview</p>`}
]});
QS("m1a",[
["Which statement about cost organisations is correct?",["All inventory orgs in a cost org must belong to the same business unit","A cost org can span inventory orgs in several business units","Each inventory org needs its own cost org","Cost orgs are assigned to legal entities, not business units"],"A cost org's inventory orgs must all be in one BU."],
["When is transfer pricing applied between two inventory organisations?",["When they belong to different business units","Always, for every interorg transfer","Only when they are in different legal entities with separate ledgers","Only when transfer orders are routed through Order Management"],"There is no transfer pricing within a BU; it applies across BUs."],
["Which organisation type cannot hold on-hand quantities?",["Item organisation","Inventory organisation","Manufacturing plant","Contract manufacturing organisation"],"Item orgs hold item definitions only; they have no financial setup, transactions or quantities."],
["A client wants a lightweight organisation only to hold item definitions for a sales catalog. What should you create?",["An item organisation","An inventory organisation with no subinventories","A cost organisation","A logical inventory organisation with locator control"],"Item orgs are lightweight and store item definitions only."],
["Which setup task creates an organisation that can transact stock?",["Manage Inventory Organizations","Manage Item Organizations","Manage Cost Organizations","Manage Facilities Schedules"],"Inventory orgs are created with Manage Inventory Organizations."],
["What does a legal entity always have?",["One primary ledger","One business unit only","A shared service BU","Its own cost organisation"],"Each legal entity has one primary ledger, plus optional secondary ledgers, and one or more BUs."],
["Where do you switch on country of origin tracking?",["Organization parameters of the inventory organisation","Item operational attributes","Subinventory definition","Receiving parameters"],"Country of origin tracking is an inventory org parameter (Manage Organization Parameters)."],
["With country of origin tracking enabled, which is NOT something you can do by country of origin?",["Set a different costing method per country","Segregate on-hand","Transact issues and receipts","Value inventory"],"You can stripe, query, transact and value by country of origin; the costing method is not set per country."],
["Using quick setup, what is auto-created when you create an inventory organisation?",["Subinventories and receiving and shipping parameters","Items and item structures","Cost books and cost profiles","Suppliers and supplier sites"],"Quick setup creates dependent objects: subinventories, receiving/shipping parameters and, for plants, plant parameters, resources and work centres."],
["Where do plants fit in the organisation model?",["They are linked to inventory organisations","They sit directly under the legal entity instead of a BU","They replace cost organisations","They are item organisations with manufacturing enabled"],"Plants link to inventory orgs; manufacturing uses the org with plant parameters."],
["What kind of BU typically performs central purchasing or payables for several legal entities?",["Shared service business unit","Profit-centre business unit","Cost organisation","Item master organisation"],"A shared service BU sits above legal entities and provides services such as central purchasing or AP."],
["Which statement about inventory organisations is correct?",["They can share a location, ledger, costing method and calendar or have their own","They must always have their own ledger","They cannot share a workday calendar","They must be physical sites"],"An inventory org can be physical or logical and can have its own attributes or share them."],
["In the recommended implementation order, what comes before inventory setups such as subinventories and transaction types?",["Common SCM setup such as items, catalogs and calendars","Cost books and cost profiles","Receiving tolerances","Cycle count definitions"],"Order: common apps → common SCM → inventory → costing."],
["An item master organisation is best described as:",["A logical inventory or item organisation that holds item definitions","A warehouse holding safety stock","A cost organisation for items","A subinventory for master data"],"The master org is a logical org holding item definitions for the enterprise."],
["Which REST resources exist for organisations?",["Inventory organisations, their parameters and plant parameters","Only item organisations","Only cost organisations","None; orgs can only be created in the UI"],"REST covers inventory orgs, org parameters and plant parameters."]
]);

MOD({id:"m1b",d:"d1",title:"Functional Setup Manager & setup data",
lede:"How you opt in to features, manage setup tasks and move configuration between environments.",
topics:["Configure and customize enterprise structure","Troubleshoot configuration issues"],
sections:[
{t:"Offerings, functional areas and features",h:`<ul>
<li><b>Offering</b>: a bundle of business processes you administer as a unit, e.g. Manufacturing and Supply Chain Materials Management.</li>
<li><b>Functional area</b>: a sub-process within an offering, e.g. Facilities, Catalogs.</li>
<li><b>Feature</b>: optional behaviour, Yes/No, single-choice or multi-choice.</li>
<li>Opt in via My Enterprise → Offerings. A child can't be enabled unless its parent is; non-optional children switch on automatically with the parent.</li>
<li>After a quarterly update, review My Enterprise → New Features.</li>
<li>Lifecycle: Plan → Opt In → Set Up → Deploy → Maintain.</li></ul>
<p class="src">Source: SCM Foundation, lesson 2</p>`},
{t:"Quick setup and reference data",h:`<ul>
<li>The Quick Setup icon on the Facilities functional area runs a train: Calendar → Units of measure (30+ common UOMs) → Master org → inventory, manufacturing and maintenance orgs.</li>
<li>Uses <b>reference data</b>: seed data used only in quick setup, only for new objects, so it never clashes with customer data. Objects created are normal and editable.</li>
<li>Savings: calendar 26 → 6 inputs, UOM 266 → 1, org 87 → 8; about 96% of data entry skipped; 20+ tasks automated.</li></ul>
<p class="src">Source: SCM Foundation, lesson 2</p>`},
{t:"Four ways to manage setup data",h:`<ul>
<li><b>By functional area</b> (best practice, "adopt as you go"). Tasks listed in dependency order; mandatory tasks by default; asterisk = FA has mandatory tasks; some tasks need a scope such as an org.</li>
<li><b>Implementation projects</b> for project-style control: one per offering, task list in prerequisite order, assign users and due dates.</li>
<li><b>CSV export/import</b> per task for many records with few attributes. Child rows skipped if parent missing. Also via FSM SOAP and REST.</li>
<li><b>Copy Configurations</b>: copy an existing setup to a staging area, edit, import as new.</li></ul>
<p class="src">Source: SCM Foundation, lesson 2</p>`},
{t:"Migrating setup data between environments",h:`<ul>
<li>Source and target must be on the <b>same code level</b>.</li>
<li>Import rules: in package only → created; in target only → untouched; identical → nothing; different → target updated. Import never deletes.</li>
<li>Offering/functional area must already be enabled in the target.</li>
<li>Compare Setup Data before import: in both with mismatch, only in config 1, only in config 2.</li>
<li>Classic migration (default, manual package download/upload) vs Unified migration (after opting into Unified Sandbox; can send only changes; lands in a target sandbox first).</li>
<li>Strategies: Test → Prod (refresh Test with P2T), or a Gold copy as the setup source of truth.</li></ul>
<div class="focus"><b>Exam focus</b>Import creates and updates but never deletes target-only records. Same code level is required.</div>
<p class="src">Source: SCM Foundation, lesson 2</p>`}
]});
QS("m1b",[
["What is the recommended default approach for managing setup data in FSM?",["By functional area","By implementation project","By CSV import","By copy configuration"],"Setup by functional area is the best practice; implementation projects are for exceptions."],
["You try to enable a feature but the checkbox is unavailable. What is the most likely cause?",["Its parent in the opt-in hierarchy is not enabled","The feature requires an implementation project","The feature is only available through CSV import","Features can only be enabled by Oracle Support"],"A child can't be enabled unless its parent is enabled."],
["During setup data import, a record exists in the target but not in the package. What happens?",["It is left untouched","It is deleted","It is flagged as an error and the import stops","It is overwritten with default values"],"Import never deletes target-only records."],
["A record exists in both package and target with different values. What happens on import?",["The target is updated with the package values","The target value is kept","The import creates a duplicate","The record is skipped and reported"],"Different values in both → target updated."],
["What is a prerequisite for migrating setup data from Test to Production?",["Both environments on the same code level","Both environments using unified sandboxes","The target must have no existing setup data","The offering must be disabled in the target"],"Source and target must be on the same code level."],
["What distinguishes reference data from seed data?",["It is used only in quick setup and only for new objects","It overwrites customer data during upgrades","It can't be edited after creation","It is only available through CSV import"],"Reference data is a type of seed data used only by quick setup for new objects, so it never clashes with customer data."],
["Where do you review and opt into new functionality after a quarterly update?",["My Enterprise > New Features","Manage Implementation Projects","Setup Data Report","Import Offering Data History"],"New Features lists new items after an update."],
["In an implementation project, which statement is true?",["You can assign tasks to users with due dates","One project can include several offerings","Tasks are listed alphabetically","Projects are the only way to run setup tasks"],"Implementation projects give project-style control: one per offering, tasks in prerequisite order, assignees and due dates."],
["When is CSV export/import of a setup task most useful?",["Many records with few attributes","One complex record with many child objects","Migrating a whole offering","Setting up features"],"CSV is good for bulk, simple records."],
["During CSV import, what happens to a child row whose parent is missing?",["It is skipped","A parent is created automatically","The whole file is rejected","It is imported as an orphan"],"Child rows are skipped if the parent is missing or duplicated."],
["Which environment strategy keeps a dedicated setup source of truth?",["Gold copy","Test to Prod","P2T refresh","Unified sandbox"],"The Gold instance holds master setup; it is exported to Test to verify, then to Prod."],
["Before importing a configuration package you want to see differences. Which tool?",["Compare Setup Data","Process Results Summary","Copy Configurations","Setup Data Report"],"Compare Setup Data shows mismatches and records only in one configuration."],
["What does an asterisk next to a functional area indicate?",["It has mandatory tasks","It is shared with another offering","It has been fully configured","It requires a scope"],"An asterisk means the FA has mandatory tasks."],
["Which quick setup statement is correct?",["It skips around 96% of data entry for core facility setup","It configures costing and SCFO","It is only for manufacturing plants","It creates items and structures"],"Quick setup automates 20+ tasks and skips about 96% of data entry for calendars, UOMs and orgs."],
["What must be true in the target before importing an offering's setup data?",["The offering or functional area is already enabled","The target has no transactions","A Gold copy exists","Unified migration is enabled"],"The offering/FA must already be enabled in the target."]
]);
