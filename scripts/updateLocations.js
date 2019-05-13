const table = db.Location;
const cursor = table.find();

let ops = [];
let page = 0;

while (cursor.hasNext()) {

  const { timestamp, latitude, longitude, routeId, ord, id, cts, ts } = cursor.next();

  ops.push({
    insertOne: {
      document: {
        userId: "84DF8774-7BE9-49DF-A6DF-D87304A586C1",
        timestamp,
        latitude,
        longitude,
        routeId,
        ord,
        id,
        cts,
        ts,
      },
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
