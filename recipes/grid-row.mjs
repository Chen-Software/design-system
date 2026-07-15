import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const gridRowFn = /* @__PURE__ */ createRecipe('grid-row', {
  "align": "top",
  "justify": "start",
  "wrap": true
}, [])

const gridRowVariantMap = {
  "align": [
    "top",
    "middle",
    "bottom",
    "stretch"
  ],
  "justify": [
    "start",
    "end",
    "center",
    "space-around",
    "space-between",
    "space-evenly"
  ],
  "wrap": [
    "true",
    "false"
  ]
}

const gridRowVariantKeys = Object.keys(gridRowVariantMap)

export const gridRow = /* @__PURE__ */ Object.assign(memo(gridRowFn.recipeFn), {
  __recipe__: true,
  __name__: 'gridRow',
  __getCompoundVariantCss__: gridRowFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: gridRowVariantKeys,
  variantMap: gridRowVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, gridRowVariantKeys)
  },
  getVariantProps: gridRowFn.getVariantProps,
})