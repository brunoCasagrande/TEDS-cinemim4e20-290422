import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FilmesList from "./FilmesList";
import FilmesForm from "./FilmesForm";

function Filmes() {
    // Declare variáveis de state
    let filmesList = [
        { id: 1, nome: "Moonfall - Ameaça Lunar", sinopse: "No filme Moonfall, de Roland Emmerich, uma força misteriosa tira a Lua da sua órbita em torno da Terra e envia-a numa rota de colisão capaz de aniquilar a vida como a conhecemos.",
                                                 dataEstreia: "2022-04-10" }
    ];
    const [filmes, setFilmes] = useState(filmesList);

    const onClickAtualizar = () => {
        filmesList = [
            { id: 1, nome: 'The Batman', sinopse: 'Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City.', dataEstreia: '2022-03-03' }
        ];
        setFilmes(FilmesList);
    };

    // operação inserir
    const initialState = { id: null, nome: "", sinopse: "", dataEstreia: "" };
    const [filme, setFilme] = useState(initialState);
    const [editando, setEditando] = useState(false);

    const onClickInserir = () => {
        setFilmes(initialState);
        setEditando(true);
    };

    const onClickSalvar = () => {
        if (filme.id == null) {
            // inclusão
            filme.id = filmes.length + 1;
            setFilmes([...filmes, filme]);
        } else {
            // alteração
            setFilmes(
                filmes.map((find) => (find.id === filme.id ? filme : find))
            );
        }
        setEditando(false);
    };
    const onClickCancelar = () => {
        setEditando(false);
    };

    const editar = (id) => {
        setFilmes(filmes.filter((filme) => filme.id == id)[0]);
        setEditando(true);
    };

    const excluir = (id) => {
        setFilmes(filmes.filter((filme) => filme.id !== id));
    };

    if (!editando) {
        return (
            <div>
                <FilmesList
                    filmes={filmes}
                    onClickAtualizar={onClickAtualizar}
                    onClickInserir={onClickInserir}
                    editar={editar}
                    excluir={excluir}
                />
            </div>
        );
    } else {
        return (
            <div>
                <FilmesForm
                    filme={filme}
                    setFilmes={setFilmes}
                    onClickSalvar={onClickSalvar}
                    onClickCancelar={onClickCancelar}
                />
            </div>
        );
    }
}

export default Filmes;
