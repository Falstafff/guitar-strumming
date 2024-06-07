import Strumming from './components/strumming';
import {GuitarPlayer} from "./components/utils/player/guitar-player";
import {Bar} from "./common/types";
import {RhythmMachine} from "./components/utils/rhythm-machine";

const data = [
  {
    "bpm": 80,
    "noteLength": 0.125,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "Intro",
    "bars": [
      {
        "0": {
          "direction": "down-up",
          "accent": "high",
          "chord": [
            "A2",
            "E3",
            "A3",
            "C4",
            "E4"
          ]
        },
        "1": {
          "direction": "muted",
          "accent": "low",
          "chord": [
            "A2",
            "E3",
            "A3",
            "C4",
            "E4"
          ]
        },
        "2": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "A2",
            "E3",
            "A3",
            "C4",
            "E4"
          ]
        },
        "3": {
          "direction": "muted",
          "accent": "low",
          "chord": [
            "A2",
            "E3",
            "A3",
            "C4",
            "E4"
          ]
        },
        "2.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "A2",
            "E3",
            "A3",
            "C4",
            "E4"
          ]
        }
      }
    ]
  },
  {
    "bpm": 80,
    "noteLength": 0.125,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "Intro",
    "bars": [
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2": {
          "direction": "top-down",
          "accent": "high",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "0.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      }
    ]
  },
  {
    "bpm": 120,
    "noteLength": 0.0625,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "Intro",
    "bars": [
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1.75": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.5": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3.5": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      },
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1.75": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.5": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3.5": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      }
    ]
  },
  {
    "bpm": 80,
    "noteLength": 1 / 8,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "Down-Down-Up-Up-Down-Up",
    "bars": [
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      }
    ]
  },
  {
    "bpm": 80,
    "noteLength": 1 / 8,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "Down-Up-Muted Down-Up",
    "bars": [
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "muted",
          "accent": "high",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]

        },
        "2": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3": {
          "direction": "muted",
          "accent": "high",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]

        },
      },
      {
        "0.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      }
    ]
  },
  {
    "bpm": 80,
    "noteLength": 1 / 8,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "Down-Down-Up-Up-Down",
    "bars": [
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
      },
      {
        "1.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      }
    ]
  },
  {
    "bpm": 120,
    "noteLength": 1 / 8,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "Island Strum",
    "bars": [
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
      },
      {
        "1.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      }
    ]
  },
  {
    "bpm": 80,
    "noteLength": 0.125,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "Calypso Strum",
    "bars": [
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "0.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      }
    ]
  },
  {
    "bpm": 80,
    "noteLength": 1 / 8,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "Country Strum (Boom-Chicka)",
    "bars": [
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "muted",
          "accent": "high",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]

        },
        "2": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
      },
      {
        "1.5": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.5": {
          "direction": "muted",
          "accent": "high",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]

        },
        "3.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      }
    ]
  },
  {
    "bpm": 80,
    "noteLength": 0.125,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "Rock Strum",
    "bars": [
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      }
    ]
  },
  {
    "bpm": 80,
    "noteLength": 0.125,
    "signature": {
      "beatsPerMeasure": 3,
      "noteValue": 4
    },
    "name": "Waltz Strum",
    "bars": [
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      }
    ]
  },
  {
    "bpm": 120,
    "noteLength": 1 / 16,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "Funk Strum",
    "bars": [
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "muted",
          "accent": "high",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]

        },
        "2": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3": {
          "direction": "muted",
          "accent": "high",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ],
        },
        "0.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      },
    ]
  },
  {
    "bpm": 100,
    "noteLength": 1 / 16,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "Flamenco Rumba Strum",
    "bars": [
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "muted",
          "accent": "high",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]

        },
        "2": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3": {
          "direction": "muted",
          "accent": "high",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]

        },
        "0.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      }
    ]
  },
  {
    "bpm": 100,
    "noteLength": 1/8,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "Reggae Strum",
    "bars": [
      {
        "0.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      }
    ]
  },
  {
    "bpm": 80,
    "noteLength": 1/8,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "Syncopated Strum",
    "bars": [
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "0.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      }
    ]
  },
  {
    "bpm": 80,
    "noteLength": 1/8,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "7th/9th Chord Strum",
    "bars": [
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "muted",
          "accent": "high",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]

        },
        "2": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3": {
          "direction": "muted",
          "accent": "high",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]

        },
        "0.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      }
    ]
  },
  {
    "bpm": 80,
    "noteLength": 1/8,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "Triplet Strum",
    "bars": [
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "0.333": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "0.666": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1.333": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1.666": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.333": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.666": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3.333": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "3.666": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      }
    ]
  },
  {
    "bpm": 80,
    "noteLength": 0.0625,
    "signature": {
      "beatsPerMeasure": 4,
      "noteValue": 4
    },
    "name": "Dotted Rhythm Strum",
    "bars": [
      {
        "0": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1": {
          "direction": "muted",
          "accent": "high",
          "chord": []
        },
        "3": {
          "direction": "top-down",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "1.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        },
        "2.5": {
          "direction": "down-up",
          "accent": "low",
          "chord": [
            "G3",
            "B3",
            "D4",
            "G4",
            "B4",
            "G5"
          ]
        }
      }
    ]
  }
]

function App() {
  const guitarPlayer = new GuitarPlayer();

  return (
    <>
      {data.map(({name, bpm, noteLength, bars, signature}, index) => {
        const rm = new RhythmMachine(
          bpm,
          noteLength,
          signature,
          bars.length
        );

        return (
          <Strumming
            name={name}
            bpm={bpm}
            noteLength={noteLength}
            externalBars={bars}
            guitarPlayer={guitarPlayer}
            rhythmMachine={rm}
            key={index}
          />
        )
      })}
    </>
  )
}

export default App
