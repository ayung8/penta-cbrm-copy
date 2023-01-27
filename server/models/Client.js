const mongoose = require('mongoose');
const { Schema } = mongoose;
const Email = require('./Email');

const clientSchema = new Schema({
    name: String,
    documents: [
        {
            identity_proof: {
                license_number: Number,
                pan_card_number: String,
                passport_number: Number,
                voters_id_card_number: Number
            },
            address_proof: {
                lease_agreement: String,
                electricity_bill: String,
                sales_tax_certificate: String
            },
            itr: {
                balance_sheet: Number,
                income_statement: Number
            },
            loan_application_form: {
                first_name: String,
                last_name: String,
                address: String,
                city: String,
                state: String,
                phone_number: Number,
                amount_of_loan: Number,
                requested_mos_to_pay_back: Number,
                purpose_of_loan: String,
                current_employer: String,
                income: Number,
                assets: Number
            },
            proof_of_age: {
                passport_number: Number,
                pan_card_number: String
            },
            emails: [{ type: Schema.Types.ObjectId, ref: 'email' }]
        }
    ]
});

module.exports = mongoose.model('client', clientSchema);