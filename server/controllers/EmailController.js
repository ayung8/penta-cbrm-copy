const Email = require('../models/Email');

exports.test = (req, res) => {
    res.send('greetings from the email controller');
};

//todo: replace the 'String's with req.title... etc etc
//post
exports.create = (req, res) => {
    console.log(req.body.title);
    console.log(req.body.recipient);
    let email = new Email({
        title: req.body.title,
        recipient: req.body.recipient,
        sender: req.body.sender,
        body: req.body.body,
        sentiment: {
            places: req.body.sentiment.places,
            people: req.body.sentiment.people,
            summarization: req.body.sentiment.summarization,
            happiness_number: req.body.sentiment.happiness_number,
            overall_satsified: req.body.sentiment.overall_satsifieds
        }
    });

    console.log({ email });

    email.save(err => {
        if (err) {
            return next(err);
        }
        res.send('new Email created successfully!');
    });
};

//GET API
exports.read = (req, res) => {
    Email.findById(req.params.id, (err, email) => {
        if (err) return next(err);
        res.send(email);
    });
};

//GET API
exports.update = function(req, res) {
    console.log(req, res);
    Email.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
        err,
        email
    ) {
        if (err) return next(err);
        res.send('Email udpated.');
    });
};

exports.delete = (req, res) => {
    Email.findByIdAndRemove(req.params.id, function(err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};
