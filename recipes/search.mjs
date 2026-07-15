import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const searchDefaultVariants = {
  "size": "md",
  "variant": "outline",
  "colorPalette": "blue"
}
const searchCompoundVariants = []

const searchSlotNames = [
  [
    "root",
    "search__root"
  ],
  [
    "inputWrap",
    "search__inputWrap"
  ],
  [
    "input",
    "search__input"
  ],
  [
    "icon",
    "search__icon"
  ],
  [
    "clearTrigger",
    "search__clearTrigger"
  ],
  [
    "listbox",
    "search__listbox"
  ],
  [
    "item",
    "search__item"
  ],
  [
    "itemTitle",
    "search__itemTitle"
  ],
  [
    "itemDescription",
    "search__itemDescription"
  ],
  [
    "itemTags",
    "search__itemTags"
  ],
  [
    "countText",
    "search__countText"
  ],
  [
    "status",
    "search__status"
  ]
]
const searchSlotFns = /* @__PURE__ */ searchSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, searchDefaultVariants, getSlotCompoundVariant(searchCompoundVariants, slotName))])

const searchFn = memo((props = {}) => {
  return Object.fromEntries(searchSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const searchVariantKeys = [
  "size",
  "variant",
  "colorPalette"
]
const getVariantProps = (variants) => ({ ...searchDefaultVariants, ...compact(variants) })

export const search = /* @__PURE__ */ Object.assign(searchFn, {
  __recipe__: false,
  __name__: 'search',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: searchVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg"
  ],
  "variant": [
    "outline",
    "surface",
    "subtle"
  ],
  "colorPalette": [
    "gray",
    "blue",
    "cyan",
    "green",
    "orange",
    "purple",
    "red",
    "amber",
    "teal",
    "pink",
    "indigo",
    "yellow",
    "success",
    "error",
    "warning"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, searchVariantKeys)
  },
  getVariantProps
})