MOD({id:"m3a",d:"d3",title:"Balances, availability & reservations",
lede:"Where on-hand lives, how availability is calculated, and how reservations protect supply.",
topics:["Understand inventory balances and item availability","Understand the role of inventory reservations"],
sections:[
{t:"On-hand and item quantities",h:`<ul>
<li>On-hand is held at subinventory and locator level.</li>
<li>Manage Item Quantities: tree of org → subinventory → locator; columns On hand, Receiving, Inbound; detail tabs for item, lot, serial, inbound document, consigned.</li>
<li>Shows Available to Transact and Available to Reserve, in primary and secondary UOM.</li>
<li>Actions: movement request transfer/issue, misc transaction, request cycle count, manage material status, edit lot grade, create transfer order.</li>
<li>Locations: <b>On hand</b> (in storage), <b>Inbound</b> (PO, ASN, in-transit, not yet received), <b>Receiving</b> (in receiving).</li></ul>
<div class="focus"><b>Exam focus</b>Availability = on-hand − reservations − pending transactions.</div>
<p class="src">Source: SCM Foundation, lesson 10</p>`},
{t:"Reservations",h:`<ul>
<li>A firm link between a supply and a demand document that stops others picking it.</li>
<li><b>High-level</b> (item + org) vs <b>low-level</b> (revision, lot, subinventory, locator, serial).</li>
<li>Demand documents: account, account alias, cycle count, movement request, sales order, shipment request, user-defined, transfer order.</li>
<li>Supply documents: on hand, purchase order, requisition, transfer order, work order.</li>
<li>Managed on Manage Reservations and Picks. Expired lots can't be reserved.</li>
<li>Back-to-back: after receipt the reservation moves to on-hand at the most detailed level.</li></ul>`},
{t:"Review Item Supply and Demand",h:`<ul>
<li>Running available quantity over time.</li>
<li>Supply (+): on-hand, POs, PO/TO in receiving, requisitions, in-transit, TOs, WO assemblies, MR transfer supply.</li>
<li>Demand (−): unreserved SOs/TOs, reservations against non-on-hand supply, MR transfer demand, MR issues, WO components.</li>
<li>On-hand reservations have no extra effect; they're already reflected.</li></ul>`}
]});
QS("m3a",[
["How is available quantity calculated?",["On-hand minus reservations minus pending transactions","On-hand plus inbound","On-hand minus open sales orders","On-hand plus receiving minus reservations"],"Availability = on-hand − reservations − pending transactions."],
["Material on an ASN that hasn't been received yet appears as:",["Inbound","Receiving","On hand","In transit reservation"],"Inbound covers not-yet-received supply: PO, ASN, in-transit."],
["Material received with standard routing but not yet put away is shown as:",["Receiving","On hand","Inbound","Staged"],"It's in a receiving location until put away."],
["A reservation specifies item, org, lot and locator. What kind is it?",["Low-level","High-level","Soft","Planned"],"Low-level reservations include detail such as revision, lot, subinventory, locator, serial."],
["Which is a valid supply document for a reservation?",["Work order","Sales order","Cycle count","Account alias"],"Supply: on-hand, PO, requisition, TO, WO. The others are demand documents."],
["Which is a valid demand document for a reservation?",["Transfer order","Purchase order","Requisition","Work order"],"TO can be demand (and supply). PO, requisition and WO are supply."],
["In Review Item Supply and Demand, how does a reservation against on-hand affect the running total?",["No extra effect; it's already reflected","It reduces available twice","It adds supply","It's shown as inbound"],"On-hand reservations are already reflected, so they don't reduce the running total again."],
["Can an expired lot be reserved?",["No","Yes, with a warning","Only for transfer orders","Only if the grade is A"],"Expired lots can't be reserved and are excluded from min-max on-hand."],
["Which page lets you create, transfer and delete reservations?",["Manage Reservations and Picks","Manage Item Quantities","Review Item Supply and Demand","Manage Shipments"],"Manage Reservations and Picks handles reservations and manual picks."],
["After a back-to-back PO is received, what happens to the reservation?",["It moves to on-hand at the most detailed level","It's deleted","It stays on the PO","It becomes a high-level reservation"],"Detailed reservation: moves from PO to on-hand incl. subinventory/locator and lot/serial."],
["From Manage Item Quantities, which action is available?",["Create a transfer order","Create a purchase order","Run min-max","Approve cycle count adjustments"],"Actions include MR transfer/issue, misc transaction, request cycle count, manage material status, edit lot grade and create transfer order."],
["What does a reservation primarily prevent?",["Other demands picking the reserved supply","Receiving against the PO","Cycle counting the item","Cost updates"],"It's a firm link that stops others using that supply."]
]);

