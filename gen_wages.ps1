$sectors = @(
    @{ Sector="Electrotechnology"; Base=680; Step=190 },
    @{ Sector="Construction & Carpentry"; Base=620; Step=170 },
    @{ Sector="Automotive Mechanical"; Base=580; Step=150 },
    @{ Sector="Engineering & Metal"; Base=640; Step=175 },
    @{ Sector="Plumbing Services"; Base=650; Step=180 },
    @{ Sector="Commercial Cookery"; Base=540; Step=140 },
    @{ Sector="Care & Social Services (Trainee)"; Base=720; Step=110 },
    @{ Sector="Business Administration (Trainee)"; Base=690; Step=105 }
)

$rows = @()
foreach ($s in $sectors) {
    for ($stage = 1; $stage -le 4; $stage++) {
        for ($k = -2; $k -le 2; $k++) {
            $wage = $s.Base + (($stage - 1) * $s.Step) + ($k * 28)
            $rows += [PSCustomObject]@{
                Sector = $s.Sector
                Apprenticeship_Year = "Stage $stage"
                Weekly_Wage_AUD = $wage
                Min_Living_Wage_AUD = 915
            }
        }
    }
}
$rows | Export-Csv -Path "data\apprentice_wage_distributions.csv" -NoTypeInformation
Write-Host "Wage distributions exported. Rows: $($rows.Count)"
