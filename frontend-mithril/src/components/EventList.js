const m = require("mithril")


const Event = {
  list: [],
  loadList: async () => {
    const result = await m.request({
      method: "GET",
      url: "http://localhost:3001/events",
    })
    console.log(result)
    Event.list = result
  },
}


const EventList = {
  oninit: Event.loadList,
  view: () => {
    return m("ul", { "class": "container" },Event.list.map((e) => {
      return m("div", e.events)
    }))
  },
} 

module.exports = { Event, EventList }