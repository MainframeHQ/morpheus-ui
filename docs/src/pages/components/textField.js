//@flow
import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'
import { Button, Row, Column, TextField, Text } from '@morpheus-ui/core'
import CircleArrowRight from '@morpheus-ui/icons/CircleArrowRight'
import { WalletsMd, WalletsMdFilled } from '@morpheus-ui/icons'
import { Form } from '@morpheus-ui/forms'

import SyntaxHighlighter from 'react-native-syntax-highlighter'
import styled from 'styled-components/native'
import Layout from '../../components/Layout'

const importStatement = "import { TextField } from '@morpheus-ui/core'"

const normalButtonCode =
  "import { Button } from '@morpheus-ui/core'\n\n<Button \n onPress={action('clicked')} \n title='Normal button'\n/>"

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

const Background = styled.View`
  padding: 50px;
`
const Container = styled.View`
  display: flex;
  align-items: center;
  margin-top: 10px;
`
const CodeContainer = styled.View`
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: ${props => props.theme.codeContainer} !important;
`

export default class NormalButtonExample extends Component {
  render() {
    return (
      <Layout>
        <Background>
          <Text variant="h2">{'TextField'}</Text>
          <Row inner>
            <Text variant="h3">{'Import statement'}</Text>
          </Row>
          <Row inner>
            <Column lg={12}>
              <CodeContainer>
                <SyntaxHighlighter
                  customStyle={{ backgroundColor: '#fff' }}
                  language="javascript"
                  highlighter={'prism'}>
                  {importStatement}
                </SyntaxHighlighter>
              </CodeContainer>
            </Column>
          </Row>

          <Form onSubmit={action('clicked')}>
            <Row size={2} inner>
              <Column>
                <TextField name="name" label="Name" required />
              </Column>
              <Column>
                <CodeContainer>
                  <SyntaxHighlighter
                    customStyle={{ backgroundColor: '#fff' }}
                    language="javascript"
                    highlighter={'prism'}>
                    {
                      '<TextField\n  name="name"\n  label="Name"\n  required\n/>'
                    }
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
            </Row>
          </Form>
          <Form onSubmit={action('clicked')}>
            <Row size={2} inner>
              <Column>
                <TextField
                  type="email"
                  placeholder="put the vault name here"
                  name="email"
                  label="Email"
                  required
                />
              </Column>
              <Column>
                <CodeContainer>
                  <SyntaxHighlighter
                    customStyle={{ backgroundColor: '#fff' }}
                    language="javascript"
                    highlighter={'prism'}>
                    {
                      '<TextField\n  name="email"\n  type="email"\n  placeholder="put the vault name here"\n  label="Email"\n  required\n/>'
                    }
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
            </Row>
          </Form>
          <Form>
            <Row size={2} inner>
              <Column>
                <TextField
                  name="password"
                  type="password"
                  label="Password"
                  required
                />
              </Column>
              <Column>
                <CodeContainer>
                  <SyntaxHighlighter
                    customStyle={{ backgroundColor: '#fff' }}
                    language="javascript"
                    highlighter={'prism'}>
                    {
                      '<TextField\n  name="password"\n  type="password"\n  label="password"\n  required\n/>'
                    }
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
            </Row>
          </Form>
          <Form>
            <Row size={2} inner>
              <Column>
                <TextField
                  name="message"
                  label="Message"
                  multiline
                  required
                  numberOfLines={6}
                />
              </Column>
              <Column>
                <CodeContainer>
                  <SyntaxHighlighter
                    customStyle={{ backgroundColor: '#fff' }}
                    language="javascript"
                    highlighter={'prism'}>
                    {
                      '<TextField\n  name="message"\n  label="Message"\n  multiline\n  required\n  numberOfLines={6}\n/>'
                    }
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
            </Row>
          </Form>
          <Form>
            <Row size={2} inner>
              <Column>
                <TextField
                  name="disabled"
                  label="disabled"
                  required
                  disabled
                  defaultValue="This field can't be edited"
                />
              </Column>
              <Column>
                <CodeContainer>
                  <SyntaxHighlighter
                    customStyle={{ backgroundColor: '#fff' }}
                    language="javascript"
                    highlighter={'prism'}>
                    {
                      '<TextField\n  name="disabled"\n  label="disabled"\n  required\n  disabled\n  defaultValue="This field can\'t be edited"\n/>'
                    }
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
            </Row>
          </Form>
          <Form>
            <Row size={2} inner>
              <Column>
                <TextField
                  name="outlined"
                  label="Outlined"
                  required
                  variant="outlined"
                />
              </Column>
              <Column>
                <CodeContainer>
                  <SyntaxHighlighter
                    customStyle={{ backgroundColor: '#fff' }}
                    language="javascript"
                    highlighter={'prism'}>
                    {
                      '<TextField\n  name="outlined"\n  label="Outlined"\n  required\n  variant="outlined"\n/>'
                    }
                  </SyntaxHighlighter>
                </CodeContainer>
              </Column>
            </Row>
          </Form>
        </Background>
      </Layout>
    )
  }
}
