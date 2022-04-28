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
                        <th>Nome</th>
                        <th>Sinopse</th>
                        <th>Estreia</th>
                    </tr>
                </thead>
                <tbody>
                    {props.filmes.length > 0 ? (
                        props.filmes.map((o, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{o.nome}</td>
                                <td>{o.sinopse}</td>
                                <td>{o.dataEstreia}</td>
                                
                                    <button onClick={() => props.editar(o.id)} 
                                    className="btn btn-primary btn-sm">Editar</button>
                                    
                                    <button onClick={() => props.excluir(o.id)}
                                    className="btn btn-danger btn-sm">Excluir</button>
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
