let chart = null; 
function verificarCrecimiento(){
    let tumorChart = document.getElementById("tumorChart");
    let valorMaximo = document.getElementById("valorMaximo").value;
    let desplazamientoHorizontal = document.getElementById("desplazamientoHorizontal").value;
    let tasaDeCrecimiento = document.getElementById("tasaDeCrecimiento").value;
    let diasGraficados = document.getElementById("diasGraficados").value;
    const labels = [];
    const datos = [];

    if(valorMaximo != "" && desplazamientoHorizontal != "" && tasaDeCrecimiento != "" && diasGraficados != ""){

        tumorChart.style.display = "flex";

        const N0 = parseFloat(valorMaximo);
        const b = parseFloat(desplazamientoHorizontal);
        const c = parseFloat(tasaDeCrecimiento);
        const dias = parseFloat(diasGraficados);

        for (let t = 0; t <= dias; t++) {
            labels.push(`Día ${t}`);
            const Nt = N0 * Math.exp(-b * Math.exp(-c * t));
            datos.push(Nt);
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