import Typography from "typography"
import Theme from "typography-theme-moraga"

Theme.googleFonts.push({
// Noto Sans JP フォントを利用する
  name: "Noto+Sans+JP",
  styles: ["400"],
})
Theme.bodyFontFamily = ["Noto Sans JP", "Roboto", "serif"]
const typography = new Typography(Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale