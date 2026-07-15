/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface GridRowVariant {
  /**
 * @default "top"
 */
align: "top" | "middle" | "bottom" | "stretch"
/**
 * @default "start"
 */
justify: "start" | "end" | "center" | "space-around" | "space-between" | "space-evenly"
/**
 * @default true
 */
wrap: boolean
}

type GridRowVariantMap = {
  [key in keyof GridRowVariant]: Array<GridRowVariant[key]>
}



export type GridRowVariantProps = {
  [key in keyof GridRowVariant]?: ConditionalValue<GridRowVariant[key]> | undefined
}

export interface GridRowRecipe {
  
  __type: GridRowVariantProps
  (props?: GridRowVariantProps): string
  raw: (props?: GridRowVariantProps) => GridRowVariantProps
  variantMap: GridRowVariantMap
  variantKeys: Array<keyof GridRowVariant>
  splitVariantProps<Props extends GridRowVariantProps>(props: Props): [GridRowVariantProps, Pretty<DistributiveOmit<Props, keyof GridRowVariantProps>>]
  getVariantProps: (props?: GridRowVariantProps) => GridRowVariantProps
}


export declare const gridRow: GridRowRecipe