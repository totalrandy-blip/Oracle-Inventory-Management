MOD({id:"m2a",d:"d2",title:"Subinventories, locators & units of measure",
lede:"How stock is divided inside an organisation, and how quantities are counted and converted.",
topics:["Configure subinventories and locators","Configure units of measure"],
sections:[
{t:"The storage hierarchy",h:`<ul>
<li><b>Organisation → subinventory → locator.</b> Locators are optional; subinventories are not.</li>
<li>You can create an inventory org without a subinventory, but you cannot transact until one exists.</li>
<li>Subinventories split stock physically or logically (raw materials, finished goods, defective, freezer). Stock inherits the subinventory's material status, replenishment and locator behaviour.</li>
<li>Typical flow: Receiving → Raw materials / FG / Inspection → Manufacturing / Defective → Shipping. One org can model a warehouse and adjacent plant through separate subinventories.</li>
<li>PAR settings on a subinventory: PAR location, PAR level, PAR max, subinventory group, replenishment count method, default count type.</li></ul>
<p class="src">Source: SCM Foundation, lesson 3</p>`},
{t:"Locators",h:`<ul>
<li>Optional third level (row/rack/bin). Track and restrict items by locator; end-date locators.</li>
<li><b>Locator control</b>: None, Predefined, Dynamic entry (created during a transaction), Item level.</li>
<li>Control at subinventory → required for all items there. Control at item → required for that item.</li>
<li>Each locator belongs to one subinventory. Structure = <b>Inventory Locator KFF (code MTLL)</b>, table INV_ITEM_LOCATIONS; only needed if you use locators.</li></ul>
<div class="focus"><b>Exam focus</b>Four locator control options; MTLL is the locator KFF.</div>`},
{t:"UOM classes and conversions",h:`<ul>
<li><b>UOM class</b> groups similar units. Each class has one <b>base UOM</b>, set at class creation; it should be the <b>smallest</b> unit (Unit, Milligram, Second, Cubic centimetre).</li>
<li><b>Standard (intraclass)</b>: UOM → class base, e.g. 1 Gross = 144 Units.</li>
<li><b>Item-specific intraclass</b>: e.g. this item's Box = 12 Units.</li>
<li><b>Interclass</b>: always item-specific, between base UOMs of different classes (keyboard 2 Units = 1 Pound).</li>
<li>Every item needs a primary UOM. REST APIs exist for UOMs, classes and interclass conversions.</li></ul>`},
{t:"Packaging strings, stocking UOM and dual UOM",h:`<ul>
<li><b>Packaging string</b> (Ea 100/BOX 5/PK 4/CT): adding it to an item auto-generates read-only intraclass conversions and limits the UOM list. Needs feature "Calculate Runtime Transaction UOM Conversions with Generated Item Data" (parent of "Autocreate UOM Conversions When Adding a Packaging String to an Item").</li>
<li><b>Default stocking UOM</b> by org and/or subinventory (hospital: Case of 100 centrally, Case of 10 on wards). Needs feature "Enable Units of Measure Usages" → Manage Units of Measure Usages.</li>
<li>Hidden "UOM Conversions" column on many inquiry and transaction pages shows quantities in multiple UOMs.</li>
<li><b>Dual UOM</b>: primary + secondary end to end (OM, Pricing, SCO, SCFO, Inventory, Costing, Procurement, PIM). Catch weight: 10 cases = 100 lb nominal, 105 lb shipped, priced at $5/lb = $525.</li></ul>
<div class="focus"><b>Exam focus</b>Base UOM = smallest. Interclass is always item-specific. Packaging strings generate read-only conversions.</div>`}
]});
QS("m2a",[
["Which of these is NOT a locator control option?",["Lot level","None","Predefined","Dynamic entry"],"Options are None, Predefined, Dynamic entry and Item level."],
["When creating a UOM class, which unit should be the base UOM?",["The smallest unit","The most commonly used unit","The largest unit","The purchasing unit"],"The base UOM should be the smallest unit in the class."],
["You need '2 Units = 1 Pound' for a keyboard item. Which conversion type is this?",["Interclass","Standard intraclass","Item-specific intraclass","Packaging string"],"Count and Mass are different classes, so it's interclass, which is always item-specific."],
["A new inventory org has no subinventories. A user tries a miscellaneous receipt. What happens?",["It fails, because every transaction needs a subinventory","It posts to a default subinventory","It posts at org level","The org couldn't have been created"],"The org can exist without subinventories, but every transaction needs one."],
["Locator control is set to Predefined on a subinventory. What is the effect?",["All items in that subinventory need a locator that exists in advance","Only lot-controlled items need a locator","Locators are created on the fly during transactions","Locators are optional for that subinventory"],"Control at subinventory level applies to every item there; Predefined means locators must exist beforehand."],
["Which key flexfield defines the locator structure?",["Inventory Locator (MTLL)","Account Alias (MDSP)","Valuation Unit","Consigned"],"Inventory Locator KFF code MTLL, table INV_ITEM_LOCATIONS."],
["How many subinventories can a single locator belong to?",["One","Two","Any number in the same org","Any number across orgs"],"Each locator belongs to exactly one subinventory."],
["What happens when you add a packaging string to an item (with the feature enabled)?",["Intraclass conversions are generated and stored read-only","Interclass conversions are created","The item's primary UOM changes","A new UOM class is created"],"Packaging strings auto-generate read-only intraclass conversions and limit the UOM list."],
["A hospital stores an item as a Case of 100 centrally and a Case of 10 on wards. Which capability supports this?",["Default stocking UOM by org and subinventory","Dual UOM","Packaging strings","Interclass conversions"],"Default stocking UOM (UOM usages) lets you stock the same item in different UOMs by org/subinventory."],
["Which feature must be enabled to use Manage Units of Measure Usages?",["Enable Units of Measure Usages","Calculate Runtime Transaction UOM Conversions","Dual Unit of Measure","Packaging Strings"],"UOM usages need the feature Enable Units of Measure Usages."],
["A meat distributor orders 10 cases (100 lb nominal) and ships 105 lb, priced at $5 per lb. What's the invoice value?",["$525","$500","$50","$1,050"],"Dual UOM prices on the actual secondary quantity: 105 × $5 = $525."],
["Which statement about the base UOM is true?",["It is defined when the UOM class is created","It can be changed at any time","Each class can have several","It must be the purchasing UOM"],"The base UOM is set at class creation; one per class."],
["Which is a valid PAR setting on a subinventory?",["PAR level (optimal quantity)","Cycle count frequency","Lot expiration action","Receipt routing"],"PAR settings include PAR location, level, max, subinventory group, count method and default count type."],
["Stock in a subinventory inherits which behaviour from it?",["Material status, replenishment and locator control","Lot numbering","Costing method","Serial uniqueness"],"Stock behaves according to the subinventory's material status, replenishment and locator structure."],
["How can users see a quantity expressed in several UOMs on the receiving and transfer pages?",["Add the hidden 'UOM Conversions' column","Enable dual UOM on the item","Create an interclass conversion","Use the packaging string LOV"],"A hidden 'UOM Conversions' column is available on many transaction and inquiry pages."]
]);

