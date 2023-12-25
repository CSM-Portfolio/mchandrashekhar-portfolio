import { defineConfig, WorkspaceOptions } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { getDefaultDocumentNode } from './structure';
import Logo from './components/Logo';
import StudioNavbar from './components/StudioNavbar';
import { projectId, dataset } from "./lib/sanity.client";
import { FaCode } from "react-icons/fa";

export default defineConfig<WorkspaceOptions>( {
  basePath: '/studio',
  name: 'Portfolio_Blog_Studio',
  title: 'Portfolio Content Studio',
  icon: FaCode,
  projectId: projectId!,
  dataset: dataset!,
  plugins: [
    deskTool( {
      defaultDocumentNode: getDefaultDocumentNode
    } ),
    visionTool() ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  }
} )
