const Phrase = ({english, foreign}) => {
  return (
    <div className="Phrase">
      <div>{english}</div>
      <div className="Phrase-big">→</div>
      <div>{foreign}</div>
    </div>
  )
}

export default Phrase