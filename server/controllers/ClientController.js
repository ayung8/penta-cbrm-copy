const Client = require('../models/Client');

exports.test = (req, res) => {
    res.send('greetings from the client controller');
};

//todo: replace the 'String's with req.title... etc etc
//post
exports.create = (req, res, next) => {
    console.log(req.body.title);
    console.log(req.body.recipient);

    let client = new Client({
        name: 'client1',
        documents: [
            {
                identity_proof: {
                    license_number: 1234,
                    pan_card_number: 1234,
                    passport_number: 12341234444,
                    voters_id_card_number: 1239
                },
                address_proof: {
                    lease_agreement: String,
                    electricity_bill: String,
                    sales_tax_certificate: String
                },
                itr: {
                    balance_sheet: String,
                    income_statment: String
                },
                loan_application_form: {
                    first_name: String,
                    last_name: String,
                    address: String,
                    city: String,
                    state: String,
                    phone_number: 2263771048,
                    amount_of_loan: 1223333,
                    requested_mos_to_pay_back: 12,
                    purpose_of_loan: String,
                    current_employer: String,
                    income: 90000,
                    assets: 40000
                },
                proof_of_age: {
                    passport_number: 123,
                    pan_card_number: 234
                }
                // emails: [
                //     {
                //         email: 1
                //     }
                // ]
            }
        ]
    });

    console.log({ client });

    client.save(err => {
        if (err) {
            return next(err);
        }
        res.send('new Email created successfully!');
    });
};

//GET API
exports.read = (req, res) => {
    Client.findById(req.params.id, (err, email) => {
        if (err) return next(err);
        res.send(email);
    });
};

//GET API
exports.update = function(req, res) {
    console.log(req, res);
    Client.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
        err,
        email
    ) {
        if (err) return next(err);
        res.send('Email udpated.');
    });
};

exports.delete = (req, res) => {
    Client.findByIdAndRemove(req.params.id, function(err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};
