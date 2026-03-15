function calculate() {
    let base = Number(document.getElementById('base').value);
    let height = Number(document.getElementById('height').value);
    let area = (base * height) / 2;

    document.getElementById("Area").value = area;
}