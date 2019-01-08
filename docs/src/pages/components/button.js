import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import { Button, Row, Column, Text } from '@morpheus-ui/core'
import CircleArrowRight from '@morpheus-ui/icons/CircleArrowRight'
import { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import styled from 'styled-components/native'
import Layout from '../../components/Layout'

const importStatement = "import { Button } from '@morpheus-ui/core'"

const normalButtonCode =
  "import { Button } from '@morpheus-ui/core'\n\n<Button \n onPress={action('clicked')} \n title='Normal'\n/>"

const iconButtonCode =
  "import { Button } from '@morpheus-ui/core'\nimport CircleArrowRight from '@morpheus-ui/icons/CircleArrowRight'\n\n<Button \n onPress={action('clicked')} \n title='Icon Button' \n Icon={CircleArrowRight} \n/>"

const smallButtonCode =
  "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button \n onPress={action('clicked')} \n title='Small Button' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'small'}\n/>"

const largeButtonCode =
  "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button \n onPress={action('clicked')} \n title='Large Button' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'large'}\n/>"

const disabledButtonCode =
  "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button \n onPress={action('clicked')} \n title='Disabled Button' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'disabled'}\n/>"

const iconTopButtonCode =
  "import { Button } from '@morpheus-ui/core'\nimport { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'\n\n<Button \n onPress={action('clicked')} \n title='Icon Top' \n Icon={WalletsMd} \n HoverIcon={WalletsMdFilled} \n variant={'icon-top'}\n/>"

const noBorderButtonCode =
  "import { Button } from '@morpheus-ui/core'\nimport { CircleArrowRight } from '@morpheus-ui/icons'\n\n<Button \n onPress={action('clicked')} \n title='No Border' \n Icon={CircleArrowRight} \n variant={'no-border'}\n/>"

const hoverShadowButtonCode =
  "import { Button } from '@morpheus-ui/core'\nimport { CircleArrowRight } from '@morpheus-ui/icons'\n\n<Button \n onPress={action('clicked')} \n title='Hover Shadow' \n Icon={CircleArrowRight}\n variant={['no-border', 'hover-shadow']}\n/>"

const buttons = [
  {
    code: normalButtonCode,
    title: 'Normal button',
    toRender: <Button onPress={action('clicked')} title="Normal Button" />,
  },
  {
    code: iconButtonCode,
    title: 'Icon button',
    toRender: (
      <Button
        onPress={action('clicked')}
        title="Icon Button"
        Icon={CircleArrowRight}
      />
    ),
  },
  {
    code: smallButtonCode,
    title: 'Small button',
    toRender: (
      <Button
        onPress={action('clicked')}
        title="Small Button"
        Icon={WalletsMd}
        HoverIcon={WalletsMdFilled}
        variant="small"
      />
    ),
  },
  {
    code: largeButtonCode,
    title: 'Large button',
    toRender: (
      <Button
        onPress={action('clicked')}
        title="Large Button"
        Icon={WalletsMd}
        HoverIcon={WalletsMdFilled}
        variant="large"
      />
    ),
  },
  {
    code: disabledButtonCode,
    title: 'Disabled button',
    toRender: (
      <Button
        onPress={action('clicked')}
        title="Disabled"
        Icon={WalletsMd}
        HoverIcon={WalletsMdFilled}
        disabled
      />
    ),
  },
  {
    code: iconTopButtonCode,
    title: 'Icon top',
    toRender: (
      <Button
        onPress={action('clicked')}
        title="Icon Top"
        Icon={WalletsMd}
        HoverIcon={WalletsMdFilled}
        variant="icon-top"
      />
    ),
  },
  {
    code: noBorderButtonCode,
    title: 'Borderless button',
    toRender: (
      <Button
        onPress={action('clicked')}
        title="No Border"
        Icon={CircleArrowRight}
        variant="no-border"
      />
    ),
  },
  {
    code: hoverShadowButtonCode,
    title: 'Hover shadow',
    toRender: (
      <Button
        onPress={action('clicked')}
        title="Hover Shadow"
        Icon={CircleArrowRight}
        variant={['no-border', 'hover-shadow']}
      />
    ),
  },
]

const Background = styled.View`
  padding: 50px;
`
const Container = styled.View`
  padding: 0 0 30px 0;
`
const CodeContainer = styled.View`
  padding: 10px 20px;
  margin-bottom: 30px;
  background-color: ${props => props.theme.codeContainer} !important;
`

export default class NormalButtonExample extends Component {
  render() {
    return (
      <Layout>
        <Background>
          <Text variant="h2">{'Button'}</Text>
          <Row inner>
            <Text variant="h3">{'Import statement'}</Text>
          </Row>
          <Row inner>
            <Column lg={10}>
              <SyntaxHighlighter
                customStyle={{ backgroundColor: '#fff' }}
                language="javascript"
                highlighter={'prism'}>
                {importStatement}
              </SyntaxHighlighter>
            </Column>
          </Row>
          {buttons.map(button => (
            <>
              <Row inner>
                <Column sm={3}>
                  <Container>
                    <Text variant="h3">{button.title}</Text>
                  </Container>
                  {button.toRender}
                </Column>
                <Column lg={7}>
                  <CodeContainer>
                    <SyntaxHighlighter
                      customStyle={{ backgroundColor: '#fff' }}
                      language="javascript"
                      highlighter={'prism'}>
                      {button.code}
                    </SyntaxHighlighter>
                  </CodeContainer>
                </Column>
              </Row>
            </>
          ))}
        </Background>
      </Layout>
    )
  }
}
