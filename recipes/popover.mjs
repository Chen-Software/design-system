import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const popoverDefaultVariants = {}
const popoverCompoundVariants = []

const popoverSlotNames = [
  [
    "anchor",
    "popover__anchor"
  ],
  [
    "arrow",
    "popover__arrow"
  ],
  [
    "arrowTip",
    "popover__arrowTip"
  ],
  [
    "closeTrigger",
    "popover__closeTrigger"
  ],
  [
    "content",
    "popover__content"
  ],
  [
    "description",
    "popover__description"
  ],
  [
    "indicator",
    "popover__indicator"
  ],
  [
    "positioner",
    "popover__positioner"
  ],
  [
    "title",
    "popover__title"
  ],
  [
    "trigger",
    "popover__trigger"
  ],
  [
    "header",
    "popover__header"
  ],
  [
    "body",
    "popover__body"
  ],
  [
    "footer",
    "popover__footer"
  ]
]
const popoverSlotFns = /* @__PURE__ */ popoverSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, popoverDefaultVariants, getSlotCompoundVariant(popoverCompoundVariants, slotName))])

const popoverFn = memo((props = {}) => {
  return Object.fromEntries(popoverSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const popoverVariantKeys = []
const getVariantProps = (variants) => ({ ...popoverDefaultVariants, ...compact(variants) })

export const popover = /* @__PURE__ */ Object.assign(popoverFn, {
  __recipe__: false,
  __name__: 'popover',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: popoverVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, popoverVariantKeys)
  },
  getVariantProps
})