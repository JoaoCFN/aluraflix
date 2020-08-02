import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageRoot';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria(){
    const valoresInicias = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const { values, handleChange } = useForm(valoresInicias);
    const [categorias, setCategorias] = useState([]);

    function handleSubmit(event){
        event.preventDefault();
        setCategorias([
            ...categorias, 
            values
        ]);

        clearForm(valoresInicias);
    }

    useEffect(() => {
        const URL = window.location.hostname.includes('localhost') 
        ? 'http://localhost:3333/categorias'
        : 'https://alura-flix-joaocfn.herokuapp.com/categorias';
        fetch(URL)
        .then(reponse =>  reponse.json())
        .then(data => {
            setCategorias([
                ...data
            ]);
        })

    }, [])

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome}</h1> 

            <form onSubmit={handleSubmit}>

                <FormField 
                    title="Nome da categoria"
                    fieldType="input"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField 
                    title="Descrição"
                    fieldType="textarea"
                    type="text"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField 
                    title="Cor"
                    fieldType="input"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar
                </Button>
            </form>

            {categorias.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

            <ul>
                {categorias.map((categoria) => (
                    <li key={`${categoria.titulo}`}>
                        {categoria.titulo}
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