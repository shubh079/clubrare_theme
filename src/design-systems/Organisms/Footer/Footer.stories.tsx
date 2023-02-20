import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer as FooterComponent } from './Footer'

export default {
  title: 'Organisms/Footer',
  component: FooterComponent,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
} as ComponentMeta<typeof FooterComponent>;


const Template: ComponentStory<typeof FooterComponent> = props => <FooterComponent {...props}></FooterComponent>

export const Footer = Template.bind({})
Footer.args = {}
