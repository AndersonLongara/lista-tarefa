import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../../pages/Dashboard';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/themes/light'

const trocarTema = jest.fn();

jest.mock('../../context/TarefasContext', () => {
    return {
        useTarefas: () => ({
            tarefa : jest.fn(),
            totalTarefas: 0,
            totalNaoConcluida: 0,
            totalConcluida: 0
        }),
    };
});

test("non-shallow render", () => {

    const { debug } = render(
        <ThemeProvider theme={defaultTheme}>
            <Dashboard trocaTema={trocarTema} />
        </ThemeProvider>
    );

    debug()

});