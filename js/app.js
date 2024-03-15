function actualizarHora() {
    var fecha = new Date();
    var diaSemana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
    var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    var dia = fecha.getDate();
    var diaTexto = diaSemana[fecha.getDay()];
    var mesTexto = meses[fecha.getMonth()];
    var anio = fecha.getFullYear();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var ampm = (hora >= 12) ? 'PM' : 'AM';

    hora = (hora % 12) || 12; // Convertir la hora a formato de 12 horas

    // Agregar ceros delante de los minutos y segundos si son menores a 10
    minutos = (minutos < 10) ? '0' + minutos : minutos;
    segundos = (segundos < 10) ? '0' + segundos : segundos;

    // Actualizar el contenido de los elementos HTML con los valores obtenidos
    document.getElementById('diaSemana').textContent = diaTexto;
    document.getElementById('dia').textContent = dia;
    document.getElementById('mes').textContent = mesTexto;
    document.getElementById('anio').textContent = anio;
    document.getElementById('horas').textContent = hora;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
    document.getElementById('ampm').textContent = ampm;
}

// Llamar a la función para que se ejecute por primera vez y luego cada segundo
actualizarHora();
var intervalo = setInterval(actualizarHora, 1000);
