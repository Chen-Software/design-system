/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface SelectVariant {
  /**
 * @default "outline"
 */
variant: "outline" | "surface"
/**
 * @default "md"
 */
size: "xs" | "sm" | "md" | "lg" | "xl"
}

type SelectVariantMap = {
  [key in keyof SelectVariant]: Array<SelectVariant[key]>
}

type SelectSlot = "root" | "control" | "trigger" | "label" | "valueText" | "indicator" | "indicatorGroup" | "positioner" | "content" | "list" | "item" | "itemText" | "itemIndicator" | "itemGroup" | "itemGroupLabel" | "clearTrigger"

export type SelectVariantProps = {
  [key in keyof SelectVariant]?: ConditionalValue<SelectVariant[key]> | undefined
}

export interface SelectRecipe {
  __slot: SelectSlot
  __type: SelectVariantProps
  (props?: SelectVariantProps): Pretty<Record<SelectSlot, string>>
  raw: (props?: SelectVariantProps) => SelectVariantProps
  variantMap: SelectVariantMap
  variantKeys: Array<keyof SelectVariant>
  splitVariantProps<Props extends SelectVariantProps>(props: Props): [SelectVariantProps, Pretty<DistributiveOmit<Props, keyof SelectVariantProps>>]
  getVariantProps: (props?: SelectVariantProps) => SelectVariantProps
}


export declare const select: SelectRecipe