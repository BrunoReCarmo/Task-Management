const IdPage = ({
    params,
}: {
    params: { id: string }
}) => {
    return (
        <div>
            Dynamic Route - Id {params.id}
        </div>
    )
}

export default IdPage;