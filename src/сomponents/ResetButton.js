function ResetButton({ onClick, style}) {
  
  return (
    <div>
      <button style={style} onClick={onClick}>
        Reset
      </button>
    </div>
  )
}

export default ResetButton
