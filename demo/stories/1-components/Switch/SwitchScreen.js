import React, { Component } from 'react'

import UIExplorer, {
  Description,
  DocItem,
  Section,
  storiesOf,
} from '../../../ui-explorer'

import NormalSwitch from './examples/NormalSwitch'
import DefaultSwitch from './examples/DefaultSwitch'
import DisabledSwitch from './examples/DisabledSwitch'
import DarkSwitch from './examples/DarkSwitch'
import ControlSwitch from './examples/ControlSwitch'

class SwitchScreen extends Component<{}> {
  render() {
    return (
      <UIExplorer title="Switch" url="/components/Switch.js">
        <Description>Displays a customizable switch button</Description>
        <Section title="Props">
          <DocItem
            name="onPress"
            typeInfo="?Function"
            description="The normal switch style with onPress prop. Defaults to off (left)."
            example={{
              render: () => <NormalSwitch />,
            }}
          />
          <DocItem
            name="control"
            description="Control switch behavior externally (in example the bottom switch is controlled by top switch). Overrides defaultState prop."
            typeInfo="?Function"
            example={{
              render: () => <ControlSwitch />,
            }}
          />
          <DocItem
            name="defaultState"
            typeInfo="?boolean"
            description="Change the default start state of the switch."
            example={{
              render: () => <DefaultSwitch />,
            }}
          />
          <DocItem
            name="disabled"
            description="Disabled switch."
            typeInfo="?boolean"
            example={{
              render: () => <DisabledSwitch />,
            }}
          />
          <DocItem
            name="dark"
            description="Dark switch for light backgrounds."
            typeInfo="?boolean"
            example={{
              render: () => <DarkSwitch />,
            }}
          />
        </Section>
      </UIExplorer>
    )
  }
}

storiesOf('Components', module).add('Switch', () => <SwitchScreen />)
