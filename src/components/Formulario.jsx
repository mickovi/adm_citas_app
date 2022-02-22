const Formulario = () => {
    return ( 
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
            <p className="text-lg mt-5 text-center mb-5">
                Agrega <span className="text-indigo-600 font-bold">nuevos pacientes</span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
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
                    />
                </div>
                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
                    value="Agregar Paciente"
                />
            </form>
        </div>
    )
}
export default Formulario;