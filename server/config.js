const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://admin:admin@cluster0-shard-00-00-iguuq.mongodb.net:27017,cluster0-shard-00-01-iguuq.mongodb.net:27017,cluster0-shard-00-02-iguuq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
  port: process.env.PORT || 8000,
};

export default config;
