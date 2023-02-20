type UTCString = `${number}-${number}-${number} ${number}:${number}:${number} UTC` // 2022-06-01 16:47:55 UTC

type AnyObject<T = any> = Record<string, T>

type AnyFunction = (...args: any[]) => any

type WalletTypes = 'METAMASK' | 'KAIKAS'

type Modify<T, R extends PartialAny<T>> = Omit<T, keyof R> & R

type AddressString = `0x${string}`

type AssetFilters = {
  search?: string
  networkId?: ClubRareNetworks
  category?: string
  walletAddress?: AddressString
  collectionAddress?: AddressString
  sort?: SortByAsset
  saleType?: SaleType
}


type ClubRareNetworks = '1' | '2' | 1 | 2

type AssetFile = {
  alt?: string
  src: string
  type: string
}