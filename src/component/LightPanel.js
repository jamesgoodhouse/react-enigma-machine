import classNames from 'classnames';
import './LightPanel.css';

function LightPanel(props) {
  const lightComponents = []

  for (const [letter, illum] of props.lights) {
    lightComponents.push(
      <Light
        key={letter}
        letter={letter}
        illuminated={illum}
      />
    )
  }

  return (
    <div className="LightPanel">
      Light Panel
      {lightComponents}
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
