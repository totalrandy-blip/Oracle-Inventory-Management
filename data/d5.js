MOD({id:"m5a",d:"d5",title:"Supply Chain Orchestration",
lede:"How supply requests become POs, work orders, transfer orders or reservations, and how exceptions are managed.",
topics:["Describe the Supply Chain Orchestration flow","Analyze and manage business flows and exceptions within SCO"],
sections:[
{t:"What SCO does",h:`<ul>
<li>Receives supply requests, launches predefined processes, automates change management and gives a 360° view of supply creation.</li>
<li>Request sources: Planning Central, GOP + OM (back-to-back), Inventory min-max, PAR, spreadsheet upload, requisitions, Manage Item Quantities, supply request web service.</li>
<li><b>Supply orchestration</b> gets goods into your warehouse (may or may not be for a sales order). <b>Order orchestration</b> gets goods to the customer (always a sales order).</li></ul>
<p class="src">Source: Advanced Fulfillment, lesson 2; OM course overview slides</p>`},
{t:"How a request is processed",h:`<ol>
<li>Receive request (decompose). Interface data is processed by <b>Process Supply Chain Orchestration Interface</b>.</li>
<li>Prepare: map attributes, run execution rules, enrichment, assign and launch process.</li>
<li>Execute the orchestration process: process planning, change management, tracking.</li>
<li>Interact with execution systems (Procurement, Manufacturing, Inventory) via web services.</li></ol>
<p>Entities: supply order, supply order line, tracking line, and transfer/buy/make order details capturing TO, PO and WO data.</p>`},
{t:"Key setups",h:`<ul>
<li>FSM: Manufacturing and SC Materials Mgmt → Supply Chain Orchestration → Define Supply Chain Orchestration Foundation.</li>
<li><b>Supply execution document creation rules</b>: TO or PO? Default = TO. Keys: source + destination org (or item too).</li>
<li><b>Supply order defaulting and enrichment rules</b>: TO direct to Inventory (default) or via OM; can also set e.g. WO status to released or shipment priority. Keys: item + org. B2B transfers can't go via OM.</li>
<li>Optional: lookups, attachment categories, user-defined scheduler jobs, service mapper (e.g. pass SO EFFs downstream).</li>
<li>Data security: Supply Chain Operations Manager sees everything; restrict via custom role and policy, then run Import User and Role Application Security Data.</li></ul>`},
{t:"Tracking and change management",h:`<ul>
<li>Supply Lines Overview buckets: <b>Errors</b> (technical/functional failure), <b>Exceptions</b> (supply ≠ demand, change mgmt couldn't fix), <b>Jeopardy</b> (late vs need-by), <b>On-track</b>.</li>
<li>Grouped by supply type (Make, Buy, Transfer, ATP), source, destination, item. Closed orders hidden by default.</li>
<li>Drill: Overview → Manage Supply Lines (resubmit, mark inactive) → Supply Order Details → execution document.</li>
<li>Changes: supply-side (qty, cancel, date, split) and demand-side (cancel, qty, need-by date). If supply can't adjust → exception to the fulfilment manager.</li>
<li>Example: demand 100, PO cut to 75 → SCO seeks another source for 25; none found → exception.</li></ul>
<div class="focus"><b>Exam focus</b>Know the four buckets and the difference between an error and an exception.</div>`}
]});
QS("m5a",[
["What is the default execution document SCO creates for a transfer request?",["Transfer order","Purchase order","Sales order","Work order"],"Default is TO; a creation rule can switch to PO."],
["By default, where does SCO send a transfer order?",["Directly to Inventory","Through Order Management","To Procurement","To Planning"],"Defaulting and enrichment rules default to Inventory; OM routing is optional."],
["Which scheduled process picks up supply requests from the interface?",["Process Supply Chain Orchestration Interface","Requisition Import","Create Supply Request","Transfer Transactions to Costing"],"Interface data is processed by Process Supply Chain Orchestration Interface."],
["A supply line failed because a reservation couldn't be created. Which bucket?",["Errors","Exceptions","Jeopardy","On-track"],"Errors are technical or functional failures that stop a transaction."],
["Supply no longer matches demand and automatic change management couldn't fix it. Which bucket?",["Exceptions","Errors","Jeopardy","On-track"],"Exceptions = mismatch not resolved by change management."],
["A PO is promised after the sales order need-by date. Which bucket?",["Jeopardy","Exceptions","Errors","On-track"],"Jeopardy = supply late vs need-by date."],
["What's the difference between supply and order orchestration?",["Supply orchestration may not relate to a sales order; order orchestration always does","They're the same","Order orchestration creates POs","Supply orchestration ships to customers"],"Supply gets goods into your warehouse; order gets them to the customer."],
["Demand is 100; the supplier cuts the PO to 75. What does SCO do first?",["Look for an alternate source for 25","Cancel the sales order","Raise an error","Increase the PO"],"It locks the line and seeks another source; if none, it raises an exception."],
["Which rule decides whether a TO is routed through OM?",["Supply order defaulting and enrichment rules","Execution document creation rules","Sourcing rules","ATP rules"],"Enrichment rules control OM routing."],
["What is the suggested key for execution document creation rules?",["Source org and destination org","Customer and item","Supplier and buyer","Carrier and route"],"Suggested: source + destination org, or item + both orgs."],
["Which tool renders rules for execution document and enrichment?",["Oracle Business Rules UI","Workflow approvals","Groovy only","FBDI"],"Both open the OBR (business rules) UI."],
["Which role sees all supply orders by default?",["Supply Chain Operations Manager","Warehouse Manager","Buyer","Order Manager"],"The predefined Supply Chain Operations Manager has full access."],
["After changing SCO data security, which process must you run?",["Import User and Role Application Security Data","Refresh Order Promising Server","Process SCO Interface","Collect Planning Data"],"Security changes need Import User and Role Application Security Data."],
["What does the service mapper let you do?",["Pass extra attributes such as sales order EFFs to downstream documents","Map GL accounts","Map suppliers to orgs","Map UOMs"],"It enriches downstream requests with custom mappings."],
["Which supply types appear on the Supply Lines Overview?",["Make, Buy, Transfer, ATP","Stock, Expense, Asset","PO, SO, RMA","Direct, In-transit, Consigned"],"Supply type: Make, Buy, Transfer and ATP (reserved on-hand/expected)."]
]);

