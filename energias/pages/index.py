import numpy as np
import matplotlib.pyplot as plt

# Constantes
C = 1e-77  # J·m^6
epsilon = 8.854e-12  # C^2 / (N·m^2)
q1 = 1.6e-19  # C
q2 = 1.6e-19  # C

# Distancia r (de 0.1 nm a 10 nm)
r = np.linspace(1e-10, 1e-8, 1000)

# Energías
U_vdw = -C / r**6
U_elec = (1 / (4 * np.pi * epsilon)) * (q1 * q2 / r)
U_total = U_vdw + U_elec

# Gráfica
plt.figure(figsize=(10,6))
plt.plot(r * 1e9, U_total, label='U_total (VDW + Electrostatics)', color='blue')
plt.plot(r * 1e9, U_vdw, label='U_vdw', linestyle='--', color='green')
plt.plot(r * 1e9, U_elec, label='U_elec', linestyle='--', color='red')
plt.xlabel('Distancia r (nm)')
plt.ylabel('Energía Potencial (J)')
plt.title('Interacción entre dos partículas')
plt.legend()
plt.grid(True)
plt.show()
