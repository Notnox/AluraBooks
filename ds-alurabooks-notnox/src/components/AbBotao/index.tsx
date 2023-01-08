import React, { FC } from "react";
import styled, { css } from "styled-components";
interface Props {
    texto?: string;
    tipo?: 'primario' | 'secundario';
    onClink?: () => {};
}

const BotaoEstilizado = styled.button<Props>`
    background: ${(props: Props) => props.tipo === 'primario' ? '#EB9B00' : '#FFF'};
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${(props: Props) => props.tipo === 'primario' ? '#FFF' : '#EB9B00'};
    font-size: 20px;
    cursor: pointer;
    ${ (props: Props) => props.tipo === 'primario' 
    ? css`&:hover {
            background: #B87900;
            border: 2px solid #B87900;
        }`

    : css`&:hover {
            background: #FFF;
            border: 2px solid #B87900;
        }`
    }
`

export const AbBotao: FC<Props> = ({ 
    texto, 
    tipo = 'primario', 
    onClink 
}) => {
    return (
        <BotaoEstilizado
            onClick={onClink}
            tipo={tipo}
        >
            {texto}
        </BotaoEstilizado>
    );
}
