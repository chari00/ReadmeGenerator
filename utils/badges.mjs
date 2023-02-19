function badges(licenseType) {
  if (licenseType === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n`;
  } else if (licenseType === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)\n\n`;
  } else if (licenseType === "PDDL") {
    return `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)\n\n`;
  } else {
    //error wrong selection
    return `no license selected from options`;
  }
}

export default badges;
