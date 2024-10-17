import {
  Heading,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export default function LoginPage() {
  return (
    <Tabs>
      <TabList>
        <Tab>Login</Tab>
        <Tab>Register</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
        </TabPanel>
        <TabPanel>
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormLabel>Password</FormLabel>
            <Input type="password" />
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" />
          </FormControl>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
