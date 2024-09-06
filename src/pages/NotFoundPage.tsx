import EDXErrorPage from "./EDXErrorPage";

interface NotFoundPageProps {
  height: string;
  minHeight: string;
  width: string;
  minWidth: string;
  primaryButtonLabel: string;
  primaryButtonBackUrl: string;
  secondaryButtonLabel?: string;
  secondaryButtonBackUrl?: string;
}

const NotFoundPage = ({
  height,
  minHeight,
  width,
  minWidth,
  primaryButtonLabel,
  primaryButtonBackUrl,
  secondaryButtonLabel,
  secondaryButtonBackUrl,
}: NotFoundPageProps) => {
  return (
    <EDXErrorPage
      errorStatus="404"
      height={height}
      minHeight={minHeight}
      width={width}
      minWidth={minWidth}
      primaryButtonLabel={primaryButtonLabel}
      primaryButtonBackUrl={primaryButtonBackUrl}
      secondaryButtonLabel={secondaryButtonLabel}
      secondaryButtonBackUrl={secondaryButtonBackUrl}
    />
  );
};

export default NotFoundPage;
