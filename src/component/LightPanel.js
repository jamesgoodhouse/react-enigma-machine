import classNames from 'classnames';
import './LightPanel.css';

function LightPanel(props) {
  return (
    <div className="LightPanel">
      Light Panel
      {[...props.lights.keys()].map(k => (
        <Light
          key={k}
          letter={k}
          illuminated={props.lights.get(k)}
        />
      ))}
    </div>
  );
}

function Light(props) {
  return (
    <div
      className={
        classNames(
          "Light",
          {
            illuminated: props.illuminated,
          }
        )
      }
    >
      {props.letter}
    </div>
  );
}

export default LightPanel;
