MOD({id:"m4a",d:"d4",title:"Subinventory transfers, movement requests & misc transactions",
lede:"Moving and adjusting stock within one organisation.",
topics:["Create subinventory transfer, movement request and miscellaneous transaction","Troubleshoot execution issues"],
sections:[
{t:"Transactions with and without documents",h:`<ul>
<li>Without documents: misc issue/receipt, subinventory transfer, interorg transfer/receipt.</li>
<li>With documents: PO receipt, TO shipment/receipt, MR issue, MR subinventory transfer.</li>
<li>Checked on every transaction: locator, lot, serial, revision, subinventory/locator restrictions, dual UOM, material status.</li></ul>
<p class="src">Source: SCM Foundation, lesson 11</p>`},
{t:"Miscellaneous transactions",h:`<ul>
<li>To or from GL accounts: initial loads, scrap, issue to departments or projects, receipt without a PO, adjustments (theft, loss, expiry).</li>
<li>Path: Supply Chain Execution → Inventory Management → Create Miscellaneous Transaction. Shows subinventories with on-hand.</li>
<li>Default stocking UOM defaults from the subinventory.</li></ul>`},
{t:"Choosing a transfer method",h:`<div class="tbl"><table>
<tr><th>Method</th><th>Scope</th><th>Pick / ship / receive</th></tr>
<tr><td>Subinventory transfer</td><td>Intra-org</td><td>None</td></tr>
<tr><td>Movement request</td><td>Intra-org</td><td>Picking, no receiving</td></tr>
<tr><td>Interorg transfer</td><td>Inter-org, same or different BU</td><td>Receiving if in-transit</td></tr>
<tr><td>Transfer order</td><td>Intra-, inter-org, intercompany</td><td>Pick, ship, receive</td></tr></table></div>
<ul><li>Subinventory transfer uses: replenish pick faces, rebalance, asset ↔ expense, tracked ↔ untracked.</li></ul>`},
{t:"Movement requests",h:`<ul>
<li>Flow: create → pick release (allocate + pick slip) → move → pick confirm. Shortage = backorder.</li>
<li>Types: <b>Requisition</b> (manual, records requester), <b>Replenishment</b> (min-max at subinventory level with subinventory source), <b>Pick wave</b> (shipping; moves to staging).</li>
<li>End result: a subinventory transfer or MR issue.</li>
<li>"Release Approved Lines" on the Print Movement Request Pick Slip report automates allocate + print; schedulable.</li>
<li>Overpicking to an intermediate subinventory before staging is supported.</li></ul>
<div class="focus"><b>Exam focus</b>Shop floor asking for extra components (request + pick by two roles) → movement request.</div>`}
]});
QS("m4a",[
["Which movement request type is created by min-max at subinventory level?",["Replenishment","Requisition","Pick wave","Transfer"],"Replenishment MRs come from subinventory-level min-max with subinventory source."],
["Which movement request type moves stock to a staging subinventory for shipping?",["Pick wave","Replenishment","Requisition","Issue"],"Pick wave MRs support shipping pick waves."],
["A shop floor supervisor requests extra components; a warehouse operator picks them. Best option?",["Movement request","Subinventory transfer","Miscellaneous issue","Transfer order"],"Two roles, request plus pick, within one org → movement request."],
["Which statement about a subinventory transfer is true?",["No pick, ship or receipt steps","It needs a transfer order","It creates an in-transit shipment","It needs a receipt at the destination"],"It moves stock within an org instantly."],
["What is the end result of a movement request?",["A subinventory transfer or MR issue","A transfer order","A purchase requisition","An interorg transfer"],"MRs end in a subinventory transfer or MR issue."],
["An MR line can't be fully picked. What happens to the shortage?",["It's backordered for later release","The MR is cancelled","A PO is created","It's issued with negative on-hand"],"Shortages are backordered and re-released later."],
["How can you automate MR allocation and pick slip printing on a schedule?",["Release Approved Lines on the Print Movement Request Pick Slip report","Min-max report","Pick wave only","SCO interface"],"That report option allocates and prints, and can be scheduled."],
["Which is a typical use of a miscellaneous receipt?",["Loading initial on-hand balances","Receiving against a PO","Receiving a transfer order","Returning to a supplier"],"Misc transactions post to GL accounts: initial loads, adjustments, receipts without a PO."],
["Which transaction does NOT need a document?",["Subinventory transfer","PO receipt","TO shipment","MR issue"],"Subinventory transfer, misc transactions and direct interorg transfers need no document."],
["Moving stock from an asset to an expense subinventory is done with:",["A subinventory transfer","A misc issue","A transfer order only","A cycle count adjustment"],"Asset ↔ expense moves are a common subinventory transfer use."],
["A user can't pick a subinventory in the transfer LOV. What's the likely cause?",["A material status disallows subinventory transfers there","The item isn't lot-controlled","The locator is dynamic","The item has no revision"],"Status 'Prohibit Subinventory Transfer' removes the subinventory from the LOV."],
["Which movement request type can record who asked for the material?",["Requisition","Replenishment","Pick wave","Transfer"],"Requisition MRs are manual and can record the requester."],
["Can you overpick to an intermediate subinventory before confirming to staging?",["Yes","No","Only for serial items","Only via REST"],"Overpicking to an intermediate subinventory is supported."],
["Which REST resources support movement requests?",["Inventory Movement Requests, Open Pick Lines, Pick Waves","Only Pick Waves","Transfer Orders only","Receipts only"],"REST covers MRs, open pick lines LOV and pick waves."],
["What is validated on every inventory transaction?",["Locator, lot, serial, revision, dual UOM and material status controls","Only on-hand quantity","Only the GL period","Only item status"],"All relevant controls are validated."]
]);

