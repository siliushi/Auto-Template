const BasicGenerator = require('../../BasicGenerator');

class Generator extends BasicGenerator {
  writing() {
    this.writeFiles({
      context: {
        name: this.name
      },
      filterFiles: f => {
        return true;
      },
    });
  }
}

module.exports = Generator;
