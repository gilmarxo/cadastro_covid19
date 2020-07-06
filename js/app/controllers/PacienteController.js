class PacienteController {

    constructor(){

        let $ = document.querySelector.bind(document);
        this._nome = $('#nome');
        this._data = $('#data');
        this._sexo = $('#sexo');
        this._end = $('#andereco');
        this._telefone = $('#telefone');
        this._peso = $('#peso');
        this._altura = $('#altura');
        this._infect = $('#infectado');
        this._prognostico = $('#prog');

        this._listaPacientes = new ListaPacientes();
        this._pacientesView = new PacientesView($('#pacientesView'));
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));

        this._pacientesView.update(this._listaPacientes); 

    }

    inserirPaciente(event){

        event.preventDefault();

        let paciente = this._criaPaciente();

        this._listaPacientes.adiciona(paciente);

        this._pacientesView.update(this._listaPacientes);

        this._mensagem.mensagem = 'Paciente inserido com sucesso!';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();

        $('##modal-add').modal('hide')

    }

    _criaPaciente(){

        return new Paciente(
      
            this._nome.value,
            DateHelper.textoParaData(this._data.value),
            this._sexo.value,
            this._end.value,
            this._telefone.value,
            this._peso.value,
            this._altura.value,
            this._infect.value,
            this._prognostico.value
            
        );

    }

    _limpaFormulario(){
        this._nome = '';
        this._data = '';
        this._sexo = '';
        this._end = '';
        this._telefone = '';
        this._peso = 0.0;
        this._altura = 0.0;
        this._infect = '';
        this._prognostico.value = '';

       
    }

}