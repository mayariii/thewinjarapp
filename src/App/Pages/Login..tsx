import {
  Authenticator,
  Flex,
  Grid,
  useTheme,
  View,
  Image,
  Heading,
} from "@aws-amplify/ui-react";
import React from "react";

export function SignInHeader() {
  const { tokens } = useTheme();

  return (
    <Heading level={3} padding={`${tokens.space.xl} ${tokens.space.xl} 0`}>
      Sign in to your Account
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

  return (
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
  );
};

Login.displayName = "Login";
export default Login;
