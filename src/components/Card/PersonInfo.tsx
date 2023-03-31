import { TPeople } from '../../types/component';

function PersonInfo(props: TPeople) {
  return (
    <>
      <h1 className="fullname">{props.name}</h1>
      <div className="info">
        <div className="work">
          <p className="profession">Work: {props.profession}</p>
          <p className="company">{props.company ? `Company: ${props.company}` : ''}</p>
        </div>
        <p className="age">{props.age} years old</p>
      </div>
    </>
  );
}

export default PersonInfo;