MOD({id:"m2b",d:"d2",title:"Items, catalogs & structures",
lede:"What must exist before you create an item, how attributes and templates work, and how catalogs and structures organise items.",
topics:["Configure items"],
sections:[
{t:"Prerequisites and item classes",h:`<ul>
<li>Before creating items: organisation, UOM, lifecycle phases, default item class.</li>
<li><b>Lifecycle phase types</b> (seeded): Design, Preproduction/Prototype, Production, Obsolete. You create named phases from types; "Production" is predefined. Every item has one phase; the item class controls allowed phases.</li>
<li><b>Root Item Class</b> is seeded. Only Product Hub customers can create child classes; everyone else uses Root. Manage Default Item Class has tabs Basic, Lifecycle Phases, Item Templates.</li></ul>
<p class="src">Source: SCM Foundation, lesson 4</p>`},
{t:"Attribute types",h:`<ul>
<li><b>Main</b>: common to all items (number, description, status, lifecycle phase, user item type, class, UOM).</li>
<li><b>Operational</b>: behaviour per app (shelf life days, shippable, negotiation required, allow substitute receipts). Master vs org control via Manage Operational Attributes Control.</li>
<li><b>Additional information</b>: DFF-based (single context) or EFF-based (multi-context).</li>
<li><b>Transactional</b>: captured at transaction time (e.g. VIN); defined on the item class; needs a value set.</li></ul>`},
{t:"Creating items",h:`<ul>
<li>Product Information Management → Create Item: master org, number of items, class, templates.</li>
<li><b>Templates apply in sequence; the later template wins</b> for the same attribute.</li>
<li>Count > 1 opens the Create Multiple Items grid. Copy item can copy attributes, relationships, structures (copy or common), org assignments, attachments.</li>
<li>Item revision tracks form/fit/function changes over time.</li></ul>
<div class="focus"><b>Exam focus</b>Templates: last one applied wins.</div>`},
{t:"Catalogs",h:`<ul>
<li>Catalog = items sharing a business purpose; an item can be in many. Categories subdivide (flat or hierarchy).</li>
<li><b>Functional area catalogs</b> (FSM: Manage Functional Area Catalogs) used by Purchasing, Inventory, Planning, Cost, Order Entry and others; <b>product catalogs</b> in PIM (Manage Catalogs).</li>
<li>Share by <b>reference</b> (read-only, includes child hierarchy and items) or by <b>copy</b>.</li>
<li>Automatic assignment: seeded FA rules put new items in the FA catalog's default category when an owning attribute is set (e.g. Inventory item = Yes).</li></ul>
<p class="src">Source: SCM Foundation, lesson 5</p>`},
{t:"Item structures",h:`<ul>
<li>Structure = list of components. Unlimited structures per item, one per purpose; org-specific. "Primary" type is predefined.</li>
<li><b>Use Primary for Expansion</b>: if a component lacks the requested structure type, its Primary is exploded.</li>
<li><b>Common structure</b>: references a source (same master org, type, effectivity); read-only. "Allow Attribute Updates" (set at creation only, irreversible) lets you change supply type, subinventory, locator, operation sequence, include in cost rollup.</li>
<li>Validation: component ≠ parent; component phase same or later than parent; no obsolete components; optional components only on models/option classes; planning % = 100 on standard structures.</li></ul>
<p class="src">Source: SCM Foundation, lesson 6</p>`}
]});
QS("m2b",[
["Two item templates set the same attribute to different values. Which value is kept?",["The value from the template applied last","The value from the template applied first","The item class default","The user is prompted to choose"],"Templates apply in sequence; the later one overrides."],
["Which is NOT a seeded lifecycle phase type?",["Released","Design","Production","Obsolete"],"Seeded types: Design, Preproduction/Prototype, Production, Obsolete."],
["A customer without Product Hub wants child item classes. What applies?",["They must use the Root Item Class only","They can create child classes under Root","They can create classes in FSM","They need a separate item org per class"],"Only Product Hub customers can create child item classes."],
["Which attribute type is captured at transaction time, such as a VIN?",["Transactional attribute","Operational attribute","Main attribute","Descriptive flexfield"],"Transactional attributes are defined on the item class and captured when transacting."],
["Shelf life days and 'allow substitute receipts' are examples of:",["Operational attributes","Main attributes","Transactional attributes","Extensible flexfields"],"Operational attributes control behaviour in each application."],
["Where do you decide whether an operational attribute is controlled at master or org level?",["Manage Operational Attributes Control","Manage Item Classes","Manage Item Templates","Manage Functional Area Catalogs"],"Control level is set in Manage Operational Attributes Control."],
["Which is a prerequisite before creating items?",["Lifecycle phases","Cost scenarios","Picking rules","Receiving parameters"],"Prerequisites: organisation, UOM, lifecycle phases, default item class."],
["A catalog shared by reference is:",["Read-only, including its child hierarchy and items","Editable in the target catalog","A snapshot that doesn't change","Only the top category"],"Sharing by reference is read-only and includes the child hierarchy and items."],
["New items automatically appear in the Inventory functional area catalog. Why?",["Seeded functional area rules assign them to the default category when the owning attribute is set","The item template assigns catalogs","Planning collections assign them","A scheduled process runs nightly"],"Seeded FA rules place new items in the default category when e.g. Inventory Item = Yes."],
["Where are functional area catalogs created?",["FSM task Manage Functional Area Catalogs","PIM work area Manage Catalogs","Inventory Management work area","Cost Accounting work area"],"FA catalogs are set up in FSM; product catalogs in PIM."],
["Which statement about a common structure is true?",["It references a source structure and is read-only by default","It is a full copy that can be edited freely","It can reference a structure in another item master","It can have a different structure type than the source"],"Common structures reference the source (same master, type, effectivity) and are read-only."],
["When can 'Allow Attribute Updates' be set on a common structure?",["Only when the common structure is created","Any time before release","Any time, and it can be reversed","Only by the source structure owner"],"It's set at creation only and can't be undone."],
["A component's lifecycle phase is earlier than the parent's. What happens on validation?",["It fails, because components must be in the same or a later phase","It passes with a warning","It passes if the component is optional","Validation ignores lifecycle phases"],"Component phase must be the same as or later than the parent; obsolete components aren't allowed."],
["What does 'Use Primary for Expansion' do?",["Explodes a component's Primary structure if the requested type doesn't exist","Forces all structures to be Primary","Copies the Primary structure to all orgs","Prevents substitutes on Primary"],"If a component lacks the requested structure type, its Primary structure is used."],
["On a standard structure, what must planning percentages add up to?",["100","Any value","At most 100","It depends on the item class"],"Planning % must total 100 on standard structures."]
]);

