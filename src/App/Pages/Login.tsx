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

const IconStyle = `ml-1`;

export function SignInHeader() {
  const { tokens } = useTheme();

  return (
    <Heading level={3} padding={`${tokens.space.xl} ${tokens.space.xl} 0`}>
      sign in to the win jar
      <SentimentVerySatisfiedOutlinedIcon className={IconStyle} />
    </Heading>
  );
}

const components = {
  SignIn: {
    Header: SignInHeader,
  },
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
      <Grid templateColumns={{ base: "1fr 0", medium: "1fr 1fr" }}>
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

        <View height="100vh">
          <Image
            src="https://images.unsplash.com/photo-1495954222046-2c427ecb546d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1600&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tcHV0ZXJzfHx8fHx8MTYzNzE5MzE2MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900"
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
