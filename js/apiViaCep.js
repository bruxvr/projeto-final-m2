$("#btn").on("click", function(){
    var numCep = $("#cep").val();
    var url = "https://viacep.com.br/ws/"+numCep+"/json"

    $.ajax({
        url: url,
        type: "get",
        dataType: "json",

        success: function(dados){
            console.log(dados);
            $("#endereco").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
            $("#cidade").val(dados.localidade);
            $("#uf").val(dados.uf);
        }
    })
})