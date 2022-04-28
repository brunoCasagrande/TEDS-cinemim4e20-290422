import React, { useState } from 'react';

function FilmesForm(props) {
    // Declare variáveis de state
    const handleInputChange = (event) => {
        const { name, value } = event.target
        props.setFilmes({ ...props.filme, [name]: value })
    }

    return (
        <div>
            <form>
                <div class="form-group">
                    <label>Nome</label>
                    <input class="form-control" type="text" name="nome"
                        value={props.filme.nome} onChange={handleInputChange} />
                </div>               
                <div class="form-group">
                    <label>Sinopse</label>
                    <input class="form-control" type="number" name="estoque"
                        value={props.filme.sinopse} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <label>Data De Estreia</label>
                    <input class="form-control" type="number" name="valor"
                        value={props.filme.dataEstreia} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <button type="button" onClick={props.onClickSalvar}
                        className="btn btn-primary btn-sm">Salvar</button>
                    <button type="button" onClick={props.onClickCancelar}
                        className="btn btn-primary btn-sm">Cancelar</button>
                </div>
            </form>


        </div>
    );
}

export default FilmesForm;