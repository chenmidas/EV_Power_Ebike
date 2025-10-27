function calculate() {
    const riderWeight = parseFloat(document.getElementById('riderWeight').value);
    const vehicleWeight = parseFloat(document.getElementById('vehicleWeight').value);
    const ratedSpeedKmh = parseFloat(document.getElementById('ratedSpeed').value);
    const tireDiameter = parseFloat(document.getElementById('tireDiameter').value);
    const accelTime = parseFloat(document.getElementById('accelTime').value);
    const sprocketRatio = parseFloat(document.getElementById('sprocketRatio').value);
    const hubGearRatio = parseFloat(document.getElementById('hubGearRatio').value);

    const totalMass = riderWeight + vehicleWeight;
    const ratedSpeed = ratedSpeedKmh * 1000 / 3600;
    const acceleration = ratedSpeed / accelTime;
    const accelDistance = 0.5 * acceleration * accelTime * accelTime;
    const tireRadius = tireDiameter / 2;
    const tireCircumference = Math.PI * tireDiameter;
    const angularVelocity = ratedSpeed / tireRadius;
    const torque = totalMass * acceleration * tireRadius;
    const power = torque * angularVelocity;
    const wheelRPM = angularVelocity * 60 / (2 * Math.PI);
    const motorRPM = wheelRPM * sprocketRatio * hubGearRatio;

    const result = `總質量 Total Mass: ${totalMass.toFixed(2)} kg
額定速度 Rated Speed: ${ratedSpeed.toFixed(2)} m/s
加速度 Acceleration: ${acceleration.toFixed(2)} m/s²
加速距離 Accel. Distance: ${accelDistance.toFixed(2)} m
輪胎半徑 Tire Radius: ${tireRadius.toFixed(4)} m
輪胎週長 Tire Circumference: ${tireCircumference.toFixed(4)} m
輪胎角速度 Angular Velocity: ${angularVelocity.toFixed(2)} rad/s
輪胎扭矩 Torque: ${torque.toFixed(2)} Nm
輪胎所需功率 Power: ${power.toFixed(2)} W
輪胎轉速 Wheel RPM: ${wheelRPM.toFixed(0)} RPM
馬達轉速 Motor RPM: ${motorRPM.toFixed(0)} RPM`;

    document.getElementById('results').innerText = result;
}