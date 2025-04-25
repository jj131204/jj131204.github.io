let chart = null; 
function verificarCrecimiento(){

    document.getElementById("vdw").style.display = "flex";
    document.getElementById("elec").style.display = "flex";
    document.getElementById("vdw+elec").style.display = "flex";

    const C = 1e-77; // J·m^6
    const epsilon = 8.854e-12; // C^2 / (N·m^2)
    const q1 = 1.6e-19; // C
    const q2 = 1.6e-19; // C    

    const r_values = [];
    const U_total = [];
    const U_vdw = [];
    const U_elec = [];

    
    
    for (let i = 1e-10; i <= 1e-8; i += 1e-11) {
        r_values.push(i * 1e9); // Guardamos en nm para mostrar
        const vdw = -C / Math.pow(i, 6);
        const elec = (1 / (4 * Math.PI * epsilon)) * (q1 * q2 / i);
        U_vdw.push(vdw);
        U_elec.push(elec);
        U_total.push(vdw + elec);
    }

    // Crear gráfico
    const ctx = document.getElementById('vdw').getContext('2d');
    const energyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: r_values,
            datasets: [
                // {
                //     label: 'U_total (VDW + Electrostatics)',
                //     data: U_total,
                //     borderColor: 'blue',
                //     fill: false
                // },
                {
                    label: 'U_vdw',
                    data: U_vdw,
                    borderColor: 'green',
                    borderDash: [5, 5],
                    fill: false
                },
                // {
                //     label: 'U_elec',
                //     data: U_elec,
                //     borderColor: 'red',
                //     borderDash: [5, 5],
                //     fill: false
                // }
            ]
        },
        options: {
            scales: {
                x: {
                    title: {
                    display: true,
                    text: 'Distancia r (nm)'
                    }
                },
                y: {
                    title: {
                    display: true,
                    text: 'Energía Potencial (J)'
                    }
                }
            }
        }
    });


    const ctx1 = document.getElementById('elec').getContext('2d');
    const energyChart1 = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: r_values,
            datasets: [
                // {
                //     label: 'U_total (VDW + Electrostatics)',
                //     data: U_total,
                //     borderColor: 'blue',
                //     fill: false
                // },
                // {
                //     label: 'U_vdw',
                //     data: U_vdw,
                //     borderColor: 'green',
                //     borderDash: [5, 5],
                //     fill: false
                // },
                {
                    label: 'U_elec',
                    data: U_elec,
                    borderColor: 'red',
                    borderDash: [5, 5],
                    fill: false
                }
            ]
        },
        options: {
            scales: {
                x: {
                    title: {
                    display: true,
                    text: 'Distancia r (nm)'
                    }
                },
                y: {
                    title: {
                    display: true,
                    text: 'Energía Potencial (J)'
                    }
                }
            }
        }
    });


    const ctx2 = document.getElementById('vdw+elec').getContext('2d');
    const energyChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: r_values,
            datasets: [
                {
                    label: 'U_total (VDW + Electrostatics)',
                    data: U_total,
                    borderColor: 'blue',
                    fill: false
                },
                // {
                //     label: 'U_vdw',
                //     data: U_vdw,
                //     borderColor: 'green',
                //     borderDash: [5, 5],
                //     fill: false
                // },
                // {
                //     label: 'U_elec',
                //     data: U_elec,
                //     borderColor: 'red',
                //     borderDash: [5, 5],
                //     fill: false
                // }
            ]
        },
        options: {
            scales: {
                x: {
                    title: {
                    display: true,
                    text: 'Distancia r (nm)'
                    }
                },
                y: {
                    title: {
                    display: true,
                    text: 'Energía Potencial (J)'
                    }
                }
            }
        }
    });

}