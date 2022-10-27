import { defineComponent, h, openBlock, createElementBlock, createElementVNode, createVNode, createTextVNode } from "vue";
const RenderButton = defineComponent({
  name: "renderButton",
  render() {
    return h("button", null, "myButton");
  }
});
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createElementVNode("button", null, "SFCButton", -1);
const _hoisted_2 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_2);
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JsxButton = defineComponent({
  name: "jsxButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  },
  icon: {
    type: String,
    default: ""
  }
};
const Button = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `py-2 px-4 font-semibold text-white cursor-pointer bg-${props2.color}-500 border-none`
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const entry = {
  install(app) {
    app.component(RenderButton.name, RenderButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JsxButton.name, JsxButton);
    app.component(Button.name, Button);
  }
};
export {
  JsxButton,
  RenderButton,
  Button as SButton,
  SFCButton,
  entry as default
};
//# sourceMappingURL=smarty-ui.esm.js.map
