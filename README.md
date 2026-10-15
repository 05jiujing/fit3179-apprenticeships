# Rebuilding the Nation: Apprenticeships and Traineeships Across Australia

[![Monash University](https://img.shields.io/badge/Monash%20University-FIT3179-blue.svg)](https://www.monash.edu)
[![Vega-Lite](https://img.shields.io/badge/Vega--Lite-v5-orange.svg)](https://vega.github.io/vega-lite/)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

## Live Visualisation Dashboard
🔗 **GitHub Pages Link:** [https://05jiujing.github.io/fit3179-apprenticeships/](https://05jiujing.github.io/fit3179-apprenticeships/)

---

## Author & Project Metadata
* **Author:** Ho Jia Jun
* **Student ID:** 34676406
* **Topic:** Apprenticeships and Traineeships in Australia
* **Submission Date:** October 2026

---

## Project Overview
This project investigates participation, geographic disparities, longitudinal policy cycles, and workforce shortages within Australia’s **Apprenticeships and Traineeships** system. 

Designed following **Tamara Munzner’s What/Why/How visualisation framework**, it features **11 distinct visualizations**, all utilizing **advanced idioms** and including **3 separate map idioms**, with a lightweight total data footprint (<700 KB).

---

## Multi-Source Real-World Datasets
All data points reflect verified public Australian records combining official government and statutory agencies:
1. **NCVER (National Centre for Vocational Education Research):**
   * *Apprentices and Trainees Collection No. 120 (March Quarter 2024)* — State-level in-training, trades vs non-trades, commencements, and completions.
   * *Historical 20-Year Time Series (2004–2024)* — Long-term quarterly throughput and policy cycles.
   * *Completion and Attrition Rates for Apprentices and Trainees* — Qualification-level completion matrices.
   * *Gender and Age Databuilder Extracts* — Demographic shifts from 2014 to 2024.
2. **ABS (Australian Bureau of Statistics):**
   * *Labour Force, Australia (Catalogue 6202.0, Table 12)* — Employed persons by State and Territory to calculate genuine per-capita training rates per 1,000 workers.
3. **Jobs and Skills Australia (JSA):**
   * *Skills Priority List (SPL 2021–2024)* — Official occupational shortage determinations across ANZSCO 4-digit occupations.
4. **Fair Work Commission:**
   * *Annual Wage Review 2024 & Modern Award Schedules* — Statutory weekly apprentice wage progression (Stages 1 to 4) compared to the National Adult Minimum Wage ($915.90/week).

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
│   ├── map3_interstate_flows.vg.json             # [Map 3 - Advanced] Equal-Area Hexagonal Spatial Cartogram
│   ├── chart4_connected_scatterplot.vg.json      # [Advanced] Connected Scatterplot (2004-2024 Phase Trajectory)
│   ├── chart5_horizon_growth.vg.json             # [Advanced] Horizon / Diverging Area (Subsidy Shock)
│   ├── chart6_industry_treemap.vg.json           # [Advanced] Treemap of 19 ANZSIC Industry Divisions
│   ├── chart7_shortage_slopegraph.vg.json        # [Advanced] Slopegraph of 2021 vs 2024 Shortage Ratings
│   ├── chart8_wage_distribution_boxplot.vg.json  # [Advanced] Box Plot of Apprentice Award Wages vs Living Wage
│   ├── chart9_female_participation_dumbbell.vg.json # [Advanced] Cleveland Dumbbell (Female Trade Share 2014-2024)
│   ├── chart10_age_cohort_streamgraph.vg.json    # [Advanced] Streamgraph of Shifting Age Demographics
│   └── chart11_completion_matrix_heatmap.vg.json # [Advanced] Matrix Heatmap of Cohort Completion Rates
│
└── data/                        # Clean, real-world Australian datasets (<700 KB total)
    ├── australia_states.geojson                  # Australian State & Territory boundaries
    ├── ncver_abs_state_summary.csv               # State apprentice numbers & ABS labour force per-capita
    ├── australia_regional_hubs.csv               # 28 Metro & Regional training hubs with remoteness classes
    ├── australia_hex_cartogram.csv               # Spatial hexagonal tile layout for 8 states/territories
    ├── ncver_timeseries_2000_2024.csv            # 20-year quarterly time series and policy eras
    ├── ncver_industry_trades.csv                 # 19 Industry divisions, wages, and trade ratios
    ├── jsa_occupation_shortages.csv              # Jobs and Skills Australia 2021-2024 shortage lists
    ├── apprentice_wage_distributions.csv         # Stage 1-4 statutory award wages across disciplines
    ├── age_cohort_timeseries.csv                 # Annual age cohort shifts (under 19 vs adult 25+)
    ├── ncver_demographics_diversity.csv          # 10-year demographic diversity shifts
    └── completion_matrix_data.csv                # Completion percentages across AQF qualification levels
```

---

## Academic Integrity & Generative AI Acknowledgement
In accordance with Monash University Learn HQ guidelines, generative artificial intelligence tools were employed for typographic layout styling, CSS responsiveness, and proofreading narrative text. All underlying statistical figures are sourced from authentic Australian public databases (NCVER, ABS, JSA, Fair Work Commission).

