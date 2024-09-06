import { extendTheme } from "@chakra-ui/react";
import config from "./config";
import styles from "./styles";
import colors from "./colors";
import fonts from "./fonts";
import buttonStylesConf from "./components/buttonStylesConf";
import textStylesConf from "./components/textStylesConf";
import headingStylesConf from "./components/headingStylesConf";
import inputStylesConf from "./components/inputStylesConf";
import checkboxStylesConf from "./components/checkboxStylesConf";
import numberInputStylesConf from "./components/numberInputStylesConf";
import radioStylesConf from "./components/radioStylesConf";
import selectStyleConf from "./components/selectStylesConf";
import switchStylesConf from "./components/switchStylesConf";
import textAreaStylesConf from "./components/textAreaStylesConf";
import { EDXErrorPageTheme } from "../../pages/EDXErrorPage.theme";

const lightTheme = extendTheme({
    fonts,
    config,
    colors,
    styles,
    components: {
        Button: buttonStylesConf,
        Text: textStylesConf,
        Heading: headingStylesConf,
        Input: inputStylesConf,
        Checkbox: checkboxStylesConf,
        NumberInput: numberInputStylesConf,
        Radio: radioStylesConf,
        Select: selectStyleConf,
        Switch: switchStylesConf,
        Textarea: textAreaStylesConf,
        EDXErrorPageTheme,
    },
})

export default lightTheme