import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageRoot';

function CadastroCategoria(){
    const [nomeCategoria, setNomeCategoria] = useState("Filmes");

    function handleInputValue(event){
        setNomeCategoria(event.target.value);
    }

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {nomeCategoria}</h1> 

            <form>
                <label>
                    Nome da categoria:
                    <input 
                        type="text"
                        onChange={handleInputValue}
                    />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <Link to="/">
                ir para a home  
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;