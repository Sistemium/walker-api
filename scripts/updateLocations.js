const table = db.Location3;
const cursor = table.find();

let ops = [];
let page = 0;

while (cursor.hasNext()) {

  const { timestamp, _id } = cursor.next();

  ops.push({
    updateOne: {
      filter: { _id },
      update: { $set: { userId: "3F8936C6-7F9D-48C0-BD11-9FBD1A186499" } },
    },
  });

  if (ops.length === 500) {
    table.bulkWrite(ops);
    ops = [];
    page += 1;
    printjson(page);
  }

}

if (ops.length) {
  table.bulkWrite(ops);
}