MOD({id:"m3b",d:"d3",title:"Transaction setup & material status",
lede:"How transaction types are built, which profiles control processing, and how material status restricts stock.",
topics:["Configure inventory transactions","Set up material status control"],
sections:[
{t:"Transaction types",h:`<ul>
<li>A transaction moves stock into, within or out of inventory; always generates accounting; validates revision, locator, lot, dual UOM, serial.</li>
<li><b>Transaction type = source + action.</b> You can add sources; <b>actions are system-defined</b>.</li>
<li>Examples: PO receipt = PO + Receipt into stores; SO issue = SO + Issue from stores; Misc receipt = Inventory + Receipt into stores; Account alias issue = Account alias + Issue from stores; MR transfer = MR + Subinventory transfer.</li>
<li>User-defined: source "Charity" + Issue from stores = "Issue to Charity".</li>
<li>Other tasks: account aliases, interorganization parameters, item transaction defaults (default subinventory/locator), transaction reasons, lot grades, lot expiration actions, lot/serial attribute mapping.</li></ul>
<p class="src">Source: SCM Foundation, lesson 8</p>`},
{t:"Processing profiles",h:`<ul>
<li>Processing mode profiles for misc issue/receipt, interorg, subinventory transfer and general transactions: Online, Concurrent, Background.</li>
<li>Background: runs periodically, control returns immediately. Concurrent: spawns a request immediately and shows the request number.</li>
<li>Transaction Date Validation Enabled: no validation, current date only, validate date. Max Days Prior to Current Date applies to FBDI/REST when validation = No validation.</li>
<li>Also: Inventory Transaction Batch Size, Expense to Asset Transfer Allowed.</li></ul>`},
{t:"Material status control",h:`<ul>
<li>Four levels: <b>subinventory, locator, lot, serial</b>.</li>
<li>Controls allowed/disallowed transaction types and whether stock is reservable, ATP-included and nettable (not at serial level).</li>
<li>Subinventory/locator status: stock behaves per the location's status but doesn't take it on.</li>
<li>Lot/serial status needs item flags Lot Status Enabled / Serial Number Status Enabled; optional default status applied at receipt and carried through transfers.</li>
<li>Only transaction types flagged "status control" appear; unflagged types are always allowed.</li>
<li>Setup: Manage Material Statuses. Profile: Material Status Enforced. Report: Material Status Where Used.</li></ul>
<div class="focus"><b>Exam focus</b>A status "Prohibit Subinventory Transfer" on subinventory Defect removes it from the subinventory transfer LOV.</div>
<p class="src">Source: SCM Foundation, lesson 13</p>`},
{t:"E-signatures and e-records",h:`<ul>
<li>For FDA GMP: receipt, put away, receipt correction, misc transaction, ship confirm, lot/serial attribute changes.</li>
<li><b>Inline</b>: approve before save. <b>Deferred</b>: saved pending approval.</li>
<li>Configured by transaction type and org.</li></ul>
<p class="src">Source: SCM Foundation, lessons 7 and 9</p>`}
]});
QS("m3b",[
["A transaction type is made up of:",["Source and action","Source and reason","Action and account","Reason and account alias"],"Transaction type = source + action."],
["Which can you NOT create yourself?",["Transaction actions","Transaction sources","Transaction types","Transaction reasons"],"Actions are system-defined; you can add sources, types and reasons."],
["You need an 'Issue to Charity' transaction. How?",["Create a source 'Charity' and a type combining it with Issue from stores","Create a new action 'Charity issue'","Use an account alias only","Create a movement request type"],"User-defined source + existing action = new transaction type."],
["Account alias issue combines which source and action?",["Account alias + Issue from stores","Inventory + Issue from stores","Account + Receipt into stores","Account alias + Subinventory transfer"],"Account Alias source + Issue from stores action."],
["Which processing mode returns control immediately and processes periodically?",["Background","Online","Concurrent","Immediate"],"Background runs periodically; Concurrent spawns a request right away."],
["At which levels can material status be assigned?",["Subinventory, locator, lot, serial","Item, subinventory, lot","Org, subinventory, locator","Lot, serial, revision"],"Four levels: subinventory, locator, lot, serial."],
["Lot status doesn't appear on lot transactions. What's missing?",["The item's Lot Status Enabled flag","The Material Status Enforced profile","A locator status","A transaction reason"],"Lot/serial status needs the item flags Lot Status Enabled / Serial Number Status Enabled."],
["A status disallows 'Subinventory transfer' but the transfer still works. Why?",["The transaction type isn't flagged for status control","Material status only works on lots","Statuses only affect reservations","Subinventory transfers ignore status"],"Only types flagged 'status control' are affected; unflagged types are always allowed."],
["At which level can you NOT control reservable, ATP and nettable?",["Serial","Subinventory","Locator","Lot"],"Not available at serial level, for performance."],
["Stock sits in a subinventory with status 'Hold'. It's transferred out. What status does it carry?",["It takes the status of the new location; it never took on 'Hold'","It keeps 'Hold'","It gets the item default status","It becomes Active only after approval"],"Stock behaves per the location's status but doesn't inherit it."],
["Which report shows where a material status is used?",["Material Status Where Used","Material Status Audit","Item Status Report","Transaction Register"],"Material Status Where Used lists where each status is assigned."],
["With deferred e-signatures, what happens to a receipt?",["It's saved in a pending state until signed","It can't be saved until signed","It's posted and signed later without restriction","It's rejected"],"Deferred = saved pending approval; inline = approve before save."],
["Which transaction supports e-records and e-signatures?",["Ship confirm","Min-max planning","ABC compile","Cost rollup"],"Supported: receipt, put away, receipt correction, misc transaction, ship confirm, lot/serial attribute changes."],
["What does the Item Transaction Defaults task set?",["Default subinventory and locator for shipping, receiving and MR put-away","Default transaction type per user","Default costing method","Default material status"],"It defaults subinventory/locator per item for ship, receive and put-away."]
]);

