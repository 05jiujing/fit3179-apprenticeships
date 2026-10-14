# FIT3179 Data Visualisation 2: Apprenticeships and Traineeships Across Australia

[![Monash University](https://img.shields.io/badge/Monash%20University-FIT3179-blue.svg)](https://www.monash.edu)
[![Vega-Lite](https://img.shields.io/badge/Vega--Lite-v5-orange.svg)](https://vega.github.io/vega-lite/)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

## Live Visualisation URL
🔗 **GitHub Pages Link:** `https://<your-github-username>.github.io/<your-repo-name>/`  
*(Enable GitHub Pages in Repository Settings > Pages > Source: Deploy from branch `main` / root)*

---

## Project Overview
This project critically explores participation, geographic disparities, longitudinal policy cycles, and workforce shortages within Australia’s **Apprenticeships and Traineeships** system. 

It is designed following **Tamara Munzner’s What/Why/How visualisation framework** and features **11 distinct visualizations**, all utilizing **advanced idioms** and including **3 separate map idioms**, with a lightweight total data footprint (<700 KB).

---

## Repository Structure

```text
├── index.html                   # Main responsive web page layout and cards
├── README.md                    # Project documentation and metadata
├── sketch.pdf                   # Hand-drawn A4 sketch scan (Week 7/8 studio)
│
├── css/
│   └── styles.css               # Typography (Outfit & Plus Jakarta Sans), grid & card styling
│
├── js/
│   └── main.js                  # vegaEmbed execution and responsive rendering
│
├── specs/                       # Formatted, human-readable Vega/Vega-Lite JSON specifications
│   ├── map1_choropleth_density.vg.json           # [Map 1 - Advanced] Choropleth of State Density (Per 1k workers)
│   ├── map2_proportional_symbols.vg.json         # [Map 2 - Advanced] Proportional Symbol Map of Training Hubs
│   ├── map3_interstate_flows.vg.json             # [Map 3 - Advanced] Origin-Destination Flow Map
│   ├── chart4_connected_scatterplot.vg.json      # [Advanced] Connected Scatterplot (2000-2024 Phase Trajectory)
│   ├── chart5_horizon_growth.vg.json             # [Advanced] Horizon / Diverging Area (Subsidy Shock)
│   ├── chart6_industry_treemap.vg.json           # [Advanced] Treemap of 19 ANZSIC Industry Divisions
│   ├── chart7_shortage_slopegraph.vg.json        # [Advanced] Slopegraph of 2021 vs 2024 Shortage Ratings
│   ├── chart8_wage_distribution_boxplot.vg.json  # [Advanced] Box Plot of Apprentice Award Wages vs Living Wage
│   ├── chart9_female_participation_dumbbell.vg.json # [Advanced] Cleveland Dumbbell (Female Trade Share 2014-2024)
│   ├── chart10_age_cohort_streamgraph.vg.json    # [Advanced] Streamgraph of Shifting Age Demographics
│   └── chart11_completion_matrix_heatmap.vg.json # [Advanced] Matrix Heatmap of Cohort Completion Rates
│
└── data/                        # Clean, real-world Australian datasets (<1 MB total)
    ├── australia_states.geojson                  # Australian State & Territory boundaries
    ├── ncver_abs_state_summary.csv               # State apprentice numbers & ABS labour force per-capita
    ├── australia_regional_hubs.csv               # 36 Metro & Regional training hubs with coordinates
    ├── interstate_training_flows.csv             # Interstate cross-border training movement
    ├── ncver_timeseries_2000_2024.csv            # 25-year quarterly time series and policy eras
    ├── ncver_industry_trades.csv                 # 19 Industry divisions, wages, and trade ratios
    ├── jsa_occupation_shortages.csv              # Jobs and Skills Australia 2021-2024 shortage lists
    ├── apprentice_wage_distributions.csv         # Stage 1-4 wage distributions across trade disciplines
    ├── age_cohort_timeseries.csv                 # Annual age cohort shifts (under 19 vs adult 25+)
    ├── ncver_demographics_diversity.csv          # 10-year demographic diversity shifts
    └── completion_matrix_data.csv                # Completion percentages across AQF qualification levels
```

---

## Data Sources & Authorship
Data for this project combines multiple verified Australian public repositories:
1. **NCVER (National Centre for Vocational Education Research):** *Apprentices and Trainees Collection (Historical time series, quarterly collections & VOCSTATS).* [ncver.edu.au](https://www.ncver.edu.au)
2. **Jobs and Skills Australia (JSA):** *Occupational Shortage List (OSL) & Skills Priority List.* [jobsandskills.gov.au](https://www.jobsandskills.gov.au)
3. **Australian Bureau of Statistics (ABS):** *Labour Force Australia (Cat 6202.0) & Regional Population Data.* [abs.gov.au](https://www.abs.gov.au)

---

## Author
* **Student Name:** [Your Name]
* **Student ID:** [Your ID]
* **Unit:** FIT3179 Data Visualisation 2, Monash University
