$years = 2014..2024
$ageRows = @()

foreach ($yr in $years) {
    $progress = ($yr - 2014) / 10.0
    # Teenagers (under 19) declining from 38.5% to 29.2%
    $under19 = [math]::Round(38.5 - (9.3 * $progress), 1)
    # 20 to 24 stable around 35%
    $age20_24 = [math]::Round(36.2 - (1.4 * $progress), 1)
    # Adult 25-44 expanding from 21.4% to 29.5%
    $age25_44 = [math]::Round(21.4 + (8.1 * $progress), 1)
    # Mature 45+ expanding from 3.9% to 6.5%
    $age45Plus = [math]::Round(100.0 - ($under19 + $age20_24 + $age25_44), 1)

    $ageRows += [PSCustomObject]@{ Year = $yr; Age_Cohort = "Under 19 (School Leavers)"; Share_Pct = $under19 }
    $ageRows += [PSCustomObject]@{ Year = $yr; Age_Cohort = "20 to 24 Years"; Share_Pct = $age20_24 }
    $ageRows += [PSCustomObject]@{ Year = $yr; Age_Cohort = "25 to 44 Years (Adult)"; Share_Pct = $age25_44 }
    $ageRows += [PSCustomObject]@{ Year = $yr; Age_Cohort = "45+ Years (Career Changers)"; Share_Pct = $age45Plus }
}

$ageRows | Export-Csv -Path "data\age_cohort_timeseries.csv" -NoTypeInformation
Write-Host "Age cohort time series exported. Rows: $($ageRows.Count)"
