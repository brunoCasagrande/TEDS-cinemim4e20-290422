import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FilmesList(props) {
    return (
        <div>
            <h4>MANUTENÇÃO DE FILMES</h4>

            <button onClick={props.onClickAtualizar}
                type="button" class="btn btn-primary btn-sm">Atualizar Lista</button>

            <button onClick={props.onClickInserir}
                type="button" class="btn btn-primary btn-sm">Inserir</button>

            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>titulo</th>
                        <th>Sinopse</th>
                        <th>Estreia</th>
                    </tr>
                </thead>
                <tbody>
                    {props.filmes.length > 0 ? (
                        props.filmes.map((o, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{o.titulo}</td>
                                <td>{o.sinopse}</td>
                                <td>{o.dataEstreia}</td>
                                <td>
                                    <button onClick={() => props.editar(o._id)} 
                                    className="btn btn-primary btn-sm">Editar</button>
                                    
                                    <button onClick={() => props.excluir(o._id)}
                                    className="btn btn-danger btn-sm">Excluir</button>
                                    </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>Nenhum filme encontrado.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default FilmesList;
