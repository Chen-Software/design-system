/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface FileUploadVariant {
  /**
 * @default "md"
 */
size: "sm" | "md" | "lg"
}

type FileUploadVariantMap = {
  [key in keyof FileUploadVariant]: Array<FileUploadVariant[key]>
}

type FileUploadSlot = "root" | "label" | "dropzone" | "trigger" | "item" | "itemGroup" | "itemName" | "itemPreview" | "itemPreviewImage" | "itemSizeText" | "itemDeleteTrigger" | "clearTrigger"

export type FileUploadVariantProps = {
  [key in keyof FileUploadVariant]?: ConditionalValue<FileUploadVariant[key]> | undefined
}

export interface FileUploadRecipe {
  __slot: FileUploadSlot
  __type: FileUploadVariantProps
  (props?: FileUploadVariantProps): Pretty<Record<FileUploadSlot, string>>
  raw: (props?: FileUploadVariantProps) => FileUploadVariantProps
  variantMap: FileUploadVariantMap
  variantKeys: Array<keyof FileUploadVariant>
  splitVariantProps<Props extends FileUploadVariantProps>(props: Props): [FileUploadVariantProps, Pretty<DistributiveOmit<Props, keyof FileUploadVariantProps>>]
  getVariantProps: (props?: FileUploadVariantProps) => FileUploadVariantProps
}


export declare const fileUpload: FileUploadRecipe