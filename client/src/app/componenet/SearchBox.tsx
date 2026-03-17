type Props = {
    search: string
    setSearch: (value: string) => void
}

export default function SearchBox({ search, setSearch }: Props) {
    return (
        <input type="text"
            placeholder="type here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    )
}