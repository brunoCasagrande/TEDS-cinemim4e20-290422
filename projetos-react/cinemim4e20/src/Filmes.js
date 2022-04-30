import React, { useState, useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import FilmesList from "./FilmesList";
import FilmesForm from "./FilmesForm";
import FilmesSrv from "./services/FilmesSrv";



function Filmes() {
    // Declare variáveis de state
    /*
    let filmesList = [
        { id: 1, titulo: "Moonfall - Ameaça Lunar", sinopse: "No filme Moonfall, de Roland Emmerich, uma força misteriosa tira a Lua da sua órbita em torno da Terra e envia-a numa rota de colisão capaz de aniquilar a vida como a conhecemos.",
                                                 dataEstreia: "2022-04-10" }
    ];
    const [filmes, setFilmes] = useState(filmesList);

    const onClickAtualizar = () => {
        filmesList = [
            { id: 1, titulo: 'The Batman', sinopse: 'Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City.', dataEstreia: '2022-03-03' }
        ];
        setFilmes(FilmesList);
    };
    */
    const [filmes, setFilmes] = useState([])
    useEffect(() => {
        onClickAtualizar(); // ao inicializar execula método para atualizar
    }, []);

    const onClickAtualizar = () => {
        FilmesSrv.listar().then(response => {
            setFilmes(response.data);
            console.log("Filmes atualizados");
        }).catch(e => {
            console.log("Erro: " + e.message);
        });
    }

    // operação inserir
    const initialState = { id: null, titulo: "", sinopse: "", dataEstreia: "" };
    const [filme, setFilme] = useState(initialState);
    const [editando, setEditando] = useState(false);

    const onClickInserir = () => {
        setFilme(initialState);
        setEditando(true);
    };

    const onClickSalvar = () => {
        if (filme._id == null) { // inclussão
            FilmesSrv.incluir(filme).then(response => {
                setEditando(false);
                onClickAtualizar();
            })
                .catch(e => {
                });
        } else { // alteração
            FilmesSrv.alterar(filme).then(response => {
                setEditando(false);
                onClickAtualizar();
            })
                .catch(e => {
                });
        }
    }

 
    const onClickCancelar = () => {
        setEditando(false);
    };

    const editar = (id) => {
        setFilme(filmes.filter((filme) => filme._id == id)[0]);
        setEditando(true);
    };

    const excluir = (id) => {
        FilmesSrv.excluir(id).then(response => {
            onClickAtualizar();

            })
            .catch(e => {
  
            }); 
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
                    setFilme={setFilme}
                    onClickSalvar={onClickSalvar}
                    onClickCancelar={onClickCancelar}
                />
            </div>
        );
    }
}

export default Filmes;
