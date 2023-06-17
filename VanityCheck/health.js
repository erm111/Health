// Function to check the health parameters
document.addEventListener('DOMContentLoaded', function() {
  function checkHealthParameters(event) {
    event.preventDefault();

    // Retrieve form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    // Retrieve other health parameters values
    
    // Perform checks on health parameters
    let allParametersAreGood = true;
    let recommendations = []; // Array to store recommendations
    let parameterStatus = {}; // Object to store parameter statuses

    // Check each health parameter and update allParametersAreGood, recommendations, and parameterStatus accordingly
    
    // Check blood pressure
    const bloodPressure = document.getElementById('bloodPressure').value;
    const systolicThreshold = 120; // Adjust the threshold according to the desired range
    const diastolicThreshold = 80; // Adjust the threshold according to the desired range

    const [systolic, diastolic] = bloodPressure.split('/');

    if (systolic > systolicThreshold || diastolic > diastolicThreshold) {
      allParametersAreGood = false;
      recommendations.push("Monitor your blood pressure regularly and consult a healthcare professional if it remains consistently high.");
      parameterStatus.bloodPressure = 'High';
    } else if (systolic < systolicThreshold || diastolic < diastolicThreshold) {
      parameterStatus.bloodPressure = 'Low';
    } else {
      parameterStatus.bloodPressure = 'Normal';
    }

    // Check body mass index (BMI)
    const bmi = document.getElementById('bmi').value;
    const bmiThreshold = 25; // Adjust the threshold according to the desired range

    if (bmi >= bmiThreshold) {
      allParametersAreGood = false;
      recommendations.push("Maintain a balanced diet and engage in regular physical activity to achieve a healthy BMI.");
      parameterStatus.bmi = 'High';
    } else if (bmi <= 18) {
      allParametersAreGood = false;
      recommendations.push("Your BMI is low This means eating plenty of fruits, vegetables, whole grains, and lean protein. It is also important to avoid processed foods, sugary drinks, and excessive amounts of saturated and unhealthy fats.");
      parameterStatus.bmi = 'Low';
    } else {
      parameterStatus.bmi = 'Normal';
    }

    // Check body temperature
    const bodyTemperature = document.getElementById('bodyTemperature').value;
    // const temperatureUnit = document.getElementById('temperatureUnit').value;
    const temperatureUnit = 'C'; // Set a default value or retrieve it from the appropriate element

    const temperatureThreshold = (temperatureUnit === 'C') ? 37.5 : 99.5; // Adjust the threshold according to the desired range

    if (bodyTemperature > temperatureThreshold) {
      allParametersAreGood = false;
      recommendations.push("Rest, stay hydrated, and monitor your temperature. If it persists or worsens, consult a healthcare professional.");
      parameterStatus.bodyTemperature = 'High';
    } else if (bodyTemperature < 35) {
      allParametersAreGood = false;
      recommendations.push("your temperature is low, take warm liquids, dress in warm clothes, consult a healthcare professional.");
      parameterStatus.bodyTemperature = 'Low';
    } else {
      parameterStatus.bodyTemperature = 'Normal';
    }

    // Check cholesterol
    const cholesterol = document.getElementById('cholesterol').value;
    const cholesterolThreshold = 200; // Adjust the threshold according to the desired range

    if (cholesterol >= 230) {
      allParametersAreGood = false;
      recommendations.push("Maintain a healthy diet low in saturated and trans fats, and consult a healthcare professional for further guidance.");
      parameterStatus.cholesterol = 'High';
    } else if (cholesterol <= 180) {
      allParametersAreGood = false;
      recommendations.push("your cholesterol is low. Consult a professional Healthcare professional and evaluate your diet and nutrition ");

      parameterStatus.cholesterol = 'Low';
    } else {
      parameterStatus.cholesterol = 'Normal';
    }

    // Check blood sugar
    const bloodSugar = document.getElementById('bloodSugar').value;
    const bloodSugarThreshold = 100; // Adjust the threshold according to the desired range

    if (bloodSugar >= bloodSugarThreshold) {
      allParametersAreGood = false;
      recommendations.push("Maintain a balanced diet and monitor your blood sugar levels regularly. Consult a healthcare professional if it remains consistently high.");
      parameterStatus.bloodSugar = 'High';
    } else if (bloodSugar < 80) {
      allParametersAreGood = false;
      recommendations.push("your Consumeblood sugar is low glucose or fast-acting carbohydrates. Consult a healthcare professional if it remains consistently low.");
      parameterStatus.bloodSugar = 'Low';
    } else {
      parameterStatus.bloodSugar = 'Normal';
    }

    // Show result message based on the health parameter checks
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';

    if (allParametersAreGood) {
      // If all parameters are good, display green box with happy face
      const successMessage = document.createElement('div');
      successMessage.className = 'alert alert-success alert-green';
      successMessage.innerHTML = `
        <div class="alert-face">😊</div>
        <p>${name}, your health status is looking good!</p>
      `;
      resultContainer.appendChild(successMessage);
    } else {
      // If any parameter is below average, display yellow box with sad face
      const errorMessage = document.createElement('div');
      errorMessage.className = 'alert alert-warning alert-yellow';
      errorMessage.innerHTML = `
        <div class="alert-face">😔</div>
        <p>${name}, there are some health parameters that need attention. Please take appropriate measures to improve.</p>
        <ul>
          ${recommendations.map(recommendation => `<li>${recommendation}</li>`).join('')}
        </ul>
      `;
      resultContainer.appendChild(errorMessage);
    }

    // Update the parameters table
    const parametersTableBody = document.getElementById('parametersTableBody');
    parametersTableBody.innerHTML = '';

    for (const parameter in parameterStatus) {
      const parameterValue = document.getElementById(parameter).value;
      const status = parameterStatus[parameter];

      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${parameter}</td>
        <td>${parameterValue}</td>
        <td>${status}</td>
      `;
      parametersTableBody.appendChild(tableRow);
    }
  }

  // Add event listener to the form submit event
  const vitalityCheckForm = document.getElementById('vitalityCheckForm');
  vitalityCheckForm.addEventListener('submit', checkHealthParameters);
});
