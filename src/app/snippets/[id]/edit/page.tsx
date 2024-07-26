interface SnippetEditPageProps {
    params: {
        id: string
    }
}

export default function SnippetEditPage(props: SnippetEditPageProps) {
    const id = parseInt(props.params.id)

    return (
        <div>SnippetEditPage with id {id}</div>
    )
}
