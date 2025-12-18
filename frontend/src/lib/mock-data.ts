// Mock data for the application

export const DOMAIN_DATA = {
  id: "maps",
  alias: "Advertising Insights",
  description: "Commercial Aviation Mobility Advertising Platform Services",
  dialect: "Snowflake",
  secret: "snowflake",
  schema: "maps.derived",
  retrieverTopColumns: 10,
  isActive: true
};

export const OWNERS = [
  { id: 1, username: "acachapuz", role: "Owner" }
];

export const MEMBERS = [
  { id: 1, username: "acachapuz", role: "Member" },
  { id: 2, username: "bewilson", role: "Member" },
  { id: 3, username: "krennie", role: "Member" },
  { id: 4, username: "mgood", role: "Member" },
  { id: 5, username: "pgonnade", role: "Member" },
  { id: 6, username: "rdoyle", role: "Member" },
  { id: 7, username: "sbisen", role: "Member" },
  { id: 8, username: "skrouwer", role: "Member" },
  { id: 9, username: "snakada", role: "Member" },
  { id: 10, username: "tjones", role: "Member" },
  { id: 11, username: "wsmith", role: "Member" },
];

export const SCHEMAS = [
  {
    id: "MAPS.DERIVED.ACIS_CURATED",
    columnCount: 15,
    description: "The \"ACIS_CURATED\" table in the MAPS.DERIVED schema of the SNF-GEM Mobility Analytics Database contains detailed information about aircraft and airline operations. The table includes columns such as AIRFRAME, AIRLINE_CODE, ESI_DATE, AIRCRAFT_STATUS, AIRLINE_GROUP, SELECTION_STATUS_FLEET, ACCOUNT, REGION, and FORCAST_QUANTITY. These columns capture various attributes of aircraft, including their make, status, and associated airline details. The table also records forecast quantities and regional information, providing a comprehensive dataset for analyzing and managing aircraft operations and fleet selection status. This data is crucial for forecasting and planning within the aviation industry, particularly for stakeholders involved in aircraft management and airline operations.",
    columns: [
      { name: "SCOPE", type: "VARCHAR(16777216)", usage: "Defines the extent or range of the project, such as IFC (In-Flight Connectivity), to categorize and manage different projects within Viasat.", comment: "Scope of the project or initiative.", examples: "IFC;Vcare, IFC, IFC;IPTV;Portal" },
      { name: "MAKE", type: "VARCHAR(16777216)", usage: "Identifies the company that produced the aircraft, such as Airbus, for inventory and maintenance purposes.", comment: "Manufacturer of the aircraft.", examples: "Airbus, Boeing, Embraer, COMAC" },
      { name: "TERMINAL_SOLUTION", type: "VARCHAR(16777216)", usage: "Specifies the terminal solution implemented, such as unknown, to track and manage technology.", comment: "Type of terminal solution used.", examples: "GM40, Jetwave (GX), EAN, HBC+" }
    ]
  },
  {
    id: "MAPS.DERIVED.MAPS_ESI_STANDARD_REPORT_CURATED",
    columnCount: 45,
    description: "Detailed standard reporting table for ESI analytics.",
    columns: []
  }
];

export const TRAINING_EXAMPLES = [
  { 
    id: 1, 
    question: "What is the total forecasted quantity of aircraft for each manufacturer (MAKE) in projects that are currently in the proposal stage?", 
    type: "FEWSHOTS", 
    tables: ["MAPS.DERIVED.ACIS_CURATED"] 
  },
  { 
    id: 2, 
    question: "How many aircraft does American airlines currently have in service?", 
    type: "FEWSHOTS", 
    tables: ["MAPS.DERIVED.ACIS_CURATED"] 
  },
  { 
    id: 3, 
    question: "How many aircraft have IFC for each airline?", 
    type: "FEWSHOTS", 
    tables: ["MAPS.DERIVED.ACIS_CURATED"] 
  },
  { 
    id: 4, 
    question: "Which airlines have the highest number of A350 aircraft planned or in operation, and what is their selection status?", 
    type: "FEWSHOTS", 
    tables: ["MAPS.DERIVED.ACIS_CURATED"] 
  },
  { 
    id: 5, 
    question: "What is the distribution of terminal solutions across different aircraft makes?", 
    type: "FEWSHOTS", 
    tables: ["MAPS.DERIVED.ACIS_CURATED"] 
  },
  { 
    id: 6, 
    question: "How many aircraft are scheduled to start operations (ESI_DATE) in each quarter of 2025, grouped by region?", 
    type: "FEWSHOTS", 
    tables: ["MAPS.DERIVED.ACIS_CURATED"] 
  },
  { 
    id: 7, 
    question: "Provide the highest forecasted quantities for projects that are still not awarded", 
    type: "FEWSHOTS", 
    tables: ["MAPS.DERIVED.ACIS_CURATED"] 
  }
];

export const PROMPTS = [
  {
    id: "commair-maps",
    key: "commair-maps",
    type: "prompt",
    prompt: "When writing a SQL query for trend analysis, if the input question doesn't specify a time range, assume the last 12 months of data."
  }
];
