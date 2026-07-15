import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const cardDefaultVariants = {
  "variant": "outline",
  "size": "md"
}
const cardCompoundVariants = []

const cardSlotNames = [
  [
    "root",
    "card__root"
  ],
  [
    "header",
    "card__header"
  ],
  [
    "body",
    "card__body"
  ],
  [
    "footer",
    "card__footer"
  ],
  [
    "title",
    "card__title"
  ],
  [
    "description",
    "card__description"
  ],
  [
    "image",
    "card__image"
  ],
  [
    "avatar",
    "card__avatar"
  ],
  [
    "action",
    "card__action"
  ],
  [
    "content",
    "card__content"
  ]
]
const cardSlotFns = /* @__PURE__ */ cardSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, cardDefaultVariants, getSlotCompoundVariant(cardCompoundVariants, slotName))])

const cardFn = memo((props = {}) => {
  return Object.fromEntries(cardSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const cardVariantKeys = [
  "variant",
  "size",
  "clickable",
  "selected"
]
const getVariantProps = (variants) => ({ ...cardDefaultVariants, ...compact(variants) })

export const card = /* @__PURE__ */ Object.assign(cardFn, {
  __recipe__: false,
  __name__: 'card',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: cardVariantKeys,
  variantMap: {
  "variant": [
    "elevated",
    "outline",
    "subtle"
  ],
  "size": [
    "sm",
    "md",
    "lg"
  ],
  "clickable": [
    "true"
  ],
  "selected": [
    "true"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, cardVariantKeys)
  },
  getVariantProps
})