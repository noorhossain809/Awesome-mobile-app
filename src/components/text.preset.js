import { colors } from "../theme/colors";
import { typography } from "../theme/typography";

const BASE = {
    fontFamily: typography.Regular,
    fontSize: 28,
    color: colors.white
}

const BOLD = {
    fontFamily: typography.primary,
    fontSize: 32,
    color: colors.darkBlue
}

const BASE_BOLD = {
    fontFamily: typography.primary,
    fontSize: 16,

}

export const presets = {
    default : BASE,
    bold: BOLD,
    h1:{
        ...BOLD,
        fontSize: 32
    },
    h4:{
        ...BASE_BOLD,
        fontSize: 16
    }
}