import React from 'react';

export function Toast({
    evolucao_bairro = [],
}: {
    evolucao_bairro: {
        id_geometria: number
        ano: string
        populacao: number
        }[]
    close: ()=> void
    }) {
    return <div
        style={{
        position: 'fixed',
        zIndex: 999,
        backgroundColor: 'white',
        width: '100%',
        maxWidth: '50vw',
       
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        gap: 24
    }}>
        {evolucao_bairro?.map((item) => {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <h1>
                        {item.populacao}

                    </h1>
                    <p>
                        {item.ano}
                    </p>
                </div>
            )
        })}
    </div>;
}
