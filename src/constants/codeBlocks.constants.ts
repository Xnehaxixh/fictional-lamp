export const FIELD_CONFIG = {
  motion: {
    moveSteps: {
      name: "moveSteps",
      fields: {
        steps: {
          name: "steps",
        },
      },
    },
    turnRight: {
      name: "turnRight",
      fields: {
        steps: {
          name: "steps",
        },
      },
    },
    turnLeft: {
      name: "turnLeft",
      fields: {
        steps: {
          name: "steps",
        },
      },
    },
    goToAutomaticPosition: {
      name: "goToAutomaticPosition",
      fields: {
        position: {
          name: "position",
        },
      },
    },
    goToManualPosition: {
      name: "goToManualPosition",
      fields: {
        x: {
          name: "x",
        },
        y: {
          name: "y",
        },
      },
    },
    glideToAutomaticPosition: {
      name: "glideToAutomaticPosition",
      fields: {
        secs: {
          name: "secs",
        },
        position: {
          name: "position",
        },
      },
    },
    glideToManualPosition: {
      name: "glideToManualPosition",
      fields: {
        secs: {
          name: "secs",
        },
        x: {
          name: "x",
        },
        y: {
          name: "y",
        },
      },
    },
    pointInManualDirection: {
      name: "pointInManualDirection",
      fields: {
        direction: {
          name: "direction",
        },
      },
    },
    pointInAutomaticDirection: {
      name: "pointInAutomaticDirection",
      fields: {
        position: {
          name: "position",
        },
      },
    },
    changeX: {
      name: "changeX",
      fields: {
        x: {
          name: "x",
        },
      },
    },
    setX: {
      name: "setX",
      fields: {
        x: {
          name: "x",
        },
      },
    },
    changeY: {
      name: "changeY",
      fields: {
        y: {
          name: "y",
        },
      },
    },
    setY: {
      name: "setY",
      fields: {
        y: {
          name: "y",
        },
      },
    },
    bounceOnEdge: {
      name: "bounceOnEdge",
    },
    setRotationStyle: {
      name: "setRotationStyle",
      fields: {
        style: {
          name: "style",
        },
      },
    },
    xPosition: {
      name: "xPosition",
    },
    yPosition: {
      name: "yPosition",
    },
    direction: {
      name: "direction",
    },
  },
  looks: {
    sayFor: {
      name: "sayFor",
      fields: {
        message: {
          name: "message",
        },
        duration: {
          name: "duration",
        },
      },
    },
    say: {
      name: "say",
      fields: {
        message: {
          name: "message",
        },
      },
    },
    thinkFor: {
      name: "thinkFor",
      fields: {
        message: {
          name: "message",
        },
        duration: {
          name: "duration",
        },
      },
    },
    think: {
      name: "think",
      fields: {
        message: {
          name: "message",
        },
      },
    },
    switchCostume: {
      name: "switchCostume",
      fields: {
        costume: {
          name: "costume",
        },
      },
    },
    nextCostume: {
      name: "nextCostume",
    },
    switchBackdrop: {
      name: "switchBackdrop",
      fields: {
        backdrop: {
          name: "backdrop",
        },
      },
    },
    nextBackdrop: {
      name: "nextBackdrop",
    },
    changeSize: {
      name: "changeSize",
      fields: {
        size: {
          name: "size",
        },
      },
    },
    setSize: {
      name: "setSize",
      fields: {
        size: {
          name: "size",
        },
      },
    },
    changeColorEffect: {
      name: "changeColorEffect",
      fields: {
        effect: {
          name: "effect",
        },
        value: {
          name: "value",
        },
      },
    },
    setColorEffect: {
      name: "setColorEffect",
      fields: {
        effect: {
          name: "effect",
        },
        value: {
          name: "value",
        },
      },
    },
    clearEffects: {
      name: "clearEffects",
    },
    show: {
      name: "show",
    },
    hide: {
      name: "hide",
    },
    goToLayer: {
      name: "goToLayer",
      fields: {
        layer: {
          name: "layer",
        },
      },
    },
    goForwardLayers: {
      name: "goForwardLayers",
      fields: {
        layers: {
          name: "layers",
        },
      },
    },
    costumeNumber: {
      name: "costumeNumber",
      fields: {
        identifier: {
          name: "identifier",
        },
      }
    },
    backdropNumber: {
      name: "backdropNumber",
      fields: {
        identifier: {
          name: "identifier",
        },
      }
    },
    size: {
      name: "size",
    },
  },
  events: {
    whenGreenFlag: {
      name: "whenGreenFlag",
    },
    whenKeyPressed: {
      name: "whenKeyPressed",
      fields: {
        key: {
          name: "key",
        },
      },
    },
    whenSpriteClicked: {
      name: "whenSpriteClicked",
    },
    whenBackdropSwitches: {
      name: "whenBackdropSwitches",
      fields: {
        backdrop: {
          name: "backdrop",
        },
      },
    },
    whenCriteriaGreaterThan: {
      name: "whenCriteriaGreaterThan",
      fields: {
        criteria: {
          name: "criteria",
        },
        value: {
          name: "value",
        },
      },
    },
    whenIReceive: {
      name: "whenIReceive",
      fields: {
        message: {
          name: "message",
        },
      },
    },
    broadcast: {
      name: "broadcast",
      fields: {
        message: {
          name: "message",
        },
      },
    },  
    broadcastAndWait: {
      name: "broadcastAndWait",
      fields: {
        message: {
          name: "message",
        },
      },
    },
  },
  control: {
    wait: {
      name: "wait",
      fields: {
        secs: {
          name: "secs",
        },
      },
    },
    repeat: {
      name: "repeat",
      fields: {
        times: {
          name: "times",
        },
      },
    },
    forever: {
      name: "forever",
    },
    if: {
      name: "if",
      fields: {
        condition: {
          name: "condition",
        },
      },
    },
    ifElse: {
      name: "ifElse",
      fields: {
        condition: {
          name: "condition",
        },
      },
    },
    waitUntil: {
      name: "waitUntil",
      fields: {
        condition: {
          name: "condition",
        },
      },
    },
    repeatUntil: {
      name: "repeatUntil",
      fields: {
        condition: {
          name: "condition",
        },
      },
    },
    stopAll: {
      name: "stopAll",
    },
    whenIStartAsAClone: {
      name: "whenIStartAsAClone",
    },
    createCloneOf: {
      name: "createCloneOf",
      fields: {
        sprite: {
          name: "sprite",
        },
      },
    },
    deleteThisClone: {
      name: "deleteThisClone",
    },
  },
};

export const automaticValueOptions = [
  { value: "random", label: "random position" },
  { value: "mouse", label: "mouse-pointer" },
];
