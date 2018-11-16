const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb+srv://admin:admin@cluster0-iguuq.mongodb.net/test?retryWrites=true',
  port: process.env.PORT || 8000,
};

export default config;
