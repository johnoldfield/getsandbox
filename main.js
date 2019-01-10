/*
 * Vix CXP API
 *
 * This is a mock API server
 */

var v1SettlementLookup = require('./routes/v1SettlementLookup');
var v1RequestRefund = require('./routes/v1RequestRefund');
var v1RequestDenyList = require('./routes/v1RequestDenyList');
var v1RequestDebtRecovery = require('./routes/v1RequestDebtRecovery');

/* 
 * Route definition styles:
 *
 *  define(path, method, function)
 *  soap(path, soapAction, function)
 */
Sandbox.define('/staging/v1/settlement/lookup', 'GET', v1SettlementLookup.get);
Sandbox.define('/staging/v1/request/refund', 'POST', v1RequestRefund.post);
Sandbox.define('/staging/v1/request/deny-list', 'POST', v1RequestDenyList.post);
Sandbox.define('/staging/v1/request/debt-recovery', 'POST', v1RequestDebtRecovery.post);

/* */