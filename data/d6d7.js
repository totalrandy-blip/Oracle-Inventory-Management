MOD({id:"m6a",d:"d6",title:"Min-max planning & PAR locations",
lede:"Reorder logic, where settings live, what gets created and how PAR replenishment works.",
topics:["Set up min-max planning","Run the min-max plan","Define PAR location"],
sections:[
{t:"The reorder logic",h:`<ul>
<li>Reorder when <b>(on-hand − demand) + on order &lt; minimum</b>.</li>
<li>Order quantity = <b>maximum − total available</b>, adjusted by fixed lot multiplier and min/max order quantity.</li>
<li>Total available = on-hand + supply before supply cutoff − demand before demand cutoff.</li>
<li>Run at org level or subinventory level (needs min/max at that level). For low-value items.</li>
<li>Supply/demand: on-hand always; optional TOs, POs/requisitions, SOs (reserved only or all), WOs and WO components; at subinventory level also MRs. Option to suppress MRs when the source subinventory has zero on-hand.</li></ul>
<div class="focus"><b>Exam focus</b>Memorise the reorder condition and order quantity formula.</div>
<p class="src">Source: SCM Foundation, lesson 14</p>`},
{t:"Where the settings live",h:`<ul>
<li>Org: source replenishment type, round reorder quantity.</li>
<li>Item: planning method min-max, make/buy, min/max qty, min/max order qty, fixed lot multiplier, lead times (pre-processing + processing → need-by; post-processing → PO cutoff), Build in WIP, source type.</li>
<li>Subinventory and item-subinventory: sourcing, lead times, min/max, order quantities, lot multiplier.</li>
<li>Precedence: <b>item-subinventory → subinventory → item</b>.</li>
<li>Automated min/max: policy profiles assigned to classifications calculate and publish min/max (incl. EOQ).</li></ul>`},
{t:"What gets created",h:`<ul>
<li>Source <b>Organization</b> → transfer order (intra-org TO if same org). <b>Subinventory</b> → movement request. <b>Supplier</b> → purchase requisition.</li>
<li>Org level: requisitions/TOs for buy items; unreleased WOs for make items with Build in WIP = Yes.</li>
<li>Run <b>Print Min-Max Planning Report</b> (restock, cutoffs, exceptions: all / below min / above max).</li>
<li>Requisitions, TOs and WOs go to the SCO interface → <b>Process Supply Chain Orchestration Interface</b> (or Requisition Import if SCO isn't licensed). MRs are created directly.</li>
<li>Profile Min-Max Replenishment Reorder Approval: Preapproved or Incomplete.</li></ul>`},
{t:"PAR locations",h:`<ul>
<li>Hospitals, bars: fixed item list with a PAR quantity, usually expensed and counted periodically.</li>
<li>Subinventory settings: PAR location, PAR level, PAR max, count method, default count type (Order PAR, Order Quantity, On-hand Quantity).</li>
<li>Counts sent via the Replenishment Request REST service; <b>Create Inventory Replenishment Request Process</b> creates a requisition/PO, inter- or intra-org transfer, or MR.</li>
<li>Count methods per item (two-bin, request); temporary override; duplicate-request protection.</li></ul>`}
]});
QS("m6a",[
["When does min-max trigger a reorder?",["When (on-hand − demand) + on order is below the minimum","When on-hand is below maximum","When demand exceeds on-hand","When on-hand equals minimum"],"Condition: (OH − demand) + on order < min."],
["How is the min-max order quantity calculated?",["Maximum minus total available, adjusted for multipliers and order limits","Minimum minus on-hand","Maximum minus minimum","Demand minus supply"],"Order qty = max − total available, then rounding/multiplier/min-max order qty."],
["Min 20, max 100, on-hand 30, demand 25, on order 10. Reorder?",["Yes: (30 − 25) + 10 = 15 < 20","No: 30 > 20","No: on order covers it","Yes: 30 < 100"],"15 is below the minimum of 20."],
["In that example (total available 15), what's the order quantity before adjustments?",["85","80","70","100"],"100 − 15 = 85."],
["Which min-max setting takes precedence?",["Item-subinventory","Subinventory","Item","Organisation"],"Precedence: item-subinventory → subinventory → item."],
["Source type Supplier creates:",["A purchase requisition","A transfer order","A movement request","A work order"],"Supplier → requisition; Organization → TO; Subinventory → MR."],
["Source type Organization with the same org as source and destination creates:",["An intra-org transfer order","A movement request","A requisition","Nothing"],"Organization source in the same org → intra-org TO."],
["When does org-level min-max create a work order?",["For make items with Build in WIP = Yes","For all items","For buy items","Never"],"Unreleased WOs for make items with Build in WIP."],
["Which report runs min-max planning?",["Print Min-Max Planning Report","Min-Max Exception Report","Replenishment Count Report","Item Supply and Demand"],"Print Min-Max Planning Report with restock and exception parameters."],
["After min-max, requisitions are in the SCO interface. What next?",["Run Process Supply Chain Orchestration Interface","Run Requisition Import always","Nothing, POs are created directly","Run Create Replenishment Request"],"SCO interface process (Requisition Import only if SCO isn't licensed)."],
["Which documents does min-max create directly, without the SCO interface?",["Movement requests","Requisitions","Transfer orders","Work orders"],"MRs are created directly."],
["Which profile controls whether min-max requisitions are pre-approved?",["Min-Max Replenishment Reorder Approval","Material Status Enforced","Transaction Processing Mode","Receipt Close Point"],"Options: Preapproved or Incomplete."],
["Which lead times give the need-by date?",["Pre-processing + processing","Post-processing only","Cumulative manufacturing","Transit time only"],"Pre-processing + processing → need-by; post-processing → PO supply cutoff."],
["Which process turns PAR counts into supply documents?",["Create Inventory Replenishment Request Process","Print Min-Max Planning Report","Process SCO Interface","Import Count Sequences"],"It creates requisitions/POs, transfers or MRs from replenishment requests."],
["How are PAR counts typically submitted?",["Through the Replenishment Request REST service","Through cycle count entry","Through receipts","Through the SCO work area"],"Counts come via the Replenishment Request REST service."],
["Which is a default count type for a PAR subinventory?",["Order PAR","Order minimum","Order safety stock","Order lot"],"Default count types: Order PAR, Order Quantity, On-hand Quantity."],
["What prevents a PAR location from ordering the same item twice?",["Duplicate-request protection","Material status","Picking rules","Reservation"],"The PAR process has duplicate-request protection."],
["What do automated min/max calculations use?",["Policy profiles assigned to classifications","ABC classes","Cycle count tolerances","Sourcing rules"],"Policy profiles on item classifications calculate and publish min/max, incl. EOQ."],
["Which option stops movement requests when the source subinventory is empty?",["Suppress MRs when source subinventory has zero on-hand","Restock = No","Include PO supply","Round reorder quantity"],"There's an option to suppress MRs for zero on-hand sources."],
["Min-max is best suited to:",["Low-value items","Highly engineered make-to-order items","Project-pegged items","Consigned items only"],"Min-max is a simple method for low-value items."]
]);

