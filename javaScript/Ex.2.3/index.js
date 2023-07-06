function calculatesFunc(radius){
    const area = Math.PI * radius * radius;
    console.log("The area is:", area);
    console.log("The rounded area is:", area.toFixed(2));
}
calculatesFunc(7.5);