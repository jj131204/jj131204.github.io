let chart = null; 
function graficar(event){
    event.preventDefault();

    document.getElementById("vdw").style.display = "flex";
    document.getElementById("elec").style.display = "flex";
    document.getElementById("vdw+elec").style.display = "flex";

    let C =  parseFloat(document.getElementById("c").value);
    let epsilon = parseFloat(document.getElementById("epsilon").value);
    let q1 = parseFloat(document.getElementById("q1").value);
    let q2 = parseFloat(document.getElementById("q2").value);
    let rMin = parseFloat(document.getElementById("rMin").value);
    let rMax = parseFloat(document.getElementById("rMax").value);   

    console.log(C);
    // const C = c; // J·m^6
    // const epsilon = epsilonID;// C^2 / (N·m^2)
    // const q1 = 1.6e-19; // C
    // const q2 = 1.6e-19; // C    

    const r_values = [];
    const U_total = [];
    const U_vdw = [];
    const U_elec = [];

    console.log(epsilon);
    
    for (let i = rMin; i <= rMax; i += 1e-11) {
        r_values.push(i * 1e9); // Guardamos en nm para mostrar
        const vdw = -C / Math.pow(i, 6);
        const elec = (1 / (4 * Math.PI * epsilon)) * (q1 * q2 / i);

        U_vdw.push(vdw);
        U_elec.push(elec);
        U_total.push(vdw + elec);
    }

    if (energyChart) {
        energyChart.destroy();
    }
    if (energyChart1) {
        energyChart1.destroy();
    }
    if (energyChart2) {
        energyChart2.destroy();
    }

    // Crear gráfico
    const ctx = document.getElementById('vdw').getContext('2d');
    energyChart = new Chart(ctx, {
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
    energyChart1 = new Chart(ctx1, {
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
    energyChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: r_values,
            datasets: [
                {
                    label: 'U_total (VDW + elect)',
                    data: U_total,
                    borderColor: 'blue',
                    fill: false
                },
                    {
                        label: 'U_vdw',
                        data: U_vdw,
                        borderColor: 'green',
                        borderDash: [5, 5],
                        fill: false
                    },
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

}