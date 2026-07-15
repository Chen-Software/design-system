import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const colorPickerDefaultVariants = {
  "size": "md"
}
const colorPickerCompoundVariants = []

const colorPickerSlotNames = [
  [
    "root",
    "color-picker__root"
  ],
  [
    "label",
    "color-picker__label"
  ],
  [
    "control",
    "color-picker__control"
  ],
  [
    "content",
    "color-picker__content"
  ],
  [
    "area",
    "color-picker__area"
  ],
  [
    "areaBackground",
    "color-picker__areaBackground"
  ],
  [
    "areaThumb",
    "color-picker__areaThumb"
  ],
  [
    "channelSlider",
    "color-picker__channelSlider"
  ],
  [
    "channelSliderLabel",
    "color-picker__channelSliderLabel"
  ],
  [
    "channelSliderTrack",
    "color-picker__channelSliderTrack"
  ],
  [
    "channelSliderThumb",
    "color-picker__channelSliderThumb"
  ],
  [
    "channelSliderValueText",
    "color-picker__channelSliderValueText"
  ],
  [
    "swatchGroup",
    "color-picker__swatchGroup"
  ],
  [
    "swatch",
    "color-picker__swatch"
  ],
  [
    "swatchIndicator",
    "color-picker__swatchIndicator"
  ],
  [
    "swatchTrigger",
    "color-picker__swatchTrigger"
  ],
  [
    "transparencyGrid",
    "color-picker__transparencyGrid"
  ],
  [
    "trigger",
    "color-picker__trigger"
  ],
  [
    "positioner",
    "color-picker__positioner"
  ],
  [
    "formatSelect",
    "color-picker__formatSelect"
  ],
  [
    "formatTrigger",
    "color-picker__formatTrigger"
  ],
  [
    "valueSwatch",
    "color-picker__valueSwatch"
  ],
  [
    "valueText",
    "color-picker__valueText"
  ],
  [
    "view",
    "color-picker__view"
  ],
  [
    "channelInput",
    "color-picker__channelInput"
  ],
  [
    "eyeDropperTrigger",
    "color-picker__eyeDropperTrigger"
  ]
]
const colorPickerSlotFns = /* @__PURE__ */ colorPickerSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, colorPickerDefaultVariants, getSlotCompoundVariant(colorPickerCompoundVariants, slotName))])

const colorPickerFn = memo((props = {}) => {
  return Object.fromEntries(colorPickerSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const colorPickerVariantKeys = [
  "size"
]
const getVariantProps = (variants) => ({ ...colorPickerDefaultVariants, ...compact(variants) })

export const colorPicker = /* @__PURE__ */ Object.assign(colorPickerFn, {
  __recipe__: false,
  __name__: 'colorPicker',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: colorPickerVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, colorPickerVariantKeys)
  },
  getVariantProps
})