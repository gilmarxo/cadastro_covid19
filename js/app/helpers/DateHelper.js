class DateHelper{

    constructor(){
        throw new Error('DateHelper não pode ser instanciada');
    }

    static textoParaData(texto){

        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('A data deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((elem, index) => elem - index % 2));

    }

    static dataParaTexto(data){

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    
    }

    static dataAtualFormatada(){
        var data = new Date(),
            dia  = data.getDate().toString().padStart(2, '0'),
            mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
            ano  = data.getFullYear();
        return dia+"/"+mes+"/"+ano;
    }
}