let theme = {
  primary : "#5550a2",
  secondary : "#eae7fe",
  background : "#ffffff",
  chatBackgroundImage : "",
  textColor:"rgba(0,0,0,0.72)"
}   

const themeMaker = (primary, secondary, background, chatBackgroundImage, textColor) => {
  return {
    primary,
    secondary,
    background,
    chatBackgroundImage,
    textColor
  }   
    
}
export default theme