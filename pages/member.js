import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/content'
import Fetch from '../components/fetch'

class Member extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Content title="Add member" />
          <div style={{ margin: "300px", marginTop: "100px", marginLeft: "100px" }}>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Name</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="text" placeholder="Name" style={{ padding: "0.5rem" }} />
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Contact name</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="text" placeholder="Firstname" style={{ padding: "0.5rem" }} />
                  </p>
                </div>
                <div class="field">
                  <p class="control is-expanded">
                    <input class="input" type="text" placeholder="Lastname" />
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Phone</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="text" placeholder="Phone number" style={{ padding: "0.5rem" }} />
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Address1</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea class="textarea" placeholder="Address1"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Address2</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea class="textarea" placeholder="Address2"></textarea>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </Layout>
      </div>
    )
  }
}

export default Member