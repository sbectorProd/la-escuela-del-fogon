export default function Button( {children, onClick}:{children:React.ReactNode, onClick?:any} ) {
    return (
        <button onClick={onClick} className="bg-gray-800 text-white py-2 px-3 rounded-xl m-6">
            {children}
        </button>
    )
}