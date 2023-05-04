import m from 'mithril'
const { Target } = require("./TargetList")

let targetData = {
  title: "",
  startDate: "",
  endDate: "",
  note: ""
}

let TargetForm = {
  submitForm: function (e) {
    e.preventDefault()
    m.request({
      method: "POST",
      url: "http://localhost:3001/target",
      body: { title: targetData.title, startDate: targetData.startDate, endDate: targetData.endDate, note: targetData.note }
    })
      .then(function (response) {
        console.log(response)
        Target.list.push(targetData)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  view: function () {
    return m("form", { onsubmit: this.submitForm }, [
      m("label.label", "Title"),
      m("input.input[type=text][placeholder=Title]", {
        value: targetData.title, onchange: function (e) {
          targetData.title = e.currentTarget.value
        }
      }),
      m("label.label", "Start Date"),
      m("input.input[placeholder=YYYY-MM-DD]", {
        value: targetData.startDate, onchange: function (e) {
          targetData.startDate = e.currentTarget.value
        }
      }),
      m("label.label", "End Date"),
      m("input.input[placeholder=YYYY-MM-DD]", {
        value: targetData.endDate, oninput: function (e) {
          targetData.endDate = e.currentTarget.value
        }
      }),
      m("label.label", "Notes"),
      m("input.input[placeholder=Notes]", {
        value: targetData.note, oninput: function (e) {
          targetData.note = e.currentTarget.value
        }
      }),
      m("button.button[type=submit]", "Save"),
    ])
  }
}


export { TargetForm }