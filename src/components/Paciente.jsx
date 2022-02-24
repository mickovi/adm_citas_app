const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombremascota, nombrepropietario, telefono, email, fechaalta, sintomas, id} = paciente;

    const handleEliminar = () => {
        const respuesta =  confirm('¿Estás seguro que quieres eliminar a este paciente?');

        if ( respuesta ) eliminarPaciente(id);
    }

    return (
        <div className="m-5 bg-white shadow-md px-5 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {""}
                <span className="font-normal normal-case">{nombremascota}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {""}
                <span className="font-normal normal-case">{nombrepropietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Teléfono: {""}
                <span className="font-normal normal-case">{telefono}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha de alta: {""}
                <span className="font-normal normal-case">{fechaalta}</span>
            </p>
            
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => {setPaciente(paciente)}}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>    
     );
}
 
export default Paciente;