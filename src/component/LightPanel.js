import './LightPanel.css';

function LightPanel(props) {
  const lights = props.lights.map((light) =>
    <Light
      key={light}
      letter={light}
    />
  );

  return (
    <div className="LightPanel">
      Light Panel
      {lights}
    </div>
  );
}

function Light(props) {
  return (
    <div className="Light">
      {props.letter}
    </div>
  );
}

export default LightPanel;
