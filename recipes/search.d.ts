/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface SearchVariant {
  /**
 * @default "md"
 */
size: "sm" | "md" | "lg"
/**
 * @default "outline"
 */
variant: "outline" | "surface" | "subtle"
/**
 * @default "blue"
 */
colorPalette: "gray" | "blue" | "cyan" | "green" | "orange" | "purple" | "red" | "amber" | "teal" | "pink" | "indigo" | "yellow" | "success" | "error" | "warning"
}

type SearchVariantMap = {
  [key in keyof SearchVariant]: Array<SearchVariant[key]>
}

type SearchSlot = "root" | "inputWrap" | "input" | "icon" | "clearTrigger" | "listbox" | "item" | "itemTitle" | "itemDescription" | "itemTags" | "countText" | "status"

export type SearchVariantProps = {
  [key in keyof SearchVariant]?: ConditionalValue<SearchVariant[key]> | undefined
}

export interface SearchRecipe {
  __slot: SearchSlot
  __type: SearchVariantProps
  (props?: SearchVariantProps): Pretty<Record<SearchSlot, string>>
  raw: (props?: SearchVariantProps) => SearchVariantProps
  variantMap: SearchVariantMap
  variantKeys: Array<keyof SearchVariant>
  splitVariantProps<Props extends SearchVariantProps>(props: Props): [SearchVariantProps, Pretty<DistributiveOmit<Props, keyof SearchVariantProps>>]
  getVariantProps: (props?: SearchVariantProps) => SearchVariantProps
}


export declare const search: SearchRecipe