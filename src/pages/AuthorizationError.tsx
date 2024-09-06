import { Box, Button, Flex, Text, useStyleConfig } from "@chakra-ui/react";

interface AuthorizationErrorPageProps {
  backUrl: string;
  primaryButtonLabel: string;
}

const AuthorizationErrorPage = ({
  backUrl,
  primaryButtonLabel,
}: AuthorizationErrorPageProps) => {
  const styles = useStyleConfig("EDXErrorPageTheme");
  return (
    <Flex className="authorization-error-container" __css={styles}>
      <Flex className="content-container">
        <Box className="error-code-container">
          <Text fontWeight="700">
            You do not have permissions to access this page.
          </Text>
        </Box>
        <Box className="error-description">
          <Text>
            If you think this is an error, contact your System Administrator.
          </Text>
        </Box>
        <Flex className="buttons-container">
          <Button
            as="a"
            href={backUrl}
            size="md"
            className="primary-button"
            variant="primaryBlue600"
          >
            {primaryButtonLabel}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AuthorizationErrorPage;
