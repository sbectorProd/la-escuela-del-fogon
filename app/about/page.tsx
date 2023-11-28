import Card from "./Cards"

export default function About() {
    return (
        <section id="about" className="bg-[#DBDBDB] w-full py-14 px-8 lg:px-40 min-h-screen flex flex-col place-content-center overflow-hidden">
            <div className="pb-6 xl:pb-20">
                <h1 className="text-lg lg:text-xl pb-4 text-center">
                    About
                </h1>
                <p className="text-xs lg:text-sm font-thin">
                    La escuela del fogón es un colectivo que observa analiza y propone Ejercicios de resistencia desde las pedagogías de la cocina con el fin de compartir metodologías replicables de acción
                </p>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-9">
                <Card miembro='SAMUEL MORALES'>
                    Investigador de sistemas visuales y formas con un interés especial en proyectos editoriales. Diseñador gráfico y de tipografía. Morales ha sido premiado por A! Diseño, COMEX Trends, Diseña México y el Museo Franz Mayer.</Card>
                <Card miembro="DEA LÓPEZ">
                    Curadora de arte, investigadora y cocinera especializada en estética relacional y proyectos de arte socialmente comprometidos. Fundadora de Co.Merr. López ha trabajado anteriormente con MACBA (España), FoodCultura (España), Galerie Nordenhake, Museo Amparo (México), Museo de Arte de Zapopan (México) y la Colección FEMSA (México).
                </Card>
                <Card miembro="SAÚL BECERRA">
                    Productor de arte contemporáneo y museógrafo especializado en medios digitales y electrónicos. Interesado particularmente en la política de compartir conocimiento libre en internet. Becerra ha trabajado con artistas como Alinka Echeverría, Andrea Galvani, Alejandro Almanza, Javier M. Rodríguez, Leiko Ikemura, Mark Bradford y Donna Huanca.
                </Card>
            </div>
        </section>
    )
}