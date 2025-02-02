const { removeContact } = require('../../model/contacts')

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params

  const data = await removeContact(contactId)
  if (!data) {
    return res.status(404).json({ status: 'failure, no contact found' })
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: data
    }
  })
}

module.exports = { deleteContact }
