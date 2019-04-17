import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Editor } from 'slate-react'
import { Value } from 'slate'

const EditorFrame = styled.div`
  width: 500px;
  margin: 1rem;
  border: 1px solid #999;
`

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'A line of text in a paragraph.'
              }
            ]
          }
        ]
      }
    ]
  }
})

import(/* webpackChunkName: "test" */ './test')

class App extends Component {
  state = {
    value: initialValue
  }

  onChange = ({ value }) => {
    this.setState({ value })
  }

  render() {
    return (
      <div>
        <p>test editor</p>
        <EditorFrame>
          <Editor value={this.state.value} onChange={this.onChange} />
        </EditorFrame>
      </div>
    )
  }
}

App.propTypes = {}
App.defaultProps = {}

export default App
