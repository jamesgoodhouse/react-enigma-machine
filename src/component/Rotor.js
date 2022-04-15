export const Rotors = {
  EnigmaI: {
    I: {
      id:            'I',
      encoding:      'EKMFLGDQVZNTOWYHXUSPAIBRCJ',
      turnoverNotch: 'Q',
    },
    II: {
      id:            'II',
      encoding:      'AJDKSIRUXBLHWTMCQGZNPYFVOE',
      turnoverNotch: 'E',
    },
    III: {
      id:            'III',
      encoding:      'BDFHJLCPRTXVZNYEIWGAKMUSQO',
      turnoverNotch: 'V',
    },
  }
}

export const Reflectors = {
  A: {
    id:       'A',
    encoding: 'ENKQAUYWJICOPBLMDXZVFTHRGS',
  },
  B: {
    id:       'B',
    encoding: 'YRUHQSLDPXNGOKMIEBFZCWVJAT',
  },
  C: {
    id:       'C',
    encoding: 'FVPJIAOYEDRZXWGCTKUQSBNMHL',
  },
}

export default function Rotor(props) {
  return (
    <div className="Rotor">
      Rotor {props.id} <input type="number" min="1" max="26" defaultValue="1" />
    </div>
  );
}
