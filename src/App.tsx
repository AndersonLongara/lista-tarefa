import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePesistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';

import Dashboard from './pages/Dashboard';

import { TarefasProvider }  from './context/TarefasContext';

const App: React.FC = () => {
    const [tema, setTema] = usePesistedState<DefaultTheme>('theme', light);

    const trocaTema = () => {
        setTema(tema.title === 'light' ? dark : light)
    };

   return ( 
        <ThemeProvider theme={tema}>
            <GlobalStyle />
            <TarefasProvider>
                <Dashboard trocaTema={trocaTema} />
            </TarefasProvider>
        </ThemeProvider>
   )}

export default App;
