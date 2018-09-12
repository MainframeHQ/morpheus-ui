/* eslint-disable react/jsx-sort-props */

/**
 * @flow
 */

import React from 'react'
import UIExplorer, {
  Description,
  DocItem,
  Section,
  storiesOf,
} from '../../../ui-explorer'
import NormalButton from './examples/NormalButton'
import DisabledButton from './examples/DisabledButton'
import OutlinedButton from './examples/OutlinedButton'

const ButtonScreen = () => (
  <UIExplorer title="Button" url="1-components/Button">
    <Description>Displays a customizable button</Description>
    <Section title="Props">
      <DocItem name="...View props" />
      <DocItem
        description="The default button style."
        example={{
          render: () => <NormalButton />,
        }}
      />
      <DocItem
        name="disabled"
        typeInfo="?boolean = false"
        description="Don't allow button press."
        example={{
          render: () => <DisabledButton />,
        }}
      />
      <DocItem
        name="outlineStyle"
        typeInfo="?boolean = true"
        description="Default outlined style."
        example={{
          render: () => <OutlinedButton />,
        }}
      />
    </Section>
  </UIExplorer>
)

storiesOf('Components', module).add('Button', ButtonScreen)
