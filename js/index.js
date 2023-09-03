const calculateTriangleArea = () => {
    // Get Triangle base value
    const baseInput = document.getElementById('tri-b');
    const baseInputText = baseInput.value 
    const base = parseFloat(baseInputText)
    // console.log(base);

    const heightInput = document.getElementById('tri-h');
    const heightInputText = heightInput.value
    const height = parseFloat(heightInputText)
    // console.log(height);

    const area = 0.5 * base * height;
    // console.log(area);

    // Show output 
    const areaOutput = document.getElementById('tri-result')
    areaOutput.innerText = ' '
    areaOutput.innerText = area;
}

calculateTriangleArea()