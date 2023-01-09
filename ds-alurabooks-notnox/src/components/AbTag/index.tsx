import React, { FC } from "react";
import styled from "styled-components";

interface Props {
    texto?: string;
}

const TagEstilizado = styled.span<Props>`
    display:inline-table;
    background: #EB9B00;
    padding: 32px;
    color: #FFF;
    font-weight: 700;
    font-size: 20px;
`

export const AbTag: FC<Props> = ({ texto }) => {
    return (
        <TagEstilizado>
            {texto}
        </TagEstilizado>
    );
}
