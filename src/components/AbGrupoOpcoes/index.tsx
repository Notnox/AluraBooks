import React, { FC, useState } from "react";
import styled from "styled-components";

const SectionEstilizada = styled.section<{ selecionado: boolean}>`
    width: 194px;
    height: 88px;
    background: ${props => props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 65.37%)' : '#FFF'};
    border: 1px solid;
    border-color: ${props => props.selecionado ? '#002F52' : '#EB9B00'};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    cursor: pointer;
    header {
        color: ${props => props.selecionado ? '#FFF' : '#EB9B00'};
        font-size: 12px;
        font-weight: 400;
    }
    strong {
        color: ${props => props.selecionado ? '#FFF' : '#EB9B00'};
        font-size: 16px;
        font-weight: 700;
    }
    footer {
        color: ${props => props.selecionado ? '#FFF' : 'rgba(0, 0, 0, 0.54)'};
        font-size: 12px;
        font-weight: 400;
    }
`;

interface AbGrupoOpcao {
    id: number;
    titulo: string;
    corpo: string;
    rodape: string;
}

interface Props {
    opcoes: AbGrupoOpcao[];
    valorPadrao?: AbGrupoOpcao | null;
    onChange?: (opcao: AbGrupoOpcao) => void;
}

export const AbGrupoOpcoes: FC<Props> = ({ opcoes, valorPadrao, onChange }) => {
    const [selecionado, setSelecionado] = useState<AbGrupoOpcao | null>(valorPadrao ?? null);
    const selecionaOpcao = (opcao: AbGrupoOpcao): void => {
        setSelecionado(opcao)
        if (onChange) {
            onChange(opcao);
        }
    }
    return (
        <>
            {opcoes.map(opcao => (
                <SectionEstilizada 
                    key={opcao.id} 
                    selecionado={selecionado?.id === opcao.id}
                    onClick={() => selecionaOpcao(opcao)}
                >
                    <header>
                        {opcao.titulo}
                    </header>
                    <div>
                        <strong>{opcao.corpo}</strong>
                    </div>
                    <footer>
                        {opcao.rodape}
                    </footer>
                </SectionEstilizada>
            ))}
        </>
    );
}