/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface BadgeVariant {
  /**
 * @default "gray"
 */
colorPalette: "success" | "error" | "warning" | "blue" | "green" | "red" | "orange" | "gray" | "cyan" | "amber" | "purple"
/**
 * @default "subtle"
 */
variant: "solid" | "subtle" | "surface" | "outline"
/**
 * @default "md"
 */
size: "sm" | "md" | "lg" | "xl" | "2xl"
}

type BadgeVariantMap = {
  [key in keyof BadgeVariant]: Array<BadgeVariant[key]>
}



export type BadgeVariantProps = {
  [key in keyof BadgeVariant]?: ConditionalValue<BadgeVariant[key]> | undefined
}

export interface BadgeRecipe {
  
  __type: BadgeVariantProps
  (props?: BadgeVariantProps): string
  raw: (props?: BadgeVariantProps) => BadgeVariantProps
  variantMap: BadgeVariantMap
  variantKeys: Array<keyof BadgeVariant>
  splitVariantProps<Props extends BadgeVariantProps>(props: Props): [BadgeVariantProps, Pretty<DistributiveOmit<Props, keyof BadgeVariantProps>>]
  getVariantProps: (props?: BadgeVariantProps) => BadgeVariantProps
}


export declare const badge: BadgeRecipe