MOD({id:"m5b",d:"d5",title:"Back-to-back fulfilment",
lede:"Creating and reserving supply for a specific sales order, then shipping it from your warehouse.",
topics:["Configure the back-to-back process","Execute the back-to-back process"],
sections:[
{t:"What back-to-back is",h:`<ul>
<li>Supply is created for a specific order, received in your warehouse, reserved to the order until shipping.</li>
<li>For high-cost, non-stocked or slow-moving items, or when space near the customer is expensive.</li>
<li>Fulfilment selection after scheduling: internal warehouse + item not B2B enabled → <b>standard</b>; scheduled to supplier → <b>drop ship</b>; internal warehouse + B2B enabled → <b>back-to-back</b>.</li>
<li>Variants (GOP recommendation): <b>Buy</b> (PO), <b>Make</b> (WO), <b>Transfer</b> (TO), <b>On hand</b> (reservation).</li></ul>
<p class="src">Source: Advanced Fulfillment, lessons 5–7; OM course B2B slides</p>`},
{t:"Setup by application",h:`<ul>
<li><b>PIM</b>: only change is "Back-to-Back Enabled" on the item in the shipping warehouse. Otherwise standard fulfilment runs.</li>
<li><b>GOP</b>: ATP rule with Supply Chain Availability Search, all required supply types; tick "Search components and resources" for Make; infinite time fence beyond real lead times (30–40 day make → at least 41). Sourcing assignment type <b>Local</b>.</li>
<li>GOP logic: stock in fulfilment org → On hand; upstream org → Transfer; can make in fulfilment org → Make; at supplier → Buy.</li>
<li><b>OM/SCO</b>: no mandatory setup; predefined processes auto-assigned.</li>
<li><b>Manufacturing</b> (Make): work definition for the item.</li>
<li><b>Procurement</b> (Buy): feature Customer Sales Order Fulfillment; optional BPA with Automatically generate orders + auto-approval.</li>
<li><b>Inventory</b>: no B2B-specific setup.</li></ul>
<div class="focus"><b>Exam focus</b>Item flag + GOP rules drive B2B; Inventory needs nothing specific.</div>`},
{t:"Implementation considerations",h:`<ul>
<li>Items should be MPS/MRP planned; use Purchased Item or Finished Good templates.</li>
<li>Buy flow: default buyer and list price on the item.</li>
<li>Run collections and refresh the Order Promising server often enough.</li>
<li>Transit times with default ship methods for all location pairs.</li>
<li>Transfer flow: item must be costed at least in the source org (transfer price derives from it).</li>
<li>Specifying a supplier directly on the order turns the same item into a drop ship.</li></ul>`},
{t:"Change management and reservations",h:`<ul>
<li>Date pushed out → exception + OM notified. Date pulled in → no change. Qty reduced → SCO splits and seeks alternate source.</li>
<li>Partial shipment (23A+): supply line split to match, supply order stays open for the rest.</li>
<li>Manual reservations when SCO can't create enough supply; demand changes to them are manual.</li>
<li>Detailed reservation: after receipt, moves to on-hand at subinventory/locator/lot/serial (project/task for PDSC).</li></ul>`}
]});
QS("m5b",[
["What is the only PIM setup needed for back-to-back?",["Back-to-Back Enabled on the item in the shipping warehouse","A back-to-back item template","Lot control","A B2B catalog"],"The item flag per org is the only product setup."],
["A line is scheduled to an internal warehouse and the item isn't B2B enabled. Which process runs?",["Standard","Back-to-back","Drop ship","Transfer"],"Internal warehouse + not B2B enabled → standard fulfilment."],
["A line is scheduled to a supplier. Which process runs?",["Drop ship","Back-to-back buy","Standard","Contract manufacturing"],"Scheduled to supplier → drop ship."],
["Which ATP promising mode supports back-to-back?",["Supply chain availability search","Infinite availability","ATP only","Lead-time based"],"Use Supply Chain Availability Search with the required supply types."],
["Make takes 30 to 40 days. What infinite availability time fence is needed?",["At least 41 days","30 days","35 days","0 days"],"The fence must exceed the real lead time, otherwise GOP promises impossible dates."],
["What sourcing rule assignment type is used for back-to-back?",["Local","Global","Supplier","Drop ship"],"B2B sourcing uses Organization Assignment Type = Local."],
["Stock exists in an upstream org defined in the local sourcing rule. What does GOP recommend?",["Transfer","On hand","Make","Buy"],"Upstream org → Transfer recommendation."],
["What must exist for a back-to-back Make recommendation?",["A work definition for the item","A BPA","A transfer pricing rule","A consignment agreement"],"GOP needs a collected work definition to recommend Make."],
["Which Procurement feature is needed for back-to-back Buy?",["Customer Sales Order Fulfillment","Drop Ship","Internal Material Transfer","Consignment"],"Enable Customer Sales Order Fulfillment."],
["What Inventory setup is specific to back-to-back?",["None","A B2B subinventory","A B2B material status","A B2B transaction type"],"Inventory needs no B2B-specific setup."],
["A supplier pushes a B2B PO promise date out. What happens?",["Exception on the SCO workbench and OM is notified","Nothing","The SO is cancelled","A new PO is created automatically"],"Date push-out → exception + OM notified."],
["A supplier pulls a B2B PO date in. What happens?",["No change to supply or sales order","The SO ship date moves earlier","An exception is raised","The reservation is removed"],"Date pull-in causes no change."],
["For B2B transfer, what must be true about item cost?",["The item must be costed at least in the source org","Cost is optional","The item must have standard cost","Cost is only needed at destination"],"Transfer price derives from source org cost."],
["When do you create manual reservations in a B2B flow?",["When SCO can't create enough supply","Always","Only for serial items","Never"],"Manual reservations cover shortfalls; demand changes then need manual handling."],
["Which are the four back-to-back variants?",["Buy, Make, Transfer, On hand","Buy, Make, Drop ship, Consign","PO, SO, WO, RMA","Standard, Express, Direct, Split"],"GOP recommends one of Buy, Make, Transfer or On hand."]
]);

