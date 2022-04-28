import React, { useState } from 'react';

function FilmesForm(props) { 
    // Declare variáveis de state
    const handleInputChange = (event) => {
        const { name, value } = event.target
        props.setFilme({ ...props.filme, [name]: value })
    }

    return (
        <div>
            <form>
                <div class="form-group">
                    <label>titulo</label>
                    <input class="form-control" type="text" name="titulo"
                        value={props.filme.titulo} onChange={handleInputChange} />
                </div>               
                <div class="form-group">
                    <label>Sinopse</label>
                    <input class="form-control" type="text" name="Sinopse"
                        value={props.filme.sinopse} onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <label>Data De Estreia</label>
                    <input class="form-control" type="text" name="dataEstreia"
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