import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container">
      <h1 className="text-center text-dark fw-bolder my-5">QNA</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Difference between authorization and authentication?
          </Accordion.Header>
          <Accordion.Body>
            <div className="row">
              <div className="col-md-6">
                <h5>Authentication</h5>
                <ul>
                  <li>Certifies who the owner is.</li>
                  <li>First move to identify user.</li>
                  <li>This is seen by and changeable.</li>
                  <li>It take Process of user login details.</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5>Authorization</h5>
                <ul>
                  <li>Sets what are the resources can a user access.</li>
                  <li>Authorization take place after Authentication.</li>
                  <li>Authorization content is not seen by a user.</li>
                  <li>
                    This sets user benefits and gives security to details.
                  </li>
                </ul>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase is a excellent tool to develop mobile and web applications.
            It provides fast user sign-in process and Authentication. Tracks
            every footstep towards application analytics. It makes easy
            development workload and time. It makes backend works easier. helps
            with features like storage, hosting, authetication and many more.
            There are many other options to implement authentication like Parse,
            back4app, AWS Amplify, Kuzzle, Couchbase, NativeScript etc.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What other services does firebase provide other than authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase gives other than authentication are backend services, SDK's
            and UI libraries to applications. It gives developer to deploy
            project and host like a real link. And also, Storage is a great
            feature of firebase , which help us a lot. Google analytics provide
            valuable information which includes in firebase. Cloud messaging,
            Cloud Storage are also loving feature of Google Firebase.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
