
const SectionTitle = ({badge, title, text}) => {
  return (
    <section className="titleSection">
          <p className="badge">{badge}</p>
          <h1 className="title">{title}</h1>
          <p className="titleText">
            {text}
          </p>
        </section>
  )
}

export default SectionTitle;
