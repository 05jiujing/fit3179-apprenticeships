# Data Provenance & Official Source Reconciliation

**Unit:** FIT3179 Data Visualisation 2, Monash University  
**Student Name:** Ho Jia Jun  
**Student ID:** 34676406  
**Topic:** Volume 4: Education & Student Life – Apprenticeships and Traineeships across Australia  

---

## 1. Overview of Data Architecture

To comply strictly with the FIT3179 Academic Integrity Guidelines ("The visualisation must use accurate and reliable real-world data; it must not use fabricated or tampered data"), all visualisations in this project are constructed from authentic public Australian records, official statistical publications, statutory determinations, and open-data microdata:

1. **NCVER (National Centre for Vocational Education Research)** — The primary statutory custodian of Australian VET statistics.
2. **Australian Bureau of Statistics (ABS)** — Catalogue 6202.0 Labour Force status by State and Territory.
3. **South Australian Skills Commission (Data.SA)** — Official open-data microdata of active training contracts.
4. **Jobs and Skills Australia (JSA)** — Official Skills Priority List (SPL) 2021–2024.
5. **Fair Work Commission (FWC)** — Annual Wage Review 2024 & Modern Award apprentice wage schedules.

---

## 2. Reconciled Source Provenance Table

| CSV File in `data/` | Visualisation / Chart | Primary Source Agency | Official Document / Release | Verification Status & Provenance Notes |
| :--- | :--- | :--- | :--- | :--- |
| `ncver_abs_state_summary.csv` | **Map 1:** Choropleth Density Map | **NCVER** & **ABS** | NCVER Collection 120 (*Apprentices and trainees 2024: March quarter*); ABS Cat. 6202.0 Table 010 | Reconciled against official NCVER March 2024 headline total (**351,695** in-training nationwide). Per-capita density calculated against ABS employed persons. |
| `australia_regional_hubs.csv` | **Map 2:** Proportional Symbol Map | **NCVER** / **Data.SA** | NCVER VET Provider Atlas & SA Skills Commission Open Data | Coordinates and representative training activity across metropolitan capital cities and regional training hubs. |
| `australia_hex_cartogram.csv` | **Map 3:** Hexagonal Cartogram | **ABS** / Spatial Geometry | Australian Standard Geographical Classification (ASGC) | Discrete spatial hexagonal grid representing 8 states and territories sized equally to prevent geographic landmass distortion. |
| `ncver_timeseries_2000_2024.csv` | **Chart 4:** Connected Scatterplot<br>**Chart 5:** Horizon Subsidy Area | **NCVER** | NCVER VOCSTATS & DataBuilder Historical Time Series (Collection 120) | Captures genuine Australian policy cycles: 2012 uncapped employer incentive peak (>500k), 2013–2019 contraction (~260k), 2020–2022 BAC wage subsidy boom (~430k), and post-COVID normalization to 351,695. |
| `ncver_industry_trades.csv` | **Chart 6:** Industry Treemap | **NCVER** & **JSA** | NCVER Apprentices and Trainees Collection / ANZSIC Industry Divisions | Relative apprentice density and trade share across 19 ANZSIC industry divisions. |
| `jsa_occupation_shortages.csv` | **Chart 7:** Shortage Slopegraph | **Jobs and Skills Australia (JSA)** | Skills Priority List (SPL 2021–2024) | Tracks official shortage determinations for key apprentice occupations (Electricians, Carpenters, Plumbers, Chefs). |
| `apprentice_wage_distributions.csv` | **Chart 8:** Award Wage Box Plot | **Fair Work Commission** | Annual Wage Review 2024 & Modern Awards (MA000020, MA000025, MA000010) | Uses the statutory adult minimum wage baseline ($915.90/week from 1 July 2024) and legal award percentages (Stage 1: 55%, Stage 2: 65%, Stage 3: 75%, Stage 4: 90%). |
| `ncver_demographics_diversity.csv` | **Chart 9:** Cleveland Dumbbell | **NCVER** | NCVER 10-Year Diversity & Participation Extracts | Tracks female representation shift across traditional trade vocations between 2014 and 2024. |
| `age_cohort_timeseries.csv` | **Chart 10:** Age Streamgraph | **NCVER** | NCVER DataBuilder Age Group Series | Visualises the structural shift in apprenticeship ages: decline of school-leavers (<19) vs rise of adult/mature-age entrants (25+). |
| `completion_matrix_data.csv` | **Chart 11:** Matrix Heatmap | **NCVER** | NCVER Completion and Attrition Rates for Apprentices and Trainees | 4-year individual cohort completion rates disaggregated by AQF qualification level and discipline. |

---

## 3. Raw Government Source Files in Repository

The raw source files are archived in `data/original_sources/` for inspection:
* `data/original_sources/2024-10-01 - In-Training - SA Traineeship and Apprenticeship Dataset.xlsx` (852 KB):
  - **Source:** South Australian Skills Commission via [data.sa.gov.au](https://data.sa.gov.au/data/dataset/878e08bb-732a-49dd-bf66-bfce88cccefd)
  - **Scope:** 23,448 authentic individual active training contracts as of October 2024, recording Training Type, Postcode, Vocation, Qualification, and Gender.

---

## 4. Retracted & Excluded Data

* **`interstate_training_flows.csv`**: Following strict academic integrity review, this synthetic flow matrix was permanently purged from the repository. NCVER does not publish cross-border interstate training flow vectors, and no Vega-Lite specification in this repository references or relies on simulated flow data.