MOD({id:"m4b",d:"d4",title:"Interorg transfers & transfer orders",
lede:"Moving stock between organisations, and the transfer order as the single document for internal material transfers.",
topics:["Execute interorganization transfer","Execute transfer orders"],
sections:[
{t:"Interorg transfers",h:`<ul>
<li><b>Direct</b>: lands in the destination immediately, no receipt. Dual UOM: destination conversions honoured; conversions needed in both orgs.</li>
<li><b>In-transit</b>: for long transit; source subinventory, shipment number, freight; receipt and put away at destination.</li>
<li>Interorganization parameters per org pair: transfer type, receipt routing (separate for inventory and expense), Transfer Order Required, Receipt Required (expense), Distance (ranks sources).</li></ul>
<p class="src">Source: SCM Foundation, lesson 11; Advanced Fulfillment, lesson 14</p>`},
{t:"Transfer orders (IMT)",h:`<ul>
<li>One Inventory document for demand and supply: intra-org, inter-org, intercompany. Pick, ship, receive, return.</li>
<li>Sources: min-max, PAR, back-to-back, planning, Manage Item Quantities, requisitions, spreadsheet/FBDI, supply request web service.</li>
<li>SCO rules: execution document (TO default, or PO); enrichment (straight to Inventory default, or via OM).</li>
<li>Requisition-sourced IMTs can only become TOs; expense-destination ones can't go through OM. Back-to-back TOs can't go through OM.</li>
<li>Edit Transfer Order: change source org, requested delivery date, requested quantity. View shipments and receipts.</li>
<li>Expected ship date: requested delivery 31 Jan − 3 days transit − 1 day processing = 27 Jan.</li>
<li>Mass cancel backordered lines (Print Cancel Transfer Order report: preview off, cancel on).</li></ul>`},
{t:"Item and org setup for IMT",h:`<ul>
<li>Inventory destination: source item stocked, transactable, shippable, internally transferable, TO enabled; destination item stocked, transactable, internally transferable, TO enabled.</li>
<li>Expense destination: destination item internally transferable and TO enabled.</li>
<li>Item costed in both orgs; interorg parameters and transit times for all pairs; IMT feature enabled for Procurement.</li>
<li>Planned items: TO enabled, MRP/MPS planned, calculate ATP, ATP rules, "Transfer From" local sourcing rule at destination; run collections.</li></ul>
<p class="src">Source: OM course IMT slides</p>`},
{t:"Returns, pricing and costs",h:`<ul>
<li>Return from Receiving → TO of type Return with reversed locations. <b>Physical Material Return Required</b>: ticked = pick/pack/ship; unticked = accounting-only, line closed automatically. Returns never go through OM.</li>
<li>Transfer price: same BU = source item cost; cross-BU = SCFO rules; tax on the price.</li>
<li>Extra TO charges (web service or FBDI) become shipping costs, expensed in the <b>source</b> org, frozen once shipped.</li>
<li>Consigned stock can transfer and stay consigned; the aging period is not reset.</li></ul>
<div class="focus"><b>Exam focus</b>NL DC shipping to warehouses in other legal entities with intercompany invoicing → transfer order.</div>`}
]});
QS("m4b",[
["What distinguishes a direct interorg transfer?",["Stock is in the destination immediately with no receipt","It always creates a transfer order","It needs a receipt at the destination","It's only allowed within one BU"],"Direct transfers need no receipt; in-transit ones do."],
["Transit takes a week and the destination must receive. Which transfer type?",["In-transit","Direct","Subinventory transfer","Movement request"],"In-transit transfers are received at the destination."],
["What is a transfer order?",["A single document representing both demand and supply","A purchase order to another org","An OM sales order for internal customers","A movement request between subinventories"],"The TO holds demand and supply in one Inventory document."],
["What is the default execution document for an SCO transfer request?",["Transfer order","Purchase order","Sales order","Movement request"],"Execution document creation rules default to TO."],
["Which IMT can NOT be routed through Order Management?",["A back-to-back transfer","A min-max transfer","A planning transfer","An ad hoc transfer from Manage Item Quantities"],"B2B TOs, requisition expense TOs and returns can't go through OM."],
["Requested delivery 31 January, transit 3 days, processing 1 day. Scheduled ship date?",["27 January","28 January","30 January","31 January"],"31 − 3 − 1 = 27 January."],
["What does unticking 'Physical Material Return Required' on an IMT return do?",["Creates an accounting-only return that closes automatically","Blocks the return","Sends it through OM","Creates a PO return"],"Unticked = no shipping or reservations; SCFO event raised; line closes with no shipped quantity."],
["Where are additional transfer order charges expensed?",["In the source organisation","In the destination organisation","Split 50/50","In the legal entity's clearing account"],"Additional TO charges are expensed in the source org."],
["Consigned stock is transferred to another org and stays consigned. What about its aging period?",["It is not reset","It restarts at receipt","It is paused","It becomes ownership immediately"],"A transfer doesn't reset the aging period."],
["Which interorganization parameter ranks source orgs for unplanned items?",["Distance","Transfer type","Receipt routing","Receipt required"],"Distance ranks sources (shortest first) on Select Supply Source."],
["A requisition-sourced IMT with a rule saying 'use PO'. What gets created?",["A transfer order; requisition IMTs can only become TOs","A purchase order","A sales order","Nothing; it errors"],"Requisition-sourced IMTs can only become TOs."],
["Which item attributes must an inventory-destination item have in the source org?",["Stocked, transactable, shippable, internally transferable, TO enabled","Purchasable and invoiceable","Back-to-back enabled","Lot and serial controlled"],"Source: stocked, transactable, shippable, internally transferable, TO enabled."],
["How can you mass-cancel backordered transfer order lines?",["Print Cancel Transfer Order report with cancel on","Delete the TO header","Run min-max with restock off","Manage Reservations"],"Run with cancel off to preview, on to cancel."],
["On Edit Transfer Order, what can you change?",["Source org, requested delivery date and requested quantity","Item and destination org","Transfer price","Costing method"],"These three can be updated."],
["Why route a transfer order through Order Management?",["So order managers see and prioritise internal vs external demand","To get customer invoicing","To enable returns","To skip receiving"],"Enrichment rules can route TOs via OM for visibility and prioritisation."],
["Why create a PO instead of a TO between two orgs?",["The supplying org is a separate profit centre needing a buy transaction","The item isn't costed","Transit is short","The destination is expense"],"Execution document rules can create a PO for legal or business reasons."],
["For direct interorg transfers with dual UOM, whose conversion is honoured?",["The destination org's","The source org's","The item master's only","The transaction user's"],"The destination's conversion is honoured; conversions must exist in both."],
["An NL DC ships to warehouses in other legal entities with intercompany invoicing and profit in inventory. Best method?",["Transfer order","Direct interorg transfer","Subinventory transfer","Movement request"],"Intercompany, shipping and receipt → transfer order."]
]);

