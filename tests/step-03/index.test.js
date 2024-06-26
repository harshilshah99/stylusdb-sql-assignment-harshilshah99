const { readCSV } = require("../../src/csvReader");
const { parseQuery } = require("../../src/queryParser");
const { executeSELECTQuery } = require("../../src/index");

test("Read CSV File", async () => {
  const data = await readCSV("./sample.csv");
  expect(data.length).toBeGreaterThan(0);
  expect(data.length).toBe(3);
  expect(data[2].name).toBe("Harshil");
  expect(data[0].age).toBe("30"); //ignore the string type here, we will fix this later
});

test("Parse SQL Query", () => {
  const query = "SELECT id, name FROM sample";
  const parsed = parseQuery(query);
  expect(parsed).toEqual({
    fields: ["id", "name"],
    table: "sample",
    whereClauses: [],
    joinType: null,
    joinTable: null,
    joinCondition: null,
    groupByFields: null,
    hasAggregateWithoutGroupBy: false,
    orderByFields: null,
    limit: null,
    isDistinct: false,
  });
});