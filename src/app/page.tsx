
"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="Websites Que Generan Ventas Inmediatas"
              subheadline="Crear y rediseñar sitios web optimizados con IA, para principiantes y empresas que deseen convertir más online."
              cta1="Comienza a Vender"
            />

            <How
              step1Title="Paso 1: Inicio Gratuito"
              step1Desc="Comienza tu website con Ai 100% optimizado."
              step2Title="Paso 2: Mejora tu Ventas"
              step2Desc="Rediseña tu tienda online para incrementar conversiones."
              step3Title="Paso 3: Ventas Efectivas"
              step3Desc="Transforma tu sitio en una maquina de vender."
            />

            <Aboutus
              headline="WebGo: Convierte Visitas en Ventas"
              subheadline="Creamos sitios web centrados en ventas, no en diseño, superando los obstáculos de la competencia."
              beneficiotitulo1="Sitios Web Gratis"
              beneficio1="Optimizados por IA para principiantes con aspiraciones profesionales"
              beneficiotitulo2="Rediseño Revolucionario"
              beneficio2="Eliminamos problemas, priorizamos funcionalidad y ventas"
              
              
            />

            <Services
              heading="Incrementa Tus Conversiones Online"
              description="Sitios web gratis para principiantes con optimización profesional 100% enfocada en ventas. No más diseños ineficientes, el rediseño perfecto te está esperando."
              services={[{"name":"Creación de Sitios Web","icon":"globe","description":"Sitios web potentes y orientados a la venta."},{"name":"Rediseño de Sitios Web","icon":"refresh","description":"Transformamos tu web para maximizar las ventas."},{"name":"Optimización con AI","icon":"robot","description":"Websites inteligentes para una máxima conversión."},{"name":"Web Gratis para Novatos","icon":"gift","description":"Lánzate online sin coste y empieza a vender."}]}
            />
<BeforeAndAfter subheadline=""Transformando ideas en realidad con calidad y excelencia digital"" />

            <Faq
              faqs={[{"pregunta":"¿Qué puede hacer WebGo por mi negocio online?","respuesta":"WebGo puede transformar tu presencia online al crear o rediseñar tu sitio web. Nos especializamos en optimización de conversión y SEO, asegurándonos de que tu sitio no solo se vea atractivo, sino que también funcione para atraer y convertir visitantes en clientes. Además, para aquellos que recién están empezando, ofrecemos un sitio web gratuito, diseñado profesionalmente y 100% optimizado."},{"pregunta":"¿Por qué necesito un sitio web optimizado para la conversión?","respuesta":"Un sitio web debe ser más que solo bonito. Debe ser una herramienta efectiva de ventas y marketing. En WebGo, diseñamos sitios web que están optimizados para convertir visitantes en clientes, lo que significa más ingresos para tu negocio. Cada elemento de tu sitio será diseñado cuidadosamente con las mejores prácticas de conversión en mente."},{"pregunta":"Tengo un sitio web pero no está dando resultados, ¿puede WebGo ayudarme?","respuesta":"¡Absolutamente! En WebGo, somos expertos en rediseñar sitios web para mejorar su rendimiento. Analizaremos tu sitio actual, identificaremos áreas de mejora y crearemos un nuevo diseño centrado en la conversión y optimizado para SEO. Con nuestro rediseño, tu sitio web se convertirá en una poderosa herramienta de ventas."},{"pregunta":"¿Qué significa que un sitio web está 'optimizado para SEO'?","respuesta":"Optimizado para SEO significa que tu sitio web está diseñado y configurado de tal manera que es fácil para los motores de búsqueda como Google encontrar y clasificar tu contenido. En WebGo, incorporamos técnicas de optimización de SEO en todos nuestros diseños web para aumentar la visibilidad de tu sitio en los resultados de búsqueda, atrayendo más tráfico y potenciales clientes a tu negocio."},{"pregunta":"Soy nuevo en la venta online, ¿puede WebGo ayudarme a empezar?","respuesta":"¡Por supuesto! En WebGo, nos apasiona ayudar a las nuevas empresas a tener éxito online. Ofrecemos un sitio web gratuito para aquellos que recién están comenzando, lo que te proporciona una plataforma profesional y optimizada desde el primer día. Te ayudaremos a establecer tu presencia online y a empezar a atraer y convertir clientes."}]}
            />

            <BookAppointment
              heading="Acelera tu Negocio Online"
              description="Descubre cómo WebGo puede transformar tu sitio web, optimizando la conversión y potenciando tus ventas."
            />
<Footer />
    </main>
  );
}
    