MOD({id:"m3c",d:"d3",title:"Lot & serial control",
lede:"How lots and serials are generated, controlled and traced.",
topics:["Set up lot and serial control","Create and manage lot and serial controlled transactions"],
sections:[
{t:"Lots",h:`<ul>
<li>Lot = quantity produced or received together sharing specs and cost. Parent/child lots supported.</li>
<li>Org parameters (Lot, Serial Number and Packing Unit tab): lot uniqueness (none or across items), lot generation (item-level or org-level prefix), child lot parameters.</li>
<li>Item: Lot control = No control or Full control. Change only with zero on-hand and no open internal orders/in-transit.</li>
<li>Shelf life: none, N days from receipt, or user-defined per lot. Expired lots excluded from min-max on-hand and can't be reserved.</li>
<li><b>Grade</b>: quality rating of a lot (never of a location); informational for picking; usable by costing. Expiration action (Destroy, Retest) is informational.</li>
<li>Disable a lot-item combination to reuse the number for another item (lot-only items).</li></ul>
<p class="src">Source: SCM Foundation, lesson 9</p>`},
{t:"Serials",h:`<ul>
<li>Generation: No control, Predefined, Entry at SO/TO/WO issue, Entry at inventory pick, Dynamic entry at receipt.</li>
<li>Predefined serials are loaded by a scheduled process (reserves numbers, doesn't assign to stock).</li>
<li>Capture at pick: serials entered at pick confirm, not ship confirm.</li>
<li>Enter single, range, or non-contiguous serials.</li>
<li>Uniqueness: within item < within org < <b>across orgs</b> (enterprise-wide; setting it on one org applies to all).</li></ul>
<div class="focus"><b>Exam focus</b>Serial uniqueness levels and the one-org-applies-to-all rule.</div>`},
{t:"Genealogy and profiles",h:`<ul>
<li>Backward (materials, receipt, supplier) and forward (assembly, shipment, customer) traceability across orgs, for FDA/ISO compliance.</li>
<li>Genealogy Details: dependency graph, map, search, drill to history timeline.</li>
<li>Profiles: Receive Shipped Lot Quantity; Receipt of Issued Serial Numbers Restricted.</li>
<li>REST for lot numbers and item serial numbers; lot/serial attribute DFF mapping by item or category.</li></ul>`}
]});
QS("m3c",[
["When can you change an item's lot control?",["Only with zero on-hand and no open internal orders or in-transit","Any time","Only after the period closes","Only in the master org"],"Lot control can change only when there's no on-hand and no open internal orders/in-transit."],
["Where are lot uniqueness and lot generation set?",["Organization parameters, Lot, Serial Number and Packing Unit tab","Item structure","Receiving parameters","Manage Lots page"],"They're org parameters on that tab."],
["A lot grade is a quality rating of:",["A lot","A locator","A subinventory","A supplier"],"Grade rates a lot, never a location."],
["What happens to expired lots in min-max planning?",["They're excluded from on-hand","They're counted as supply","They trigger a reorder","They're moved automatically"],"Expired lots are excluded from min-max on-hand and can't be reserved."],
["Lot expiration actions such as Destroy or Retest are:",["Informational","Executed automatically at expiry","Material statuses","Transaction types"],"Expiration actions are informational only."],
["Serials must be recorded at pick confirm instead of ship confirm. Which generation option?",["Entry at inventory pick","Entry at sales order issue","Predefined","Dynamic entry at receipt"],"Capture at pick records serials during pick confirm."],
["What does loading predefined serial numbers do?",["Reserves the numbers without assigning them to stock","Creates on-hand for each serial","Assigns serials to open POs","Creates serial statuses"],"A scheduled process reserves predefined numbers; it doesn't assign them to stock."],
["You set serial uniqueness 'Across organizations' in org M1. What's the scope?",["All organisations","Only M1","Orgs in the same BU","Orgs sharing the item master"],"Across-org uniqueness is enterprise-wide."],
["Which serial uniqueness level also stops two different items sharing a serial in one org?",["Within organization","Within items","None","Within lot"],"Within items stops reuse for the same item; within org also stops different items sharing a serial in that org."],
["Which traceability is 'forward'?",["From a component to the assembly, shipment and customer","From an assembly to its components and supplier","From a PO to the invoice","From a lot to its grade"],"Forward = where it went; backward = where it came from."],
["A lot number is needed for a different item under lot uniqueness 'across items'. What can you do?",["Disable the lot-item combination to reuse the number","Change uniqueness per transaction","Rename the lot","Nothing; it's impossible"],"Disabling the lot-item combo lets you reuse the number (lot-only items)."],
["Which profile controls whether you can receive shipped lot quantities?",["Receive Shipped Lot Quantity","Lot Status Enabled","Material Status Enforced","Receipt of Issued Serial Numbers Restricted"],"Receive Shipped Lot Quantity (Yes/No)."],
["What does full lot control mean?",["A lot is required at receipt and on every transaction","Lots are optional on issues","Lots are generated only at receipt","Only the parent lot is tracked"],"Full control requires a lot at receipt and on every transaction."],
["Which shelf life option lets you enter an expiry per lot?",["User-defined","Shelf life days","No control","Item-level expiry"],"Options: no control, N days from receipt, or user-defined per lot."],
["Where can you split a receipt quantity across several lots?",["During the receipt transaction","Only on Manage Lots after receipt","Only via FBDI","It's not possible"],"You can pre-assign lots or split a receipt into several lots while transacting."]
]);

