// The primary function of interest for Challenge 2

/* 
I was very tempted to use currying and put the employees array last as is typical in a point-free Ramda style
See: https://randycoulman.com/blog/2016/06/21/thinking-in-ramda-pointfree-style/
This would make it easy to compose functions like groupByGroup, or groupByDivision, or groupByAge, etc.
But, I thought I'd go with a more classic solution here.
*/

function groupBy(employees, key) {
  return employees.reduce((memo, emp) => {
    const groupName = emp[key].toLowerCase();
    if (!memo[groupName])
      memo[groupName] = [];
    memo[groupName] = [{name: formatEmployee(emp)}, ...memo[groupName]];
    return memo;
  }, {});
}

// A formatting helper function
function formatEmployee(emp) {
  if (emp.nameOrder == 'reverse')
    return `${emp.last} ${emp.first}`;
  else
    return `${emp.first} ${emp.last}`;
}

// A test
const employees = [
  { first: "Amanda", last: "Byron", group: "Sales" },
  { first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse" },
  { first: "Miltiades", last: "Crescens", group: "Sales" }
];

const expected = JSON.stringify({
  sales: [{ name: "Miltiades Crescens" }, { name: "Amanda Byron" }],
  receiving: [{ name: "Xia Ye" }],
});

const actual = JSON.stringify(groupBy(employees, 'group'));

console.assert(expected == actual);