MOD({id:"m4c",d:"d4",title:"Receipts, returns & picks",
lede:"Executing receipts, corrections, returns and picking.",
topics:["Create and manage receipts and picks","Troubleshoot execution issues"],
sections:[
{t:"Entering a receipt",h:`<ul>
<li>Sources: Receive Expected Shipments UI, ASN/ASBN (portal, Receipts work area, EDI/XML), self-service receipts, web services and FBDI.</li>
<li>Steps: pick org → find expected receipts (PO, in-transit, TO, RMA; else unordered if allowed) → line details → header (new or add to existing) → submit.</li>
<li>Structure: header (single source only) → lines (PO schedule or TO line) → transactions (receipt, inspect, put away, correction, return).</li>
<li>Backdating needs an open period. Subinventory is required for Inventory destination.</li>
<li>Unordered receipts must be matched before inspect/put away.</li></ul>
<p class="src">Source: SCM Foundation, lesson 12</p>`},
{t:"Corrections and returns",h:`<ul>
<li>Return to supplier (PO not cancelled/finally closed) or return to receiving.</li>
<li>Corrections allowed for any PO receiving transaction except another correction or a return to receiving; one at a time.</li>
<li>Consigned and owned stock can be returned together.</li></ul>`},
{t:"Picking",h:`<ul>
<li>Pick release allocates and prints pick slips; pick confirm moves stock to staging. Manual picks via Manage Reservations and Picks.</li>
<li>Serials can be captured at pick (not ship) when the item is set so.</li>
<li>Substitute items can be picked at pick release if enabled.</li>
<li>Shipping: pick waves, pick confirm, ship confirm, ASNs, manifesting, freight costs.</li></ul>`}
]});
QS("m4c",[
["How many source types can a single receipt header contain?",["One","Two","Unlimited","One per line"],"A receipt header covers a single source only."],
["Which transaction can NOT be corrected?",["Another correction","A receipt","A put away","An inspection"],"Corrections apply to any receiving transaction except another correction or a return to receiving."],
["An unordered receipt must be ___ before inspection or put away.",["matched to a source document","approved by a buyer","costed","split into lots"],"Unordered receipts must be matched first."],
["What do you need to backdate a receipt?",["An open period for that date","A buyer override","The Allow backdating profile","No condition"],"Backdating requires the period to be open."],
["For an Inventory destination line, which field is required?",["Subinventory","Requester","Note to receiver","Packing slip"],"Inventory destination needs a subinventory."],
["Which are valid expected receipt sources?",["PO, in-transit shipment, TO, RMA","PO only","SO, PO, WO","Requisition and invoice"],"Expected receipts include PO, in-transit, TO and RMA."],
["When is a return to supplier possible?",["If the PO isn't cancelled or finally closed","Only before put away","Only for consigned stock","Only through OM"],"Return to supplier needs the PO not to be cancelled or finally closed."],
["Where do you do manual picks?",["Manage Reservations and Picks","Manage Item Quantities","Create Miscellaneous Transaction","Manage Shipments"],"Manual picks are done on Manage Reservations and Picks."],
["What moves stock to the staging subinventory?",["Pick confirm","Pick release","Ship confirm","Receipt"],"Pick release allocates; pick confirm moves to staging."],
["Suppliers send ASNs. Where can a warehouse manager create one manually?",["Receipts work area","Supplier Portal only","Manage Shipments","Manage Item Quantities"],"ASNs come from the portal, EDI/XML, or manually in the Receipts work area."],
["Which document contains line-level quantity, UOM, destination and routing?",["Receipt line","Receipt header","ASN header","Put away task"],"Lines hold qty, UOM, item, destination type, routing and subinventory."],
["Can you correct several receiving transactions in one step?",["No, one at a time","Yes, any number","Yes, up to 10","Only via FBDI"],"Corrections are processed one transaction at a time."]
]);