MOD({id:"m3d",d:"d3",title:"Picking & receiving configuration",
lede:"Picking rules, receipt routing and the receiving parameters you'll set during implementation.",
topics:["Configure picking and receiving","Troubleshoot configuration issues"],
sections:[
{t:"Picking rules",h:`<ul>
<li>Restrictions: lot shelf life days, single lot, partial picking.</li>
<li>Sort criteria: lot, revision, subinventory, locator.</li>
<li>Assigned with a sequence via Manage Picking Rule Assignments (by org, item, etc.).</li>
<li>Substitute items at pick release: enable at org, override per line; needs item substitute relationships.</li></ul>
<p class="src">Source: SCM Foundation, lesson 11; Advanced Fulfillment, lesson 16</p>`},
{t:"Receipt routing",h:`<div class="tbl"><table>
<tr><th>Routing</th><th>Steps</th></tr>
<tr><td>Direct delivery</td><td>1: dock to stock</td></tr>
<tr><td>Standard receipt (default)</td><td>2: receive, then put away. On-hand only at delivery; value in receiving inventory meanwhile.</td></tr>
<tr><td>Inspection required</td><td>3: receive, inspect, put away accepted; return or scrap rejected</td></tr></table></div>
<p>Tolerances: org/supplier/item/order, lowest level wins. Receipt Close Point (Accepted, Delivered, Received) + close tolerance % in procurement.</p>`},
{t:"Receiving parameter defaults",h:`<div class="tbl"><table>
<tr><th>Parameter</th><th>Default</th></tr>
<tr><td>Ship-to exception action</td><td>Reject</td></tr>
<tr><td>ASN control action</td><td>Warning</td></tr>
<tr><td>Early/late tolerance</td><td>0 days, action Warning</td></tr>
<tr><td>Over-receipt tolerance</td><td>0%, action Reject</td></tr>
<tr><td>Receipt routing</td><td>Standard receipt</td></tr>
<tr><td>Allow substitute receipts</td><td>No</td></tr>
<tr><td>Allow unordered / blind receiving / print traveler</td><td>Selected</td></tr>
<tr><td>Include closed POs, allow routing override</td><td>Deselected</td></tr>
<tr><td>Receipt number</td><td>Automatic, numeric, next = 0</td></tr>
<tr><td>RMA routing</td><td>Standard</td></tr></table></div>
<div class="focus"><b>Exam focus</b>Over-receipt default action Reject; ASN control Warning; routing Standard.</div>
<p class="src">Source: SCM Foundation, lesson 12</p>`},
{t:"Other receiving setups",h:`<ul>
<li>Pay on receipt / ERS: auto invoices; Invoice Summary Level (packing slip, receipt, pay site); aging period profile; ERS prefix profile ("ERS-").</li>
<li>Quality integration: org parameter lets receivers record inspection results in Quality (plans, sampling, skip lot).</li>
<li>Drop ship: receiving parameter checkboxes to print shipping documents for drop ship orders and RMAs.</li></ul>`}
]});
QS("m3d",[
["What is the default receipt routing?",["Standard receipt","Direct delivery","Inspection required","Blind receipt"],"Standard receipt (two steps) is the default."],
["With standard receipt routing, when is on-hand updated?",["At put away (delivery)","At receipt","At invoice match","At ASN creation"],"On-hand updates only at delivery; value sits in receiving inventory until then."],
["Which routing has three steps?",["Inspection required","Standard receipt","Direct delivery","Express receipt"],"Receive → inspect → put away."],
["What is the default over-receipt tolerance action?",["Reject","Warning","None","Hold"],"Over-receipt default is 0% with action Reject."],
["What is the default ASN control action?",["Warning","Reject","None","Hold"],"ASN control defaults to Warning."],
["Tolerances exist at org, supplier, item and order level. Which applies?",["The lowest level","The org level always","The highest level","The most restrictive"],"The lowest level wins."],
["A receiver can't change routing on the receipt. Which parameter?",["Allow routing override","Allow blind receiving","Process all lines together","Allow unordered receipts"],"Allow routing override is deselected by default."],
["Which picking rule restriction exists?",["Single lot","Minimum grade","Maximum weight","Carrier preference"],"Restrictions: lot shelf life days, single lot, partial picking."],
["How do you control which picking rule applies to which item?",["Manage Picking Rule Assignments with a sequence","Item template","Material status","Pick slip grouping rule"],"Rules are assigned with sequence by org, item, etc."],
["Which receipt close point options exist?",["Accepted, Delivered, Received","Received, Invoiced, Paid","Shipped, Received, Closed","Inspected, Put away, Costed"],"Receipt Close Point: Accepted, Delivered or Received, plus a tolerance %."],
["What is the default for 'Allow substitute receipts'?",["No","Yes","Warning","Reject"],"Allow substitute receipts defaults to No."],
["Which invoice summary levels exist for Pay on Receipt?",["Packing slip, receipt, pay site","Line, header, supplier","PO, receipt, invoice","Daily, weekly, monthly"],"Invoice Summary Level on the supplier site: packing slip, receipt or pay site."],
["Blind receiving means:",["The expected quantity isn't shown to the receiver","The item isn't shown","No PO is referenced","Receipts skip inspection"],"With blind receiving the quantity field is blank."],
["To let receivers record inspection results in Oracle Quality, what do you set?",["An org parameter for quality inspection integration","Inspection required routing only","A material status","A picking rule"],"An org parameter enables recording results in Quality Inspection (plans, sampling, skip lot)."]
]);