MOD({id:"m2c",d:"d2",title:"Facility schedules & flexfields",
lede:"Workday calendars used across inventory, and the flexfields you use to extend objects.",
topics:["Configure facilities schedule","Configure and customize inventory management"],
sections:[
{t:"Building a schedule",h:`<ul>
<li>Order: <b>Shifts → Workday patterns → Schedule → Exceptions</b>. REST exists for all four.</li>
<li>Shift/calendar types: Duration, Elapsed, Time. <b>SCM uses time-based calendars only.</b></li>
<li>Quarter types 4-4-5 and 4-5-4 supported.</li>
<li>Calendars are shared and time-zone agnostic: hours are read as local time of the object using them. An exception applies to every object on that calendar.</li>
<li>Once assigned to an org, plant or work centre you can't change the start date or period type (feature-controlled). You can extend the end date.</li></ul>
<div class="focus"><b>Exam focus</b>Time-based only. Exceptions affect every assigned object, so decide on shared vs separate calendars.</div>
<p class="src">Source: SCM Foundation, lesson 3</p>`},
{t:"Where schedules are used",h:`<ul>
<li>Plant (production, work centre resources), inventory org (workday, shipping, receiving), trading partners (supplier, customer, carrier).</li>
<li>Planning and GOP use them for capacity and dates; inventory for count scheduling, replenishment and supply document dates.</li>
<li>Ship confirm checks the shipping calendar (org location, else org), customer receiving calendar and carrier calendar.</li></ul>`},
{t:"Flexfields",h:`<ul>
<li><b>DFF</b>: optional extra attributes, one context at a time.</li>
<li><b>EFF</b>: multiple contexts, multi-row, categories, security, inheritance.</li>
<li><b>KFF</b>: mandatory composite key (accounting string, locator).</li>
<li>Value set validation types: Format only, Independent, Dependent, Subset, Table. Define value sets before a KFF.</li>
<li>Inventory KFFs: Account Alias (MDSP, table INV_GENERIC_DISPOSITIONS) and Inventory Locator (MTLL). Costing KFFs: Consigned, Valuation Unit.</li>
<li>Account aliases give friendly names to GL accounts (Scrap, Shrinkage) for alias issues and receipts.</li></ul>
<p class="src">Source: SCM Foundation, lesson 3</p>`}
]});
QS("m2c",[
["What is the correct order to build a schedule?",["Shifts, workday patterns, schedule, exceptions","Schedule, shifts, patterns, exceptions","Patterns, shifts, exceptions, schedule","Exceptions, shifts, patterns, schedule"],"Shifts → patterns → schedule → exceptions."],
["Which calendar type does SCM use?",["Time","Duration","Elapsed","Any of the three"],"SCM uses time-based calendars only."],
["You add a holiday exception to a schedule shared by three warehouses. What happens?",["All three warehouses get the holiday","Only the warehouse you selected","None until each org is re-saved","You're asked which orgs to apply it to"],"A calendar doesn't know who uses it, so an exception applies to every assigned object."],
["After assigning a schedule to an inventory org, what can you no longer change?",["Its start date and period type","Its end date","Its exceptions","Its name"],"Start date and period type are locked once assigned; the end date can be extended."],
["A schedule defines 08:00–17:00. A warehouse in Singapore uses it. How are the hours read?",["As local time of the warehouse","As UTC","As the time zone of the user who created it","As the data centre time zone"],"Calendars are time-zone agnostic; hours are read in the local time of the object."],
["Which calendars are validated at ship confirm?",["Shipping, customer receiving and carrier calendars","Only the org workday calendar","Supplier and carrier calendars","Planning calendar only"],"Ship confirm checks shipping, customer receiving and carrier calendars."],
["Which flexfield type supports multiple contexts, multi-row data and security?",["Extensible flexfield","Descriptive flexfield","Key flexfield","Value set"],"EFFs support multiple contexts, multi-row, categories, security and inheritance."],
["A value set whose values depend on another segment's value uses which validation type?",["Dependent","Independent","Subset","Format only"],"Dependent value sets depend on another segment's value."],
["What is the code of the Account Alias key flexfield?",["MDSP","MTLL","MSTK","GL#"],"Account Alias KFF code is MDSP; Locator is MTLL."],
["What is an account alias used for?",["A friendly name for a GL account used in alias issue/receipt transactions","A second name for a subinventory","An alternate item number","A locator short code"],"Aliases like Scrap or Shrinkage map to GL accounts for account alias transactions."],
["Which quarter types do schedules support?",["4-4-5 and 4-5-4","Only calendar months","13 periods only","4-4-4"],"Schedules support 4-4-5 and 4-5-4 quarter types."],
["Which key flexfields belong to costing?",["Consigned and Valuation Unit","Account Alias and Locator","Item and Category","Accounting and Sales"],"Costing KFFs: Consigned and Valuation Unit."]
]);