MOD({id:"m5c",d:"d5",title:"Consigned inventory from supplier",
lede:"Supplier-owned stock at your site until you consume it, and how consumption is settled.",
topics:["Understand the consignment process","Set up consigned inventory","Manage consigned inventory transactions"],
sections:[
{t:"The flow",h:`<ol>
<li>Consignment agreement → consignment order → receipt (same as normal).</li>
<li>Consumption = ownership change supplier → buyer (or forced at end of aging period).</li>
<li>Consumption advice to supplier (daily, weekly, monthly).</li>
<li>Supplier invoice matched to the advice in Payables → payment. Optional pay on use (self-billing).</li></ol>
<p>Benefits: buyer gets lower working capital and write-offs; supplier gets more sales and a stronger relationship.</p>
<p class="src">Source: Advanced Fulfillment, lessons 17–21</p>`},
{t:"Terms and setup",h:`<ul>
<li>Consignment terms on the agreement (default from supplier site or procurement BU): aging onset point (<b>Receipt or Shipment</b>), aging period days, advice frequency (<b>Daily/Weekly/Monthly</b>), billing cycle closing date, advice summary, pay on use, default line as consignment.</li>
<li>Consignment order: line flagged consignment; invoice match option = Consumption Advice.</li>
<li>Setup tasks: Configure Procurement Business Function; Manage Supplier Sites; Manage Consumption Rules; Manage Cost Profiles (type Consigned).</li></ul>`},
{t:"Consumption",h:`<ul>
<li><b>Explicit</b>: Create Transfer to Owned Transaction (e.g. near aging limit).</li>
<li><b>Implicit</b>: a transaction type triggers it per consumption rules (SO issue, misc issue, transfers). Creates <b>two</b> transactions: ownership change + physical movement.</li>
<li>Undo: Create Transfer to Consigned Transaction.</li>
<li><b>Default rules</b>: inter-org movement = ownership change; intra-org movement = stays consigned. Rules by transaction type, from/to org, subinventory, locator, item, owning party.</li>
<li>Consumption advice: scheduled process Create Consumption Advice; traceable to receipt, PO, agreement.</li></ul>
<div class="focus"><b>Exam focus</b>Default: inter-org = ownership change, intra-org = stays consigned. Implicit consumption = two transactions.</div>`},
{t:"Visibility, counting, returns and payables",h:`<ul>
<li>Manage Item Quantities: "Show consigned inventory only", Consigned Details tab. Counts carry owning party.</li>
<li>Returns any time; consigned and owned in one transaction.</li>
<li>Supplier Inventory Manager role on the Supplier Portal: review advices, consigned stock and aging, Transfer to Owned/Consigned transactions.</li>
<li>Pay on use must be enabled on <b>both</b> supplier site and agreement.</li>
<li>Invoice tolerances: Consumed Percentage and Maximum Consumed Quantity (hold if billed > consumed).</li></ul>`}
]});
QS("m5c",[
["What are the aging onset point options?",["Receipt or Shipment","Order or Receipt","Invoice or Payment","Consumption or Advice"],"Aging starts at receipt or shipment."],
["Which consumption advice frequencies exist?",["Daily, Weekly, Monthly","Hourly, Daily","Per transaction only","Quarterly, Yearly"],"Advice frequency: daily, weekly or monthly."],
["By default, what does moving consigned stock between two subinventories in the same org do?",["It stays consigned","It changes ownership","It's blocked","It creates a consumption advice immediately"],"Default rule: intra-org movement stays consigned."],
["By default, what does moving consigned stock to another inventory org do?",["It changes ownership to the buyer","It stays consigned","It creates a return","It resets aging"],"Default rule: inter-org movement = ownership change."],
["How many transactions does an implicit consumption create?",["Two: ownership change and physical movement","One","Three","None until advice runs"],"Implicit consumption creates the ownership change plus the movement."],
["Which transaction explicitly takes ownership of consigned stock?",["Create Transfer to Owned Transaction","Create Transfer to Consigned Transaction","Miscellaneous receipt","Consumption advice"],"Transfer to Owned is the explicit consumption."],
["A consumption was recorded by mistake. How do you reverse it?",["Create Transfer to Consigned Transaction","Delete the consumption advice","Run a misc receipt","Cancel the PO"],"Transfer to Consigned finds the original transaction and reverses it."],
["What is the invoice match option on a consignment order line?",["Consumption Advice","Receipt","Order","None"],"Invoices match to consumption advices, not the order."],
["Pay on use must be enabled where?",["On both the supplier site and the agreement","Only the supplier site","Only the agreement","On the inventory org"],"Both site and agreement."],
["Which invoice tolerances apply to consignment?",["Consumed Percentage and Maximum Consumed Quantity","Price and quantity received","Amount and date","Over-receipt and early receipt"],"They place holds if billed quantity exceeds consumed."],
["Which scheduled process creates consumption advices?",["Create Consumption Advice","Transfer to Owned","Process SCO Interface","Send Pay on Receipt"],"Create Consumption Advice builds advices per frequency."],
["Which supplier-side role reviews consigned stock and aging?",["Supplier Inventory Manager","Supplier Customer Service","Warehouse Manager","Buyer"],"Supplier Inventory Manager on the Supplier Portal."],
["How do you view only consigned stock in Manage Item Quantities?",["'Show consigned inventory only'","Filter by material status","Filter by lot grade","Use the Inbound tab"],"Use that option; the Consigned Details tab shows owning party."],
["Which cost profile type is needed for consigned items?",["Consigned","Standard","Actual","Expense"],"Manage Cost Profiles with type Consigned, via item or default profiles."],
["Can consigned and owned quantities be returned in one transaction?",["Yes","No","Only after consumption","Only for lot items"],"Returns can mix consigned and owned stock."]
]);

