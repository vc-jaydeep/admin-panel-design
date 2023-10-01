const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                data: [100, 150, 200, 250],
                borderColor: "#FF6B00",
                label: 'Overview Performance',
                fill: true
            }]
    },
    options: {
        responsive: true,
    }
});