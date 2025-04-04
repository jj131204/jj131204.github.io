let chart = null; 
function verificarCrecimiento(){
    let tumorChart = document.getElementById("tumorChart");
    let capacidadCarga = document.getElementById("capacidadCarga").value;
    let celulasIniciales = document.getElementById("celulasIniciales").value;
    let tasaDeCrecimiento = document.getElementById("tasaDeCrecimiento").value;
    let diasGraficados = document.getElementById("diasGraficados").value;

    if(capacidadCarga != "" && celulasIniciales != "" && tasaDeCrecimiento != "" && diasGraficados != ""){

        tumorChart.style.display = "flex";

        let P0 = parseFloat(celulasIniciales);
        const k = parseFloat(capacidadCarga);
        const r = parseFloat(tasaDeCrecimiento);
        let dias = parseInt(diasGraficados);

        const labels = [];
        const datos = [];

        for (let t = 0; t <= dias; t++) {
            labels.push(`Día ${t}`);
            const Nt = k / (1 + ((k - P0) / P0) * Math.exp(-r * t));
            datos.push(Nt);
            
            console.log(labels);
            console.log(datos);
        }

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
                        top: 20,
                        bottom: 30
                    },
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2, 
                scales: {
                y: {
                    beginAtZero: false,
                    title: {
                    display: true,
                    text: 'Células tumorales'
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

        console.log("Ingresa todo los datos");
    }
}