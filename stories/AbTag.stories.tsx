import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbTag } from '../src'

export default {
    title: 'Componentes/AbTag',
    component: AbTag
} as ComponentMeta<typeof AbTag>

const Template: ComponentStory<typeof AbTag> = (args) => <AbTag {...args} />

export const Tag = Template.bind({});
Tag.args = {
    texto: 'Ab Tag'
}