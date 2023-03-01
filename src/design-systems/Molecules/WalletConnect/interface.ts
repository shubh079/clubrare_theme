export interface WalletConnectProps {
    className?: string
    wallet: string
    clickHandler: Function
    connectLoading?: boolean
    walletAddress: string | undefined
    chain: string
    res:any
    provider: string
  }
  