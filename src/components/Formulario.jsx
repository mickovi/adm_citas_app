import {useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    /* TODO: 
        1. Sección de propietario: nombre, apellidos, DNI, email, teléfono.
        2. Sección mascota: nombre, fecha de nacimiento (opcional), edad (automático o manual), raza, observaciones (alguna marca, etc).
        3. Sección historial médico: botón para agregar campos, Text area para descripción, fecha, nombre medicamento, lote, dosis, fecha nueva dosis.
        4. Sección síntomas: text area para descripción.
        5. CRUD.

        6. Cambiar el borde rojo: error o verde: OK
        7. Cuando tenga el mensaje de error y escriba en la entrada se debe quitar.

        8. Agregar alertas y confirmaciones con SweetAlert.
        9. Cuando se edite debe haber un botón de cancelar la edición.
    */

    /* 
        APORTE! [VIDEO 71]: Acceder a los pacientes sin la necesidad de enviarlos como props.
        La función setPacientes por defecto ya nos envia los pacientes, accedemos a ellos así:
        setPacientes(pacientes => [...pacientes, paciente])
    */

    const [nombremascota, setNombreMascota] = useState(''); // array destructuring
    const [nombrepropietario, setNombrePropietario] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [fechaalta, setFechaAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if ( Object.keys(paciente).length > 0 ) {
            setNombreMascota(paciente.nombremascota);
            setNombrePropietario(paciente.nombrepropietario);
            setTelefono(paciente.telefono);
            setEmail(paciente.email);
            setFechaAlta(paciente.fechaalta);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    const generarID = () => {
        return Math.random().toString(36).substr(2) + Date.now().toString();
    };

    const mensajeError = () => {
        return error && (
                            <div>
                                <p className="text-red-700">Este campo es obligatorio</p>
                            </div>
                        )
        ;
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();

        // Validación del formulario
        if ( [nombremascota, nombrepropietario, telefono, email, fechaalta, sintomas].includes('') ) {
            setError(true);
            return;
        }

        setError(false);

        const objetoPaciente = {
            nombremascota, 
            nombrepropietario, 
            telefono, 
            email, 
            fechaalta, 
            sintomas            
        };

        if ( paciente.id ) {
            // Editando el registro
            objetoPaciente.id = paciente.id;
            // console.log(objetoPaciente);
            // console.log(paciente);

            const pacientesActualizados = pacientes.map(
                pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState
            );

            setPacientes(pacientesActualizados);
            setPaciente({}); // Limpia el registro

        } else {
            // Nuevo registro
            objetoPaciente.id = generarID();
            setPacientes([...pacientes, objetoPaciente]);     
        }


        // Resetear el fomulario
        setNombreMascota('');
        setNombrePropietario('');
        setTelefono('');
        setEmail('');
        setFechaAlta('');
        setSintomas('');
    };

    return ( 
        <div className="md:w-1/2 lg:w-2/5 mx-3">
            <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
            <p className="text-lg mt-5 text-center mb-5">
                Agrega <span className="text-indigo-600 font-bold">nuevos pacientes</span>
            </p>
            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                onSubmit={handleSubmit}
            >
                <div className="mb-5">
                    <label
                        htmlFor="mascota" 
                        className="block text-gray-700 uppercase font-bold">
                        Nombre de la mascota  
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={ nombremascota }
                        onChange={ e => setNombreMascota(e.target.value) }
                    />
                    { mensajeError() }
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="propietario" 
                        className="block text-gray-700 uppercase font-bold">
                        Nombre propietario  
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={ nombrepropietario }
                        onChange={ e => setNombrePropietario(e.target.value) }
                    />
                   {/*  { mensajeError() } */}
                   {/* {error && <Error mensaje={'El nombre es obligatorio'}/>} */}
                   {error && <Error> <p>El nombre es obligatorio</p> </Error>}
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="Teléfono" 
                        className="block text-gray-700 uppercase font-bold">
                        Teléfono  
                    </label>
                    <input
                        id="Telefono"
                        type="phone"
                        placeholder="Teléfono"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={ telefono }
                        onChange={ e => setTelefono(e.target.value) }
                    />
                    { mensajeError() }
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email" 
                        className="block text-gray-700 uppercase font-bold">
                        email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="email"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={ email }
                        onChange={ e => setEmail(e.target.value) }
                    />
                    { mensajeError() }
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="fecha_alta" 
                        className="block text-gray-700 uppercase font-bold">
                        Fecha de alta
                    </label>
                    <input
                        id="fecha_alta"
                        type="date"                    
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={ fechaalta }
                        onChange={ e => setFechaAlta(e.target.value) }
                    />
                    { mensajeError() }
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="obs" 
                        className="block text-gray-700 uppercase font-bold">
                        Observaciones y/o Síntomas
                    </label>
                    <textarea
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        placeholder="Describe los síntomas"
                        value={ sintomas }
                        onChange={ e => setSintomas(e.target.value) }
                    />
                    { mensajeError() }
                </div>
                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
                    value={paciente.id ? "Editar paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    )
}
export default Formulario;