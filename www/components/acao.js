$(document).on("click","#listar", function(){
$(location).attr
("href","listar.html");
});
$(document).on("click","#salvar",function(){
var parametros = {
  "sabor":$("sabor").val(),
  "valor":$("#valor").val()
};
$.ajax({
type:"post",
url:"https://colloquial-reserve.000webhostapp.com/cadastro.php",
data:parametros,
success: function(data){
  navigator.notification.alert(data);
  $("sabor").val("");
  $("valor").val("")
},
error: function(data){
  navigator.notification.alert("Erro ao cadastrar!");
}
});
});

function carregaLista(){
$.ajax({
  type:"post",
  url:"https://colloquial-reserve.000webhostapp.com/sla.php",
  dataType:"json",
  success: function(data){
    var itemlista = "";
    $.each(data.pizzas, function(i,dados){
      itemlista += "<option value="+dados.codigo+">"+dados.sabor+"</option>" 
    });
    $("#lista").html(itemlista);
  },
  error: function(data){
    navigator.notification.alert ("Erro ao buscar registros!");
  }
});
}

$(document).on("click","#editar",function(){
$("#sabor").prop("readonly", false);
$("#valor").prop("readonly", false);
});
$(document).on("click","#cancEdit",function(){
  $("#sabor").val("");
  $("#valor").val("");
  $("#sabor").prop("readonly", true);
  $("#valor").prop("readonly", true);
});
$(document).on("click", "#salEdit", function(){

});