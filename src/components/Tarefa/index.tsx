import React, {useCallback, useContext, useEffect, useState} from 'react';
import{ ThemeContext } from 'styled-components';
import { FiPlus, FiCheck } from 'react-icons/fi';
import { useTarefas } from '../../context/TarefasContext';
import usePesistedState from '../../utils/usePersistedState';

import {
    Container, 
    Content,
    Botao,
    CirculoStatus,
    InputText,
    ContainerBotoes,
    LixeiraIcone,
    LinhaSeparadora,
    ContentPrimeiraTarefa,
    TituloPrimeiraTarefa,
    ContainerFiltro,
    ContentFiltro,
    ContainerTag,
    TituloTag
} from './styles';

const Tarefa: React.FC = () => {
    const { tarefa, novaTarefa, deletarTarefa, atualizarStatus, atualizaNomeTarefa, totalTarefas, totalConcluidas, totalNaoConcluidas} = useTarefas();
    const ultimoID: any = tarefa ? tarefa[tarefa.length -1] : 0;
    const { colors } = useContext(ThemeContext);
    const [tarefasFiltrada, setTarefasFiltradas] = useState<object[]>([]);
    const [filtroSelecionado, setFiltroSelecionado] = usePesistedState<string>('@filtroSelecionado', 'Todas');

    const FILTROS = [
        {titulo: 'Todas', valor: `${totalTarefas}`},
        {titulo: 'Não Concluidas', valor: `${totalNaoConcluidas}`},
        {titulo: 'Concluidas', valor: `${totalConcluidas}`}
        ]

     useEffect(() => {
        const tarefas : object[] = tarefa[0] ? tarefa : [];
        
        const tarefasConcluidas : object[] = [];
        const tarefasNaoConcluidas : object[] = [];

        tarefas.forEach((item : any) => {
            if(item.concluida) {
                tarefasConcluidas.push(item);
            } else {
                tarefasNaoConcluidas.push(item);
            }
        })

        if (filtroSelecionado === 'Todas' && tarefas.length !== tarefasFiltrada.length) {
            setTarefasFiltradas(tarefas);
        }
        if (filtroSelecionado === 'Concluidas') {
            setTarefasFiltradas(tarefasConcluidas)
        }
        if (filtroSelecionado === 'Não Concluidas') {
            setTarefasFiltradas(tarefasNaoConcluidas)
        }
        
        
    },[filtroSelecionado, tarefa])

    const atualizarNome = (id: number, event: any) => {
        atualizaNomeTarefa(id ,event);    
    };

    const addNovaTarefa = () => {
        novaTarefa()
    };

    const excluirTarefa = (id: number) => {
        deletarTarefa(id);
    };  

    const selecionarFiltro = (filtro: string) => {
        setFiltroSelecionado(filtro);
        localStorage.setItem('@filtroSelecionado', JSON.stringify(filtro));
    };

    return (
        <>
            <ContainerFiltro >
                { FILTROS.map((filtro: any ) => {
                    return(
                        <ContentFiltro onClick={() => selecionarFiltro(filtro.titulo)}>
                            <ContainerTag selecionado={filtro.titulo === filtroSelecionado}>
                                <TituloTag selecionado={filtro.titulo === filtroSelecionado}>{filtro.titulo} {filtro.valor}</TituloTag>
                            </ContainerTag>
                        </ContentFiltro>
                        )
                    })
                    
                }
            </ContainerFiltro>
            { tarefa[0] ?  tarefasFiltrada.map((item: any) => {
                return(
                        <>
                            <Container >
                                <Botao onClick={() => atualizarStatus(item.id, item.nome)}>
                                    {item.nome ?
                                        <CirculoStatus status={item.concluida}>
                                            <FiCheck color={colors.fundo} size={14} />
                                        </CirculoStatus>
                                        :
                                        <div style={{width: 18, marginRight: 5}} />
                                    }
                                </Botao>
                                <Content status={item.concluida}>
                                    <InputText name="Descricao" value={item.nome} onChange={e => atualizarNome(item.id, e.target.value)} placeholder="Digite sua tarefa" status={item.concluida} />
                                    <Botao onClick={() => excluirTarefa(item.id)}>
                                            <LixeiraIcone size={18}/>
                                    </Botao>
                                </Content>
                                <ContainerBotoes >
                                    {item.id === ultimoID.id ?
                                        <Botao onClick={() => novaTarefa()}>
                                            <FiPlus size={20} color={!item.nome ? colors.icones : '#0090FF'} />
                                        </Botao>
                                        :
                                        <div style={{width: 18, marginRight: 2}} />
                                    }
                                
                                </ContainerBotoes>
                                
                            </Container>
                            <LinhaSeparadora status={item.concluida}/>
                        </>
                    )
                })
                :
                <Container>
                    <ContentPrimeiraTarefa>
                        <TituloPrimeiraTarefa >Crie sua primeira tarefa</TituloPrimeiraTarefa>
                        <Botao data-testid='NovaTarefa' onClick={() => addNovaTarefa()}>
                            <FiPlus size={28} color={'#0090FF'} />
                        </Botao>
                    </ContentPrimeiraTarefa>
                </Container> 
            }
        </>
    )
};

export default Tarefa;