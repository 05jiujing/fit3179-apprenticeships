$quals = @("Certificate II", "Certificate III (Trade)", "Certificate IV", "Diploma & Above")
$sectors = @(
    "Electrotechnology",
    "Construction & Carpentry",
    "Plumbing Services",
    "Automotive Mechanical",
    "Engineering & Metal",
    "Commercial Cookery",
    "Aged Care & Community",
    "Business Administration"
)

# Completion rates across qualification level and sector
$rateMatrix = @{
    "Electrotechnology" = @{ "Certificate II"=52.4; "Certificate III (Trade)"=63.8; "Certificate IV"=69.2; "Diploma & Above"=74.5 };
    "Construction & Carpentry" = @{ "Certificate II"=46.8; "Certificate III (Trade)"=54.2; "Certificate IV"=62.1; "Diploma & Above"=67.4 };
    "Plumbing Services" = @{ "Certificate II"=49.1; "Certificate III (Trade)"=57.9; "Certificate IV"=64.5; "Diploma & Above"=69.0 };
    "Automotive Mechanical" = @{ "Certificate II"=44.2; "Certificate III (Trade)"=51.8; "Certificate IV"=58.6; "Diploma & Above"=63.2 };
    "Engineering & Metal" = @{ "Certificate II"=50.6; "Certificate III (Trade)"=59.8; "Certificate IV"=66.4; "Diploma & Above"=71.8 };
    "Commercial Cookery" = @{ "Certificate II"=41.5; "Certificate III (Trade)"=44.1; "Certificate IV"=52.8; "Diploma & Above"=58.9 };
    "Aged Care & Community" = @{ "Certificate II"=55.2; "Certificate III (Trade)"=61.2; "Certificate IV"=68.9; "Diploma & Above"=72.4 };
    "Business Administration" = @{ "Certificate II"=58.4; "Certificate III (Trade)"=63.8; "Certificate IV"=71.2; "Diploma & Above"=76.1 }
}

$rows = @()
foreach ($s in $sectors) {
    foreach ($q in $quals) {
        $val = $rateMatrix[$s][$q]
        $rows += [PSCustomObject]@{
            Sector = $s
            Qualification_Level = $q
            Completion_Rate_Pct = $val
        }
    }
}

$rows | Export-Csv -Path "data\completion_matrix_data.csv" -NoTypeInformation
Write-Host "Completion matrix exported. Rows: $($rows.Count)"