MOD({id:"m2d",d:"d2",title:"Costing: receipt accounting, cost accounting & SCFO",
lede:"How receipts, inventory and internal trade are costed and accounted.",
topics:["Understand Receipt Accounting, Cost Accounting, Supply Chain Financial Orchestration","Purpose of cost organisation"],
sections:[
{t:"Receipt accounting",h:`<ul>
<li>Accrues all receipts (services, supplies, project materials, inventory, transfers); runs without Cost Management, which is needed only for inventory.</li>
<li>Flow: PO/receipt/AP → receipt accounting → distributions → Subledger Accounting → GL.</li>
<li><b>Accrue at receipt</b> (PO schedule flag): accrual at receipt, AP invoice debits the accrual. <b>Mandatory for inventory</b>, optional for expense.</li>
<li>Not at receipt: expense/liability at AP invoice, period-end accrual of uninvoiced receipts.</li></ul>
<div class="focus"><b>Exam focus</b>Accrue at receipt is mandatory for inventory items.</div>
<p class="src">Source: SCM Foundation, lesson 16</p>`},
{t:"Cost accounting",h:`<ul>
<li>Methods: <b>Actual (FIFO), Perpetual average, Standard, Periodic average</b>. Set per item with defaults by org and category; components can use different methods.</li>
<li>User-defined cost elements; cost layers by item, lot, serial, subinventory, grade.</li>
<li><b>Profit in inventory</b> element tracks internal mark-ups for eliminations.</li>
<li>Multiple cost books (primary ledger plus secondary or ledgerless). Costs in primary or secondary UOM.</li>
<li>Cost processor → distributions → SLA → GL. Consigned stock is usually valued at zero.</li>
<li>Standard cost planning: work definitions → cost scenario → roll up → publish (future-dated allowed).</li></ul>`},
{t:"Supply Chain Financial Orchestration",h:`<ul>
<li>Separates the <b>financial flow</b> (ownership, intercompany invoices) from the <b>physical flow</b>.</li>
<li>Flows: global procurement, internal transfers, internal and customer drop ship, CTO, consigned.</li>
<li>Owns transfer pricing and accounting policy; creates AP, AR and costing events.</li>
<li>Transfer price bases: item cost basis, transaction cost basis, source document price basis; or Pricing Cloud. Same BU = source org item cost; cross-BU = transfer pricing rules. Tax is calculated on the transfer price.</li>
<li>Title passes at shipment or receipt.</li></ul>
<p class="src">Source: Advanced Fulfillment, lesson 16; OM course IMT slides</p>`},
{t:"Worked example: profit in inventory",h:`<p>China cost RMB 200 = $31.25. China → Singapore at cost + 12% = $35.00 (China profit $3.75). Singapore → US at cost + 60% = $56.00 (Singapore profit $21.00). US inventory $56.00 = $31.25 material + $3.75 + $21.00 profit in inventory. Ownership changes on receipt in Seattle.</p>
<p>Simpler: $10 cost + $1 markup sold at $25 → enterprise margin $15, org A $1, org B $14.</p>`},
{t:"Landed cost and reporting",h:`<ul>
<li>Landed cost: freight, insurance, duties, broker fees ($100 item → $140 landed). Estimate → allocate to PO schedules/receipts → absorbed into item cost; actuals from AP invoices; variances shown.</li>
<li>Reports: inventory, WIP, in-transit and layer valuation; standard cost variances; gross margin; OTBI subject areas.</li></ul>`}
]});
QS("m2d",[
["For which items is 'Accrue at receipt' mandatory?",["Inventory items","Expense items","Service items","Project expense items"],"Accrue at receipt is mandatory for inventory, optional for expense."],
["Can Receipt Accounting run without Cost Management?",["Yes, Cost Management is needed only for inventory","No, they must be implemented together","Only for services","Only with Project Costing"],"Receipt accounting accrues all receipts and doesn't need Cost Management except for inventory."],
["With accrue at receipt, what does the AP invoice debit?",["The accrual account","The expense account","Inventory valuation","Cost of goods sold"],"The receipt books the accrual; the invoice clears it."],
["Which is NOT a cost method in Oracle Cost Management?",["LIFO","Actual (FIFO)","Perpetual average","Periodic average"],"Methods: Actual (FIFO), Perpetual average, Standard, Periodic average."],
["What does SCFO separate?",["Financial ownership flow from physical movement","Receipt accounting from cost accounting","Standard from actual cost","Primary from secondary ledgers"],"SCFO models ownership changes and intercompany trade independent of the physical path."],
["Goods move within one BU between two inventory orgs. What transfer price is used?",["The source org's item cost","A transfer pricing rule with markup","The sales order price","Zero"],"Same BU → source org item cost; cross-BU → transfer pricing rules."],
["China cost $31.25, sold to Singapore at +12%, then to US at +60%. What is the US inventory value?",["$56.00","$35.00","$50.00","$31.25"],"$31.25 × 1.12 = $35.00; × 1.60 = $56.00."],
["In the same example, how much profit in inventory does Singapore carry in the US cost?",["$21.00","$3.75","$24.75","$35.00"],"Singapore profit = $56.00 − $35.00 = $21.00."],
["What does the Profit in Inventory cost element track?",["Internal mark-ups between organisations, for eliminations","Landed cost charges","Overheads","Standard cost variances"],"It tracks internal margins so they can be eliminated in consolidation."],
["When is tax calculated on an internal transfer?",["After the transfer price is determined, on that price","Before pricing, on item cost","Never for internal transfers","Only when routed through OM"],"SCFO determines the transfer price and then calls tax on it."],
["Which is a transfer price basis in SCFO rules?",["Source document price basis","Replacement cost basis","Market index basis","Last invoice basis"],"Bases: item cost, transaction cost, source document price; or Pricing Cloud."],
["A $100 item incurs freight, duty and insurance of $40. What does landed cost management do?",["Absorbs the charges into item cost ($140)","Expenses the $40 to freight","Adds $40 as a separate PO line","Records it only in AP"],"Landed cost charges are estimated, allocated to receipts and absorbed into item cost."],
["Where do landed cost actuals come from?",["Payables invoices matched by reference","Receipt quantities","Standard cost scenarios","Subledger accounting rules"],"Actual charges come from AP invoices, and variances vs estimates are shown."],
["Which statement about cost books is true?",["You can have multiple, including ledgerless books","Only one per legal entity","They must match the primary ledger currency","They're only for standard cost"],"Multiple cost books support currencies, local GAAP and internal views."],
["When can ownership (title) pass in an SCFO financial route?",["At shipment or at receipt","Only at invoice","Only at receipt","Only at shipment"],"Title can pass at shipment or receipt."],
["What is the correct flow for accounting inventory transactions?",["Cost processor, distributions, Subledger Accounting, GL","SLA, cost processor, GL","Receipt accounting, AP, GL","GL, SLA, distributions"],"Cost processor → distributions → SLA → GL."],
["What order does standard cost planning follow?",["Work definitions, cost scenario, roll up and review, publish","Publish, roll up, scenario","Scenario, publish, work definitions","Roll up, work definitions, publish"],"Pick work definitions → cost scenario → roll up/review → publish."],
["What is the usual valuation of consigned inventory in cost accounting?",["Zero, with optional posting to clearing accounts","Supplier list price","Standard cost","Average PO price"],"Consigned stock is usually valued at zero because the supplier owns it."]
]);
