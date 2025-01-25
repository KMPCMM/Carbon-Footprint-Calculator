document.getElementById('footprint-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const naturalGas = parseFloat(document.getElementById('natural_gas').value) || 0;
    const water = parseFloat(document.getElementById('water').value) || 0;

    // Carbon emission factors (in kg CO2 per $)
    const electricityFactor = 0.5; // Example value
    const naturalGasFactor = 0.6; // Example value
    const waterFactor = 0.2; // Example value

    // Calculate carbon footprint
    const electricityEmissions = electricity * electricityFactor;
    const naturalGasEmissions = naturalGas * naturalGasFactor;
    const waterEmissions = water * waterFactor;
    const totalEmissions = electricityEmissions + naturalGasEmissions + waterEmissions;

    // Calculate equivalent coal usage (1 kg CO2 ~ 0.4 kg coal burned)
    const coalEquivalent = totalEmissions * 0.4;

    // Display results
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p><strong>Total Carbon Footprint:</strong> ${totalEmissions.toFixed(2)} kg CO<sub>2</sub></p>
        <p><strong>Equivalent Coal Usage:</strong> ${coalEquivalent.toFixed(2)} kg</p>
    `;

    // Scroll to results section
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
});
