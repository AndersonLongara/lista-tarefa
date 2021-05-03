import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface TarefaContextData {
    tarefa: Object[];
    novaTarefa: () => void;
    deletarTarefa: (id: number) => void;
    atualizarStatus: (id: number, nome: any) => void;
    atualizaNomeTarefa: (id: number, nome: any) => void;
    totalConcluidas: number;
    totalTarefas: number;
    totalNaoConcluidas: number;
}

interface TarefasProps {
    tarefa: Object[];
}

const TarefasContext = createContext<TarefaContextData>([] as any);

const TarefasProvider: React.FC = ({children}) => {
    const [data, setData] = useState<TarefasProps>(() => {
        const tarefa = localStorage.getItem('@AppTarefas:tarefas');

        if(tarefa) {
            return { tarefa: JSON.parse(tarefa) };
        }
        
        return {} as TarefasProps;
    });

    const [totalTarefas, setTotalTarefas] = useState<number>(0);
    const [totalConcluidas, setTotalConcluidas] = useState<number>(0);
    const [totalNaoConcluidas, setTotalNaoConcluidas] = useState<number>(0);

    const novaTarefa = useCallback(() => {
        let tarefa: any = data.tarefa ? data.tarefa : [];
        if (!tarefa) return;
        if(tarefa[0]) {
            if(!tarefa[tarefa.length -1].nome) return;
            
        }

        const id: number = tarefa[0] ? tarefa[tarefa.length -1].id + 1 : 1;

        const novaTarefa = {id: id, nome: '', concluida: false};

        tarefa.push(novaTarefa);        

        localStorage.setItem('@AppTarefas:tarefas', JSON.stringify(tarefa))
        setData({ tarefa: tarefa });
    },[data])

    const deletarTarefa = useCallback((id: number) => {
        let tarefa: object[] = data.tarefa ? data.tarefa : [];
        let tarefasAtualizadas:  object[] = [];

        tarefa.forEach((item : any) => {
            if(item.id !== id) {
                tarefasAtualizadas.push(item);
            }
        })

        localStorage.setItem('@AppTarefas:tarefas', JSON.stringify(tarefasAtualizadas))
        setData({tarefa: tarefasAtualizadas});
    },[data]);

    const atualizarStatus = useCallback((id: number, nome: any) => {
        let tarefa: object[] = data.tarefa ? data.tarefa : [];
        let tarefasAtualizadas:  object[] = [];

        if(!nome) return;
        tarefa.forEach((item : any) => {
            if(item.id === id) {
                item.concluida = !item.concluida; 
            }
            
            tarefasAtualizadas.push(item);
        })

        localStorage.setItem('@AppTarefas:tarefas', JSON.stringify(tarefasAtualizadas))
        setData({ tarefa: tarefasAtualizadas });
    },[data])

    const atualizaNomeTarefa = useCallback((id: number, nome: any) => {
        let tarefa: object[] = data.tarefa ? data.tarefa : [];
        let tarefasAtualizadas: object[] = [];

        tarefa.forEach((item : any) => {
            if(item.id === id) {
                item.nome = !item.concluida ? nome: item.nome;
            }
            
            tarefasAtualizadas.push(item);
        })

        localStorage.setItem('@AppTarefas:tarefas', JSON.stringify(tarefasAtualizadas))
        setData({tarefa: tarefasAtualizadas });
    },[data])


    useEffect(() => {
        let tarefa: object[] = data.tarefa ? data.tarefa : [];
        
        let somaConcluidas = 0;
        let somaTotal = 0;
        let somaNaoConcluidas = 0;

        tarefa.forEach((item : any) => {
            if(item.concluida) {
                ++somaConcluidas;
            } else {
                ++somaNaoConcluidas;
            }

            ++somaTotal;
        })

        setTotalConcluidas(somaConcluidas);
        setTotalTarefas(somaTotal);
        setTotalNaoConcluidas(somaNaoConcluidas);

    },[data])
    
    return (
        <TarefasContext.Provider value={{
            tarefa: data.tarefa ? data.tarefa : [], 
            novaTarefa, 
            deletarTarefa, 
            atualizarStatus, 
            atualizaNomeTarefa,
            totalConcluidas,
            totalTarefas,
            totalNaoConcluidas
        }}>
            {children}
        </TarefasContext.Provider>
    );
};

function useTarefas(): TarefaContextData {
    const context = useContext(TarefasContext);

    if(!context) {
        throw new Error('useTarefas must be used within an TarefasProvider');
    }

    return context;
}

export { TarefasProvider, useTarefas };