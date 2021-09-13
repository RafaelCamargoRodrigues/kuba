'use strict'

const fs = require('fs')
const root = require('./package.json')

const workspaces = root 
  .workspaces
  .packages
  .map(w => w.slice(0, -2))

const packages = workspaces
  .map(w =>
    fs.readdirSync(w, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name)
  )

const listener = (workspace, pkg) =>
  `${workspace}/${pkg}/**/*`

const command = (pkg) =>
  `yarn workspace @${root.name}/${pkg} lint-staged --allow-empty`

const mapper = workspaces
  .reduce((object, workspace, index) =>
    (packages[index].forEach(pkg => object[listener(workspace, pkg)] = command(pkg)), object), {})

module.exports = mapper
