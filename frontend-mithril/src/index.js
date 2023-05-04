import m, { mount } from "mithril"
import { TargetForm } from "./components/TargetForm"
import { TargetList } from "./components/TargetList"


const root = document.body

function MainComponent() {
  return {
    view: () => {
      return m("div", { "class": ".container" }, [
        m(TargetForm),
        m(TargetList)
      ])
    }
  }
}

mount(root, MainComponent)