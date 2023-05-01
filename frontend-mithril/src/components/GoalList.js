const m = require("mithril")
var Goal = {
  list: [],
  loadList: async () => {
    const result = await m.request({
      method: "GET",
      url: "http://localhost:3001/goals",
    })
    console.log(result)
    Goal.list = result
  },
}


const GoalList = {
  oninit: Goal.loadList,
  view: () => {
    return m("ul", { "class": "container" }, Goal.list.map((g) => {
      return m("div", g.goals)
    }))
  },
} 

module.exports = { Goal, GoalList }