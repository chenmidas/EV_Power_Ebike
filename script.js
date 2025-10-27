
document.getElementById("calculateButton").addEventListener("click", calculate);

function calculate() {
  const riderWeight = parseFloat(document.getElementById("riderWeight").value);
  const vehicleWeight = parseFloat(document.getElementById("vehicleWeight").value);
  const ratedSpeed = parseFloat(document.getElementById("ratedSpeed").value);
  const tireDiameter = parseFloat(document.getElementById("tireDiameter").value);
  const accelTime = parseFloat(document.getElementById("accelTime").value);
  const sprocketRatio = parseFloat(document.getElementById("sprocketRatio").value);
  const hubGearRatio = parseFloat(document.getElementById("hubGearRatio").value);

  const PI = Math.PI;
  const totalMass = riderWeight + vehicleWeight;
  const ratedSpeedMS = ratedSpeed / 3.6;
  const acceleration = ratedSpeedMS / accelTime;
  const accelDistance = 0.5 * Math.pow(ratedSpeedMS, 2) / acceleration;
  const tireRadius = tireDiameter / 2;
  const tireAngularSpeed = ratedSpeedMS / tireRadius;
  const wheelTorque = totalMass * acceleration * tireRadius;
  const wheelPower = wheelTorque * tireAngularSpeed;
  const wheelRPM = ratedSpeedMS * 1000 / (PI * tireDiameter);
  const motorRPM = wheelRPM * sprocketRatio * hubGearRatio;

  const resultHTML = `
    <b>總質量:</b> ${totalMass.toFixed(2)} kg<br/>
    <b>額定速度:</b> ${ratedSpeedMS.toFixed(2)} m/s<br/>
    <b>加速度:</b> ${acceleration.toFixed(2)} m/s²<br/>
    <b>加速距離:</b> ${accelDistance.toFixed(2)} m<br/>
    <b>輪胎角速度:</b> ${tireAngularSpeed.toFixed(2)} rad/s<br/>
    <b>輪胎扭矩:</b> ${wheelTorque.toFixed(2)} Nm<br/>
    <b>輪胎所需功率:</b> ${wheelPower.toFixed(2)} W<br/>
    <b>輪胎轉速:</b> ${wheelRPM.toFixed(0)} RPM<br/>
    <b>馬達轉速:</b> ${motorRPM.toFixed(0)} RPM<br/>
  `;
  document.getElementById("results").innerHTML = resultHTML;
}
