const m = require("mithril");
const { Goal } = require("./GoalList");

let formData = {
  deadline: 123,
  goals: "Tilaa taksi",
  notes: "Ei sähläävää kuskii"
};

let EventForm = {
  submitForm: function (e) {
    e.preventDefault();
    console.log(formData)
    m.request({
      method: "POST",
      url: "http://localhost:3001/goals",
      body: { deadline: formData.deadline, goals: formData.goals, notes: formData.notes }
    })
      .then(function (response) {
        console.log(response); 
        Goal.list.push(formData);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  view: function () {
    return m("form", { onsubmit: this.submitForm }, [
      m("label.label", "Goal"),
      m("input.input[type=text][placeholder=Goal]", {
        value: formData.goals, onchange: function (e) {
          formData.goals = e.currentTarget.value;
        }
      }),
      m("label.label", "Deadline"),
      m("input.input[placeholder=Deadline]", {
        value: formData.deadline, onchange: function (e) {
          formData.deadline = e.currentTarget.value;
        }
      }),
      m("label.label", "Notes"),
      m("input.input[placeholder=Notes]", {
        value: formData.notes, oninput: function (e) {
          console.log(formData);
          formData.notes = e.currentTarget.value;
        }
      }),
      m("button.button[type=submit]", "Save"),
    ])
  }
}

module.exports = { EventForm };