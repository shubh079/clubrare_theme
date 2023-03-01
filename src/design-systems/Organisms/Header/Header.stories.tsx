import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header as HeaderComponent } from './Header'

export default {
  title: 'Organisms/Header',
  component: HeaderComponent,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
} as ComponentMeta<typeof HeaderComponent>;


const Template: ComponentStory<typeof HeaderComponent> = props => <HeaderComponent {...props}></HeaderComponent>

export const Header = Template.bind({})
Header.args = {}
