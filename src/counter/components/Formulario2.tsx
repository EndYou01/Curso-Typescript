import { useForm } from '../hooks/useForm'

interface FormData {
    pPostal: string,
    ciudad: string,
}

export const Formulario2 = () => {

    const {postal, ciudad, handleChange, formulario} = useForm({
        postal: 'ABC',
        ciudad: 'Ottawa'
    })


    return (
        <form autoComplete="off">

            <div className="mb-3">
                <label className="form-label">Codigo Postal:</label>
                <input 
                    type="text" 
                    className="form-controls"
                    name="postal"
                    value={postal}
                    onChange={handleChange}
                />
            </div>
            
            <div className="mb-3">
                <label className="form-label">Ciudad:</label>
                <input 
                    type="text" 
                    className="form-controls"
                    name="nombre"
                    value={ciudad}
                    onChange={handleChange}
                />
            </div>

            <pre>{JSON.stringify(formulario)}</pre>

        </form>
    )
}
