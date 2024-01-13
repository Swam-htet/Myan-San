const faqService = require("../services/faq.service");
const companyService = require("../services/company.service");

async function getAllFaq(req, res, next) {
  try {
    let faq = await faqService.getAllFaq();
    if (faq) {
      res.status(200).json(faq);
    } else {
      res.status(400).json({ message: "Faq not found" });
    }
  } catch (error) {
    res.status(400).json({ message: `Faq not found` });
  }
}

// create faq
async function createFaq(req, res, next) {
  let body = req.body;
  try {
    let faq = await faqService.createFaq(body);
    if (!faq) {
      res.status(400).json({ message: `Can't save faq` });
    } else {
      res.status(201).json(faq);
    }
  } catch (error) {
    res.status(400).json({ message: `Can't save faq` });
  }
}

async function deleteFaqByID(req, res, next) {
  let id = req.params.id;
  try {
    let bus = await faqService.deleteFAQByID(id);
    if (!bus) {
      res.status(400).json({ message: `FAQ ID :${id} not found` });
    } else {
      res.status(200).json(bus);
    }
  } catch (error) {
    res.status(400).json({ message: `FAQ ID :${id} not found` });
  }
}

module.exports = {
  getAllFaq,
  createFaq,
  deleteFaqByID,
};
