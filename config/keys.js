const { models, modelNames } = require('mongoose')

//keys.js-figured out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod')
} else {
    module.exports = require('./dev')
}