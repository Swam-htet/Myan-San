const faqService = require('../services/faq.service');

async function getAllFaq(req, res, next) {
    try {
        let faq = await faqService.getAllFaq();
        if (faq) {
            res.status(200).json(faq);
        } else {
            res.status(400).json({message: "Faq not found"});
        }
    } catch (error) {
        res.status(400).json({message: `Faq not found`});
    }

}


// create faq
async function createFaq(req, res, next) {
    let body = req.body;
    try {
        let faq = await faqService.createFaq(body);
        if (!faq) {
            res.status(400).json({message: `Can't save faq`});
        } else {
            res.status(201).json(faq);
        }
    } catch (error) {
        res.status(400).json({message: `Can't save faq`});
    }
}


module.exports = {
    getAllFaq,
    createFaq
}