// Re-export `NextStudioHead` as default if you're happy with the default behavior
// export { NextStudioHead } from 'next-sanity/studio/head'

// To customize it, use it as a children component:
// import { NextStudioHead } from 'next-sanity/studio/head'

export default function CustomStudioHead ()
{
  return (
    <>
      <title>CSM Portfolio Content Studio111</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/assets/images/logo-black.png" />
      {/* <NextStudioHead favicons={ true } />       */}
    </>
  )
}