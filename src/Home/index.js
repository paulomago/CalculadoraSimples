import React from 'react';
import {StatusBar, SafeAreaView, Text} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  Container,
  ScrollView,
  Footer,
  Engine,
  Body,
  SectionContainer,
  SectionTitle,
  SectionDescription,
  Highlight,
} from './styles';

export default function Home() {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          {global.HermesInternal == null ? null : (
            <Engine>
              <Footer>Engine: Hermes</Footer>
            </Engine>
          )}
          <Body>
            <SectionContainer>
              <SectionTitle>Step One</SectionTitle>
              <Text>
                Edit <Highlight>App.js</Highlight> to change this screen and
                then come back to see your edits.
              </Text>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>See Your Changes</SectionTitle>
              <SectionDescription>
                <ReloadInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>Debug</SectionTitle>
              <SectionDescription>
                <DebugInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>Learn More</SectionTitle>
              <SectionDescription>
                Read the docs to discover what to do next:
              </SectionDescription>
            </SectionContainer>
            <LearnMoreLinks />
          </Body>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}
