/*
 * GET /staging/v1/settlement/lookup
 */
exports.get = function(req, res)
{
    res.set('Content-Type', 'application/json');
    
    if (req.get('x-api-key') === undefined)
    {
        res.status(403);
        return res.render('basic/v1Common/errors/invalidHeader');
    }
    else if (req.get('x-api-key') !== 'H7CAGfY1wV4Ofcz4hZMB04bhpYVJm8xiqJdEUtPi')
    {
        res.status(403);
        return res.render('basic/v1Common/errors/invalidHeader');
    }
    
    var media = req.query.MediaType;
    if(media !== 'VISA' && media !== 'MASTERCARD' && media !== 'MAESTRO')
    {
        res.status(400);
        return res.render('basic/v1SettlementLookup/errors/invalidMediaType');
    }
    
    res.status(200)
    var last4Digits = req.query.Last4Digits;
    switch (last4Digits)
    {
        case '1222':
            return res.render('basic/v1SettlementLookup/dualToken', { lastFourDigits: last4Digits, cardType: media });
			
        case '1224':
            return res.render('basic/v1SettlementLookup/fourToken', { lastFourDigits: last4Digits, cardType: media });
        
        case '1234':
            return res.render('basic/v1SettlementLookup/singleJourney', { lastFourDigits: last4Digits, cardType: media });
            
        case '1235':
            return res.render('basic/v1SettlementLookup/revenueInspectionTaps', { lastFourDigits: last4Digits, cardType: media });
            
		case '1333':
            return res.render('basic/v1SettlementLookup/complexSettlement', { lastFourDigits: last4Digits, cardType: media });
        case '1656':
            return res.render('basic/v1SettlementLookup/debtRecoveryFailure', { lastFourDigits: last4Digits, cardType: media });
		case '1666':
			res.status(400);
            return res.render('basic/v1SettlementLookup/errors/invalidMediaType');
            
        case '2001':
            return res.render('scenarios/v1SettlementLookup/SL_S_001', { lastFourDigits: last4Digits, cardType: media });
            
        case '2002':
            return res.render('scenarios/v1SettlementLookup/SL_S_002', { lastFourDigits: last4Digits, cardType: media });
            
        case '2003':
            return res.render('scenarios/v1SettlementLookup/SL_S_003', { lastFourDigits: last4Digits, cardType: media });
            
        case '2004':
            return res.render('scenarios/v1SettlementLookup/SL_S_004', { lastFourDigits: last4Digits, cardType: media });
            
        case '2005':
            return res.render('scenarios/v1SettlementLookup/SL_S_005', { lastFourDigits: last4Digits, cardType: media });
            
        case '2008':
            return res.render('scenarios/v1SettlementLookup/SL_S_008', { lastFourDigits: last4Digits, cardType: media });
            
        case '2101':
            return res.render('scenarios/v1SettlementLookup/SL_D_001', { lastFourDigits: last4Digits, cardType: media });
            
        case '2102':
            return res.render('scenarios/v1SettlementLookup/SL_D_002', { lastFourDigits: last4Digits, cardType: media });
            
        case '2301':
            return res.render('scenarios/v1SettlementLookup/SL_P_001', { lastFourDigits: last4Digits, cardType: media });
			
        case '2303':
            return res.render('scenarios/v1SettlementLookup/SL_P_003', { lastFourDigits: last4Digits, cardType: media });
			
        case '2402':
            return res.render('scenarios/v1SettlementLookup/SL_R_002', { lastFourDigits: last4Digits, cardType: media });
			
        case '2403':
            return res.render('scenarios/v1SettlementLookup/SL_R_003', { lastFourDigits: last4Digits, cardType: media });
            
        case '2501':
            return res.render('scenarios/v1SettlementLookup/SL_FA_001', { lastFourDigits: last4Digits, cardType: media });
            
        case '2504':
            return res.render('scenarios/v1SettlementLookup/SL_FA_004', { lastFourDigits: last4Digits, cardType: media });
			
        case '2601':
            return res.render('scenarios/v1SettlementLookup/SL_RS_001', { lastFourDigits: last4Digits, cardType: media });
            
        case '2707':
            return res.render('scenarios/v1SettlementLookup/SL_DH_007', { lastFourDigits: last4Digits, cardType: media });
            
        case '2708':
            return res.render('scenarios/v1SettlementLookup/SL_DH_008', { lastFourDigits: last4Digits, cardType: media });
			
        case '2902':
            return res.render('scenarios/v1SettlementLookup/SL_DR_002', { lastFourDigits: last4Digits, cardType: media });
			
        case '3001':
            return res.render('scenarios/v1SettlementLookup/SL_EH_001', { lastFourDigits: last4Digits, cardType: media });
			
        case '3002':
            return res.render('scenarios/v1SettlementLookup/SL_EH_002', { lastFourDigits: last4Digits, cardType: media });
			
        case '3003':
            return res.render('scenarios/v1SettlementLookup/SL_EH_003', { lastFourDigits: last4Digits, cardType: media });
            
        case '3103':
            return res.render('scenarios/v1SettlementLookup/SL_LT_003', { lastFourDigits: last4Digits, cardType: media });
            
        case '3105':
            return res.render('scenarios/v1SettlementLookup/SL_LT_005', { lastFourDigits: last4Digits, cardType: media });
			
        case '3108':
            return res.render('scenarios/v1SettlementLookup/SL_LT_008', { lastFourDigits: last4Digits, cardType: media });
			
        case '3109':
            return res.render('scenarios/v1SettlementLookup/SL_LT_009', { lastFourDigits: last4Digits, cardType: media });
            
        case '3201':
            return res.render('scenarios/v1SettlementLookup/SL_I_001', { lastFourDigits: last4Digits, cardType: media });
            
        case '3204':
            return res.render('scenarios/v1SettlementLookup/SL_I_004', { lastFourDigits: last4Digits, cardType: media });
            
        case '3211':
            return res.render('scenarios/v1SettlementLookup/SL_I_011', { lastFourDigits: last4Digits, cardType: media });
            
        case '3215':
            return res.render('scenarios/v1SettlementLookup/SL_I_015', { lastFourDigits: last4Digits, cardType: media });

        case '3721':
            return res.render('scenarios/v1SettlementLookup/R_M_021', { lastFourDigits: last4Digits, cardType: media });
            
        case '4567':
            return res.render('basic/v1SettlementLookup/invalidFundRequest', { lastFourDigits: last4Digits, cardType: media });
        
        case '6791':
            return res.render('basic/v1SettlementLookup/useDifferentDates', { lastFourDigits: last4Digits, cardType: media });
            
        case '7777':
            return res.render('basic/v1SettlementLookup/manualDenyListToken', { lastFourDigits: last4Digits, cardType: media });

        // Real world responses provided by Vix in response to "JSON Examples v3.3.docx" - see SC-1200 for scenario details
        case '8006':
            return res.render('scenarios/v1SettlementLookup/SL_VIX_06', { lastFourDigits: last4Digits, cardType: media });

        case '8007':
            return res.render('scenarios/v1SettlementLookup/SL_VIX_07', { lastFourDigits: last4Digits, cardType: media });

        case '8008':
            return res.render('scenarios/v1SettlementLookup/SL_VIX_08', { lastFourDigits: last4Digits, cardType: media });

        case '8009':
            return res.render('scenarios/v1SettlementLookup/SL_VIX_09', { lastFourDigits: last4Digits, cardType: media });

        case '8011':
            return res.render('scenarios/v1SettlementLookup/SL_VIX_11', { lastFourDigits: last4Digits, cardType: media });
            
        case '8012':
            return res.render('scenarios/v1SettlementLookup/SL_VIX_12', { lastFourDigits: last4Digits, cardType: media });
            
        case '8013':
            return res.render('scenarios/v1SettlementLookup/SL_VIX_13', { lastFourDigits: last4Digits, cardType: media });

        case '8014':
            return res.render('scenarios/v1SettlementLookup/SL_VIX_14', { lastFourDigits: last4Digits, cardType: media });
        
        case '9999':
            return res.render('basic/v1SettlementLookup/noData', { lastFourDigits: last4Digits, cardType: media });
            
        default:
            return res.render('basic/v1SettlementLookup/noData', { lastFourDigits: last4Digits, cardType: media });
    }
}
