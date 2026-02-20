const mongoose = require("mongoose");

mongoose.connect(
"mongodb://srihariprasanth123:hariprasanth123@ac-kzubrym-shard-00-00.dslq5es.mongodb.net:27017,ac-kzubrym-shard-00-01.dslq5es.mongodb.net:27017,ac-kzubrym-shard-00-02.dslq5es.mongodb.net:27017/test?replicaSet=atlas-kzubrym-shard-0&tls=true&authSource=admin"
)
.then(() => {
  console.log("CONNECTED SUCCESSFULLY");
  process.exit(0);
})
.catch(err => {
  console.error("FAILED:", err);
  process.exit(1);
});
