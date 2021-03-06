// @flow

import React, { Component } from 'react'
import { observer } from 'mobx-react'

import Container from '../../components/Container'
import BugBounyLink from '../../components/BugBounyLink'

type Props = {
  error: Error,
  componentStack: string,
};

@observer
class ErrorScreen extends Component<Props> {
  componentDidMount() {
    const { error, componentStack } = this.props
    console.error('error', error)
    console.error('componentStack', componentStack)
  }
  render() {
    const { error } = this.props
    return (
      <Container>
        <div className="error-screen">
          <div className="page-title">
            <h1>There was an error rendering the app</h1>
          </div>
          <p>We appologize for any inconvinience. Please try to restart the app again,
            and if the error continue, follow the steps at <BugBounyLink />
          </p>
          <h2 style={{ marginTop: 20 }}>Error description:</h2>
          <p className="error">{error.message}</p>
        </div>
      </Container>
    )
  }
}

export default ErrorScreen
