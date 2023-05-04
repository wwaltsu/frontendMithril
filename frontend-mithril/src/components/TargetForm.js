import m from 'mithril'
const { Target } = require("./TargetList")

let formData = {
  title: "",
  startDate: "",
  endDate: "",
  note: ""
}

let TargetForm = {
  submitForm: function (e) {
    e.preventDefault()
    console.log(formData)
    m.request({
      method: "POST",
      url: "http://localhost:3001/target",
      body: { title: formData.title, startDate: formData.startDate, endDate: formData.endDate, note: formData.note }
    })
      .then(function (response) {
        console.log(response)
        Target.list.push(formData)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  view: function () {
    return m("form", { onsubmit: this.submitForm }, [
      m("label.label", "Title"),
      m("input.input[type=text][placeholder=Title]", {
        value: formData.title, onchange: function (e) {
          formData.title = e.currentTarget.value
        }
      }),
      m("label.label", "Start Date"),
      m("input.input[placeholder=YYYY-MM-DD]", {
        value: formData.startDate, onchange: function (e) {
          formData.startDate = e.currentTarget.value
        }
      }),
      m("label.label", "End Date"),
      m("input.input[placeholder=YYYY-MM-DD]", {
        value: formData.endDate, oninput: function (e) {
          formData.endDate = e.currentTarget.value
        }
      }),
      m("label.label", "Notes"),
      m("input.input[placeholder=Notes]", {
        value: formData.note, oninput: function (e) {
          formData.note = e.currentTarget.value
        }
      }),
      m("button.button[type=submit]", "Save"),
    ])
  }
}


export { TargetForm }