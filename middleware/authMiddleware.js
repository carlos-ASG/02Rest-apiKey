const api = require('../controllers/authController')

function authenticateAPIKey(req, res, next) {
  const apiKeyHeader = req.headers['authorization'];
  
  if (!apiKeyHeader) {
    return res.status(403).json({ code: 403, message: 'API key requerida' });
  }

  const apiKey = apiKeyHeader.split(' ')[1];
  if (!apiKey) {
    return res.status(403).json({ code: 403, message: 'API key inválida' });
  }
  
  if(api.apiKey === apiKey) {
    next();
  }else{
    return res.status(403).json({ code: 403, message: 'API key no válida '});
  }
  
}

module.exports = authenticateAPIKey;

