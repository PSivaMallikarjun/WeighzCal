function calculateWeight() {
    // Get values from input fields
    const density = parseFloat(document.getElementById("density").value);
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    const unit = document.getElementById("unit").value;  // Get selected unit

    let lengthInMeters, widthInMeters, heightInMeters;

    if (unit === "mm") {
        // Convert from mm to meters (divide by 1000)
        lengthInMeters = length / 1000;
        widthInMeters = width / 1000;
        heightInMeters = height / 1000;
    } else {
        // Keep the values as meters
        lengthInMeters = length;
        widthInMeters = width;
        heightInMeters = height;
    }

    // Calculate volume in cubic meters
    const volumeM3 = lengthInMeters * widthInMeters * heightInMeters;
    // Calculate volume in cubic millimeters
    const volumeMM3 = volumeM3 * 1e9; // 1 m³ = 1e9 mm³

    // Calculate weight: Density x Volume
    const weight = density * volumeM3;

    // Display the results
    document.getElementById("weightResult").innerText = weight.toFixed(2);
    document.getElementById("volumeMResult").innerText = volumeM3.toFixed(6);
    document.getElementById("volumeMMResult").innerText = volumeMM3.toFixed(2);
}

function viewMaterialDensities() {
    // Toggle the visibility of the density table
    const densityTable = document.getElementById("densityTable");
    if (densityTable.style.display === "none") {
        densityTable.style.display = "block";
    } else {
        densityTable.style.display = "none";
    }
}
