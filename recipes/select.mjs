import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const selectDefaultVariants = {
  "size": "md",
  "variant": "outline"
}
const selectCompoundVariants = []

const selectSlotNames = [
  [
    "root",
    "select__root"
  ],
  [
    "control",
    "select__control"
  ],
  [
    "trigger",
    "select__trigger"
  ],
  [
    "label",
    "select__label"
  ],
  [
    "valueText",
    "select__valueText"
  ],
  [
    "indicator",
    "select__indicator"
  ],
  [
    "indicatorGroup",
    "select__indicatorGroup"
  ],
  [
    "positioner",
    "select__positioner"
  ],
  [
    "content",
    "select__content"
  ],
  [
    "list",
    "select__list"
  ],
  [
    "item",
    "select__item"
  ],
  [
    "itemText",
    "select__itemText"
  ],
  [
    "itemIndicator",
    "select__itemIndicator"
  ],
  [
    "itemGroup",
    "select__itemGroup"
  ],
  [
    "itemGroupLabel",
    "select__itemGroupLabel"
  ],
  [
    "clearTrigger",
    "select__clearTrigger"
  ]
]
const selectSlotFns = /* @__PURE__ */ selectSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, selectDefaultVariants, getSlotCompoundVariant(selectCompoundVariants, slotName))])

const selectFn = memo((props = {}) => {
  return Object.fromEntries(selectSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const selectVariantKeys = [
  "variant",
  "size"
]
const getVariantProps = (variants) => ({ ...selectDefaultVariants, ...compact(variants) })

export const select = /* @__PURE__ */ Object.assign(selectFn, {
  __recipe__: false,
  __name__: 'select',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: selectVariantKeys,
  variantMap: {
  "variant": [
    "outline",
    "surface"
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
    return splitProps(props, selectVariantKeys)
  },
  getVariantProps
})