import {
  PaperProvider,
  MD3LightTheme,
  useTheme,
  DefaultTheme,
} from "react-native-paper";
import App from "../../App";
import { light } from "../theme";

// const theme = {
//   ...MD3LightTheme,
//   colors: {
//     ...MD3LightTheme.colors,
//     primary: "#3498db",
//     accent: "#f1c40f",
//   },
// };

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};
export type AppTheme = typeof theme;
export const useAppTheme = () => useTheme<AppTheme>();
export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}
