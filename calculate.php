<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $electricity = isset($_POST['electricity']) ? (float) $_POST['electricity'] : 0;
    $natural_gas = isset($_POST['natural_gas']) ? (float) $_POST['natural_gas'] : 0;
    $water = isset($_POST['water']) ? (float) $_POST['water'] : 0;

    // Carbon emission factors (in kg CO2 per $)
    $electricityFactor = 0.5; // Example value
    $naturalGasFactor = 0.6; // Example value
    $waterFactor = 0.2; // Example value

    // Calculate carbon footprint
    $electricityEmissions = $electricity * $electricityFactor;
    $naturalGasEmissions = $natural_gas * $naturalGasFactor;
    $waterEmissions = $water * $waterFactor;
    $totalEmissions = $electricityEmissions + $naturalGasEmissions + $waterEmissions;

    // Calculate equivalent coal usage (1 kg CO2 ~ 0.4 kg coal burned)
    $coalEquivalent = $totalEmissions * 0.4;

    // Return results as JSON
    header('Content-Type: application/json');
    echo json_encode([
        'totalEmissions' => round($totalEmissions, 2),
        'coalEquivalent' => round($coalEquivalent, 2)
    ]);
} else {
    // Handle invalid access
    http_response_code(405);
    echo json_encode(['error' => 'Invalid request method.']);
}
?>
