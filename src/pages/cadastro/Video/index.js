import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageRoot';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepostory from '../../../repositories/videos';

function CadastroVideo(){
    const history = useHistory();
    const { handleChange, values } = useForm({
        // titulo: 'Vídeo padrão',
        // url: 'https://www.youtube.com/watch?v=cMq6k7ymv2s',
        // categoria: 'Front End'
    });

    function handleSubmit(event){
        event.preventDefault();

        videosRepostory.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: 1
        })
        .then(() => {
            console.log('Cadastrou com sucesso!')
            history.push('/');
        })
    }

    return (
        <PageDefault>
            <h1>Cadastro de Vídeo</h1> 

            <form onSubmit={handleSubmit}>
                <FormField
                    title="Título da categoria"
                    fieldType="input"
                    type="text"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    title="URL"
                    fieldType="input"
                    type="text"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    title="Categoria"
                    fieldType="input"
                    type="text"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                />

                <Button type="submit">
                    Cadastrar
                </Button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastro de Categoria    
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;