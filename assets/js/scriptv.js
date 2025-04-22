document.addEventListener("DOMContentLoaded", () => {
    // Definir el array dentro del bloque
    const propiedades_enventa = [
        {
          nombre: 'Apartamento de lujo en zona exclusiva',
          src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
          descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
          ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
          habitaciones: 4,
          banos: 4,
          costo: 5000,
          smoke: false,
          pets: true
        },
        {
          nombre: 'Apartamento acogedor en la montaña',
          src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
          descripcion: 'HEste apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
          ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
          habitaciones: 2,
          banos: 1,
          costo: 1200,
          smoke: true,
          pets: true
        },
        {
          nombre: 'Penthouse de lujo con terraza panorámica',
          src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
          descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
          ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
          habitaciones: 3,
          banos: 3,
          costo: 4500,
          smoke: false,
          pets: true
        },
      ];
  
    let htmlEnVenta = "";
  
    for (const propiedad of propiedades_enventa) {
      htmlEnVenta += `
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
  
    const contenedor = document.querySelector("#en-venta");
  
    if (contenedor) {
      contenedor.innerHTML = htmlEnVenta;
    } else {
      console.error("No se encontró el contenedor con ID #en-venta");
    }
  });
  
