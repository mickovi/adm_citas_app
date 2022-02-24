import { useEffect } from 'react';
import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    // console.log(pacientes && pacientes.length);
    
    return (
        <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
            {
                pacientes.length > 0 ? (
                    <>
                        <h2 className="font-black text-3xl text-center">Editas tus citas</h2>
                        <p className="text-lg mt-5 mb-5 text-center">Administra tus {""}
                            <span className="text-indigo-600 font-bold ">citas</span>
                        </p>

                        {pacientes.map(paciente => (
                            <Paciente 
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        ))}
                        
                    </>
                ) : (
                    <>
                        <h2 className="font-black text-3xl text-center">Aún no tienes pacientes</h2>
                        <p className="text-lg mt-5 mb-5 text-center">Agrega un {""}
                            <span className="text-indigo-600 font-bold ">paciente</span>
                        </p>

                        {pacientes.map(paciente => (
                            <Paciente 
                                key={paciente.id}
                                paciente={paciente}
                            />
                        ))}
                        
                    </>
                )
            }
        </div>
     );
}
 
export default ListadoPacientes;