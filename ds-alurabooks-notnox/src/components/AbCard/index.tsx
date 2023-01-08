import React, { ReactNode } from "react";
import { FC } from "react";
import styled from "styled-components";

const CardEstilizado = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 48px 32px 48px 48px;
    gap: 16px;
    background: #FFF;
    padding: 48px 48px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    max-width: 551px;
`
interface Props {
    children?: ReactNode;
}

export const AbCard: FC<Props> = ({ children }) => {
    return (
        <CardEstilizado>   
            {children}
        </CardEstilizado>
    );
}