const Abertas = async () => {
    const data = await (await fetch('https://redeconexaonet.com/api/abertas')).json()
    return (
        <div className="mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Listagem de OS</h2>
            <table className="min-w-full bg-white border border-gray-200 small">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Técnico</th>
                        <th className="py-2 px-4 border-b">Responsável</th>
                        <th className="py-2 px-4 border-b">Cliente</th>
                        <th className="py-2 px-4 border-b">Endereço</th>
                        <th className="py-2 px-4 border-b">Bairro</th>
                        <th className="py-2 px-4 border-b">Conteúdo/Serviço</th>
                        <th className="py-2 px-4 border-b">Agendamento</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className="py-2 text-sm px-4 border-b">{item.username}</td>
                            <td className="py-2 text-sm px-4 border-b">{item.responsavel}</td>
                            <td className="py-2 text-sm px-4 border-b">{item.nome}</td>
                            <td className="py-2 text-sm px-4 border-b">{item.logradouro}</td>
                            <td className="py-2 text-sm px-4 border-b">{item.bairro}</td>
                            <td className="py-2 text-sm px-4 border-b">{item.conteudo}</td>
                            <td className="py-2 text-sm px-4 border-b">{item.data_agendamento}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Abertas;