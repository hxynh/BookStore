import { ReactNode } from "react"

interface ModayType {
    children?: ReactNode,
    isOpen: boolean,
    onClose: () => void
}

function Modal(props: ModayType) {
    if(!props.isOpen) return null
    else {
        return (
            <div 
            className={`fixed inset-0 flex justify-center items-center transition-colors ${props.isOpen ? "visible bg-black/20" : "invisible"}`}
            onClick={props.onClose}
            >
                <div className={`bg-white rounded-lg shadow p-6 transition-all min-w-[60%] max-w-[80%] ${props.isOpen ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
                onClick={(e) => e.stopPropagation()}>
                    <button 
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={props.onClose}>
                            ✕
                    </button>
                    {props.children}
            
                </div>
            </div>
        )
    }
}

export default Modal