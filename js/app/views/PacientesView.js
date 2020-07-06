class PacientesView extends View {

    constructor(elemento) {

        super(elemento);

    }

    _template(model) {
        return `
            <table class="table table-striped" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                    <th>Nome</th>
                    <th>Data</th>
                    <th>Sexo</th>
                    <th>Telefone</th>
                    <th>Infectado</th>
                    <th class="actions">Ações</th>
                    </tr>
                </thead>
                
                <tbody>
                ${model.pacientes.map(paciente =>`
                <tr>
                    <td>${paciente.nome}</td>
                    <td>${DateHelper.dataParaTexto(paciente.data)}</td>
                    <td>${paciente.sexo}</td>
                    <td>${paciente.telefone}</td>
                    <td>${paciente.infect}</td>
                    <td class="actions">
                          <a class="btn btn-success btn-xs" href="#" data-toggle="modal" data-target="#modalView">Visualizar</a>
                          <a class="btn btn-warning btn-xs" href="#">Editar</a>
                          <a class="btn btn-danger btn-xs"  href="#" data-toggle="modal" data-target="#delete-modal">Excluir</a>
                      </td>
                </tr>
                    `).join('')}
                </tbody>

            </table>
        `
    }

}