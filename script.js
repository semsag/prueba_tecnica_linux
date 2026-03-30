// Reloj en tiempo real
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Lógica de salud del sistema
const checkBtn = document.getElementById('check-btn');
const statusDot = document.getElementById('status-dot');
const statusText = document.getElementById('status-text');

checkBtn.addEventListener('click', () => {
    statusText.textContent = "Verificando Nginx...";
    statusDot.style.backgroundColor = "#f1e05a";
    statusDot.style.boxShadow = "0 0 10px #f1e05a";

    setTimeout(() => {
        statusText.textContent = "Clúster Kubernetes saludable: 2/2 Pods Ready ✅";
        statusDot.style.backgroundColor = "#238636";
        statusDot.style.boxShadow = "0 0 10px #238636";
        checkBtn.textContent = "Sistema Verificado";
        checkBtn.style.backgroundColor = "#238636";
    }, 1500);
});

console.log("Dashboard de Sebastián cargado exitosamente.");