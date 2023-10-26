import { Fragment } from "react";

export default function CoreConcept(props) {
  return (
    <Fragment>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </Fragment>
  );
}
