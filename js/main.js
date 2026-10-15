// FIT3179 Data Visualisation 2 - Main Embedding Script

const embedOptions = {
  actions: { 
    export: true, 
    source: true, 
    compiled: false, 
    editor: true 
  },
  renderer: "canvas",
  scaleFactor: 2,
  i18n: {
    SVG_ACTION: "Save as SVG",
    PNG_ACTION: "Save as PNG",
    SOURCE_ACTION: "View Source",
    EDITOR_ACTION: "Open in Vega Editor"
  }
};

const specs = [
  { id: "#vis-map1", path: "specs/map1_choropleth_density.vg.json" },
  { id: "#vis-map2", path: "specs/map2_proportional_symbols.vg.json" },
  { id: "#vis-map3", path: "specs/map3_interstate_flows.vg.json" },
  { id: "#vis-chart4", path: "specs/chart4_connected_scatterplot.vg.json" },
  { id: "#vis-chart5", path: "specs/chart5_horizon_growth.vg.json" },
  { id: "#vis-chart6", path: "specs/chart6_industry_treemap.vg.json" },
  { id: "#vis-chart7", path: "specs/chart7_shortage_slopegraph.vg.json" },
  { id: "#vis-chart8", path: "specs/chart8_wage_distribution_boxplot.vg.json" },
  { id: "#vis-chart9", path: "specs/chart9_female_participation_dumbbell.vg.json" },
  { id: "#vis-chart10", path: "specs/chart10_age_cohort_streamgraph.vg.json" },
  { id: "#vis-chart11", path: "specs/chart11_completion_matrix_heatmap.vg.json" }
];

document.addEventListener("DOMContentLoaded", () => {
  specs.forEach(spec => {
    // 1. Embed the live interactive Vega-Lite chart
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

    // 2. Add in-dashboard Vega-Lite Code Inspector directly on the card
    fetch(spec.path)
      .then(response => response.json())
      .then(jsonObj => {
        const container = document.querySelector(spec.id);
        if (!container) return;
        const card = container.closest('.vis-card');
        if (!card) return;

        const rawUrl = `https://raw.githubusercontent.com/05jiujing/fit3179-apprenticeships/main/${spec.path}`;
        const editorUrl = `https://vega.github.io/editor/#/url/vega-lite/${encodeURIComponent(rawUrl)}`;

        const inspector = document.createElement('details');
        inspector.className = 'code-inspector';
        inspector.innerHTML = `
          <summary>
            <span>🔍 Inspect Vega-Lite Code (${spec.path.split('/').pop()})</span>
            <span class="badge-pill">Vega-Lite Spec</span>
          </summary>
          <div class="code-body">
            <div class="code-actions">
              <a href="${editorUrl}" target="_blank" rel="noopener" class="btn-editor">⚡ Open in Official Vega Editor</a>
              <button class="btn-copy" type="button">Copy JSON</button>
            </div>
            <pre><code>${JSON.stringify(jsonObj, null, 2).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
          </div>
        `;

        // Wire copy button
        const copyBtn = inspector.querySelector('.btn-copy');
        copyBtn.addEventListener('click', (e) => {
          e.preventDefault();
          navigator.clipboard.writeText(JSON.stringify(jsonObj, null, 2));
          copyBtn.innerText = 'Copied!';
          setTimeout(() => { copyBtn.innerText = 'Copy JSON'; }, 2000);
        });

        card.appendChild(inspector);
      })
      .catch(e => console.warn('Could not load spec for code viewer', e));
  });
});
