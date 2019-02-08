/*
 * POST /staging/v1/request/debt-recovery
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
    
    var token = req.body['Token'];
    if ((token === '') || (token === null) || (token === undefined))
    {
        res.status(400);
        return res.send('NULL TOKEN SCENARIO NOT IMPLEMENTED');
    }

    res.status(200)
    switch (token)
    {
        case 'XXX-0000-XXX':
            return res.render('basic/v1RequestDebtRecovery/errors/invalidToken');

        case 'XXX-1236-FFF':
            return res.send('basic/v1RequestDebtRecovery/validDebtRecoveryResponse');

        default:
            return res.render('basic/v1RequestDebtRecovery/errors/invalidToken')
    }
}
