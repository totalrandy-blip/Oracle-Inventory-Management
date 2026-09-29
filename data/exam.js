/* Exam blueprint for 1Z0-1073-26 and the mapping of study sections and questions onto it.
   EXAM: [section, [[group, [[topicId, title, [moduleId:sectionIndex], [relatedTopicIds], note]]]]]
   QTOPIC: question id -> topic id. New questions not listed fall back to QDEFAULT for their module. */
EXAMDEF([
 [
  "Implementing Enterprise Structures",
  [
   [
    "Explain the key features and capabilities of Enterprise Structure",
    [
     [
      "es-comp",
      "Explain the role of Enterprise Structure components",
      [
       "m1a:0",
       "m1a:3"
      ]
     ],
     [
      "es-orgs",
      "Describe the purpose of Item Organization, Cost Organization, and Inventory Organization",
      [
       "m1a:1"
      ],
      [
       "im-cost"
      ]
     ]
    ]
   ],
   [
    "Configure and customize Enterprise Structure",
    [
     [
      "es-inv",
      "Set up Inventory Organization",
      [
       "m1a:2",
       "m1b:0",
       "m1b:1",
       "m1b:2",
       "m1b:3"
      ]
     ]
    ]
   ]
  ]
 ],
 [
  "Implementing Inventory Management",
  [
   [
    "Explain the key features and capabilities of costing in Inventory Management",
    [
     [
      "im-cost",
      "Understand Receipt Accounting, Cost Accounting, Supply Chain Financial Orchestration",
      [
       "m2d:0",
       "m2d:1",
       "m2d:2",
       "m2d:3",
       "m2d:4"
      ]
     ]
    ]
   ],
   [
    "Configure and customize Inventory Management",
    [
     [
      "im-sub",
      "Configure Subinventories and Locators",
      [
       "m2a:0",
       "m2a:1",
       "m2c:2"
      ]
     ],
     [
      "im-uom",
      "Configure Unit of Measures",
      [
       "m2a:2",
       "m2a:3"
      ]
     ],
     [
      "im-item",
      "Configure Items",
      [
       "m2b:0",
       "m2b:1",
       "m2b:2",
       "m2b:3",
       "m2b:4"
      ]
     ],
     [
      "im-sched",
      "Configure Facilities Schedule",
      [
       "m2c:0",
       "m2c:1"
      ]
     ]
    ]
   ]
  ]
 ],
 [
  "Implementing Inventory Transactions",
  [
   [
    "Explain the key features and capabilities of Inventory Transactions",
    [
     [
      "it-bal",
      "Understand Inventory Balances and Item Availability",
      [
       "m3a:0",
       "m3a:2"
      ]
     ],
     [
      "it-res",
      "Understand the role of Inventory Reservations",
      [
       "m3a:1"
      ]
     ]
    ]
   ],
   [
    "Configure and customize Inventory Transactions",
    [
     [
      "it-ms",
      "Set up Material Status Control",
      [
       "m3b:2"
      ]
     ],
     [
      "it-tx",
      "Configure Inventory Transactions",
      [
       "m3b:0",
       "m3b:1"
      ]
     ],
     [
      "it-ls",
      "Set up Lot and Serial Control",
      [
       "m3c:0",
       "m3c:1"
      ]
     ],
     [
      "it-pr",
      "Configure Picking and Receiving",
      [
       "m3d:0",
       "m3d:1",
       "m3d:2",
       "m3d:3"
      ]
     ],
     [
      "it-tsc",
      "Troubleshoot Configuration issues",
      [],
      [
       "it-ms",
       "it-tx",
       "it-ls",
       "it-pr",
       "es-inv"
      ],
      "No separate study material: troubleshooting questions test the setups in the linked topics. The questions for this topic are the 'why doesn't it work' scenarios drawn from those setups."
     ]
    ]
   ],
   [
    "Execute Inventory Transactions",
    [
     [
      "ex-sub",
      "Create Subinventory Transfer, Movement Request and Miscellaneous Transaction",
      [
       "m4a:0",
       "m4a:1",
       "m4a:2",
       "m4a:3"
      ]
     ],
     [
      "ex-io",
      "Execute Interorganization Transfer",
      [
       "m4b:0"
      ]
     ],
     [
      "ex-to",
      "Execute Transfer Orders",
      [
       "m4b:1",
       "m4b:2",
       "m4b:3"
      ]
     ],
     [
      "ex-rp",
      "Create and Manage Receipts and Picks",
      [
       "m4c:0",
       "m4c:1",
       "m4c:2"
      ]
     ],
     [
      "ex-ls",
      "Create and Manage Lot and Serial controlled transactions",
      [
       "m3c:2"
      ],
      [
       "it-ls"
      ]
     ],
     [
      "ex-tsx",
      "Troubleshoot Execution issues",
      [],
      [
       "ex-sub",
       "ex-to",
       "ex-rp",
       "ex-ls"
      ],
      "No separate study material: these questions are the execution scenarios where something goes wrong, drawn from the linked topics."
     ]
    ]
   ]
  ]
 ],
 [
  "Implementing Advanced Inventory Transactions",
  [
   [
    "Explain the key features and capabilities of Advanced Inventory Transactions",
    [
     [
      "adv-cons",
      "Understand the Consignment process",
      [
       "m5c:0"
      ]
     ],
     [
      "adv-sco",
      "Describe the Supply Chain Orchestration flow",
      [
       "m5a:0",
       "m5a:1",
       "m5a:2",
       "m5e:1",
       "m5e:2"
      ]
     ]
    ]
   ],
   [
    "Configure and customize Advanced Inventory Transactions",
    [
     [
      "adv-pdsc",
      "Configure project-specific Inventory Management",
      [
       "m5d:0",
       "m5d:1",
       "m5d:2"
      ]
     ],
     [
      "adv-conset",
      "Set up Consigned Inventory",
      [
       "m5c:1"
      ]
     ],
     [
      "adv-b2b",
      "Configure the Back-to-Back process",
      [
       "m5b:0",
       "m5b:1",
       "m5b:2"
      ]
     ],
     [
      "adv-repl",
      "Configure Item Replacement for Inventory entities",
      [
       "m5e:3"
      ]
     ],
     [
      "adv-bar",
      "Configure barcode scanning and label printing for mobile inventory",
      [
       "m5e:4"
      ],
      [
       "ai"
      ]
     ],
     [
      "adv-esig",
      "Configure Electronic Signatures and Electronic Records",
      [
       "m3b:3"
      ]
     ],
     [
      "adv-recall",
      "Configure and execute Product Recall",
      [
       "m5e:5"
      ],
      [
       "ai"
      ]
     ]
    ]
   ],
   [
    "Execute Advanced Inventory Transactions",
    [
     [
      "ex-pdsc",
      "Create Project-specific Inventory Transactions",
      [
       "m5d:3"
      ]
     ],
     [
      "ex-cons",
      "Manage Consigned Inventory Transactions",
      [
       "m5c:2",
       "m5c:3"
      ]
     ],
     [
      "ex-b2b",
      "Execute the Back-to-Back process",
      [
       "m5b:3"
      ]
     ],
     [
      "ex-sco",
      "Analyze and manage business flows and exceptions within Supply Chain Orchestration",
      [
       "m5a:3"
      ]
     ]
    ]
   ]
  ]
 ],
 [
  "Implementing Inventory Replenishment",
  [
   [
    "Explain the key features and capabilities of Inventory Replenishment",
    [
     [
      "rep-par",
      "Define PAR Location",
      [
       "m6a:3"
      ]
     ]
    ]
   ],
   [
    "Configure and customize Inventory Replenishment",
    [
     [
      "rep-mm",
      "Set up Min-Max planning",
      [
       "m6a:0",
       "m6a:1"
      ]
     ]
    ]
   ],
   [
    "Execute Inventory Replenishment",
    [
     [
      "rep-run",
      "Run the Min-Max plan",
      [
       "m6a:2"
      ]
     ]
    ]
   ]
  ]
 ],
 [
  "Implementing Inventory Counts",
  [
   [
    "Explain the key features and capabilities of Inventory Counts",
    [
     [
      "cnt-abc",
      "Use ABC in Inventory Counts",
      [
       "m7a:0"
      ]
     ],
     [
      "cnt-pi",
      "Describe the Physical Inventory Process",
      [
       "m7b:0"
      ]
     ]
    ]
   ],
   [
    "Configure and customize Inventory Counts",
    [
     [
      "cnt-picfg",
      "Configure Physical Inventory",
      [
       "m7b:2"
      ],
      [
       "cnt-pi",
       "cnt-pix"
      ]
     ],
     [
      "cnt-cccfg",
      "Configure Cycle Count",
      [
       "m7a:1"
      ]
     ],
     [
      "cnt-cctr",
      "Troubleshoot a Cycle Count issue",
      [
       "m7a:3"
      ]
     ],
     [
      "cnt-pitr",
      "Troubleshoot a Physical Inventory issue",
      [
       "m7b:3"
      ],
      [
       "cnt-pi",
       "cnt-pix"
      ]
     ]
    ]
   ],
   [
    "Execute Inventory Counts",
    [
     [
      "cnt-ccx",
      "Execute Cycle Count",
      [
       "m7a:4",
       "m7a:2"
      ]
     ],
     [
      "cnt-pix",
      "Perform Physical Inventory check",
      [
       "m7b:1"
      ]
     ],
     [
      "cnt-tsx",
      "Troubleshoot execution issues",
      [],
      [
       "cnt-cctr",
       "cnt-pitr"
      ],
      "Covered by the two troubleshooting topics above."
     ]
    ]
   ]
  ]
 ],
 [
  "Leveraging AI/ML/Mobile and Automation Features",
  [
   [
    "",
    [
     [
      "ai",
      "Use AI/ML/mobile and other automation features to streamline processes and drive operational efficiency",
      [
       "m8b:0",
       "m8b:1",
       "m8b:2",
       "m8b:3",
       "m8b:4",
       "m8b:5"
      ]
     ]
    ]
   ]
  ]
 ],
 [
  "Enabling Redwood Capabilities",
  [
   [
    "",
    [
     [
      "rw",
      "Enable the Redwood capabilities and understand their implications on existing configurations",
      [
       "m8a:0",
       "m8a:1",
       "m8a:2",
       "m8a:3",
       "m8a:4"
      ]
     ]
    ]
   ]
  ]
 ]
],
{"m1a-1":"es-orgs","m1a-2":"es-comp","m1a-3":"es-orgs","m1a-4":"es-orgs","m1a-5":"es-inv","m1a-6":"es-comp","m1a-7":"es-inv","m1a-8":"es-inv","m1a-9":"es-inv","m1a-10":"es-comp","m1a-11":"es-comp","m1a-12":"es-orgs","m1a-13":"es-comp","m1a-14":"es-orgs","m1a-15":"es-inv","m1b-1":"es-inv","m1b-2":"it-tsc","m1b-3":"es-inv","m1b-4":"es-inv","m1b-5":"es-inv","m1b-6":"es-inv","m1b-7":"es-inv","m1b-8":"es-inv","m1b-9":"es-inv","m1b-10":"it-tsc","m1b-11":"es-inv","m1b-12":"es-inv","m1b-13":"es-inv","m1b-14":"es-inv","m1b-15":"es-inv","m1b-16":"es-inv","m1b-17":"es-inv","m1b-18":"es-inv","m1b-19":"es-inv","m1b-20":"es-inv","m1b-21":"es-inv","m2a-1":"im-sub","m2a-2":"im-uom","m2a-3":"im-uom","m2a-4":"it-tsc","m2a-5":"im-sub","m2a-6":"im-sub","m2a-7":"im-sub","m2a-8":"im-uom","m2a-9":"im-uom","m2a-10":"im-uom","m2a-11":"im-uom","m2a-12":"im-uom","m2a-13":"im-sub","m2a-14":"im-sub","m2a-15":"im-uom","m2a-16":"im-sub","m2a-17":"im-sub","m2a-18":"im-sub","m2b-1":"im-item","m2b-2":"im-item","m2b-3":"im-item","m2b-4":"im-item","m2b-5":"im-item","m2b-6":"im-item","m2b-7":"im-item","m2b-8":"im-item","m2b-9":"im-item","m2b-10":"im-item","m2b-11":"im-item","m2b-12":"im-item","m2b-13":"im-item","m2b-14":"im-item","m2b-15":"im-item","m2b-16":"im-item","m2b-17":"im-item","m2c-1":"im-sched","m2c-2":"im-sched","m2c-3":"im-sched","m2c-4":"im-sched","m2c-5":"im-sched","m2c-6":"im-sched","m2c-7":"im-sub","m2c-8":"im-sub","m2c-9":"im-sub","m2c-10":"im-sub","m2c-11":"im-sched","m2c-12":"im-sub","m2d-1":"im-cost","m2d-2":"im-cost","m2d-3":"im-cost","m2d-4":"im-cost","m2d-5":"im-cost","m2d-6":"im-cost","m2d-7":"im-cost","m2d-8":"im-cost","m2d-9":"im-cost","m2d-10":"im-cost","m2d-11":"im-cost","m2d-12":"im-cost","m2d-13":"im-cost","m2d-14":"im-cost","m2d-15":"im-cost","m2d-16":"im-cost","m2d-17":"im-cost","m2d-18":"im-cost","m3a-1":"it-bal","m3a-2":"it-bal","m3a-3":"it-bal","m3a-4":"it-res","m3a-5":"it-res","m3a-6":"it-res","m3a-7":"it-res","m3a-8":"it-res","m3a-9":"it-res","m3a-10":"it-res","m3a-11":"it-bal","m3a-12":"it-res","m3a-13":"it-res","m3a-14":"it-res","m3a-15":"it-res","m3a-16":"it-bal","m3a-17":"it-bal","m3a-18":"it-res","m3a-19":"it-bal","m3b-1":"it-tx","m3b-2":"it-tx","m3b-3":"it-tx","m3b-4":"it-tx","m3b-5":"it-tx","m3b-6":"it-ms","m3b-7":"it-tsc","m3b-8":"it-tsc","m3b-9":"it-ms","m3b-10":"it-ms","m3b-11":"it-ms","m3b-12":"adv-esig","m3b-13":"adv-esig","m3b-14":"it-tx","m3b-15":"it-ms","m3b-16":"it-ms","m3b-17":"it-ms","m3b-18":"it-ms","m3b-19":"it-ms","m3b-20":"adv-esig","m3b-21":"adv-esig","m3b-22":"adv-esig","m3b-23":"adv-esig","m3b-24":"adv-esig","m3b-25":"adv-esig","m3c-1":"it-ls","m3c-2":"it-ls","m3c-3":"it-ls","m3c-4":"ex-ls","m3c-5":"it-ls","m3c-6":"it-ls","m3c-7":"it-ls","m3c-8":"it-ls","m3c-9":"it-ls","m3c-10":"ex-ls","m3c-11":"ex-tsx","m3c-12":"ex-ls","m3c-13":"it-ls","m3c-14":"it-ls","m3c-15":"ex-ls","m3c-16":"it-ls","m3c-17":"it-ls","m3c-18":"it-ls","m3c-19":"it-ls","m3c-20":"it-ls","m3d-1":"it-pr","m3d-2":"it-pr","m3d-3":"it-pr","m3d-4":"it-pr","m3d-5":"it-pr","m3d-6":"it-pr","m3d-7":"it-tsc","m3d-8":"it-pr","m3d-9":"it-pr","m3d-10":"it-pr","m3d-11":"it-pr","m3d-12":"it-pr","m3d-13":"it-pr","m3d-14":"it-pr","m4a-1":"ex-sub","m4a-2":"ex-sub","m4a-3":"ex-sub","m4a-4":"ex-sub","m4a-5":"ex-sub","m4a-6":"ex-tsx","m4a-7":"ex-sub","m4a-8":"ex-sub","m4a-9":"ex-sub","m4a-10":"ex-sub","m4a-11":"ex-tsx","m4a-12":"ex-sub","m4a-13":"ex-sub","m4a-14":"ex-sub","m4a-15":"ex-sub","m4a-16":"ex-sub","m4a-17":"ex-sub","m4a-18":"ex-sub","m4a-19":"ex-sub","m4a-20":"ex-sub","m4b-1":"ex-io","m4b-2":"ex-io","m4b-3":"ex-to","m4b-4":"ex-to","m4b-5":"ex-to","m4b-6":"ex-to","m4b-7":"ex-to","m4b-8":"ex-to","m4b-9":"ex-to","m4b-10":"ex-io","m4b-11":"ex-to","m4b-12":"ex-to","m4b-13":"ex-tsx","m4b-14":"ex-to","m4b-15":"ex-to","m4b-16":"ex-to","m4b-17":"ex-io","m4b-18":"ex-to","m4b-19":"ex-to","m4b-20":"ex-to","m4b-21":"ex-io","m4b-22":"ex-io","m4b-23":"ex-to","m4b-24":"ex-to","m4b-25":"ex-to","m4b-26":"ex-to","m4c-1":"ex-rp","m4c-2":"ex-tsx","m4c-3":"ex-rp","m4c-4":"ex-tsx","m4c-5":"ex-rp","m4c-6":"ex-rp","m4c-7":"ex-tsx","m4c-8":"ex-rp","m4c-9":"ex-rp","m4c-10":"ex-rp","m4c-11":"ex-rp","m4c-12":"ex-rp","m5a-1":"adv-sco","m5a-2":"adv-sco","m5a-3":"adv-sco","m5a-4":"ex-sco","m5a-5":"ex-sco","m5a-6":"ex-sco","m5a-7":"adv-sco","m5a-8":"ex-sco","m5a-9":"adv-sco","m5a-10":"adv-sco","m5a-11":"adv-sco","m5a-12":"adv-sco","m5a-13":"adv-sco","m5a-14":"adv-sco","m5a-15":"ex-sco","m5a-16":"adv-sco","m5a-17":"adv-sco","m5a-18":"ex-sco","m5a-19":"adv-sco","m5a-20":"ex-sco","m5a-21":"adv-sco","m5b-1":"adv-b2b","m5b-2":"adv-b2b","m5b-3":"adv-b2b","m5b-4":"adv-b2b","m5b-5":"adv-b2b","m5b-6":"adv-b2b","m5b-7":"adv-b2b","m5b-8":"adv-b2b","m5b-9":"adv-b2b","m5b-10":"adv-b2b","m5b-11":"ex-b2b","m5b-12":"ex-b2b","m5b-13":"adv-b2b","m5b-14":"ex-b2b","m5b-15":"adv-b2b","m5b-16":"adv-b2b","m5b-17":"adv-b2b","m5b-18":"ex-b2b","m5b-19":"adv-b2b","m5b-20":"ex-b2b","m5b-21":"ex-b2b","m5b-22":"ex-b2b","m5b-23":"adv-b2b","m5c-1":"adv-conset","m5c-2":"adv-conset","m5c-3":"adv-cons","m5c-4":"adv-cons","m5c-5":"adv-cons","m5c-6":"ex-cons","m5c-7":"ex-cons","m5c-8":"adv-conset","m5c-9":"adv-conset","m5c-10":"adv-conset","m5c-11":"ex-cons","m5c-12":"adv-conset","m5c-13":"ex-cons","m5c-14":"adv-conset","m5c-15":"ex-cons","m5d-1":"adv-pdsc","m5d-2":"adv-pdsc","m5d-3":"adv-pdsc","m5d-4":"adv-pdsc","m5d-5":"adv-pdsc","m5d-6":"adv-pdsc","m5d-7":"adv-pdsc","m5d-8":"ex-pdsc","m5d-9":"ex-pdsc","m5d-10":"ex-pdsc","m5d-11":"ex-pdsc","m5d-12":"ex-pdsc","m5d-13":"ex-pdsc","m5d-14":"adv-pdsc","m5d-15":"ex-pdsc","m5d-16":"adv-pdsc","m5d-17":"adv-pdsc","m5d-18":"ex-pdsc","m5d-19":"adv-pdsc","m5d-20":"adv-pdsc","m5d-21":"adv-pdsc","m5d-22":"adv-pdsc","m5d-23":"ex-pdsc","m5d-24":"adv-pdsc","m5d-25":"adv-pdsc","m5d-26":"adv-pdsc","m5d-27":"adv-pdsc","m5d-28":"ex-pdsc","m5d-29":"adv-pdsc","m5d-30":"ex-pdsc","m5d-31":"ex-pdsc","m5d-32":"ex-pdsc","m5d-33":"ex-pdsc","m5d-34":"ex-pdsc","m5d-35":"ex-pdsc","m5d-36":"ex-pdsc","m5d-37":"ex-pdsc","m5d-38":"ex-pdsc","m5d-39":"ex-pdsc","m5d-40":"ex-pdsc","m5d-41":"ex-pdsc","m5d-42":"ex-pdsc","m5d-43":"ex-pdsc","m5d-44":"ex-pdsc","m5d-45":"ex-pdsc","m5d-46":"ex-pdsc","m5d-47":"adv-pdsc","m5d-48":"ex-pdsc","m5e-1":"adv-sco","m5e-2":"adv-sco","m5e-3":"adv-sco","m5e-4":"adv-sco","m5e-5":"adv-sco","m5e-6":"adv-sco","m5e-7":"adv-sco","m5e-8":"adv-sco","m5e-9":"adv-sco","m5e-10":"adv-sco","m5e-11":"adv-sco","m5e-12":"adv-sco","m5e-13":"adv-sco","m5e-14":"adv-sco","m5e-15":"adv-sco","m5e-16":"adv-sco","m5e-17":"adv-sco","m5e-18":"adv-sco","m5e-19":"adv-sco","m5e-20":"adv-sco","m5e-21":"adv-sco","m5e-22":"adv-repl","m5e-23":"adv-repl","m5e-24":"adv-repl","m5e-25":"adv-repl","m5e-26":"adv-repl","m5e-27":"adv-repl","m5e-28":"adv-bar","m5e-29":"adv-bar","m5e-30":"adv-bar","m5e-31":"adv-bar","m5e-32":"adv-bar","m5e-33":"adv-bar","m5e-34":"adv-bar","m5e-35":"adv-recall","m5e-36":"adv-recall","m5e-37":"adv-recall","m5e-38":"adv-recall","m5e-39":"adv-recall","m5e-40":"adv-recall","m6a-1":"rep-mm","m6a-2":"rep-mm","m6a-3":"rep-mm","m6a-4":"rep-mm","m6a-5":"rep-mm","m6a-6":"rep-mm","m6a-7":"rep-mm","m6a-8":"rep-mm","m6a-9":"rep-run","m6a-10":"rep-run","m6a-11":"rep-mm","m6a-12":"rep-mm","m6a-13":"rep-mm","m6a-14":"rep-par","m6a-15":"rep-par","m6a-16":"rep-par","m6a-17":"rep-par","m6a-18":"rep-mm","m6a-19":"rep-mm","m6a-20":"rep-mm","m6a-21":"rep-run","m6a-22":"rep-run","m6a-23":"rep-run","m6a-24":"rep-mm","m6a-25":"rep-run","m6a-26":"rep-mm","m6a-27":"rep-run","m7a-1":"cnt-cctr","m7a-2":"cnt-ccx","m7a-3":"cnt-ccx","m7a-4":"cnt-cccfg","m7a-5":"cnt-cccfg","m7a-6":"cnt-cccfg","m7a-7":"cnt-cctr","m7a-8":"cnt-abc","m7a-9":"cnt-tsx","m7a-10":"cnt-ccx","m7a-11":"cnt-cccfg","m7a-12":"cnt-cccfg","m7a-13":"cnt-ccx","m7a-14":"cnt-abc","m7a-15":"cnt-abc","m7a-16":"cnt-cccfg","m7a-17":"cnt-cccfg","m7a-18":"cnt-cccfg","m7a-19":"cnt-cccfg","m7a-20":"cnt-ccx","m7a-21":"cnt-ccx","m7a-22":"cnt-ccx","m7a-23":"cnt-cctr","m7a-24":"cnt-abc","m7a-25":"cnt-abc","m7b-1":"cnt-pitr","m7b-2":"cnt-pix","m7b-3":"cnt-pix","m7b-4":"cnt-picfg","m7b-5":"cnt-pi","m7b-6":"cnt-pi","m7b-7":"cnt-tsx","m7b-8":"cnt-pitr","m7b-9":"cnt-pi","m7b-10":"cnt-pix","m7b-11":"cnt-picfg","m7b-12":"cnt-picfg","m7b-13":"cnt-picfg","m7b-14":"cnt-picfg","m7b-15":"cnt-picfg","m7b-16":"cnt-pi","m7b-17":"cnt-pi","m7b-18":"cnt-pitr","m7b-19":"cnt-pitr","m7b-20":"cnt-pitr","m7b-21":"cnt-pix","m8a-1":"rw","m8a-2":"rw","m8a-3":"rw","m8a-4":"rw","m8a-5":"rw","m8a-6":"rw","m8a-7":"rw","m8a-8":"rw","m8a-9":"rw","m8a-10":"rw","m8a-11":"rw","m8a-12":"rw","m8a-13":"rw","m8a-14":"rw","m8b-1":"ai","m8b-2":"ai","m8b-3":"ai","m8b-4":"ai","m8b-5":"ai","m8b-6":"ai","m8b-7":"ai","m8b-8":"ai","m8b-9":"ai","m8b-10":"ai","m8b-11":"ai","m8b-12":"ai","m8b-13":"ai","m8b-14":"ai","m8b-15":"ai"},
{"m1a":"es-comp","m1b":"es-inv","m2a":"im-sub","m2b":"im-item","m2c":"im-sched","m2d":"im-cost","m3a":"it-bal","m3b":"it-tx","m3c":"it-ls","m3d":"it-pr","m4a":"ex-sub","m4b":"ex-to","m4c":"ex-rp","m5a":"adv-sco","m5b":"adv-b2b","m5c":"ex-cons","m5d":"adv-pdsc","m5e":"adv-sco","m6a":"rep-mm","m7a":"cnt-cccfg","m7b":"cnt-pi","m8a":"rw","m8b":"ai"});
