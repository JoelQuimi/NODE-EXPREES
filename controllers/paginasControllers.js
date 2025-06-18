import { Testimonial } from "../models/Testimoniales.js";
import { Viaje } from "../models/Viaje.js";

const paginaInico = async (req, res) => {
  //Consultar viajes

  const promiseDB = [];

  //Se consulta a la base de datos de viajes y se lo envia a inicio
  promiseDB.push(Viaje.findAll({ limit: 3 }));
  //Se consulta a la base de datos de Testimonio y se lo envia a inicio
  promiseDB.push(Testimonial.findAll({ limit: 3 }));

  try {
    const resultado = await Promise.all(promiseDB);

    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes: resultado[0],
      testimoniales: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (req, res) => {
  // CONSULTAR A LA BASE DE BATOS
  const viajes = await Viaje.findAll();

  res.render("viajes", {
    pagina: "Proximo",
    viajes,
  });
};

const paginaTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimonial.findAll();

    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
};

// Detalle de viajes

const paginaDetalleViaje = async (req, res) => {
  const { slug } = req.params;

  try {
    const viaje = await Viaje.findOne({ where: { slug } });
    res.render("viaje", {
      pagina: "Información Viaje",
      viaje,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  paginaInico,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje,
};
