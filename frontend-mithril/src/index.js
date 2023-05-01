import m, { mount } from "mithril"
import { EventList } from "./components/EventList"
import { GoalList } from "./components/GoalList"
import { EventForm } from "./components/EventForm"

const root = document.body

function MainComponent() {
  return {
    view: () => {
      return m("div", { "class" : ".container"},[
        m(EventForm),
        m(GoalList),
        m(EventList,),
      ])
    }}
}

mount(root, MainComponent)