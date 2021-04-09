/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
  nextPage: 0,
  columnMappings: {
      "Who is the landlord": "Landlord Name",
      "Registration no": "Reg no",
      "LA CORE code": "Local Authority Code",
      "Management group": "Mgmnt group",
      "Scheme code": "Our Scheme code column",
      "Tenant code": "Tenant Cde",
      "Starter/Introductory tenancy": "Is this a starter or introductory tenancy?",
      "Type of tenancy": "Tenancy type",
      "Tenancy Duration": "Duration of tenancy",
      "Age of Person 1": "Person 1 age",
      "Age of Person 2": "Person 2 age",
      "Age of Person 3": "Person 3 age",
      "Age of Person 4": "Person 4 age",
      "Age of Person 5": "Person 5 age",
      "Age of Person 6": "Person 6 age",
      "Age of Person 7": "Person 7 age",
      "Age of Person 8": "Person 8 age",
      "Gender of Person 1": "Person 1 gender",
      "Gender of Person 2": "Person 2 gender",
      "Gender of Person 3": "Person 3 gender",
      "Gender of Person 4": "Person 4 gender",
      "Gender of Person 5": "Person 5 gender",
      "Gender of Person 6": "Person 6 gender",
      "Gender of Person 7": "Person 7 gender",
      "Gender of Person 8": "Person 8 gender",
      "Person 2 relationship to Person 1": "Person 2 relationship to Person 1",
      "Person 3 relationship to Person 1": "Person 3 relationship to Person 1",
      "Person 4 relationship to Person 1": "Person 4 relationship to Person 1",
      "Person 5 relationship to Person 1": "Person 5 relationship to Person 1",
      "Person 6 relationship to Person 1": "Person 6 relationship to Person 1",
      "Person 7 relationship to Person 1": "Person 7 relationship to Person 1",
      "Person 8 relationship to Person 1": "Person 8 relationship to Person 1",
      "Economic Status of Person 1": "Person 1 Economic status",
      "Economic Status of Person 2": "Person 2 Economic status",
      "Economic Status of Person 3": "Person 3 Economic status",
      "Economic Status of Person 4": "Person 4 Economic status",
      "Economic Status of Person 5": "Person 5 Economic status",
      "Economic Status of Person 6": "Person 6 Economic status",
      "Economic Status of Person 7": "Person 7 Economic status",
      "Economic Status of Person 8": "Person 8 Economic status",
      "Ethnic group of person 1 as defined by applicant": "Person 1 ethnic group",
      "Nationality of person 1": "Person 1 nationality",
      "Household member has ever served in the UK Armed Forces": "Armed forces status",
      "Household member has been seriously injured or ill in the UK Armed Forces": "Armed forces injury status",
      "Does the household contain a pregnant person": "Pregnancy status",
      "Which benefits does the tenant receive": "Tenant benefits",
      "How much income comes from these benefits": "Benefit income",
      "Tenant's net income": "Net income",
      "Income refused": "Income refused",
      "Main reason the household left their last settled home": "Reason for move",
      "Accessibility requirements": "Accessibility",
      "Housing situation": "Prior Housing status",
  },
  mhclgSections: [
    {columnName: "Tenancy Details", columns: [
      "Tenancy start date",
      "Type of letting",
      "Who is the landlord",
      "Registration no",
      "LA CORE code",
      "Management group",
      "Scheme code",
      "Tenant code",
      "Starter/Introductory tenancy",
      "Type of tenancy",
      "Tenancy Duration",
    ]},
    {columnName: "Housing Details", columns: [
      "Age of Person 1",
      "Age of Person 2",
      "Age of Person 3",
      "Age of Person 4",
      "Age of Person 5",
      "Age of Person 6",
      "Age of Person 7",
      "Age of Person 8",
      "Gender of Person 1",
      "Gender of Person 2",
      "Gender of Person 3",
      "Gender of Person 4",
      "Gender of Person 5",
      "Gender of Person 6",
      "Gender of Person 7",
      "Gender of Person 8",
      "Person 2 relationship to Person 1",
      "Person 3 relationship to Person 1",
      "Person 4 relationship to Person 1",
      "Person 5 relationship to Person 1",
      "Person 6 relationship to Person 1",
      "Person 7 relationship to Person 1",
      "Person 8 relationship to Person 1",
      "Economic Status of Person 1",
      "Economic Status of Person 2",
      "Economic Status of Person 3",
      "Economic Status of Person 4",
      "Economic Status of Person 5",
      "Economic Status of Person 6",
      "Economic Status of Person 7",
      "Economic Status of Person 8",
      "Ethnic group of person 1 as defined by applicant",
      "Nationality of person 1",
      "Household member has ever served in the UK Armed Forces",
      "Household member has been seriously injured or ill in the UK Armed Forces",
      "Does the household contain a pregnant person",
      "Which benefits does the tenant receive",
      "How much income comes from these benefits",
      "Tenant's net income",
      "Income refused",
      "Main reason the household left their last settled home",
      "Accessibility requirements",
      "Housing situation",
    ]},
    {columnName: "Previous Accomodation", columns: [
      "LA in which household lived prior to this letting",
      "Postcode of previous accommodation",
      "How long has the household lived in the LA",
      "How long has the household been on the waiting list",
      "Homeless status prior to this letting",
      "Reason for Housing Priority",
      "Was the letting made under CBL",
      "Was the letting made under CHR",
      "Was the letting made under CAP",
      "Source of referral for this letting",
    ]},
    {columnName: "Financials", columns:[
      "Rent and other charges period",
      "Basic rent",
      "Service charge",
      "Personal Service Charge",
      "Support charge",
      "Care home charge",
      "Exempt from accommodation charges",
      "After benefits, what is the outstanding rent",
    ]},
    {columnName: "Property Details", columns: [
      "Void or newbuild/renewal date",
      "Major repairs completion date",
      "Supported scheme",
      "Number of offers since last tenancy",
      "Property Reference",
      "UPRN",
      "Number of bedrooms",
      "Type of unit",
      "Type of building",
      "Wheelchair accessible",
      "For relets, previous basis for rent",
      "Reason for vacancy",
      "ONS LA code",
      "Postcode of property",
    ]}
  ]
}



