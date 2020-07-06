class ListaPacientes{

    constructor(){

        this._listaPacientes = [];

    }

    adiciona(paciente){

        this._listaPacientes.push(paciente);

    }

    alterar(index, novoPaciente){
        this._listaPacientes[index].push(novoPaciente);
    }

    
    get pacientes(){
        
        return [].concat(this._listaPacientes);

    }

}