const courses = [
    { name: "Tecnicatura Superior en Análisis de Sistemas" },
    { name: "Tecnicatura Superior en Logística" },
    { name: "Tecnicatura Superior en Textil e Indumentaria"},
    { name: "Tecnicatura Superior en Turismo" },
    { name: "Tecnicatura Superior en Acompañamiento Terapeutico"},
    { name: "Tecnicatura Superior en Gestión Ambiental y Salud" },
    { name: "Tecnicatura Superior en Emergencias de Salud" },
    
    
];
function generateCourseOptions() {
    const courseSelect = document.getElementById("course-select");
    courses.forEach(course => {
        const option = document.createElement("option");
        option.value = course.name;
        option.textContent = course.name;
        courseSelect.appendChild(option);
    });
}
function handleFormSubmit(event) {
    event.preventDefault();

    const course = document.getElementById("course-select").value;
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;

    if (course && name && email) {
       
        console.log("Formulario enviado");
        console.log("Carrera:", course);
        console.log("Nombre:", name);
        console.log("Email:", email);

       
        document.getElementById("course-select").selectedIndex = 0;
        document.getElementById("name-input").value = "";
        document.getElementById("email-input").value = "";

        
        alert("Formulario enviado correctamente");
    } else {
        
        alert("Por favor, completa todos los campos");
    }
}


window.onload = function () {
    generateCourseOptions();
    document.getElementById("registration-form").addEventListener("submit", handleFormSubmit);
};
