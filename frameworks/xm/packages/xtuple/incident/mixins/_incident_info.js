// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

/**
  @scope XM.IncidentInfo
  @mixin

  This code is automatically generated and will be over-written. Do not edit directly.
*/
XM._IncidentInfo = {
  /** @scope XM.IncidentInfo.prototype */
  
  className: 'XM.IncidentInfo',

  nestedRecordNamespace: XM,

  // .................................................
  // PRIVILEGES
  //

  privileges: {
    "all": {
      "create": false,
      "read": "ViewAllIncidents",
      "update": false,
      "delete": false
    },
    "personal": {
      "create": false,
      "read": true,
      "update": false,
      "delete": false,
      "properties": [
        "owner",
        "assignedTo"
      ]
    }
  },

  //..................................................
  // ATTRIBUTES
  //
  
  /**
    @type Number
  */
  guid: SC.Record.attr(Number),

  /**
    @type String
  */
  number: SC.Record.attr(String),

  /**
    @type String
  */
  description: SC.Record.attr(String),

  /**
    @type String
  */
  incidentStatus: SC.Record.attr(String),

  /**
    @type XM.IncidentCategory
  */
  category: SC.Record.toOne('XM.IncidentCategory', {
    isRequired: true
  }),

  /**
    @type XM.AccountInfo
  */
  account: SC.Record.toOne('XM.AccountInfo', {
    isNested: true
  }),

  /**
    @type XM.ContactInfo
  */
  contact: SC.Record.toOne('XM.ContactInfo', {
    isNested: true,
    isRequired: true
  }),

  /**
    @type XM.IncidentCategory
  */
  category: SC.Record.toOne('XM.IncidentCategory', {
    isRequired: true
  }),

  /**
    @type XM.Priority
  */
  priority: SC.Record.toOne('XM.Priority'),

  /**
    @type XM.UserAccountInfo
  */
  owner: SC.Record.toOne('XM.UserAccountInfo', {
    isNested: true
  }),

  /**
    @type XM.UserAccountInfo
  */
  assignedTo: SC.Record.toOne('XM.UserAccountInfo', {
    isNested: true
  }),

  /**
    @type Date
  */
  updated: SC.Record.attr(XT.DateTime, {
    format: '%Y-%m-%d',
    useIsoDate: false
  })

};
