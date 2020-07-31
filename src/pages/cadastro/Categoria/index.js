import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageRoot';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    const valoresInicias = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresInicias);

    function handleChange(event){
        setValue(
            event.target.getAttribute('name'), 
            event.target.value
        );
    }

    function handleSubmit(event){
        event.preventDefault();
        setCategorias([
            ...categorias, 
            values
        ]);

        setValues(valoresInicias);
    }

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor
        })
    }

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome}</h1> 

            <form onSubmit={handleSubmit}>

                <FormField 
                    title="Nome da categoria"
                    fieldType="input"
                    type="text"
                    name="nome"
                    onChange={handleChange}
                />

                <FormField 
                    title="Descrição"
                    fieldType="textarea"
                    type="text"
                    name="descricao"
                    onChange={handleChange}
                />

                <FormField 
                    title="Cor"
                    fieldType="input"
                    type="color"
                    name="cor"
                    onChange={handleChange}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, index) => (
                    <li key={`${categoria}-${index}`}>
                        {categoria.nome}
                    </li>
                ))}
            </ul>

            <Link to="/">
                ir para a home  
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;