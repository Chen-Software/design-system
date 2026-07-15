/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface GridColVariant {
  span: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24"
offset: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24"
order: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24"
pull: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24"
push: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24"
}

type GridColVariantMap = {
  [key in keyof GridColVariant]: Array<GridColVariant[key]>
}



export type GridColVariantProps = {
  [key in keyof GridColVariant]?: ConditionalValue<GridColVariant[key]> | undefined
}

export interface GridColRecipe {
  
  __type: GridColVariantProps
  (props?: GridColVariantProps): string
  raw: (props?: GridColVariantProps) => GridColVariantProps
  variantMap: GridColVariantMap
  variantKeys: Array<keyof GridColVariant>
  splitVariantProps<Props extends GridColVariantProps>(props: Props): [GridColVariantProps, Pretty<DistributiveOmit<Props, keyof GridColVariantProps>>]
  getVariantProps: (props?: GridColVariantProps) => GridColVariantProps
}


export declare const gridCol: GridColRecipe