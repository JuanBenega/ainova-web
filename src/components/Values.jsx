import SectionTitle from "./SectionTitle"



const Values = () => {
  return (
    <section className="section">
        <div className="container">
        <SectionTitle
          badge="Valores"
          title="Lo que nos mueve"
          text="Nuestros valores son el corazón de nuestra empresa y eso lo hace un lugar especial"
        />
            <div className="valuesPopup"></div>
        </div>
    </section>
  )
}

export default Values