MOD({id:"m5d",d:"d5",title:"Project-driven supply chain (PDSC)",
lede:"Running inventory, procurement, manufacturing and maintenance in the context of a project, without separate orgs per project.",
topics:["Configure project-specific inventory management","Create project-specific inventory transactions"],
sections:[
{t:"The idea",h:`<ul>
<li>Segregate stock by project and task in one warehouse; capture supply chain cost as project expenditures in PPM.</li>
<li>Project and task become <b>inventory attributes</b> that segregate and value stock.</li>
<li>Works even without Project Financials; Project Costing is needed for cost to flow to project accounting and GL.</li></ul>
<p class="src">Source: PDSC course, lessons 1–3; SCM Foundation, lesson 17</p>`},
{t:"Required setup (five)",h:`<ol>
<li>Opt in: features <b>Project-Driven Supply Chain</b> and <b>Plan Project-Specific Supply</b>.</li>
<li>Enable inventory tracking by project on each org (Manage Organization Parameters).</li>
<li>Manage Default Expenditure Types: labour, material, non-labour, work order.</li>
<li>Manage Project Organization Classifications: project and task owning org and project expenditure org.</li>
<li>Orchestration process definition that skips Create Invoice for project lines (prjRecIndicator is null), since PPM bills.</li></ol>
<p>Conditional: valuation structure → cost profile → valuation unit; project type cost exclusions (no expenditure sent to PPM).</p>`},
{t:"Item attributes and common stock",h:`<ul>
<li>Default Expenditure Type; Hard Pegging Level (None, Project, Project Group, Project and Task); Allow Use of Common Supplies.</li>
<li>Pegging None + Allow common Null → common allowed. Pegging set + Allow common No → not allowed. Pegging set + Yes → allowed.</li></ul>
<div class="focus"><b>Exam focus</b>Common stock can feed project demand when pegging is None or Allow common = Yes.</div>`},
{t:"Project inventory transactions",h:`<ul>
<li>Interorg transfer to a project via TO from requisition, SCO supply request or planning.</li>
<li><b>Create Project Transfer</b> within an org: common ↔ project or project ↔ project.</li>
<li>Misc issue from project stock via Manage Item Quantities.</li>
<li>Transfer costing: from project stock = negative expenditure (from org) + positive (destination org).</li>
<li>Procurement: approved requisition = commitment → moves to PO → relieved at receipt.</li>
<li>Costing: Transfer Transactions from Inventory / Receiving / Production to Costing → distributions → Import Costs in Projects.</li>
<li>Sales orders: project attributes changeable only until submit. WOs: editable while unreleased; expenditure item date = WO completion date.</li></ul>`}
]});
QS("m5d",[
["What is the core benefit of PDSC?",["Segregating stock by project without separate inventory orgs","A separate org per project","Automatic project billing in Receivables","Replacing Project Costing"],"PDSC stripes stock by project/task in the same org."],
["Which two features do you opt into for PDSC?",["Project-Driven Supply Chain and Plan Project-Specific Supply","Project Costing and Project Billing","Consignment and PDSC","Drop Ship and PDSC"],"Both features under Manufacturing and SC Materials Mgmt."],
["Where do you enable inventory tracking by project?",["Organization parameters of each inventory org","Item attributes","Subinventory definition","Receiving parameters"],"Tick 'Enable inventory tracking by project' per org."],
["Why change the orchestration process definition for project lines?",["To skip invoicing in Receivables because PPM bills","To add a project approval step","To route to Procurement","To reserve stock"],"The Create Invoice step runs only when the project record indicator is null."],
["Hard pegging = Project and Allow Use of Common Supplies = No. Can common stock satisfy project demand?",["No","Yes","Only with approval","Only for transfer orders"],"Pegging set + Allow common No → common not allowed."],
["Hard pegging = None. What is Allow Use of Common Supplies and can common be used?",["Null, and common is allowed","Yes, and common is blocked","No, and common is blocked","It's mandatory Yes"],"Pegging None → Allow common Null → common allowed."],
["Which transaction moves stock from common to project within one org?",["Create Project Transfer","Subinventory transfer","Misc receipt","Transfer order"],"Create Project Transfer handles common ↔ project and project ↔ project."],
["How is a transfer from project stock costed?",["Negative expenditure for the from-org and positive for the destination org","A single positive expenditure","No expenditure","Only a GL entry"],"From project stock: negative + positive expenditures."],
["When is a project commitment created in PPM?",["When the requisition is approved","When the PO is received","When the invoice is paid","When the WO completes"],"Approved requisition → commitment → moves to PO → relieved at receipt."],
["Which process sends receipt costs to Costing for project POs?",["Transfer Transactions from Receiving to Costing","Import Costs","Create Accounting","Process SCO Interface"],"Receiving → Costing, then distributions and Import Costs."],
["When can project attributes on a sales order line be changed?",["Only until the order is submitted","Until ship confirm","Any time","Never"],"Project attributes change only until submit."],
["What is the default expenditure item date on a project work order?",["The WO completion date","The WO release date","Today","The requested ship date"],"Defaults: date = WO completion date; org = plant."],
["What does a project type cost exclusion do?",["Stops expenditure being sent to PPM for that project type","Blocks all transactions","Excludes items from planning","Removes project from reports"],"Excluded types: no expenditure interfaced, no commitment, COGS stays in Cost Management."],
["Which classification must each project inventory org have?",["Project and task owning org and project expenditure org","Cost organisation","Item master","Legal entity"],"Set in Manage Project Organization Classifications."],
["Which is a conditional costing setup for PDSC?",["Valuation structure with project and task, then cost profile and valuation unit","Accrue at receipt","A new cost book per project","Landed cost charges"],"Valuation by project needs structure → profile → unit."]
]);

