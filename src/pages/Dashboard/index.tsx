import React, {useContext, } from 'react';
import { FiList } from 'react-icons/fi'
import Switch from 'react-switch';
import { useTarefas } from '../../context/TarefasContext';
import { ThemeContext } from 'styled-components';
import { 
    Container, 
    Head, 
    Content, 
    Footer, 
    Titulo, 
    ContentFooter, 
    CirculoTotal, 
    TextoContador, 
    TextoTotal, 
    ContentHead 
} from './styles';
import Tarefas from '../../components/Tarefa';

interface PropsDashboard {
    trocaTema():  void;
}

const Dashborad: React.FC<PropsDashboard> = ({ trocaTema }) => {
    const {colors, title} = useContext(ThemeContext);
    const {totalConcluidas, totalTarefas, totalNaoConcluidas} = useTarefas();

    return (
        <Container>
            <Head>
                <ContentHead>
                    <FiList color={colors.check} size={30} style={{marginRight: 10}} />
                    <Titulo>Lista de tarefas</Titulo>
                </ContentHead>
                <>
                    <Switch 
                        onChange={trocaTema}
                        checked={title === 'dark'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={20}
                        width={40}
                        handleDiameter={20}
                        offColor={colors.corpoCheck}
                        onColor={colors.corpoCheck}
                    />
                </>   
            </Head>
            <Content>
                <Tarefas />
            </Content>
            <Footer>
                <ContentFooter>
                    <TextoTotal>Total de tarefas</TextoTotal>
                    <CirculoTotal color={'#999'}>
                        <TextoContador>{totalTarefas}</TextoContador>
                    </CirculoTotal>
                </ContentFooter>
                <ContentFooter>
                    <TextoTotal >Total de tarefas não concluidas</TextoTotal>
                    <CirculoTotal color={colors.icones}>
                        <TextoContador >{totalNaoConcluidas}</TextoContador>
                    </CirculoTotal>
                </ContentFooter>
                <ContentFooter>
                    <TextoTotal >Total de tarefas concluidas</TextoTotal>
                    <CirculoTotal color={colors.check}>
                        <TextoContador >{totalConcluidas}</TextoContador>
                    </CirculoTotal>
                </ContentFooter>
                
            </Footer>
            
        </Container>
    )
}

export default Dashborad;