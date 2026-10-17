// FIT3179 Data Visualisation 2 - Main Embedding Script
// Author: Ho Jia Jun (34676406)

const embedOptions = {
  actions: false,
  renderer: "canvas",
  scaleFactor: 2
};

const specs = [
  { id: "#vis-map1", path: "specs/map1_choropleth_density.vg.json" },
  { id: "#vis-map2", path: "specs/map2_proportional_symbols.vg.json" },
  { id: "#vis-map3", path: "specs/map3_hex_cartogram.vg.json" },
  { id: "#vis-chart4", path: "specs/chart4_connected_scatterplot.vg.json" },
  { id: "#vis-chart5", path: "specs/chart5_horizon_growth.vg.json" },
  { id: "#vis-chart6", path: "specs/chart6_industry_treemap.vg.json" },
  { id: "#vis-chart7", path: "specs/chart7_shortage_slopegraph.vg.json" },
  { id: "#vis-chart8", path: "specs/chart8_wage_distribution_boxplot.vg.json" },
  { id: "#vis-chart9", path: "specs/chart9_female_participation_dumbbell.vg.json" },
  { id: "#vis-chart10", path: "specs/chart10_age_cohort_streamgraph.vg.json" },
  { id: "#vis-chart11", path: "specs/chart11_completion_matrix_heatmap.vg.json" }
];

function renderAll() {
  specs.forEach(spec => {
    vegaEmbed(spec.id, spec.path, embedOptions)
      .then(result => {
        // Embed successful
      })
      .catch(err => {
        console.error(`Error embedding ${spec.path}:`, err);
        const container = document.querySelector(spec.id);
        if (container) {
          container.innerHTML = `<div style="padding:20px; color:#ef4444; background:#fef2f2; border-radius:8px;">
            Failed to render chart: ${spec.path}. Check console for details.
          </div>`;
        }
      });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    document.fonts.load('400 12px "Plus Jakarta Sans"'),
    document.fonts.load('700 12px "Plus Jakarta Sans"'),
    document.fonts.load('700 12px "Outfit"')
  ])
    .then(() => {
      renderAll();
    })
    .catch(() => {
      renderAll();
    });
});