MOD({id:"m7a",d:"d7",title:"ABC analysis & cycle counting",
lede:"Ranking items by value and counting a slice of them every working day.",
topics:["Use ABC in inventory counts","Configure cycle count","Execute cycle count","Troubleshoot a cycle count issue"],
sections:[
{t:"ABC analysis",h:`<ul>
<li>Classification set values items (cost × qty, qty, or historical order value) and ranks them.</li>
<li>ABC assignment group splits them into classes (usually A/B/C, can be more or fewer).</li>
<li>Counts work area shows sequences to record and awaiting approval. FBDI + Import Count Sequences; ADFDI sheet only corrects errors (can't add rows).</li></ul>
<p class="src">Source: SCM Foundation, lesson 15</p>`},
{t:"Creating a cycle count",h:`<ol>
<li><b>Primary details</b>: name, subinventories, ABC assignment group, sync mode (Complete vs Append Changes), count by item category.</li>
<li><b>Classes and items</b>: frequency per class; value/qty tolerances (item overrides class); hit/miss %; "Include in schedule" = always schedule.</li>
<li><b>Schedules and approvals</b>: daily/weekly, calendar, next date; approval always or only outside tolerance.</li>
<li><b>Parameters</b>: max days late, max auto recounts (then approval), manual counts, count zero, display suggested qty (off = blind count), serialized counts, hit/miss range.</li></ol>
<p>Item must be <b>Cycle Count Enabled</b> or it's ignored.</p>`},
{t:"Items per day",h:`<p>(items in class × counts per year) ÷ working days, rounded up. With 258 working days: A 131 × 52 → 27; B 127 × 26 → 13; C 254 × 13 → 13; total 53 a day.</p>
<div class="focus"><b>Exam focus</b>Practise the items-per-day formula; blind count = hide suggested quantity.</div>`},
{t:"Troubleshooting",h:`<ul>
<li>Item missing from schedules → check Cycle Count Enabled.</li>
<li>Too many recounts → max auto recounts, after which approval is needed.</li>
<li>Purge of cycle count fails → pending transactions; option to purge only errored sequences.</li>
<li>Cycle Count Listing report: count sheet with recount history. Cycle Count REST service exists.</li></ul>`}
]});
QS("m7a",[
["An item never appears in cycle count schedules. Most likely cause?",["It isn't Cycle Count Enabled","It has no ABC class","It is lot controlled","It is in a locator"],"Items without Cycle Count Enabled are ignored."],
["131 A items, 52 counts a year, 258 working days. Items per day?",["27","26","52","131"],"131 × 52 ÷ 258 = 26.4, rounded up to 27."],
["127 B items counted 26 times a year, 258 working days. Items per day?",["13","12","26","5"],"127 × 26 ÷ 258 = 12.8 → 13."],
["How do you set up a blind count?",["Turn off 'Display suggested quantity'","Set approval to always","Disable manual counts","Remove tolerances"],"Hiding the suggested quantity makes it blind."],
["Tolerances exist on the class and the item. Which applies?",["The item tolerance","The class tolerance","The stricter of the two","Neither; only count level"],"Item overrides class."],
["What does 'Include in schedule' on an item do?",["Always schedules that item","Excludes it","Counts it only once a year","Puts it in class A"],"It forces the item into every schedule."],
["What happens after the maximum automatic recounts are reached?",["The count goes for approval","It's adjusted automatically","It's deleted","It resets"],"Beyond max auto recounts, approval is needed."],
["Which ABC valuation methods exist?",["Cost × quantity, quantity, historical order value","Sales price only","Lead time","Supplier rating"],"Items are valued by cost × qty, qty or historical order value."],
["A cycle count purge fails. Likely reason?",["Pending transactions exist","The count isn't approved","ABC is outdated","The calendar expired"],"Purge is blocked by pending transactions."],
["What can the ADFDI count spreadsheet be used for?",["Correcting errors only","Adding new count sequences","Creating cycle counts","Approving adjustments"],"It only corrects errors; use FBDI + Import Count Sequences to load."],
["Cycle count sync mode options are:",["Complete and Append Changes","Full and Partial","Daily and Weekly","Manual and Automatic"],"Sync mode: Complete vs Append Changes."],
["Approval can be required:",["Always, or only when outside tolerance","Only for A items","Only for serials","Never"],"Approval always or only outside tolerance."],
["Which report gives count sheets with recount history?",["Cycle Count Listing","Missing Tag Listing","Tag Listing","Material Status Where Used"],"Cycle Count Listing."],
["How often are A items typically counted compared with C items?",["More often","Less often","The same","Only once a year"],"A items are the highest value and counted most often."],
["What groups classified items into A, B and C?",["ABC assignment group","Classification set","Cycle count header","Item category set"],"The classification set ranks; the assignment group splits into classes."]
]);

