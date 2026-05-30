interface ArticleTableProps {
    headers: string[];
    rows: Array<Array<React.ReactNode>>;
    caption?: string;
}

export function ArticleTable({ headers, rows, caption }: ArticleTableProps) {
    return (
        <figure className="my-8">
            <table>
                {caption && <caption className="sr-only">{caption}</caption>}
                <thead>
                    <tr>
                        {headers.map((h) => (
                            <th key={h}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => (
                                <td key={j}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </figure>
    );
}