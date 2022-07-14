import { ThemeContext } from "../contexts";

export const WithTheme = (WrappedComponent) => {
  return () => {
    return (
      <ThemeContext.Consumer>
        {({ currentTheme, setTheme }) => (
          <WrappedComponent currentTheme={currentTheme} setTheme={setTheme} />
        )}
      </ThemeContext.Consumer>
    );
  };
};
