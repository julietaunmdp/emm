const materias = [
  // PRIMER AÑO
  { id: "bio_general", nombre: "Biología General", cuatri: "1-1", anio: 1 },
  { id: "analisis1", nombre: "Análisis Matemático I", cuatri: "1-1", anio: 1 },
  { id: "algebra", nombre: "Álgebra", cuatri: "1-1", anio: 1 },
  { id: "quimica_general", nombre: "Química General", cuatri: "1-2", anio: 1, requiere: ["analisis1"] },
  { id: "fisica_a", nombre: "Física A", cuatri: "1-2", anio: 1, requiere: ["analisis1", "algebra"] },
  { id: "analisis2", nombre: "Análisis Matemático II", cuatri: "1-2", anio: 1, requiere: ["analisis1", "algebra"] },

  // SEGUNDO AÑO
  { id: "quimica_organica1", nombre: "Química Orgánica I", cuatri: "2-1", anio: 2, requiere: ["quimica_general", "algebra", "analisis1"] },
  { id: "quimica_inorganica", nombre: "Química Inorgánica", cuatri: "2-1", anio: 2, requiere: ["quimica_general", "algebra", "analisis1"] },
  { id: "fisica_b", nombre: "Física B", cuatri: "2-1", anio: 2, requiere: ["fisica_a", "analisis2", "algebra", "analisis1"] },
  { id: "quimica_analitica", nombre: "Química Analítica General", cuatri: "2-2", anio: 2, requiere: ["quimica_inorganica", "quimica_general"] },
  { id: "anatomia", nombre: "Anatomía Humana", cuatri: "2-2", anio: 2, requiere: ["bio_general"] },
  { id: "quimica_organica2", nombre: "Química Orgánica II", cuatri: "2-2", anio: 2, requiere: ["quimica_organica1", "quimica_general"] },

  // TERCER AÑO
  { id: "fisicoquimica", nombre: "Fisicoquímica", cuatri: "3-1", anio: 3, requiere: ["quimica_inorganica", "fisica_b", "quimica_general", "fisica_a", "analisis2"] },
  { id: "histologia", nombre: "Histología", cuatri: "3-1", anio: 3, requiere: ["quimica_organica2", "anatomia", "quimica_organica1"] },
  { id: "quimica_biologica1", nombre: "Química Biológica I", cuatri: "3-1", anio: 3, requiere: ["quimica_organica2", "quimica_organica1"] },
  { id: "estadistica", nombre: "Estadística", cuatri: "3-2", anio: 3, requiere: ["analisis2", "algebra", "analisis1"] },
  { id: "bio_celular", nombre: "Biología Celular y Molecular", cuatri: "3-2", anio: 3, requiere: ["quimica_biologica1", "anatomia", "quimica_organica2"] },
  { id: "microbiologia", nombre: "Microbiología General", cuatri: "3-2", anio: 3, requiere: ["histologia", "quimica_biologica1", "anatomia", "quimica_organica2"] },

  // CUARTO AÑO
  { id: "fisiologia", nombre: "Fisiología Humana", cuatri: "4-1", anio: 4, requiere: ["histologia", "bio_celular", "quimica_biologica1", "anatomia"] },
  { id: "quimica_instrumental", nombre: "Química Analítica Instrumental", cuatri: "4-1", anio: 4, requiere: ["fisicoquimica", "estadistica", "quimica_analitica", "quimica_organica1"] },
  { id: "inmunologia", nombre: "Inmunología", cuatri: "4-1", anio: 4, requiere: ["bio_celular", "quimica_biologica1"] },
  { id: "fisiopatologia", nombre: "Fisiopatología Humana", cuatri: "4-2", anio: 4, requiere: ["fisiologia", "inmunologia", "histologia", "bio_celular", "microbiologia"] },
  { id: "micro_clinica", nombre: "Microbiología Clínica", cuatri: "4-2", anio: 4, requiere: ["microbiologia", "inmunologia", "histologia", "bio_celular"] },
  { id: "parasitologia", nombre: "Parasitología Humana", cuatri: "4-2", anio: 4, requiere: ["microbiologia", "inmunologia", "histologia", "bio_celular"] },

  // QUINTO AÑO
  { id: "micologia", nombre: "Micología", cuatri: "5-1", anio: 5, requiere: ["microbiologia", "inmunologia", "histologia", "bio_celular"] },
  { id: "bromatologia", nombre: "Bromatología y Nutrición", cuatri: "5-1", anio: 5, requiere: ["quimica_instrumental", "microbiologia", "quimica_analitica", "bio_celular"] },
  { id: "farmacologia", nombre: "Farmacología para Bioquímica", cuatri: "5-1", anio: 5, requiere: ["fisiopatologia", "fisiologia", "inmunologia"] },
  { id: "toxicologia", nombre: "Toxicología y Química Legal", cuatri: "5-2", anio: 5, requiere: ["farmacologia", "bromatologia", "fisiologia", "microbiologia"] },
  { id: "epistemologia", nombre: "Epistemología y Metodología de la Investigación", cuatri: "5-2", anio: 5, requiere: ["fisicoquimica", "quimica_inorganica", "fisica_b"] },
  { id: "bioquimica_clinica", nombre: "Bioquímica Clínica", cuatri: "5-2", anio: 5, requiere: ["micro_clinica", "parasitologia", "micologia", "fisiopatologia", "quimica_instrumental", "estadistica", "fisiologia", "microbiologia"] },

  // SEXTO AÑO
  { id: "practica", nombre: "Práctica Profesional", cuatri: "6-1", anio: 6, requiere: ["bioquimica_clinica", "micro_clinica", "parasitologia", "micologia"] },
  { id: "control_calidad", nombre: "Control de Calidad", cuatri: "6-1", anio: 6, requiere: ["bioquimica_clinica"] },
  { id: "orientacion_clinica", nombre: "Orientación Clínica", cuatri: "6-1", anio: 6, requiere: ["bioquimica_clinica", "fisiopatologia"] },
  { id: "orientacion_ambiental", nombre: "Orientación Ambiental", cuatri: "6-1", anio: 6, requiere: ["bioquimica_clinica", "toxicologia"] },
];

