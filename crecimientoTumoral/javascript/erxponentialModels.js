let chart = null; 
function verificarCrecimiento(){

    let tumorChart = document.getElementById("tumorChart");
    let celulasIniciales = document.getElementById("celulasIniciales").value;
    let tasaDeCrecimiento = document.getElementById("tasaDeCrecimiento").value;
    let diasGraficados = document.getElementById("diasGraficados").value;

    if(celulasIniciales != "" && tasaDeCrecimiento != "" && diasGraficados != ""){
        tumorChart.style.display = "flex";

        let N0 = parseFloat(celulasIniciales); // Células iniciales
        const r = parseFloat(tasaDeCrecimiento);     // Tasa de crecimiento diaria
        const dias = parseInt(diasGraficados);    // Número de días a graficar

        const labels = [];
        const datos = [];

        for (let t = 0; t <= dias; t++) {
            labels.push(`Día ${t}`);
            const Nt = N0 * Math.exp(r * t);
            datos.push(Math.round(Nt));
            N0 = Nt;
        }

        // 🔹 Destruir gráfico anterior si existe
        if (chart) {
        chart.destroy();
        }

        const ctx = document.getElementById('tumorChart').getContext('2d');
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                label: 'Número de células tumorales',
                data: datos,
                borderColor: 'rgba(49,148,210, 1)',
                backgroundColor: 'rgba(49,148,210, 0.2)',
                fill: true,
                padding: {
                    top: 20, // Espacio desde arriba
                    bottom: 30 // Espacio entre el título y la gráfica
                },
                tension: 0.3
                }]
            },
            options: {
                responsive: true, //
                scales: {
                y: {
                    beginAtZero: false,
                    title: {
                    display: true,
                    text: 'Células'
                    }
                },
                x: {
                    title: {
                    display: true,
                    text: 'Días',
                    },
                    ticks: {
                        // stepSize = 1
                    }
                }
                }
            }
        });
    }else{
        tumorChart.style.display = "none";
        console.log("Ingresa todos los valores...");
    }

    

    
}