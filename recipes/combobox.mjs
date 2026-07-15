import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const comboboxDefaultVariants = {
  "size": "md",
  "variant": "outline"
}
const comboboxCompoundVariants = []

const comboboxSlotNames = [
  [
    "root",
    "combobox__root"
  ],
  [
    "label",
    "combobox__label"
  ],
  [
    "input",
    "combobox__input"
  ],
  [
    "control",
    "combobox__control"
  ],
  [
    "content",
    "combobox__content"
  ],
  [
    "positioner",
    "combobox__positioner"
  ],
  [
    "list",
    "combobox__list"
  ],
  [
    "item",
    "combobox__item"
  ],
  [
    "itemText",
    "combobox__itemText"
  ],
  [
    "itemIndicator",
    "combobox__itemIndicator"
  ],
  [
    "itemGroup",
    "combobox__itemGroup"
  ],
  [
    "itemGroupLabel",
    "combobox__itemGroupLabel"
  ],
  [
    "indicatorGroup",
    "combobox__indicatorGroup"
  ],
  [
    "trigger",
    "combobox__trigger"
  ],
  [
    "clearTrigger",
    "combobox__clearTrigger"
  ],
  [
    "empty",
    "combobox__empty"
  ]
]
const comboboxSlotFns = /* @__PURE__ */ comboboxSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, comboboxDefaultVariants, getSlotCompoundVariant(comboboxCompoundVariants, slotName))])

const comboboxFn = memo((props = {}) => {
  return Object.fromEntries(comboboxSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const comboboxVariantKeys = [
  "variant",
  "size"
]
const getVariantProps = (variants) => ({ ...comboboxDefaultVariants, ...compact(variants) })

export const combobox = /* @__PURE__ */ Object.assign(comboboxFn, {
  __recipe__: false,
  __name__: 'combobox',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: comboboxVariantKeys,
  variantMap: {
  "variant": [
    "outline",
    "surface",
    "subtle"
  ],
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, comboboxVariantKeys)
  },
  getVariantProps
})