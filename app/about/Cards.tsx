export default function Card({ miembro, children }: { miembro: string, children: React.ReactNode }) {
    return (
        <div className="pb-4">
            <h1 className="text-sm pb-2">{miembro}</h1>
            <p className="text-xs">{children}</p>
        </div>
    )
}