let aprobadas = JSON.parse(localStorage.getItem("aprobadas")) || [];

function render() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  const porAnio = {};

  materias.forEach(m => {
    if (!porAnio[m.anio]) {
      porAnio[m.anio] = { "1": [], "2": [] };
    }
    const cuatri = m.cuatri.endsWith("1") ? "1" : "2";
    porAnio[m.anio][cuatri].push(m);
  });

  for (const anio in porAnio) {
    const anioBox = document.createElement("div");
    anioBox.className = "anio";
    anioBox.dataset.anio = anio;

    const titulo = document.createElement("h2");
    titulo.textContent = `Año ${anio}`;
    anioBox.appendChild(titulo);

    for (const cuatri of ["1", "2"]) {
      const cuatriBox = document.createElement("div");
      cuatriBox.className = "cuatrimestre";

      const h3 = document.createElement("h3");
      h3.textContent = cuatri === "1" ? "1º Cuatrimestre" : "2º Cuatrimestre";
      cuatriBox.appendChild(h3);

      const lista = document.createElement("div");
      lista.className = "materias";

      porAnio[anio][cuatri].forEach(mat => {
        const div = document.createElement("div");
        div.className = "materia";
        div.textContent = mat.nombre;
        div.dataset.id = mat.id;
        lista.appendChild(div);
      });

      cuatriBox.appendChild(lista);
      anioBox.appendChild(cuatriBox);
    }

    contenedor.appendChild(anioBox);
  }

  aplicarEstado();
}

function aplicarEstado() {
  document.querySelectorAll(".materia").forEach(el => {
    const id = el.dataset.id;
    el.classList.remove("bloqueada", "aprobada");

    const materia = materias.find(m => m.id === id);
    const requiere = materia.requiere || [];

    const cumplidas = requiere.every(r => aprobadas.includes(r));

    if (!cumplidas) {
      el.classList.add("bloqueada");
    } else {
      if (aprobadas.includes(id)) {
        el.classList.add("aprobada");
      }
    }

    el.onclick = () => {
      if (el.classList.contains("bloqueada")) return;

      if (aprobadas.includes(id)) {
        aprobadas = aprobadas.filter(x => x !== id);
      } else {
        aprobadas.push(id);
      }

      localStorage.setItem("aprobadas", JSON.stringify(aprobadas));
      aplicarEstado();
    };
  });
}

render();
