document.addEventListener("DOMContentLoaded", () => {
    const propiedades_alquiler = [
      {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 MainStreet, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 1900,
        smoke: false,
        pets: true
      },
      {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banos: 2,
        costo: 2500,
        smoke: true,
        pets: true
      },
      {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '789 Pine Lane, Suburbia, CA 01234',
        habitaciones: 2,
        banos: 2,
        costo: 2200,
        smoke: false,
        pets: false
      }
    ];
  
    let htmlDisponibles = "";
  
    for (const propiedad of propiedades_alquiler) {
      htmlDisponibles += `
        <div class="col">
          <div class="card h-100">
            <img src="${propiedad.src}" alt="${propiedad.nombre}" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">${propiedad.nombre}</h5>
              <p class="card-text">
                <i class="fas fa-info-circle"></i> ${propiedad.descripcion}
              </p>
              <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
              <p>
                <i class="fas fa-bed"></i> ${propiedad.habitaciones}
                <i class="fas fa-bath"></i> ${propiedad.banos}
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
              <p class="${propiedad.smoke ? '' : 'text-danger'}">
                <i class="fas ${propiedad.smoke ? '' : 'fa-smoking-ban'}"></i> ${propiedad.smoke ? 'Se permite fumar' : 'No se permite fumar'}
              </p>
              <p class="${propiedad.pets ? 'text-success' : 'text-muted'}">
                <i class="fas fa-paw"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
              </p>
            </div>
          </div>
        </div>
      `;
    }
  
    const contenedor = document.querySelector("#alquileres-disponibles");
  
    if (contenedor) {
      contenedor.innerHTML = htmlDisponibles;
    } else {
      console.error("❌ No se encontró el contenedor con ID #alquileres-disponibles");
    }
  });
  