MOD({id:"m7b",d:"d7",title:"Physical inventory",
lede:"The full wall-to-wall count and the reports that keep adjustments safe.",
topics:["Describe the physical inventory process","Configure physical inventory","Perform physical inventory check","Troubleshoot a physical inventory issue"],
sections:[
{t:"The process",h:`<ul>
<li>Full count of an org or selected subinventories, usually every 6 or 12 months, with operations halted.</li>
<li>Reconciles quantities and values: define → snapshot → generate tags → count → approve → adjust.</li>
<li>Counts carry owning party for consigned stock. Purge is blocked by pending transactions.</li></ul>
<p class="src">Source: SCM Foundation, lesson 15</p>`},
{t:"Reports",h:`<ul>
<li><b>Physical Inventory Tags</b>: default and blank tags.</li>
<li><b>Tag Listing</b>: all tags incl. dynamic.</li>
<li><b>Missing Tag Listing</b>: tags with no count; void tags excluded.</li></ul>
<div class="focus"><b>Exam focus</b>Uncounted tags without approval adjust on-hand to zero. Run the Missing Tag Listing before adjusting.</div>`}
]});
QS("m7b",[
["Why run the Missing Tag Listing before posting adjustments?",["Uncounted tags adjust on-hand to zero","Missing tags block adjustments","It recalculates ABC","It approves counts"],"Tags with no count and no approval adjust on-hand to zero."],
["Which report lists tags that have no count?",["Missing Tag Listing","Tag Listing","Physical Inventory Tags","Cycle Count Listing"],"Missing Tag Listing (void tags excluded)."],
["Which report includes dynamic tags?",["Tag Listing","Missing Tag Listing","Physical Inventory Tags","Cycle Count Listing"],"Tag Listing shows all tags including dynamic ones."],
["Physical Inventory Tags prints:",["Default and blank tags","Only counted tags","Only void tags","Adjustment journals"],"It prints default and blank tags."],
["How does physical inventory differ from cycle counting?",["It's a full count, usually with operations halted","It counts a slice daily","It never needs approvals","It only covers A items"],"Physical inventory is periodic and complete; cycle counting is continuous."],
["How often is physical inventory typically done?",["Every 6 or 12 months","Daily","Weekly","Only at go-live"],"Usually semi-annual or annual."],
["A physical inventory purge fails. Why?",["Pending transactions exist","Tags are void","ABC isn't compiled","The calendar has exceptions"],"Purge is blocked by pending transactions."],
["Are void tags on the Missing Tag Listing?",["No","Yes","Only if approved","Only for serials"],"Void tags are excluded."],
["What does a physical inventory reconcile?",["Quantities and values","Only quantities","Only item costs","Supplier balances"],"It reconciles quantities and values."],
["For consigned stock, what do count reports include?",["Owning party","Supplier invoice","Consumption advice","Transfer price"],"Cycle count and physical inventory reports carry owning party."]
]);
