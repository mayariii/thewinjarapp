import {
  Authenticator,
  ThemeProvider,
  Flex,
  Grid,
  useTheme,
  View,
  Image,
  Heading,
  Theme,
} from "@aws-amplify/ui-react";
import React from "react";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import * as styles from "../../styles";
import HeroImage from "./product-hero.png";

const HeaderStyle = `${styles.typographyPrimaryAccent} ${styles.fontWeightMedium}`;
const IconStyle = `ml-1`;

export function SignInHeader() {
  const { tokens } = useTheme();

  return (
    <Flex
      justifyContent={"center"}
      padding={`${tokens.space.xl} ${tokens.space.xl}`}
    >
      <Heading level={3}>
        <span className={HeaderStyle}>
          the win jar
          <SentimentVerySatisfiedOutlinedIcon
            fontSize="large"
            className={IconStyle}
          />
        </span>
      </Heading>
    </Flex>
  );
}

const components = {
  Header: SignInHeader,
};

export interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const { tokens } = useTheme();

  const theme: Theme = {
    name: "Login Theme",
    tokens: {
      colors: {
        font: {
          interactive: {
            value: styles.secondaryHex,
          },
        },
        brand: {
          primary: {
            "10": { value: styles.primaryAccentHoverHex },
            "80": { value: styles.primaryAccentHex },
            "90": { value: styles.primaryAccentHoverHex },
            "100": { value: styles.primaryAccentHoverHex },
          },
        },
      },
      components: {
        authenticator: {
          router: {
            borderColor: { value: "transparent" },
          },
        },
        tabs: {
          item: {
            _focus: {
              color: {
                value: styles.primaryAccentHex,
              },
            },
            _hover: {
              color: {
                value: styles.primaryAccentHoverHex,
              },
            },
            _active: {
              borderColor: {
                value: styles.primaryAccentHex,
              },
              color: {
                value: styles.primaryAccentHex,
              },
            },
          },
        },
        button: {
          _hover: {
            backgroundColor: { value: styles.primaryAccent100Hex },
            color: { value: styles.primaryHex },
          },
          primary: {
            backgroundColor: { value: styles.primaryAccentHex },
            _hover: {
              backgroundColor: { value: styles.primaryAccentHoverHex },
            },
          },
          link: {
            _hover: {
              backgroundColor: { value: styles.primaryAccent100Hex },
              color: { value: styles.primaryHex },
            },
          },
          menu: {
            _hover: {
              backgroundColor: { value: styles.primaryAccent100Hex },
            },
          },
        },
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        templateColumns={{ base: "1fr", large: "1fr 1fr" }}
        rowGap={{ base: "20px" }}
      >
        <Flex
          backgroundColor={tokens.colors.background.secondary}
          justifyContent="center"
        >
          <Authenticator components={components}>
            {({ signOut, user }) => (
              <main>
                <h1>Hello {user?.username || "👋"}</h1>
                <button onClick={signOut}>Sign out</button>
              </main>
            )}
          </Authenticator>
        </Flex>

        <View height={{ base: "50vh", medium: "100vh" }}>
          <Image
            src={HeroImage}
            width="100%"
            height="100%"
            objectFit="cover"
            alt={"hero image"}
          />
        </View>
      </Grid>
    </ThemeProvider>
  );
};

Login.displayName = "Login";
export default Login;
