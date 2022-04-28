import React from "react";
import { Container } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <Container className="my-3">
      <h2 className="text-danger">1. Authentication vs Authorization?</h2>
      <p>
        Authentication is the process of verifying the user to access the
        specific application, files or data. Authentication works throught the
        passwords, biomareic informatin or other informatin provide the user.
        The first goals of authenticatin is to access the application.
      </p>
      <p>
        On the other hand authorization determines a user can access which area.
        Authorization always always take place after authentication.
        Authorization is visible or changeable.
      </p>

      <h2 className="text-danger">2. Why we use firebase authentication?</h2>
      <p>
        Google firebase is the google-backed application development software
        tht enable developer IOS, android or web application. Firebase provides
        tools for tracking analytics, reporting or fixing applicatin crashes.
      </p>
      <p>
        Googele analytics provides data about user behaviour that help to make
        business decision. Authentication make easy for developer build secure
        authentication system. Firebase performance monitoring service gives
        instance performance report that is help to developer for improve the
        application.Firebase crashlytics is another useful feature for
        application development. This tools chicking the application errors and
        issues in the real time that can affect the quality and experience of
        the user.
      </p>
      <h2 className="text-danger">3. Services of firebase authenticatin?</h2>
      <h4>Firebase provide the following services</h4>
      <ul>
        <li>Cloud messing for cross-platform application</li>
        <li>Higher website trafic with application indexing</li>
        <li>Secured web hosting</li>
        <li>Higher accesssibility to machine learning applicatin</li>

        <li>Cresh reporting for swift bugs fixing</li>
        <li>Optimize the applicatin performance</li>
        <li>Push notificatin for target messaging</li>
      </ul>
    </Container>
  );
};

export default Blogs;
