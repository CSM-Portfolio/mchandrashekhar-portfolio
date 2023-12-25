import { defineCliConfig } from 'sanity/cli'

import { projectId, dataset } from "./lib/sanity.client";

export default defineCliConfig( {
  api: {
    projectId,
    dataset,
  }
} )
