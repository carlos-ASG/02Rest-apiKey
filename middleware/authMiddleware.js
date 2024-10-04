function authenticateAPIKey(req, res, next) {
  const apiKeyHeader = req.headers['authorization'];
  
  if (!apiKeyHeader) {
    return res.status(403).json({ code: 403, message: 'API key requerida' });
  }

  const apiKey = apiKeyHeader.split(' ')[1];
  if (!apiKey) {
    return res.status(403).json({ code: 403, message: 'API key inválida' });
  }
  
  next();
}

module.exports = authenticateAPIKey;

