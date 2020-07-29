import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageRoot';

function CadastroCategoria(){
    return (
        <PageDefault>
            <h1>Cadastro de categoria</h1> 

            <Link to="/">
                ir para a home  
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;