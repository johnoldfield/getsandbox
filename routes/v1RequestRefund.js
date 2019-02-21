/*
 * POST /staging/v1/request/refund
 */
exports.post = function(req, res)
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
    
    var tokenID = req.body['Token'];
    var refundRequestidentifier = req.body['FundRequestIdentifier'];
    var amount = req.body['RefundedAmount'];
    
    if (refundRequestidentifier == '1234567')
    {
        res.status(200);
        return res.render('basic/v1RequestRefund/errors/refundFailUnknownFundRequest');
        
    }
    else if ((tokenID === '') || (tokenID === null) ||(amount === 0) || (amount === '') || (refundRequestidentifier === '') || (refundRequestidentifier === null))
    {
        res.status(400);
        return res.render('basic/v1RequestRefund/errors/invalidData');
    }
    else if (amount == 300)
    {
        res.status(200);
        return res.render('basic/v1RequestRefund/errors/refundAmountExceeded');
    }
    else if (amount == 349)
    {
        res.status(200);
        return res.render('basic/v1RequestRefund/errors/refundAmountShouldBePositive');
    }
    else if (amount == 345)
    {
        res.status(200);
        return res.render('basic/v1RequestRefund/errors/tripNotSettled');
    }
    else
    {
        res.status(200);
        return res.render('basic/v1RequestRefund/validRefundResponse');
    }
}