MOD({id:"m5e",d:"d5",title:"Other advanced topics",
lede:"Drop ship and contract manufacturing basics, plus exam topics not covered in your course material.",
topics:["Configure item replacement","Configure barcode scanning and label printing","Configure and execute product recall","Configure e-signatures and e-records"],
sections:[
{t:"Not covered in your course material",h:`<div class="gap">The exam lists these topics, but none of your three books or the OM slides cover them. Look them up in the Oracle Inventory Management implementation and user guides or the quarterly What's New pages, then add them here:<ul>
<li>Configure item replacement for inventory entities</li>
<li>Configure barcode scanning and label printing for mobile inventory</li>
<li>Configure and execute product recall</li></ul>
No quiz questions are included for these yet, so nothing unverified gets into your practice exams.</div>
<p>E-signatures and e-records are covered under Transaction setup & material status.</p>`},
{t:"Drop ship essentials",h:`<ul>
<li>Supplier ships straight to your customer; you hold no stock. Chosen when GOP schedules to a supplier (or a supplier is on the order).</li>
<li>Features: OM "Drop Ship" + Procurement "Customer Sales Order Fulfillment". Sourcing rule type <b>Global</b> Buy From.</li>
<li>Drop ship financial flow sets the receiving trade organisation (logical receiving org). Ownership event: ASN or supplier invoice.</li>
<li>Preparer for Procurement in OM parameters is mandatory.</li>
<li>Line statuses: Scheduled → Requisition Created → Awaiting Shipping → Shipped → Awaiting Billing → Billed.</li>
<li>Requisition stage: cancellation only. Drop ship PO quantity can't be increased.</li></ul>
<p class="src">Source: Advanced Fulfillment, lessons 9–12</p>`},
{t:"Contract manufacturing essentials",h:`<ul>
<li>OEM outsources; SCO pairs a WO (tracks progress) with a PO for a service item (the contract).</li>
<li>CM = supplier + site AND an external inventory org with "manufacturing plant" and "represents a contract manufacturer" = Yes.</li>
<li>Service item: Buy, Contract Manufacturing = Yes. FG item: Make, Contract Manufacturing = Yes; structure includes the service item.</li>
<li>Service item on the last count-point operation as operation pull; work definition attached to the BPA "To Supplier".</li>
<li>Plan-to-produce: no reservation, no OM exception. Back-to-back: WO reserved to SO, exceptions on the SO.</li></ul>
<p class="src">Source: Advanced Fulfillment, lessons 22–27</p>`}
]});
QS("m5e",[
["Which sourcing rule type is used for drop ship?",["Global Buy From","Local Transfer From","Local Make At","Global Transfer From"],"Drop ship uses a Global Buy From rule."],
["What happens to a drop ship purchase request if Preparer for Procurement isn't set?",["Procurement rejects it","It defaults to the buyer","It creates an unapproved PO","It goes to SCO"],"Preparer for Procurement is mandatory."],
["What triggers the ownership change in a drop ship financial flow?",["ASN or supplier invoice","Sales order booking","Requisition approval","Customer receipt"],"You choose ASN or AP invoice as the ownership event."],
["What is the correct drop ship line status order?",["Scheduled, Requisition Created, Awaiting Shipping, Shipped, Awaiting Billing, Billed","Scheduled, Shipped, Billed","Requisition Created, Scheduled, Shipped","Booked, Picked, Shipped, Billed"],"This is the fulfilment line sequence."],
["At requisition stage (no PO yet), which drop ship change is allowed?",["Cancellation only","Quantity increase","Date change","Supplier change"],"Procurement accepts only cancellation at that stage."],
["Which change can a buyer NOT make on a drop ship PO?",["Increase quantity","Change promise date","Split schedule","Cancel schedule"],"Quantity increases aren't allowed on drop ship POs."],
["In contract manufacturing, what is the service item?",["A Buy item on the PO representing the CM's work","The finished good","A component supplied by the OEM","A phantom item"],"Service item = Buy, CM = Yes, on the PO."],
["Which org flags are set for a CM inventory organisation?",["Manufacturing plant = Yes and represents a contract manufacturer = Yes","Item org = Yes","Consigned = Yes","Project enabled = Yes"],"Both flags, and link supplier + site."],
["Where is the service item placed in the CM work definition?",["On the last count-point operation as an operation-pull component","On the first operation","It isn't in the work definition","On a phantom operation"],"So FG cost = service + supplied components."],
["What differs in plan-to-produce CM vs back-to-back CM?",["Plan-to-produce has no reservation and no OM exception","Plan-to-produce reserves to a sales order","Back-to-back has no PO","They're identical"],"P2P: no reservation; if a change can't be met, no response."]
]);
