import React, { FC } from "react";
import styled from "styled-components";

const SectionEstilizada = styled.section`
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    label {
        color: #002F52;
        font-weight: 700;
        font-size: 16px;
        margin: 5px 24px;
    }
    input {
        color: ##A4A4A4
        font-weight: 400;
        font-size: 16px;
        border: 1px solid #002F52;
        border-radius: 24px;
        max-width: 509px;
        height: 44px;
        padding: 0 24px;
    }
`;

interface Props {
    label: string;
    placeholder: string;
    onChange?: (value: string) => void;
    value: string;
}

export const CampoTexto: FC<Props> = ({ label, placeholder, onChange, value }) => {
    return (
        <SectionEstilizada>
            <label><strong>{label}</strong></label>
            <input 
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    if (onChange) onChange(e.target.value)}}
            />
        </SectionEstilizada>
    );
}