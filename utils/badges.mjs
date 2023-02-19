function badges(License) {
  const licenseBadge = {
    MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    Mozilla:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    PDDL: `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`,
  };
  return licenseBadge(License);
}

function links(License) {
  const licenseLink = {
    MIT: `https://opensource.org/license/mit/`,
    Mozilla: `https://opensource.org/license/mpl-2-0/`,
    PDDL: `https://opendatacommons.org/licenses/pddl/`,
  };
  return licenseLink(License);
}

export default badges;
