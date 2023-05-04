import m, { request } from "mithril"


const Target = {
  list: [],
  loadList: async () => {
    const result = await request({
      method: "GET",
      url: "http://localhost:3001/target",
    })
    console.log(result)
    Target.list = result
  },
}


const TargetList = {
  oninit: Target.loadList,
  view: () => {
    return m("ul", Target.list.map((e) => {
      const startDate = e.startDate ? new Date(e.startDate).toLocaleDateString("fi-FI") : ""
      const endDate = e.endDate ? new Date(e.endDate).toLocaleDateString("fi-FI") : ""

      return m("li", [
        m("h2", e.title),
        m("div", `Tapahtuu pvm: ${startDate}`),
        m("div", `Loppuu pvm: ${endDate}`),
        m("div", `Muistettavaa: ${e.note}`)
      ])
    }))
  },
}

export { Target, TargetList }