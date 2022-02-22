import Paciente from "./Paciente";

const ListadoPacientes = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Editas tus citas</h2>
            <p className="text-lg mt-5 mb-5 text-center">Administra tus {""}
                <span className="text-indigo-600 font-bold ">citas</span>
            </p>
            <Paciente />    
            <Paciente />
            <Paciente />
        </div>
     );
}
 
export default ListadoPacientes;