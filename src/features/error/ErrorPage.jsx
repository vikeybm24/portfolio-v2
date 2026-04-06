import { useTheme } from "../../context/ThemeContext";

function ErrorPage() {
  const { theme } = useTheme();

  return (
    <div
      className={` flex h-[100vh] items-center justify-center theme-${theme} bg-mainBg text-textColor`}
    >
      <p className="text-2xl font-bold p-8 glass rounded-2xl text-center">
        Oops! Something went wrong. <br />
        <span className="text-sm font-normal text-white/60">
          This could be due to GitHub API rate limits. Please try again in an hour.
        </span>
      </p>
    </div>
  );
}

export default ErrorPage;
