const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: {
          display: false,
        },
        data: [700, 750, 730, 650, 850, 890, 777, 831, 813, 791, 764, 900],
        borderWidth: 4,
        borderColor: "#00D254",
        borderRadius: 10,
        backgroundColor: "#f1f1f1",
        tension: 0.5,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },

      legend: {
        labels: {
          font: {
            size: 0,
          },
        },
        display: false,
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: false,
        },
        suggestedMin: 200,
        suggestedMax: 1400,
      },
    },
  },
});
