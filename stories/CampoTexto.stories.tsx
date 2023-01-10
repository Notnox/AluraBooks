import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CampoTexto } from '../src'

export default {
    title: 'Componentes/CampoTexto',
    component: CampoTexto
} as ComponentMeta<typeof CampoTexto>

const Template: ComponentStory<typeof CampoTexto> = (args) => <CampoTexto  {...args}/>

export const Padrao = Template.bind({});
Padrao.args = {
    label: "E-mail",
    placeholder: "seuemail@maneiro.com.br"
}