export default function Button( {children, onClick}:{children:React.ReactNode, onClick?:any} ) {
    return (
        <button onClick={onClick} className="bg-black w-24 rounded-xl m-6">
            {children}
        </button>
    )
}