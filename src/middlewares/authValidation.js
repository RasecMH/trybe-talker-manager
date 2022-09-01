const authValidation = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' }); 
}
  if (!email.match(/\S+@\S+\.\S+/i)) {
 return res.status(400).json({ 
    message: 'O "email" deve ter o formato "email@email.com"', 
  }); 
}
if (!password) {
  return res.status(400).json({ message: 'O campo "password" é obrigatório' }); 
}
if (password.length < 6) {
 return res.status(400).json({ 
  message: 'O "password" deve ter pelo menos 6 caracteres' }); 
}
return next();
};

module.exports = authValidation;