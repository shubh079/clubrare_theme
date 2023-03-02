import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { WalletConnect } from './WalletConnect'

export default {
  title: 'Molecules/Wallet/WalletConnect',
  component: WalletConnect,
  argTypes: {
    className: {
      table: {
        disabled: false,
      },
    },
    wallet: {
      control: 'select',
      options: ['METAMASK', 'KAIKAS'],
      defaultValue: 'METAMASK',
    },
  },
}  as ComponentMeta<typeof WalletConnect>;

const Template: ComponentStory<typeof WalletConnect> = props => <WalletConnect {...props} />

export const WalletConnectButton = Template.bind({})
